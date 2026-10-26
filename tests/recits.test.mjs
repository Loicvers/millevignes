import { test } from "node:test";
import assert from "node:assert";
import { readFileSync } from "node:fs";

const RECITS = new Function(readFileSync("data/recits.js", "utf8") + ";return RECITS;")();
const titres = JSON.parse(readFileSync("data/mille-vignes-sommaire.json", "utf8")).map(c => c.chapitre);
const horsLivre = new Function(readFileSync("fiches.js", "utf8") + ";return FRANCE_SOMMAIRE;")().map(c => c.chapitre);

test("chaque récit porte un titre de chapitre (livre ou hors livre) et ses champs", () => {
  for (const r of RECITS) {
    const livre = titres.includes(r.chapitre);
    assert.ok(livre || horsLivre.includes(r.chapitre), r.chapitre);
    // hors livre : pas de pages, mais les sources (src) sont obligatoires
    for (const k of [livre ? "pages" : "src", "question", "defend", "client", "filRouge"]) assert.ok(r[k], `${r.chapitre} : ${k}`);
    assert.ok(r.fil.length, r.chapitre);
  }
});
