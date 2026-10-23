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
 }
];
