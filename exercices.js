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

// Mémorisés : lie() compare chaque paire de termes du lexique (84 × 84), estSituation() chaque paire de fiches d'une région.
const memo = fn => { const m = new Map(); return k => m.has(k) ? m.get(k) : (m.set(k, fn(k)), m.get(k)); };
// « Légender le schéma » : produit à la volée depuis les étiquettes en gras (1 à 3 mots, présentes une seule fois).
// Hors de data/base.json : il dépend du dessin, pas d'un contenu rédigé.
const schemaLabels = memo(f => {
  const all = [...f.schema.svg.matchAll(/<text[^>]*font-weight="bold"[^>]*>([^<]+)<\/text>/g)].map(m => m[1].trim());
  // Une étiquette écrite ailleurs sur le dessin (ex. la ville de Bergerac sous l'AOC Bergerac) donnerait la réponse : écartée.
  const txt = [...f.schema.svg.matchAll(/<text[^>]*>([^<]+)<\/text>/g)].map(m => m[1].trim());
  return [...new Set(all)].filter(t => txt.filter(x => x === t).length === 1 && t.split(/\s+/).length <= 4);
});
// Carte de situation : une seule appellation en fort, les voisines en grisé.
const estSituation = f => f.schema && /en fort/.test(f.schema.legende || "") && schemaLabels(f).length === 1 && (f.schema.svg.match(/<text[^>]*font-weight="bold"/g) || []).length === 1;
function schemaExercise(f, fiches = []) {
  if (!f.schema) return [];
  const labels = schemaLabels(f);
  if (labels.length >= 3) return [{ id: notionId(f.id) + "-sc", type: "label_schema", prompt: "Quel terme a été effacé du schéma (le « ? ») ?", payload: { labels }, fiche: f }];
  // Situation : « où est-ce ? », leurres = appellations de la même région ayant aussi leur carte de situation.
  if (!estSituation(f) || !f.geo || !f.geo.region) return [];
  const proj = g => (g.schema.svg.match(/data-proj="([^"]*)"/) || [])[1];
  const noms = gs => [...new Set(gs.map(g => schemaLabels(g)[0]))].filter(t => t !== labels[0]); // un leurre écrit sur la carte y est masqué (maskSchema)
  const region = fiches.filter(g => g !== f && g.geo && g.geo.region === f.geo.region && estSituation(g));
  // Leurres pris sur la même carte (zones voisines, leur nom masqué) ; sinon dans la région, plus faciles à écarter sans rien situer.
  const meme = noms(region.filter(g => proj(g) === proj(f))), leurres = meme.length >= 3 ? meme : noms(region);
  if (leurres.length < 3) return [];
  return [{ id: notionId(f.id) + "-sit", type: "label_schema", prompt: "Quelle appellation est en foncé (le « ? ») sur cette carte ?", payload: { labels, leurres }, fiche: f }];
}
// Tire une étiquette à masquer : renvoie le SVG masqué, les options et l'index de la bonne réponse.
function maskSchema(svg, labels, pick = shuffle(labels)) {
  const target = pick[0], options = shuffle(pick.slice(0, 4));
  // Les autres options sont masquées partout (« … », étiquette en gras ou nom d'une zone voisine) : sinon on répond par élimination
  // en lisant le dessin. La réponse, en gras, devient « ? ».
  const mask = (t, by, gras) => { const esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); svg = svg.replace(new RegExp(`(<text[^>]*${gras ? 'font-weight="bold"[^>]*' : ""}>)${esc}(</text>)`, gras ? "" : "g"), `$1${by}$2`); };
  options.filter(o => o !== target).forEach(o => mask(o, "<tspan opacity=\"0.5\">…</tspan>"));
  mask(target, "<tspan font-size=\"15\">?</tspan>", true);
  return { svg, options, answer: options.indexOf(target) };
}

