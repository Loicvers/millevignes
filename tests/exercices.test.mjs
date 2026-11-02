import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";
import { normalize as nodeNormalize } from "../tools/lot.mjs";
import { fichesFiles } from "../tools/migrate-fiches.mjs";

// Charge fiches.js, fiches/*.js et exercices.js comme le navigateur (scripts classiques).
const ctx = {};
const scripts = [...fichesFiles(new URL("../fiches.js", import.meta.url).pathname), new URL("../exercices.js", import.meta.url).pathname];
for (const f of scripts) vm.runInNewContext(readFileSync(f, "utf8"), ctx, { filename: f });
vm.runInNewContext("this.api={FICHES,toExercises,grade,normalize,clozeParts,shuffle,sansDate,lexiqueExercises}", ctx);
const { FICHES, toExercises, grade, normalize, clozeParts, shuffle, sansDate, lexiqueExercises } = ctx.api;
const read = p => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));

test("le site produit les mêmes exercices que data/base.json", () => {
  const site = JSON.parse(JSON.stringify(FICHES.flatMap(toExercises).map(({ fiche, ...e }) => e)));
  const base = read("../data/base.json").exercises.map(({ notion_ids, content_version, ...e }) => e);
  assert.deepEqual(site, base);
});

test("index.html charge chaque fichier de fiches/, dans l'ordre", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const tags = [...html.matchAll(/<script src="(fiches\/[^"]+)"><\/script>/g)].map(m => m[1]);
  const files = fichesFiles(new URL("../fiches.js", import.meta.url).pathname).slice(1).map(f => "fiches/" + f.split("/").pop());
  assert.deepEqual(tags, files);
});

