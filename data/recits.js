// Récits de chapitre : le fil de l'argument de Lepeltier, affiché en tête de « Lire le chapitre ».
// Clé : `chapitre` = titre exact dans data/mille-vignes-sommaire.json. Texte reformulé, vérifié contre le livre
// et docs/erreurs-du-livre.md ; aucun exemple hors du livre ; le lien avec une bouteille de la cave reste « à associer ».
const RECITS = [
 {
  chapitre: "Les éléments météorologiques et la vigne",
  pages: "104-112",
  question: "Quand on dit d’un vin qu’il vient d’un « climat frais » ou d’un « climat chaud », de quoi parle-t-on exactement ?",
  fil: [
   "Lepeltier part d’un constat : notre vocabulaire de dégustation est déjà climatique. Un vin tendu et léger, un vin rond et puissant, ce sont des traces de climat dans le verre. Sur le temps long, le climat fixe les styles et les cépages d’une région ; à court terme, il fait le millésime. La vigne est l’une des cultures les plus sensibles à son milieu, au point qu’un climatologue la compare au canari des mineurs : elle signale avant les autres que le climat change. Les vendanges avancées depuis les années 1960-1970 en sont la preuve.",
   "Elle décompose ensuite le climat en quatre éléments.",
   "<b>La lumière.</b> La vigne en a surtout besoin entre la floraison et la vendange : sucres, couleur, nouaison. Plus on monte vers le nord, plus la taille et l’orientation des rangs servent à capter le soleil. En altitude, les UV sont plus forts et les raisins plus riches en polyphénols. Trop de soleil brûle : certains domaines blanchissent leurs vignes à l’argile.",
   "<b>Le froid et le gel.</b> Le gel peut frapper en automne, en hiver ou au printemps ; le gel de printemps est le pire, car les bourgeons sont sortis. Il prend trois formes : l’advection (une masse d’air froid poussée par le vent, sur de grandes zones), la radiation (nuit claire et sans vent, l’air froid stagne dans les fonds), l’évaporation (le sol humide se refroidit en séchant).",
   "<b>La chaleur.</b> Sous 10 °C environ, la vigne ne pousse pas ; sa photosynthèse est à son meilleur vers 25 °C (24-28 °C selon le livre, 25-30 °C selon d’autres sources) et s’arrête vers 40 °C. Presque tous les vignobles se situent entre les isothermes annuelles de 10 et 22 °C, mais il faut aussi un été assez chaud : c’est ce qui sépare la Champagne de la Normandie. Point commun des grands vignobles : des nuits fraîches après la véraison, qui gardent l’acidité et laissent mûrir arômes et couleur. Pour comparer les régions, on a créé des indices : Winkler (somme des degrés au-dessus de 10 °C), Huglin (qui ajoute la durée du jour), puis Tonietto et Carbonneau (chaleur, fraîcheur des nuits, sécheresse) et des indices fondés sur les stades de la vigne.",
   "<b>L’eau et le vent.</b> Un léger manque d’eau favorise la qualité ; trop d’eau donne de la vigueur, de la dilution et des maladies. Le vent, enfin, est selon Lepeltier un facteur majeur trop souvent cité en passant : il casse, assèche, assainit, limite le gel nocturne. Le foehn, en Jurançon ou en Alsace, prolonge la maturation ; en Californie, des couloirs de vent frais définissent même des appellations."
  ],
  defend: "Il n’y a pas un climat idéal, mais des climats possibles, et la vigne ne se comprend qu’en croisant ces quatre éléments.",
  client: "« La fraîcheur d’un vin se joue souvent la nuit : des nuits fraîches avant la vendange aident le raisin à garder son acidité. »",
  filRouge: "Pourquoi la fraîcheur des nuits compte-t-elle autant que la chaleur du jour ?",
  prudence: ["Winkler : le livre parle d’heures et finit au 30 octobre ; l’indice somme des degrés-jours au-dessus de 10 °C, du 1er avril au 31 octobre."]
 },
 {
  chapitre: "La géographie du climat",
  pages: "113-116",
  question: "Pourquoi deux vignobles à la même latitude donnent-ils des vins si différents ?",
  fil: [
   "Parce que la géographie corrige le climat. Lepeltier passe en revue cinq correcteurs.",
   "<b>La latitude.</b> Le mythe du 45e parallèle, qui traverse Bordeaux, le Rhône et le Piémont, est séduisant mais trop étroit. La vigne occupe en réalité une bande tempérée dans chaque hémisphère. Vers les pôles, on perd environ 0,6 °C par degré de latitude (chiffre du livre, entre 36° et 60° nord) ; vers l’équateur, la vigne ne s’arrête plus et peut donner deux récoltes par an.",
   "<b>L’altitude.</b> Monter refroidit, augmente les UV et l’écart entre le jour et la nuit : l’acidité se garde, la couleur et les tanins se renforcent. C’est pourquoi des vignobles proches des tropiques montent au-dessus de 2 000 m. Le revers : plus de gel, de grêle, et une maturité parfois difficile. Certaines appellations, comme l’Etna, fixent une limite d’altitude au-delà de laquelle le vin perd l’appellation.",
   "<b>Le relief.</b> Les coteaux sont réputés depuis l’Antiquité : sols maigres, bon drainage, soleil reçu de face. Dans le nord, la Moselle plante sur des pentes très raides pour cette raison.",
   "<b>L’exposition.</b> Dans l’hémisphère nord, le sud-sud-est est la norme : soleil dès le matin, sol réchauffé, moins de gel. Le nord n’est choisi que s’il protège d’autre chose, comme à Verzenay en Champagne. Avec le réchauffement, le sud cherche désormais le nord et l’est.",
   "<b>Les masses d’eau.</b> Mers et lacs adoucissent hivers et étés. Une eau froide allonge le cycle et garde l’acidité (le brouillard du Pacifique en Californie) ; une eau tiède permet de mûrir plus au nord (l’Atlantique en France). Les lacs agiraient aussi comme des miroirs qui renvoient la chaleur sur les coteaux (Léman, Finger Lakes) ; le livre le présente au conditionnel.",
   "L’encadré sur la <b>viticulture héroïque</b> montre l’extrême : terrasses, pentes de plus de 30 %, altitude de plus de 500 m, petites îles. Une partie de ces vignobles est regroupée au sein du CERVIM, fondé en 1987 sous l’égide de l’OIV (Douro, Moselle, Banyuls, Valais…). Pour Lepeltier, les terrasses du Douro, de la Moselle ou de Côte-Rôtie sont des paysages qu’aucune logique économique moderne n’aurait créés."
  ],
  defend: "La météo est imprévisible, la géographie beaucoup moins. C’est donc elle que le vigneron choisit et modifie pour compenser les caprices du climat.",
  client: "« L’Etna est en Sicile, sous une latitude chaude, mais les vignes y montent jusque vers 1 000 m : c’est l’altitude qui garde la fraîcheur. »",
  filRouge: "Cite trois façons dont un vigneron peut « refroidir » un vignoble sans changer de région.",
  prudence: [
   "Courant de Humboldt : il longe le Chili et le Pérou, pas la Californie (courant de Californie).",
   "Etna : la limite d’altitude varie selon le versant ; les chiffres du livre (1 000 m / 800 m) sont simplifiés."
  ]
 },
 {
  chapitre: "Existe-t-il un climat idéal pour la viticulture ?",
  pages: "117-123",
  question: "Y a-t-il un climat parfait pour la vigne, et est-il stable ?",
  fil: [
   "Non, et non. Lepeltier distingue d’abord pouvoir cultiver la vigne et faire un grand vin. En croisant carte des vignobles et carte des climats, on voit que le climat méditerranéen porte le plus de vignes et rend la culture facile. Les climats semi-arides ne sont viables qu’avec irrigation. Les climats tempérés, océaniques ou continentaux, viennent ensuite : la vigne y mûrit tout juste, ce qui demande plus de soin, mais c’est là qu’on situe souvent l’expression la plus fine d’un cépage (chardonnay à Chablis, syrah en Côte-Rôtie). Viennent enfin des climats marginaux, subtropicaux, tropicaux ou froids.",
   "Son idée centrale : <b>la complexité naît souvent aux limites</b>, là où la maturité n’est pas excessive.",
   "Elle montre ensuite que ces zones ont toujours bougé. L’historien Emmanuel Le Roy Ladurie a utilisé les dates de vendanges comme un thermomètre du passé, en avertissant que guerres et décisions humaines brouillent aussi le signal. On voit alterner des périodes douces (époque romaine, Moyen Âge) et un petit âge glaciaire qui fait reculer les vignobles du nord. Depuis les années 1970, la hausse est continue : cycle avancé, nuits plus chaudes, maturité des sucres et des acides décrochée de celle des tanins, extrêmes plus fréquents, nouveaux ravageurs vers le nord, sols qui se salinisent dans les régions chaudes.",
   "Les repères s’inversent : on cherchait la chaleur, on la fuit ; on craignait l’eau, on la cherche ; on aimait les cépages à degré élevé, on préfère des maturités modérées. D’où l’adaptation : atlas climatique en Australie, vignobles en Angleterre ou très haut dans les Andes, nouveaux porte-greffes, vieux cépages ressortis, et à Bordeaux l’essai VitAdapt de l’INRAE, qui a mené à autoriser de nouveaux cépages en petite proportion."
  ],
  defend: "Les appellations ont figé des zones qu’on croyait éternelles ; elles sont en réalité le fruit d’adaptations successives. Le climat ne suffit pas à expliquer un terroir : il faut aussi le sol et la volonté humaine. C’est la transition vers la section Géologie.",
  client: "« Les grands vins viennent souvent d’endroits où le raisin mûrit juste. Le réchauffement déplace ces endroits. »",
  filRouge: "Pourquoi les meilleures expressions d’un cépage se trouvent-elles souvent en limite de sa zone de culture ?",
  prudence: [
   "Nouveaux cépages bordelais : le livre en cite sept dont le petit manseng ; l’INAO en a approuvé six en 2021, et les cahiers des charges actuels en comptent dix, sans petit manseng.",
   "Groenland « couvert de vignes » au Moyen Âge : non attesté."
  ]
 }
];
