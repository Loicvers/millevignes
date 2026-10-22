// La France viticole — France (hors livre). Voir l’en-tête de fiches.js et FRANCE_SOMMAIRE.
FICHES.push(
  {
    id: 402,
    theme: "Géographie viticole",
    sous: ["Régions"],
    niveau: "Fondamental",
    geo: null,
    source: "france",
    chapitre: "La France viticole : vue d’ensemble",
    titre: "La France viticole : trois climats et une pyramide d’appellations",
    synth: "Le vignoble français se partage entre trois grands types de climat, océanique, continental et méditerranéen ; le Rhône Sud, le Languedoc-Roussillon et la Provence relèvent du dernier. Par-dessus ce cadre naturel, la réglementation range les vins en pyramide : l’AOP (terroir délimité, lien étroit avec les facteurs naturels et humains), l’IGP (lien plus lâche avec une zone plus vaste) et, en bas, le vin sans indication géographique. En 2024, selon FranceAgriMer, les surfaces en production se répartissent ainsi : AOP 404 300 ha (environ 55 %), IGP 200 300 ha (environ 27 %), vin sans IG 38 700 ha (environ 5 %), le reste (environ 13 %) étant destiné aux eaux-de-vie. Le vignoble couvre quelque 740 000 ha en 2025 d’après l’OIV (792 000 ha en 2023) et il recule d’année en année. Au comptoir : AOP = une origine précise et des règles serrées ; IGP = une zone plus large, plus de liberté.",
    mnemo: "Un entonnoir retourné : tout en haut, une pointe d’AOP au tracé très serré ; au milieu, l’IGP, plus évasée ; à la base, le vin sans IG, grand ouvert sur toute la France.",
    flash: {"q":"Quels sont les trois grands climats de la France viticole ?","a":"Océanique, continental et méditerranéen.","keys":[["océanique","oceanique"],["continental"],["méditerranéen","mediterraneen","méditerranée"]]},
    qcm: {"q":"Qu’est-ce qui distingue une AOP d’une IGP ?","opts":["L’AOP exige un lien plus étroit avec un terroir délimité, par ses facteurs naturels et humains","L’IGP impose des cépages plus nombreux que l’AOP","L’AOP n’existe que pour les vins rouges","L’IGP se limite à une seule commune"],"good":0,"expl":"Les deux disent d’où vient le vin, mais pas avec la même exigence : l’AOP verrouille l’aire, les pratiques et le style, l’IGP laisse davantage de latitude. Ni la couleur ni la taille de l’aire ne les séparent de façon systématique."},
    exos: [{"type":"ordering","prompt":"Classe ces catégories, du lien le plus étroit avec l’origine au plus lâche.","payload":{"items":["AOP","IGP","Vin sans indication géographique"]},"explanation":"Plus on descend, moins le cahier des charges rattache le vin à un terroir précis, jusqu’au vin sans mention d’origine géographique."},{"type":"matching","prompt":"Associe chaque sigle à sa signification.","payload":{"pairs":[["AOP","Appellation d’origine protégée"],["IGP","Indication géographique protégée"],["Vin sans IG","Vin sans indication géographique"]]},"explanation":"Les trois sigles s’emboîtent de la protection la plus forte de l’origine (AOP) à l’absence de mention (sans IG)."},{"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"En France, toute la surface viticole en production est classée soit en AOP, soit en IGP.","answer":false},"explanation":"Il reste des surfaces en vin sans indication géographique et des vignes destinées aux eaux-de-vie (en 2024, selon FranceAgriMer)."}],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Répartition AOP / IGP / sans IG en 2024 (404 300 / 200 300 / 38 700 ha) : une seule source de niveau 1 lue (FranceAgriMer, fiche filière 2026), parts en pourcentage lues sur graphiques ⚠️","Surface du vignoble français : entre 740 000 ha (OIV 2025, relayé par Vinetur) et 792 000 ha (OIV 2023, chiffre provisoire) ; FranceAgriMer donne 783 000 ha sans année ⚠️","Trois grands climats (océanique, continental, méditerranéen) et rattachement du Rhône Sud, du Languedoc-Roussillon et de la Provence au méditerranéen : classification courante, non recoupée sur une source de niveau 1 ⚠️"],
    selon_livre: [],
    src: "FranceAgriMer, fiche filière vin (2026, campagne 2024) ; OIV, Note de conjoncture vitivinicole mondiale 2023 ; OIV, rapport 2025 (via Vinetur, mai 2026) ; D’après École du Vin de France, Le Grand Cours de dégustation (Hachette), p. 172-175 ; cf. Mille Vignes, P. Lepeltier, p. 183"
  }
);
