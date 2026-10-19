/* EXERCICES.JS — exercices d'une fiche et correction automatique.
   Script classique (globals) : chargé par index.html, et par les tests Node via vm. */

// Même numérotation que tools/migrate-fiches.mjs : -01 flashcard, -02 QCM, -03… champ exos.
function notionId(n) { return "mv-" + String(n).padStart(4, "0"); }
function toExercises(f) {
  const id = notionId(f.id);
  return [
    { id: id + "-01", type: "flashcard", prompt: f.flash.q, payload: { answer: f.flash.a } },
    { id: id + "-02", type: "mcq_single", prompt: f.qcm.q, payload: { options: f.qcm.opts, answer: f.qcm.good }, explanation: f.qcm.expl },
    ...(f.exos || []).map((x, i) => ({ id: id + "-" + String(i + 3).padStart(2, "0"), ...x })),
  ].map(e => ({ ...e, fiche: f }));
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
    case "mcq_single": case "odd_one_out": case "true_false": return answer === p.answer;
    case "mcq_multi": return same([...answer].sort(), [...p.answers].sort());
    case "short_answer": return p.accepted.some(a => normalize(a) === normalize(answer));
    case "cloze": return clozeParts(p.text).filter((_, i) => i % 2).every((v, k) => v.some(a => normalize(a) === normalize(answer[k] || "")));
    case "matching": return same(answer, p.pairs.map(x => x[1]));
    case "ordering": return same(answer, p.items);
  }
  throw new Error("Type d'exercice inconnu : " + ex.type);
}