// Lexique : fiches où le terme apparaît (titre, synthèse, astuce), pluriel compris. « ban (de vendanges) » → « ban ».
function lexFiches(t, fiches) {
  const variants = t.terme.replace(/\(.*?\)/g, "").split("/").map(normalize).filter(Boolean);
  const res = variants.map(v => new RegExp(`(^| )${v}(s|x)?( |$)`));
  const hit = s => res.some(r => r.test(s));
  return fiches.filter(f => hit(texteNorm(f))).sort((a, b) => hit(normalize(b.titre)) - hit(normalize(a.titre))); // terme dans le titre d'abord
}
const mots = memo(s => normalize(s).split(" "));
// Texte normalisé une fois par fiche : lexFiches le teste pour chaque terme (84 × 748 normalize coûtaient ≈ 1 s au chargement).
const texteNorm = memo(f => normalize(f.titre + " " + f.synth + " " + f.mnemo));
// Racine du premier mot du terme (bouturage → boutur, greffe → greffe).
const racine = memo(terme => { const w = normalize(terme).split(" ")[0]; return w.length <= 5 ? w : w.slice(0, Math.max(5, w.length - 3)); });
const lexStem = t => racine(t.terme);
// Les 6 premières fiches d'un terme, lues dans data/lexique-fiches.js (écrit par tools/sync-site.mjs : 84 termes × 967 fiches
// coûtaient plus d'une seconde à chaque ouverture sur téléphone) ; calculées ici pour un terme absent du fichier.
function fichesDuTerme(t, fiches) {
  const ids = typeof LEXIQUE_FICHES !== "undefined" && LEXIQUE_FICHES[t.terme];
  return ids ? ids.map(id => fiches.find(f => f.id === id)).filter(Boolean) : lexFiches(t, fiches).slice(0, 6);
}
// Un QCM par terme (définition → terme), rattaché à la première fiche qui l'emploie ; l'étymologie sert de correction.
function lexiqueExercises(lex, fiches) {
  return lex.map(t => ({ t, f: fichesDuTerme(t, fiches)[0] })).filter(x => x.f).map(({ t, f }) => {
    // Leurres : jamais un terme parent (l'un cite l'autre, ex. clone ↔ bouture), sinon deux réponses défendables.
    const lie = o => [o.def + " " + o.declic, t.def + " " + t.declic].some((txt, i) => mots(txt).some(w => w.startsWith(lexStem(i ? o : t))));
    const options = shuffle([t.terme, ...shuffle(lex.filter(o => o !== t && !lie(o))).slice(0, 3).map(o => o.terme)]);
    // La définition ne doit pas souffler la réponse (« par bouture » → bouturage) : mots de la même racine masqués.
    const def = t.def.replace(/[\p{L}’'-]+/gu, w => mots(w).some(m => m.startsWith(lexStem(t))) ? "…" : w);
    return { id: "lx-" + normalize(t.terme).replace(/ /g, "-"), type: "mcq_single", prompt: "Lexique — quel terme correspond à : « " + def + " » ?",
      payload: { options, answer: options.indexOf(t.terme) }, explanation: `Étymologie : ${t.etym} ${t.declic}`, fiche: f };
  });
}

// Ma cave (fichier privé) : « ta bouteille X illustre quelle notion ? », un QCM par fiche reliée à une cuvée par un fait documenté.
// vins : [{ cuvee, dom, couleur, liens: { <id fiche>: { k: "appel"|"cepage"|"notion", t: tag, d: détail, s: "ok"|"warn" } } }]
// Leurres : fiches de techniques réservées à un autre style de vin (bulles, vins doux, rosé),
// donc fausses à coup sûr pour cette bouteille — un fait non documenté ne peut pas rendre un leurre juste.
const CAVE_STYLES = { bulles: [583, 636, 464, 404], doux: [635, 469, 346, 235], rose: [351] };
function styleVin(c) { c = normalize(c); return /efferv|bulle|cremant/.test(c) ? "bulles" : /doux|vdn|liquoreux|moelleux/.test(c) ? "doux" : /^rose/.test(c) ? "rose" : /rouge/.test(c) ? "rouge" : c ? "blanc" : ""; }
function caveExercises(vins, fiches) {
  const byId = Object.fromEntries(fiches.map(f => [f.id, f]));
  return fiches.flatMap(f => {
    const bons = vins.filter(v => v.liens && v.liens[f.id] && v.liens[f.id].k === "notion" && styleVin(v.couleur || ""));
    if (!bons.length) return [];
    const v = shuffle(bons)[0], l = v.liens[f.id], st = styleVin(v.couleur);
    const exclus = { bulles: ["bulles"], doux: ["doux"], rose: ["rose"], rouge: [], blanc: [] }[st];
    const leurres = shuffle(Object.entries(CAVE_STYLES).filter(([k]) => !exclus.includes(k)).flatMap(([, ids]) => ids)
      .filter(id => byId[id] && id !== f.id && !v.liens[id]).map(id => byId[id].titre)).slice(0, 3);
    if (leurres.length < 3) return [];
    const options = shuffle([f.titre, ...leurres]);
    return [{ id: "cv-" + f.id, type: "mcq_single", prompt: "Dans ta cave : « " + v.cuvee + " » (" + v.dom + ") illustre quelle notion ?",
      payload: { options, answer: options.indexOf(f.titre) }, explanation: (l.s === "ok" ? "✅ " : "⚠️ ") + l.d, fiche: f }];
  });
}
// Questions de révision écrites pour chaque vin (champ questions) : flashcards rattachées à la fiche de l'appellation (sinon à la première fiche liée).
// Id tiré du domaine et de la cuvée : la mémorisation survit à un nouvel import du même fichier.
function caveQuestions(vins, fiches) {
  const byId = Object.fromEntries(fiches.map(f => [f.id, f]));
  return vins.flatMap(v => {
    const ids = Object.keys(v.liens || {}), f = byId[ids.find(id => v.liens[id].k === "appel")] || byId[ids.find(id => byId[id])];
    if (!f) return [];
    const base = "cv-q-" + normalize(v.dom + " " + v.cuvee).replace(/ /g, "-");
    return (v.questions || []).map((q, i) => ({ id: base + "-" + i, type: "flashcard", prompt: "Ta bouteille « " + v.cuvee + " » (" + v.dom + ") : " + q.q, payload: { answer: q.r }, fiche: f }));
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

// Réponse tapée : singulier et pluriel valent pareil (« variété européenne primitive » = « variétés européennes primitives »).
const libre = s => normalize(s).split(" ").map(w => w.length > 3 ? w.replace(/[sx]$/, "") : w).join(" ");

// « Remettre dans l'ordre » : la date entre parenthèses donnerait la réponse ; masquée à l'affichage, rendue à la correction.
const sansDate = s => s.replace(/\s*\([^()]*(\b1\d{3}\b|\b20\d{2}\b|siècle|années)[^()]*\)/g, "").trim();

const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// Vrai si la réponse est juste. null pour les cartes auto-évaluées.
function grade(ex, answer) {
  const p = ex.payload;
  switch (ex.type) {
    case "flashcard": case "flashcard_reverse": return null;
    case "mcq_single": case "odd_one_out": case "true_false": case "label_schema": return answer === p.answer;
    case "mcq_multi": return same([...answer].sort(), [...p.answers].sort());
    case "short_answer": return p.accepted.some(a => libre(a) === libre(answer));
    case "cloze": return clozeParts(p.text).filter((_, i) => i % 2).every((v, k) => v.some(a => libre(a) === libre(answer[k] || "")));
    case "matching": return same(answer, p.pairs.map(x => x[1]));
    case "ordering": return same(answer, p.items);
  }
  throw new Error("Type d'exercice inconnu : " + ex.type);
}

// Restauration d'une sauvegarde : fusion avec la progression du navigateur, sans rien perdre de récent.
// Par exercice, on garde la réponse la plus récente (due - intervalle = date de la dernière réponse, comme dans planSession).
function fusionner(cur, inc) {
  const out = { ...cur };
  for (const k in inc) if (!out[k] || quand(inc[k]) > quand(out[k])) out[k] = inc[k];
  return out;
}
// Listes datées (journal, séances) : union sans doublon, par date, bornée aux n dernières entrées.
function fusionnerListe(a, b, cle, n) {
  const vu = new Map();
  for (const x of [...a, ...b]) vu.set(cle(x), x);
  return [...vu.values()].sort((x, y) => x.t - y.t).slice(-n);
}

// Rythme pour une échéance : nouvelles fiches par jour pour avoir tout vu la veille au soir (jamais moins que le rythme de base).
// Échéance passée : rythme de base (sinon toutes les fiches restantes chaque jour, une séance de plus de 1 000 exercices).
function rythme(restantes, t, echeance, base = 5) {
  const reste = new Date(echeance + "T23:59:59").getTime() - t;
  return reste > 0 ? Math.max(base, Math.ceil(restantes / Math.ceil(reste / 86400000))) : base;
}

// Date d'une réponse (rate() pose due = réponse + intervalle) et groupe d'un exercice : sa fiche (le lexique et la cave à part).
const quand = p => p.due - (p.interval || 0) * 86400000;
const groupeId = id => (id.match(/^mv-\d+/) || [id])[0];
// Dernier exercice répondu de chaque groupe : il porte l'état de la fiche (facilité, intervalle, échéance).
function derniersEtats(prog) { const m = new Map(); for (const id in prog) { const g = groupeId(id), a = m.get(g); if (!a || quand(prog[id]) > quand(prog[a])) m.set(g, id); } return m; }
// Une réponse repart de l'état de la fiche, pas de celui de l'exercice : un exercice jamais posé d'une fiche connue ne la ramène pas à 1 jour.
function noterFiche(id, prog, quality, t) { const d = derniersEtats(prog).get(groupeId(id)); return suivante(d && prog[d], quality, t); }

// Répétition espacée (type SM-2 simplifié) : état après une réponse 'hard' | 'ok' | 'easy' donnée au temps t.
// Pas de plafond à l'échéance : il faisait revenir presque toutes les fiches le dernier jour (simulation du 02/11).
function suivante(p, quality, t) {
  p = { ease: 2.3, interval: 0, due: 0, acquired: false, ...p };
  if (quality === 'hard') { p.ease = Math.max(1.3, p.ease - 0.2); p.interval = 1; }
  else if (quality === 'ok') p.interval = p.interval ? Math.round(p.interval * p.ease) : 1;
  else { p.ease += 0.1; p.interval = p.interval ? Math.round(p.interval * p.ease * 1.3) : 2; }
  p.due = t + p.interval * 86400000;
  p.acquired = true;
  return p;
}

// Séance : une notion (fiche) au plus par séance, un seul calendrier par fiche (celui de son dernier exercice répondu).
// Fiche échue : un exercice jamais posé d'abord, sinon le moins récemment posé (avant : chaque exercice avait son calendrier
// et un exercice neuf s'ajoutait chaque jour, si bien qu'une fiche revenait presque tous les jours ; simulation du 02/11).
// Les nouvelles fiches du jour (2 exercices chacune) ont leurs places ; les révisions prennent le reste, les plus en retard d'abord.
// lues[ficheId] = horodatage de la lecture (1 pour les lectures d'avant le quota : jamais « aujourd'hui »).
const RESTITUER = ["flashcard", "cloze", "short_answer", "flashcard_reverse", "ordering"];
function planSession(pool, prog, lues, t, { max = 20, newFiches = 5, perNew = 2 } = {}) {
  const dayStart = new Date(t).setHours(0, 0, 0, 0), groups = new Map();
  for (const e of pool) { const k = /^mv-/.test(e.id) ? e.fiche.id : e.id; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); } // le lexique et la cave comptent à part
  const due = [], fresh = [];
  let started = 0;
  for (const [k, exos] of groups) {
    const vus = exos.filter(e => prog[e.id]);
    if (!vus.length) { fresh.push(exos); continue; }
    if (lues[k] >= dayStart) started++;
    const d = vus.reduce((a, e) => quand(prog[e.id]) > quand(prog[a.id]) ? e : a);
    if (prog[d.id].due <= t) due.push([prog[d.id].due, exos.find(e => !prog[e.id]) || vus.reduce((a, e) => quand(prog[e.id]) < quand(prog[a.id]) ? e : a)]);
  }
  // Ordre du livre, puis les fiches hors livre (France) par id.
  const rang = f => f.page || (f.source === "france" ? 1e6 : 0);
  fresh.sort((a, b) => rang(a[0].fiche) - rang(b[0].fiche) || a[0].fiche.id - b[0].fiche.id);
  // Livre et hors livre en alternance : la France ne doit pas attendre la fin du livre.
  const livre = fresh.filter(x => x[0].fiche.page), hors = fresh.filter(x => !x[0].fiche.page);
  const melees = livre.flatMap((x, i) => hors[i] ? [x, hors[i]] : [x]).concat(hors.slice(livre.length));
  const neuves = [];
  for (const exos of melees.slice(0, Math.max(0, newFiches - started))) {
    const first = exos.find(e => e.type === "flashcard") || exos[0];
    const pick = [...new Set([first, ...exos.filter(e => e !== first && RESTITUER.includes(e.type)), ...exos.filter(e => e !== first)].slice(0, perNew))];
    if (neuves.length + pick.length > max) break;
    neuves.push(...pick);
  }
  const revues = due.sort((a, b) => a[0] - b[0]).slice(0, max - neuves.length).map(x => x[1]);
  return [...shuffle(revues), ...neuves];
}

// Atlas : un lieu par région française (dans l'ordre du sommaire, « France » = vue d'ensemble) puis par pays,
// avec toutes ses fiches quelle que soit leur partie (France, cépages, livre) : réviser Bordeaux, c'est tout Bordeaux.
function lieux(fiches, sommaire) {
  const fr = f => f.geo?.pays === "France", sections = p => [...new Set(sommaire.filter(c => (c.partie || "La France viticole") === p).map(c => c.section))];
  const out = sections("La France viticole").map(nom => ({ nom, france: true, fiches: fiches.filter(f => fr(f) && (nom === "France" ? !f.geo.region : f.geo.region === nom)) }));
  const pays = sections("Le monde viticole"), autres = [...new Set(fiches.filter(f => f.geo?.pays && !fr(f) && !pays.includes(f.geo.pays)).map(f => f.geo.pays))].sort((a, b) => a.localeCompare(b, "fr"));
  out.push(...[...pays, ...autres].map(nom => ({ nom, france: false, fiches: fiches.filter(f => f.geo?.pays === nom) })));
  return out.filter(l => l.fiches.length);
}

// Examen blanc : n exercices corrigés automatiquement, une seule par fiche, fiches tirées au hasard (chaque thème pèse son poids dans le programme).
const EXAMEN_TYPES = ["mcq_single", "mcq_multi", "true_false", "odd_one_out", "cloze", "short_answer", "matching", "ordering"];
function planExamen(pool, n = 40) {
  const par = new Map();
  for (const e of pool) if (EXAMEN_TYPES.includes(e.type)) { if (!par.has(e.fiche)) par.set(e.fiche, []); par.get(e.fiche).push(e); }
  return shuffle([...par.values()]).slice(0, n).map(es => shuffle(es)[0]);
}

// Points durs : exercices dont la facilité est basse (souvent « Difficile »), le plus fragile en tête.
// Un exercice en sort après deux réussites d'affilée dans le journal (réussie = pas ratée, et pas notée « Au hasard »/« Difficile »).
const reussie = j => j.ok === 1 ? j.r !== "hard" : j.ok === null && (j.r === "ok" || j.r === "easy");
function pointsDurs(pool, prog, journal) {
  const fin = new Map(); // id → les deux dernières réponses, réussies ou non
  for (const j of journal) fin.set(j.e, [...(fin.get(j.e) || []), reussie(j)].slice(-2));
  const sorti = id => { const d = fin.get(id) || []; return d.length === 2 && d.every(Boolean); };
  const derniers = derniersEtats(prog); // une fiche une fois : son dernier exercice porte sa facilité
  return pool.filter(e => prog[e.id] && derniers.get(groupeId(e.id)) === e.id && prog[e.id].ease < 2.3 && !sorti(e.id))
    .sort((a, b) => prog[a.id].ease - prog[b.id].ease);
}

// « Mon suivi » : indicateurs tirés du journal des réponses (indicatifs : un seul utilisateur).
// Les seconds essais (retry) ne comptent pas. Réussie / ratée / inconnue (flashcard jamais notée).
const issue = j => Array.isArray(j.c) ? j.c.reduce((a, x) => a + x, 0) >= 2 : // « Explique à un client » : au moins 2 critères cochés
  j.ok === 1 ? j.r !== "hard" : j.ok === 0 ? j.r === "ok" : // ok 0 + r « ok » : correction par mots-clés renversée par « En fait, j'avais juste »
   j.r === "ok" || j.r === "easy" ? true : j.r === "hard" ? false : null;
function suivi(journal, typeOf, prog, t) {
  const DAY = 86400000, tally = (c, s) => { c[1]++; if (s) c[0]++; };
  const imm = [0, 0], libre = [0, 0], j7 = [0, 0], j28 = [0, 0], par = new Map();
  for (const j of journal) if (!j.retry) par.set(j.e, [...(par.get(j.e) || []), j]);
  for (const [id, rs] of par) rs.forEach((j, i) => {
    const s = issue(j); if (s === null) return;
    if (!i) tally(imm, s);
    if (RESTITUER.includes(typeOf(id)) || typeOf(id) === "explain_client") tally(libre, s); // production autoévaluée : compte dans le rappel sans aide
    const ecart = i ? (j.t - rs[i - 1].t) / DAY : 0;
    if (ecart >= 5 && ecart <= 10) tally(j7, s); else if (ecart >= 21 && ecart <= 35) tally(j28, s);
  });
  // séance = réponses séparées de moins de 30 min ; durée = de l'affichage de la 1re question à la dernière réponse (séances de 2 réponses au moins)
  const seances = [];
  for (const j of [...journal].sort((a, b) => a.t - b.t)) {
    const cur = seances[seances.length - 1];
    if (cur && j.t - cur[cur.length - 1].t <= 30 * 60000) cur.push(j); else seances.push([j]);
  }
  const d = seances.filter(x => x.length > 1).map(x => x[x.length - 1].t - x[0].t + (x[0].ms || 0)).sort((a, b) => a - b);
  const mediane = d.length ? (d[(d.length - 1) >> 1] + d[d.length >> 1]) / 2 : null;
  return { immediate: imm, libre, j7, j28, mediane, nSeances: d.length,
    retard: (a => ({ n: a.filter(p => p.due <= t).length, vieux: a.filter(p => t - p.due > 7 * DAY).length }))([...derniersEtats(prog).values()].map(id => prog[id])) }; // par fiche
}
