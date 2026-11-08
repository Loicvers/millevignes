// Fiches de « Ma cave » pour le site / la future boutique : un CSV (une ligne par vin), lisible par Excel et importable
// dans Shopify, WooCommerce, Wix… (on y fait correspondre les colonnes à l'import).
// Usage : node tools/cave-site.mjs partenaires.json > ma-cave.csv
// Ne garde que ce qui est montrable au public : pas de « à dire au client », questions, incertitudes ni sources.
import fs from "fs";
import { fileURLToPath } from "url";

const COLONNES = [
  ["Domaine", v => v.dom], ["Région", v => v.reg], ["Cuvée", v => v.cuvee], ["Appellation", v => v.appellation],
  ["Couleur", v => v.couleur], ["Millésime", v => v.millesime_fiche],
  ["Cépages", v => (v.cepages || []).map(c => c.nom + (c.pct ? ` ${c.pct} %` : "")).join(", ")],
  ["Sol", v => v.sol], ["Culture", v => v.culture], ["Vinification", v => v.vinification], ["Élevage", v => v.elevage],
  ["Alcool", v => v.alcool], ["Dégustation", v => v.degustation],
  ["Service", v => [v.service, v.garde && "garde " + v.garde].filter(Boolean).join(" · ")], ["Accords", v => v.accords],
];
// Texte prêt à coller comme description de produit.
const description = v => COLONNES.slice(6).map(([k, f]) => [k, f(v)]).filter(([, t]) => t).map(([k, t]) => `${k} : ${t}.`).join(" ").replace(/\.\./g, ".");
const cell = x => `"${String(x ?? "").replace(/"/g, '""')}"`;

export function csvCave(fichier) {
  const partenaires = Array.isArray(fichier) ? fichier : fichier.partenaires; // format importé par l'appli : { app, version, partenaires }
  const vins = partenaires.flatMap(p => (p.vins || []).map(v => ({ ...v, dom: p.nom, reg: p.region })));
  const lignes = vins.map(v => [...COLONNES.map(([, f]) => f(v)), description(v)].map(cell).join(","));
  return "﻿" + [[...COLONNES.map(([k]) => k), "Description"].map(cell).join(","), ...lignes].join("\r\n") + "\r\n"; // BOM : accents corrects dans Excel
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!process.argv[2]) { console.error("Usage : node tools/cave-site.mjs partenaires.json > ma-cave.csv"); process.exit(1); }
  process.stdout.write(csvCave(JSON.parse(fs.readFileSync(process.argv[2], "utf8"))));
}
