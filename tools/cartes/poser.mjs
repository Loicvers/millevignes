// node poser.mjs <fichier fiches> <id> <svg> <legende> <src> : remplace le `schema: …,` de la fiche id.
import fs from "fs";
const [file, id, svgFile, legende, src] = process.argv.slice(2);
const txt = fs.readFileSync(file, "utf8"), lines = txt.split("\n");
const i = lines.findIndex(l => l.trim() === `id: ${id},`);
if (i < 0) throw new Error("id introuvable " + id);
const j = lines.findIndex((l, k) => k > i && /^    schema: /.test(l));
const next = lines.findIndex((l, k) => k > i && /^    id: /.test(l));
if (j < 0 || (next > 0 && j > next)) throw new Error("schema introuvable pour " + id);
lines[j] = "    schema: " + JSON.stringify({ svg: fs.readFileSync(svgFile, "utf8"), legende, src }) + ",";
fs.writeFileSync(file, lines.join("\n"));
console.log("ok", file, id);
