// Aligne index.html (balises <script> des fiches) et sw.js (liste de cache) sur le dossier fiches/, écrit data/lexique-fiches.js,
// et nomme le cache d'après l'empreinte des fichiers du site : toute modification change le nom, donc chaque
// appareil reçoit la nouvelle version (plus d'incrément à la main ; un test vérifie que le nom est à jour).
// Usage : node tools/sync-site.mjs   — après toute modification du site (fiches, app.js, style.css, exercices.js…).
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { fichesFiles } from "./migrate-fiches.mjs";

// Fiches où apparaît chaque terme du lexique (6 au plus, comme les montre le site) : calculées ici une fois,
// pas à chaque ouverture du site (84 termes × 967 fiches, plus d'une seconde sur téléphone). Un test vérifie que le fichier est à jour.
export function lexiqueFiches() {
  const r = f => fileURLToPath(new URL("../" + f, import.meta.url)), ctx = {};
  for (const f of [...fichesFiles(r("fiches.js")), r("data/lexique.js"), r("exercices.js")]) vm.runInNewContext(readFileSync(f, "utf8"), ctx, { filename: f });
  const ids = vm.runInNewContext("Object.fromEntries(LEXIQUE.map(t => [t.terme, lexFiches(t, FICHES).slice(0, 6).map(f => f.id)]))", ctx);
  return "// Généré par tools/sync-site.mjs, ne pas éditer : fiches où apparaît chaque terme du lexique (terme dans le titre d'abord).\n"
    + "const LEXIQUE_FICHES = " + JSON.stringify(ids) + ";\n";
}

// Empreinte des fichiers mis en cache par sw.js (sw.js lui-même exclu : il contient le nom du cache).
export function empreinte(sw, lire = f => readFileSync(f)) {
  const h = createHash("sha1");
  for (const [, f] of sw.matchAll(/"([^"]+\.(?:js|json|css|woff2|png|webmanifest|html))"/g)) if (f !== "sw.js") h.update(f).update(lire(f));
  return "mv-" + h.digest("hex").slice(0, 10);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const lex = lexiqueFiches(), lexAvant = existsSync("data/lexique-fiches.js") ? readFileSync("data/lexique-fiches.js", "utf8") : "";
  if (lex !== lexAvant) writeFileSync("data/lexique-fiches.js", lex); // avant l'empreinte : le fichier est dans le cache
  const noms = readdirSync("fiches").filter(f => f.endsWith(".js")).sort().map(f => `fiches/${f}`);
  const html = readFileSync("index.html", "utf8");
  const html2 = html.replace(/(?:<script defer src="fiches\/[^"]+"><\/script>\n)+/, noms.map(f => `<script defer src="${f}"></script>`).join("\n") + "\n");
  if (html2 !== html) writeFileSync("index.html", html2);
  const sw = readFileSync("sw.js", "utf8");
  // \s* : remplace toutes les lignes de fiches d'un coup (des doublons font échouer cache.addAll, donc le hors ligne).
  let sw2 = sw.replace(/(?:"fiches\/[^"]+",\s*)+/, noms.map(f => `"${f}"`).join(", ") + ",\n  ");
  sw2 = sw2.replace(/const CACHE = "[^"]+"/, `const CACHE = "${empreinte(sw2)}"`);
  if (sw2 !== sw) writeFileSync("sw.js", sw2);
  console.log(`${noms.length} fichiers de fiches ; data/lexique-fiches.js ${lex !== lexAvant ? "mis à jour" : "inchangé"} ; index.html ${html2 !== html ? "mis à jour" : "inchangé"} ; sw.js ${sw2 !== sw ? "mis à jour (nouveau cache)" : "inchangé"}.`);
}
