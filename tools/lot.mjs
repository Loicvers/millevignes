// Validation et fusion des lots (schema_version 1). Pur JS : utilisable en Node et, plus tard, dans le navigateur.
export const SCHEMA_VERSION = 1;
const NIVEAUX = ["Fondamental", "Intermédiaire", "Pointu"];
const STATUTS = ["draft", "needs_review", "verified", "needs_update"];
const NIVEAUX_SOURCE = ["1", "2a", "2b", "perso"];
const TYPES_SOURCE = ["livre", "article", "officiel", "technique", "reglementaire", "presse", "perso", "autre"];
const IMP = ["essentiel", "important", "utile", "culture"];

const isStr = v => typeof v === "string" && v.trim() !== "";
const isStrArr = (v, min = 1) => Array.isArray(v) && v.length >= min && v.every(isStr);
const isIdx = (v, arr) => Number.isInteger(v) && v >= 0 && v < arr.length;

// Charge utile attendue par type d'exercice : renvoie une liste d'erreurs.
const PAYLOADS = {
  flashcard: p => [!isStr(p.answer) && "answer (verso) manquant"],
  flashcard_reverse: p => PAYLOADS.flashcard(p),
  mcq_single: p => [!isStrArr(p.options, 3) && "options : au moins 3 textes", isStrArr(p.options, 3) && !isIdx(p.answer, p.options) && "answer : index hors des options"],
  mcq_multi: p => [!isStrArr(p.options, 3) && "options : au moins 3 textes",
    isStrArr(p.options, 3) && !(Array.isArray(p.answers) && p.answers.length >= 1 && p.answers.every(i => isIdx(i, p.options)) && new Set(p.answers).size === p.answers.length) && "answers : index distincts dans les options"],
  true_false: p => [!isStr(p.statement) && "statement manquant", typeof p.answer !== "boolean" && "answer doit valoir true ou false"],
  cloze: p => [!(isStr(p.text) && /\{\{[^{}]+\}\}/.test(p.text)) && "text doit contenir au moins un trou {{réponse|variante}}"],
  short_answer: p => [!isStrArr(p.accepted) && "accepted : au moins une réponse acceptée"],
  matching: p => [!(Array.isArray(p.pairs) && p.pairs.length >= 2 && p.pairs.every(x => Array.isArray(x) && x.length === 2 && x.every(isStr))) && "pairs : au moins 2 paires [gauche, droite]"],
  ordering: p => [!isStrArr(p.items, 3) && "items : au moins 3 éléments dans l'ordre correct"],
  odd_one_out: p => [!isStrArr(p.options, 3) && "options : au moins 3 textes", isStrArr(p.options, 3) && !isIdx(p.answer, p.options) && "answer : index de l'intrus hors des options"],
};
export const EXERCISE_TYPES = Object.keys(PAYLOADS);

function checkNotion(n, tax, err) {
  const at = `notion ${n.id ?? "?"}`;
  if (!isStr(n.titre)) err(`${at} : titre manquant`);
  if (!isStr(n.synth)) err(`${at} : synth manquante`);
  if (!tax.themes.includes(n.theme)) err(`${at} : thème inconnu « ${n.theme} »`);
  for (const s of n.sous ?? []) if (!(tax.sous[n.theme] ?? []).includes(s)) err(`${at} : sous-thème « ${s} » absent du catalogue de « ${n.theme} »`);
  if (!NIVEAUX.includes(n.niveau)) err(`${at} : niveau doit valoir ${NIVEAUX.join(" | ")}`);
  if (!STATUTS.includes(n.status)) err(`${at} : status doit valoir ${STATUTS.join(" | ")}`);
  if (n.geo != null && !isStr(n.geo.pays)) err(`${at} : geo.pays manquant (ou geo: null)`);
  if (!Array.isArray(n.refs) || !n.refs.length) err(`${at} : refs doit citer au moins une source`);
  if (n.status === "needs_review" && !isStrArr(n.to_check ?? [])) err(`${at} : status needs_review exige to_check (les faits ⚠️)`);
  const imps = [];
  JSON.stringify(n.cours ?? null, (k, v) => (k === "imp" && v != null && imps.push(v), v));
  for (const i of imps) if (!IMP.includes(i)) err(`${at} : imp « ${i} » invalide (${IMP.join(" | ")})`);
}

