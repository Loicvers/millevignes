import { test } from "node:test";
import assert from "node:assert/strict";
import { csvCave } from "../tools/cave-site.mjs";

test("CSV de la cave : une ligne par vin, champs internes exclus, guillemets échappés", () => {
  const csv = csvCave([{ nom: "Domaine X", region: "Loire", vins: [{ cuvee: 'Les "Clos"', cepages: [{ nom: "Chenin", pct: 100 }], accords: "poisson", a_dire: ["secret"], incertitudes: "doute" }] }, { nom: "Sans vin" }]);
  const l = csv.trim().split("\r\n");
  assert.equal(l.length, 2);
  assert.match(l[1], /"Les ""Clos"""/);
  assert.match(l[1], /Chenin 100 %/);
  assert.match(l[1], /Cépages : Chenin 100 %\. Accords : poisson\./);
  assert.doesNotMatch(csv, /secret|doute/);
});

test("CSV de la cave : accepte le fichier tel qu’importé dans l’appli", () => {
  assert.equal(csvCave({ app: "millevignes-partenaires", partenaires: [{ nom: "D", vins: [{ cuvee: "C" }] }] }).trim().split("\r\n").length, 2);
});
