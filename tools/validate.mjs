// Valide un lot avant import. Usage : node tools/validate.mjs lot.json [data/base.json]
import { readFileSync } from "node:fs";
import { validate, merge } from "./lot.mjs";

const [lotPath, basePath = "data/base.json"] = process.argv.slice(2);
if (!lotPath) { console.error("Usage : node tools/validate.mjs lot.json [data/base.json]"); process.exit(2); }
let lot;
try { lot = JSON.parse(readFileSync(lotPath, "utf8")); }
catch (e) { console.error(`JSON illisible : ${e.message}`); process.exit(1); }
const base = JSON.parse(readFileSync(basePath, "utf8"));

const errors = validate(lot, base);
if (errors.length) { console.error(`✗ ${errors.length} erreur(s) :\n- ` + errors.join("\n- ")); process.exit(1); }
const { report } = merge(base, lot);
console.log(`✓ Lot valide. Aperçu de l'import : ${report.created.length} création(s), ${report.updated.length} mise(s) à jour, ${report.unchanged.length} inchangé(s), ${report.conflicts.length} conflit(s).`);
if (report.conflicts.length) console.log("Conflits (contenu différent sans content_version supérieure) : " + report.conflicts.join(", "));
