/* EXERCICES.JS — exercices d'une fiche et correction automatique.
   Script classique (globals) : chargé par index.html, et par les tests Node via vm. */

// Même numérotation que tools/migrate-fiches.mjs : -01 flashcard, -02 QCM, -03… champ exos.
function notionId(n) { return "mv-" + String(n).padStart(4, "0"); }
function toExercises(f) {
  const id = notionId(f.id);
  return [
    { id: id + "-01", type: "flashcard", prompt: f.flash.q, payload: { answer: f.flash.a, ...(f.flash.keys && { keys: f.flash.keys }) } },
    { id: id + "-02", type: "mcq_single", prompt: f.qcm.q, payload: { options: f.qcm.opts, answer: f.qcm.good }, explanation: f.qcm.expl },
    ...(f.exos || []).map((x, i) => ({ id: id + "-" + String(i + 3).padStart(2, "0"), ...x })),
  ].map(e => ({ ...e, fiche: f }));
}

// « Légender le schéma » : produit à la volée depuis les étiquettes en gras (1 à 3 mots, présentes une seule fois).
// Hors de data/base.json : il dépend du dessin, pas d'un contenu rédigé.
function schemaExercise(f) {
  if (!f.schema) return [];
  const all = [...f.schema.svg.matchAll(/<text[^>]*font-weight="bold"[^>]*>([^<]+)<\/text>/g)].map(m => m[1].trim());
  const labels = [...new Set(all)].filter(t => all.filter(x => x === t).length === 1 && t.split(/\s+/).length <= 3);
  if (labels.length < 3) return [];
  return [{ id: notionId(f.id) + "-sc", type: "label_schema", prompt: "Quel terme a été effacé du schéma (le « ? ») ?", payload: { labels }, fiche: f }];
}
// Tire une étiquette à masquer : renvoie le SVG masqué, les options et l'index de la bonne réponse.
function maskSchema(svg, labels, pick = shuffle(labels)) {
  const target = pick[0], options = shuffle(pick.slice(0, 4));
  const esc = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return { svg: svg.replace(new RegExp(`(<text[^>]*font-weight="bold"[^>]*>)${esc}(</text>)`), "$1<tspan font-size=\"15\">?</tspan>$2"), options, answer: options.indexOf(target) };
}

// Lexique : fiches où le terme apparaît (titre, synthèse, astuce), pluriel compris. « ban (de vendanges) » → « ban ».
function lexFiches(t, fiches) {
  const variants = t.terme.replace(/\(.*?\)/g, "").split("/").map(normalize).filter(Boolean);
  const res = variants.map(v => new RegExp(`(^| )${v}(s|x)?( |$)`));
  const hit = s => res.some(r => r.test(normalize(s)));
  return fiches.filter(f => hit(f.titre + " " + f.synth + " " + f.mnemo)).sort((a, b) => hit(b.titre) - hit(a.titre)); // terme dans le titre d'abord
}
// Un QCM par terme (définition → terme), rattaché à la première fiche qui l'emploie ; l'étymologie sert de correction.
function lexiqueExercises(lex, fiches) {
  return lex.map(t => ({ t, f: lexFiches(t, fiches)[0] })).filter(x => x.f).map(({ t, f }) => {
    const options = shuffle([t.terme, ...shuffle(lex.filter(o => o !== t)).slice(0, 3).map(o => o.terme)]);
    return { id: "lx-" + normalize(t.terme).replace(/ /g, "-"), type: "mcq_single", prompt: "Lexique — quel terme correspond à : « " + t.def + " » ?",
      payload: { options, answer: options.indexOf(t.terme) }, explanation: `Étymologie : ${t.etym} ${t.declic}`, fiche: f };
  });
}

// Flashcard écrite : mots-clés de la réponse attendue (4 lettres et plus, ou nombres) retrouvés dans la tienne.
// Racines comparées par préfixe (« asie » ~ « asiatique », pluriels, accords). null si trop peu de mots-clés.
// flash.keys (facultatif) : points attendus, chacun avec ses variantes acceptées, ex. [["Asie","asiatique"],["40"]] ;
// seuls ces points comptent, ce qui évite d'exiger des détails que la question ne demande pas.
const MOTS_VIDES = new Set("dans avec pour sont elle elles mais plus leur leurs entre comme cette tout tous toute toutes sans sous vers chez dont donc aussi tres etre avoir fait peut selon alors ainsi encore autre autres celui celle ceux quand depuis notamment environ souvent toujours jamais surtout ou qui que quoi les des une est par sur aux deux trois le la de du et en un au a l d".split(" "));
function flashKeys(answer, mine, groups) {
  const toks = s => normalize(s).split(" ").filter(w => w && !MOTS_VIDES.has(w));
  const words = s => toks(s).filter(w => /^\d+$/.test(w) || w.length >= 4);
  const stem = w => w.slice(0, Math.min(5, w.length - 1));
  const mineT = toks(mine);
  // Nombres et mots courts (ADN, non, cep) : égalité stricte ; sinon racines comparées par préfixe.
  const match = (k, m) => /^\d+$/.test(k) || k.length <= 3 ? m === k : m.length >= 4 && (stem(m).startsWith(stem(k)) || stem(k).startsWith(stem(m)));
  const has = k => mineT.some(m => match(k, m));
  if (groups) {
    // Variante de plusieurs mots : mots consécutifs et dans l'ordre (« sucre monte » ≠ « sucre baisse… monte »).
    const seq = w => w.length > 0 && mineT.some((_, i) => w.every((k, j) => i + j < mineT.length && match(k, mineT[i + j])));
    const ok = g => g.some(alt => seq(toks(alt)));
    const keys = groups.map(g => g[0]), found = groups.filter(ok).map(g => g[0]);
    return { keys, found, missing: keys.filter(k => !found.includes(k)), ok: found.length / keys.length >= 2 / 3 };
  }
  const keys = [...new Set(words(answer))], found = keys.filter(has);
  return { keys, found, missing: keys.filter(k => !found.includes(k)), ok: keys.length >= 2 ? found.length / keys.length >= 0.5 : null };
}

