import { test } from "node:test";
import assert from "node:assert";
import { readFileSync } from "node:fs";

const RECITS = new Function(readFileSync("data/recits.js", "utf8") + ";return RECITS;")();
const titres = JSON.parse(readFileSync("data/mille-vignes-sommaire.json", "utf8")).map(c => c.chapitre);

test("chaque récit porte un titre de chapitre du sommaire et ses champs", () => {
  for (const r of RECITS) {
    assert.ok(titres.includes(r.chapitre), r.chapitre);
    for (const k of ["pages", "question", "defend", "client", "filRouge"]) assert.ok(r[k], `${r.chapitre} : ${k}`);
    assert.ok(r.fil.length, r.chapitre);
  }
});
