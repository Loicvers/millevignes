// Aligne index.html (balises <script> des fiches) et sw.js (liste de cache) sur le dossier fiches/.
// Usage : node tools/sync-site.mjs   — à lancer après avoir ajouté ou renommé un fichier de fiches.
// Si la liste de sw.js change, le numéro de cache mv-vNN est incrémenté (les anciens fichiers sont alors purgés).
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const noms = readdirSync("fiches").filter(f => f.endsWith(".js")).sort().map(f => `fiches/${f}`);

const html = readFileSync("index.html", "utf8");
const balises = noms.map(f => `<script src="${f}"></script>`).join("\n");
const html2 = html.replace(/(?:<script src="fiches\/[^"]+"><\/script>\n)+/, balises + "\n");

let sw = readFileSync("sw.js", "utf8");
const sw2 = sw.replace(/(?:"fiches\/[^"]+", ?)+/, noms.map(f => `"${f}"`).join(", ") + ", ")
  .replace(/const CACHE = "mv-v(\d+)"/, (m, n) => `const CACHE = "mv-v${+n + 1}"`);

if (html2 !== html) writeFileSync("index.html", html2);
const swChange = sw2.replace(/mv-v\d+/, "") !== sw.replace(/mv-v\d+/, "");
if (swChange) writeFileSync("sw.js", sw2);
console.log(`${noms.length} fichiers de fiches ; index.html ${html2 !== html ? "mis à jour" : "inchangé"} ; sw.js ${swChange ? "mis à jour (cache incrémenté)" : "inchangé"}.`);
