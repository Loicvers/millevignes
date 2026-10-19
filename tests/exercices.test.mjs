import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
