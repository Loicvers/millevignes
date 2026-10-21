// Régénère docs/etat.md : l'état chiffré du projet, tiré du dépôt (ne pas éditer à la main).
// Usage : node tools/migrate-fiches.mjs && node tools/etat.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import vm from "node:vm";
import { loadFichesJs } from "./migrate-fiches.mjs";

const { notions, exercises } = JSON.parse(readFileSync("data/base.json", "utf8"));
const ctx = {};
vm.runInNewContext(readFileSync("data/lexique.js", "utf8") + ";" + readFileSync("data/recits.js", "utf8") + ";this.o={LEXIQUE,RECITS};", ctx);
const nb = (a, f) => a.filter(f).length;
const pts = k => notions.reduce((s, n) => s + (n[k]?.length ?? 0), 0);
const niv = ["Fondamental", "Intermédiaire", "Pointu"].map(v => `${v} ${nb(notions, n => n.niveau === v)}`).join(" · ");

// Une ligne par fichier de section : on charge chaque fichier seul pour savoir quelles fiches il contient.
const sections = readdirSync("fiches").filter(f => f.endsWith(".js")).sort().map(f => {
  const c = {};
  vm.runInNewContext("const FICHES=[];" + readFileSync("fiches/" + f, "utf8") + ";this.F=FICHES;", c);
  const ids = c.F.map(x => x.id), pages = c.F.map(x => x.page).filter(Boolean);
  const ns = notions.filter(n => ids.includes(n.legacy_id));
  return `| ${f} | ${ids.length} | ${Math.min(...ids)}–${Math.max(...ids)} | ${pages.length ? `${Math.min(...pages)}–${Math.max(...pages)}` : "hors livre"} | ${nb(ns, n => n.status === "verified")} | ${nb(ns, n => n.cours)} | ${nb(ns, n => n.schema)} |`;
});

writeFileSync("docs/etat.md", [
  "# État du projet",
  "",
  "Généré par `tools/etat.mjs` depuis le dépôt : ne pas éditer à la main. C'est la seule source des chiffres.",
  "",
  `- Fiches : ${notions.length} (dernier id : ${Math.max(...notions.map(n => n.legacy_id))}) · exercices : ${exercises.length}`,
  `- Vérifiées : ${nb(notions, n => n.status === "verified")} · à vérifier : ${nb(notions, n => n.to_check.length)} (${pts("to_check")} points, détail dans \`docs/a-verifier.md\`) · détails « selon le livre » : ${pts("selon_livre")}`,
  `- Niveaux : ${niv}`,
  `- Cours (Approfondir) : ${nb(notions, n => n.cours)} · schémas : ${nb(notions, n => n.schema)}`,
  `- Lexique : ${ctx.o.LEXIQUE.length} termes · récits de chapitre : ${Object.keys(ctx.o.RECITS).length}`,
  "",
  "| Fichier | Fiches | Ids | Pages | Vérifiées | Cours | Schémas |",
  "|---|---|---|---|---|---|---|",
  ...sections,
  "",
].join("\n"));
console.log("docs/etat.md régénéré");
