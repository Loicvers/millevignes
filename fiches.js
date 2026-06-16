/* ===================================================================
   FICHES.JS — Base de données des fiches de révision
   -------------------------------------------------------------------
   NE PAS MODIFIER À LA MAIN sauf si tu es à l'aise.
   À chaque chapitre lu, demande à Claude le « bloc fiche » prêt à coller :
   il suffit de l'insérer dans le tableau FICHES ci-dessous, avant le ];
   final, sans oublier la virgule de séparation.

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
   =================================================================== */

const FICHES = [
  {
    id: 1,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Bordeaux", appel: null },
    titre: "Le Cabernet-Sauvignon",
    synth: "Né d'un croisement spontané entre le Cabernet franc et le Sauvignon blanc, identifié par l'analyse ADN dans les années 1990. Cépage tardif à petites baies épaisses, riche en tanins — colonne vertébrale des grands rouges du Médoc.",
    mnemo: "« Cab-Sauv = Cabernet franc × Sauvignon blanc. » Son nom contient ses deux parents. Un croisement caché dans le nom.",
    flash: { q: "De quel croisement est issu le Cabernet-Sauvignon ?", a: "Cabernet franc × Sauvignon blanc (croisement spontané)." },
    qcm: { q: "Comment a-t-on prouvé la parenté du Cabernet-Sauvignon ?", opts: ["Par les archives monastiques", "Par analyse ADN dans les années 1990", "Par la forme des feuilles", "Par la dégustation comparée"], good: 1 },
    src: "Lepeltier, Mille Vignes — Domestication",
    page: 27
  },
  {
    id: 2,
    theme: "Cépages",
    sous: ["Mutations", "Profil & usage"],
    niveau: "Fondamental",
    geo: { pays: "France", region: "Bourgogne", appel: null },
    titre: "Le Pinot et ses mutations",
    synth: "Le Pinot est génétiquement instable : Pinot noir, gris et blanc sont le même cépage ayant muté en couleur. Cette plasticité explique une grande diversité née d'une souche unique, surtout en Bourgogne et en Alsace.",
    mnemo: "« Un seul Pinot, trois habits. » Noir, gris, blanc = même plante qui change de manteau (mutation de couleur).",
    flash: { q: "Pinot noir, gris et blanc sont-ils trois cépages distincts ?", a: "Non : un même cépage ayant muté en couleur." },
    qcm: { q: "Qu'est-ce qui distingue Pinot noir, gris et blanc ?", opts: ["Trois espèces différentes", "Des mutations de couleur d'un même cépage", "Trois régions d'origine", "Trois modes de taille"], good: 1 },
    src: "Lepeltier, Mille Vignes — Domestication",
    page: 31
  },
  {
    id: 3,
    theme: "Classifications",
    sous: ["Histoire des crus"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Bordeaux", appel: "Margaux" },
    titre: "Le classement de 1855",
    synth: "Établi pour l'Exposition universelle de Paris, ce classement hiérarchise les crus du Médoc (et Sauternes) selon le prix de vente de l'époque, en cinq niveaux. Quasi figé depuis : une seule modification majeure en plus d'un siècle et demi.",
    mnemo: "« 1855, gravé dans le marbre. » Né d'une expo, classé par le prix, presque jamais retouché. 18-55, deux paires.",
    flash: { q: "Sur quel critère reposait le classement de 1855 ?", a: "Le prix de vente des vins à l'époque." },
    qcm: { q: "À quelle occasion fut créé le classement de 1855 ?", opts: ["La Révolution française", "L'Exposition universelle de Paris", "La création des AOC", "Le phylloxéra"], good: 1 },
    src: "Lepeltier, Mille Vignes — Terroir",
    page: 183
  },
  {
    id: 4,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La véraison",
    synth: "Étape clé du cycle : le raisin change de couleur et entame sa maturation. Le grain se gorge de sucre, l'acidité chute, les arômes se forment. Compte à rebours avant les vendanges.",
    mnemo: "« Vér-aison → vert-à-raisin. » Le vert vire au raisin mûr. À partir de là, ~45 jours avant récolte.",
    flash: { q: "Sucre et acidité à la véraison ?", a: "Le sucre monte, l'acidité chute." },
    qcm: { q: "La véraison correspond à…", opts: ["La floraison", "Le changement de couleur + début de maturation", "La taille d'hiver", "La chute des feuilles"], good: 1 },
    src: "Lepeltier, Mille Vignes — Nature",
    page: 45
  },
  {
    id: 5,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Fondamental",
    geo: { pays: "France", region: "Bourgogne", appel: null },
    titre: "Le climat bourguignon",
    synth: "En Bourgogne, un « climat » n'est pas la météo : c'est une parcelle précise, délimitée et nommée, avec sa géologie et son exposition. Classés à l'UNESCO, ils incarnent l'idée française de terroir.",
    mnemo: "« En Bourgogne, le climat est un lieu, pas un temps. » Un climat = une parcelle à nom propre (ex. Montrachet).",
    flash: { q: "Que désigne un « climat » en Bourgogne ?", a: "Une parcelle de vigne délimitée et nommée." },
    qcm: { q: "Les climats de Bourgogne sont…", opts: ["Des prévisions météo", "Des parcelles délimitées classées UNESCO", "Des cépages locaux", "Des techniques de taille"], good: 1 },
    src: "Lepeltier, Mille Vignes — Terroir",
    page: 158
  }
];

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
