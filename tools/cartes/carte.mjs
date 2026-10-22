// Carte de sous-régions à légender : zones = union de communes IGN, fleuves Natural Earth, villes repères.
// Usage : node carte.mjs config.json > out.svg   (manquants signalés sur stderr)
import fs from "fs";
import { createRequire } from "module";
// Données téléchargées dans GEO (défaut /tmp/geo) : c<dép>.geojson (communes, france-geojson), dep.geojson (départements simplifiés),
// rivers.geojson et riv_eu.geojson (Natural Earth 10m), node_modules/polygon-clipping (npm i polygon-clipping).
const GEO = process.env.GEO || "/tmp/geo";
const pc = createRequire(GEO + "/")("polygon-clipping");

const cfg = JSON.parse(fs.readFileSync(process.argv[2]));
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[-'’ ]+/g, " ").trim().replace(/^(la|le|les|l) /, "");
const communes = {};
for (const d of cfg.deps) for (const f of JSON.parse(fs.readFileSync(`${GEO}/c${d}.geojson`)).features) communes[d + ":" + norm(f.properties.nom)] = f.geometry;
const polys = g => g.type === "Polygon" ? [g.coordinates] : g.coordinates;
const find = (name, ds = cfg.deps) => { for (const d of ds) { const g = communes[d + ":" + norm(name)]; if (g) return g; } console.error("MANQUANT", name); return null; };

const terre = cfg.clipDep ? JSON.parse(fs.readFileSync(GEO + "/dep.geojson")).features.filter(f => cfg.clipDep.includes(f.properties.code)).map(f => polys(f.geometry)) : null;
const depGeo = c => JSON.parse(fs.readFileSync(GEO + "/dep.geojson")).features.filter(f => c.includes(f.properties.code)).flatMap(f => polys(f.geometry));
const zones = cfg.zones.map(z => { let geom = pc.union(...(z.communes ?? []).map(n => find(n, z.deps)).filter(Boolean).map(polys), ...(z.departements ? depGeo(z.departements).map(p => [p]) : [])); if (terre) geom = pc.intersection(geom, pc.union(...terre)); return { ...z, geom }; });
const pts = zones.flatMap(z => z.geom.flat(2));
let [x0, y0, x1, y1] = [Math.min(...pts.map(p => p[0])), Math.min(...pts.map(p => p[1])), Math.max(...pts.map(p => p[0])), Math.max(...pts.map(p => p[1]))];
const [mw, ms, me, mn] = cfg.marges ?? [0.12, 0.12, 0.12, 0.12]; x0 -= mw; x1 += me; y0 -= ms; y1 += mn;
const k = Math.cos((y0 + y1) / 2 * Math.PI / 180), W = cfg.largeur ?? 300, s = W / ((x1 - x0) * k), H = Math.round((y1 - y0) * s);
const P = ([lon, lat]) => [+((lon - x0) * k * s).toFixed(1), +((y1 - lat) * s).toFixed(1)];
const box = [[[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]]];

// Douglas-Peucker sur coordonnées écran
function dp(a, t = cfg.tol ?? 0.35) {
  if (a.length < 3) return a;
  const [A, B] = [a[0], a[a.length - 1]]; let iMax = 0, dMax = 0;
  for (let i = 1; i < a.length - 1; i++) {
    const [x, y] = a[i], dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1;
    const d = Math.abs(dy * x - dx * y + B[0] * A[1] - B[1] * A[0]) / L;
    if (d > dMax) { dMax = d; iMax = i; }
  }
  return dMax > t ? [...dp(a.slice(0, iMax + 1), t).slice(0, -1), ...dp(a.slice(iMax), t)] : [A, B];
}
const ring = r => { const q = r.map(P), h = q.length >> 1, a = [...dp(q.slice(0, h + 1)).slice(0, -1), ...dp(q.slice(h))]; return a.length > 3 ? "M" + a.map(p => p.join(",")).join("L") + "Z" : ""; };
const pathOf = mp => mp.map(poly => poly.map(ring).join("")).join("");
const centroid = mp => { // centre de la plus grande partie
  const big = mp.map(p => p[0]).sort((a, b) => b.length - a.length)[0].map(P);
  return [big.reduce((t, p) => t + p[0], 0) / big.length, big.reduce((t, p) => t + p[1], 0) / big.length];
};

// Départements en fond, découpés au cadre
const deps = JSON.parse(fs.readFileSync(GEO + "/dep.geojson")).features;
const fond = deps.map(f => pc.intersection(polys(f.geometry), box)).filter(g => g.length).map(pathOf).join("");

// Fleuves : morceaux à l'intérieur du cadre
const inB = ([lon, lat]) => lon > x0 && lon < x1 && lat > y0 && lat < y1;
const riv = [];
for (const file of ["rivers.geojson", "riv_eu.geojson"]) for (const f of JSON.parse(fs.readFileSync(GEO + "/" + file)).features) {
  if (!cfg.fleuves.includes(f.properties.name)) continue;
  const lines = f.geometry.type === "LineString" ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const l of lines) { let cur = []; for (const p of l) { if (inB(p)) cur.push(P(p)); else { if (cur.length > 1) riv.push(cur); cur = []; } } if (cur.length > 1) riv.push(cur); }
}
const rivPath = riv.map(l => "M" + dp(l, 0.5).map(p => p.join(",")).join("L")).join("");