// Valide un lot. `base` (optionnelle) fournit la taxonomie et les ids déjà connus pour les références croisées.
export function validate(lot, base = lot) {
  const errors = [];
  const err = m => errors.push(m);
  if (!lot || typeof lot !== "object") return ["Le fichier n'est pas un objet JSON."];
  if (lot.schema_version !== SCHEMA_VERSION) return [`schema_version ${lot.schema_version} non pris en charge (attendu : ${SCHEMA_VERSION}).`];
  const tax = base.taxonomy;
  if (!tax) return ["Taxonomie introuvable (base sans champ taxonomy)."];
  for (const k of ["sources", "notions", "exercises"]) if (!Array.isArray(lot[k] ?? [])) err(`${k} doit être une liste`);
  if (errors.length) return errors;

  const ids = new Set();
  const all = [...(lot.sources ?? []), ...(lot.notions ?? []), ...(lot.exercises ?? [])];
  for (const x of all) {
    if (!isStr(x.id) || !/^[a-z0-9][a-z0-9-]*$/.test(x.id)) err(`id invalide : ${JSON.stringify(x.id)} (minuscules, chiffres, tirets)`);
    else if (ids.has(x.id)) err(`id en double dans le lot : ${x.id}`);
    ids.add(x.id);
    if (!Number.isInteger(x.content_version) || x.content_version < 1) err(`${x.id} : content_version doit être un entier ≥ 1`);
  }
  const known = kind => new Set([...(base[kind] ?? []), ...(lot[kind] ?? [])].map(x => x.id));
  const srcIds = known("sources"), notionIds = known("notions");

  for (const s of lot.sources ?? []) {
    if (!isStr(s.title)) err(`source ${s.id} : title manquant`);
    if (!TYPES_SOURCE.includes(s.type)) err(`source ${s.id} : type doit valoir ${TYPES_SOURCE.join(" | ")}`);
    if (!NIVEAUX_SOURCE.includes(s.level)) err(`source ${s.id} : level doit valoir ${NIVEAUX_SOURCE.join(" | ")}`);
  }
  for (const n of lot.notions ?? []) {
    checkNotion(n, tax, err);
    for (const r of n.refs ?? []) if (!srcIds.has(r.source_id)) err(`notion ${n.id} : source inconnue ${r.source_id}`);
  }
  for (const e of lot.exercises ?? []) {
    const at = `exercice ${e.id}`;
    if (!PAYLOADS[e.type]) { err(`${at} : type inconnu « ${e.type} » (${EXERCISE_TYPES.join(", ")})`); continue; }
    if (!isStrArr(e.notion_ids)) err(`${at} : notion_ids vide`);
    for (const id of e.notion_ids ?? []) if (!notionIds.has(id)) err(`${at} : notion inconnue ${id}`);
    if (!isStr(e.prompt)) err(`${at} : prompt (consigne) manquant`);
    if (e.explanation != null && !isStr(e.explanation)) err(`${at} : explanation doit être un texte (ou absente : la synthèse de la notion sert alors de correction)`);
    for (const m of PAYLOADS[e.type](e.payload ?? {})) if (m) err(`${at} (${e.type}) : ${m}`);
  }
  return errors;
}

// Fusionne un lot valide dans la base sans rien écraser en silence.
// Règle : id absent → créé ; contenu identique → inchangé ; content_version supérieure → mis à jour ; sinon → conflit (base conservée).
export function merge(base, lot) {
  const out = structuredClone(base);
  const report = { created: [], updated: [], unchanged: [], conflicts: [] };
  for (const kind of ["sources", "notions", "exercises"]) {
    out[kind] ??= [];
    for (const item of lot[kind] ?? []) {
      const i = out[kind].findIndex(x => x.id === item.id);
      if (i < 0) { out[kind].push(item); report.created.push(item.id); continue; }
      const cur = out[kind][i];
      if (JSON.stringify(cur) === JSON.stringify(item)) report.unchanged.push(item.id);
      else if (item.content_version > cur.content_version) { out[kind][i] = item; report.updated.push(item.id); }
      else report.conflicts.push(item.id);
    }
  }
  return { base: out, report };
}

// Normalisation pour comparer les réponses saisies : casse, accents, espaces et ligatures.
export const normalize = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[^a-z0-9]+/g, " ").trim();
