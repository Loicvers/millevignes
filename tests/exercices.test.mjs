import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { normalize as nodeNormalize } from "../tools/lot.mjs";

// Charge fiches.js + exercices.js comme le navigateur (scripts classiques).
const ctx = {};
for (const f of ["../fiches.js", "../exercices.js"]) vm.runInNewContext(readFileSync(new URL(f, import.meta.url), "utf8"), ctx, { filename: f });
vm.runInNewContext("this.api={FICHES,toExercises,grade,normalize,clozeParts,shuffle}", ctx);
const { FICHES, toExercises, grade, normalize, clozeParts, shuffle } = ctx.api;
const read = p => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));

test("le site produit les mêmes exercices que data/base.json", () => {
  const site = JSON.parse(JSON.stringify(FICHES.flatMap(toExercises).map(({ fiche, ...e }) => e)));
  const base = read("../data/base.json").exercises.map(({ notion_ids, content_version, ...e }) => e);
  assert.deepEqual(site, base);
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
