import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validate, merge, normalize, chapterAt, EXERCISE_TYPES } from "../tools/lot.mjs";
import { loadFichesJs, migrate } from "../tools/migrate-fiches.mjs";

const read = p => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const base = read("../data/base.json");
const lot = () => read("./fixtures/lot-exemple.json");

test("le lot d'exemple couvre les 10 types et il est valide", () => {
  assert.deepEqual(new Set(lot().exercises.map(e => e.type)), new Set(EXERCISE_TYPES));
  assert.deepEqual(validate(lot(), base), []);
});

test("rejets compréhensibles", () => {
  assert.match(validate({ ...lot(), schema_version: 2 }, base)[0], /schema_version/);
  const l = lot();
  l.exercises[2].payload.answer = 9;
  l.exercises[5].payload.text = "pas de trou";
  l.notions[0].theme = "Astrologie";
  l.exercises.push({ ...l.exercises[0] });
  const errs = validate(l, base).join("\n");
  for (const m of [/answer : index hors/, /au moins un trou/, /thème inconnu/, /id en double/]) assert.match(errs, m);
});

test("une explication qui recopie la synthèse est refusée", () => {
  const l = lot();
  const n = l.notions.find(x => l.exercises[0].notion_ids.includes(x.id));
  l.exercises[0].explanation = n.synth.toUpperCase();
  assert.match(validate(l, base).join(), /recopie la synthèse/);
});

test("needs_review exige les faits à vérifier", () => {
  const l = lot();
  l.notions[0].status = "needs_review";
  assert.match(validate(l, base).join(), /to_check/);
});

test("import idempotent et conflits", () => {
  const first = merge(base, lot());
  assert.equal(first.report.created.length, 12);
  const again = merge(first.base, lot());
  assert.equal(again.report.created.length, 0);
  assert.equal(again.report.unchanged.length, 12);

  const edited = lot();
  edited.notions[0].synth = "Autre texte";
  assert.deepEqual(merge(first.base, edited).report.conflicts, ["test-0001"]); // même version : rien n'est écrasé
  edited.notions[0].content_version = 2;
  const up = merge(first.base, edited);
  assert.deepEqual(up.report.updated, ["test-0001"]);
  assert.equal(up.base.notions.find(n => n.id === "test-0001").synth, "Autre texte");
});

test("migration de fiches.js sans perte", () => {
  const legacy = loadFichesJs(new URL("../fiches.js", import.meta.url).pathname);
  const m = JSON.parse(JSON.stringify(migrate(legacy))); // objets du contexte vm → objets ordinaires
  assert.deepEqual(m, base, "data/base.json doit être régénéré : node tools/migrate-fiches.mjs");
  for (const f of legacy.FICHES) {
    const n = m.notions.find(x => x.legacy_id === f.id);
    for (const k of ["theme", "niveau", "titre", "synth", "mnemo"]) assert.equal(n[k], f[k]);
    assert.equal(n.refs[0].page, f.page);
    const qcm = m.exercises.find(e => e.id === `${n.id}-02`);
    assert.equal(qcm.payload.options[qcm.payload.answer], f.qcm.opts[f.qcm.good]);
  }
});

test("normalisation des réponses saisies", () => {
  assert.equal(normalize("  Véraison "), normalize("veraison"));
  assert.equal(normalize("ŒNOLOGIE"), "oenologie");
});

test("sommaire : chapitre déduit de la page et écart signalé", () => {
  const toc = base.sources.find(s => s.id === "mille-vignes").toc;
  assert.equal(chapterAt(toc, 27).chapitre, "La classification des cépages");
  assert.equal(chapterAt(toc, 30).chapitre, "La classification des cépages");
  assert.equal(chapterAt(toc, 183).section, "Terroir");
  assert.equal(chapterAt(toc, 3), null);
  const l = lot();
  l.notions[0].refs = [{ source_id: "mille-vignes", page: 45, chapitre: "Le cépage, un concept" }];
  assert.match(validate(l, base).join(), /p\. 45 est dans « La vigne : des fleurs aux baies »/);
  l.notions[0].refs[0].chapitre = "La vigne : des fleurs aux baies";
  assert.deepEqual(validate(l, base), []);
});

test("schéma : SVG inerte et crédité seulement", () => {
  const ok = { svg: '<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="currentColor"/></svg>', legende: "Coupe d'une baie", src: "D'après Lepeltier, Mille Vignes, p. 45" };
  const l = lot();
  l.notions[0].schema = ok;
  assert.deepEqual(validate(l, base), []);
  for (const [bad, m] of [
    [{ ...ok, svg: "<img src=x>" }, /<svg>/],
    [{ ...ok, svg: '<svg onload="alert(1)"></svg>' }, /ni script/],
    [{ ...ok, svg: "<svg><script>alert(1)</script></svg>" }, /ni script/],
    [{ ...ok, svg: '<svg><image href="https://x.org/a.png"/></svg>' }, /lien externe/],
    [{ ...ok, src: "" }, /crédit/],
  ]) {
    l.notions[0].schema = bad;
    assert.match(validate(l, base).join("\n"), m);
  }
});
