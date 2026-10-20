// Ajoute des pages de cours (et schémas) à des fiches existantes, sans réécrire le reste du fichier.
// Usage : node tools/add-cours.mjs lot1.json [lot2.json…]
// Entrée : [{ fiche, cours|null, schema|null, to_check_add:[] }] (cours null = schéma seul). Un ajout à to_check repasse la fiche en needs_review.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const files = readdirSync("fiches").filter(f => f.endsWith(".js")).map(f => "fiches/" + f);
const src = Object.fromEntries(files.map(f => [f, readFileSync(f, "utf8")]));
const entries = process.argv.slice(2).flatMap(p => JSON.parse(readFileSync(p, "utf8")));

for (const e of entries) {
  const head = `\n    id: ${e.fiche},\n`;
  const file = files.find(f => src[f].includes(head));
  if (!file) throw new Error("Fiche introuvable : " + e.fiche);
  let s = src[file];
  const start = s.indexOf(head), nextId = s.indexOf("\n    id: ", start + head.length);
  const end = nextId < 0 ? s.length : nextId;
  let block = s.slice(start, end);
  if (e.cours && /\n    cours: null,\n/.test(block)) block = block.replace("\n    cours: null,\n", "\n"); // lots récents : cours: null explicite
  if (e.cours && /\n    cours: /.test(block)) throw new Error("Fiche déjà dotée d'un cours : " + e.fiche);
  if (e.schema && /\n    schema: null,\n/.test(block)) block = block.replace("\n    schema: null,\n", "\n"); // remplacé ci-dessous
  if (e.schema && /\n    schema: /.test(block)) throw new Error("Fiche déjà dotée d'un schéma : " + e.fiche);
  let add = e.cours ? `    cours: ${JSON.stringify(e.cours)},\n` : ""; // schéma seul : cours omis
  if (e.schema) add = `    schema: ${JSON.stringify(e.schema)},\n` + add;
  const anchor = ["status", "src"].find(k => block.includes(`\n    ${k}: `)); // fiches anciennes sans pastille
  if (!anchor) throw new Error("Ni status ni src : " + e.fiche);
  block = block.replace(`\n    ${anchor}: `, "\n" + add + `    ${anchor}: `);
  if (e.to_check_add?.length) {
    const m = block.match(/\n    to_check: (\[[\s\S]*?\]),\n(?=    \w+: )/); // tableau sur une ou plusieurs lignes
    if (!m) throw new Error("to_check introuvable : " + e.fiche);
    const list = [...new Function("return " + m[1])(), ...e.to_check_add];
    block = block.replace(m[0], `\n    to_check: ${JSON.stringify(list)},\n`).replace('\n    status: "verified",', '\n    status: "needs_review",');
  }
  src[file] = s.slice(0, start) + block + s.slice(end);
}
for (const f of files) writeFileSync(f, src[f]);
console.log(entries.length + " cours ajoutés.");
