import { test } from "node:test";
import assert from "node:assert/strict";
import { indices, verifier } from "../tools/verifier-citations.mjs";

const pages = new Map([[20, "Le classement de 1855 retient 61 crus. Markham le rappelle."], [21, ""], [22, ""]]);
const fiche = t => [{ id: 1, selon_livre: [t] }];

test("indices : nombres et noms propres, pas le début de phrase", () => {
  assert.deepEqual(indices("Le classement de 1855 selon Markham compte 61 crus"), ["1855", "61", "Markham"]);
});

test("citation retrouvée sur la page ou sa voisine : rien à signaler", () => {
  assert.deepEqual(verifier(fiche("Selon le livre (p. 21) : classement de 1855, 61 crus"), pages), []);
});

test("nombre absent ou page introuvable : signalé", () => {
  assert.deepEqual(verifier(fiche("Selon le livre (p. 20) : classement de 1956"), pages)[0].absents, ["1956"]);
  assert.match(verifier(fiche("Selon le livre (p. 99) : 61 crus"), pages)[0].absents[0], /introuvable/);
});
