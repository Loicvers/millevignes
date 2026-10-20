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
vm.runInNewContext("this.api={FICHES,toExercises,grade,normalize,clozeParts,shuffle}", ctx);
const { FICHES, toExercises, grade, normalize, clozeParts, shuffle } = ctx.api;
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
  }
});

test("légender le schéma : étiquettes uniques, une seule masquée, corrigé juste", () => {
  vm.runInNewContext("this.sx={schemaExercise,maskSchema}", ctx);
  const { schemaExercise, maskSchema } = ctx.sx;
  const exos = FICHES.flatMap(schemaExercise);
  assert.ok(exos.length >= 10);
  for (const ex of exos) {
    const m = maskSchema(ex.fiche.schema.svg, ex.payload.labels);
    const target = m.options[m.answer];
    assert.equal((m.svg.match(/font-weight="bold"[^>]*><tspan font-size="15">\?<\/tspan><\/text>/g) || []).length, 1, ex.id);
    assert.ok(!m.svg.includes(`>${target}</text>`), ex.id + " : l'étiquette masquée reste visible");
    assert.equal(grade({ type: "label_schema", payload: m }, m.answer), true);
  }
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

test("séance : une fiche au plus, échues d'abord, quota de nouvelles fiches, 2 exercices pour une nouvelle", () => {
  vm.runInNewContext("this.ps=planSession", ctx);
  const DAY = 86400000, t = new Date(2026, 9, 20, 12).getTime();
  const fiches = FICHES.slice(0, 12), pool = fiches.flatMap(toExercises);
  const [a, b] = fiches, ea = pool.filter(e => e.fiche === a), eb = pool.filter(e => e.fiche === b);
  const prog = {
    [ea[0].id]: { ease: 2.3, interval: 1, due: t - DAY, acquired: true },     // échus : un seul de la fiche a
    [ea[1].id]: { ease: 2.3, interval: 1, due: t - 2 * DAY, acquired: true },
    [eb[0].id]: { ease: 2.3, interval: 2, due: t + DAY, acquired: true },      // fiche b : vue il y a un jour → suite
  };
  const q = ctx.ps(pool, prog, {}, t, { max: 20, newFiches: 3 });
  const per = id => q.filter(e => e.fiche.id === id).length;
  assert.equal(q[0].id, ea[1].id, "l'échue la plus en retard d'abord");
  assert.equal(per(a.id), 1);
  assert.equal(per(b.id), 1); assert.ok(!prog[q.find(e => e.fiche === b).id], "suite : un exercice neuf");
  const neuves = [...new Set(q.map(e => e.fiche))].filter(f => f !== a && f !== b);
  assert.equal(neuves.length, 3);
  for (const f of neuves) { const mine = q.filter(e => e.fiche === f); assert.equal(mine.length, 2); assert.equal(mine[0].type, "flashcard"); }
  // fiche b répondue il y a une heure : pas de suite le même jour ; quota déjà pris par les fiches commencées aujourd'hui
  prog[eb[0].id] = { ease: 2.3, interval: 1, due: t - 3600000 + DAY, acquired: true };
  const q2 = ctx.ps(pool, prog, { [a.id]: t - 3600000, [b.id]: t - 3600000 }, t, { max: 20, newFiches: 3 });
  assert.equal(q2.filter(e => e.fiche === b).length, 0);
  assert.equal(new Set(q2.filter(e => e.fiche !== a && e.fiche !== b).map(e => e.fiche)).size, 1);
  assert.ok(ctx.ps(pool, prog, {}, t, { max: 3, newFiches: 5 }).length <= 3, "plafond de séance");
});

test("le service worker met en cache tous les fichiers locaux de index.html", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const sw = readFileSync(new URL("../sw.js", import.meta.url), "utf8");
  const listed = [...sw.matchAll(/"([^"]+\.(?:js|json|woff2|png|webmanifest|html))"/g)].map(m => m[1]);
  const needed = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
  needed.push(...[...html.matchAll(/url\(['"]?(fonts\/[^'")]+)/g)].map(m => m[1]), "manifest.webmanifest", "data/mille-vignes-sommaire.json");
  for (const f of needed) assert.ok(listed.includes(f), `${f} absent de sw.js`);
  for (const f of listed) assert.ok(existsSync(new URL("../" + f, import.meta.url)), `${f} introuvable`);
});
