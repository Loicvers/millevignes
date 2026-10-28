// Aligne index.html (balises <script> des fiches) et sw.js (liste de cache) sur le dossier fiches/,
// et nomme le cache d'après l'empreinte des fichiers du site : toute modification change le nom, donc chaque
// appareil reçoit la nouvelle version (plus d'incrément à la main ; un test vérifie que le nom est à jour).
// Usage : node tools/sync-site.mjs   — après toute modification du site (fiches, app.js, style.css, exercices.js…).
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";

// Empreinte des fichiers mis en cache par sw.js (sw.js lui-même exclu : il contient le nom du cache).
export function empreinte(sw, lire = f => readFileSync(f)) {
  const h = createHash("sha1");
  for (const [, f] of sw.matchAll(/"([^"]+\.(?:js|json|css|woff2|png|webmanifest|html))"/g)) if (f !== "sw.js") h.update(f).update(lire(f));
  return "mv-" + h.digest("hex").slice(0, 10);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const noms = readdirSync("fiches").filter(f => f.endsWith(".js")).sort().map(f => `fiches/${f}`);
  const html = readFileSync("index.html", "utf8");
  const html2 = html.replace(/(?:<script src="fiches\/[^"]+"><\/script>\n)+/, noms.map(f => `<script src="${f}"></script>`).join("\n") + "\n");
  if (html2 !== html) writeFileSync("index.html", html2);
  const sw = readFileSync("sw.js", "utf8");
  let sw2 = sw.replace(/(?:"fiches\/[^"]+", ?)+/, noms.map(f => `"${f}"`).join(", ") + ", ");
  sw2 = sw2.replace(/const CACHE = "[^"]+"/, `const CACHE = "${empreinte(sw2)}"`);
  if (sw2 !== sw) writeFileSync("sw.js", sw2);
  console.log(`${noms.length} fichiers de fiches ; index.html ${html2 !== html ? "mis à jour" : "inchangé"} ; sw.js ${sw2 !== sw ? "mis à jour (nouveau cache)" : "inchangé"}.`);
}
