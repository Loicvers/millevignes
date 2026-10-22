// Fichier privé des partenaires : calcule le point de chaque domaine sur toutes les cartes des fiches.
// Usage : node tools/cartes/partenaires.mjs liste.json > mes-partenaires.json   (GEO = /tmp/geo, comme carte.mjs)
// liste.json (privé, hors dépôt) : [{ nom, commune, dep, communeGeo?, region, appellations }]
// Cartes de sous-régions : projection lue dans data-proj (carte.mjs). Carte de France (402) : Lambert-93 calé sur ses villes repères.
import fs from "fs";
import { loadFichesJs } from "../migrate-fiches.mjs";

const GEO = process.env.GEO || "/tmp/geo";
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[-'’ ]+/g, " ").trim().replace(/^(la|le|les|l) /, "");
const deps = {};
const commune = (nom, dep) => {
  deps[dep] ??= JSON.parse(fs.readFileSync(`${GEO}/c${dep}.geojson`));
  const f = deps[dep].features.find(f => norm(f.properties.nom) === norm(nom));
  if (!f) throw new Error(`commune introuvable : ${nom} (${dep})`);
  const ring = (f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates).map(p => p[0]).sort((a, b) => b.length - a.length)[0];
  return [ring.reduce((t, p) => t + p[0], 0) / ring.length, ring.reduce((t, p) => t + p[1], 0) / ring.length];
};

// Lambert-93 (EPSG:2154), formule directe de l'IGN.
const L93 = ([lon, lat]) => {
  const e = 0.0818191910428158, n = 0.725607765053267, c = 11754255.426096, r = Math.PI / 180, phi = lat * r;
  const L = Math.log(Math.tan(Math.PI / 4 + phi / 2) * ((1 - e * Math.sin(phi)) / (1 + e * Math.sin(phi))) ** (e / 2));
  const R = c * Math.exp(-n * L), g = n * (lon - 3) * r;
  return [700000 + R * Math.sin(g), 12655612.049876 - R * Math.cos(g)];
};
const VILLES = { Paris: "75", Lille: "59", Strasbourg: "67", Lyon: "69", Marseille: "13", Toulouse: "31", Nantes: "44" };
function calageFrance(svg) { // x = a·X + b, y = −a·Y + d, moindres carrés sur les villes repères
  const pts = [...svg.matchAll(/<rect x="([\d.]+)" y="([\d.]+)"[^>]*\/><text[^>]*>([^<]+)<\/text>/g)].filter(m => VILLES[m[3]])
    .map(m => [L93(commune(m[3], VILLES[m[3]])), [+m[1] + 2, +m[2] + 2]]);
  const mean = a => a.reduce((t, v) => t + v, 0) / a.length;
  const mX = mean(pts.map(p => p[0][0])), mY = mean(pts.map(p => p[0][1])), mx = mean(pts.map(p => p[1][0])), my = mean(pts.map(p => p[1][1]));
  const a = pts.reduce((t, [[X, Y], [x, y]]) => t + (X - mX) * (x - mx) - (Y - mY) * (y - my), 0) / pts.reduce((t, [[X, Y]]) => t + (X - mX) ** 2 + (Y - mY) ** 2, 0);
  const err = Math.max(...pts.map(([[X, Y], [x, y]]) => Math.hypot(a * (X - mX) + mx - x, -a * (Y - mY) + my - y)));
  if (pts.length < 5 || err > 3) throw new Error(`calage de la carte de France douteux (${pts.length} villes, écart ${err.toFixed(1)} px)`);
  return ll => { const [X, Y] = L93(ll); return [a * (X - mX) + mx, -a * (Y - mY) + my]; };
}

const liste = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const cartes = loadFichesJs("fiches.js").FICHES.filter(f => f.source === "france" && /viewBox="/.test(f.schema?.svg ?? "")).map(f => {
  const svg = f.schema.svg, [, , W, H] = svg.match(/viewBox="([^"]+)"/)[1].split(/[ ,]+/).map(Number), m = svg.match(/data-proj="([^"]+)"/);
  if (m) { const [x0, y1, k, s] = m[1].split(",").map(Number); return { id: f.id, W, H, proj: ([lon, lat]) => [(lon - x0) * k * s, (y1 - lat) * s] }; }
  return f.id === 402 ? { id: f.id, W, H, proj: calageFrance(svg) } : null;
}).filter(Boolean);

const partenaires = liste.map(p => {
  const ll = commune(p.communeGeo ?? p.commune, p.dep), points = {};
  for (const c of cartes) { const [x, y] = c.proj(ll); if (x >= 0 && y >= 0 && x <= c.W && y <= c.H) points[c.id] = [+x.toFixed(1), +y.toFixed(1)]; }
  return { nom: p.nom, commune: p.commune, region: p.region, appellations: p.appellations, ll: ll.map(v => +v.toFixed(5)), points }; // ll : recalcul côté site si une carte change de cadrage
});
process.stdout.write(JSON.stringify({ app: "millevignes-partenaires", version: 1, partenaires }, null, 1) + "\n");
