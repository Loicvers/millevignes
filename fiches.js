/* ===================================================================
   FICHES.JS — Base de données des fiches de révision
   -------------------------------------------------------------------
   Les fiches sont rangées par section du livre dans fiches/<page>-<section>.js
   (une section = un fichier, ajout par FICHES.push). Nouveau fichier : l'ajouter
   aussi dans index.html (balise <script>), les tests le vérifient.

   Champs d'une fiche :
   - id      : numéro unique
   - theme   : thème principal (unique) — voir THEME_ORDER
   - sous    : sous-thèmes (plusieurs possibles) — voir catalogue SOUS
   - niveau  : "Fondamental" | "Intermédiaire" | "Pointu"
   - geo     : { pays, region, appel } ou null (region française : catalogue REGIONS_FR)
   - status, to_check : pastilles ; selon_livre : détails secondaires laissés au livre (hors dette)
   - titre, synth (synthèse), mnemo (astuce)
   - flash   : { q, a }  (flashcard à retourner)
   - qcm     : { q, opts:[...], good, expl } (good = index de la bonne réponse, base 0 ; expl = pourquoi, facultatif)
   - src     : source courte
   - page    : page précise dans Mille Vignes (nombre) — facultatif mais recommandé
   - source, chapitre : fiche hors livre de « La France viticole » → source: "france", chapitre pris dans FRANCE_SOMMAIRE, pas de page
   - schema  : { svg, legende, src } — schéma ORIGINAL redessiné (jamais une copie du livre),
               src = crédit « D'après Lepeltier, Mille Vignes, p. X » — facultatif
   - exos    : exercices supplémentaires { type, prompt, payload, explanation } — voir docs/IMPORT_FORMAT.md
   Après modification : node tools/migrate-fiches.mjs && node --test
   =================================================================== */

const FICHES = [];

/* Catalogue des sous-thèmes par thème.
   Ajoute librement de nouveaux sous-thèmes ici si besoin. */
const SOUS = {
  "Viticulture":        ["Cycle de la vigne", "Conduite", "Taille", "Maladies", "Sol vivant", "Biodiversité", "Modèles agricoles"],
  "Cépages":            ["Ampélographie", "Origine & parenté", "Mutations", "Profil & usage"],
  "Géologie-Terroir":   ["Roches", "Sols", "Calcaire", "Argile", "Schiste", "Galets", "Volcanique"],
  "Géographie viticole":["Notion de terroir", "Régions", "Appellations", "Climat", "Paysages"],
  "Classifications":    ["Histoire des crus", "AOC / IGP", "Hiérarchies"],
  "Vinification":       ["Macérations", "Fermentations", "Techniques", "Vin nature"],
  "Élevage":            ["Bois", "Lies", "Récipients", "Durée"],
  "Dégustation":        ["Méthode", "Arômes", "Défauts"],
  "Accords":            ["Principes", "Régionaux"],
  "Histoire":           ["Antiquité", "Moyen Âge", "Moderne"],
  "Service":            ["Contenants", "Bouchage", "Température & carafage", "Art de servir"]
};

/* Régions viticoles françaises admises dans geo.region (un test refuse tout autre nom).
   Ajouter ici une région manquante plutôt que d'inventer une variante. */
const REGIONS_FR = [
  "Alsace", "Beaujolais", "Bordeaux", "Bourgogne", "Champagne", "Charentes", "Corse", "Jura",
  "Languedoc", "Lorraine", "Provence", "Roussillon", "Savoie", "Sud-Ouest", "Val de Loire", "Vallée du Rhône"
];

/* Chapitres hors livre « La France viticole » (fiches à `source: "france"`, sans `page`, avec `chapitre`).
   L'ordre de cette liste est l'ordre de lecture ; ces chapitres viennent après ceux de Mille Vignes. */
const FRANCE_SOMMAIRE = [
  { section: "Bourgogne", chapitre: "Bourgogne : panorama et appellations" },
  { section: "Bourgogne", chapitre: "Chablis et Grand Auxerrois" },
  { section: "Bourgogne", chapitre: "Côte de Nuits" },
  { section: "Bourgogne", chapitre: "Côte de Beaune" },
  { section: "Bourgogne", chapitre: "Côte chalonnaise" },
  { section: "Bourgogne", chapitre: "Mâconnais" },
];

/* Ordre d'affichage des thèmes dans le filtre */
const THEME_ORDER = [
  "Viticulture", "Cépages", "Géologie-Terroir", "Géographie viticole",
  "Classifications", "Vinification", "Élevage", "Dégustation", "Accords", "Service", "Histoire"
];
