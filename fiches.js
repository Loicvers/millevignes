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

/* Chapitres hors livre (fiches à `source: "france"`, sans `page`, avec `chapitre`) : « La France viticole » par défaut,
   ou la partie indiquée par `partie` (ex. « Le monde viticole » pour l'international).
   L'ordre de cette liste est l'ordre de lecture ; ces chapitres viennent après ceux de Mille Vignes. */
const FRANCE_SOMMAIRE = [
  { section: "France", chapitre: "La France viticole : vue d’ensemble" },
  { section: "Champagne", chapitre: "Champagne : panorama et appellations" },
  { section: "Champagne", chapitre: "Champagne : secteurs et villages" },
  { section: "Champagne", chapitre: "Champagne : élaboration et styles" },
  { section: "Alsace", chapitre: "Alsace : panorama et appellations" },
  { section: "Alsace", chapitre: "Alsace : grands crus et mentions" },
  { section: "Bourgogne", chapitre: "Bourgogne : panorama et appellations" },
  { section: "Bourgogne", chapitre: "Chablis et Grand Auxerrois" },
  { section: "Bourgogne", chapitre: "Côte de Nuits" },
  { section: "Bourgogne", chapitre: "Côte de Beaune" },
  { section: "Bourgogne", chapitre: "Côte chalonnaise" },
  { section: "Bourgogne", chapitre: "Mâconnais" },
  { section: "Beaujolais", chapitre: "Beaujolais : panorama et appellations" },
  { section: "Beaujolais", chapitre: "Beaujolais : les dix crus" },
  { section: "Jura", chapitre: "Jura : panorama et appellations" },
  { section: "Jura", chapitre: "Jura : appellations et vin jaune" },
  { section: "Savoie", chapitre: "Savoie : panorama et appellations" },
  { section: "Savoie", chapitre: "Savoie : crus et appellations" },
  { section: "Val de Loire", chapitre: "Val de Loire : panorama et appellations" },
  { section: "Val de Loire", chapitre: "Pays nantais" },
  { section: "Val de Loire", chapitre: "Anjou-Saumur" },
  { section: "Val de Loire", chapitre: "Touraine" },
  { section: "Val de Loire", chapitre: "Centre-Loire" },
  { section: "Bordeaux", chapitre: "Bordeaux : panorama et appellations" },
  { section: "Bordeaux", chapitre: "Médoc et Haut-Médoc" },
  { section: "Bordeaux", chapitre: "Graves et Pessac-Léognan" },
  { section: "Bordeaux", chapitre: "Sauternais et liquoreux" },
  { section: "Bordeaux", chapitre: "Libournais : Saint-Émilion, Pomerol et satellites" },
  { section: "Bordeaux", chapitre: "Entre-deux-Mers, Côtes et Bordeaux régionaux" },
  { section: "Sud-Ouest", chapitre: "Sud-Ouest : panorama et appellations" },
  { section: "Sud-Ouest", chapitre: "Sud-Ouest : appellations phares" },
  { section: "Vallée du Rhône", chapitre: "Vallée du Rhône : panorama et appellations" },
  { section: "Vallée du Rhône", chapitre: "Rhône Nord : les crus septentrionaux" },
  { section: "Vallée du Rhône", chapitre: "Rhône Sud : les crus méridionaux" },
  { section: "Vallée du Rhône", chapitre: "Côtes du Rhône, villages et appellations satellites" },
  { section: "Languedoc", chapitre: "Languedoc : panorama et appellations" },
  { section: "Languedoc", chapitre: "Languedoc : crus et dénominations" },
  { section: "Roussillon", chapitre: "Roussillon : panorama et appellations" },
  { section: "Roussillon", chapitre: "Roussillon : vins doux naturels et vins secs" },
  { section: "Provence", chapitre: "Provence : panorama et appellations" },
  { section: "Provence", chapitre: "Provence : appellations et dénominations" },
  { section: "Corse", chapitre: "Corse : panorama et appellations" },
  { section: "Corse", chapitre: "Corse : appellations" },
  { partie: "Le monde viticole", section: "Portugal", chapitre: "Portugal : porto" },
  { partie: "Le monde viticole", section: "Portugal", chapitre: "Portugal : madère" },
  { partie: "Le monde viticole", section: "Espagne", chapitre: "Espagne : xérès" },
];

/* Ordre d'affichage des thèmes dans le filtre */
const THEME_ORDER = [
  "Viticulture", "Cépages", "Géologie-Terroir", "Géographie viticole",
  "Classifications", "Vinification", "Élevage", "Dégustation", "Accords", "Service", "Histoire"
];
