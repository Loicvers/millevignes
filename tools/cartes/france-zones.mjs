// Carte de France (fiche 402) : zones = départements par région, réécrites sur le SVG existant (calé sur ses villes repères).
// Contrôle : node france-zones.mjs france.svg "<noms dans l’ordre des zones>"  → départements de chaque zone.
// Réécriture : node france-zones.mjs france.svg "<noms>" "$(cat tools/cartes/france.json)" out.svg
import fs from "fs";
const svg = fs.readFileSync(process.argv[2], "utf8");
const L93 = ([lon, lat]) => { const e=0.0818191910428158,n=0.725607765053267,c=11754255.426096,r=Math.PI/180,phi=lat*r;
  const L=Math.log(Math.tan(Math.PI/4+phi/2)*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2)),R=c*Math.exp(-n*L),g=n*(lon-3)*r; return [700000+R*Math.sin(g),12655612.049876-R*Math.cos(g)]; };
const deps = JSON.parse(fs.readFileSync("/tmp/geo/dep.geojson")).features;
const cen = f => { const pts=(f.geometry.type==="Polygon"?[f.geometry.coordinates]:f.geometry.coordinates).map(p=>p[0]).sort((a,b)=>b.length-a.length)[0]; return [pts.reduce((t,p)=>t+p[0],0)/pts.length, pts.reduce((t,p)=>t+p[1],0)/pts.length]; };
const comm = (nom, d) => cen(JSON.parse(fs.readFileSync(`/tmp/geo/c${d}.geojson`)).features.find(f=>f.properties.nom===nom));
const V = { Paris:"75", Lille:"59", Strasbourg:"67", Lyon:"69", Marseille:"13", Toulouse:"31", Nantes:"44" };
const pts=[...svg.matchAll(/<rect x="([\d.]+)" y="([\d.]+)"[^>]*\/><text[^>]*>([^<]+)<\/text>/g)].filter(m=>V[m[3]]).map(m=>[L93(comm(m[3],V[m[3]])),[+m[1]+2,+m[2]+2]]);
const mean=a=>a.reduce((t,v)=>t+v,0)/a.length,mX=mean(pts.map(p=>p[0][0])),mY=mean(pts.map(p=>p[0][1])),mx=mean(pts.map(p=>p[1][0])),my=mean(pts.map(p=>p[1][1]));
const a=pts.reduce((t,[[X,Y],[x,y]])=>t+(X-mX)*(x-mx)-(Y-mY)*(y-my),0)/pts.reduce((t,[[X,Y]])=>t+(X-mX)**2+(Y-mY)**2,0);
const P=ll=>{const[X,Y]=L93(ll);return[a*(X-mX)+mx,-a*(Y-mY)+my]};
const zones=[...svg.matchAll(/<path fill-opacity="([\d.]+)" d="([^"]+)"/g)].map(m=>m[2].split(/(?=[MZ])/).filter(s=>s[0]==="M").map(s=>s.slice(1).replace(/Z$/,"").split("L").map(p=>p.split(",").map(Number))));
const NOMS=(process.argv[3]||"").split(",");
const inside=(pt,ring)=>{let c=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const[xi,yi]=ring[i],[xj,yj]=ring[j];if((yi>pt[1])!==(yj>pt[1])&&pt[0]<(xj-xi)*(pt[1]-yi)/(yj-yi)+xi)c=!c}return c};
const res={};for(const f of deps){const p=P(cen(f));zones.forEach((z,i)=>{if(z.some(r=>inside(p,r)))(res[NOMS[i]||i]??=[]).push(f.properties.code+" "+f.properties.nom)})}
console.log(pts.length,"villes calées");for(const k in res)console.log(k,":",res[k].join(", "));
// Mode réécriture : node depzones.mjs france.svg NOMS '{"Sud-Ouest":["24",...]}' out.svg
if (process.argv[4]) {
  const { createRequire } = await import("module"); const pc = createRequire("/tmp/geo/")("polygon-clipping");
  const want = JSON.parse(process.argv[4]); let out = svg, i = -1;
  out = out.replace(/<path fill-opacity="([\d.]+)" d="([^"]+)"/g, (all, op) => { i++; const d = want[NOMS[i]]; if (!d) return all;
    const g = pc.union(...deps.filter(f => d.includes(f.properties.code)).map(f => f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates));
    const path = g.map(poly => poly.map(r => { const q = []; for (const p of r) { const [x, y] = P(p).map(Math.round); const l = q[q.length - 1]; if (!l || l[0] !== x || l[1] !== y) q.push([x, y]); } return q.length > 3 ? "M" + q.map(p => p.join(",")).join("L") + "Z" : ""; }).join("")).join("");
    return `<path fill-opacity="${op}" d="${path}"`; });
  fs.writeFileSync(process.argv[5], out);
}
