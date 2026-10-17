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
   - geo     : { pays, region, appel } ou null
   - titre, synth (synthèse), mnemo (astuce)
   - flash   : { q, a }  (flashcard à retourner)
   - qcm     : { q, opts:[...], good } (good = index de la bonne réponse, base 0)
   - src     : source courte
   - page    : page précise dans Mille Vignes (nombre) — facultatif mais recommandé
   - schema  : { svg, legende, src } — schéma ORIGINAL redessiné (jamais une copie du livre),
               src = crédit « D'après Lepeltier, Mille Vignes, p. X » — facultatif
   - exos    : exercices supplémentaires { type, prompt, payload, explanation } — voir docs/IMPORT_FORMAT.md
   Après modification : node tools/migrate-fiches.mjs && node --test
   =================================================================== */

const FICHES = [];

/* Catalogue des sous-thèmes par thème.
   Ajoute librement de nouveaux sous-thèmes ici si besoin. */
const SOUS = {
  "Viticulture":        ["Cycle de la vigne", "Conduite", "Taille", "Maladies"],
  "Cépages":            ["Ampélographie", "Origine & parenté", "Mutations", "Profil & usage"],
  "Géologie-Terroir":   ["Calcaire", "Argile", "Schiste", "Galets", "Volcanique"],
  "Géographie viticole":["Notion de terroir", "Régions", "Appellations"],
  "Classifications":    ["Histoire des crus", "AOC / IGP", "Hiérarchies"],
  "Vinification":       ["Macérations", "Fermentations", "Techniques"],
  "Élevage":            ["Bois", "Lies", "Récipients", "Durée"],
  "Dégustation":        ["Méthode", "Arômes", "Défauts"],
  "Accords":            ["Principes", "Régionaux"],
  "Histoire":           ["Antiquité", "Moyen Âge", "Moderne"],
  "Service":            ["Contenants", "Bouchage", "Température & carafage", "Art de servir"]
};

/* Ordre d'affichage des thèmes dans le filtre */
const THEME_ORDER = [
  "Viticulture", "Cépages", "Géologie-Terroir", "Géographie viticole",
  "Classifications", "Vinification", "Élevage", "Dégustation", "Accords", "Service", "Histoire"
];
