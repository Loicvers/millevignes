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
  "photo": {"fichier": "Vitis vinifera subsp. sylvestris sl9.jpg", "legende": "Lambrusque (vigne sauvage) grimpée dans la cime d’un arbre.", "auteur": "Stefan Lefnaer", "licence": "CC BY-SA 4.0"},
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
  "photo": {"fichier": "Sarments vigne côte rôtie.jpg", "legende": "Fagot de sarments en Côte-Rôtie, rassemblés après la taille.", "auteur": "Olivier Lemoine", "licence": "CC BY-SA 4.0"},
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
  "photo": {"fichier": "Tendril of Solaris grapes growing in Chateaux Luna vineyard.jpg", "legende": "Vrille enroulée autour d’un fil de palissage.", "auteur": "W. Carter", "licence": "CC0"},
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
  "photo": {"fichier": "Coulure_2014_P7053002_bew.jpg", "legende": "Grappe coulurée pendant la floraison : la rafle est presque nue, les fleurs sont tombées sans former de baies.", "auteur": "Hvczech", "licence": "CC0"},
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
  "photo": {"fichier": "Greffe omega chardonnay.JPG", "legende": "Greffe oméga sur chardonnay : le greffon s’emboîte dans le porte-greffe par une découpe en Ω.", "auteur": "Epop", "licence": "domaine public"},
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
   "Online Etymology Dictionary, terpene",
   "IFV, fiche Monoterpènes",
   "UC Davis, Waterhouse Lab, Terpenes"
  ],
  "status": "needs_review",
  "note": "Étymologie à trancher : allemand Terpen (de Terpentin) selon La langue française ; l’Online Etymology Dictionary fait venir l’anglais terpene (1902) de terebene, nom tiré de la térébinthe."
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
 },
 {
  "terme": "millerandage",
  "photo": {"fichier": "Grappe_millerandage.jpg", "legende": "Grappe millerandée : des baies de tailles très inégales sur une même grappe.", "auteur": "Olivier Lemoine (Photo-Terroir.fr)", "licence": "CC BY-SA 4.0"},
  "def": "Défaut de fécondation de la vigne : dans une même grappe, une partie des baies reste très petite, souvent sans pépins, à côté de baies normales.",
  "etym": "dérivé de millerandé (« vigne millerandée ») avec le suffixe -age.",
  "declic": "Une grappe millerandée, c’est la poule et ses poussins : de grosses baies entourées de petites.",
  "src": [
   "Le Robert (millerandage)",
   "Larousse (millerandé)",
   "Fougère-Rifot, Park et Bouard, Vitis 34 (1995)",
   "fiche 65"
  ],
  "status": "verified",
  "note": "L’origine du mot millerand n’est pas expliquée par les sources consultées."
 },
 {
  "terme": "mildiou",
  "def": "Maladie de la vigne due à Plasmopara viticola, venue d’Amérique. Elle exige de l’eau libre (pluie, rosée, brouillard) : tache jaunâtre « en tache d’huile » sur le dessus de la feuille, duvet blanc au revers, grappes duveteuses puis brunes. Lutte classique au cuivre (bouillie bordelaise).",
  "etym": "de l’anglais mildew, d’abord écrit tel quel en français (1874) puis mildiou (1881) ; en vieil anglais, « rosée de miel ».",
  "declic": "Mildiou = eau : sans pluie ni rosée, pas de tache d’huile.",
  "src": [
   "CNRTL (étymologie)",
   "Chambres d’agriculture Auvergne-Rhône-Alpes, Maladies de la vigne",
   "fiche 520"
  ],
  "status": "verified",
  "note": "",
  "photo": {
   "fichier": "Plasmopara viticola a1 (4).jpg",
   "legende": "Taches de mildiou sur le dessus d’une feuille.",
   "auteur": "Jerzy Opioła",
   "licence": "CC BY-SA 4.0"
  }
 },
 {
  "terme": "oïdium",
  "def": "Maladie de la vigne due au champignon Erysiphe necator : feutrage poudreux blanc grisâtre sur feuilles et baies, qui peuvent éclater. Contrairement au mildiou, il n’a pas besoin de pluie et aime le temps doux et le feuillage dense. Lutte classique au soufre.",
  "etym": "du latin scientifique oidium, formé sur le grec ôon, « œuf ».",
  "declic": "Oïdium = poussière : il vient par temps sec, on le soufre.",
  "src": [
   "CNRTL (étymologie)",
   "Chambres d’agriculture Auvergne-Rhône-Alpes, Maladies de la vigne",
   "fiche 521"
  ],
  "status": "verified",
  "note": "",
  "photo": {
   "fichier": "Oidium vigne.jpg",
   "legende": "Grappe atteinte d’oïdium : baies poudrées de gris, certaines éclatées.",
   "auteur": "Olivier Lemoine",
   "licence": "CC BY-SA 4.0"
  }
 },
 {
  "terme": "botrytis / pourriture noble",
  "def": "Botrytis cinerea est un champignon des baies. Avec une alternance d’humidité et de temps sec, il dessèche la baie et concentre ses sucres : c’est la pourriture noble des liquoreux (Sauternes, Tokaj). Avec une humidité persistante, il laisse un feutre gris qui sent le moisi : c’est la pourriture grise, un défaut.",
  "etym": "",
  "declic": "Même champignon, deux destins : le temps qui alterne fait le liquoreux, la pluie qui dure fait le moisi.",
  "src": [
   "Ribéreau-Gayon et al., Handbook of Enology, vol. 1 (2006)",
   "fiche 346"
  ],
  "status": "verified",
  "note": "Étymologie de botrytis non vérifiée dans une source consultée.",
  "photo": {
   "fichier": "Sauternes noble rot grapes.jpg",
   "legende": "Grappe de Sauternes atteinte de pourriture noble : baies flétries, couvertes du champignon.",
   "auteur": "Edwin",
   "licence": "CC BY-SA 2.0"
  }
 },
 {
  "terme": "phylloxéra",
  "def": "Minuscule puceron d’origine américaine (Daktulosphaira vitifoliae) qui pique les racines de la vigne européenne jusqu’à la tuer ; sur les vignes américaines, il forme surtout des galles sur les feuilles. Il a ravagé le vignoble européen à partir des années 1860 ; la parade reste la greffe sur porte-greffe américain.",
  "etym": "nom scientifique créé par Planchon (Phylloxera vastatrix, 1868), du grec phullon, « feuille », et xêros, « sec ».",
  "declic": "Phyllo-xéra : la feuille sèche ; mais c’est par la racine qu’il tue.",
  "src": [
   "CNRTL (étymologie)",
   "INRAE, Encyclopédie des pucerons",
   "fiches 55 et 74"
  ],
  "status": "verified",
  "note": "",
  "photo": {
   "fichier": "Daktulosphaira vitifoliae. closeup.jpg",
   "legende": "Galles de phylloxéra au revers d’une feuille de vigne (forme des feuilles, visible surtout sur vignes américaines).",
   "auteur": "Beatriz Moisset",
   "licence": "CC BY-SA 4.0"
  }
 },
 {
  "terme": "esca",
  "def": "Maladie du bois de la vigne, causée par plusieurs champignons qui nécrosent le tronc puis le transforment en pourriture blanche (amadou). Forme lente : feuilles « tigrées » et dessèchement sur plusieurs années ; forme apoplectique : le cep meurt d’un coup en pleine chaleur. Aucun traitement autorisé depuis l’interdiction de l’arsénite de sodium (2001).",
  "etym": "",
  "declic": "Feuilles tigrées dehors, amadou dedans.",
  "src": [
   "IFV Occitanie, Esca",
   "INRAE Ephytia, Vigne : principaux symptômes",
   "fiche 83"
  ],
  "status": "verified",
  "note": "Étymologie non vérifiée dans une source consultée.",
  "photo": {
   "fichier": "Esca auf Müller-Thurgau am Versuchsgut Agneshof des LFZ Klosterneuburg 2025-08-15 01.jpg",
   "legende": "Feuille « tigrée » d’esca : bandes jaunes et brunes entre les nervures.",
   "auteur": "Tsui",
   "licence": "CC BY-SA 4.0"
  }
 },
 {
  "terme": "flavescence dorée",
  "def": "Maladie grave de la vigne due à un phytoplasme (bactérie sans paroi) et transmise par une cicadelle, Scaphoideus titanus. Feuilles décolorées (jaunes sur cépages blancs, rouges sur cépages noirs) et enroulées vers le bas, rameaux qui ne s’aoûtent pas, grappes qui se dessèchent. Elle est sans danger pour la santé humaine.",
  "etym": "",
  "declic": "Flavescence dorée : la feuille jaunit et s’enroule, la cicadelle a piqué.",
  "src": [
   "Agence canadienne d’inspection des aliments, Jaunisse de la vigne : guide d’identification",
   "fiche 154"
  ],
  "status": "verified",
  "note": "Étymologie non vérifiée dans une source consultée.",
  "photo": {
   "fichier": "Flavescence dorée 3.jpg",
   "legende": "Feuilles atteintes de flavescence dorée, décolorées et enroulées.",
   "auteur": "Josef Klement",
   "licence": "CC BY 2.0 AT"
  }
 },
 {
  "terme": "black rot",
  "def": "Maladie de la vigne due au champignon Guignardia bidwellii, venue d’Amérique du Nord. Sur les feuilles, des taches brun clair bordées de brun foncé, ponctuées de points noirs ; sur les baies, une tache qui gagne tout le grain, lequel se ride et se momifie en quelques jours, noir à reflets bleutés.",
  "etym": "mot anglais, littéralement « pourriture noire ».",
  "declic": "Black rot : la baie noircit et sèche en momie.",
  "src": [
   "INRAE Ephytia, Black rot et principaux symptômes",
   "fiche 93"
  ],
  "status": "verified",
  "note": "",
  "photo": {
   "fichier": "Guignardia bidwellii (black rot) on grape 2.jpg",
   "legende": "Grappe touchée par le black rot : baies momifiées, noires, à côté de baies encore saines.",
   "auteur": "Clemson University, USDA Cooperative Extension",
   "licence": "domaine public"
  }
 },
 {
  "terme": "macération carbonique",
  "def": "Vinification en rouge où des grappes entières, non foulées, sont placées dans une cuve saturée de gaz carbonique : privées d’oxygène, les baies commencent à fermenter de l’intérieur, sans levures (fermentation intracellulaire), puis elles sont pressées et les levures achèvent la fermentation hors des peaux. Elle extrait de la couleur mais peu de tanins et donne des vins souples et très fruités (kirsch, banane, bonbon).",
  "etym": "macération, du latin macerare, rendre mou en faisant tremper ; carbonique, de carbone (latin carbo, charbon), pour le gaz carbonique.",
  "declic": "Carbonique : la baie entière, enfermée dans le gaz, fermente de l’intérieur.",
  "src": [
   "WSET, Understanding Wines (2016), vinification des rouges",
   "Réussir Vigne, Réussir sa macération carbonique en cinq points (avec essai IFV)",
   "etymonline (macerate)",
   "fiche 236"
  ],
  "status": "verified",
  "note": ""
 },
{
  "terme": "macération semi-carbonique",
  "def": "Variante beaujolaise de la macération carbonique : les grappes entières, non éraflées, remplissent la cuve sans apport de gaz ; celles du fond, écrasées par le poids, libèrent un jus que les levures font fermenter, et le gaz carbonique ainsi produit chasse l’oxygène, si bien que les baies restées entières fermentent de l’intérieur. Après quelques jours (de 4 à 6 pour un primeur, autour de 10 à 15 pour un cru), on écoule, on presse et on termine la fermentation.",
  "etym": "semi-, du latin semi, à moitié : le gaz carbonique vient de la cuve elle-même, pas d’un apport extérieur.",
  "declic": "Semi-carbonique : la cuve fabrique elle-même son gaz.",
  "src": [
   "Inter Beaujolais, Semi-carbonic maceration (beaujolais.com)",
   "WSET, Understanding Wines (2016), vinification des rouges",
   "Réussir Vigne, Réussir sa macération carbonique en cinq points",
   "fiches 236, 475 et 499"
  ],
  "status": "verified",
  "note": ""
 }
];
