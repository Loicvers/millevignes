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
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « clone »"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "lambrusque",
  "photo": {"fichier": "Vitis vinifera subsp. sylvestris sl9.jpg", "legende": "Lambrusque (vigne sauvage) grimpée dans la cime d’un arbre.", "auteur": "Stefan Lefnaer", "licence": "CC BY-SA 4.0"},
  "def": "Vigne sauvage européenne (Vitis vinifera subsp. sylvestris, aussi écrit silvestris), dont l’homme a tiré la vigne cultivée. Ses pieds sont mâles ou femelles, alors que la vigne cultivée a des fleurs hermaphrodites.",
  "etym": "du latin labrusca, vigne sauvage.",
  "declic": "Labrusca : la vigne d’avant la culture.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « wild vines »"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "hybride",
  "def": "En viticulture, cépage né du croisement de deux espèces de vigne différentes (par exemple une vigne américaine et Vitis vinifera). Le croisement de deux variétés de la même espèce s’appelle un croisement, pas un hybride. Les textes européens parlent de « croisement interspécifique ».",
  "etym": "du latin hibrida, enfant d’un croisement, rapproché ensuite du grec hubris, excès.",
  "declic": "Hibrida : né d’un mélange, hors norme.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « hybrids »"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "teinturier (cépage)",
  "def": "Cépage à pulpe colorée, qui donne un jus rouge dès le pressurage ; on le plantait pour foncer des vins trop pâles.",
  "etym": "dérivé de teinture avec le suffixe -ier (celui qui teint).",
  "declic": "Teinturier : sa pulpe teint le vin comme un teinturier teint l’étoffe.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « teinturier »"
  ],
  "status": "verified",
  "note": "étymologie du mot général"
 },
 {
  "terme": "sarment",
  "photo": {"fichier": "Sarments vigne côte rôtie.jpg", "legende": "Fagot de sarments en Côte-Rôtie, rassemblés après la taille.", "auteur": "Olivier Lemoine", "licence": "CC BY-SA 4.0"},
  "def": "Rameau de l’année de la vigne, lignifié après l’aoûtement.",
  "etym": "du latin sarmentum, branchage coupé.",
  "declic": "Sarmentum : ce qu’on taille.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « cane »"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "vrille",
  "photo": {"fichier": "Tendril of Solaris grapes growing in Chateaux Luna vineyard.jpg", "legende": "Vrille enroulée autour d’un fil de palissage.", "auteur": "W. Carter", "licence": "CC0"},
  "def": "Organe filiforme qui s’enroule au contact d’un support pour que la vigne grimpe. Chez la vigne, c’est une grappe avortée ; elle se lignifie une fois enroulée et devient alors très dure.",
  "etym": "du latin viticula, petite vigne (diminutif de vitis), via l’ancien français veille ; le r s’explique mal.",
  "declic": "Viticula : la petite vigne qui s’enroule.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « tendril »"
  ],
  "status": "verified",
  "note": "apparition du r discutée"
 },
 {
  "terme": "coulure",
  "photo": {"fichier": "Coulure_2014_P7053002_bew.jpg", "legende": "Grappe coulurée pendant la floraison : la rafle est presque nue, les fleurs sont tombées sans former de baies.", "auteur": "Hvczech", "licence": "CC0"},
  "def": "Chute excessive des fleurs ou des très jeunes baies pendant ou juste après la floraison, qui laisse des grappes clairsemées. Elle vient d’un manque de sucres dans la plante : temps froid, couvert et humide à la floraison, ou vigueur excessive des rameaux. Grenache, malbec et merlot y sont très sensibles.",
  "etym": "dérivé de couler avec le suffixe -ure.",
  "declic": "Les fleurs coulent au lieu de nouer.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « coulure »"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "greffe",
  "photo": {"fichier": "Greffe omega chardonnay.JPG", "legende": "Greffe oméga sur chardonnay : le greffon s’emboîte dans le porte-greffe par une découpe en Ω.", "auteur": "Epop", "licence": "domaine public"},
  "def": "Union d’un greffon et d’un porte-greffe pour former un seul plant.",
  "etym": "de l’ancien français graife, du latin graphium, stylet.",
  "declic": "Graphium, le stylet : imagine le greffon taillé en pointe.",
  "src": [
   "Wiktionnaire",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « grafting »"
  ],
  "status": "verified",
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
   "UC Davis, Waterhouse Lab, Terpenes",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « terpenes »"
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
  "photo": {"fichier": "Xiphinema sp. Juvenile (J1).jpg", "legende": "Xiphinema, genre du nématode vecteur du court-noué : jeune individu au microscope (×1000).", "auteur": "Wperazap", "licence": "CC BY-SA 4.0"},
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
  "photo": {"fichier": "Bugwood 5356702", "url": "https://bugwoodcloud.org/images/768x512/5356702.jpg", "page": "https://www.ipmimages.org/browse/image/5356702", "source": "Bugwood.org", "legende": "Feuille de vigne atteinte de court-noué : limbe déformé, nervures rapprochées en éventail.", "auteur": "William M. Brown Jr.", "licence": "CC BY-NC 3.0 (usage non commercial)"},
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
 },
 {
  "terme": "moût",
  "def": "Jus de raisin non fermenté, obtenu par foulage ou pressurage, qui deviendra du vin par la fermentation alcoolique. C’est la matière première de la vinification : on y règle encore le degré (chaptalisation), on le clarifie (débourbage) et on le protège (SO2) avant l’arrivée des levures.",
  "etym": "du latin mustum, « (vin) nouveau » ; l’accent circonflexe remplace le s de l’ancienne graphie moust.",
  "declic": "Le moût, c’est la pâte du vin : le sucre, l’acidité et les arômes en puissance sont là, mais rien n’a encore « cuit ».",
  "src": [
   "Larousse (moût)",
   "Wiktionnaire (moût)",
   "Online Etymology Dictionary (must)",
   "WSET, Understanding Wines (2016), ajustements du moût",
   "fiches 243 et 352"
  ],
  "status": "verified",
  "note": "L’Académie française (7e éd.) définit le moût comme un vin qui vient d’être fait et n’a pas encore fermenté ; même sens."
 },
{
  "terme": "lies (et autolyse)",
  "def": "Dépôt de levures mortes et de débris de raisin qui se forme au fond d’une cuve ou d’un fût après la fermentation. Les lies grossières tombent en quelques heures et s’éliminent vite ; les lies fines, plus lentes à se déposer, peuvent rester au contact du vin. Leur autolyse, dégradation des levures mortes par leurs propres enzymes, libère des composés qui stabilisent le vin et, en bouteille sur lattes dans un effervescent, donne des notes de pain, de biscuit et de toast. Mal conduites, les lies donnent au contraire des odeurs de réduit.",
  "etym": "lie : du bas latin lias, d’un mot gaulois liga, « dépôt » (Larousse) ; autolyse : de auto- et de lyse (grec lusis, « dissolution »), mot daté de 1903.",
  "declic": "Les levures épuisées s’allongent au fond du fût, et en se défaisant elles laissent au vin leur parfum de pain.",
  "src": [
   "Larousse (lie)",
   "Académie française, 9e éd. (lie)",
   "WSET, Understanding Wines (2016), lies, soutirage et production d’effervescents",
   "Office québécois de la langue française, Grand dictionnaire terminologique (autolyse)",
   "La langue française (dictionnaire), autolyse",
   "Online Etymology Dictionary (lees)",
   "fiches 241 et 583"
  ],
  "status": "verified",
  "note": "Étymologie de lie divergente : gaulois liga pour Larousse et le Wiktionnaire, « origine incertaine » pour l’Académie, racine celtique pour l’Online Etymology Dictionary (le gaulois est une langue celtique : pas de contradiction réelle). Le gras et la longueur attribués aux lies sont un avis de Lepeltier que le Handbook of Enology juge faible (voir fiche 241) : non repris ici."
 },
{
  "terme": "bâtonnage",
  "def": "Opération qui consiste à remuer les lies fines déposées au fond d’un fût ou d’une cuve (traditionnellement avec un bâton) pour les remettre en suspension dans le vin. On le pratique surtout sur des blancs, pour chercher plus de rondeur et de texture ; il accélère l’autolyse des lies.",
  "etym": "de bâton avec le suffixe -age : on remue les lies avec un bâton.",
  "declic": "Le bâtonnage, c’est la cuillère dans le chocolat chaud : on remet en suspension ce qui s’était déposé au fond.",
  "src": [
   "WSET, Understanding Wines (2016), vinification des blancs (lees stirring)",
   "Oxford Companion to Wine (JancisRobinson.com), « bâtonnage » (extrait : terme français pour lees stirring)",
   "iDealwine, Les mots de l’élevage",
   "La langue française (dictionnaire), bâtonnage",
   "fiche 241"
  ],
  "status": "verified",
  "note": "L’effet du bâtonnage sur le gras en bouche est avancé par le WSET et Lepeltier mais jugé faible ou non établi par le Handbook of Enology (fiche 241) : le lexique ne parle que d’intention. Étymologie : une seule source (La langue française, dictionnaire libre) ; aucune entrée trouvée à l’Académie ni au Larousse."
 },
{
  "terme": "chapeau de marc",
  "photo": {"fichier": "Red wine cap.jpg", "legende": "Chapeau de marc d’un rouge en fermentation, enfoncé dans le jus.", "auteur": "Wollombi (Flickr)", "licence": "CC BY 2.0"},
  "def": "Masse de peaux et de pépins (avec un peu de pulpe) que le gaz carbonique de la fermentation pousse à la surface de la cuve dans la vinification en rouge. Laissé seul, il échange peu avec le jus et donne peu de couleur, d’arômes et de tanins : on l’arrose (remontage), on l’enfonce (pigeage) ou on le noie sous le jus (délestage).",
  "etym": "chapeau : du bas latin cappellus, « coiffe » ; marc : tiré de marcher au sens de « fouler », le marc étant le résidu des fruits dont on a extrait le suc.",
  "declic": "Un radeau de peaux flotte sur le jus rouge : tant qu’on ne l’enfonce pas ou ne l’arrose pas, il garde sa couleur pour lui.",
  "src": [
   "WSET, Understanding Wines (2016), vinification des rouges (cap management)",
   "iDealwine, Vocabulaire de vinification rouge et Les mots du vin : pigeage, délestage, remontage",
   "Académie française, 9e éd. (marc, chapeau)",
   "fiche 347"
  ],
  "status": "verified",
  "note": "Aucune entrée « chapeau de marc » trouvée dans les dictionnaires consultés (Académie : marc et chapeau séparément) : le sens technique repose sur le WSET et sur iDealwine (presse spécialisée, niveau 2b)."
 },
{
  "terme": "cuvaison",
  "def": "Temps pendant lequel le moût, puis le vin, séjourne en cuve au contact des peaux et des pépins : la fermentation et la macération des vins rouges. Elle couvre tout ou partie de la fermentation alcoolique et se prolonge parfois au-delà. Sa durée et sa température règlent l’extraction de la couleur et des tanins.",
  "etym": "dérivé de cuver avec le suffixe -aison ; cuvage désignait au XIIIe siècle le lieu où l’on met les cuves, et a pris son sens actuel au XIXe siècle.",
  "declic": "La cuvaison, c’est le temps d’infusion du vin rouge : plus les peaux restent dans la cuve, plus la couleur et les tanins passent dans le jus.",
  "src": [
   "Larousse (cuvage, cuvaison)",
   "Académie française, 9e éd. (cuvage, cuvaison)",
   "Office québécois de la langue française, Grand dictionnaire terminologique (cuver)",
   "La langue française (dictionnaire), cuvaison",
   "fiches 243 et 348"
  ],
  "status": "verified",
  "note": "Le Larousse chiffre la cuvaison à 1 à 10 jours ; la fiche 348 va jusqu’à deux ou trois semaines pour un vin de garde : le lexique ne donne aucune durée. L’Académie réserve le cuvage aux vins rouges."
 },
{
  "terme": "débourbage",
  "def": "Opération qui, avant la fermentation, débarrasse le moût de ses grosses impuretés et fragments de raisin (les bourbes), par repos et décantation, centrifugation ou filtration. Elle concerne surtout les blancs, dont le jus est pressé sans les peaux. On vise un jus clair mais pas stérile : un jus trop chargé donne des arômes végétaux lourds, de l’amertume et des odeurs de réduction.",
  "etym": "dérivé de débourber (XIXe siècle), lui-même dérivé de bourbe, « vase » (XVIe siècle).",
  "declic": "Débourber, c’est laisser la vase retomber au fond de l’étang avant de puiser l’eau claire.",
  "src": [
   "Larousse (débourbage)",
   "Académie française, 9e éd. (débourbage, débourber)",
   "WSET, Understanding Wines (2016), vinification des blancs (clarification du jus)",
   "fiches 243 et 350"
  ],
  "status": "verified",
  "note": "Le WSET signale que certains vignerons gardent volontairement un peu de particules (moindre oxydabilité, texture), rarement pour des vins au fruit pur."
 },
{
  "terme": "soutirage",
  "def": "Opération qui consiste à transvaser le vin d’un contenant dans un autre en laissant derrière lui les dépôts (lies) formés au fond. Il clarifie le vin et, selon la manière, peut l’aérer un peu. Répété pendant l’élevage, il est pour certains grands vins la seule clarification.",
  "etym": "dérivé de soutirer (XVIIIe siècle), formé de sous- et de tirer.",
  "declic": "Soutirer, c’est décanter à l’échelle de la cave : on garde le vin clair et on laisse le dépôt derrière.",
  "src": [
   "Larousse (soutirage, soutirer)",
   "Académie française, 9e éd. (soutirage)",
   "WSET, Understanding Wines (2016), sédimentation et soutirage (racking)",
   "iDealwine, Les mots de l’élevage",
   "fiches 241 et 343"
  ],
  "status": "verified",
  "note": "Le Larousse ne cite pas le vin dans la définition de soutirer (transvaser une boisson pour en retirer les impuretés), l’Académie parle de « boisson » ; le sens vin est confirmé par le WSET et iDealwine. En anglais : racking."
 },
{
  "terme": "ouillage",
  "def": "Opération qui consiste à remplir régulièrement les fûts avec du vin de même provenance, pour remplacer ce qui s’évapore ou s’imprègne dans le bois. Sans ouillage, le vide laisse entrer de l’oxygène et expose le vin à l’oxydation.",
  "etym": "de ouiller, attesté dès le XIIIe siècle : « remplir jusqu’à l’œil », c’est-à-dire jusqu’à la bonde du fût.",
  "declic": "Le fût a un œil, la bonde : on l’ouille en le remplissant jusqu’à ce que le vin l’affleure, sans laisser de place à l’air.",
  "src": [
   "Académie française, 9e éd. (ouiller)",
   "Larousse (ouiller, ouillage)",
   "iDealwine, Les mots de l’élevage",
   "Online Etymology Dictionary (ullage)",
   "fiche 241"
  ],
  "status": "verified",
  "note": "En anglais, ullage désigne le vide laissé dans le fût (le manque), pas l’opération qui le comble. À l’inverse, le vin jaune et le xérès sous voile vieillissent en fûts volontairement non remplis (fiche 233). Le Larousse relie ouiller à l’ancien français aoeiller et au latin oculus."
 },
{
  "terme": "mutage",
  "def": "Opération qui arrête la fermentation d’un moût avant la fin des sucres, pour garder du sucre dans le vin. En cave, on mute le plus souvent en ajoutant de l’alcool (alcool neutre d’origine viticole pour les vins doux naturels, eau-de-vie pour le pineau des Charentes) : il tue les levures, d’où un vin doux et fort en degré. C’est le principe des vins doux naturels et des vins de liqueur.",
  "etym": "mutage (XIXe siècle) est dérivé de muter, lui-même tiré de muet (XVIIIe siècle) : un vin « muet » est un vin dont la fermentation a été arrêtée.",
  "declic": "Muter, c’est mettre la fermentation en sourdine au milieu du morceau : les levures se taisent et le sucre reste dans le vin.",
  "src": [
   "Larousse (mutage, muter)",
   "Académie française, 9e éd. (mutage, muter)",
   "WSET, Understanding Wines (2016), vins doux et fortification",
   "fiches 235, 575 et 582"
  ],
  "status": "verified",
  "note": "Divergence d’emploi : le Larousse et l’Académie admettent aussi le mutage au SO2 (jus de raisin), alors que le site (fiches 235 et 582) réserve « muter » à l’ajout d’alcool et traite l’arrêt par le froid ou le sulfitage à part. Les proportions d’alcool ajouté sont dans la fiche 235."
 },
{
  "terme": "chaptalisation",
  "def": "Ajout de sucre (saccharose) au moût, avant ou au début de la fermentation, pour relever le degré alcoolique du futur vin dans les années ou les régions où le raisin manque de sucre. Le sucre ajouté est transformé en alcool par les levures : il ne rend pas le vin plus doux. La pratique est encadrée par la réglementation, qui varie selon les zones viticoles.",
  "etym": "du nom du chimiste Jean-Antoine Chaptal (1756-1832), qui mit au point le procédé selon le Larousse ; dérivé de chaptaliser (XIXe siècle).",
  "declic": "On sucre le moût pour la levure, pas pour le buveur : le sucre ajouté finit en alcool et le vin reste sec.",
  "src": [
   "Larousse (chaptalisation, Chaptal)",
   "Académie française, 9e éd. (chaptalisation)",
   "WSET, Understanding Wines (2016), ajustements du moût",
   "Oxford Companion to Wine (JancisRobinson.com), « chaptalization » (extrait)",
   "fiche 352"
  ],
  "status": "verified",
  "note": "Le Larousse dit « avant la fermentation », la fiche 352 « en début de fermentation » : le lexique écrit « avant ou au début ». Ajouter du moût concentré rectifié est un autre enrichissement, pas une chaptalisation au sens strict (fiche 352). Les règles par zone et par pays ne sont pas détaillées ici."
 },
{
  "terme": "SO2 libre / SO2 combiné",
  "def": "Le SO2 (dioxyde de soufre) ajouté au vin se répartit en deux fractions dont la somme est le SO2 total, celui que plafonne la réglementation. Le SO2 libre est la part active, antioxydante et antiseptique. Le SO2 combiné est fixé sur d’autres molécules du vin, surtout l’éthanal, et ne protège presque plus. Au sein du SO2 libre, seule la part moléculaire est franchement antiseptique, et elle diminue quand le pH monte.",
  "etym": "SO2 : formule du dioxyde de soufre, que le Larousse nomme aussi anhydride sulfureux ; « libre » s’oppose à « combiné », c’est-à-dire lié à d’autres molécules du vin.",
  "declic": "Le SO2 libre est le parapluie ouvert, le combiné un parapluie déjà replié dans l’éthanal : le total compte les deux, mais seul l’ouvert vous abrite.",
  "src": [
   "ITV France, Itinéraires techniques n° 3, La maîtrise du sulfitage des moûts et des vins (2002)",
   "AWRI, Revisiting sulfur dioxide use",
   "WSET, Understanding Wines (2016), dioxyde de soufre (SO2 « bound »)",
   "Larousse (anhydride sulfureux)",
   "fiches 345 et 246"
  ],
  "status": "verified",
  "note": "ITV France (2002) cite aussi les sucres du moût comme support de combinaison du SO2 ; la fiche 345 retient les composés carbonylés (éthanal, acides pyruvique et 2-oxoglutarique) : seule cette dernière version est reprise. Les plafonds de SO2 total sont dans la fiche 246."
 },
{
  "terme": "acidité volatile",
  "def": "Part de l’acidité d’un vin formée d’acides à courte chaîne qui passent à la distillation à la vapeur, surtout l’acide acétique, celui du vinaigre. Tous les vins en contiennent un peu, et le WSET note qu’à faible dose elle rend le nez plus parfumé et plus complexe. En excès elle donne une odeur de vinaigre, souvent avec de l’acétate d’éthyle (vernis à ongles), et le vin est dit piqué. Elle est plafonnée par la réglementation européenne (fiche 246).",
  "etym": "volatil, emprunté au latin volatilis, « qui vole », de volare : se dit de ce qui passe facilement à l’état gazeux.",
  "declic": "L’acidité volatile, c’est l’acide qui s’envole du verre jusqu’au nez : le vinaigre qu’on sent avant de le goûter.",
  "src": [
   "OIV, méthode OIV-MA-AS313-02 (acidité volatile)",
   "AWRI, Wine flavours, faults and taints",
   "WSET, Understanding Wines (2016), défauts et arômes du vin",
   "Oxford Companion to Wine (JancisRobinson.com), « volatile acidity » (extrait)",
   "fiches 246 et 249"
  ],
  "status": "verified",
  "note": "L’OIV définit l’acidité volatile comme les acides de la série acétique libres ou salifiés, en retranchant le SO2 et l’acide sorbique ; l’acétate d’éthyle, qui est un ester, l’accompagne dans la perception mais n’est pas un acide (fiche 249). Qu’une dose modérée donne du relief est un avis de Lepeltier et du WSET, que le Handbook of Enology juge plus sévèrement (fiche 249)."
 },
{
  "terme": "odeurs de réduction / goût de réduit",
  "def": "Odeurs soufrées (œuf pourri, chou, oignon, caoutchouc) qui apparaissent quand un vin a manqué d’oxygène : on parle de goût de réduit. Elles viennent de composés soufrés volatils (sulfure d’hydrogène, mercaptans ou thiols) produits surtout par des levures carencées en azote, ou issus du soufre resté sur les raisins. À très faible dose elles peuvent ajouter du caractère et elles s’estompent parfois à l’aération ; à forte dose, c’est un défaut.",
  "etym": "du latin reductio, « action de ramener » ; en chimie, gain d’électrons, contraire de l’oxydation.",
  "declic": "Un vin réduit est enfermé dans une pièce sans fenêtre : il sent le renfermé, et la carafe est la fenêtre qu’on ouvre.",
  "src": [
   "AWRI, Wine flavours, faults and taints",
   "AWRI, Removal of volatile sulfur compounds",
   "WSET, Understanding Wines (2016), défauts et arômes du vin",
   "Académie française, 9e éd. (réduction)",
   "Wine Spectator, glossaire (reduced)",
   "fiches 251 et 238"
  ],
  "status": "verified",
  "note": "Deux sens à ne pas mélanger : le défaut (ce lexique) et l’élevage ou la vinification « réducteurs », techniques qui protègent le vin de l’oxygène (fiche 238) ; mal conduits, ils mènent au défaut. Les thiols de réduit (méthanethiol, éthanethiol) sont de la même famille chimique que les thiols variétaux du sauvignon."
 },
{
  "terme": "thiols",
  "def": "Famille de composés soufrés (groupe –SH, comme un alcool dont l’oxygène est remplacé par du soufre) à odeur très puissante, perceptible à des doses infimes. Les thiols variétaux (3MH, 3MHA, 4MMP) donnent buis, pamplemousse et fruit de la passion au sauvignon blanc ; inodores dans la baie, ils sont libérés par la levure pendant la fermentation à partir de précurseurs liés à la cystéine ou au glutathion. D’autres thiols, comme le méthanethiol, sont des défauts de réduit (chou, oignon).",
  "etym": "du grec theion, « soufre », et du suffixe -ol (alcool), le groupe –SH ressemblant à celui d’un alcool.",
  "declic": "Même famille, deux visages : le thiol du sauvignon sent le buis et le pamplemousse, celui du vin réduit le chou ; tout tient à la molécule et à la dose.",
  "src": [
   "UC Davis, Waterhouse Lab, Volatile Thiols",
   "AWRI, Varietal Thiols and Green Characters (N. Lloyd)",
   "AWRI, Wine flavours, faults and taints (mercaptans)",
   "Académie française, 9e éd. (thiol)",
   "fiches 275 et 251"
  ],
  "status": "verified",
  "note": "Les seuils de perception de 3MH et 3MHA diffèrent d’un facteur important entre l’AWRI et UC Davis : aucun seuil n’est donné. Le pamplemousse est rattaché au 3MH (UC Davis, fiche 275), non au 4MMP comme dans le livre. Mercaptan est un synonyme de thiol (AWRI)."
 },
{
  "terme": "tirage / prise de mousse",
  "def": "Le tirage est la mise en bouteille du vin de base clair avec la liqueur de tirage, un mélange de vin, de sucre et de levures. La prise de mousse est la seconde fermentation qui suit en bouteille fermée : les levures transforment le sucre en alcool et en gaz carbonique, qui reste dissous et fera les bulles. Les bouteilles restent ensuite sur lattes, en contact avec les lies, avant le remuage et le dégorgement.",
  "etym": "tirage : dérivé de tirer (XVe siècle) ; prise de mousse : le moment où le vin prend sa mousse, ses bulles.",
  "declic": "Au tirage, on ferme la bouteille sur un peu de sucre et de levures : la prise de mousse, c’est la cocotte-minute où le gaz reste prisonnier.",
  "src": [
   "DGCCRF, Champagne : connaître le langage des étiquettes",
   "WSET, D4 Sparkling Wines (2020), méthode traditionnelle",
   "WSET, Understanding Wines (2016), production d’effervescents",
   "Hachette Vins, La méthode champenoise et ses étapes",
   "Larousse (dégorgement : « prise de mousse des vins champagnisés en bouteilles »)",
   "fiches 463, 471 et 583"
  ],
  "status": "verified",
  "note": "Ni le Larousse ni l’Académie ne notent le sens de cave de tirage : l’étymologie ne dit que le lien avec tirer. Le WSET D4 appelle souvent « prise de mousse » la seule seconde fermentation ; le DGCCRF fait de même. Les dates minimales de tirage et de commercialisation sont dans les fiches 463 et 404."
 },
{
  "terme": "dégorgement",
  "def": "Opération qui expulse le dépôt de levures rassemblé dans le goulot d’un vin effervescent de méthode traditionnelle, après le remuage. En général, le col est plongé dans un bain réfrigérant pour congeler le dépôt, puis la bouteille est ouverte et la pression éjecte le bouchon de glace. On complète ensuite la bouteille avec la liqueur d’expédition avant le bouchage définitif.",
  "etym": "dérivé de dégorger (XVIe siècle), lui-même formé sur gorge : en ancien français desgorgier, « vider la gorge ».",
  "declic": "Le goulot est une gorge : on la dégage d’un coup, bouchon de glace compris.",
  "src": [
   "Larousse (dégorgement)",
   "Académie française, 9e éd. (dégorgement, dégorger)",
   "WSET, Understanding Wines (2016), production d’effervescents",
   "WSET, D4 Sparkling Wines (2020), remuage et dégorgement",
   "DGCCRF, Champagne : connaître le langage des étiquettes",
   "Online Etymology Dictionary (disgorge)",
   "fiches 463 et 583"
  ],
  "status": "verified",
  "note": "Le dégorgement se pratique à la main ou à la machine ; la date de dégorgement compte pour les vins restés longtemps sur lies (D4 : les lies protègent le vin de l’oxydation avant). Durée minimale de cave avant dégorgement en Champagne : fiche 463."
 },
{
  "terme": "dosage (liqueur d’expédition)",
  "def": "La liqueur d’expédition est le mélange de vin et de sucre (ou de moût concentré rectifié) ajouté après le dégorgement pour combler le vide laissé par le dépôt expulsé et fixer le style. Le dosage désigne le sucre ainsi apporté, qui règle la douceur : du brut nature (sans sucre ajouté, moins de 3 g/l) jusqu’au doux, l’échelle complète étant dans la fiche 404.",
  "etym": "dosage, dérivé de doser (1822), lui-même de dose, du grec dosis.",
  "declic": "La liqueur d’expédition est la touche finale avant le départ : le vin est fait, on règle seulement sa douceur.",
  "src": [
   "Larousse (dosage, sens vins mousseux)",
   "DGCCRF, Champagne : connaître le langage des étiquettes",
   "WSET, Understanding Wines (2016), production d’effervescents",
   "WSET, D4 Sparkling Wines (2020), dégorgement et dosage",
   "Hachette Vins, La méthode champenoise et ses étapes",
   "Wiktionnaire (dosage)",
   "fiches 404 et 463"
  ],
  "status": "verified",
  "note": "Emploi flottant : « dosage » désigne tantôt le sucre (WSET D4), tantôt la liqueur elle-même (DGCCRF : « liqueur de dosage, appelée aussi liqueur d’expédition »). L’Académie française n’a pas le sens champagne de dosage."
 },
{
  "terme": "voile de levures / flor",
  "photo": {"fichier": "FLOR-ValdiviaJerez59.jpg", "legende": "Fût de xérès à fond vitré montrant le voile de flor à la surface du vin (Jerez de la Frontera).", "auteur": "El Pantera", "licence": "CC BY-SA 3.0"},
  "def": "Pellicule de levures qui se forme à la surface d’un vin laissé en contact avec un peu d’air dans un fût non complètement rempli : c’est le voile du vin jaune du Jura, appelé flor à Jerez (fino, manzanilla). Ces levures se nourrissent de l’alcool et de l’oxygène, isolent le vin d’un contact direct avec l’air et lui donnent des arômes propres, dus en particulier à l’éthanal (noix, pomme). La flor ne prospère plus au-delà d’environ 15,5 % vol : fortifié à 17 % ou plus, le xérès vieillit sans voile (oloroso).",
  "etym": "voile : du latin velum (Larousse) ; flor : mot espagnol issu du latin flos, « fleur », qui désigne aussi la pellicule que fait le vin à sa surface.",
  "declic": "Le voile est un couvercle vivant : une peau de levures qui s’interpose entre le vin et l’air.",
  "src": [
   "Larousse (voile : pellicule microbienne sur le vin)",
   "Oxford Companion to Wine (JancisRobinson.com), « flor » (extrait : voile en français)",
   "INAO, fiche produit Château-Chalon",
   "sherry.wine, Types of Ageing",
   "WSET, Understanding Wines (2016) et D5 Fortified Wines (août 2024), xérès",
   "Real Academia Española, DLE (flor)",
   "fiche 233"
  ],
  "status": "verified",
  "note": "Le Larousse décrit le voile comme une pellicule microbienne sans préciser qu’il s’agit de levures ; l’INAO et sherry.wine le précisent. Les durées d’élevage du vin jaune ne sont pas reprises (fiches 233 et 509)."
 },
{
  "terme": "passerillage",
  "photo": {"fichier": "Passito z01.JPG", "legende": "Raisins mis à sécher sur claies pour un vin de raisins passerillés (Slovénie).", "auteur": "Zyance", "licence": "CC BY 3.0"},
  "def": "Dessèchement des raisins qui, laissés sur la souche, perdent de l’eau et concentrent leurs sucres. On parle aussi de passerillage pour des raisins séchés sur claies ou sur paille après la vendange (vin de paille). Il demande un automne sec, sans quoi l’humidité fait pourrir les baies ; il est distinct de la pourriture noble, qui passe par le Botrytis.",
  "etym": "tiré de passerillé, raisin séché : de l’ancien français passe, « sec », du latin passus, de pandere, « faire sécher au soleil » (Larousse).",
  "declic": "Le raisin devient raisin sec sans quitter son cep : le vent et le soleil font l’évaporation à la place du pressoir.",
  "src": [
   "Larousse (passerillage, passerillé)",
   "WSET, Understanding Wines (2016), vins doux (drying grapes on the vine)",
   "La langue française (dictionnaire), passerillage et passerille",
   "iDealwine, Vinification des liquoreux : passerillage ou botrytis",
   "Oxford Companion to Wine (JancisRobinson.com), « passerillé » (extrait)",
   "fiches 235, 486 et 512"
  ],
  "status": "verified",
  "note": "Le Larousse dit « naturel ou artificiel » ; le WSET et iDealwine parlent du séchage sur pied : le lexique ajoute les claies d’après la fiche 235. La langue française rapproche aussi passerille (petit raisin de séchage) du latin uva passa, sans certitude."
 },
{
  "terme": "solera",
  "photo": {"fichier": "Sherry cellar, Solera system 2, 2003.jpg", "legende": "Chai de xérès à Jerez de la Frontera : fûts empilés en rangées.", "auteur": "Falkue", "licence": "CC BY-SA 3.0"},
  "def": "Système de vieillissement par assemblage fractionné, typique du xérès. Les fûts sont groupés en étages (criaderas) selon l’âge moyen de leur vin ; la rangée la plus âgée, qui se nomme elle-même solera (le mot désigne aussi, par extension, tout le système), fournit le vin mis en bouteille. On ne la vide jamais : ce qu’on y prélève est remplacé par le vin de l’étage juste plus jeune, lui-même complété par le suivant, si bien que chaque mise contient plusieurs millésimes.",
  "etym": "mot espagnol dérivé de suelo, « sol » : la rangée la plus âgée est posée au ras du sol.",
  "declic": "La solera, c’est le levain du boulanger : on y prélève un peu, on le rafraîchit avec du plus jeune, et il garde l’esprit de la maison.",
  "src": [
   "WSET, D5 Fortified Wines (août 2024), système de solera",
   "WSET, Understanding Wines (2016), xérès",
   "sherry.wine, Types of Ageing",
   "Sherry Notes, The sherry solera system",
   "Real Academia Española, DLE (solera)",
   "fiche 530"
  ],
  "status": "verified",
  "note": "Le plafond de 40 % du stock expédié par an et le minimum de deux ans sont dans la fiche 530. Sens ancien : le DLE donne aussi pour solera « la lie du vin » et le Larousse espagnol-français la traduit par « lie » ; cela n’est pas repris. Origine suelo : DLE et Sherry Notes (niveau 2b)."
 },
 {
  "terme": "tanin",
  "def": "Famille de composés phénoliques qui se lient aux protéines de la salive et donnent l’astringence, cette sensation de bouche asséchée et rugueuse (avec un peu d’amertume). Dans le vin, ils viennent surtout de la pellicule, des pépins et de la rafle, et un peu du bois d’élevage ; ils soutiennent la couleur et la garde des rouges et s’assouplissent en se combinant entre eux avec le temps.",
  "etym": "Le nom vient de l’usage de ces composés pour tanner les peaux d’animaux (Oxford).",
  "declic": "Un thé trop infusé : la langue qui accroche, c’est le tanin.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « tannins »",
   "fiche 226",
   "fiche 358",
   "fiche 70"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "élevage",
  "def": "Ensemble des soins donnés au vin entre la fin de la fermentation et la mise en bouteille : cuve ou fût, soutirages, passage sur lies, collage, etc. Le mot n’a pas d’équivalent direct en anglais ; il suggère que le vigneron « éduque » un vin encore brut.",
  "etym": "Même mot que l’élevage d’animaux ou d’enfants (« bien élevé ») ; Oxford le glose par « rearing » (« élever »).",
  "declic": "Le vigneron est un parent : il élève son vin jusqu’à la majorité de la mise en bouteille.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « élevage »",
   "fiche 243",
   "fiche 233",
   "fiche 358"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "porte-greffe",
  "def": "Plant dont on ne garde que le système racinaire, sur lequel on greffe le cépage voulu (le greffon). Il sert d’abord à résister au phylloxéra et aux nématodes, puis à s’adapter au calcaire ou à la sécheresse ; il influe sur la vigueur et le rendement, mais le raisin vient entièrement du greffon. Les porte-greffes actuels descendent d’espèces américaines (riparia, rupestris, berlandieri).",
  "etym": "",
  "declic": "Le porte-greffe est le socle : il porte la plante, jamais le raisin.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « rootstock »",
   "fiche 45",
   "fiche 79"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "anthocyanes",
  "def": "Pigments rouges à bleus des raisins noirs, logés surtout dans la pellicule, qui donnent sa couleur au vin rouge. Leur teinte dépend de l’acidité (plus le milieu est acide, plus le rouge est vif) ; en vieillissant, ils se lient aux tanins en pigments plus stables. Les cépages blancs n’en produisent pas.",
  "etym": "Du grec anthos (« fleur ») et de « cyan » (bleu), d’après Oxford.",
  "declic": "Anthos = fleur : la couleur des pétales, mais cachée dans la peau du raisin.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « anthocyanins »",
   "fiche 266",
   "fiche 358",
   "fiche 226"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "fermentation malolactique",
  "def": "Transformation par des bactéries lactiques de l’acide malique, plutôt vert et dur, en acide lactique, plus doux, avec un dégagement de gaz carbonique. Ce n’est pas une vraie fermentation : elle suit en général la fermentation alcoolique. Elle diminue l’acidité, stabilise le vin et peut ajouter des notes beurrées (diacétyle) ; on l’évite parfois pour garder de la vivacité, par exemple sur riesling ou chenin.",
  "etym": "",
  "declic": "Pomme verte (malique) devient lait (lactique).",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « malolactic conversion »",
   "fiche 343"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "véraison",
  "photo": {"fichier": "Véraison grappe 50.jpg", "legende": "Grappe de pinot noir à mi-véraison : les baies changent de couleur une à une.", "auteur": "Olivier Lemoine", "licence": "CC BY-SA 4.0"},
  "def": "Moment où la baie, jusque-là verte et dure, change de couleur (elle rougit ou vire au jaune translucide), s’assouplit et commence à mûrir : le sucre monte, l’acidité baisse. Elle marque le début du compte à rebours avant les vendanges.",
  "etym": "Mot français repris tel quel en anglais (veraison), d’après Oxford.",
  "declic": "La baie « met ses couleurs » : feu vert pour la maturation.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « veraison »",
   "fiche 4",
   "fiche 87"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "débourrement",
  "photo": {"fichier": "Pinot noir budburst Sept 2010.jpg", "legende": "Débourrement d’un pinot noir : le bourgeon s’ouvre et laisse sortir les premières feuilles (Tasmanie).", "auteur": "Mark Smith", "licence": "CC BY 2.0"},
  "def": "Éclatement des bourgeons au printemps : les premières feuilles vertes apparaissent et la vigne sort de son repos hivernal, autour de 10 °C de température moyenne de l’air. Un débourrement tardif protège mieux des gelées de printemps, d’où l’intérêt de cépages tardifs comme le meunier dans la Vallée de la Marne.",
  "etym": "",
  "declic": "On sort du « coton » (stade B de Baggiolini) : le bourgeon débourre.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « budbreak »",
   "fiche 514",
   "fiche 87"
  ],
  "status": "needs_review",
  "note": "Aucune fiche vérifiée ne définit le terme (fiches 514, 523, 556 l’emploient) ; à confirmer par IFV ou INRAE."
 },
 {
  "terme": "aoûtement",
  "def": "Maturation des rameaux en fin d’été : la tige verte brunit et devient ligneuse (tissu liégeux, mise en réserve de glucides) pour résister au froid de l’hiver. Elle commence à la base du rameau et gagne vers la pointe.",
  "etym": "",
  "declic": "Le rameau prend son bronzage d’août : du vert au brun.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « cane ripening »",
   "fiche 87"
  ],
  "status": "needs_review",
  "note": "Oxford traite « cane ripening / lignification » sans donner le mot « aoûtement » ; fiche 87 (Lepeltier, stade O) seul lien. À confirmer par IFV ou INRAE."
 },
 {
  "terme": "rafle",
  "def": "Charpente de la grappe : l’axe et les ramifications qui portent les baies, riches en fibres et en tanins, verts ou lignifiés selon la maturité. On l’enlève à la réception (éraflage) ou on la garde (vendange entière), selon le style voulu.",
  "etym": "",
  "declic": "La rafle est le squelette de la grappe : ce qui reste quand on a mangé les baies.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « stem »",
   "fiche 70",
   "fiche 578"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "pressurage",
  "def": "Opération qui presse le raisin ou le marc pour en extraire le liquide. En blanc et en rosé de pressurage direct, on presse avant la fermentation ; en rouge, on presse le marc après l’écoulage pour obtenir le vin de presse, plus coloré et tannique. Le pressoir pneumatique monte la pression progressivement et ménage la vendange.",
  "etym": "",
  "declic": "Blanc : on presse puis on fait fermenter. Rouge : on fait fermenter puis on presse.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « pressing »",
   "fiche 579",
   "fiche 350",
   "fiche 351"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "foulage et éraflage",
  "def": "Deux gestes à l’arrivée de la vendange. L’éraflage sépare les baies de la rafle (il est facultatif) ; le foulage éclate les baies pour libérer le jus et faciliter l’extraction, sans écraser les pépins amers. Les machines (érafloir-fouloir) combinent souvent les deux.",
  "etym": "",
  "declic": "D’abord on ôte les queues (éraflage), ensuite on piétine (foulage).",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « destemming »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « crushing »",
   "fiche 578"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "saignée (rosé)",
  "def": "Méthode de rosé (et de concentration du rouge) : après un court contact avec les peaux en cuve, on prélève une partie du jus, qui devient le rosé, plus coloré et corsé que celui du pressurage direct. Le rouge resté en cuve, avec plus de peaux par litre de jus, peut en sortir plus concentré.",
  "etym": "Même mot que la saignée médicale ; Oxford le traduit par « bled » (« saigné »).",
  "declic": "Comme une prise de sang : on prélève un peu de jus coloré, c’est le rosé.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « saignée »",
   "fiche 351"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "pigeage et remontage",
  "photo": {"fichier": "Pigeage in a wine barrel.jpg", "legende": "Pigeage : un caviste enfonce à la main le chapeau de marc d’une fermentation en fût.", "auteur": "Ryan O’Connell", "licence": "CC BY-SA 2.0"},
  "def": "Deux façons de brasser le chapeau de marc pendant la fermentation d’un rouge. Le pigeage l’enfonce dans le jus (au pied, à la main ou mécaniquement) ; le remontage pompe du jus en bas de cuve pour arroser le chapeau par le haut. Ils extraient couleur et tanins et évitent que le chapeau sèche ; abusés, ils durcissent les tanins.",
  "etym": "",
  "declic": "Pigeage : on pousse vers le bas. Remontage : le jus remonte.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « punching down »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « pumping over »",
   "fiche 347"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "collage",
  "def": "Clarification et stabilisation du vin par ajout d’une substance (albumine d’œuf, gélatine, caséine, colle de poisson, PVPP, bentonite) qui floconne et entraîne au fond particules et tanins instables. Sur un rouge, il assouplit ; sur un blanc, il préserve la couleur claire et évite les troubles.",
  "etym": "Du verbe coller : Oxford glose collage par « sticking » (« coller »).",
  "declic": "On colle les impuretés pour qu’elles tombent ensemble, comme sur un papier tue-mouches.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « fining »",
   "fiche 361",
   "fiche 243"
  ],
  "status": "needs_review",
  "note": "Fiche 361 non vérifiée ; fiche 243 (vérifiée) ne cite que le collage comme étape."
 },
 {
  "terme": "vin doux naturel",
  "def": "Vin doux obtenu par mutage : on ajoute de l’alcool au moût en cours de fermentation, ce qui arrête les levures et laisse le sucre naturel du raisin. Il est donc sucré et plus alcoolisé qu’un vin ordinaire. Exemples : Banyuls, Maury, Rivesaltes, Muscat de Frontignan, Beaumes-de-Venise ; les cépages typiques sont le muscat et le grenache.",
  "etym": "",
  "declic": "« Naturel » = le sucre vient du raisin ; l’alcool ajouté sert seulement à stopper la fermentation.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « vin doux naturel »",
   "fiche 508",
   "fiche 380"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "polyphénols",
  "def": "Grande famille de molécules du raisin (pellicule, pépins, rafle) qui comprend les anthocyanes, source de la couleur, et les tanins, source de la structure et de l’astringence. Extraits pendant la macération, ils évoluent en élevage ; les rouges en contiennent beaucoup plus que les blancs.",
  "etym": "",
  "declic": "Les polyphénols sont la boîte à outils du raisin : couleur et structure.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « phenolics »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « tannins »",
   "fiche 226",
   "fiche 243"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "sulfitage",
  "def": "Ajout de dioxyde de soufre (SO2) au raisin, au moût ou au vin pour le protéger de l’oxydation et des microbes. Il peut se faire à la réception de la vendange, avant ou après la fermentation, pendant l’élevage et à la mise. Une partie du SO2 se combine et ne protège plus : c’est le SO2 libre qu’on suit.",
  "etym": "",
  "declic": "Le SO2 est le garde du corps du vin : il garde la porte contre l’air et les microbes.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « sulfur dioxide »",
   "fiche 578",
   "fiche 345"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "brettanomyces",
  "def": "Levure de contamination qui produit des phénols volatils (écurie, cuir, pansement, épices, fumé), surtout dans les rouges élevés en barrique ; elle profite d’un SO2 insuffisant. On la considère comme un défaut, que quelques producteurs tolèrent à très faible dose.",
  "etym": "",
  "declic": "« Brett » : le cheval s’est invité dans la cave.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « Brettanomyces »",
   "fiche 250"
  ],
  "status": "needs_review",
  "note": "Fiche 250 non vérifiée."
 },
 {
  "terme": "goût de bouchon (TCA)",
  "def": "Défaut aromatique de moisi, carton mouillé ou chien mouillé qui étouffe le fruit et raccourcit la finale. Il est dû surtout au TCA (2,4,6-trichloroanisole), détectable à quelques ng/l ; le liège est la source principale, mais le bois du chai ou les barriques peuvent aussi contaminer. Certains dégustateurs y sont peu sensibles.",
  "etym": "",
  "declic": "Carton mouillé et cave humide : le bouchon a pris l’eau.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « cork taint »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « TCA »",
   "fiche 252"
  ],
  "status": "needs_review",
  "note": "Fiche 252 non vérifiée (fiche 307 vérifiée traite un autre sujet)."
 },
 {
  "terme": "rotundone",
  "def": "Molécule (sesquiterpène) responsable de la note de poivre noir de la syrah, trouvée aussi dans le grüner veltliner et d’autres cépages. Détectable à des doses infimes, elle échappe pourtant à environ une personne sur cinq. Elle vient surtout des peaux et ressort davantage en climat frais.",
  "etym": "Nom tiré de Cyperus rotundus, le souchet où elle a d’abord été découverte (Oxford).",
  "declic": "Rotundone = grain de poivre ; mais un nez sur cinq ne l’entend pas.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « rotundone »",
   "fiche 274"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "pyrazines (méthoxypyrazines)",
  "def": "Molécules azotées à odeur végétale : poivron vert, herbacé, asperge. Les plus connues dans le vin sont les méthoxypyrazines, typiques du sauvignon blanc et du cabernet-sauvignon, qui dominent quand le raisin est cueilli peu mûr ; maturité et effeuillage les réduisent.",
  "etym": "",
  "declic": "Pyrazine = poivron : un raisin pas assez mûr sent le potager.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « methoxypyrazines »",
   "fiche 273",
   "fiche 1"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "sélection massale",
  "def": "Technique de multiplication de la vigne où l’on prélève du bois sur de nombreux ceps choisis d’une vieille parcelle, sans suivre chaque pied individuellement, pour garder la diversité génétique et l’adaptation au lieu. Elle s’oppose à la sélection clonale, qui part d’un seul pied de référence multiplié à l’identique.",
  "etym": "",
  "declic": "Massale = en masse : on choisit tout un lot de bons ceps, pas un seul champion.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « mass selection »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « clonal selection »",
   "fiche 90"
  ],
  "status": "needs_review",
  "note": "Fiche 90 non vérifiée ; fiches 77 et 92 (vérifiées) emploient le terme sans le définir."
 },
 {
  "terme": "ampélographie",
  "def": "Science qui décrit et identifie les cépages d’après leurs caractères visibles (feuille, grappe, rameau). On y ajoute aujourd’hui les empreintes ADN (ampélographie moléculaire), plus fiables que l’aspect de la plante.",
  "etym": "Du grec ampelos (« vigne ») et graphos (« description »), d’après Oxford.",
  "declic": "Ampelos = vigne, graphein = décrire : le portrait-robot du cépage.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « ampelography »",
   "fiche 27",
   "fiche 70"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "millésime",
  "def": "Année de récolte du raisin dont est issu le vin. Elle porte la marque de la météo de cette année-là : le climat fixe le style d’une région, le millésime en est l’expression d’une année précise. Un vin non millésimé est un assemblage d’années, comme beaucoup de champagnes.",
  "etym": "",
  "declic": "Le climat, c’est le caractère ; le millésime, l’humeur de l’année.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « vintage year »",
   "fiche 128",
   "fiche 580"
  ],
  "status": "needs_review",
  "note": "Fiche 128 non vérifiée ; fiche 580 (vérifiée) n’évoque que l’assemblage de millésimes."
 },
 {
  "terme": "rendement (hl/ha)",
  "def": "Quantité de vin (ou de raisin) produite par un vignoble sur une surface donnée. En France et dans la plupart des pays d’Europe, on l’exprime en hectolitres de vin par hectare (hl/ha), et les cahiers des charges des appellations le plafonnent ; ailleurs, on compte plutôt en tonnes de raisin par hectare. Le lien entre rendement et qualité est discuté.",
  "etym": "",
  "declic": "hl/ha : les litres de vin que donne un hectare, plafond de l’appellation à la clé.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « yield »",
   "fiche 62"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "assemblage",
  "def": "Opération qui consiste à choisir et mélanger des lots (cépages, parcelles, cuves, fûts, millésimes) pour obtenir un vin plus équilibré ou plus régulier que chacun d’eux. Elle est essentielle en Champagne (vins de réserve, style de maison) et à Bordeaux (merlot et cabernet-sauvignon) ; elle ne sert pas à masquer un défaut.",
  "etym": "Mot français (« assembler ») repris tel quel par Oxford.",
  "declic": "Un orchestre : chaque lot joue sa partie, le maître de chai dirige.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « assemblage »",
   "fiche 580"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "barrique",
  "def": "Fût de chêne de 225 litres, modèle bordelais, le plus répandu pour l’élevage. Le bois apporte tanins et arômes et laisse passer un peu d’oxygène, qui assouplit les tanins et stabilise la couleur.",
  "etym": "",
  "declic": "225 litres, c’est 300 bouteilles de 75 cl : une barrique, un petit stock.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « barrique »",
   "fiche 546",
   "fiche 358",
   "fiche 299"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "levures indigènes",
  "def": "Levures présentes naturellement sur le raisin et dans le chai, par opposition aux levures sélectionnées ajoutées en sec. La fermentation spontanée est moins prévisible, mais ses défenseurs y voient une signature du lieu et du millésime, thèse débattue chez les scientifiques ; en pratique, le chai et l’air apportent aussi leurs souches.",
  "etym": "",
  "declic": "Indigène = du cru : les levures du pays, pas celles du sachet.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « yeast »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « spontaneous fermentation »",
   "fiche 231"
  ],
  "status": "needs_review",
  "note": "Fiche 231 non vérifiée ; le vocabulaire varie (Oxford distingue « ambient », « native/indigenous » et « wild » ; wild = non-Saccharomyces)."
 },
 {
  "terme": "biodynamie",
  "def": "Forme d’agriculture biologique fondée sur les idées de Rudolf Steiner : la vigne est pensée comme un organisme de ferme, traitée avec des préparations de plantes et de minéraux (dont les préparations 500, bouse de corne, et 501, silice de corne) et conduite selon des rythmes lunaires et planétaires. Demeter et Biodyvin la certifient ; ses effets restent sans explication scientifique conclusive.",
  "etym": "",
  "declic": "Bio, plus calendrier lunaire, plus tisanes : le vignoble comme organisme vivant.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « biodynamic viticulture »",
   "fiche 522"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "taille (gobelet, Guyot, cordon)",
  "photo": {"fichier": "Gaillac taille guyot.jpg", "legende": "Vignes taillées en guyot dans le vignoble de Gaillac (Tarn), sur une terrasse de galets.", "auteur": "PANDA 81", "licence": "CC BY-SA 3.0"},
  "def": "Coupe hivernale du bois qui règle la charge de la vigne. Le gobelet est une tête aux bras courts taillés à coursons, sans fil, adaptée aux climats secs ; le Guyot est une taille longue (une baguette et un courson de remplacement, en simple ou en double) ; le cordon est un bras permanent horizontal taillé à coursons, comme le cordon de Royat.",
  "etym": "",
  "declic": "Gobelet = un verre, Guyot = une baguette plus une réserve, cordon = un bras sur le fil.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « pruning »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « gobelet »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « Guyot, Jules »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « cordon »",
   "fiche 516"
  ],
  "status": "needs_review",
  "note": "Fiche 516 non vérifiée ; fiches 110 et 564 (vérifiées) citent seulement le gobelet."
 },
 {
  "terme": "palissage",
  "def": "Fixation de la vigne sur un support (piquets, fils) pour guider les rameaux. Le palissage vertical, ou plan relevé, garde un feuillage étroit et aéré, ce qui aide la maturation et limite les maladies, et il permet la vendange mécanique, à laquelle le gobelet non palissé se prête mal.",
  "etym": "",
  "declic": "Palissage = on met la vigne en rang d’oignons sur ses fils.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « shoot positioning »",
   "Oxford Companion to Wine, 5e éd. (2023), entrée « trellis systems »",
   "fiche 517"
  ],
  "status": "needs_review",
  "note": "Fiche 517 non vérifiée."
 },
 {
  "terme": "effeuillage",
  "def": "Retrait de feuilles autour des grappes pour les aérer et les exposer au soleil. Les baies sèchent plus vite après pluie ou rosée, ce qui limite la pourriture grise, et l’on obtient moins de méthoxypyrazines herbacées ; on l’effectue tôt, quand les baies sont encore petites.",
  "etym": "",
  "declic": "On ouvre les rideaux : la grappe prend l’air et la lumière.",
  "src": [
   "Oxford Companion to Wine, 5e éd. (2023), entrée « leaf removal »",
   "fiche 518"
  ],
  "status": "needs_review",
  "note": "Fiche 518 non vérifiée."
 },
{
  "terme": "astringence",
  "def": "Sensation de bouche asséchée, rugueuse, qui resserre les tissus de la bouche, provoquée surtout par les tanins qui se lient aux protéines de la salive. On la ressent au toucher, pas au goût : elle se confond souvent avec l’amertume, mais c’est une autre sensation.",
  "etym": "",
  "declic": "Le thé trop infusé qui accroche la langue.",
  "src": [
    "Oxford Companion to Wine, 5e éd. (2023), entrée « astringency »",
    "La Revue du Vin de France, Collection Découverte n° 2, Apprendre à déguster (mai 2024), p. 99-101",
    "I. Fritsch, F. Humbert, F. Thomas, Manuel de dégustation du vin (Massin, RVF Academy), p. 74",
    "fiche 264"
  ],
  "status": "verified",
  "note": "Le manuel RVF Academy et la revue sont du même éditeur : ils comptent comme une seule source. Oxford écrit que l’astringence a longtemps été classée parmi les saveurs primaires puis confondue avec l’amertume."
 },
 {
  "terme": "rétro-olfaction (voie rétronasale)",
  "def": "Perception des arômes par l’arrière de la bouche : quand on avale ou qu’on expire, les vapeurs du vin remontent vers le nez par le fond de la gorge. C’est elle qui donne l’essentiel des arômes ressentis en bouche, distincts de ceux qu’on sent en approchant le verre du nez.",
  "etym": "",
  "declic": "Le parfum qui remonte quand on expire par le nez après avoir avalé.",
  "src": [
    "Oxford Companion to Wine, 5e éd. (2023), entrée « tasting » (impressions de la voie rétronasale)",
    "La Revue du Vin de France, Collection Découverte n° 2, Apprendre à déguster (mai 2024), p. 34-35",
    "fiche 272"
  ],
  "status": "verified",
  "note": "Distinguer voie orthonasale (par les narines) et rétronasale ; voir la fiche 272 sur les deux voies."
 },
 {
  "terme": "finale (longueur en bouche, persistance aromatique)",
  "def": "Impression que laisse le vin à la fin de la dégustation, après qu’on l’a avalé ou recraché. Si elle se prolonge, on parle de finale longue ; si elle disparaît vite, de finale courte. Une longue finale, avec l’équilibre, est un signe de qualité. La durée se mesure parfois en caudalies, une caudalie valant une seconde.",
  "etym": "",
  "declic": "L’écho d’une cloche : plus il dure, plus le vin est long.",
  "src": [
    "Oxford Companion to Wine, 5e éd. (2023), entrée « finish »",
    "La Revue du Vin de France, Collection Découverte n° 2, Apprendre à déguster (mai 2024), p. 99",
    "I. Fritsch, F. Humbert, F. Thomas, Manuel de dégustation du vin (Massin, RVF Academy), p. 74",
    "fiche 369"
  ],
  "status": "verified",
  "note": "La caudalie comme unité d’une seconde figure dans la fiche 369 (Académie du Vin) et dans le manuel RVF Academy."
 },
 {
  "terme": "casse (casse ferrique)",
  "def": "Accident de limpidité du vin : un trouble ou un dépôt causé par un excès de fer ou de cuivre, ou par des protéines instables dans les blancs. La casse ferrique, due au fer, apparaît quand le vin prend l’air. On la prévient en cave par la stabilisation (voir les fiches sur les casses métalliques et la casse protéique).",
  "etym": "",
  "declic": "Un vin qui se casse : il se trouble comme un liquide qui tourne.",
  "src": [
    "Oxford Companion to Wine, 5e éd. (2023), entrée « casse »",
    "La Revue du Vin de France, Collection Découverte n° 2, Apprendre à déguster (mai 2024), p. 61 (casse ferrique et limpidité)",
    "I. Fritsch, F. Humbert, F. Thomas, Manuel de dégustation du vin (Massin, RVF Academy), p. 60-61"
  ],
  "status": "needs_review",
  "note": "Définition d’Oxford, recoupée par les fiches 363 et voisines du site ; la revue et le manuel RVF (même éditeur) relient en plus la casse ferrique à l’arrivée des cuves en métal, point non confirmé par une source indépendante."
 },
 {
  "terme": "rancio",
  "def": "Terme de dégustation peu précis, employé dans plusieurs langues pour un style de vin, souvent muté ou vin doux naturel, obtenu en l’exposant volontairement à l’oxygène et à la chaleur. Il évoque la noix, les fruits secs et les notes rances. Le rancio sec catalan (Roussillon) est une version sèche de ce style.",
  "etym": "",
  "declic": "Le fond d’un fût de vieux muscat resté sous le toit : noix, cire, fruits secs.",
  "src": [
    "Oxford Companion to Wine, 5e éd. (2023), entrée « rancio »",
    "La Revue du Vin de France, Collection Découverte n° 2, Apprendre à déguster (mai 2024), p. 99",
    "fiches Roussillon du site (fr-roussillon.js)"
  ],
  "status": "needs_review",
  "note": "À rapprocher de l’audit : le rancio sec figure déjà dans les fiches Roussillon ; vérifier le numéro exact des fiches avant d’ajouter les renvois. Définition d’Oxford ; le détail « sec catalan » est dans le manuel RVF Academy (p. 99)."
 },
 {
  "terme": "bouturage",
  "def": "Multiplication végétative par bouture : un fragment de sarment détaché du pied-mère est planté en terre, où il prend racine. Le nouveau pied est une copie génétique du pied-mère.",
  "etym": "de bouture, dérivé de bouter, « pousser » (au XVe siècle, la bouture est « ce qui pousse »).",
  "declic": "Bouter = pousser : on plante un bout de sarment coupé, il pousse tout seul.",
  "src": [
   "Académie française, 9e éd. (bouture)",
   "fiche 34"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "marcottage",
  "def": "Multiplication végétative par marcotte : un rameau encore relié à la plante mère est enfoui dans la terre, y forme des racines, puis il est séparé pour vivre seul. À la différence de la bouture, il reste nourri par le pied-mère tant qu’il s’enracine.",
  "etym": "de marcotte (1532, « marcotte de vigne »), diminutif tiré du latin mergus, de mergere, « plonger » : on plonge le rameau en terre.",
  "declic": "Mergere = plonger : on plonge le rameau en terre sans couper le cordon.",
  "src": [
   "TLFi via lalanguefrancaise.com (marcotte)",
   "OQLF, Grand dictionnaire terminologique (marcotte)",
   "fiche 34"
  ],
  "status": "verified",
  "note": ""
 },
 {
  "terme": "provignage",
  "def": "Marcottage propre à la vigne : on couche en terre un sarment, voire le cep entier, pour obtenir une nouvelle souche, le provin. Méthode ancienne, déjà décrite par Columelle, très pratiquée avant le phylloxéra, surtout en terrain sec.",
  "etym": "de provigner (XVIIe s.) et provin, du latin propago, « provin, rejeton ».",
  "declic": "Propago = rejeton : le provin, c’est la vigne qui fait ses petits en se couchant.",
  "src": [
   "Académie française, 9e éd. (provignage)",
   "Le Robert (provignage)",
   "Larousse (provin)",
   "Wein-Plus, glossaire (marcottage)"
  ],
  "status": "verified",
  "note": "Columelle et usage avant le phylloxéra : Wein-Plus seul."
 }
];
