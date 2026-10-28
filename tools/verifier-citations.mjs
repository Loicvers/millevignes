// Contrôle les « Selon le livre (p. N) » des fiches contre le texte du livre (dépôt privé millevignes-sources).
// Usage : node tools/verifier-citations.mjs [dossier mille-vignes]   (défaut : ../millevignes-sources/mille-vignes)
// Pour chaque citation, cherche ses nombres et ses noms propres sur les pages N-1 à N+1 et signale les absents.
// shortcut: heuristique (nombres + mots capitalisés), à relire à la main ; ne bloque jamais (le dépôt de sources n'est pas dans la CI).
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { loadFichesJs } from "./migrate-fiches.mjs";

const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/[^a-z0-9]+/g, " ");

// Texte du livre par numéro de page : le numéro est seul sur sa ligne, en fin de page.
export function pagesDuLivre(dossier) {
  const pages = new Map();
  for (const f of readdirSync(dossier).filter(f => f.endsWith(".txt") && !f.startsWith("Bibliographie"))) {
    let tampon = [], dernier = 0;
    for (const l of readFileSync(`${dossier}/${f}`, "utf8").replace(/-\n/g, "").split("\n")) {
      const n = /^\s*(\d{1,3})\s*$/.test(l) ? +l : 0;
      // Pages sans numéro imprimé (jusqu'à 8 de suite) : leur texte est rattaché à la page numérotée suivante.
      if (n >= 10 && n > dernier && (!dernier || n - dernier <= 8)) {
        for (let k = dernier ? dernier + 1 : n; k <= n; k++) pages.set(k, (pages.get(k) || "") + " " + tampon.join(" "));
        tampon = []; dernier = n;
      }
      else tampon.push(l);
    }
    if (dernier) pages.set(dernier + 1, (pages.get(dernier + 1) || "") + " " + tampon.join(" ")); // dernière page du fichier, sans numéro
  }
  return pages;
}

// Éléments à retrouver : nombres de 2 à 4 chiffres et mots capitalisés (hors début de phrase).
export function indices(texte) {
  const nombres = texte.match(/\b\d{2,4}\b/g) || [];
  const propres = [...texte.matchAll(/(?<=[a-zé’'(] )[A-ZÉ][a-zéèêôîïç]{4,}/g)].map(m => m[0]);
  return [...new Set([...nombres, ...propres])];
}

export function verifier(fiches, pages) {
  const sortie = [];
  for (const f of fiches) for (const champ of ["selon_livre"]) for (const t of f[champ] || []) {
    const m = t.match(/^Selon le livre \(p\. (\d+)(?:[–-](\d+))?\)\s*(?:[^:]{0,60}):\s*([^;.]*)/);
    if (!m) continue;
    const [de, a] = [+m[1], +(m[2] || m[1])];
    const zone = norm([...Array(a - de + 3)].map((_, i) => pages.get(de - 1 + i) || "").join(" "));
    if (!zone.trim()) { sortie.push({ id: f.id, page: m[1], absents: ["(page introuvable dans le livre)"] }); continue; }
    const absents = indices(m[3]).filter(i => !zone.includes(norm(i).trim()));
    if (absents.length) sortie.push({ id: f.id, page: m[1], absents });
  }
  return sortie;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dossier = process.argv[2] || "../millevignes-sources/mille-vignes";
  if (!existsSync(dossier)) { console.error(`Dossier du livre introuvable : ${dossier}`); process.exit(2); }
  const { FICHES } = loadFichesJs("fiches.js");
  const pages = pagesDuLivre(dossier);
  const total = FICHES.flatMap(f => f.selon_livre || []).filter(t => t.startsWith("Selon le livre (p.")).length;
  const rapport = verifier(FICHES, pages);
  console.log(`${pages.size} pages du livre lues ; ${total} citations « Selon le livre (p. N) » ; ${rapport.length} à relire.`);
  for (const r of rapport) console.log(`fiche ${r.id} · p. ${r.page} · introuvable : ${r.absents.join(", ")}`);
}