// Identique à normalize() de tools/lot.mjs (vérifié par les tests).
function normalize(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[^a-z0-9]+/g, " ").trim(); }

// Fisher-Yates : mélange équitable (sort(random) ne l'est pas).
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// "Le {{Pinot|pinot noir}} est…" → ["Le ", ["Pinot","pinot noir"], " est…"] (trous aux index impairs).
function clozeParts(text) { return text.split(/\{\{([^{}]+)\}\}/).map((p, i) => i % 2 ? p.split("|") : p); }

const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// Vrai si la réponse est juste. null pour les cartes auto-évaluées.
function grade(ex, answer) {
  const p = ex.payload;
  switch (ex.type) {
    case "flashcard": case "flashcard_reverse": return null;
    case "mcq_single": case "odd_one_out": case "true_false": case "label_schema": return answer === p.answer;
    case "mcq_multi": return same([...answer].sort(), [...p.answers].sort());
    case "short_answer": return p.accepted.some(a => normalize(a) === normalize(answer));
    case "cloze": return clozeParts(p.text).filter((_, i) => i % 2).every((v, k) => v.some(a => normalize(a) === normalize(answer[k] || "")));
    case "matching": return same(answer, p.pairs.map(x => x[1]));
    case "ordering": return same(answer, p.items);
  }
  throw new Error("Type d'exercice inconnu : " + ex.type);
}

// Séance : une notion (fiche) au plus par séance ; révisions échues d'abord, puis la suite des fiches commencées
// (un exercice de plus, pas le même jour), puis de nouvelles fiches (quota par jour, 2 exercices chacune).
// lues[ficheId] = horodatage de la lecture (1 pour les lectures d'avant le quota : jamais « aujourd'hui »).
const RESTITUER = ["flashcard", "cloze", "short_answer", "flashcard_reverse", "ordering"];
function planSession(pool, prog, lues, t, { max = 20, newFiches = 5, perNew = 2 } = {}) {
  const DAY = 86400000, dayStart = new Date(t).setHours(0, 0, 0, 0);
  const last = p => p.due - p.interval * DAY; // rate() pose due = réponse + intervalle
  const key = e => /^mv-/.test(e.id) ? e.fiche.id : e.id; // le lexique compte à part
  const groups = new Map();
  for (const e of pool) { const k = key(e); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
  const due = [], suite = [], fresh = [];
  let started = 0;
  for (const [k, exos] of groups) {
    const seen = exos.filter(e => prog[e.id]);
    if (seen.length && lues[k] >= dayStart) started++;
    const d = seen.filter(e => prog[e.id].due <= t).sort((a, b) => prog[a.id].due - prog[b.id].due);
    if (d.length) due.push(d[0]);
    else if (seen.length) {
      const next = exos.find(e => !prog[e.id]);
      if (next && t - Math.max(...seen.map(e => last(prog[e.id]))) > DAY / 2) suite.push(next);
    } else fresh.push(exos);
  }
  const q = shuffle(due).slice(0, max);
  for (const e of suite) if (q.length < max) q.push(e);
  fresh.sort((a, b) => (a[0].fiche.page || 0) - (b[0].fiche.page || 0) || a[0].fiche.id - b[0].fiche.id);
  for (const exos of fresh.slice(0, Math.max(0, newFiches - started))) {
    const first = exos.find(e => e.type === "flashcard") || exos[0];
    const pick = [first, ...exos.filter(e => e !== first && RESTITUER.includes(e.type)), ...exos.filter(e => e !== first)].slice(0, perNew);
    if (q.length + pick.length > max) break;
    q.push(...new Set(pick));
  }
  return q;
}

// Points durs : exercices dont la facilité est basse (souvent « Difficile »), le plus fragile en tête.
// Un exercice en sort après deux réussites d'affilée dans le journal (réussie = pas ratée, et pas notée « Au hasard »/« Difficile »).
const reussie = j => j.ok === 1 ? j.r !== "hard" : j.ok === null && (j.r === "ok" || j.r === "easy");
function pointsDurs(pool, prog, journal) {
  const fin = new Map(); // id → les deux dernières réponses, réussies ou non
  for (const j of journal) fin.set(j.e, [...(fin.get(j.e) || []), reussie(j)].slice(-2));
  const sorti = id => { const d = fin.get(id) || []; return d.length === 2 && d.every(Boolean); };
  return pool.filter(e => prog[e.id] && prog[e.id].ease < 2.3 && !sorti(e.id))
    .sort((a, b) => prog[a.id].ease - prog[b.id].ease);
}
