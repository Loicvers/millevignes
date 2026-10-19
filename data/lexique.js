// Lexique : terme, définition, étymologie, déclic, sources, pastille. Seules les entrées appuyées sur une source consultée sont publiées.
const LEXIQUE = [
 {
  "terme": "cépage",
  "def": "Variété de vigne cultivée, définie par ses caractères propres.",
  "etym": "dérivé de cep (latin cippus, pieu) avec le suffixe -age.",
  "declic": "Le cépage, c’est la famille du cep.",
  "src": [
   "Wiktionnaire",
   "Académie française (cep)",
   "fiche 22"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "clone",
  "def": "Ensemble de plants issus d’un même pied-mère par multiplication végétative, donc génétiquement identiques.",
  "etym": "de l’anglais clone, lui-même du grec klôn, jeune pousse.",
  "declic": "Klôn = pousse : une bouture, copie du pied-mère.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "lambrusque",
  "def": "Vigne sauvage européenne (Vitis vinifera subsp. sylvestris), ancêtre de la vigne cultivée.",
  "etym": "du latin labrusca, vigne sauvage.",
  "declic": "Labrusca : la vigne d’avant la culture.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "hybride",
  "def": "Individu issu du croisement de deux espèces ou variétés différentes (en viticulture, croisement interspécifique).",
  "etym": "du latin hibrida, enfant d’un croisement, rapproché ensuite du grec hubris, excès.",
  "declic": "Hibrida : né d’un mélange, hors norme.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "teinturier (cépage)",
  "def": "Cépage à pulpe colorée, qui donne un jus rouge dès le pressurage.",
  "etym": "dérivé de teinture avec le suffixe -ier (celui qui teint).",
  "declic": "Teinturier : sa pulpe teint le vin comme un teinturier teint l’étoffe.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": "étymologie du mot général"
 },
 {
  "terme": "sarment",
  "def": "Rameau de l’année de la vigne, lignifié après l’aoûtement.",
  "etym": "du latin sarmentum, branchage coupé.",
  "declic": "Sarmentum : ce qu’on taille.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "vrille",
  "def": "Organe filiforme enroulé par lequel la vigne s’accroche à son support.",
  "etym": "du latin viticula, petite vigne (diminutif de vitis), via l’ancien français veille ; le r s’explique mal.",
  "declic": "Viticula : la petite vigne qui s’enroule.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": "apparition du r discutée"
 },
 {
  "terme": "coulure",
  "def": "Chute des fleurs ou très jeunes baies après floraison, par mauvaise fécondation ou stress.",
  "etym": "dérivé de couler avec le suffixe -ure.",
  "declic": "Les fleurs coulent au lieu de nouer.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "greffe",
  "def": "Union d’un greffon et d’un porte-greffe pour former un seul plant.",
  "etym": "de l’ancien français graife, du latin graphium, stylet.",
  "declic": "Graphium, le stylet : imagine le greffon taillé en pointe.",
  "src": [
   "Wiktionnaire"
  ],
  "status": "needs_review",
  "note": ""
 },
 {
  "terme": "terpène / terpénique",
  "def": "Famille de composés aromatiques de la vigne, logés surtout dans la pellicule : linalol, géraniol, nérol (rose, muguet, agrumes). Les muscats en sont les plus riches, puis gewurztraminer, riesling ou albariño. Dans la baie, ils sont surtout liés à des sucres, donc inodores ; la vinification (enzymes, acidité) les libère.",
  "etym": "de l’allemand Terpen, tiré de Terpentin, la térébenthine (résine de pin).",
  "declic": "Terpène = térébenthine : une famille d’odeurs de plantes. Cépage terpénique = cépage qui sent la fleur, le muscat en tête.",
  "src": [
   "La langue française (dictionnaire)",
   "Wikipédia (miroir areq.net)",
   "IFV, fiche Monoterpènes",
   "UC Davis, Waterhouse Lab, Terpenes"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "chimère",
  "def": "Plante faite de tissus qui n’ont pas tous le même patrimoine génétique. Chez la vigne, la pointe des rameaux compte deux couches de cellules, L1 (la peau des organes) et L2 (le reste) : si une mutation ne touche qu’une couche, la vigne devient une chimère. Exemple type : le pinot meunier, pinot noir dont seule la couche externe a muté, d’où ses feuilles duveteuses. Au sens large, une vigne greffée est aussi appelée chimère : deux plantes différentes soudées en une seule (racines du porte-greffe, tête du greffon).",
  "etym": "du latin chimaera, du grec khimaira : le monstre mythologique fait de morceaux d’animaux différents (lion, chèvre, serpent) ; le mot grec désignait d’abord une jeune chèvre.",
  "declic": "La Chimère du mythe est un patchwork d’animaux ; la vigne chimère, un patchwork de cellules : un manteau muté sur un pinot noir.",
  "src": [
   "Etymonline (chimera)",
   "La langue française (chimère : sens mythologique et biologique)",
   "Boss et Thomas, Nature 416, 2002 (pinot meunier, couche L1)",
   "Wine Anorak, Why Pinot Meunier is weird (2020)"
  ],
  "status": "verified",
  "note": "À ne pas confondre avec un hybride, qui mélange deux génomes dans chaque cellule."
 },
 {
  "terme": "ligneux, ligneuse",
  "def": "Qui a la nature ou la consistance du bois, grâce à la lignine qui rigidifie les tissus ; s’oppose à herbacé. Une plante ligneuse (arbre, arbuste, vigne) fabrique du bois et s’épaissit d’année en année. Chez la vigne, le rameau vert de l’année se lignifie en s’aoûtant et devient un sarment ; la rafle peut, elle aussi, rester verte ou devenir ligneuse.",
  "etym": "emprunté au latin lignosus, de même sens, dérivé de lignum, bois (attesté en français au XVIe siècle).",
  "declic": "Lignum = bois : ligneux, lignine, lignifier… tout ce qui contient « ligne » parle de bois.",
  "src": [
   "Académie française, 9e éd. (ligneux)",
   "Wiktionnaire (ligneux)",
   "fiches 9, 57 et 70"
  ],
  "status": "verified",
  "note": "À ne pas confondre avec « ligneuse », féminin du nom désignant un kayakiste de course en ligne."
 },
 {
  "terme": "nématode",
  "def": "Petit ver rond, non segmenté et souvent microscopique, qui vit dans le sol, dans l’eau ou en parasite d’animaux ou de plantes. En vigne, la plupart sont inoffensifs (prédateurs, décomposeurs), mais Xiphinema index pique les racines et transmet le virus du court-noué.",
  "etym": "du grec nêmatôdês, filamenteux, de nêma, fil (lui-même de nein, filer).",
  "declic": "Nêma = fil : le nématode est un fil vivant, un ver fin comme un fil.",
  "src": [
   "La langue française (nématode)",
   "Etymonline (nemato-)",
   "IFV / AREDVI, Court-noué et repos du sol",
   "fiches 21 et 104"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "court-noué",
  "def": "Maladie virale grave de la vigne, due surtout au GFLV (grapevine fanleaf virus), plus rarement à l’ArMV, et transmise par un nématode du sol, Xiphinema index. Symptômes : ceps rabougris, rameaux aux entre-nœuds raccourcis et déformés, feuilles déformées ou décolorées. Conséquences : coulure, millerandage, pertes de rendement (jusqu’à 80 %) et vie du cep écourtée. Aucun traitement curatif : on prévient par l’arrachage, un long repos du sol, des plants sains (sélection clonale) et des porte-greffes résistants au nématode.",
  "etym": "nom composé descriptif : court + noué, d’après les rameaux aux nœuds rapprochés (entre-nœuds courts).",
  "declic": "Court-noué : des nœuds trop courts, un cep qui rabougrit ; le coupable, un nématode qui pique les racines.",
  "src": [
   "INRAE, plaquette Vaccivine (2021)",
   "IFV / AREDVI, Court-noué et repos du sol",
   "fiches 21, 29, 88 et 104"
  ],
  "status": "verified",
  "note": "L’origine du nom n’est pas expliquée par les sources consultées ; elle est déduite de la composition du mot et du symptôme. Plus de 60 % du vignoble français serait touché (INRAE, 2021)."
 }
];
