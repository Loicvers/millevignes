// Range des points ⚠️ secondaires de to_check dans selon_livre (détails laissés au crédit du livre, hors dette).
// Usage : node tools/trier-points.mjs tri1.json [tri2.json…]
// Entrée : [{ fiche, livre: [indices dans to_check, base 0] }]. Une fiche dont to_check se vide passe en verified.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const files = readdirSync("fiches").filter(f => f.endsWith(".js")).map(f => "fiches/" + f);
const src = Object.fromEntries(files.map(f => [f, readFileSync(f, "utf8")]));
const entries = process.argv.slice(2).flatMap(p => JSON.parse(readFileSync(p, "utf8")));
const list = (block, key) => {
  const m = block.match(new RegExp(`\\n    ${key}: (\\[[\\s\\S]*?\\]),\\n(?=    \\w+: )`)); // tableau sur une ou plusieurs lignes
  return m && { m, arr: new Function("return " + m[1])() };
};
let moved = 0, verified = 0;

for (const e of entries) {
  if (!e.livre?.length) continue;
  const head = `\n    id: ${e.fiche},\n`;
  const file = files.find(f => src[f].includes(head));
  if (!file) throw new Error("Fiche introuvable : " + e.fiche);
  const s = src[file], start = s.indexOf(head), nextId = s.indexOf("\n    id: ", start + head.length);
  const end = nextId < 0 ? s.length : nextId;
  let block = s.slice(start, end);
  const tc = list(block, "to_check");
  if (!tc) throw new Error("to_check introuvable : " + e.fiche);
  if (e.livre.some(i => !Number.isInteger(i) || i < 0 || i >= tc.arr.length)) throw new Error("Indice hors limites : " + e.fiche);
  const keep = tc.arr.filter((_, i) => !e.livre.includes(i));
  const sl = list(block, "selon_livre");
  const livre = [...(sl?.arr ?? []), ...tc.arr.filter((_, i) => e.livre.includes(i))];
  if (sl) block = block.replace(sl.m[0], "\n"); // l'ancienne liste est réécrite à côté de to_check
  block = block.replace(tc.m[0], `\n    to_check: ${JSON.stringify(keep)},\n    selon_livre: ${JSON.stringify(livre)},\n`);
  if (!keep.length && block.includes('\n    status: "needs_review",')) { block = block.replace('\n    status: "needs_review",', '\n    status: "verified",'); verified++; }
  moved += e.livre.length;
  src[file] = s.slice(0, start) + block + s.slice(end);
}
for (const f of files) writeFileSync(f, src[f]);
console.log(`${moved} points rangés « selon le livre », ${verified} fiches passées en vérifiées.`);