// data-proj : lon,lat → x = (lon - x0)·k·s, y = (y1 - lat)·s (sert à placer les points partenaires).
let svg = `<svg viewBox="0 0 ${W} ${H}" data-proj="${[x0, y1, k, s].map(v => +v.toFixed(6)).join(",")}" xmlns="http://www.w3.org/2000/svg">`;
svg += `<g fill="currentColor" stroke="currentColor" stroke-opacity="${cfg.fondFort ? 0.45 : 0.2}" stroke-width="${cfg.fondFort ? 0.7 : 0.4}"><path fill-opacity="0.06" d="${fond}"/></g>`;
svg += `<g fill="currentColor" style="stroke:var(--paper,#fff)" stroke-width="0.7" stroke-linejoin="round">` + zones.map((z, i) => `<path fill-opacity="${z.opacite ?? [0.3, 0.2, 0.36, 0.24, 0.32, 0.18, 0.28, 0.22][i % 8]}" d="${pathOf(z.geom)}"/>`).join("") + `</g>`;
svg += `<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="0.8"><path d="${rivPath}"/></g><g fill="currentColor">`;
for (const v of cfg.villes) {
  const g = find(v.nom, v.dep ? [v.dep] : undefined); if (!g) continue; const [x, y] = centroid(polys(g)); const [dx, dy, a] = v.pos ?? [6, 3, "start"];
  svg += `<rect x="${(x - 2).toFixed(1)}" y="${(y - 2).toFixed(1)}" width="4" height="4" fill="none" stroke="currentColor" stroke-width="1"/><text x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}" text-anchor="${a}" font-size="8" font-style="italic" opacity="0.75">${v.label ?? v.nom}</text>`;
}
for (const p of cfg.points ?? []) { // appellation non séparable à l’échelle communale : point sur sa commune
  const g = find(p.nom, p.dep ? [p.dep] : undefined); if (!g) continue; const [x, y] = centroid(polys(g)); const [dx, dy, a] = p.pos ?? [5, 3, "start"];
  svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"/><text x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}" text-anchor="${a}" font-size="9" font-weight="bold">${p.label}</text>`;
}
for (const z of zones) {
  const [cx, cy] = z.at ? P(z.at) : centroid(z.geom), [dx, dy, a] = z.pos ?? [0, 3, "middle"]; // at : [lon, lat] quand le centre tombe sur une autre zone
  if (z.trait) svg += `<path d="M${cx.toFixed(1)},${cy.toFixed(1)}L${(cx + dx + (a === "start" ? -2 : a === "end" ? 2 : 0)).toFixed(1)},${(cy + dy - 3).toFixed(1)}" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.7" fill="none"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="1.2"/>`;
  svg += `<text x="${(cx + dx).toFixed(1)}" y="${(cy + dy).toFixed(1)}" text-anchor="${a}" font-size="9.5" font-weight="bold">${z.label}</text>`;
}
for (const t of cfg.textes ?? []) { const [x, y] = P([t.lon, t.lat]); svg += `<text x="${x}" y="${y}" text-anchor="middle" ${t.gras ? 'font-size="9.5" font-weight="bold"' : 'font-size="7.5" font-style="italic" opacity="0.6"'}${t.rot ? ` transform="rotate(${t.rot} ${x} ${y})"` : ""}>${t.t}</text>`; }
svg += `</g></svg>`;
process.stdout.write(svg);
