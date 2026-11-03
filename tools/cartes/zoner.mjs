// node tools/cartes/zoner.mjs : pose data-z="<label>" sur chaque zone des cartes posées depuis une config de tools/cartes/
// (ordre des <path> de zones = ordre de cfg.zones ; carte.mjs ne l'écrivait pas). Sert au jeu « Cartes à toucher ».
// Une carte est reconnue quand son nombre de zones égale celui de la config et que toutes les étiquettes non discrètes y sont écrites.
// shortcut: carte ambiguë (deux configs possibles) ou non reconnue laissée sans data-z ; régénérer avec carte.mjs si besoin.
import fs from "fs";
import { fichesFiles, loadFichesJs } from "../migrate-fiches.mjs";
const root = new URL("../../", import.meta.url).pathname;
const cfgs = fs.readdirSync(root + "tools/cartes").filter(f => f.endsWith(".json")).map(f => ({ f, ...JSON.parse(fs.readFileSync(root + "tools/cartes/" + f, "utf8")) })).filter(c => c.zones?.length >= 2);
const ZONES = /(<g fill="currentColor" style="stroke:var\(--paper,#fff\)"[^>]*>)(.*?)<\/g>/s;
const paths = svg => [...((svg.match(ZONES) || [])[2] || "").matchAll(/<path /g)].length;
const textes = svg => [...svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map(m => m[1].trim());
export function zoner(svg) {
  if (/data-z=/.test(svg)) return null;
  const n = paths(svg), t = textes(svg);
  // Parmi les configs de même nombre de zones dont les étiquettes non discrètes sont toutes écrites, celle qui en écrit le plus (une config toute discrète n'exclut rien).
  const cand = cfgs.filter(c => c.zones.length === n && c.zones.every(z => z.discret || t.includes(z.label))).map(c => [c, c.zones.filter(z => t.includes(z.label)).length]).sort((a, b) => b[1] - a[1]);
  const ok = cand.filter(([, s]) => s > 0 && s === cand[0][1]).map(([c]) => c);
  if (ok.length !== 1) return null;
  let i = 0;
  return svg.replace(ZONES, (m, g, body) => g + body.replace(/<path /g, () => `<path data-z="${ok[0].zones[i++].label.replace(/"/g, "&quot;")}" `) + "</g>");
}
const { FICHES } = loadFichesJs(root + "fiches.js");
let n = 0, sans = [];
for (const file of fichesFiles(root + "fiches.js").slice(1)) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  let id = null, change = false;
  lines.forEach((l, k) => {
    const m = l.match(/^    id: (\d+),/); if (m) id = +m[1];
    if (!/^    schema: \{"svg"/.test(l)) return;
    const f = FICHES.find(x => x.id === id); if (!f || !/stroke:var\(--paper/.test(f.schema.svg)) return; // cartes de carte.mjs seulement
    const svg = zoner(f.schema.svg);
    if (!svg) { if (!/data-z=/.test(f.schema.svg)) sans.push(id); return; }
    lines[k] = "    schema: " + JSON.stringify({ ...f.schema, svg }) + ","; change = true; n++;
  });
  if (change) fs.writeFileSync(file, lines.join("\n"));
}
console.log(`${n} cartes marquées ; sans correspondance : ${sans.join(", ") || "aucune"}`);