test("aucun fichier de fiches/ vide (écrasement accidentel)", () => {
  for (const f of fichesFiles(new URL("../fiches.js", import.meta.url).pathname).slice(1))
    assert.match(readFileSync(f, "utf8"), /FICHES\.push\(/, f + " ne contient aucune fiche");
});

test("ids de fiches uniques", () => {
  const ids = FICHES.map(f => f.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("correction de chaque type", () => {
  const ex = Object.fromEntries(read("./fixtures/lot-exemple.json").exercises.map(e => [e.type, e]));
  assert.equal(grade(ex.flashcard, null), null);
  assert.equal(grade(ex.mcq_single, 0), true);
  assert.equal(grade(ex.mcq_single, 1), false);
  assert.equal(grade(ex.mcq_multi, [3, 0, 1]), true);
  assert.equal(grade(ex.mcq_multi, [0, 1]), false);
  assert.equal(grade(ex.true_false, false), true);
  assert.equal(grade(ex.cloze, ["Sucres", "ACIDITE "]), true);
  assert.equal(grade(ex.cloze, ["sucre", ""]), false);
  assert.equal(grade(ex.short_answer, " Veraison"), true);
  assert.equal(grade(ex.short_answer, "floraison"), false);
  const pl = { type: "short_answer", payload: { accepted: ["variétés européennes primitives"] } };
  assert.equal(grade(pl, "Variété européenne primitive"), true); // singulier accepté
  assert.equal(grade(pl, "variétés européennes"), false);
  assert.equal(grade(ex.matching, ["Débourrement", "Véraison"]), true);
  assert.equal(grade(ex.matching, ["Véraison", "Débourrement"]), false);
  assert.equal(grade(ex.ordering, ["Débourrement", "Floraison", "Véraison", "Vendanges"]), true);
  assert.equal(grade(ex.ordering, ["Floraison", "Débourrement", "Véraison", "Vendanges"]), false);
  assert.equal(grade(ex.odd_one_out, 2), true);
});

test("outils", () => {
  assert.deepEqual(JSON.parse(JSON.stringify(clozeParts("a {{b|c}} d"))), ["a ", ["b", "c"], " d"]);
  for (const s of ["Œnologie Véraison", "  Gouais  blanc!", "ÉLEVAGE"]) assert.equal(normalize(s), nodeNormalize(s));
  assert.deepEqual([...shuffle([1, 2, 3, 4])].sort(), [1, 2, 3, 4]);
});

test("les pastilles d'une fiche (status, to_check) passent dans data/base.json", () => {
  const notions = read("../data/base.json").notions;
  for (const f of FICHES.filter(f => f.status)) {
    const n = notions.find(n => n.legacy_id === f.id);
    assert.equal(n.status, f.status);
    assert.deepEqual(n.to_check, JSON.parse(JSON.stringify(f.to_check ?? [])));
    assert.deepEqual(n.selon_livre, JSON.parse(JSON.stringify(f.selon_livre ?? [])));
  }
});

test("légender le schéma : étiquettes uniques, une seule masquée, corrigé juste", () => {
  vm.runInNewContext("this.sx={schemaExercise,maskSchema}", ctx);
  const { schemaExercise, maskSchema } = ctx.sx;
  const exos = FICHES.flatMap(f => schemaExercise(f, FICHES));
  assert.ok(exos.length >= 10);
  // Chaque étiquette tour à tour (un tirage au hasard laissait passer un cas sur N).
  for (const ex of exos) for (const t of ex.payload.labels) {
    const m = maskSchema(ex.fiche.schema.svg, ex.payload.labels, [t, ...ex.payload.labels.filter(l => l !== t)]);
    const target = m.options[m.answer];
    assert.equal((m.svg.match(/font-weight="bold"[^>]*><tspan font-size="15">\?<\/tspan><\/text>/g) || []).length, 1, ex.id);
    assert.ok(!m.svg.includes(`>${target}</text>`), ex.id + " : l'étiquette masquée reste visible");
    for (const o of m.options) assert.ok(!m.svg.includes(`>${o}</text>`), ex.id + " : option lisible sur le dessin (réponse par élimination)");
    assert.equal(grade({ type: "label_schema", payload: m }, m.answer), true);
  }
});

test("carte de situation : 4 propositions de la même région, réponse masquée", () => {
  vm.runInNewContext("this.sx={schemaExercise,maskSchema}", ctx);
  const { schemaExercise, maskSchema } = ctx.sx;
  const sit = FICHES.flatMap(f => schemaExercise(f, FICHES)).filter(e => e.payload.leurres);
  assert.ok(sit.length >= 80, String(sit.length));
  for (const ex of sit) {
    const m = maskSchema(ex.fiche.schema.svg, ex.payload.labels, [ex.payload.labels[0], ...ex.payload.leurres]);
    assert.equal(m.options.length, 4, ex.id);
    assert.equal(m.options[m.answer], ex.payload.labels[0], ex.id);
    for (const o of m.options) assert.ok(!m.svg.includes(`>${o}</text>`), ex.id + " : " + o + " lisible sur la carte");
  }
  // Leurres pris sur la même carte (zones voisines masquées) : sinon on les écarte sans rien situer (Margaux contre Graves, Cérons…).
  vm.runInNewContext("this.sl=schemaLabels", ctx);
  const proj = f => (f.schema.svg.match(/data-proj="([^"]*)"/) || [])[1], carte = new Map(sit.map(e => [ctx.sl(e.fiche)[0], proj(e.fiche)]));
  const meme = sit.filter(e => e.payload.leurres.every(l => carte.get(l) === proj(e.fiche))).length;
  assert.ok(meme >= 0.75 * sit.length, `${meme} sur ${sit.length} seulement avec des leurres de la même carte`);
});

test("ma cave : QCM « quelle notion », leurres d'un autre style de vin", () => {
  vm.runInNewContext("this.cv=caveExercises", ctx);
  const F = [175, 583, 636, 464, 404, 635, 469, 346, 235, 351].map(id => ({ id, titre: "T" + id }));
  const vins = [
    { cuvee: "Rouge", dom: "D", couleur: "rouge", liens: { 175: { k: "notion", t: "sol:schiste", d: "x", s: "ok" } } },
    { cuvee: "Crémant", dom: "D", couleur: "effervescent blanc", liens: { 583: { k: "notion", t: "vinif:methode-traditionnelle", d: "y", s: "ok" } } },
    { cuvee: "Inconnu", dom: "D", couleur: "", liens: { 469: { k: "notion", t: "vinif:vendanges-tardives", d: "z", s: "ok" } } },
  ];
  const ex = ctx.cv(vins, F);
  assert.deepEqual(ex.map(e => e.id).sort(), ["cv-175", "cv-583"]); // couleur inconnue → pas d'exercice
  const bulles = ex.find(e => e.id === "cv-583");
  assert.equal(bulles.payload.options[bulles.payload.answer], "T583");
  assert.ok(!bulles.payload.options.some(o => ["T636", "T464", "T404"].includes(o))); // pas d'autre technique de bulles en leurre
});

test("ma cave : questions du vin en flashcards, rattachées à la fiche d'appellation", () => {
  vm.runInNewContext("this.cq=caveQuestions", ctx);
  const F = [{ id: 1, titre: "Sol" }, { id: 2, titre: "Appellation" }];
  const vins = [
    { cuvee: "Oiseau Rare", dom: "Mas Amiel", liens: { 1: { k: "notion" }, 2: { k: "appel" } }, questions: [{ q: "Quel sol ?", r: "Le schiste." }, { q: "Quel cépage ?", r: "Le grenache." }] },
    { cuvee: "Sans lien", dom: "D", liens: {}, questions: [{ q: "?", r: "!" }] },
  ];
  const ex = ctx.cq(vins, F);
  assert.deepEqual(ex.map(e => e.id), ["cv-q-mas-amiel-oiseau-rare-0", "cv-q-mas-amiel-oiseau-rare-1"]); // sans fiche liée : pas d'exercice
  assert.equal(ex[0].fiche.id, 2);
  assert.equal(ex[1].payload.answer, "Le grenache.");
});

test("flashcard écrite : correction par mots-clés", () => {
  vm.runInNewContext("this.fk=flashKeys", ctx);
  const a = "Le baco blanc (baco 22 A), dans l’AOC Armagnac.";
  assert.equal(ctx.fk(a, "baco blanc en armagnac").ok, true);
  assert.equal(ctx.fk(a, "le folle blanche à Cognac").ok, false);
  assert.equal(ctx.fk("Run1 : l’oïdium. Rpv1 : le mildiou.", "run1 oidium, rpv1 mildiou").ok, true);
  assert.equal(ctx.fk("Oui.", "oui").ok, null); // trop court pour juger : auto-évaluation
  assert.equal(ctx.fk("En Asie, en Amérique.", "asiatique et américain").missing.length, 0); // asie ~ asiatique
  const g = [["Muscadinia"], ["40"], ["Euvitis"], ["38"], ["Asie", "asiatique"], ["Amérique", "américain"], ["Eurasie", "Caucase", "vinifera"]];
  assert.equal(ctx.fk("", "le sucre baisse et l'acidité monte", [["sucre monte"], ["acidité baisse"]]).ok, false); // ordre des mots
  const r = ctx.fk("", "Muscadinia 40 chromosomes et euvitis 38, bassin asiatique américain et caucassien", g);
  assert.equal(r.found.length, 7); assert.equal(r.ok, true);
  assert.equal(ctx.fk("", "muscadinia 38 et euvitis 40", g).ok, false); // nombres exacts
});

test("flash.keys : chaque point a des variantes réelles, et la réponse attendue les remplit tous", () => {
  vm.runInNewContext("this.fk=flashKeys", ctx);
  for (const f of FICHES.filter(f => f.flash.keys)) {
    assert.ok(f.flash.keys.every(g => g.length && g.every(alt => normalize(alt).length)), `fiche ${f.id} : variante vide`);
    const r = ctx.fk(f.flash.a, f.flash.a, f.flash.keys);
    assert.equal(r.missing.length, 0, `fiche ${f.id} : la réponse attendue ne contient pas ${r.missing.join(", ")}`);
  }
});

test("séance : un calendrier par fiche, exercice jamais posé d'abord, places réservées aux nouvelles fiches", () => {
  vm.runInNewContext("this.ps=planSession", ctx);
  const DAY = 86400000, t = new Date(2026, 9, 20, 12).getTime();
  const fiches = FICHES.filter(f => (f.exos || []).length >= 2).slice(0, 30), pool = fiches.flatMap(toExercises);
  const ex = f => pool.filter(e => e.fiche === f), [a, b, c] = fiches, [ea, eb, ec] = [a, b, c].map(ex);
  const prog = {
    [ea[0].id]: { ease: 2.3, interval: 5, due: t - 2 * DAY, acquired: true },  // ancienne réponse
    [ea[1].id]: { ease: 2.3, interval: 1, due: t - DAY, acquired: true },      // dernière réponse de la fiche a : échue
    [eb[0].id]: { ease: 2.3, interval: 2, due: t + DAY, acquired: true },      // fiche b pas échue : rien (plus d'exercice neuf chaque jour)
    [ec[0].id]: { ease: 2.3, interval: 1, due: t - 5 * DAY, acquired: true },  // ancienne réponse échue de la fiche c…
    [ec[1].id]: { ease: 2.3, interval: 10, due: t + 8 * DAY, acquired: true }, // …mais sa dernière réponse ne l'est pas : rien
  };
  const q = ctx.ps(pool, prog, {}, t, { max: 20, newFiches: 3 }), de = f => q.filter(e => e.fiche === f);
  assert.deepEqual([...de(a).map(e => e.id)], [ea[2].id], "fiche a : un seul exercice, un jamais posé");
  assert.equal(de(b).length + de(c).length, 0);
  const neuves = [...new Set(q.map(e => e.fiche))].filter(f => f !== a);
  assert.equal(neuves.length, 3);
  for (const f of neuves) { const mine = de(f); assert.equal(mine.length, 2); assert.equal(mine[0].type, "flashcard"); }
  // fiche toute vue : l'exercice le moins récemment posé
  const p2 = Object.fromEntries(ea.map((e, i) => [e.id, { ease: 2.3, interval: 1, due: t - (i === 1 ? 3 : 1) * DAY, acquired: true }]));
  assert.equal(ctx.ps(ea, p2, {}, t, { max: 5, newFiches: 0 })[0].id, ea[1].id);
  // 20 fiches échues, séance de 10 : les 3 nouvelles gardent leurs 6 places, les 4 révisions les plus en retard prennent le reste
  const p3 = Object.fromEntries(fiches.slice(0, 20).map((f, i) => [ex(f)[0].id, { ease: 2.3, interval: 1, due: t - (i + 1) * 3600000, acquired: true }]));
  const q3 = ctx.ps(pool, p3, {}, t, { max: 10, newFiches: 3 });
  assert.equal(q3.length, 10);
  assert.deepEqual(new Set(q3.slice(0, 4).map(e => e.fiche)), new Set(fiches.slice(16, 20)));
  assert.equal(q3.slice(4).filter(e => !p3[e.id] && !fiches.slice(0, 20).includes(e.fiche)).length, 6);
  // quota déjà pris par les fiches commencées aujourd'hui
  const q4 = ctx.ps(pool, prog, { [a.id]: t - 3600000, [b.id]: t - 3600000 }, t, { max: 20, newFiches: 3 });
  assert.equal(new Set(q4.filter(e => e.fiche !== a).map(e => e.fiche)).size, 1);
  assert.ok(ctx.ps(pool, prog, {}, t, { max: 3, newFiches: 5 }).length <= 3, "plafond de séance");
});

test("calendrier par fiche : une réponse repart de l'état de la fiche ; le lexique garde le sien", () => {
  vm.runInNewContext("this.nf=noterFiche", ctx);
  const t = 1e12, J = 86400000;
  const prog = { "mv-0001-01": { ease: 2.3, interval: 12, due: t, acquired: true }, "mv-0001-02": { ease: 2.3, interval: 1, due: t - 20 * J, acquired: true } };
  assert.equal(ctx.nf("mv-0001-03", prog, "ok", t).interval, Math.round(12 * 2.3), "exercice jamais posé : 12 jours × 2,3, pas 1 jour");
  assert.equal(ctx.nf("mv-0001-sit", prog, "hard", t).interval, 1);
  assert.equal(ctx.nf("lx-cepage", prog, "ok", t).interval, 1);
});

test("calendrier jusqu'à l'échéance : une séance par jour suffit à voir toutes les fiches (simulation du 02/11 au 31/12)", () => {
  vm.runInNewContext("this.sim={planSession,noterFiche,rythme,schemaExercise,lexiqueExercises}", ctx);
  const { planSession, noterFiche, rythme, schemaExercise } = ctx.sim, DAY = 86400000;
  const pool = FICHES.flatMap(f => [...toExercises(f), ...schemaExercise(f, FICHES)]), prog = {}, lues = {};
  let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; // élève fictif : 80 % de réussite en révision
  let pire = 0;
  for (let t = new Date("2026-11-02T09:00").getTime(); t <= new Date("2026-12-31T09:00").getTime(); t += DAY) {
    const vues = new Set(pool.filter(e => prog[e.id]).map(e => e.fiche)), n = rythme(FICHES.filter(f => !vues.has(f)).length, t, "2026-12-31");
    const q = planSession(pool, prog, lues, t, { max: 20 + 2 * n, newFiches: n }); pire = Math.max(pire, q.length);
    for (const e of q) { lues[e.fiche.id] ??= t; const x = r(); prog[e.id] = noterFiche(e.id, prog, x < .2 ? "hard" : x < .92 ? "ok" : "easy", t); }
  }
  const vues = new Set(pool.filter(e => prog[e.id]).map(e => e.fiche)).size;
  assert.equal(vues, FICHES.length, `${vues} fiches vues sur ${FICHES.length} au 31/12`);
  assert.ok(pire <= 80, `séance de ${pire} exercices`);
});

test("le service worker met en cache tous les fichiers locaux de index.html", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const sw = readFileSync(new URL("../sw.js", import.meta.url), "utf8");
  const listed = [...sw.matchAll(/"([^"]+\.(?:js|json|css|woff2|png|webmanifest|html))"/g)].map(m => m[1]);
  const needed = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  needed.push(...[...css.matchAll(/url\(['"]?(fonts\/[^'")]+)/g)].map(m => m[1]), "style.css", "manifest.webmanifest", "data/mille-vignes-sommaire.json");
  for (const f of needed) assert.ok(listed.includes(f), `${f} absent de sw.js`);
  assert.equal(new Set(listed).size, listed.length, "doublon dans sw.js : cache.addAll échoue (node tools/sync-site.mjs)");
  for (const f of listed) assert.ok(existsSync(new URL("../" + f, import.meta.url)), `${f} introuvable`);
});

test("points durs : un exercice fragile sort de la liste après deux réussites d'affilée", () => {
  vm.runInNewContext("this.pd=pointsDurs", ctx);
  const e = { id: "x-01" }, prog = { "x-01": { ease: 1.9, interval: 1, due: 0, acquired: true } };
  const j = (ok, r) => ({ e: "x-01", t: 1, ok, r });
  const dur = journal => ctx.pd([e], prog, journal).length;
  assert.equal(dur([j(0, "hard")]), 1);
  assert.equal(dur([j(0, "hard"), j(1, "ok")]), 1, "une seule réussite ne suffit pas");
  assert.equal(dur([j(0, "hard"), j(1, "ok"), j(1, "easy")]), 0);
  assert.equal(dur([j(1, "ok"), j(1, "hard")]), 1, "réussie au hasard : pas une maîtrise");
  assert.equal(dur([j(1, "ok"), j(1, "ok"), j(0, "hard")]), 1, "une nouvelle erreur le ramène");
  assert.equal(dur([j(null, "ok"), j(null, "easy")]), 0, "flashcard : la note compte");
});

test("suivi : réussite immédiate, rappel différé, seconds essais écartés, durée médiane", () => {
  vm.runInNewContext("this.sv=suivi", ctx);
  const DAY = 86400000, M = 60000, t0 = 1e12;
  const types = { a: "flashcard", b: "mcq_single" };
  const J = [
    { e: "a", t: t0, ok: 1, ms: 5000, r: "ok" },                    // 1re réponse réussie (restitution)
    { e: "a", t: t0 + 7 * DAY, ok: 1, ms: 5000, r: "easy" },        // ~7 jours, réussie
    { e: "a", t: t0 + 7 * DAY + 60000, ok: 0, ms: 5000, retry: 1 }, // second essai : ignoré
    { e: "b", t: t0 + M, ok: 0, ms: 5000 },                         // 1re réponse ratée (QCM)
    { e: "b", t: t0 + 30 * DAY, ok: 1, ms: 5000, r: "ok" },         // ~4 semaines, réussie
    { e: "b", t: t0 + 31 * DAY, ok: null, ms: 1 },                  // flashcard jamais notée : inconnue
  ];
  const prog = { a: { due: t0 + 40 * DAY }, b: { due: t0 + 31 * DAY } };
  const r = JSON.parse(JSON.stringify(ctx.sv(J, id => types[id], prog, t0 + 50 * DAY))); // hors du contexte vm, pour deepEqual
  assert.deepEqual(r.immediate, [1, 2]);
  assert.deepEqual(r.libre, [2, 2]);
  assert.deepEqual(r.j7, [1, 1]);
  assert.deepEqual(r.j28, [1, 1]);
  assert.deepEqual(r.retard, { n: 2, vieux: 2 });
  assert.equal(r.nSeances, 2); // a+b à 1 min ; a + son second essai à 1 min (le temps passé compte, même en retry)
  assert.equal(r.mediane, M + 5000);
});

test("suivi : le rappel sans aide lit la note des flashcards non saisies, et laisse les QCM de côté", () => {
  vm.runInNewContext("this.sv=suivi", ctx);
  const types = { f: "flashcard", q: "mcq_single", v: "true_false", m: "matching", o: "odd_one_out" };
  const J = [
    { e: "f", t: 1, ok: null, r: "easy" }, { e: "f", t: 2, ok: null, r: "ok" }, { e: "f", t: 3, ok: null, r: "hard" }, // texte non saisi
    { e: "f", t: 4, ok: 0, r: "ok" },                                                                                 // mots-clés ratés, puis « j'avais juste »
    { e: "q", t: 5, ok: 1, r: "ok" }, { e: "v", t: 6, ok: 1, r: "ok" }, { e: "m", t: 7, ok: 1, r: "ok" }, { e: "o", t: 8, ok: 1, r: "ok" },
  ];
  const r = JSON.parse(JSON.stringify(ctx.sv(J, id => types[id], {}, 10)));
  assert.deepEqual(r.libre, [3, 4]);
});

test("aucun identifiant d'exercice existant ne disparaît (la progression en dépend)", () => {
  const avant = read("./ids-exercices.json"), now = new Set(FICHES.flatMap(toExercises).map(e => e.id));
  const perdus = avant.filter(id => !now.has(id));
  assert.deepEqual(perdus, [], "ids disparus : " + perdus.join(", "));
});

test("suivi : « Explique à un client » compte dans le rappel sans aide (réussi à 2 critères sur 3)", () => {
  vm.runInNewContext("this.sv=suivi", ctx);
  const J = [{ e: "x", t: 1, ok: null, c: [1, 1, 0], r: "ok" }, { e: "y", t: 2, ok: null, c: [1, 0, 0], r: "hard" }, { e: "z", t: 3, ok: null, c: [1, 1, 1], r: "easy" }];
  const r = JSON.parse(JSON.stringify(ctx.sv(J, () => "explain_client", {}, 10)));
  assert.deepEqual(r.libre, [2, 3]);
});

test("« Remettre dans l'ordre » : aucune date ne trahit l'ordre une fois masquée", () => {
  assert.equal(sansDate("Parents du cabernet sauvignon (1997)"), "Parents du cabernet sauvignon");
  assert.equal(sansDate("Règlement (UE) sur les pratiques"), "Règlement (UE) sur les pratiques");
  const fuites = FICHES.flatMap(f => (f.exos || []).filter(e => e.type === "ordering" && e.payload.items.map(sansDate).filter(x => /\b(1\d{3}|20\d{2})\b/.test(x)).length >= 2).map(() => f.id));
  assert.equal(fuites.join(", "), "");
});

test("retours de l'iPhone : nombres, réponse courte avec d'autres mots, définition du lexique sans indice", () => {
  vm.runInNewContext("this.rk=flashKeys", ctx);
  assert.equal(grade({ type: "cloze", payload: { text: "plus de {{20 000}} semis" } }, ["20000"]), true, "20000 = 20 000");
  assert.equal(grade({ type: "short_answer", payload: { accepted: ["anthocyanes"] } }, "Les anthocyanes et plus précisément"), true);
  assert.equal(grade({ type: "short_answer", payload: { accepted: ["trois"] } }, "3"), true);
  assert.equal(grade({ type: "short_answer", payload: { accepted: ["anthocyanes"] } }, "les tanins"), false);
  const k = ctx.rk("Cent pour cent merlot.", "Merlot 100%");
  assert.equal(k.missing.length, 0); assert.equal(k.ok, true);
  const lex = [{ terme: "pyrazines (méthoxypyrazines)", def: "Molécules dont les méthoxypyrazines sont les plus connues.", declic: "" },
    { terme: "greffe", def: "Union.", declic: "" }, { terme: "vrille", def: "Organe.", declic: "" }, { terme: "moût", def: "Jus.", declic: "" }];
  const ex = lexiqueExercises(lex, [{ titre: "pyrazines", synth: "", mnemo: "" }])[0];
  assert.ok(!/pyrazi/i.test(ex.prompt), ex.prompt);
});

test("lexique : la définition ne souffle pas le terme et aucun leurre n'est un terme parent", () => {
  const lex = [
    { terme: "bouturage", def: "Multiplication par bouture.", declic: "" },
    { terme: "clone", def: "Plants identiques.", declic: "Une bouture." },
    { terme: "greffe", def: "Union.", declic: "" }, { terme: "vrille", def: "Organe.", declic: "" }, { terme: "moût", def: "Jus.", declic: "" }];
  const ex = lexiqueExercises(lex, [{ titre: "bouturage clone", synth: "", mnemo: "" }])[0];
  assert.equal(ex.prompt, "Lexique — quel terme correspond à : « Multiplication par …. » ?");
  assert.ok(!ex.payload.options.includes("clone"));
});

test("répétition espacée : difficile ramène à 1 jour, facilité plancher 1,3, facile allonge plus que correct", () => {
  vm.runInNewContext("this.sv=suivante", ctx);
  const t = 1000, J = 86400000;
  let p = ctx.sv(undefined, "ok", t);
  assert.deepEqual([p.interval, p.ease, p.due, p.acquired], [1, 2.3, t + J, true]);
  assert.equal(ctx.sv(p, "ok", t).interval, 2, "1 jour × 2,3 arrondi");
  assert.equal(ctx.sv(undefined, "easy", t).interval, 2);
  assert.equal(ctx.sv({ ease: 2.3, interval: 10 }, "easy", t).interval, Math.round(10 * 2.4 * 1.3));
  assert.equal(ctx.sv({ ease: 1.4, interval: 10 }, "hard", t).ease, 1.3);
  assert.equal(ctx.sv({ ease: 2.3, interval: 10 }, "hard", t).interval, 1);
  assert.equal(ctx.sv({ ease: 2.3, interval: 10 }, "easy", t, t + 5.5 * J).interval, 31, "pas de plafond à l'échéance (tout revenait le dernier jour)");
});

test("séance : nouvelles fiches du livre et hors livre en alternance", () => {
  vm.runInNewContext("this.ps=planSession", ctx);
  const livre = FICHES.filter(f => f.page).slice(0, 3), hors = FICHES.filter(f => !f.page).slice(0, 3);
  const q = ctx.ps([...livre, ...hors].flatMap(toExercises), {}, {}, Date.now(), { max: 40, newFiches: 4 });
  const ordre = [...new Set(q.map(e => e.fiche))].map(f => !!f.page);
  assert.deepEqual(ordre, [true, false, true, false]);
});

test("restauration : la fusion garde par exercice la réponse la plus récente et ne perd aucune entrée", () => {
  vm.runInNewContext("this.fu=fusionner;this.fl=fusionnerListe", ctx);
  const J = 86400000;
  const cur = { a: { ease: 2.3, interval: 2, due: 10 * J }, b: { ease: 2.3, interval: 1, due: 5 * J } };   // a répondu au jour 8, b au jour 4
  const inc = { a: { ease: 2.0, interval: 1, due: 6 * J }, b: { ease: 2.5, interval: 3, due: 9 * J }, c: { ease: 2.3, interval: 1, due: 3 * J } }; // a au jour 5, b au jour 6
  const m = ctx.fu(cur, inc);
  assert.equal(m.a.ease, 2.3, "a : la version du navigateur est plus récente");
  assert.equal(m.b.ease, 2.5, "b : la sauvegarde est plus récente");
  assert.ok(m.c, "c : absent du navigateur, ajouté");
  const j = ctx.fl([{ e: "x", t: 1 }, { e: "y", t: 3 }], [{ e: "x", t: 1 }, { e: "z", t: 2 }], x => x.e + "|" + x.t, 3);
  assert.equal(j.map(x => x.e).join(), "x,z,y", "union sans doublon, triée par date");
  assert.equal(ctx.fl([{ t: 1 }, { t: 2 }], [{ t: 3 }], x => x.t, 2).length, 2, "bornée aux n dernières");
});

test("échéance : rythme de nouvelles fiches pour tout voir à temps, jamais sous le rythme de base", () => {
  vm.runInNewContext("this.ry=rythme", ctx);
  const t = new Date("2026-10-28T10:00:00").getTime();
  assert.equal(ctx.ry(748, t, "2026-12-31"), 12, "748 fiches en 65 jours");
  assert.equal(ctx.ry(10, t, "2026-12-31"), 5, "plancher : le rythme de base");
  assert.equal(ctx.ry(30, t, "2026-10-01"), 5, "échéance passée : rythme de base, pas toutes les fiches restantes chaque jour");
  assert.equal(ctx.ry(30, new Date("2026-12-31T09:00:00").getTime(), "2026-12-31"), 30, "jour de l'échéance : ce qui reste");
});

test("data/lexique-fiches.js est à jour (sinon : node tools/sync-site.mjs)", async () => {
  const { lexiqueFiches } = await import("../tools/sync-site.mjs");
  assert.equal(readFileSync(new URL("../data/lexique-fiches.js", import.meta.url), "utf8"), lexiqueFiches());
});

test("le nom du cache de sw.js correspond aux fichiers du site (sinon : node tools/sync-site.mjs)", async () => {
  const { empreinte } = await import("../tools/sync-site.mjs");
  const racine = new URL("../", import.meta.url);
  const sw = readFileSync(new URL("sw.js", racine), "utf8");
  assert.equal(sw.match(/const CACHE = "([^"]+)"/)[1], empreinte(sw, f => readFileSync(new URL(f, racine))));
});

test("examen blanc : une question par fiche, types corrigés automatiquement, n au plus", () => {
  vm.runInNewContext("this.pe=planExamen", ctx);
  const pool = FICHES.flatMap(toExercises), q = ctx.pe(pool, 40);
  assert.equal(q.length, 40);
  assert.equal(new Set(q.map(e => e.fiche)).size, 40, "une seule question par fiche");
  assert.ok(q.every(e => !["flashcard", "flashcard_reverse", "explain_client"].includes(e.type)), "pas d'auto-évaluation");
  assert.equal(ctx.pe(pool.filter(e => e.fiche === FICHES[0]), 40).length, 1);
});

// Biais de réponse : « faux » partout ou « la plus longue » ne doivent pas suffire.
// Fiches existantes : cliquet (ne pas empirer, à rééquilibrer au fil des lots) ; nouvelles fiches (id > 750) : seuils visés.
const biais = fs => {
  const ex = fs.flatMap(toExercises), qcm = ex.filter(e => e.type === "mcq_single"), vf = ex.filter(e => e.type === "true_false");
  const longue = qcm.filter(e => { const l = e.payload.options.map(o => o.length); return l[e.payload.answer] > Math.max(...l.filter((_, i) => i !== e.payload.answer)); }).length; // strictement la plus longue
  return { qcm: qcm.length, longue: longue / qcm.length, vf: vf.length, vrais: vf.filter(e => e.payload.answer === true).length / vf.length };
};
test("QCM et vrai/faux : pas de biais de réponse exploitable", () => {
  const tout = biais(FICHES);
  assert.ok(tout.longue <= 0.25, `bonne réponse la plus longue : ${Math.round(100 * tout.longue)} % des QCM (cliquet 25 %, hasard à 4 options)`);
  assert.ok(tout.vrais >= 0.38, `vrais : ${Math.round(100 * tout.vrais)} % des vrai/faux (cliquet 38 %)`);
  const neuves = biais(FICHES.filter(f => f.id > 750));
  if (neuves.qcm >= 10) assert.ok(neuves.longue <= 0.35, `nouvelles fiches : bonne réponse la plus longue dans ${Math.round(100 * neuves.longue)} % des QCM (35 % au plus)`);
  if (neuves.vf >= 10) assert.ok(neuves.vrais >= 0.35 && neuves.vrais <= 0.65, `nouvelles fiches : ${Math.round(100 * neuves.vrais)} % de vrais (35 à 65 %)`);
});

test("chaque exercice corrigé a son explication (flashcards et « Explique à un client » montrent déjà la réponse)", () => {
  const sans = FICHES.flatMap(toExercises).filter(e => !e.explanation && !["flashcard", "flashcard_reverse", "explain_client"].includes(e.type));
  assert.equal(sans.map(e => e.id).join(", "), "");
});

test("atlas : chaque région du sommaire a ses fiches, toutes parties réunies", () => {
  vm.runInNewContext("this.li=lieux(FICHES,FRANCE_SOMMAIRE);this.regs=[...new Set(FRANCE_SOMMAIRE.filter(c=>!c.partie).map(c=>c.section))]", ctx);
  const noms = ctx.li.map(l => l.nom).join("|");
  for (const r of ctx.regs) assert.ok(noms.split("|").includes(r), `région sans fiches dans l'atlas (nom différent de geo.region ?) : ${r}`);
  const bx = ctx.li.find(l => l.nom === "Bordeaux"), types = new Set(bx.fiches.map(f => f.source !== "france" ? "livre" : f.theme === "Cépages" ? "cépages" : "france"));
  assert.equal([...types].sort().join(), "cépages,france,livre", "Bordeaux réunit ses fiches France, cépages et livre");
  assert.equal(new Set(ctx.li.flatMap(l => l.fiches)).size, ctx.li.reduce((s, l) => s + l.fiches.length, 0), "une fiche dans un seul lieu");
});
