import { test } from "node:test";
import assert from "node:assert/strict";
import { loadFichesJs, migrate } from "../tools/migrate-fiches.mjs";

const path = new URL("../fiches.js", import.meta.url).pathname;

test("fiches France : chapitre connu, pas de page, rangées sous La France viticole", () => {
  const legacy = loadFichesJs(path);
  const m = migrate(legacy);
  for (const f of legacy.FICHES.filter(f => f.source === "france")) {
    const ref = m.notions.find(n => n.legacy_id === f.id).refs[0];
    assert.equal(ref.source_id, "france");
    assert.equal(ref.chapitre, f.chapitre);
  }
  const bad = { ...legacy, FICHES: [{ ...legacy.FICHES[0], id: 99999, source: "france", page: undefined, chapitre: "Inconnu" }] };
  assert.throws(() => migrate(bad), /absent de FRANCE_SOMMAIRE/);
});
