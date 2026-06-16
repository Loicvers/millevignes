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
,
  {
    id: 6,
    theme: "Cépages",
    sous: ["Ampélographie"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Classification botanique de Vitis vinifera",
    synth: "La vigne cultivée appartient à la famille des Vitacées, ordre des Vitales, dans le clade des Rosidés (eudicotylédones, angiospermes). Le genre Vitis regroupe une soixantaine d’espèces ; V. vinifera est la seule espèce eurasiatique largement utilisée pour le vin. Sa sous-espèce domestiquée est nommée subsp. sativa, dont le nom de référence actuel est subsp. vinifera.",
    mnemo: "Quatre ‘Vi’ qui descendent comme un escalier vers le cep : Vitales → Vitacées → Vitis → vinifera. Et au-dessus, les Rosidés (la vigne est cousine du rosier).",
    flash: { q: "À quelle famille et quel ordre appartient Vitis vinifera, et dans quel clade ?", a: "Famille des Vitacées, ordre des Vitales, clade des Rosidés (eudicotylédones, angiospermes)." },
    qcm: { q: "La sous-espèce cultivée de Vitis vinifera est nommée :", opts: ["subsp. sylvestris", "subsp. sativa (ou subsp. vinifera)", "subsp. rotundifolia", "subsp. labrusca"], good: 1 },
    src: "Mille Vignes, P. Lepeltier, p. 16 ; VIVC ; APG IV",
    page: 16
  },
  {
    id: 7,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Fondamental",
    geo: null,
    titre: "Sylvestris et sativa : les deux visages de V. vinifera",
    synth: "Vitis vinifera se divise en deux sous-espèces. La sylvestris (la lambrusque) est la forme sauvage : liane dioïque des forêts alluviales, à petites baies et pépins ronds, aujourd’hui menacée et protégée en France depuis 1995. La sativa (ou vinifera) est la forme domestiquée, hermaphrodite, sélectionnée depuis le Néolithique pour des baies plus grosses et plus sucrées ; c’est elle qui a donné toute la diversité des cépages.",
    mnemo: "Sylvestris vit dans la sylve (la forêt), sativa vient du latin satus, ‘semé, cultivé’. La sauvageonne grimpe aux arbres, la cultivée grimpe au piquet du vigneron.",
    flash: { q: "Quelles sont les deux sous-espèces de Vitis vinifera et qu’est-ce qui les distingue ?", a: "Sylvestris : sauvage, dioïque, petites baies, en voie de disparition (protégée en France depuis 1995). Sativa (ou vinifera) : domestiquée, hermaphrodite, à l’origine de tous les cépages cultivés." },
    qcm: { q: "La lambrusque (V. vinifera subsp. sylvestris) se distingue de la forme cultivée principalement par :", opts: ["Ses fleurs hermaphrodites", "Sa dioécie (pieds mâles et pieds femelles séparés)", "Sa résistance naturelle au phylloxéra", "Son origine nord-américaine"], good: 1 },
    src: "Mille Vignes, P. Lepeltier, p. 17-18 ; INRAE ; arrêté de protection 1995",
    page: 17
  },
  {
    id: 8,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Fondamental",
    geo: null,
    titre: "Domestication de la vigne : le foyer caucasien",
    synth: "La vigne cultivée est née d’une longue domestication de la lambrusque sauvage, amorcée au Néolithique vers 8000 av. J.-C. Le foyer le plus probable se situe dans le bassin caucasien (actuelles Géorgie, Arménie, Turquie orientale), où V. vinifera avait trouvé refuge pendant les dernières glaciations. Les plus anciens résidus de vin attestés (jarres néolithiques) y sont datés d’environ 6000 av. J.-C.",
    mnemo: "Berceau caucasien = vin de Géorgie en qvevri. Quand la dernière glace recule, la vigne sort de sa cachette de montagne et entre chez les hommes.",
    flash: { q: "Où et quand situe-t-on le foyer principal de domestication de Vitis vinifera ?", a: "Dans le bassin caucasien (Géorgie, Arménie, Turquie orientale), à partir d’environ 8000 av. J.-C., au Néolithique." },
    qcm: { q: "Le foyer le plus probable de domestication de la vigne se situe :", opts: ["Dans la vallée du Nil", "Sur les rives de la Méditerranée occidentale", "Dans le bassin caucasien", "En Mésopotamie centrale"], good: 2 },
    src: "Mille Vignes, P. Lepeltier, p. 18 ; P. McGovern ; Zohary & Hopf",
    page: 18
  },
  {
    id: 9,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La vigne, liane arbustive et pérenne",
    synth: "La vigne est une liane verte, arbustive et pérenne, au potentiel adaptatif remarquable. En tant qu’eudicotylédone, elle possède une racine principale pivotante et un cambium qui lui permet de produire du bois et de s’épaissir année après année. Plante à graine, sa fécondation donne un fruit (la baie) dont l’embryon, le pépin, est entouré d’une pulpe nourricière.",
    mnemo: "La vigne, c’est l’arbre déguisé en liane : un cambium d’arbre (pour faire du bois) et un port de liane (qui s’accroche pour aller chercher la lumière). De là sa nature protéiforme.",
    flash: { q: "Pourquoi dit-on de la vigne qu’elle est à la fois une liane et une plante ligneuse ?", a: "Liane par son port grimpant qui cherche la lumière à l’aide de vrilles ; ligneuse car, comme toutes les dicotylédones, son cambium produit du bois et lui permet de s’épaissir et de vivre plusieurs décennies." },
    qcm: { q: "Sur le plan botanique, le pépin de raisin correspond à :", opts: ["Un fruit complet à lui seul", "L’embryon entouré de réserves nutritives", "Une racine modifiée", "Un bourgeon dormant"], good: 1 },
    src: "Mille Vignes, P. Lepeltier, p. 16-17",
    page: 16
  },
  {
    id: 10,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: null,
    titre: "Génome de la vigne : un ‘fossile vivant’ des plantes à fleurs",
    synth: "Le génome de Vitis vinifera (souche PN40024 de Pinot noir) a été entièrement séquencé en 2007 par un consortium franco-italien (Génoscope/INRA). Il révèle une structure très ancestrale, proche de celle de l’ancêtre commun des eudicotylédones, ce qui vaut à la vigne le surnom de ‘fossile vivant’ des plantes à fleurs. Il est particulièrement riche en gènes de la voie des terpènes, des stilbènes et des tanins, ce qui éclaire la complexité aromatique et phénolique du vin.",
    mnemo: "2007, l’année du Pinot noir au microscope. La rose a évolué côté pétales, la vigne est restée ‘archaïque’ dans ses chromosomes : un cœlacanthe végétal, mais avec une trousse d’arômes bien remplie.",
    flash: { q: "En quelle année et sur quel cépage le génome de la vigne a-t-il été décodé ? Qu’a-t-il révélé ?", a: "En 2007, à partir du Pinot noir (souche PN40024). Le génome présente une structure proche de l’ancêtre des eudicotylédones et une richesse marquée en gènes liés aux terpènes et aux polyphénols." },
    qcm: { q: "Le séquençage du génome de la vigne (2007) a notamment mis en évidence :", opts: ["Une duplication récente du génome propre à la vigne", "Une structure proche de l’ancêtre des eudicotylédones et une richesse en gènes terpéniques", "Un nombre de chromosomes inférieur à celui des autres angiospermes", "Une origine nord-américaine de V. vinifera"], good: 1 },
    src: "Mille Vignes, P. Lepeltier, p. 16 ; Jaillon et al., Nature 449, 2007",
    page: 16
  },
  {
    id: 11,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vitacées, sous-genres et trois bassins de Vitis",
    synth: "La famille des Vitacées, apparue au Crétacé, compte une quinzaine de genres. Le genre Vitis se divise en deux sous-genres : Muscadinia (2n=40 chromosomes, américain, dont V. rotundifolia, résistante aux pathogènes) et Euvitis (2n=38), de loin le plus important. Euvitis se répartit sur trois bassins : Asie orientale (le plus riche en espèces, intéressant pour la résistance au froid), Amérique du Nord (une trentaine d’espèces coévoluées avec les futurs ravageurs du vignoble européen) et Eurasie/Proche-Orient (une seule espèce, V. vinifera, réfugiée au Caucase pendant les glaciations).",
    mnemo: "Muscadinia/Euvitis = 40/38 chromosomes : ‘le cousin américain a deux chromosomes de plus’. Trois bassins d’Euvitis = trois cadeaux : l’Asie offre le froid, l’Amérique offre la résistance, l’Eurasie offre le vin.",
    flash: { q: "Quels sont les deux sous-genres de Vitis, leurs nombres de chromosomes, et les trois bassins d’Euvitis ?", a: "Muscadinia (2n=40, américain, ~3 espèces dont V. rotundifolia) et Euvitis (2n=38). Les trois bassins d’Euvitis : Asie orientale (résistance au froid), Amérique du Nord (résistance aux pathogènes) et Eurasie/Proche-Orient (V. vinifera, l’espèce du vin)." },
    qcm: { q: "Parmi ces espèces, laquelle appartient au sous-genre Muscadinia ?", opts: ["Vitis vinifera", "Vitis riparia", "Vitis rotundifolia", "Vitis amurensis"], good: 2 },
    src: "Mille Vignes, P. Lepeltier, p. 17-18 ; Wine Grapes (Robinson/Harding/Vouillamoz) ; OIV",
    page: 17
  },
  {
    id: 12,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: { pays: "France", region: "Champagne", appel: null },
    titre: "Vitis sezannensis : le plus vieux fossile de feuille de vigne",
    synth: "Découvert au XIXᵉ siècle par le paléobotaniste Gaston de Saporta dans les travertins de Sézanne (Marne), Vitis sezannensis est l’un des plus anciens fossiles de feuille rattachés au genre Vitis. Il est daté du Paléocène, environ 58 millions d’années, et témoigne de la présence très ancienne des Vitacées en Europe occidentale. Beau clin d’œil : la Champagne, terre du vin, conserve aussi la mémoire fossile de la vigne.",
    mnemo: "Sézanne en Champagne : bulles dans le verre, vigne dans la pierre. Le terroir champenois cachait la doyenne des feuilles de vigne, 58 millions d’années avant le premier coup de sécateur.",
    flash: { q: "Quel est le plus ancien fossile connu de feuille de vigne, et où a-t-il été découvert ?", a: "Vitis sezannensis, découvert dans les travertins de Sézanne (Marne, Champagne), daté du Paléocène (~58 millions d’années)." },
    qcm: { q: "Le plus ancien fossile de feuille attribué au genre Vitis a été trouvé :", opts: ["Dans le Caucase", "En Sicile", "À Sézanne, en Champagne", "Dans les Andes"], good: 2 },
    src: "Mille Vignes, P. Lepeltier, p. 17 ; Saporta 1868 ; MNHN",
    page: 17
  }
