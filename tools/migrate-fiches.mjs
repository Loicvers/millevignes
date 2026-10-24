// Convertit fiches.js (format v1 du site) en data/base.json (schema_version 1). Ne modifie pas fiches.js.
// Usage : node tools/migrate-fiches.mjs [fiches.js] [data/base.json]
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import vm from "node:vm";
import { SCHEMA_VERSION, validate, chapterAt } from "./lot.mjs";

const TOC = JSON.parse(readFileSync(new URL("../data/mille-vignes-sommaire.json", import.meta.url), "utf8"));

// fiches.js (catalogues, FICHES vide) puis fiches/*.js dans l'ordre du nom, comme les <script> d'index.html.
export const fichesFiles = (path = "fiches.js") => {
  const dir = join(dirname(path), "fiches");
  return [path, ...readdirSync(dir).filter(f => f.endsWith(".js")).sort().map(f => join(dir, f))];
};

export function loadFichesJs(path) {
  const ctx = {};
  vm.runInNewContext(fichesFiles(path).map(f => readFileSync(f, "utf8")).join("\n;\n") + ";this.out={FICHES,SOUS,THEME_ORDER,REGIONS_FR,FRANCE_SOMMAIRE};", ctx);
  return ctx.out;
}

export const notionId = n => `mv-${String(n).padStart(4, "0")}`;

export function migrate({ FICHES, SOUS, THEME_ORDER, FRANCE_SOMMAIRE = [] }) {
  const sources = [{
    id: "mille-vignes", type: "livre", level: "2a", title: "Mille Vignes", author: "Pascaline Lepeltier",
    // Éditeur, année et ISBN non renseignés dans fiches.js : à compléter, ne pas inventer.
    toc: TOC, content_version: 1,
  }, {
    // Fiches hors livre : chaque fiche cite ses sources dans src (cahiers des charges, interprofessions, atlas).
    id: "france", type: "autre", level: "2a", title: "La France viticole", author: null, toc: null, content_version: 1,
  }];
  const notions = [], exercises = [];
  for (const f of FICHES) {
    const id = notionId(f.id);
    // Partie, section et chapitre déduits de la page ; un chapitre saisi à la main est gardé pour que validate() signale un écart.
    if (f.source === "france") {
      const fc = FRANCE_SOMMAIRE.find(c => c.chapitre === f.chapitre);
      if (!fc) throw new Error(`fiche ${f.id} : chapitre « ${f.chapitre} » absent de FRANCE_SOMMAIRE`);
      if (f.page) throw new Error(`fiche ${f.id} : une fiche « france » n'a pas de page`);
    }
    const ch = f.page ? chapterAt(TOC, f.page) : null;
    const ref = f.source === "france"
      ? { source_id: "france", page: null, note: f.src, partie: FRANCE_SOMMAIRE.find(c => c.chapitre === f.chapitre).partie ?? "La France viticole", section: FRANCE_SOMMAIRE.find(c => c.chapitre === f.chapitre).section, chapitre: f.chapitre }
      : { source_id: "mille-vignes", page: f.page ?? null, note: f.src,
      partie: ch?.partie ?? f.partie ?? null, section: ch?.section ?? null, chapitre: f.chapitre ?? ch?.chapitre ?? null };
    notions.push({
      id, legacy_id: f.id, theme: f.theme, sous: f.sous ?? [], niveau: f.niveau, geo: f.geo ?? null,
      titre: f.titre, synth: f.synth, mnemo: f.mnemo ?? null, refs: [ref],
      // Pastilles de la fiche (status, to_check) ; à défaut, statut prudent.
      status: f.status ?? "needs_review",
      to_check: f.to_check ?? (f.status ? [] : ["Pastilles de vérification d'origine non conservées : revérifier les sources."]),
      selon_livre: f.selon_livre ?? [], // détails non vérifiés laissés au crédit de l'autrice : pas une dette
      cours: f.cours ?? null, schema: f.schema ?? null, jauge: f.jauge ?? null, noms: f.noms ?? [], content_version: 1,
    });
    exercises.push({ id: `${id}-01`, type: "flashcard", notion_ids: [id], prompt: f.flash.q, payload: { answer: f.flash.a, ...(f.flash.keys && { keys: f.flash.keys }) }, content_version: 1 });
    exercises.push({ id: `${id}-02`, type: "mcq_single", notion_ids: [id], prompt: f.qcm.q, payload: { options: f.qcm.opts, answer: f.qcm.good }, explanation: f.qcm.expl, content_version: 1 });
    // Exercices supplémentaires (champ exos de fiches.js) : déjà au format du lot, numérotés à partir de -03.
    (f.exos ?? []).forEach((x, i) => exercises.push({ id: `${id}-${String(i + 3).padStart(2, "0")}`, notion_ids: [id], ...x, content_version: 1 }));
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
