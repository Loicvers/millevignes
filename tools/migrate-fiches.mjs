// Convertit fiches.js (format v1 du site) en data/base.json (schema_version 1). Ne modifie pas fiches.js.
// Usage : node tools/migrate-fiches.mjs [fiches.js] [data/base.json]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import vm from "node:vm";
import { SCHEMA_VERSION, validate } from "./lot.mjs";

export function loadFichesJs(path) {
  const ctx = {};
  vm.runInNewContext(readFileSync(path, "utf8") + ";this.out={FICHES,SOUS,THEME_ORDER};", ctx);
  return ctx.out;
}

export const notionId = n => `mv-${String(n).padStart(4, "0")}`;

export function migrate({ FICHES, SOUS, THEME_ORDER }) {
  const sources = [{
    id: "mille-vignes", type: "livre", level: "2a", title: "Mille Vignes", author: "Pascaline Lepeltier",
    // Éditeur, année et ISBN non renseignés dans fiches.js : à compléter, ne pas inventer.
    content_version: 1,
  }];
  const notions = [], exercises = [];
  for (const f of FICHES) {
    const id = notionId(f.id);
    const ref = { source_id: "mille-vignes", page: f.page ?? null, note: f.src };
    if (f.partie) ref.partie = f.partie;
    if (f.chapitre) ref.chapitre = f.chapitre;
    notions.push({
      id, legacy_id: f.id, theme: f.theme, sous: f.sous ?? [], niveau: f.niveau, geo: f.geo ?? null,
      titre: f.titre, synth: f.synth, mnemo: f.mnemo ?? null, refs: [ref],
      // Les pastilles ✅/⚠️ de la recherche d'origine ne sont pas dans fiches.js : statut prudent.
      status: "needs_review", to_check: ["Pastilles de vérification d'origine non conservées : revérifier les sources."],
      cours: f.cours ?? null, content_version: 1,
    });
    exercises.push({ id: `${id}-01`, type: "flashcard", notion_ids: [id], prompt: f.flash.q, payload: { answer: f.flash.a }, content_version: 1 });
    exercises.push({ id: `${id}-02`, type: "mcq_single", notion_ids: [id], prompt: f.qcm.q, payload: { options: f.qcm.opts, answer: f.qcm.good }, content_version: 1 });
  }
  return { schema_version: SCHEMA_VERSION, taxonomy: { themes: THEME_ORDER, sous: SOUS }, sources, notions, exercises };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [src = "fiches.js", dest = "data/base.json"] = process.argv.slice(2);
  const legacy = loadFichesJs(src);
  const base = migrate(legacy);
  const errors = validate(base);
  if (errors.length) { console.error("Migration invalide :\n- " + errors.join("\n- ")); process.exit(1); }
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, JSON.stringify(base, null, 2) + "\n");
  console.log(`${legacy.FICHES.length} fiches → ${base.notions.length} notions, ${base.exercises.length} exercices, ${base.sources.length} source(s) → ${dest}`);
}
