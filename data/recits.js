// Récits de chapitre : le fil de l'argument de Lepeltier, affiché en tête de « Lire le chapitre ».
// Clé : `chapitre` = titre exact dans data/mille-vignes-sommaire.json, ou dans FRANCE_SOMMAIRE (fiches.js) pour un chapitre hors livre :
// celui-ci n'a pas de `pages` mais un `src` (fiches et sources), et `defend` s'y affiche « À retenir ». Texte reformulé, vérifié contre le livre
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
 },
{
 "chapitre": "Le cépage, un concept",
 "pages": "22-26",
 "question": "Qu’est-ce qu’un cépage, au juste ? Une espèce, une variété, autre chose ?",
 "fil": [
  "Lepeltier montre que « cépage » est un mot de vigneron avant d’être un mot de savant, et qu’il colle mal à la botanique. On distingue des vignes depuis l’Antiquité (Pline en énumère une cinquantaine), mais sans les décrire précisément. Le mot apparaît chez le poète Baïf en 1573, dans un autre sens ; c’est le comte Odart qui le fait entrer dans la langue savante avec son Ampélographie universelle (1845), et il s’impose à la fin du XIXe siècle.",
  "<b>Le problème de fond.</b> En botanique, une variété se reproduit à l’identique par la graine. Or un pépin de vigne donne toujours un individu nouveau. Un cépage ne tient donc que par la bouture et la greffe. D’où l’emboîtement fixé en France : le cépage regroupe des variétés (grenache noir, blanc, gris…), qui regroupent des clones. Plus un cépage est ancien, plus il a de clones : le pinot en compte énormément, le cabernet sauvignon, né au XVIIIe siècle, beaucoup moins.",
  "<b>Nommer et reconnaître.</b> Synonymes et faux noms de lieux brouillent tout (l’auxerrois du Sud-Ouest est le malbec). Il n’existe pas de nomenclature officielle ; Wine Grapes propose de retenir le nom le plus utilisé dans la région d’origine. Le phylloxéra rend l’identification urgente : il faut reconnaître les plants sains et les fraudes. Viala et Vermorel décrivent 5 200 cépages (1901-1910), puis Pierre Galet fonde l’ampélographie moderne sur la feuille, « visage de la vigne », mesurée et codifiée.",
  "<b>La révolution de l’ADN.</b> Depuis les années 1990, les marqueurs génétiques identifient les cépages et révèlent leurs parents : en 1997, le cabernet sauvignon se révèle fils du cabernet franc et du sauvignon blanc. Le génome de la vigne est séquencé en 2007. L’encadré du zinfandel montre l’enquête : zinfandel et primitivo sont un seul cépage, d’origine croate, le tribidrag."
 ],
 "defend": "Identifier sert à contrôler (catalogue officiel, clones agréés), mais la mission première de l’ampélographie devrait être de comprendre et de préserver la diversité de la vigne, pas de la restreindre.",
 "client": "« Zinfandel et primitivo, c’est le même cépage, et il est croate : son nom d’origine est tribidrag. »",
 "filRouge": "Pourquoi ne peut-on pas semer un pépin de chardonnay pour obtenir du chardonnay ?",
 "prudence": [
  "Tribidrag : l’herbier de Split a été analysé en 2011 par des chercheurs croates ; Wine Grapes (2012) a popularisé le nom (le livre attribue la découverte à Vouillamoz en 2012).",
  "Liste des descripteurs de l’OIV : le livre cite l’édition de 2009 comme référence ; une 3e édition a été adoptée en 2023.",
  "« Cépage » chez Baïf en 1573 : le mot y désigne le branchage de la vigne ; le sens de variété date du XIXe siècle."
 ]
},
{
 "chapitre": "La classification des cépages",
 "pages": "27-30",
 "question": "Comment ranger des milliers de cépages pour qu’ils aient un sens ?",
 "fil": [
  "Tout dépend de ce qu’on cherche. Le vigneron classe par usage, l’ampélographe par parenté. Lepeltier présente les grandes familles de classement.",
  "<b>Cuve ou table.</b> Les raisins de cuve ont des grappes compactes et des baies juteuses ; ceux de table, des baies grosses, croquantes, souvent sans pépins chez les variétés modernes. Le partage suit aussi l’histoire : le monde romain puis chrétien améliore le raisin à vin, le monde islamique le raisin de table. C’est une catégorie d’usage plus que de nature.",
  "<b>Par maturité.</b> Victor Pulliat classe les cépages selon leur date de maturité par rapport au chasselas, en « époques ». Utile pour choisir un cépage selon le climat, ce classement ne dit rien des liens entre cépages.",
  "<b>Par familles.</b> Le Russe Negrul distingue trois grands groupes géographiques (les proles) : orientalis, surtout des raisins de table à grosses baies ; pontica, des cépages d’Europe de l’Est, de Géorgie et d’Asie Mineure ; occidentalis, les cépages de cuve d’Europe de l’Ouest. En France, Levadoux puis Bisson définissent des écogéogroupes : des familles nées d’un même milieu, nommées d’après leur cépage phare (noiriens autour du pinot, carmenets autour du cabernet franc, mansiens, salvaniens, sérines). Boursiquot et This proposent ensuite une échelle à sept niveaux, de l’espèce au clone.",
  "<b>Les parents oubliés.</b> L’ADN retrouve des géniteurs disparus des vignobles : la magdeleine noire des Charentes est un parent du merlot et du malbec ; le gouais blanc a une descendance immense. Des pépins archéologiques montrent même qu’un savagnin est multiplié par bouture depuis plus de 900 ans."
 ],
 "defend": "La diversité de la vigne vient de sa reproduction par pépin. Semer et croiser restent donc les outils d’avenir pour adapter la vigne, d’où leur retour chez les chercheurs et certains vignerons.",
 "client": "« Le merlot a pour parents le cabernet franc et la magdeleine noire des Charentes, un cépage presque disparu. »",
 "filRouge": "Pourquoi classer les cépages par familles en dit-il plus que les classer par date de maturité ?",
 "prudence": [
  "Souche de Saint-Suliac : entrée dans la collection de Vassal en 1996 (le livre dit découverte en 1992).",
  "Gouais blanc : près de 120 descendants selon Lacombe (2013), dont 63 aux deux parents connus (le livre dit 63).",
  "Époques de Pulliat : plusieurs exemples du livre sont mal placés (savagnin en 2e époque, mourvèdre en 3e) ; la méthode est exposée dès 1874."
 ]
},
{
 "chapitre": "Des cépages à foison",
 "pages": "31-33",
 "question": "Pourquoi existe-t-il des milliers de cépages, alors qu’une poignée seulement couvre les vignobles ?",
 "fil": [
  "<b>Deux façons de se reproduire.</b> Par le pépin, la vigne brasse ses gènes ; comme elle est très hétérozygote, chaque pépin donne un individu unique, donc un nouveau cépage. Par la bouture, au contraire, elle copie à l’identique : c’est le clone. La vigne sauvage, aux pieds mâles ou femelles, se répand grâce aux oiseaux ; l’apparition de fleurs hermaphrodites a été décisive pour la domestication.",
  "<b>Créer puis fixer.</b> Le semis est lent et incertain (deux à trois ans avant le premier raisin) ; la multiplication végétative s’impose donc pour garder les bons pieds. Jusqu’au phylloxéra, les vignes sont complantées de nombreux cépages, de nouveaux individus naissent spontanément et les meilleurs sont multipliés par marcottage ou provignage. Les migrations humaines brassent le tout : des milliers de cépages apparaissent.",
  "<b>Une diversité en péril.</b> Viala et Vermorel en décrivent 5 200, Galet 9 600, et les bases internationales recensent des milliers de noms. Pourtant, quelques cépages dominent : qualité et régularité, mais aussi industrialisation, goût uniformisé et normes. Lepeltier salue le retour des « cépages modestes » et le rôle des conservatoires et des collections, dont celle de Vassal à Montpellier, la plus grande du monde en pleine terre."
 ],
 "defend": "La vigne est faite pour évoluer et se diversifier. Préserver ces cépages est l’affaire de toute la filière, et aussi du consommateur, qui les fait vivre en les buvant.",
 "client": "« Il existe des milliers de cépages ; une poignée seulement occupe l’essentiel des vignobles. Goûter les autres, c’est les faire vivre. »",
 "filRouge": "Explique le rôle de chacun des deux modes de reproduction de la vigne dans la diversité des cépages.",
 "prudence": [
  "Le chiffre de 71,9 % du vignoble français pour 10 variétés (2017) et les 337 variétés autorisées ne sont pas confirmés.",
  "Collection du Luxembourg : environ 1 300 cépages vers 1848 selon le livre ; d’autres sources donnent 1 498 en 1842 et 1 924 en 1848."
 ]
},
{
 "chapitre": "L’hybridation : passé, présent et futur de la vigne",
 "pages": "34-39",
 "question": "Hybrider la vigne, est-ce contre nature ?",
 "fil": [
  "Non : croiser des espèces différentes est un phénomène naturel d’évolution. La technique est artisanale : on castre la fleur, on dépose au pinceau le pollen choisi, on ensache, puis on sème les pépins (quatre au plus par baie) et on sélectionne pendant des années. Par rétrocroisements répétés vers l’un des parents, on obtient l’introgression : un individu proche de ce parent, avec quelques gènes de l’autre.",
  "<b>Avant le phylloxéra.</b> Les premiers hybrides entre espèces naissent aux États-Unis (le concord) ; en France, on croise encore au sein de vinifera, comme les Bouschet et leurs teinturiers (alicante bouschet).",
  "<b>Le phylloxéra comme accélérateur.</b> Deux voies s’affrontent : greffer la vinifera sur des racines hybrides américaines, ou planter des hybrides producteurs directs, productifs mais au goût souvent « foxé ». L’âge d’or des hybrideurs (Seibel, Baco, Kuhlmann, Seyve-Villard, Couderc) précède l’interdiction : les hybrides couvrent près d’un tiers du vignoble au milieu des années 1950, puis l’État les fait arracher. Le baco 22A reste le seul autorisé en AOC (armagnac).",
  "<b>Les variétés résistantes.</b> Alain Bouquet introduit chez vinifera des gènes de résistance à l’oïdium et au mildiou venus de Muscadinia rotundifolia ; le programme ResDur combine ensuite plusieurs résistances. Artaban, vidoc, floreal et voltis sont inscrits comme cépages de cuve. En Europe, les PIWI (regent, solaris, souvignier gris…) se sont fait une place. L’encadré sur les semis de Randall Grahm et d’Elisabetta Foradori ouvre une autre voie : régénérer la vigne par le pépin."
 ],
 "defend": "L’hybridation est un outil puissant face aux maladies et au climat, mais chaque stratégie (préserver, améliorer, régénérer, revenir aux lambrusques) porte une vision du monde, et toutes n’ont de sens qu’en repensant aussi la monoculture.",
 "client": "« Artaban, vidoc, floreal, voltis : des cépages résistants à l’oïdium et au mildiou, créés par l’INRAE et inscrits au catalogue officiel. »",
 "filRouge": "Quelle différence entre un hybride producteur direct d’hier et une variété résistante ResDur ?",
 "prudence": [
  "Le texte inverse les gènes : Run1 résiste à l’oïdium, Rpv1 au mildiou (la légende p. 37 est juste).",
  "Les six cépages interdits : loi du 24 décembre 1934 (le livre dit 1935).",
  "PIWI International est fondée en 1999 (le livre dit 1995) ; l’OIV n’a pas adopté le terme « variété résistante » en 1994.",
  "Popelouchum se trouve à San Juan Bautista, et 10 000 était l’objectif de nouvelles variétés, pas le nombre de pépins semés.",
  "Surface des hybrides en France : environ 400 000 ha et 29-30 % en 1958 (le livre : 402 000 ha, 32 %), non confirmé.",
  "La généalogie p. 38-39 concerne le nord-ouest de l’Italie, pas le nord-est."
 ]
},
{
 "chapitre": "La vigne : des racines aux feuilles",
 "pages": "40-44",
 "question": "Pourquoi s’intéresser aux racines, à la tige et aux feuilles, puisque le vigneron ne vend que le raisin ?",
 "fil": [
  "<b>Les racines.</b> Méconnues parce qu’invisibles, et parce que la greffe a placé sous terre un porte-greffe et non le cépage. Leur pointe commande la croissance, leurs poils absorbent l’eau et les minéraux et échangent avec les micro-organismes. Deux circuits relient le bas et le haut : le xylème monte la sève brute, le phloème descend la sève élaborée. Les vignes américaines résistent au phylloxéra parce qu’elles cicatrisent vite leurs blessures. Chaque cep a un système racinaire unique ; les racines ancrent, nourrissent, stockent, et fabriquent même du sol avec leurs partenaires microbiens. Sans ce lien vivant, pas de vin de terroir.",
  "<b>La tige.</b> Liane très plastique, la vigne a un port propre à chaque cépage (le carignan se dresse, le pinot retombe). Sur la charpente (tronc, bras), on taille le bois de deux ans en courson (court) ou en baguette (long). Les rameaux de l’année deviennent des sarments en brunissant. Dans chaque œil, le bourgeon principal donne la plus grosse grappe ; s’il gèle, les secondaires prennent le relais avec des grappes plus petites. La fertilité des yeux de la base varie selon le cépage (bonne chez le gamay, pas chez le poulsard), ce qui règle la longueur de taille.",
  "<b>Les feuilles.</b> Leur couleur renseigne sur l’état de la plante ; les stomates, sous la feuille, assurent les échanges gazeux. La photosynthèse fabrique les sucres, d’abord envoyés aux organes en croissance, puis, après la véraison, aux grappes et aux réserves. L’encadré sur Santorin montre une vigne conduite en corbeille au ras du sol, jamais greffée."
 ],
 "defend": "La vigne est par nature une liane faite pour pousser racines, tiges et feuilles. L’homme l’a sculptée pour le fruit : il faut garder cette tension en tête quand on la regarde.",
 "client": "« À Santorin, les vignes sont tressées en corbeilles au ras du sol et poussent sur leurs propres racines : le phylloxéra n’y a pas prise. »",
 "filRouge": "Pourquoi dit-on qu’une récolte se prépare sur trois ans ?",
 "prudence": [
  "Les racines « à plusieurs dizaines de mètres » : environ 6 m sont documentés.",
  "Le livre écrit que des cyanobactéries vivent dans les chloroplastes : en réalité, les chloroplastes descendent d’une cyanobactérie.",
  "Racine pivotante pour un semis, traçante pour une bouture : non retrouvé dans les sources consultées."
 ]
},
{
 "chapitre": "La vigne : des fleurs aux baies",
 "pages": "45-48",
 "question": "Comment une fleur minuscule devient-elle un raisin à vin ?",
 "fil": [
  "La domestication a tourné l’énergie de la vigne vers son fruit. Les inflorescences sont préformées dans le bourgeon ; les fleurs, vertes et discrètes, s’ouvrent en quelques jours vers juin dans l’hémisphère nord. Chez vinifera, presque toutes sont hermaphrodites. Le capuchon doit tomber, ce qui demande soleil et chaleur : pluie, vent et froid à la floraison condamnent déjà une partie de la récolte.",
  "<b>Les accidents.</b> Quand des fleurs tombent sans donner de baies, c’est la coulure (le grenache et le merlot y sont sensibles, un porte-greffe trop vigoureux aussi). Quand la fécondation est incomplète, de petites baies sans pépins voisinent avec des baies normales : c’est le millerandage. Le taux de nouaison dépasse rarement 50 %.",
  "<b>La vie de la baie.</b> Trois phases : verte, dure et acide jusqu’à la véraison ; puis elle grossit, s’adoucit, se colore et se charge en sucres ; enfin la maturité. La couleur dépend de deux gènes : les blancs n’ont que des formes inactives, et le pinot montre toutes les variantes (blanc, gris, noir, teinturier). Dans la baie, la pellicule porte les arômes, les tanins et la couleur, et sa pruine accueille des levures ; la pulpe donne le jus ; le pépin apporte tanins et huile qu’on évite d’extraire. Lepeltier note qu’on ne connaît pas de grand vin issu de raisins sans pépins.",
  "La rafle, longtemps jetée, revient en vinification."
 ],
 "defend": "Tout le vin se joue dans un fruit fragile, et cela commence dès la fleur : la réussite de la floraison dessine déjà le millésime.",
 "client": "« La couleur d’un vin rouge vient de la peau : le jus de presque tous les raisins noirs est incolore, sauf chez les teinturiers. »",
 "filRouge": "Explique la différence entre coulure et millerandage, et leurs effets sur la récolte.",
 "prudence": [
  "Floraison 8 à 10 semaines après le débourrement selon le livre : 6 à 8 semaines selon UC Davis.",
  "Nombre de fleurs (riesling 125, tannat plus de 440), millerandage des millésimes 1978 et 1995 chez Jayer, sucres passant « de 1 à 20 % en quarante jours » : non confirmés."
 ]
},
{
 "chapitre": "La vigne greffée, une « plante artificielle » ?",
 "pages": "49-54",
 "question": "Une vigne greffée est-elle encore la même plante ?",
 "fil": [
  "<b>Une vieille pratique.</b> On greffe depuis l’Antiquité, en Chine, en Grèce, à Rome, puis chez les agronomes arabo-andalous qui décrivent presque toutes les techniques modernes. Le principe : souder les tissus conducteurs des deux partenaires. Plus ils sont proches botaniquement, mieux la greffe prend ; l’harmonie parfaite est rare.",
  "<b>Le phylloxéra.</b> Ce puceron nord-américain apparaît en France dans les années 1860 et Planchon l’identifie en 1868. Son cycle est complexe : sur les vignes américaines, il vit surtout sur les feuilles ; sur vinifera, il attaque les racines et tue le cep. Les remèdes (submersion, sable, sulfure de carbone) coûtent trop cher : la greffe sur racines américaines l’emporte, après un long combat entre « américanistes » et « sulfuristes ».",
  "<b>Le doute.</b> Dès 1908, le botaniste Lucien Daniel affirme que la greffe change la vigne : plus de vigueur, un déséquilibre entre racines et feuillage, un bourrelet qui freine la sève. Il est contesté, mais la recherche actuelle confirme que le porte-greffe agit sur la vigueur, l’eau, les minéraux et le sucre, et que le greffon agit en retour, de façon imprévisible.",
  "L’encadré de François Chidaine à Montlouis compare chenins greffés et francs de pied sur une même parcelle : les francs de pied sont moins vigoureux, produisent moins, réagissent davantage au millésime et donnent des vins plus tendus, un peu moins alcoolisés. Ailleurs, des vignobles épargnés (Australie-Méridionale, Chili, îles) gardent de très vieilles vignes non greffées."
 ],
 "defend": "La vigne greffée est un être nouveau, une « plante artificielle ». La greffe a sauvé le vignoble mondial, mais son succès a aussi découragé la recherche d’autres solutions.",
 "client": "« Presque toutes les vignes poussent greffées sur des racines américaines depuis le phylloxéra ; une vigne « franche de pied » pousse sur ses propres racines. »",
 "filRouge": "Pourquoi le porte-greffe ne transmet-il pas son goût au raisin, mais modifie-t-il quand même le vin ?",
 "prudence": [
  "Ibn al-’Awwâm est de la fin du XIIe siècle (le livre dit XIe).",
  "Phylloxera vastatrix : le nom d’espèce vient de Planchon ; Signoret a rattaché l’insecte au genre.",
  "Les expressions « chimère » (Branas) et « plante artificielle » (Ollat) n’ont pas été retrouvées dans leurs écrits.",
  "Hill of Grace : planté vers 1860 selon le domaine (le livre dit 1868) ; les « survivors » de Barossa ont 70 ans (le livre dit 60) ; « Loïc Paquet » est Loïc Pasquet.",
  "Bournais : les 10 à 15 hl/ha des francs de pied ne sont pas confirmés."
 ]
},
{
 "chapitre": "Porte-greffes et nouveaux paysages viticoles",
 "pages": "55-63",
 "question": "Pourquoi les porte-greffes, dont on parle si peu, ont-ils dessiné le vignoble actuel ?",
 "fil": [
  "<b>Trouver la bonne racine.</b> Le premier critère est la résistance au phylloxéra. Mais les vignes américaines pures viennent de sols acides : dans les terres calcaires de Champagne, de Bourgogne ou de Cognac, elles provoquent la chlorose (feuilles jaunies, photosynthèse compromise). Pierre Viala rapporte du Texas V. berlandieri, qui tolère le calcaire mais se greffe mal ; croisée, elle donne le 41 B, qui sauve la Champagne et Cognac. À l’inverse, l’AxR1, à moitié vinifera, s’effondre en Californie face au phylloxéra.",
  "<b>Un fonds trop étroit.</b> La plupart des porte-greffes actuels ont plus d’un siècle, et une bonne part de leur patrimoine génétique vient de quelques pieds de trois espèces américaines. Cette faible diversité les rend vulnérables aux mêmes parasites ; la recherche cherche des porte-greffes face à la sécheresse, aux nématodes et au sel.",
  "<b>Un paysage transformé.</b> Le porte-greffe permet de planter partout : les vignes descendent des coteaux vers les plaines, les rendements montent, et il faut repenser densité, taille et traitements.",
  "<b>La greffe aujourd’hui.</b> Presque toutes les plantations se font avec des greffés-soudés de pépinière ; la greffe en oméga, mécanisée, domine mais est critiquée. L’esca, maladie du bois, progresse depuis l’interdiction en 2001 de l’arsénite de sodium. Les plaies de taille et une mauvaise soudure seraient des portes d’entrée ; une taille qui respecte les flux de sève et le curetage limitent les dégâts, et une étude bordelaise de 2017 trouve moins d’esca avec des greffes manuelles."
 ],
 "defend": "Sauveurs du vignoble, porte-greffes et greffage en sont aussi de grands transformateurs. Le savoir-faire de la greffe, autrefois vigneron, a été délégué à une filière industrialisée, ce qui fait partie du problème.",
 "client": "« Le 41 B, porte-greffe créé en 1882, porte encore l’immense majorité du vignoble champenois : il supporte le calcaire. »",
 "filRouge": "Pourquoi les premières racines américaines ont-elles échoué dans les sols calcaires français, et comment l’a-t-on résolu ?",
 "prudence": [
  "Mission de Viala aux États-Unis : 1887 (le livre dit 1888).",
  "Le livre cite le gravesac parmi les six porte-greffes dominants : en surfaces de vignes-mères 2025, c’est le 41 B qui est 6e, le gravesac 8e.",
  "« 99 % » des porte-greffes issus de trois clones : en réalité, 39 % du fonds génétique de 36 porte-greffes vient de trois pieds (Riaz et al., 2019).",
  "Greffage sur table inventé en 1878, taille Poussard « dès 1911 », machine oméga de « Wagner » (brevet des Wahler) : non confirmés.",
  "L’hypothèse selon laquelle la greffe aurait fait la fortune du merlot reste une hypothèse."
 ]
},
{
 "chapitre": "Quelle Vitis planter ?",
 "pages": "64-69",
 "question": "Un vigneron peut-il planter ce qu’il veut ?",
 "fil": [
  "Non. Lepeltier part d’une expression qu’elle trouve révélatrice : le « matériel végétal ». Depuis le phylloxéra, une profession est née, la pépinière viticole, et depuis 1944 l’État contrôle les plants pour lutter contre les virus.",
  "<b>Massale ou clonale ?</b> Dans les deux cas, on multiplie et on greffe un pied, donc on clone. La différence tient au protocole. La sélection clonale, organisée en France depuis 1962, part d’un pied unique, testé contre les virus, suivi pendant des années et vinifié sur plusieurs millésimes avant d’être agréé et inscrit au catalogue : une quinzaine d’années de la prospection à la diffusion. La sélection massale multiplie les meilleurs pieds d’une vieille vigne pour en garder la diversité, dans un cadre strict.",
  "<b>Une offre inégale.</b> Certains cépages ont des dizaines de clones agréés, d’autres un seul, et quelques clones concentrent l’essentiel des plantations (pour le chardonnay, les clones 76, 95 et 96).",
  "<b>La fabrication des plants.</b> Vignes-mères sur des terres souvent peu viticoles, greffes mécaniques, forçage, tri : beaucoup de plants cassent à la soudure. Des pépiniéristes comme Lilian Bérillon critiquent cette industrie et défendent la diversité des porte-greffes ; à Sancerre, le Sicavac a imposé un cahier des charges pour ses plants de sauvignon. Pendant ce temps, des vignes meurent avant trente ans."
 ],
 "defend": "La vigne, le sol et leur environnement seraient malades d’être pensés comme du « matériel » de production : la recherche du bas coût et du rendement immédiat s’accorde mal avec le rythme d’une plante qui met vingt ans à s’enraciner.",
 "client": "« Une sélection massale, c’est multiplier les meilleurs pieds de ses propres vieilles vignes ; une sélection clonale, un pied unique, testé et agréé. »",
 "filRouge": "Quelle différence réelle entre sélection massale et sélection clonale, puisque les deux produisent des clones ?",
 "prudence": [
  "Ceps Sicavac : sélection menée de 2005 à 2012, structure créée en 2014 (le livre dit depuis 2010).",
  "Droits limités au propre vignoble pour la massale, prix de 1,30 € la greffe, 25 000 à 30 000 € par hectare, 40 à 50 % de casse au tri : non confirmés (environ un tiers de pertes selon d’autres sources).",
  "Les chiffres de clones datent de 2022 : environ 1 240 clones de 392 variétés en 2026."
 ]
},
{
 "chapitre": "Penser la vigne autrement",
 "pages": "70-75",
 "question": "La vigne n’est-elle qu’une machine à raisins ?",
 "fil": [
  "Toute société a sa façon de penser les plantes ; Lepeltier appelle cela une ethnobotanique. La nôtre parle de la vigne avec des mots d’animal : son corps, ses yeux, son pied.",
  "<b>Francis Hallé.</b> Pour ce botaniste, la plante n’est pas un animal raté. Fixe, elle produit sa propre énergie et s’adapte par une plasticité immense. Elle n’a pas d’organes vitaux centralisés. Elle n’est pas non plus un individu : couper un animal le tue, couper une plante la multiplie, et une cellule peut redonner une plante entière. La plante est une colonie qui se construit en répétant son architecture. Elle accepte aussi l’autre en elle : la greffe, les bactéries devenues chloroplastes. Une vigne atteinte d’esca porte encore des fruits.",
  "<b>Goethe.</b> Il voit dans la plante une métamorphose continue d’une même unité, de la graine au fruit, et propose une méthode d’observation sensible et imaginative pour en saisir le mouvement.",
  "<b>Steiner et la biodynamie.</b> Rudolf Steiner, éditeur des écrits scientifiques de Goethe, en tire en 1924 les bases de l’agriculture biodynamique. Jean-Michel Florin décrit le « geste de la vigne » : une plante très végétative, qui pousse sa force de croissance jusque dans son fruit et que le vigneron passe son temps à canaliser."
 ],
 "defend": "Critiquer notre regard centré sur l’humain et l’animal permet de penser la plante plus humblement. La lecture biodynamique, polémique, a le mérite de replacer l’observation du vivant au centre.",
 "client": "« Une vigne n’est pas un individu comme un animal : chaque bouture peut redonner une plante entière. C’est ce qui permet de multiplier un cépage depuis des siècles. »",
 "filRouge": "En quoi la plante est-elle une « colonie » plutôt qu’un individu, selon Francis Hallé ?",
 "prudence": [
  "Éloge de la plante de Francis Hallé : 1re édition en 1999 (le livre dit 2014)."
 ]
},
{
 "chapitre": "La vigne et son monde souterrain",
 "pages": "76-84",
 "question": "Le sol n’est-il qu’un support sur lequel pousse la vigne ?",
 "fil": [
  "Longtemps, le sol a été vu comme une matière inerte, et l’on confond encore roche mère, terre et sol. Lepeltier, dans les pas du biologiste Marc-André Selosse, le décrit comme un écosystème vivant, fragile et méconnu.",
  "<b>Argiles, humus et complexe argilo-humique.</b> Le sol naît de la rencontre du minéral et de l’organique : la roche s’altère en argiles, la matière organique se décompose en humus. Argiles et humus, chargés négativement, se repoussent ; ils se lient grâce à des « colles » biologiques (champignons, vers de terre) et à des ponts de cations comme le calcium. Ce complexe argilo-humique retient les éléments nutritifs, donne au sol sa structure grumeleuse, et c’est lui que les pratiques intensives abîment.",
  "<b>Une foule invisible.</b> Un gramme de sol forestier abrite plus d’un milliard d’organismes. Certains nématodes transmettent le court-noué, mais la plupart régulent les populations de microbes.",
  "<b>Les mycorhizes.</b> La vigne vit en symbiose avec des champignons qui pénètrent ses racines : elle leur donne des sucres, ils explorent pour elle un volume de sol bien plus grand et lui rapportent eau, phosphore et azote, tout en la protégeant des pathogènes et des stress. Mais une vigne nourrie aux engrais minéraux cesse de nourrir ses champignons : elle devient dépendante et plus fragile. La rhizosphère, ce sol propre à la vigne, ne se reconstruit pas en un clin d’œil."
 ],
 "defend": "Un sol vivant est la condition d’une vigne pérenne et d’un vin de terroir. Sans complexe argilo-humique, on ne peut pas parler de terroir, encore moins de « minéralité ».",
 "client": "« Un gramme de sol vivant abrite plus d’un milliard d’organismes : ce sont eux qui font le lien entre la roche et la vigne. »",
 "filRouge": "Pourquoi une vigne nourrie aux engrais minéraux peut-elle devenir plus fragile ?",
 "prudence": [
  "La glomaline est produite par les champignons mycorhiziens, pas par les vers de terre.",
  "Biomasse terrestre « à 90 % microbienne » : les plantes en font environ 80 %, les bactéries environ 15 %.",
  "Ectomycorhizes : environ 2 % des espèces de plantes (le 10 % du livre concerne les familles).",
  "Le foyer européen de l’oïdium est la serre de Margate (Kent), en 1845, pas Londres.",
  "L’origine biologique des argiles (thèse des Bourguignon) n’est pas reprise par la pédologie consultée ; les 2 % de matière organique des sols viticoles français ne sont pas confirmés."
 ]
},
{
 "chapitre": "La vigne et son monde aérien",
 "pages": "85-91",
 "question": "La vigne peut-elle vivre seule ?",
 "fil": [
  "Non : comme toute plante, c’est un holobionte, un organisme et l’ensemble des micro-organismes qu’il héberge. Ses chloroplastes descendent eux-mêmes de bactéries. Ce peuple microbien est fragile, et les fongicides peu sélectifs l’atteignent aussi.",
  "<b>Les ennemis.</b> L’oïdium et le mildiou, venus d’Amérique au XIXe siècle, concentrent presque tous les traitements fongicides. On reconnaît aujourd’hui que leur maîtrise passe par la prévention et l’équilibre de l’écosystème. Le biocontrôle par des microbes est étudié, sans résultats encore convaincants. L’idée de « terroirs microbiens », des levures et bactéries propres à chaque lieu, reste débattue.",
  "<b>Les arbres.</b> À l’état sauvage, la vigne grimpe aux arbres. Les Étrusques la « marient à l’arbre », et jusqu’au XIXe siècle les joualles associent vigne, arbres fruitiers et cultures. Remembrement et monoculture chassent les arbres ; l’agroforesterie viticole les fait revenir (Restinclières). Les plantes voisines peuvent même marquer le vin : l’eucalyptol des eucalyptus se retrouve dans certains vins.",
  "<b>L’herbe et les bêtes.</b> L’herbe, longtemps ennemie (concurrence pour l’eau, gel, pourriture), revient sous forme de couverts végétaux et de plantes bio-indicatrices. Ravageurs et auxiliaires se régulent mutuellement si le milieu leur offre gîte et couvert ; moutons, poules ou chevaux retrouvent leur place dans certaines vignes."
 ],
 "defend": "La monoculture a isolé une liane faite pour vivre en compagnie. La comprendre, c’est savoir avec qui elle vit en permanence.",
 "client": "« Les notes mentholées du cabernet sauvignon Martha’s Vineyard de Heitz Cellar viennent des eucalyptus qui bordent la vigne : leur eucalyptol se dépose sur les raisins. »",
 "filRouge": "Qu’est-ce qu’un holobionte, et pourquoi la vigne en est-elle un ?",
 "prudence": [
  "Arrivée du mildiou : 1878 (le livre dit 1879 dans ce chapitre).",
  "« Non solus » n’est pas d’Érasme : c’est la devise des imprimeurs Elzevier, au XVIIe siècle.",
  "« 100 millions de bactéries par gramme de feuille » : non retrouvé.",
  "Restinclières couvre environ 50 ha (le livre dit 53), avec l’INRA vers 1995 ; l’échelle de permaculture d’Alain Malard, le livre des Darricau et les travaux de Diego Tomasi n’ont pas été retrouvés."
 ]
},
{
 "chapitre": "Penser la viticulture de demain",
 "pages": "92-95",
 "question": "La vigne serait-elle malade d’être cultivée ?",
 "fil": [
  "<b>L’après-guerre.</b> À partir de 1945, il faut produire vite et bon marché : sélection et replantation massives, remembrement, monoculture, mécanisation et chimie de synthèse. C’est la naissance de la viticulture conventionnelle, avec des décennies fastes jusqu’aux années 1990.",
  "<b>Le revers.</b> Dès les années 1970, des alertes apparaissent : parasites résistants, pollution des eaux, érosion, santé des vignerons. La vigne reçoit une part des pesticides bien supérieure à la part de surface agricole qu’elle occupe. Viticulture raisonnée, intégrée, durable, labels comme HVE : ces démarches progressent, mais restent minoritaires.",
  "<b>La double spirale.</b> Gavée d’engrais, la vigne délaisse ses champignons mycorhiziens et perd une partie de ses défenses ; on traite alors davantage, ce qui affaiblit aussi les organismes utiles, et ainsi de suite.",
  "<b>Changer de regard.</b> Lepeltier y voit une question de mentalité plus que de technique. Philippe Descola nomme « naturalisme » notre partage entre humains et nature ; Bruno Latour parle de « Grand Partage ». D’autres pensées (Gaïa, le bon usage de la nature des Larrère, l’intelligence des plantes de Paco Calvo, la « diplomatie » avec le vivant de Baptiste Morizot) proposent de voir la vigne comme une alliée."
 ],
 "defend": "Toutes les viticultures, même bio quand elles suivent un modèle industriel, partagent souvent l’idée de la vigne comme outil. C’est cette idée qu’il faut dépasser pour que la vigne devienne une alliée et non une simple ressource.",
 "client": "« La vigne occupe une petite part des terres agricoles françaises, mais reçoit une part bien plus grande des pesticides. »",
 "filRouge": "Explique la « double spirale de dépendance » entre engrais, mycorhizes et pesticides.",
 "prudence": [
  "Le livre donne 15,6 % des pesticides pour 3,2 % de la surface agricole (chiffres de 2002, source introuvable) ; le Sénat donne 14,4 % et 3,3 % en 2012.",
  "James Lovelock était chimiste et inventeur, pas climatologue.",
  "Du bon usage de la nature (Larrère) : paru en 1997 selon une source (le livre dit 1998)."
 ]
},
{
 "chapitre": "Cohabiter avec la vigne",
 "pages": "96-101",
 "question": "À quoi ressemble une viticulture qui « fait avec » le vivant plutôt que de « lutter contre » ?",
 "fil": [
  "<b>Le vin nature.</b> Ses détracteurs y voient une contradiction, un vin étant forcément une œuvre humaine. Lepeltier répond avec l’anthropologue Christelle Pineau : derrière une nébuleuse de pratiques, des « vignerons chercheurs » partagent le respect des sols et la prévention. Le mot est ancien (vins sans sucre ajouté au début du XXe siècle), puis Jules Chauvet pose les bases de vinifications sans intrants, reprises par Marcel Lapierre ou Pierre Overnoy. Il n’a pas de définition légale ; des chartes existent, dont « Vin méthode nature ».",
  "<b>Agir moins, observer plus.</b> L’ethnobotaniste Haudricourt oppose l’action directe, typiquement occidentale, à l’action indirecte qui crée les conditions de croissance. Fukuoka, au Japon, pratique une « agriculture naturelle » sans labour ni engrais ; la permaculture (Mollison et Holmgren) et l’agriculture régénératrice prolongent ces idées. En vigne, le non-labour gagne du terrain, comme chez Eyrie Vineyards dans l’Oregon.",
  "<b>Arbres et animaux.</b> La vitiforesterie réassocie arbres et vignes (Château de Fosse-Sèche, en Saumurois) ; le vitipastoralisme ramène moutons, vaches ou poules, comme en Nouvelle-Zélande où les moutons tondent l’herbe en hiver. L’encadré Vignenvie montre une viticulture de grande frugalité dans le Beaujolais.",
  "<b>L’agroécologie</b> réunit ces pratiques : le mot date de 1928, et la discipline associe dimension écologique, économique et sociale."
 ],
 "defend": "L’agroécologie viticole n’est pas un retour en arrière mais une proposition progressiste, à condition de repenser un modèle productiviste qui est au cœur du problème.",
 "client": "« Le « vin nature » n’a pas de définition légale ; en France, la charte « Vin méthode nature », avec cahier des charges et contrôle, est la seule autorisée à figurer sur l’étiquette. »",
 "filRouge": "Quel point commun relie vin nature, permaculture, viticulture régénératrice et vitiforesterie ?",
 "prudence": [
  "Eyrie Vineyards n’a jamais labouré depuis 1965 : le livre dit à tort que Jason Lett a « arrêté » le labour.",
  "Fosse-Sèche : 15 + 30 ha p. 99, 15 + 18 ha p. 101 dans le livre.",
  "Vignenvie : 600 g de cuivre par an, environ sept fois moins que la limite bio (le livre dit dix).",
  "Nouvelle-Zélande : 59 % est une part de viticulteurs ; vignoble de 42 519 ha et 23,6 millions de moutons en 2024 (le livre : 37 000 ha et 27 millions).",
  "Le rôle de Léon Barral comme pionnier de l’intégration animale, la date de l’AVN et celle de La Corne de vache et le Microscope (2019 ou 2020) ne sont pas confirmés."
 ]
},
{
 "chapitre": "Pourquoi lire la géologie des vignobles ?",
 "pages": "124-129",
 "question": "Pourquoi la géologie est-elle devenue un argument central du vin, et que faut-il vraiment en comprendre ?",
 "fil": [
  "La roche mère s’affiche aujourd’hui sur les étiquettes et organise même certaines cartes des vins. Lepeltier rappelle que ce n’est pas nouveau : la pierre se lisait déjà dans les murets, les cabanes et les caves, et les plantes sauvages trahissaient le sous-sol. La Bourgogne, dont les parcelles (les « climats ») auraient été hiérarchisées selon leur sol, a servi de modèle au système français des appellations, qui a fait de plus en plus appel aux géologues.",
  "Depuis les années 1990 se développe une « œnogéologie », qui cherche les liens entre sol, sous-sol, vigne et vin. Dans l’Antiquité déjà, Virgile et Vitruve pensaient que le goût du vin venait de la terre.",
  "<b>Le temps long.</b> La croûte terrestre dérive au gré de la tectonique des plaques ; collisions, submersions et érosions façonnent roches et reliefs depuis des milliards d’années. Les noms d’âges géologiques (Jurassique, Carbonifère, Kimméridgien…) viennent de lieux, de peuples ou de roches.",
  "<b>Pourquoi cet engouement ?</b> Les cépages et les savoir-faire voyagent ; le sol, lui, ne s’exporte pas. Face aux vignobles du Nouveau Monde, il est devenu l’argument d’unicité par excellence, renforcé par la mode de la « minéralité ».",
  "<b>Des mots à ne pas confondre.</b> Un minéral est un solide cristallisé (quartz, feldspath, argile au sens minéralogique) ; un élément chimique est un type d’atome (calcium, potassium) ; une roche est un assemblage de minéraux (le calcaire, dominé par le carbonate de calcium). Confondre les trois mène à des contresens sur la « minéralité »."
 ],
 "defend": "Lire la géologie aide à comprendre un terroir, mais il faut se méfier de l’idée qu’une roche, à elle seule, rendrait un vin meilleur : la question est plus complexe qu’un argument commercial.",
 "client": "« La roche mère sur l’étiquette, c’est une piste, pas une garantie : le sol agit surtout par l’eau et la vie qu’il apporte à la vigne. »",
 "filRouge": "Pourquoi la géologie est-elle devenue un argument commercial si fort depuis cinquante ans ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Comprendre les roches magmatiques",
 "pages": "130-132",
 "question": "Que sont les roches magmatiques, et quels vignobles reposent dessus ?",
 "fil": [
  "Il existe trois grandes familles de roches selon leur mode de formation : magmatiques, sédimentaires et métamorphiques. Les magmatiques naissent du refroidissement du magma.",
  "<b>Lentes ou rapides.</b> Refroidi lentement en profondeur, le magma donne des roches plutoniques aux cristaux visibles (le granit). Refroidi vite en surface, il donne des roches volcaniques au grain fin ou vitreux (le basalte). Chaque roche plutonique a son équivalent volcanique de même composition. On distingue les roches riches en potassium et sodium (felsiques) de celles riches en fer et magnésium (mafiques).",
  "<b>Sur roches plutoniques.</b> Le granit porte une partie du Rhône nord et du Beaujolais, le Dão portugais. Mais le Beaujolais n’est pas que granitique : Juliénas et Côte-de-Brouilly reposeraient surtout sur une « pierre bleue » que le livre identifie à la diorite (identification non confirmée). Le gabbro est mis en avant par les nouveaux crus communaux du Muscadet. Le granit, dur, rend les caves difficiles à creuser : les chais y sont souvent en surface.",
  "<b>Sur roches volcaniques.</b> Le basalte, le plus répandu, porte l’Etna, la Columbia Valley ou une partie de l’Auvergne ; décomposé, il donne des sols fertiles. Rhyolite, andésite et porphyre apparaissent ailleurs (Savennières, Santorin). Les roches projetées par les éruptions explosives (cendres, tuf, ponce, lapilli) forment d’autres terroirs, comme les pouzzolanes de Lanzarote.",
  "L’encadré sur les vins de volcan pose la question : drainants, pauvres en matière organique, riches en certains minéraux, ces sols laissent-ils une signature commune ? Des recherches sont en cours."
 ],
 "defend": "Derrière le mot « granit » ou « volcanique » se cachent des roches très différentes : le langage du vin simplifie souvent à l’excès.",
 "client": "« Granit et basalte viennent tous deux du magma : l’un a refroidi lentement en profondeur, l’autre vite en surface. »",
 "filRouge": "Quelle différence entre une roche plutonique et une roche volcanique, et pourquoi cela compte-t-il pour un vignoble ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Comprendre les roches sédimentaires",
 "pages": "133-135",
 "question": "Pourquoi les roches sédimentaires, dont le calcaire, portent-elles tant de grands vignobles ?",
 "fil": [
  "Les roches sédimentaires couvrent la majeure partie des continents. Elles naissent en surface : des roches existantes sont désagrégées ou altérées, les particules sont transportées par l’eau, la glace, le vent, se déposent en couches puis se compactent et se cimentent (la diagenèse).",
  "<b>Plusieurs familles.</b> Les roches détritiques sont faites de débris classés par taille (argiles, silts, sables, graviers) : grès, poudingues, safres de Châteauneuf-du-Pape. Les roches chimiques précipitent à partir de l’eau : silex de Sancerre, gypse, travertin. Les roches biochimiques viennent d’êtres vivants : c’est le cas de la plupart des calcaires, de la craie (Champagne) et de la diatomite.",
  "<b>Le calcaire.</b> Fait d’au moins la moitié de carbonate de calcium, il retient bien l’eau, se dissout facilement et donne des sols au pH élevé. Il en existe de nombreux types, souvent riches en fossiles (calcaires oolithiques de Côte-d’Or). Les marnes mélangent calcaire et argile.",
  "<b>Galets et graves.</b> Galets de Châteauneuf ou graves bordelaises drainent très bien mais sont chimiquement inertes : leur intérêt vient des argiles en dessous.",
  "Bourgogne, Champagne et Bordeaux reposent sur des sédiments : d’où la quête de calcaires ailleurs dans le monde, comme celle de Calera en Californie."
 ],
 "defend": "Croire à une adéquation unique entre un cépage et une roche supérieure est une simplification qui prive de terroirs encore inexplorés.",
 "client": "« La craie de Champagne et le calcaire de Bourgogne sont faits de coquilles et de squelettes d’organismes marins accumulés au fond des mers. »",
 "filRouge": "Pourquoi des galets roulés, chimiquement inertes, peuvent-ils pourtant faire un bon terroir ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md.",
  "Le fondateur de Calera s’appelle Josh Jensen (le livre écrit Jansen)."
 ]
},
{
 "chapitre": "Comprendre les roches métamorphiques",
 "pages": "136-138",
 "question": "Comment une roche se transforme-t-elle en une autre, et quels vignobles poussent sur ces roches métamorphiques ?",
 "fil": [
  "Les roches métamorphiques naissent de roches existantes enfouies : sous la pression et la chaleur, sans fondre, leurs minéraux se réorganisent en minéraux nouveaux, plus stables. La pression des plaques leur donne souvent une structure en feuillets : c’est la schistosité.",
  "<b>Une gradation.</b> Il n’y a pas de frontière nette entre ces roches, mais des degrés de transformation. Une argile devient ardoise, puis schiste, micaschiste, gneiss, et enfin migmatite juste avant de fondre.",
  "<b>Dans les vignobles.</b> L’érosion les fait affleurer au pied de vieilles montagnes, comme le Muscadet au bord du massif armoricain. Ardoises et schistes donnent leur identité à l’Anjou noir, Faugères, la Côte Brune en Côte-Rôtie, la Moselle, le Priorat, le Douro. Le gneiss se trouve au Pallet (Muscadet) ou en Wachau. L’amphibolite est devenue emblématique du Muscadet ; la serpentinite, trop riche en magnésium, repousse plutôt la vigne.",
  "<b>Le cycle des roches.</b> Toutes les roches se transforment sans cesse : elles s’altèrent en surface, s’enfouissent, fondent, renaissent. C’est dans ce recyclage permanent que se forment les sols.",
  "L’encadré sur les schistes rouges, bleus et gris d’un domaine de Moselle pose la question du goût : des vins si différents d’un schiste à l’autre viennent-ils de la roche elle-même, ou d’effets indirects sur la chaleur, la lumière et la vie du sol ?"
 ],
 "defend": "Les roches ne sont ni immobiles ni éternelles ; et « schiste » recouvre des compositions très variées, qu’il est difficile de généraliser.",
 "client": "« Le schiste est une ancienne argile transformée par la pression et la chaleur sous terre ; c’est elle qui lui donne ses feuillets. »",
 "filRouge": "Pourquoi est-il hasardeux d’attribuer directement le goût d’un vin à son schiste ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Existe-t-il un sol idéal pour la viticulture ?",
 "pages": "139-145",
 "question": "Y a-t-il un sol idéal pour la vigne ?",
 "fil": [
  "La vigne ne pousse jamais sur la roche nue, mais sur un sol, même très mince. Le sol naît lentement de deux mouvements : la roche s’altère (par le vivant, le gel, l’eau, l’air) et la matière organique se décompose en humus. Des horizons se forment, de la litière en surface à la roche intacte en profondeur. Il faut des milliers d’années pour faire un sol, que l’homme peut détruire bien plus vite.",
  "<b>Pas de sol idéal.</b> Les grands vins viennent de sols extrêmement variés : les grands crus d’Alsace reposent sur une mosaïque de roches. La vigne, frugale, se plaît dans des sols pauvres, pourvu qu’ils n’aient ni carence ni excès.",
  "<b>D’où viennent les nutriments ?</b> Les minéraux de la roche ne sont pas directement utilisables : il faut l’altération, le complexe argilo-humique, le pH et les micro-organismes pour les rendre disponibles. Seul l’azote vient surtout de la matière organique.",
  "<b>L’eau d’abord.</b> Dans le Médoc, Gérard Seguin a montré que la qualité ne suivait pas la fertilité du sol, mais sa capacité à réguler l’eau : un léger manque d’eau après la véraison freine la vigueur et concentre le raisin. Texture, drainage, fissures de la roche, pierrosité et argiles (gonflantes ou non) règlent ce régime hydrique. Des études en Côte-d’Or vont dans le même sens.",
  "Les encadrés expliquent le pH du sol, l’albédo (la lumière renvoyée par le sol) et les sols de Châteauneuf-du-Pape, où chaque secteur géologique donne un style différent."
 ],
 "defend": "Il n’existe pas un sol mais des sols ; leur rôle principal pour la qualité passe par l’alimentation en eau, bien plus que par une « minéralité » transmise directement.",
 "client": "« Un grand terroir, c’est souvent un sol qui donne juste un peu moins d’eau que la vigne n’en voudrait, au bon moment. »",
 "filRouge": "Pourquoi la régulation de l’eau compte-t-elle plus que la richesse minérale du sol pour la qualité du vin ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Climat, sol et terroir",
 "pages": "146-149",
 "question": "Le sol et le climat suffisent-ils à définir un terroir ?",
 "fil": [
  "Depuis les années 1960, la recherche tente de rationaliser la notion floue de terroir. En France, l’INAO commande dès la fin des années 1930 des études du sol des zones viticoles.",
  "<b>Les unités de terroir.</b> En Anjou, une équipe de l’INRA d’Angers crée l’Unité terroir de base (UTB) : une zone homogène définie par son climat local, sa roche et son degré d’altération. Croisées avec l’expérience des vignerons et des dégustations, ces études relient le vin à trois variables : précocité, vigueur et alimentation en eau. Un atlas en est tiré pour le Val de Loire. Alain Carbonneau élargit ensuite l’idée à l’Unité terroir viticole, qui intègre cépage et conduite.",
  "<b>Ailleurs.</b> La Suisse classe ses vignobles d’après les plantes qui y poussent spontanément ; le Nouveau Monde raisonne surtout par le climat, ce qui relativise le sol. En Argentine, Mendoza commence à cartographier ses terroirs.",
  "<b>Une définition à élargir.</b> L’homme modifie profondément les sols (certains sont classés comme anthroposols) et même le climat (murs, irrigation, lutte contre le gel). L’agronome Emmanuelle Vaudour distingue quatre sens du mot terroir : la matière (sol et climat), l’espace façonné par une société, la conscience d’une identité, et le slogan publicitaire."
 ],
 "defend": "Le terroir est construit par l’homme, au sens propre comme au sens figuré : il faut remettre l’humain et l’économie au cœur de sa définition, à côté du sol et du climat.",
 "client": "« Un terroir, ce n’est pas seulement un sol et un climat : ce sont aussi des générations de vignerons qui l’ont aménagé et fait connaître. »",
 "filRouge": "Pourquoi une définition du terroir limitée au sol et au climat est-elle insuffisante ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 157-188 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Une lecture révolutionnaire des terroirs et des paysages viticoles",
 "pages": "150-157",
 "question": "Les grands vignobles sont-ils nés de leur sol, ou de leurs clients ?",
 "fil": [
  "Pour le géographe Roger Dion, le terroir est d’abord un fait social. Sol et climat ne suffisent pas : sans marché pour vendre, pas de bon vin. Il reprend une question d’Olivier de Serres : à quoi bon un grand vignoble si l’on n’a pas où vendre son vin ?",
  "<b>Trois viticultures.</b> Autour de la Méditerranée, la vigne pousse facilement et à peu de frais, mais cette facilité pousse peu à l’excellence. Tout au nord, près de la Manche, la viticulture est trop aléatoire pour durer : ces régions deviennent des pays de bière… et de riches acheteurs de vins importés, qui en dictent le style. Entre les deux, la « limite nord de la viticulture commerciale » (Loire, Champagne, Bourgogne, Alsace) réussit le mieux, précisément parce que les conditions difficiles obligent à l’ingéniosité pour vendre cher.",
  "<b>La ville et la rivière.</b> Les vignobles de qualité naissent près des villes (évêchés, bourgeois propriétaires) et des voies navigables. À qualité de sol égale, Vertus, plus proche de sa ville, a été reconnu ; Sézanne non. La vigne s’installe souvent là où elle rapporte plus que le blé.",
  "L’encadré sur le saké montre la même logique au Japon : la qualité suit le pouvoir, l’argent et les ports."
 ],
 "defend": "Dion ne nie pas le sol et le climat à l’échelle de la parcelle, mais à l’échelle des régions, c’est la géographie commerciale qui joue le premier rôle. Le vin de qualité est une création humaine, pas une fatalité naturelle.",
 "client": "« Beaucoup de grands vignobles sont nés près d’une ville riche ou d’une rivière navigable : il fallait des clients et un moyen d’y acheminer le vin. »",
 "filRouge": "Selon Roger Dion, pourquoi la viticulture la plus réputée s’est-elle développée dans des régions au climat difficile ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Construire le terroir",
 "pages": "158-163",
 "question": "Les terroirs sont-ils naturels, ou fabriqués par les vignerons ?",
 "fil": [
  "Lepeltier montre qu’il n’existe presque pas de terroir que l’homme n’ait transformé. Le système des AOC défend l’idée d’un lien « naturel » au lieu, mais aucun texte n’interdit en général de remanier une parcelle : ce serait nier l’histoire.",
  "<b>Préparer le sol.</b> On nettoie la parcelle, on retire les pierres (qui deviennent murets, cabanes et pierriers, les murgers de Bourgogne), on laboure plus ou moins profond.",
  "<b>Maîtriser l’eau.</b> Le Médoc doit ses grands crus au drainage des marais par des ingénieurs hollandais au XVIIe siècle ; à l’inverse, des canaux irriguent Madère, Banyuls, Turpan en Chine ou les vignes andines.",
  "<b>Tenir la pente.</b> Terrasses du Douro, de Côte-Rôtie ou du Lavaux, rangs en travers de la pente, haies : tout sert à limiter l’érosion. En Bourgogne, on remontait déjà la terre érodée au Moyen Âge.",
  "<b>Nourrir le sol.</b> Fumiers, composts, et même déchets des villes (les ordures de Paris en Champagne) ont amendé les vignes. Aujourd’hui, on analyse le sol avant d’amender.",
  "L’encadré sur les filets anti-grêle montre le paradoxe : longtemps interdits en AOC parce qu’ils modifieraient le climat de la parcelle, alors que des pratiques qui détruisent le sol ne sont pas remises en cause."
 ],
 "defend": "Reconnaître que l’homme construit les terroirs permet de regarder plus lucidement la viticulture de demain et de reconnaître la légitimité des nouveaux vignobles.",
 "client": "« Les grands crus du Médoc existent parce qu’on a asséché des marais il y a plus de trois siècles : le terroir a été construit. »",
 "filRouge": "Cite trois façons dont les vignerons ont transformé physiquement leur terroir.",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Patrimoine architectural des vignobles",
 "pages": "164-171",
 "question": "Que racontent les murs, les cabanes et les chais d’un vignoble ?",
 "fil": [
  "L’architecture rurale se lit comme un discours sur un milieu et une société. Jusqu’au XXe siècle, le vigneron bâtit avec ce qu’il a sous la main.",
  "<b>La pierre</b> révèle la roche mère : tuffeau et caves troglodytiques de Loire, schiste en Anjou noir, granit du Minho. <b>Le bois</b> des échalas dit les moyens du propriétaire ; le fil de fer, arrivé au milieu du XIXe siècle, prépare la mécanisation.",
  "<b>Le petit patrimoine.</b> Les clos signalent la puissance d’un propriétaire, souvent citadin. La cabane de vigne porte mille noms (cabotte, capitelle, loge, mazet…). Bornes, pigeonniers, chemins droits ou sinueux disent une vision du monde.",
  "<b>Garder le vin.</b> Au nord, le vin fragile se garde en cave enterrée ; au sud, un cellier en rez-de-chaussée suffit ; à l’ouest domine le chai non voûté, dont le château-chai médocain est la forme la plus aboutie.",
  "<b>Le chai vitrine.</b> Avec Robert Mondavi en Napa Valley, la cave devient un lieu de visite et de marketing ; les grands architectes signent des chais à Bordeaux, en Rioja ou en Californie. Ces bâtiments racontent une histoire : imiter le vin, se fondre dans le paysage, ou disparaître pour suggérer un vin « naturel ».",
  "La double page sur la taille montre la même standardisation : quelques systèmes internationaux ont remplacé des centaines de tailles régionales."
 ],
 "defend": "Le bâti viticole révèle les relations entre le vigneron, son sol, son climat et son marché ; il évolue aujourd’hui avec la mondialisation et le discours sur le terroir.",
 "client": "« Regardez les murs et les toits d’un village viticole : ils sont souvent faits de la roche qui porte les vignes. »",
 "filRouge": "Pourquoi trouve-t-on des caves enterrées au nord et des celliers en surface au sud ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Les routes du vignoble",
 "pages": "172-177",
 "question": "Comment les routes, surtout celles de l’eau, ont-elles dessiné les vignobles ?",
 "fil": [
  "Avant le train, le vin voyage surtout par l’eau : moins cher, plus sûr, plus facile à taxer. Les grands vignobles s’alignent sur les fleuves navigables.",
  "<b>Aménager les rivières.</b> Faire sauter un passage dangereux sur le Douro a permis au vignoble de remonter la vallée ; le canal du Midi ouvre le Languedoc vers Paris, surtout après le grand hiver de 1709 ; les canaux de Briare et du Loing amènent les vins du Beaujolais et du Rhône vers la capitale.",
  "<b>Les ports.</b> La Rochelle a dominé Bordeaux au Moyen Âge grâce à son accès facile ; puis le cognac et la distillation ont pris le relais. Le mutage (ajout d’alcool) donne naissance aux vins de port : Jerez, Porto, Madère, Marsala.",
  "<b>Les routes terrestres</b> comptent aussi : voies romaines, route du sel. La route de la soie, en revanche, a été une « impasse du vin » : la vigne y est arrivée sans la culture qui l’accompagnait. Les chemins de Compostelle, eux, ont semé des vignobles pour les pèlerins et fait voyager boutures et savoir-faire.",
  "L’encadré sur la Loire montre un fleuve difficile, rendu navigable à grands frais, et devenu l’axe de tant de vignobles."
 ],
 "defend": "On ne comprend pas la géographie viticole sans la géographie de la circulation d’avant le chemin de fer, comme le disait Roger Dion.",
 "client": "« Presque tous les grands vignobles français longent un fleuve navigable : c’était la route pour vendre le vin. »",
 "filRouge": "Pourquoi la plupart des grands vignobles historiques se trouvent-ils le long de fleuves navigables ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "La ville dessine le vignoble, et vice versa",
 "pages": "178-182",
 "question": "Pourquoi la ville et le vignoble se façonnent-ils mutuellement ?",
 "fil": [
  "Les vignobles de qualité ne sont pas des îlots ruraux idéalisés : ils doivent leur essor à la ville, à la fois lieu de culture, de commerce, de consommation et de normes.",
  "<b>Des vignes en ville.</b> Vienne en Autriche garde des centaines d’hectares de vignes dans ses limites ; à Bordeaux, Haut-Brion et La Mission Haut-Brion sont enchâssés dans l’agglomération.",
  "<b>Le vin dessine la ville.</b> Quais, chais, halles aux vins, gares, octrois : des quartiers entiers sont nés du vin (les Chartrons à Bordeaux, Vila Nova de Gaia à Porto, le quartier de la gare à Haro).",
  "<b>La ville dessine le vignoble.</b> Les propriétaires devaient pouvoir rejoindre leurs vignes dans la journée : leurs investissements se concentrent dans une première couronne, là où se trouvent souvent les crus les plus réputés. Haut-Brion illustre cette alliance d’un terroir, d’une famille influente et d’un marché (Londres).",
  "<b>La ville comme marque.</b> Longtemps, les vins portent le nom de la ville qui les assemble et les garantit (Beaune, Bordeaux). L’idée d’AOC hérite de cette logique : la qualité décroîtrait avec la distance au centre."
 ],
 "defend": "Le terroir viticole n’est pas éternel : ses limites et sa réputation reflètent les intérêts des villes à chaque époque.",
 "client": "« Haut-Brion pousse aujourd’hui en pleine agglomération bordelaise : la ville a longtemps été la meilleure amie du grand vin. »",
 "filRouge": "Pourquoi trouve-t-on souvent les crus les plus réputés près des villes historiques ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "L’invention des appellations d’origine",
 "pages": "183-191",
 "question": "Comment sont nées les AOC, et pourquoi sont-elles aujourd’hui contestées ?",
 "fil": [
  "<b>Un mythe à corriger.</b> On raconte que les moines de Cluny et Cîteaux auraient goûté la terre pour délimiter les climats de Bourgogne. Les historiens n’en trouvent aucune trace : les moines vendaient surtout du volume. Ce sont les bourgeois de Beaune et Dijon qui, à partir du XVIIe siècle, nomment et hiérarchisent les climats.",
  "<b>De la fraude à la loi.</b> Au XIXe siècle, le négoce vend des « marques géographiques » assemblées comme il l’entend. Après le phylloxéra, les fraudes explosent. Les lois de 1905, 1908 et 1919 cherchent à protéger l’origine, d’après des « usages locaux, loyaux et constants », au prix de conflits violents (Champagne et Aube). Le décret-loi de 1935 crée les AOC et le futur INAO ; les premières sont reconnues en 1936.",
  "<b>Le cas de Chablis.</b> Le Kimméridgien, présenté comme la clé de Chablis, ne définit pas l’aire actuelle : ses limites ont varié au gré des luttes syndicales et politiques.",
  "<b>Le goût du terroir.</b> Au départ, les AOC se vendent mal. L’INAO impose des règles, forme, et invente une dégustation d’agrément qui lie qualité et « typicité » : le goût de terroir, autrefois péjoratif, devient recherché.",
  "<b>La crise.</b> Multiplication des appellations, typicité vécue comme une standardisation, lourdeur administrative : des vignerons sortent des AOC. L’encadré sur les Super-Toscans montre l’inverse : des vins hors règles finissent par créer leur propre appellation."
 ],
 "defend": "Il ne faut pas renoncer aux AOC, mais revenir à leur idée de bien commun, avec une éthique exigeante qui refuse la tentation productiviste.",
 "client": "« L’histoire des moines qui goûtaient la terre en Bourgogne est une belle légende : les climats ont surtout été nommés par les bourgeois de Beaune et Dijon. »",
 "filRouge": "Pourquoi Lepeltier dit-elle que l’AOC est autant une construction politique qu’une reconnaissance du sol ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Vieille Europe contre Nouveau Monde, une dichotomie à dépasser",
 "pages": "192-197",
 "question": "L’opposition entre vins de terroir européens et vins de cépage du Nouveau Monde tient-elle encore ?",
 "fil": [
  "<b>Le modèle américain.</b> Dans les pays colonisés, la terre est découpée en lots réguliers : d’où les damiers de vignes. En Californie, après la Prohibition, scientifiques de Davis, œnologues et entrepreneurs comme Robert Mondavi bâtissent un modèle où le raisin est une matière première et le vin un produit industriel : le cépage s’affiche sur l’étiquette, la marque prime. Le Jugement de Paris de 1976 consacre ces vins.",
  "<b>Mais tout se mélange.</b> Le Nouveau Monde se « terroirise » : domaines familiaux, régions délimitées (AVA aux États-Unis, GI en Australie), vieux cépages redécouverts. L’Europe, elle, joue la carte du cépage et de la marque : les vins les plus vendus en France sont des vins de marque avec cépage en gros sur l’étiquette.",
  "<b>Une lecture plus fine.</b> Raphaël Schirmer distingue des vignobles de lieux (Bourgogne), de marques (Champagne, Cognac), mixtes (Porto, Jerez), génériques à cépage, et des cas hétérogènes en reconstruction.",
  "L’encadré To Kalon montre l’ambiguïté : un même nom de vignoble est à la fois une marque privée et une origine."
 ],
 "defend": "Il faut dépasser la dichotomie Europe / Nouveau Monde pour comprendre des marchés et des paysages en mouvement constant.",
 "client": "« Aujourd’hui, on trouve des vins de terroir en Oregon et des vins de marque à cépage en France : l’opposition Europe / Nouveau Monde ne suffit plus. »",
 "filRouge": "Pourquoi l’opposition Vieille Europe / Nouveau Monde est-elle devenue trompeuse ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md.",
  "Le livre date ici le cabernet de Stag’s Leap du Jugement de Paris de 1975 ; il s’agit du millésime 1973 (comme le livre l’écrit p. 110)."
 ]
},
{
 "chapitre": "Préserver les paysages viticoles",
 "pages": "198-200",
 "question": "Comment préserver des paysages viticoles sans les transformer en musée ?",
 "fil": [
  "Depuis 1992, l’UNESCO reconnaît des « paysages culturels » : des vignobles comme Saint-Émilion, le Val de Loire, le Haut-Douro, le Lavaux, la Champagne ou les Climats de Bourgogne figurent au patrimoine mondial. Ce sont des paysages vivants, qui doivent pouvoir évoluer.",
  "<b>L’œnotourisme</b> est devenu un levier économique majeur, inspiré du modèle de la winery de Napa. Mais il peut aussi dénaturer ce qu’il met en valeur : hôtels, restaurants et chais spectaculaires transforment le paysage.",
  "<b>Un bien commun.</b> Les intérêts d’un petit vigneron, d’un négociant ou d’un groupe financier ne sont pas les mêmes ; sans projet partagé incluant les habitants et les écosystèmes, la préservation échoue. L’encadré du Lavaux montre un site où la fréquentation a augmenté alors que les ventes de vin baissaient."
 ],
 "defend": "Comme pour les AOC, il s’agit d’ancrer des terroirs et des paysages uniques sur le long terme, sans muséifier ni artificialiser au nom d’intérêts à court terme.",
 "client": "« Le Lavaux est classé au patrimoine mondial : les visiteurs viennent pour le paysage, mais ce sont les vignerons qui le font vivre. »",
 "filRouge": "Pourquoi l’œnotourisme peut-il à la fois protéger et menacer un paysage viticole ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 189-222 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Les composants du raisin",
 "pages": "204-207",
 "question": "Pourquoi fait-on du vin avec du raisin, et pas avec n’importe quel fruit ?",
 "fil": [
  "Presque tous les fruits fermentent, mais très peu donnent une boisson stable sans ajout d’eau, de sucre ou d’acide : en dehors du raisin, surtout la pomme et la poire. Le raisin réunit assez de sucre pour un alcool protecteur, assez d’acidité pour freiner les microbes, des polyphénols antioxydants et assez d’eau.",
  "<b>Où sont les composés.</b> La pulpe contient l’eau, les sucres et les acides ; la peau, l’essentiel des polyphénols et des arômes ; les pépins, des tanins et des huiles ; la rafle, des polyphénols et du potassium.",
  "<b>Sucres et acides.</b> Les sucres fermentescibles sont le glucose et le fructose. L’acide tartrique, rare ailleurs mais très abondant chez la vigne, reste stable à la chaleur, alors que l’acide malique diminue en mûrissant : avec le réchauffement, le tartrique devient l’acide clé.",
  "<b>Polyphénols et arômes.</b> Anthocyanes (couleur rouge), flavonols, tanins : ils donnent couleur, amertume et astringence. Les arômes sont souvent liés à des sucres (précurseurs) et ne se révèlent qu’à la fermentation et au vieillissement.",
  "<b>Des maturités qui divergent.</b> La maturité des sucres et des acides ne coïncide plus forcément avec celle des tanins et des arômes : on peut avoir beaucoup de sucre et des tanins encore verts."
 ],
 "defend": "Le goût du raisin témoigne du lieu où il a poussé ; face au climat, l’avenir passe d’abord par une viticulture capable de produire des raisins équilibrés, pour intervenir le moins possible au chai.",
 "client": "« Le raisin est presque le seul fruit qui donne naturellement un vin stable, sans ajouter ni sucre, ni acide, ni eau. »",
 "filRouge": "Qu’est-ce qui rend le raisin si propice à la fabrication du vin ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Du raisin au vin, une écologie microbienne",
 "pages": "208-216",
 "question": "Qui fait vraiment le vin : le vigneron ou les microbes ?",
 "fil": [
  "Pour Marc-André Selosse, vinifier, c’est « élever des microbes ». Lavoisier puis Gay-Lussac expliquent la fermentation en chimistes ; Pasteur montre qu’elle est l’œuvre d’êtres vivants, les levures, et que des bactéries peuvent gâter le vin.",
  "<b>Une compétition.</b> Sur le raisin vivent de nombreuses levures, surtout peu fermentaires ; Saccharomyces cerevisiae, la grande levure du vin, y est rare. Au fil de la fermentation, l’alcool, le manque d’oxygène et le soufre éliminent la plupart des espèces : une ou deux souches dominent. Les bactéries lactiques réalisent ensuite la fermentation malolactique, qui transforme l’acide malique en acide lactique plus doux.",
  "<b>Piloter sans tout contrôler.</b> Température, aération, soufre, nutriments : le vigneron oriente la population microbienne ; l’ensemencement par des levures sélectionnées (vendues sèches à partir de la fin du XXe siècle) est le contrôle le plus direct.",
  "<b>Indigènes ou sélectionnées ?</b> Pour l’IFV, la fermentation spontanée apporte plus de risques que de complexité démontrée ; pour d’autres, comme Nicolas Joly, levurer efface le millésime et le lieu. Le débat est aussi idéologique.",
  "<b>Un « terroir microbien » ?</b> Des études suggèrent des populations microbiennes propres à certaines régions ; d’autres les contestent. Les chercheurs s’accordent sur quelques points : vignoble et chai s’ensemencent mutuellement, les levures voyagent facilement, et le lien précis entre une souche et le goût reste mal compris."
 ],
 "defend": "Le vigneron vit en mutualisme avec ses microbes : il faut préserver la liberté de laisser faire ou non, tout en s’interrogeant sur l’accélération permise par les biotechnologies.",
 "client": "« La levure qui fait le vin se trouve rarement sur le raisin : elle vit surtout au chai, et parfois dans les insectes qui la transportent. »",
 "filRouge": "Pourquoi l’idée de « levures de terroir » reste-t-elle controversée ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "La vinification, artisanat, art et science",
 "pages": "217-224",
 "question": "Comment les grands styles de vin sont-ils apparus ?",
 "fil": [
  "Les premiers vins étaient bus jeunes, souvent peu colorés et aromatisés de plantes, de miel ou d’épices pour les rendre agréables et mieux les conserver ; les meilleurs vins étaient ceux qu’on modifiait le moins.",
  "<b>Voile et oxydation.</b> Sous un voile de levures qui le protège de l’air, le vin développe des arômes uniques : vin jaune du Jura, fino et manzanilla de Jerez. L’oxydation directe, elle, assouplit les tanins.",
  "<b>Chaleur et sucre.</b> Le madère est le seul vin volontairement chauffé. Les vins sucrés, longtemps les plus chers, s’obtiennent en concentrant le raisin : passerillage sur pied ou en clayette, pourriture noble (Botrytis), vin de glace ; ou en ajoutant de l’alcool (mutage) pour stopper la fermentation : vins doux naturels comme le porto ou le banyuls.",
  "<b>La macération</b> extrait couleur et tanins des peaux. Les rouges ne sont devenus prestigieux qu’au XVIIe siècle. La macération carbonique (beaujolais) fait fermenter les baies entières ; les vins blancs macérés, dits orange, renouent avec une tradition géorgienne millénaire.",
  "<b>Les bulles.</b> Des contenants résistants (verre anglais, bouchons de liège) permettent la méthode traditionnelle à deux fermentations, formalisée en Champagne ; la cuve close accélère et réduit les coûts (prosecco).",
  "Les blancs et rosés frais que nous connaissons sont enfin le fruit du XXe siècle : maîtrise du froid, de l’oxygène et des extractions."
 ],
 "defend": "La vinification permet aujourd’hui de faire presque n’importe quel vin avec n’importe quel raisin ; la plupart des producteurs se situent entre le « rien ajouter, rien enlever » et l’intervention active.",
 "client": "« Le vin orange, c’est un blanc vinifié comme un rouge, avec ses peaux : une méthode millénaire en Géorgie. »",
 "filRouge": "Quelles sont les principales façons d’obtenir un vin avec du sucre résiduel ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "L’alchimie de l’élevage",
 "pages": "225-233",
 "question": "Que se passe-t-il pendant l’élevage, et pourquoi le chêne ?",
 "fil": [
  "Longtemps, le vin vieilli était plutôt un vin abîmé ; la recherche d’un élevage de qualité ne date vraiment que des années 1980.",
  "<b>Jouer avec l’oxygène.</b> L’élevage réducteur protège le vin de l’air pour garder des arômes fragiles (les thiols du sauvignon) ; mal mené, il donne des odeurs soufrées. L’élevage oxydatif apporte un peu d’oxygène pour assouplir les tanins et stabiliser la couleur ; la micro-oxygénation reproduit ce principe en cuve.",
  "<b>Le chêne.</b> Le bois a remplacé l’amphore. Parmi les chênes, quelques espèces servent à la tonnellerie ; le chêne sessile français, au grain fin, est le plus prisé pour les vins. Les forêts (Tronçais, Bertranges…) et le savoir-faire des tonneliers comptent comme un terroir. La chauffe du fût (légère, moyenne, forte) oriente les arômes : vanille, épices, torréfaction. Plus le fût est petit et neuf, plus il marque le vin ; un vieux fût n’est jamais tout à fait neutre.",
  "<b>Les lies fines</b>, levures mortes, nourrissent le vin et lui donnent gras et fraîcheur.",
  "<b>Les alternatives.</b> Copeaux, béton, inox, et le retour des jarres d’argile, inspiré de la Géorgie."
 ],
 "defend": "L’élevage, science, art et artisanat, est devenu l’un des champs d’expérimentation les plus actifs des vignerons, tant il pèse sur la qualité et la capacité de garde.",
 "client": "« Un fût neuf parfume le vin ; un fût usagé sert surtout à le faire respirer doucement. »",
 "filRouge": "Quelle différence entre un élevage réducteur et un élevage oxydatif, et quel style donne chacun ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Le siècle des œnologues",
 "pages": "234-238",
 "question": "L’œnologie a-t-elle amélioré le vin, ou l’a-t-elle standardisé ?",
 "fil": [
  "Un grand vin du début du XXe siècle nous surprendrait : peu d’alcool, acidité volatile, tanins verts. Jusqu’en 1800, faire du vin reste un art empirique ; la chimie puis la microbiologie de Pasteur en font une science.",
  "<b>L’école de Bordeaux.</b> Jean Ribéreau-Gayon et Émile Peynaud font entrer la science dans les chais et passent de la cure à la prévention : maîtrise de la malolactique, hygiène, vendanges mûres. Le diplôme national d’œnologue naît en 1955.",
  "<b>Des techniques toujours plus nombreuses.</b> Contrôle des températures, levures sèches, enzymes, micro-oxygénation, filtration par membranes, désalcoolisation… L’OIV encadre ces pratiques par une liste positive : ce qui n’y figure pas est interdit.",
  "<b>L’étiquette.</b> Longtemps, le vin a échappé à la liste des ingrédients ; l’Europe l’impose pour les vins produits depuis fin 2023, directement ou par code QR.",
  "<b>Deux visions.</b> D’un côté, un vin défini par son procédé et son innocuité, produit agroalimentaire ; de l’autre, un vin lié au terroir et au savoir-faire. L’encadré sur Peynaud rappelle qu’il prônait lui-même d’intervenir le moins possible : « c’est au vignoble que la qualité se gagne »."
 ],
 "defend": "La qualité d’un vin est en partie une convention, négociée entre producteurs, consommateurs, États et industriels ; les œnologues en font partie.",
 "client": "« Les vins produits depuis fin 2023 et vendus en Europe doivent donner leurs ingrédients, sur l’étiquette ou par un code QR. »",
 "filRouge": "Pourquoi l’œnologie est-elle à la fois saluée pour la qualité des vins et accusée de les standardiser ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "Défaut ou caractère du vin ?",
 "pages": "239-243",
 "question": "Où s’arrête le caractère d’un vin, et où commence le défaut ?",
 "fil": [
  "Des vins mythiques auraient été recalés par les standards actuels : un grand Saint-Émilion de 1947 riche en acidité volatile, un Châteauneuf-du-Pape de 1990 marqué par Brettanomyces. Comme un médicament devient poison, une molécule devient défaut au-delà d’un seuil.",
  "<b>Défauts de vendange.</b> Raisins pas mûrs, pourriture (goût de moisi terreux), insectes écrasés, résidus de traitement, fumée d’incendie, eucalyptus voisins.",
  "<b>Défauts de cave.</b> Acidité volatile (vinaigre, vernis), éthanal (pomme verte) hors des vins de voile, Brettanomyces (écurie, cuir), goût de souris (perçu en fin de bouche, selon la salive de chacun), odeurs de réduction soufrées.",
  "<b>Défauts de garde.</b> Goût de bouchon (molécules comme le TCA, souvent mais pas seulement liées au liège), goût de lumière, chaleur.",
  "<b>Une question de contexte.</b> Un caractère beurré gêne dans un sancerre et plaît dans certains chardonnays ; nos seuils de perception diffèrent ; les normes évoluent. L’encadré sur l’acidité volatile rappelle le cas d’un vigneron sommé de détruire une cuvée jugée trop volatile, alors que la molécule n’est pas dangereuse."
 ],
 "defend": "Un défaut n’existe qu’en contexte : certains rendent un vin plus complexe, comme dans l’esthétique japonaise du wabi-sabi. La qualité ne se résume pas à l’absence de défaut.",
 "client": "« Un peu d’acidité volatile peut donner du relief à un vin ; beaucoup, et il tourne au vinaigre : tout est affaire de dose et de style. »",
 "filRouge": "Pourquoi un même composé peut-il être un défaut dans un vin et une qualité dans un autre ?",
 "prudence": [
  "Faits vérifiés avec le lot de fiches 223-252 (octobre 2026) ; écarts avec le livre : voir les pastilles « à vérifier » des fiches et docs/erreurs-du-livre.md."
 ]
},
{
 "chapitre": "La dégustation, une histoire de l’expertise et de la qualité",
 "pages": "244-251",
 "question": "Comment la dégustation est-elle devenue une expertise, et qu’a-t-elle changé à la qualité du vin ?",
 "fil": [
  "<b>Pourquoi déguster.</b> L’analyse scientifique garantit la valeur marchande d’un vin et lutte contre la fraude, mais sans perception sensorielle on ne peut pas juger sa qualité. Pour cela il faut isoler une sensation, la nommer et partager une grille de lecture avec d’autres dégustateurs. Pour Lepeltier, la dégustation ne se contente pas de constater : elle fixe des normes, celle de la qualité marchande comme celle de la typicité.",
  "<b>Les Grecs, premiers analystes.</b> Aristote décrit huit saveurs entre le doux et l’amer, la théorie des humeurs sert de grille médicale, et Galien analyse le vin en cinq temps : robe, saveur, consistance, bouquet, puissance. Le nez y compte peu, et le livre y voit l’origine de notre pauvreté de vocabulaire olfactif.",
  "<b>Des négociants aux appellations.</b> À la fin du XIXe siècle, négociants et courtiers goûtent pour assembler : le tastevin vérifie la limpidité, la structure est le critère clé, le mot « terroir » est péjoratif. Avec les AOC, il faut pouvoir goûter et valider la typicité : l’INAO naît en 1947 et la dégustation d’agrément devient obligatoire par le décret du 19 octobre 1974.",
  "<b>Chauvet et le verre.</b> Jules Chauvet met le bouquet au premier plan, rend positif le goût de terroir et remplace les mots vagues par des termes analytiques. Avec André Vedel, il contribue au verre de dégustation normalisé, devenu la norme ISO 3591.",
  "<b>Le modèle anglo-saxon et ses limites.</b> Grilles notées, diplômes (Master of Wine, WSET, Master Sommeliers), Wine Tasting de Broadbent et Jugement de Paris font de la dégustation analytique une référence mondiale. Pour Lepeltier, elle standardise aussi la typicité, d’où la dégustation géosensorielle de Deiss, Rigaux et Camus, qui revient au toucher de bouche : c’est le paradoxe d’une méthode qui se veut objective avec des moyens subjectifs."
 ],
 "defend": "La dégustation ne fait pas que mesurer la qualité d’un vin : elle contribue à la définir, en fixant ce qu’on appelle typique ou bon, et elle reste un objet et un sujet qui se construisent mutuellement.",
 "client": "« Quand on déguste un vin d’appellation, on ne juge pas seulement s’il est bon : on vérifie aussi qu’il est typique de son appellation. »",
 "filRouge": "Pourquoi fait-on déguster les vins d’appellation ?",
 "prudence": [
  "Le livre écrit que l’Institute of Masters of Wine est « créé en 1953 » : 1953 est la date du premier examen, l’Institut est fondé en 1955.",
  "Le livre date le comique Hermippe du IVe siècle av. J.-C. ; les sources lues le placent au Ve siècle, et l’attribution du passage cité n’a pas été retrouvée.",
  "Le livre attribue à Amerine une grille sur 100 points aux pondérations non retrouvées ; le repère de Davis est une grille sur 20 points de 1959 (sources de niveau 2b).",
  "La part des AOC dans les ventes des années 1940, les commissions de dégustation de l’INAO datées par le livre, l’ancienneté très haute attribuée aux dégustations de crus au Proche-Orient et la date d’apparition du mot « dégustation » ne sont pas confirmées par les sources lues.",
  "Le chiffre d’étudiants WSET donné par le livre correspond aux candidats d’une seule année (2020-2021), non à des étudiants formés cumulés ; le nombre de centres n’est pas retrouvé.",
  "L’Essai sur la dégustation des vins (1972) est signé d’André Vedel avec trois co-auteurs, non de lui seul ; l’INAO adopte le verre en 1970, l’AFNOR le normalise en 1971 et l’ISO en 1977.",
  "Chauvet, présenté comme père des vins naturels, n’employait pas lui-même l’expression ; son rôle est traité à la fiche sur le vin nature.",
  "L’agrément systématique de 1974 n’est plus la règle : les vins d’AOC sont aujourd’hui contrôlés par prélèvements (plan de contrôle INAO)."
 ]
},
{
 "chapitre": "La dégustation, des sens au cerveau",
 "pages": "252-257",
 "question": "Pourquoi le goût du vin n’est-il pas dans le verre mais construit par le cerveau ?",
 "fil": [
  "<b>Tous les sens à la fois.</b> Le vin sollicite la vue, l’odorat, le goût, le toucher en bouche et même l’ouïe. Le cerveau réunit ces signaux en une seule perception, que Gordon M. Shepherd nomme la flaveur ; Gabriel Lepousez (Institut Pasteur) en enseigne l’approche sous le nom de neuro-œnologie, repris du livre de Shepherd. Quand les informations concordent, la perception se renforce ; quand elles divergent, le cerveau reconstruit à partir des autres indices.",
  "<b>La vue qui biaise.</b> Dans une expérience publiée en 2001 (Morrot, Brochet et Dubourdieu), un vin blanc coloré en rouge a été décrit comme un vin rouge. Le livre date l’expérience de 2000 et y voit la preuve que le cerveau goûte d’abord avec les yeux ; pour limiter ce biais, il cite les verres noirs ou les yeux bandés.",
  "<b>La bouche, qui sent, goûte et touche.</b> Les saveurs remontent par trois nerfs (facial, glossopharyngien, vague), tandis que le trijumeau porte le toucher, la chaleur et l’irritation. Autre effet de la bouche : certains accords avec le poisson laissent un arrière-goût que les études relient au fer libre du vin, qui oxyde les lipides du poisson.",
  "<b>La salive, invisible et indispensable.</b> Elle lubrifie et protège la bouche, et rend l’astringence perceptible : les tanins se lient à ses protéines, surtout celles riches en proline, et la bouche devient rugueuse. Pour Lepousez, sans salive il serait impossible de lire les tanins du vin.",
  "<b>Chacun sa dégustation.</b> Génétique, culture, expérience et état du corps changent ce que l’on perçoit : le livre en conclut qu’aucune dégustation n’est universelle ni tout à fait objective. La faim, par exemple, aiguiserait l’odorat, et l’intéroception, la perception des signaux du corps, ferait de la digestibilité (la buvabilité) un critère possible. Ce qui s’entraîne vite, c’est la perception ; l’expertise (identifier, mémoriser, verbaliser) demande des années."
 ],
 "defend": "Un vin ne se réduit pas à la somme de ses molécules : le cerveau le construit en assemblant les sens, l’expérience et l’attente, ce qui explique les biais et la variabilité entre dégustateurs, et justifie de s’en méfier avec méthode.",
 "client": "« Le même vin blanc, teinté en rouge, a été décrit comme un vin rouge par des dégustateurs : l’œil influence le nez, et c’est le cerveau qui fabrique le goût. »",
 "filRouge": "Pourquoi dit-on que le goût du vin se fabrique dans le cerveau ?",
 "prudence": [
  "Le livre date l’expérience du vin blanc teinté en rouge de 2000 ; la publication (Morrot, Brochet et Dubourdieu) et Lepousez indiquent 2001.",
  "Le livre explique le goût métallique par un fer « lié aux tanins » ; les études lues attribuent l’effet au fer libre (Fe²⁺), pour un arrière-goût de poisson.",
  "Le livre cite la mucine pour l’astringence ; les études lues montrent que les tanins précipitent surtout les protéines salivaires riches en proline.",
  "Le livre attribue l’intéroception à Claude Bernard (années 1870) ; le terme est de Sherrington (1906), Claude Bernard ayant décrit le milieu intérieur.",
  "Faim, hormones et seuil olfactif, ainsi que l’apprentissage « en quelques jours, aussi bien qu’un sommelier », sont des affirmations du livre non confirmées par les sources lues."
 ]
},
{
 "chapitre": "Voir le vin",
 "pages": "258-262",
 "question": "Que nous dit la robe d’un vin, et pourquoi faut-il s’en méfier ?",
 "fil": [
  "<b>D’où vient la couleur.</b> Dans les rouges et les rosés, elle vient presque entièrement des anthocyanes, des pigments du raisin noir. Chez Vitis vinifera, la malvidine domine ; selon le livre, la couleur est extraite avant les tanins puis se stabilise quand les pigments s’associent à d’autres polyphénols. Un cépage blanc est blanc parce que deux gènes régulateurs (VvMybA1 et VvMybA2) sont inactivés.",
  "<b>Lire et mesurer la robe.</b> L’intensité colorante est la somme des absorbances à 420, 520 et 620 nm, et les côtes-du-rhône rouges doivent atteindre au moins 4,5 lors des contrôles. Selon le livre, le pH, la macération, le SO2 et l’élevage en bois modifient la couleur, et un tempranillo élevé deux ans en fût usagé sera plus pâle et tuilé qu’un autre élevé en barrique neuve. Avec l’âge, l’intensité baisse et le violet vire au grenat, au tuilé puis au brun.",
  "<b>Larmes et bulles.</b> Les larmes viennent de l’évaporation de l’alcool sur la paroi (effet Marangoni, expliqué par Thomson en 1855) : elles ne mesurent pas le degré. Les bulles du champagne naissent sur des fibres de cellulose creuses, montent en grossissant, puis éclatent en projetant des aérosols aromatiques (travaux de Liger-Belair).",
  "<b>Le rosé.</b> Pour un vin dont l’attrait repose sur la couleur, le Centre du rosé de Vidauban a créé des nuanciers et une charte de sept couleurs en trois intensités. Le rosé pèse un peu plus de 10 % de la consommation mondiale de vin.",
  "<b>La vue qui prédit et qui trompe.</b> Nous voyons le vin avant de le sentir, et le cerveau en déduit ce qu’il va goûter : un jeune barolo pâle, presque rosé, laisse attendre un vin léger alors qu’il est aromatique et tannique (exemple du livre). L’expérience du vin blanc teinté en rouge, décrit avec des mots de vin rouge, en est l’exemple le plus connu. Le livre cite aussi une étude du caviste Vila Viniteca : après décantation, l’intensité aromatique n’augmente pas, l’astringence monte, l’acidité et la douceur ne bougent pas. Pour Lepeltier, fermer les yeux ou utiliser un verre noir aide à rééquilibrer les perceptions."
 ],
 "defend": "La robe est un indice, pas un verdict : elle renseigne sur le raisin, la vinification et l’âge, mais l’œil prédit autant qu’il informe et peut tromper.",
 "client": "« La couleur d’un vin se mesure : une appellation peut même exiger un minimum, comme les côtes-du-rhône rouges, contrôlés à 4,5 au moins. »",
 "filRouge": "Peut-on juger un vin à sa couleur ?",
 "prudence": [
  "Le livre écrit que les anthocyanes sont liées à « 1 ou 2 sucres » et qu’un cépage est blanc par « perte des gènes de la biosynthèse » ; les sources lues donnent des monoglucosides et des gènes régulateurs inactivés.",
  "Le livre attribue les fibres de cellulose au polissage du verre et cite aussi les défauts de la paroi ; Liger-Belair décrit des fibres venues de l’air ou de l’essuyage, et juge les irrégularités du verre trop petites pour amorcer des bulles.",
  "« Plus de larmes, plus d’alcool » est une règle empirique : la force qui tire le liquide ne croît pas sans limite avec l’alcool.",
  "Le chiffre de 10,5 % est la part du rosé dans la consommation mondiale de vin, pas celle de la France ; les nombres de nuances des nuanciers cités par le livre n’ont pas été retrouvés.",
  "Le seuil de 4,5 des côtes-du-rhône rouges figure dans des mesures de campagne (2019) et dans une modification temporaire du cahier des charges (millésime 2023) ; celui des côtes-du-rhône-villages n’est confirmé que par des documents syndicaux.",
  "La teneur en CO2 des vins tranquilles perlants et le seuil de perception cités par le livre ne sont pas documentés par les sources lues.",
  "Le protocole publié par Vila Viniteca porte sur moins de vins que ne l’écrit le livre ; seules ses conclusions sont reprises.",
  "Les affirmations du livre sur l’effet de l’intensité de la couleur sur l’intensité aromatique attendue et sur l’inhibition des centres olfactifs par la vue ne sont pas confirmées par les sources lues."
 ]
},
{
 "chapitre": "Sentir le vin",
 "pages": "263-270",
 "question": "Comment naissent les arômes du vin, et pourquoi l’olfaction semble-t-elle si subjective ?",
 "fil": [
  "<b>Deux portes pour les parfums.</b> On perçoit les molécules volatiles d’un vin directement par le nez (voie orthonasale, l’odeur) ou par la bouche, via l’arrière-gorge (voie rétronasale, l’arôme). La chaleur et la salive peuvent même révéler ce que le nez ne sent pas, comme le goût de souris. Le livre emploie « arôme » pour les deux.",
  "<b>D’où viennent les arômes.</b> Primaires ou variétaux (le raisin), secondaires (la vinification), tertiaires (l’élevage puis la bouteille) : selon le livre, 700 à 1 000 composés volatils ont été répertoriés, la plupart sous le seuil de perception. Selon les écoles, les arômes de fermentation sont secondaires (Lepeltier, tradition française) ou primaires (WSET).",
  "<b>Des signatures de cépage.</b> Les méthoxypyrazines donnent le poivron, les monoterpènes le parfum floral des muscats, le TDN le pétrole du riesling, la rotundone le poivre de la syrah, que 20 % des dégustateurs environ ne sentent pas. Les thiols du sauvignon (buis, pamplemousse, fruit de la passion) sont cachés dans le raisin sous forme de précurseurs, que la levure libère pendant la fermentation.",
  "<b>La fermentation et le fût.</b> Les levures fabriquent des esters (banane), les bactéries lactiques le diacétyle (beurre) ; le bois neuf apporte la whisky-lactone (noix de coco) et la vanilline, et l’élevage oxydatif le sotolon (curry, noix) du vin jaune.",
  "<b>Un nez, des nez.</b> Environ 400 types de récepteurs olfactifs, et plus de 30 % de différences fonctionnelles entre deux personnes : chacun a ses seuils. Le cerveau perçoit un mélange comme une image globale qu’il compare à sa mémoire ; faute de mots propres aux odeurs, on décrit par analogie (« violette »), et la roue d’Ann Noble propose un vocabulaire commun."
 ],
 "defend": "Sentir un vin, ce n’est pas lire une liste de molécules : c’est reconnaître, avec un nez et une mémoire propres à chacun, une image globale ; un vocabulaire commun aide à en parler.",
 "client": "« Quand je dis « violette », il n’y a pas de violette dans le verre : votre nez reconnaît une ressemblance avec une odeur que vous avez déjà en mémoire. »",
 "filRouge": "Pourquoi deux personnes ne sentent-elles pas exactement le même vin ?",
 "prudence": [
  "Le livre date la roue d’Ann Noble de 1980 : sa première publication est de 1984 (version modifiée en 1987).",
  "Le livre rattache le pamplemousse au 4MMP et décrit les précurseurs de thiols comme liés à des sucres, libérés par des enzymes de la salive : les sources lues parlent du 3MH pour le pamplemousse et de précurseurs liés à la cystéine libérés par une β-lyase.",
  "Le livre dit que le cuivre « détruit » les thiols : les essais montrent une baisse du 4MMP du sauvignon, avec un mécanisme encore discuté.",
  "Le nombre de composés volatils (700 à 1 000), le facteur de 1 000 à 10 000 entre seuils individuels et l’estimation de « plus de 1 000 milliards d’odeurs » viennent du livre sans confirmation (le nombre d’odeurs est contesté) ; les 400 récepteurs et les plus de 30 % de différences entre deux personnes sont confirmés.",
  "Le livre date la rotundone de 2005 et cite le mourvèdre ; la publication scientifique date de 2008 et le mourvèdre n’apparaît dans aucune liste lue.",
  "Le livre date l’ouvrage d’Alain Corbin de 1998 : c’est probablement une réédition (première édition 1982) ; l’épisode des coccinelles en Bourgogne en 2004 est rapporté par le livre, non confirmé."
 ]
},
{
 "chapitre": "Goûter le vin",
 "pages": "271-277",
 "question": "Quelles saveurs et quelles sensations le vin provoque-t-il en bouche, et comment les décrire ?",
 "fil": [
  "<b>Une bouche qui goûte et qui touche.</b> Le vin provoque des saveurs (sensations chimiques) mais aussi des sensations tactiles, thermiques et irritantes, portées par le trijumeau. Il n’existe pas de « carte de la langue » avec une zone par saveur : toutes les zones perçoivent le sucré, le salé, l’acide, l’amer et l’umami, avec des écarts de sensibilité. Côté récepteurs, l’amer en compte environ 25, le sucré un seul, l’umami un seul ; l’umami a été isolé en 1908 par Kikunae Ikeda.",
  "<b>Le sucré.</b> La sucrosité vient d’abord des sucres résiduels, non d’un arôme de fruit mûr. L’alcool, le glycérol et des triterpénoïdes sucrés du bois neuf, étudiés à l’ISVV par Axel Marchal, y contribuent ; la vanille ou les fruits mûrs renforcent seulement l’idée de sucré. En 1985, du diéthylène glycol ajouté à des vins autrichiens pour les arrondir a déclenché un durcissement du contrôle.",
  "<b>L’acidité.</b> Colonne vertébrale du vin, elle vient du tartrique (spécifique au raisin et le plus fort), du malique (transformé par la malolactique) et du citrique. L’acidité totale se compte en g/l d’acide sulfurique en France, d’acide tartrique ailleurs, avec un rapport de 1,53. Le pH, échelle logarithmique, mesure la force : un point de moins, dix fois plus d’ions H⁺.",
  "<b>Amer, salin, umami.</b> Dire d’un vin qu’il est « salé » est un abus de langage : il contient très peu de sel de cuisine. L’amertume est une vraie saveur, qui domine la fin de bouche et dont l’appréciation s’apprend. Le livre, avec Gabriel Lepousez, propose de distinguer plusieurs salinités (umami des lies, calcium et magnésium) à titre d’hypothèse.",
  "<b>Tanins et mots du toucher.</b> Les tanins du raisin et du bois, en se liant aux protéines de la salive, donnent l’astringence, sensation tactile cumulative. Faute de mots, les dégustateurs recourent aux métaphores ; les roues de Gawel (vins rouges, 2000) et de Pickering (vins blancs, 2008) offrent un lexique plus précis du toucher de bouche."
 ],
 "defend": "Goûter un vin, ce n’est pas lire une carte de la langue mais suivre une dynamique de saveurs, de textures et de mots, que la salive, le pH et le vocabulaire de chacun font varier.",
 "client": "« Non, la langue n’a pas de zones pour chaque saveur : toutes ses régions perçoivent le sucré, le salé, l’acide, l’amer et l’umami. »",
 "filRouge": "Quelles saveurs perçoit-on dans le vin, et la langue a-t-elle des zones pour chacune ?",
 "prudence": [
  "Le livre date de 2020 les triterpénoïdes sucrés du bois neuf d’Axel Marchal ; les travaux de l’ISVV lus sont de 2015 et 2019, et seule l’équipe est citée.",
  "Le livre donne des chiffres non confirmés par les sources lues : bourgeons et cellules gustatives, glycérol dès 8 g/l, seuil de sucrosité de 2 g/l, fructose « deux fois plus sucré », calcium à 40 et 80 mg/l.",
  "Le livre dit les minéraux du vin de 2 à 4 g (p. 273) puis de 1 à 2 g/l (p. 285) ; les sources donnent environ 1,5 à 2 g/l, 4 g/l au plus : on retient « quelques grammes par litre ».",
  "Le livre qualifie l’acide succinique d’umami ; les sources scientifiques lues parlent d’un goût salé et amer, et seule la presse parle d’umami.",
  "Le livre juge que les anthocyanes n’ont pas de goût et qualifie de verts les tanins de pépins ; les études lues nuancent le premier point et ne confirment pas le second.",
  "Le décompte du livre pour la roue de Gawel (12 familles, 53 termes) et les analogies de pâtisserie attribuées à Pickering ne sont pas retrouvés dans les sources lues."
 ]
},
{
 "chapitre": "Les langages du vin",
 "pages": "278-283",
 "question": "Peut-on mettre des mots sur un vin, et lesquels ?",
 "fil": [
  "<b>Déguster, c’est parler.</b> Pour Lepeltier, il n’y a vraiment dégustation que partagée et commentée : savoir boire un vin, c’est aussi savoir en parler. On y arrive par imitation de notes, par des grilles et des descripteurs consensuels, mais il n’existe pas un langage du vin : le vocabulaire dépend de la formation, du bagage linguistique et de la situation. Le livre s’appuie sur les six commentateurs de Peynaud et Blouin, du technicien à l’amateur, et cite Max Léglise : on dit « bonbon acidulé, violette, réglisse, cerise », pas des molécules.",
  "<b>La langue façonne-t-elle la perception ?</b> L’hypothèse de Sapir-Whorf dit que chaque langue découpe le réel à sa façon. Sa version forte, qui ferait de la langue une prison, est rejetée par presque tous les linguistes ; l’exemple des Himbas, qui ont un mot unique pour le bleu et le vert, montre des écarts de mémoire et d’apprentissage, pas une incapacité à voir.",
  "<b>Les odeurs, bien senties et mal nommées.</b> Nous détectons bien les odeurs mais les décrivons mal : le lexique est imprécis, plus émotionnel et plus prototypique qu’analytique. Le livre y voit un effet du cerveau ; les Jahai, qui nomment les odeurs aussi bien que les couleurs, rappellent que la langue et la culture comptent aussi. Faute de mots, les dégustateurs inventent des images, qui valent si les références sont partagées.",
  "<b>Décrire par un autre sens.</b> Le toucher en bouche s’exprime par des métaphores de corps, de tissu, de matière ou de forme, parfois hasardeuses : des « tanins gras » ne contiennent pas de lipides. Le livre y voit de la synesthésie, mais la recherche (Spence) parle plutôt de correspondances intermodales, largement partagées, alors que la synesthésie stricte est rare.",
  "<b>Juger et comprendre.</b> La dégustation analytique est un bon point de départ, mais elle ignore la salinité, le toucher et le temps ; il faut y ajouter une approche globale et les émotions. La carte de Kronos de Cathy Corison dessinée par Elaine Chukan Brown, avec ses vingt millésimes, ses mots-clés et son degré d’alcool, montre une autre façon de dire le vin."
 ],
 "defend": "On ne décrit jamais un vin sans le déformer un peu : les mots ne reproduisent pas la sensation, mais ils fonctionnent s’ils sont construits, partagés et complétés par d’autres formes d’expression ; l’important n’est pas de juger seulement, mais de comprendre le vin et sa propre perception.",
 "client": "« Chacun parle du vin avec les mots de son métier et de son histoire : on sent mieux qu’on ne nomme, et c’est pour cela qu’on invente des images qu’il faut partager pour qu’elles servent. »",
 "filRouge": "Pourquoi est-il si difficile de mettre des mots sur un vin ?",
 "prudence": [
  "Le livre écrit que les Himbas « ne peuvent distinguer » le bleu du vert ; les études (Roberson, Davidoff et al., 2005) montrent des écarts de mémoire et d’apprentissage, pas une incapacité à voir.",
  "Le livre dit que la dégustation est aujourd’hui considérée comme une synesthésie ; Spence et Wang (2015) parlent de correspondances intermodales, et la synesthésie stricte est rare.",
  "Le livre explique la difficulté à nommer les odeurs par la physiologie du cerveau ; l’étude sur les Jahai (Majid et Burenhult, 2014) montre qu’elle tient aussi à la langue et à la culture.",
  "Les six types de commentaires de Peynaud et Blouin, la phrase de Max Léglise, les trois approches de Gabriel Lepousez et l’étude de Dijon sur le vocabulaire tactile (« neuf champs sémantiques ») ne sont pas confirmés par les sources lues : ils sont attribués au livre ou non repris.",
  "Le livre écrit « Cités du vin (Bordeaux, Dijon) » ; la Cité du Vin de Bordeaux (2016) est confirmée, mais la Cité internationale de la gastronomie et du vin de Dijon (2022) n’est pas décrite comme un parcours immersif.",
  "La carte de Kronos : les vingt degrés d’alcool sont confirmés, la « vingtième » désigne le vingtième millésime et non un anniversaire du domaine."
 ]
},
{
 "chapitre": "Goûter la minéralité, mythe ou réalité ?",
 "pages": "284-287",
 "question": "Un vin « minéral » a-t-il le goût de son sol ?",
 "fil": [
  "<b>Un mot récent et flou.</b> Selon le livre, « minéralité » est devenu central dans le monde du vin à partir des années 1990 : étiquettes citant la roche mère, commentaires promotionnels, pratiques parfois improbables. Les chercheurs (Parr, Maltman et collègues, 2018) constatent que le mot mélange le sens géologique, les éléments nutritifs absorbés par la plante et une sensation en bouche, sans définition commune.",
  "<b>L’argument du géologue.</b> Alex Maltman rappelle que les minéraux d’une roche sont des cristaux solides : la vigne n’absorbe que des éléments dissous, en petites quantités, et le vin n’en contient que quelques grammes par litre, surtout du potassium. Le livre en conclut qu’il n’y a pas de lien littéral et causal entre la roche et le goût minéral, même si le sol peut influencer le vin par d’autres voies.",
  "<b>Des métaphores trompeuses.</b> Terre retournée, pétrichor, cuivre, pierre à fusil : le livre montre que ces odeurs viennent de molécules organiques ou soufrées. Pour la pierre à fusil, l’étude de Starkenmann et collègues (2016) a retrouvé le disulfane d’hydrogène dans le silex et dans des chasselas jugés minéraux ; l’équipe bordelaise de Tominaga a, en 2003, identifié le benzylméthanethiol, une note fumée.",
  "<b>Que perçoit-on ?</b> Depuis 2012, les recherches pointent plusieurs pistes sans en confirmer aucune : le SO2, l’acidité (résultats équivoques), la réduction (rôle débattu), le goût salé. Les vins fruités sont jugés moins minéraux. Pour le livre, il y aurait des minéralités plutôt qu’une seule minéralité.",
  "<b>Un mot à manier avec prudence.</b> Pour Lepeltier, mieux vaudrait s’abstenir d’un mot sans consensus, tout en reconnaissant sa force de communication entre dégustateurs. Le livre présente aussi, sans les trancher, la théorie de l’œnologue David Lefebvre (minéralisation du vin) et la cristallisation sensible, méthode contestée d’inspiration anthroposophique."
 ],
 "defend": "Pour Lepeltier, le mot décrit une impression que les dégustateurs partagent, mais il manque de définition commune et ne prouve pas que l’on goûte le sol.",
 "client": "« Ce n’est pas le goût de la pierre : la vigne ne boit pas la roche, et ce que les dégustateurs appellent minéral recouvre plusieurs sensations, dont des notes soufrées fumées comme la pierre à fusil. »",
 "filRouge": "Peut-on goûter la roche du vignoble dans un verre de vin ?",
 "prudence": [
  "Début de l’essor du mot : années 1990 selon le livre, années 1980 selon d’autres sources ; aucune année précise n’est établie, et la date de 1991 attribuée à Coutier n’est pas confirmée.",
  "Le livre appelle l’H2S un « mercaptan » : c’est une erreur de chimie, l’H2S n’est pas un thiol ; il date aussi l’étude de Starkenmann de 2017 (elle date de 2016), étude qui a retrouvé le même disulfane dans le silex et dans le vin.",
  "Teneur du vin en minéraux : le livre donne 1-2 g/l (p. 285) puis 2-4 g/l (p. 273) ; les sources indiquent environ 1,5 à 2 g/l, 4 g/l au plus : seul « quelques grammes par litre » est retenu.",
  "Le pic d’usage du mot « autour de 1994 » vient d’une étude citée par Parr et al. (2018), lue de seconde main ; le lien entre benzylméthanethiol et minéralité reste débattu.",
  "L’indice de minéralité de David Lefebvre (cendres moins potassium), sa théorie de la minéralisation et la cristallisation sensible sont rapportés d’après le livre, sans source indépendante ni validation."
 ]
},
{
 "chapitre": "Les contenants du vin",
 "pages": "288-294",
 "question": "Pourquoi le vin est-il presque toujours dans une bouteille en verre, et pourquoi cette bouteille a-t-elle des formes si différentes ?",
 "fil": [
  "<b>Des jarres au tonneau.</b> Dans l’Antiquité, la terre cuite domine : dolia pour vinifier et stocker, amphores pour transporter et vendre. Le tonneau en bois finit par les supplanter, mais ses origines (Rhètes, Gaulois) et sa date restent débattues.",
  "<b>Le verre prend le dessus.</b> Objet de luxe puis courant, le verre est associé à la gastronomie parce qu’il ne change pas le goût et laisse voir le vin. Au XVIe siècle, le mot « bouteille » désigne surtout un récipient en verre.",
  "<b>La révolution anglaise.</b> Faute de bois, l’Angleterre fond le verre au charbon (Mansell, 1615) et obtient, avec Digby, des bouteilles épaisses et foncées, solides et bouchables au liège. Selon le livre, elles permettent d’embouteiller pour la vente, de faire le champagne effervescent et de mettre en cave les « new French clarets ».",
  "<b>Des formes, des logiques.</b> Les verriers carrent les épaules de la bordelaise pour empiler et retenir les dépôts ; bourguignonne et champenoise gardent des épaules douces. D’autres formes régionales (flûte, clavelin, bocksbeutel) sont aujourd’hui encadrées dans l’Union européenne.",
  "<b>Un contenant sous contrainte.</b> La contenance fait l’objet de normes (75 cl, liste européenne de quantités nominales), et le poids du verre pèse dans le bilan carbone : l’emballage représente de 28 à 50 % des émissions selon les bilans français.",
  "<b>Quelles alternatives ?</b> Bag-in-box, PET, canette, vrac, réemploi permettent de réduire l’impact des vins non destinés à la garde, mais, pour Lepeltier, le principal frein reste le consommateur, attaché à l’image de qualité de la bouteille de verre."
 ],
 "defend": "Lepeltier défend l’idée que la bouteille de verre, grande innovation historique devenue symbole de qualité, doit aujourd’hui évoluer, et que ce changement dépend surtout de nos habitudes de consommation.",
 "client": "« La bouteille en verre épais, mise au point en Angleterre au XVIIe siècle, a changé la garde du vin, mais elle pèse lourd dans son bilan carbone ; pour les vins du quotidien, d’autres contenants existent. »",
 "filRouge": "Pourquoi le vin reste-t-il si souvent vendu en bouteille de verre, malgré son poids écologique ?",
 "prudence": [
  "Digby (⚠️) : l’attribution de la bouteille noire moulée est populaire, peu référencée ; ses dates de vie ne sont pas reprises.",
  "Contenance de l’amphore (20 à 30 l), origine et date du tonneau (⚠️) : sources divergentes.",
  "Récit du champagne et du « new French claret » (⚠️) : propos du livre, non recoupés.",
  "Origine du 75 cl et date de 1866 (⚠️) : non confirmées.",
  "68 % des émissions dues au verre : chiffre australien (verre et transport) ; les bilans français vont de 28 à 50 %.",
  "Livre vs réglementation : le Muscadet n’est pas dans la liste réservée de la flûte d’Alsace."
 ]
},
{
 "chapitre": "Comment fermer le vin ?",
 "pages": "295-299",
 "question": "Pourquoi le liège ferme-t-il encore la plupart des bouteilles, alors que d’autres bouchages existent ?",
 "fil": [
  "<b>Un bouchon oublié, puis redécouvert.</b> Pour Lepeltier, qui s’appuie sur Jean-Robert Pitte, le liège sert déjà à fermer des récipients dans l’Antiquité, puis il disparaît avec le tonneau et le manque de contenants à obturer. Le vin se ferme alors avec des herbes, du bois, de l’étoupe ou de l’huile. Le retour du liège tient à la bouteille à l’anglaise, au verre épais et au goulot renforcé, que les marchands anglais bouchent avec ce matériau découvert au Portugal et en Espagne.",
  "<b>Un arbre, une filière.</b> Le chêne-liège se laisse écorcer sans mourir : après un premier liège vierge vers 25 ans, il faut au moins neuf ans entre deux récoltes et le liège de qualité bouchon n’arrive qu’au troisième écorçage, environ 43 ans après la plantation. Le Portugal en fournit environ la moitié et protège cet arbre depuis très longtemps.",
  "<b>Des atouts, mais pas de perfection.</b> Selon le livre, le liège flotte, est imperméable aux liquides, se comprime sans perdre sa forme et résiste à l’humidité. Il reste pourtant un matériau vivant, d’où des variations d’une bouteille à l’autre, et il peut gâter le vin, par le goût de bouchon ou par une oxydation indirecte.",
  "<b>Les alternatives.</b> La capsule à vis, née en France, s’impose d’abord en Australie, après l’engagement de producteurs de riesling de la Clare Valley en 2000, et en Nouvelle-Zélande. Les bouchons techniques reconstituent du liège broyé et purifié ; les synthétiques sont peu coûteux mais vieillissent mal selon le livre ; le bouchon de verre, inerte, se rapproche de la capsule.",
  "<b>Choisir par l’oxygène.</b> Tous les obturateurs se disent neutres au goût : le producteur choisit donc surtout la quantité d’oxygène qui passe, en fonction du vin et de sa garde. Les études comparatives se contredisent, et la répartition des bouchages dans le monde est difficile à établir faute de données indépendantes.",
  "<b>Un symbole fort.</b> Le liège séduit aussi par son image de qualité et son faible coût écologique. Une étude de 2017 (Spence et Wang) montre que le bruit d’ouverture influence le jugement des consommateurs, ce qui fait du bouchage un enjeu de marketing autant que de technique."
 ],
 "defend": "Lepeltier défend qu’aucun bouchage n’est neutre ni parfait : le choix est technique (oxygène, garde), mais aussi symbolique et commercial.",
 "client": "« Le bon bouchon dépend du vin et du temps qu’il doit attendre : le liège garde une image de qualité, mais la capsule, le bouchon technique ou le verre sont de vrais choix, pas des bouchons au rabais. »",
 "filRouge": "Quel bouchon choisir pour un vin : liège, capsule à vis ou autre ?",
 "prudence": [
  "Part du Portugal : environ 50 % de la production mondiale de liège (carte p. 299) ; le « 33 % de la production » de la p. 295 ressemble à sa part des surfaces (34 %), lecture à confirmer.",
  "Protection du chêne-liège : le livre cite une loi de 1209 ; une source décrit plutôt une charte locale et l’APCOR parle de « depuis le Moyen Âge » ; le minimum de neuf ans entre écorçages est légal aujourd’hui (décret-loi portugais 169/2001).",
  "Le livre appelle « mâle » le liège vierge : seul « vierge » est retrouvé dans les sources lues.",
  "Capsule à vis : le mouvement de 2000 est attesté pour la Clare Valley ; le livre cite d’autres maisons et une commande de bouteilles que les sources lues ne retrouvent pas, la fiche s’en tient donc à la Clare Valley. Taux australiens divergents : 10 % (2004) et 88 % (2013) pour le livre, environ 25 % et 91 % chez Halliday.",
  "Part de chaque type de bouchage dans le monde : estimations contradictoires selon les fabricants ; les chiffres de 2019 du livre ne sont pas retrouvés, donc non repris, de même que les prix indiqués, qui restent des ordres de grandeur anciens.",
  "Bouchon de verre : « 2003 » pour le livre, première commercialisation américaine annoncée pour mars 2004 par Wine Spectator.",
  "Dates du livre non retrouvées et non reprises : 1937 pour le cycle légal de neuf ans entre écorçages, 1730 pour la généralisation du tire-bouchon (première mention écrite en 1681, premier brevet en 1795).",
  "Étude de Spence et Wang (2017) : étude préliminaire, financement de Bompas & Parr déclaré et lien de Spence avec l’APCOR ; les pourcentages du livre viennent d’un communiqué de l’APCOR, non repris."
 ]
},
{
 "chapitre": "Les mythologies de l’étiquette",
 "pages": "300-304",
 "question": "Pourquoi une simple étiquette de vin raconte-t-elle autant de choses ?",
 "fil": [
  "<b>Un petit papier très ancien.</b> Authentifier et nommer le vin est une pratique millénaire : les jarres de l’Égypte du Nouvel Empire portaient déjà année de règne, domaine, lieu et nom du vigneron. Les sceaux antiques et les marques sur barriques en sont, pour Lepeltier, les descendants de moins en moins précis.",
  "<b>L’invention du papier imprimé.</b> L’étiquette actuelle naît avec la mise en bouteille : rectangles de papier manuscrits, puis étiquettes lithographiées, plus colorées, moins chères et faciles à reproduire. Les motifs sont d’abord pris sur catalogue, avant de se différencier selon les besoins de chacun.",
  "<b>De l’information à la rhétorique.</b> Les fraudes de l’époque phylloxérique et l’industrialisation généralisent l’étiquette, dont le rôle premier reste d’informer sur l’authenticité. La loi la normalise à mesure que naissent les appellations : mentions obligatoires, termes réservés comme château, clos ou cru, termes interdits aux vins sans indication géographique. Depuis le 8 décembre 2023, ingrédients et valeur énergétique s’y ajoutent.",
  "<b>Les étiquettes icônes.</b> Dès 1924, le baron Philippe de Rothschild confie à Jean Carlu l’étiquette de Mouton, puis fait de l’artiste une signature annuelle à partir de 1945. Leeuwin Estate, Taittinger et les dessinateurs de Charlie Hebdo prolongent cet esprit, selon le livre, jusqu’à casser les codes du vin dans les années 1980-1990.",
  "<b>Vue sans être lue.</b> L’étiquette est perçue globalement avant d’être lue. Celhay y décrit quatre systèmes de signes (mise en page, typographie, couleurs, illustrations) : le centrage évoque le classique, les lettres gothiques l’ancienneté, le papier blanc la qualité.",
  "<b>Un récit à acheter.</b> Bobrie distingue des étiquettes qui racontent le vin et d’autres qui racontent le buveur. Avec la grande distribution, la vente en ligne et les réseaux sociaux, le visuel prend le pas sur l’information, et les vins naturels combinent contre-culture et retour à la nature."
 ],
 "defend": "L’étiquette n’est pas un simple support d’information : c’est un outil de normes, de marketing et de récit dont il faut savoir lire les codes.",
 "client": "« Avant même que vous lisiez un mot, la mise en page, les lettres et les couleurs de cette étiquette vous racontent déjà une histoire. »",
 "filRouge": "L’étiquette n’est-elle que du papier, ou dit-elle vraiment quelque chose du vin ?",
 "prudence": [
  "Le livre date le Nouvel Empire de « 1500 à 100 av. J.-C. » ; les sources donnent environ 1550-1070 av. J.-C. (une seule source de niveau 1).",
  "Les dates entre parenthèses de la légende de l’étiquette d’Amarna (p. 303) ne correspondent pas à la chronologie courante du règne et ne sont pas reprises.",
  "Le livre parle d’un nombre précis de mentions obligatoires ; les documents officiels comptent différemment, et deux mentions ont été ajoutées en décembre 2023 : mieux vaut retenir la liste.",
  "Château, clos, cru : « seules AOP » pour le livre, AOP et IGP pour les noms d’exploitation selon les guides officiels ; le texte réglementaire de base n’a pas été lu directement.",
  "Le livre appelle Mouton « premier grand cru classé » à propos de 1924 : c’est son rang actuel (deuxième cru en 1855, premier cru classé en 1973). Début de la série annuelle : 1945 ou 1946 selon les sources.",
  "La lithographie date de 1796 (Senefelder) mais le livre situe l’essor des étiquettes dans les années 1820 ; le lien avec l’étiquette de vin repose sur le livre.",
  "Plusieurs affirmations du livre (place de l’étiquette parmi les critères d’achat, ordre de diffusion géographique de la lithographie) n’ont pas été retrouvées ; l’exposition du SFMOMA existe bien (20 novembre 2010 - 17 avril 2011), mais elle n’est pas reprise dans les sources et ne sont pas reprises ; Leeuwin Estate, Taittinger et Mascarello reposent sur une seule source."
 ]
},
{
 "chapitre": "Boire le vin",
 "pages": "305-316",
 "question": "Pourquoi boit-on du vin, et comment les manières de boire ont-elles changé ?",
 "fil": [
  "<b>Un bien social.</b> Pour Lepeltier, l’histoire du boire est récente comme discipline et ne suit pas les grandes périodes politiques ou religieuses. Le vin s’est répandu parce qu’on l’a choisi, comme on choisit un ami : d’autres alcools offraient les mêmes propriétés. Choisir une boisson dit une identité, et les manières de boire se transmettent par les parents, les pairs ou un groupe que l’on veut rejoindre.",
  "<b>L’Antiquité.</b> En Grèce, le culte de Dionysos fait du vin un passage de la vie sauvage à la vie cultivée, et le symposion encadre l’ivresse : le vin pur étant réservé au dieu, on le coupe d’eau, sous l’autorité d’un maître du banquet, avec une vaisselle spécialisée.",
  "<b>Religion et médecine.</b> Le christianisme fait du vin le sang du Christ à l’eucharistie. Au Moyen Âge, la théorie des humeurs d’Hippocrate et de Galien fait du vin un médicament, à bien choisir pour qu’il ne devienne pas poison. Sous Louis XIV, Fagon oppose bourgogne et champagne, tandis que l’ivresse légère thérapeutique est peu à peu remise en cause.",
  "<b>Fortifiant, puis fléau.</b> Au XIXe siècle, le vin passe pour le remède de l’alcool fort, quand Magnus Huss forge le mot « alcoolisme ». À partir de 1954, la France institutionnalise la lutte contre l’alcoolisme, puis encadre la publicité avec la loi Évin ; aujourd’hui, les repères officiels sont de 2 verres par jour au plus et 10 par semaine.",
  "<b>Mesurer, coter, servir.</b> Les objets du boire se spécialisent : températures de service et refroidissement rapide à l’eau, verres hyperspécialisés ou universels. Certains crus sont aussi cotés comme des actions, ce que suivent les indices de Liv-ex (Fine Wine 1000, Fine Wine 50).",
  "<b>Une révolution accélérée.</b> En un siècle, boissons, lieux et normes du boire ont basculé, entre « cuite » et « cru ». Pour Lepeltier, deux regards éclairent ce changement, le marketing et la sommellerie ; elle cite Fabrizio Bucella, pour qui, face au puritanisme actuel, boire pourrait devenir un acte de résistance."
 ],
 "defend": "Le vin est un bien social et un acte culturel : on le boit par choix, et les codes du boire se sont transformés, de la religion et de la médecine à la marchandisation.",
 "client": "« On ne boit pas du vin parce qu’il le faut, mais parce qu’on l’a choisi : ce choix dit qui l’on est et avec qui l’on boit, et il a beaucoup changé en un siècle. »",
 "filRouge": "Boit-on du vin par besoin ou par choix ?",
 "prudence": [
  "Le livre place l’officialisation du christianisme en 392 ; l’édit de Thessalonique date de 380, 392 étant l’interdiction complète des cultes païens.",
  "La remarque « beaucoup d’ivrognes, pas d’alcooliques » est attribuée par le livre à un médecin nommé, pour une scène datée de 1853 ; Prestwich la rapporte à un porte-parole anonyme de l’Académie vers 1852, et l’auteur réel n’est pas identifié.",
  "Plusieurs chiffres de la p. 311 (nombre de débits de boissons en 1880, un café pour 82 habitants, 162 l par personne) ne sont pas repris : les sources donnent environ 357 000 débits hors Paris en 1880, et le ratio de 1 pour 82 correspond plutôt à 1913-1914.",
  "Le livre date de 1989 une mention obligatoire de modération ; la loi ne rend obligatoire que le message sanitaire de l’article L. 3323-4, la formule de modération étant ajoutée volontairement par les producteurs. La première loi sur l’ivresse au volant (1959), la fin du vin à la cantine en 1956 (presse seulement, aucun texte officiel lu) et le « Code du vin » de 1954 (introuvable) ne sont pas confirmés.",
  "Le livre qualifie l’ivresse au volant de première cause de décès liés à l’alcool ; Santé publique France place les cancers en tête.",
  "Bornes de la querelle bourgogne-champagne : 1650-1730 pour le livre, de 1652 à environ 1780 selon l’Union des Maisons de Champagne.",
  "Mésopotamie et Gilgamesh (p. 306), Nietzsche abstinent, Homo imbibens (McGovern) et analogie Dionysos-Christ (Pitte) ne sont pas repris faute de source confirmée ; le titre et la date du livre de Pitte divergent.",
  "Les courbes de température (p. 307) et l’infographie des enchères (p. 308-309) sont illisibles ou non attribuables ; la fiche technique du verre donne 224 mm pour 8,1 in, alors que la conversion exacte est 8,8 in.",
  "La composition du panier Liv-ex a été révisée depuis le dossier de presse (Bordeaux Legends 40 et reste du monde 60 aujourd’hui contre 50 et 50 dans le livre)."
 ]
},
{
 "chapitre": "L’art de servir le vin : accords et sommellerie",
 "pages": "317-329",
 "question": "Pourquoi marie-t-on tel vin avec tel plat, et depuis quand ?",
 "fil": [
  "<b>Un art récent.</b> Boire du vin à table existe depuis la maîtrise de la vinification, mais l’art de marier un cru à un plat est, pour Lepeltier, une codification très récente. Au Moyen Âge, le vin est choisi selon la théorie des humeurs ; à la fin du XVIIIe siècle, le repas « à la française » apporte tous les plats ensemble, sans harmonie avec le vin.",
  "<b>Les fondations.</b> Après la Révolution, les progrès de la vigne au chai et à la bouteille enrichissent les caves. Grimod de La Reynière publie le Manuel des amphitryons (1808), puis Brillat-Savarin la Physiologie du goût (1825), dont certains aphorismes codifient l’ordre des mets et des boissons. Le restaurant moderne, avec son menu et ses portions individuelles, offre alors un cadre au service du vin.",
  "<b>Des accords fabriqués.</b> Pour Lepeltier, beaucoup d’accords perçus comme éternels sont une création politique et touristique des années 1920-1930. Elle s’appuie sur l’histoire des gastronomies régionales, de la carte de Cadet de Gassicourt (1809) au Club des Cent (1912), puis sur l’exemple bourguignon : Foire gastronomique, Paulée, confrérie du Tastevin.",
  "<b>Le sommelier.</b> Le mot vient du « sommier », conducteur de bête de somme chargé des malles de la cour. Longtemps technicien de la cave, le sommelier est menacé dans les années 1960 par la crise de la restauration et la mise en bouteilles généralisée, puis se réinvente en conseiller, avec des concours et l’ASI (1969).",
  "<b>Les théories des accords.</b> Le livre suit la chronologie de Roca et Centelles : accords classiques (subjectivité, régionalité, objectivité, essais et erreurs), puis contemporains (Senderens et la complémentarité ou le contraste, Veronelli et l’intensité). Centelles insiste sur l’intensité et la complexité du plat, Roca sur les émotions, Chartier sur les molécules aromatiques.",
  "<b>La fabrique du goût.</b> Hanni propose d’accorder le vin au dîneur, Cho Lee ouvre aux palais asiatiques, et les algorithmes explorent de nouvelles frontières. Faute de vérité absolue, l’accord relève d’une fabrique du goût entre esthétique, économie et politique, que résume le « goût juste » de Jacques Puisais."
 ],
 "defend": "Les accords mets-vins ne sont ni naturels ni éternels : ils sont une construction historique, politique et culturelle, toujours redéfinie.",
 "client": "« Cet accord qui vous paraît évident est plus récent qu’on ne le croit : il a été construit, et il peut encore se discuter selon vos goûts. »",
 "filRouge": "Les accords mets-vins de nos régions sont-ils éternels ?",
 "prudence": [
  "Le livre place le Viandier de Taillevent au XIIIe siècle ; la version attribuée à Taillevent date de la fin du XIVe siècle (un Viandier anonyme plus ancien existe).",
  "Le bouillon de Boulanger (1765) est une tradition que l’historienne Rebecca Spang n’a pas pu confirmer dans les archives.",
  "Jeannie Cho Lee : Asian Palate date bien de 2009 ; son livre de 2011 (Mastering Wine for the Asian Palate) est un ouvrage différent.",
  "Plusieurs dates et attributions (Foire de Dijon 1921, Paulée 1923, Club des Cent 1912, Michelin et étoiles des années 1930) reposent sur une seule source de niveau 2b ou sur le livre seul.",
  "La classification des accords de Centelles, les apports de Roca, Veronelli, Vaccarini et Senderens ne sont pas recoupés hors du livre.",
  "L’infographie des harmonies moléculaires (p. 328) est en partie illisible : seuls des exemples sûrs sont repris."
 ]
},
{
  chapitre: "L’origine de la vigne",
  pages: "16-18",
  question: "D’où vient la vigne, et pourquoi une seule de ses espèces fait-elle le vin ?",
  fil: [
    "Lepeltier part d’un constat : la vigne cultivée n’est pas apparue toute seule, c’est le produit d’une longue domestication. Pour s’y retrouver dans ses noms, elle commence par sa généalogie, la classification des êtres vivants, qu’elle compare à des poupées russes : la vigne est une Vitis, de la famille des Vitacées, de l’ordre des Vitales, parmi les Rosidés.",
    "<b>Une plante hors du commun.</b> Liane verte, arbustive et pérenne, la vigne fabrique son bois grâce à son cambium. Son génome, décodé en 2007, est très ancestral et riche en gènes liés aux arômes : de quoi expliquer la complexité du vin. Contrairement à la rose, domestiquée pour ses fleurs, elle a privilégié son appareil végétatif, d’où sa nature protéiforme.",
    "<b>Une très vieille famille.</b> Selon le livre, les Vitacées naissent il y a environ 100 millions d’années, au Crétacé, et se dispersent à l’Éocène. L’autrice cite comme plus vieille feuille de vigne connue Vitis sezannensis, trouvée en Champagne. Plusieurs genres tropicaux se différencient ; ceux de l’hémisphère nord comprennent les vignes vierges et Vitis, jugé le plus récent.",
    "<b>Deux sous-genres, trois bassins.</b> Vitis se scinde en Muscadinia (40 chromosomes, sud-est des États-Unis, avec M. rotundifolia) et Euvitis (38 chromosomes), qui prend le nom du genre. Les espèces se répartissent en trois bassins : l’Extrême-Orient asiatique (37 espèces selon le livre), l’Amérique du Nord (34) et l’ensemble Proche-Orient et Europe, qui n’en compte qu’une, V. vinifera. Asie et Amérique sont restées sauvages et sont aujourd’hui étudiées pour leur résistance au froid ou aux maladies : V. amurensis, M. rotundifolia et son lien avec le court-noué.",
    "<b>Pourquoi une seule espèce en Europe ?</b> Selon Lepeltier, V. vinifera n’aurait pas eu besoin de se différencier, parce qu’elle aurait trouvé un refuge isolé et adapté dans le bassin caucasien pendant les bouleversements climatiques.",
    "<b>Vitis rencontre Homo sapiens.</b> V. vinifera connaît alors deux évolutions parallèles. La sous-espèce sylvestris, la lambrusque, reste sauvage : dioïque, liane des bords de cours d’eau, menacée et protégée en France depuis 1995. La sous-espèce cultivée, que le livre appelle sativa, naît selon lui de l’essor de la viticulture à la suite des débuts de l’agriculture, vers 8000 av. J.-C. C’est elle qui s’est le plus diversifiée, grâce à sa rencontre avec l’homme."
  ],
  defend: "La vigne qui fait notre vin est le fruit d’une très longue généalogie végétale, puis d’une rencontre avec l’homme : une seule espèce eurasiatique, V. vinifera, que ses cousines sauvages d’Asie et d’Amérique éclairent encore pour l’avenir.",
  client: "« La vigne est une liane très ancienne, de la famille des Vitacées. Elle compte des dizaines d’espèces sauvages en Asie et en Amérique, mais le vin vient d’une seule, V. vinifera, que l’homme a domestiquée à partir de la vigne sauvage, la lambrusque. »",
  filRouge: "D’où vient la vigne ?",
  prudence: [
    "Le livre appelle la sous-espèce cultivée « sativa » ; les ouvrages récents la nomment plutôt subsp. vinifera.",
    "Domestication : le livre place le refuge de la vigne sauvage dans le bassin caucasien, puis les premiers centres de domestication dans une large zone du Caucase au Proche-Orient, après les débuts de l’agriculture vers 8000 av. J.-C. ; une étude de Science (2023) parle de deux domestications presque simultanées il y a environ 11 000 ans (Asie occidentale et Caucase), une autre (Nature Communications, 2021) d’un événement unique en Asie occidentale. À présenter comme un débat ouvert.",
    "Le livre assimile la pulpe à l’albumen du pépin : en botanique, la pulpe est la chair de la paroi du fruit (mésocarpe), l’albumen est un tissu de la graine.",
    "Le livre parle des « dernières glaciations de l’Éocène » : l’Éocène est une période chaude presque sans glace ; les glaciations qui ont isolé les populations de vigne sauvage sont récentes (dernier maximum glaciaire, il y a environ 20 000 ans).",
    "Les décomptes d’espèces (37, 34, 1) et de genres (17 dans le livre, 16 chez Wen et al. 2018) varient selon les auteurs ; l’âge de 100 millions d’années des Vitacées est celui du livre, le plus ancien fossile connu est une graine indienne d’environ 66 millions d’années.",
    "Vitis sezannensis : présentée comme le plus vieux fossile de feuille de vigne, mais l’attribution au seul genre Vitis a été discutée et des graines de la famille sont plus anciennes.",
    "V. amurensis : la limite de −45 °C du livre est donnée ailleurs à −40 °C ; la société de Jilin de 1936, dite « japonaise » par le livre, n’a pas pu être vérifiée.",
    "Mother Vine de Roanoke : la date de 1500 est une tradition ; les historiens penchent pour les années 1850."
  ]
},
({
  chapitre: "Homo sapiens domestique Vitis vinifera",
  pages: "19-21",
  question: "Comment une liane forestière aux petites baies aigres est-elle devenue la vigne du vin ?",
  fil: [
    "La vigne n’avait rien d’une plante évidente à domestiquer : liane de forêt, elle grimpe dans les arbres et porte de petites baies aigrelettes. Pourtant, comme la vanille et le houblon, elle a retenu l’attention de l’homme, qui l’a sélectionnée, propagée et améliorée. Reste à comprendre pourquoi et comment.",
    "<b>L’hypothèse paléolithique.</b> Pour Patrick McGovern, l’envie de boire serait venue avant la culture : des chasseurs-cueilleurs auraient goûté du jus de raisins sauvages fermenté naturellement et cherché à le reproduire. Notre organisme y était préparé par une mutation de l’enzyme qui dégrade l’alcool. Le problème est que ce jus tourne vite au vinaigre : il fallait donc apprendre à le conserver.",
    "<b>Un vin vieux de 8 000 ans.</b> Les poteries, poreuses, gardent des traces de liquide que la chimie sait lire. En 2017, une équipe incluant McGovern trouve en Géorgie, à une cinquantaine de kilomètres de Tbilissi, de l’acide tartrique dans des jarres, ce qui prouve qu’on y vinifiait vers 6000-5800 av. J.-C. L’autrice y voit aussi le lien entre vin et poterie, donc une société déjà organisée.",
    "<b>Les centres primaires.</b> Les premiers grands foyers se situent, selon le livre, du Caucase au Proche-Orient : culture de Shulaveri-Shomu en Géorgie, Arménie avec le site d’Areni, montagnes du Zagros avec Hajji Firuz Tepe vers 5400 av. J.-C. La région compte aussi la plus grande diversité génétique de vignes, et la carte du livre montre une diffusion en trois vagues.",
    "<b>L’hypothèse hermaphrodite.</b> Domestiquer, c’est maîtriser la reproduction. La vigne sauvage a des pieds mâles et femelles ; de rares pieds hermaphrodites, repérés par l’homme et multipliés par bouture, donnent des clones qui fructifient seuls. C’est la lecture de José Vouillamoz, présentée par le livre comme une hypothèse invérifiable matériellement.",
    "<b>Du Proche-Orient à la Méditerranée.</b> Au fil des migrations puis des échanges, des centres secondaires naissent autour de la Méditerranée. Les proto-cépages s’y croisent avec les lambrusques locales, et la sélection donne des baies moins acides et tanniques, plus pulpeuses et sucrées, de couleurs et de pépins variés. Les agronomes romains décrivent ensuite une grande diversité de cépages : la domestication est quasi achevée.",
    "<b>Ce que l’Égypte nous apprend.</b> Les fresques de l’Ancien Empire montrent des grappes noires, ce qui suggère une sélection de la couleur encore débutante ; l’acide syringique, marqueur de vin rouge, permet de lire la couleur du vin dans les jarres.",
    "<b>Des cépages qui traversent les siècles.</b> Thierry Lacombe distingue quatre groupes : lambrusques, cépages primitifs, anciens et récents. Grâce à la multiplication végétative, des cépages anciens comme le savagnin ou le pinot sont encore parmi nous ; en revanche, aucun cépage primitif n’a été retrouvé.",
    "<b>Le maratheftiko, survivant à fleurs femelles.</b> À Chypre, ce cépage rouge n’a que des fleurs femelles : il doit être planté avec d’autres variétés qui fleurissent en même temps pour être pollinisé. Il a failli disparaître avec la fin de la complantation, mais la sauvegarde de la diversité ampélographique le remet en valeur."
  ],
  defend: "Lepeltier défend l’idée que le vin n’est pas né d’un coup : il vient d’un goût ancien pour le fermenté, d’une plante dont les hermaphrodites multipliés par bouture ont rendu la culture possible, puis de millénaires de croisements et de sélection.",
  client: "« Le plus vieux vin prouvé chimiquement vient de Géorgie, il y a environ 8 000 ans ; et la vigne que nous cultivons descend de pieds sauvages dont l’homme a fixé les meilleurs par bouture. »",
  filRouge: "Depuis quand fait-on du vin ?",
  prudence: [
    "Le pressoir d’Areni-1 date de 4100-4000 av. J.-C., soit environ 6 000 ans, et non 9 000 ans comme l’écrit le livre p. 20 (sa propre carte donne 4100-4000).",
    "La jarre décorée de grappes que décrit le livre vient d’un autre site, Khramis Didi-Gora, et la date de 5980 av. J.-C. n’a pas été retrouvée. Sur les deux sites analysés, l’étude n’a trouvé ni résine ni pépins, contrairement à ce que laisse entendre le livre, qui écrit d’ailleurs plus bas que ce vin était sans résine.",
    "Le plus ancien vin prouvé n’est pas forcément le premier : McGovern lui-même juge impossible de désigner la région pionnière, et Dong et al. (Science, 2023) décrivent deux domestications simultanées vers 11 000 ans, en Asie occidentale et dans le Caucase, là où le livre décrit une large zone de domestication du Caucase au Proche-Orient.",
    "À Jiahu (Chine, 7000-6600 av. J.-C.), la boisson fermentée mêlait du riz, du miel et des fruits (aubépine et/ou raisin) ; et une étude de 2018 sur la grotte de Raqefet (Israël) fait remonter une bière à environ 13 000 ans, ce qui nuance l’idée de « plus ancienne boisson alcoolisée ».",
    "Le livre généralise l’acide syringique à la majorité des jarres égyptiennes ; Guasch-Jané et al. n’ont analysé que des amphores de Toutânkhamon : trois sur huit portaient ce marqueur, les autres ont été lues comme du vin blanc. Les dates de l’Ancien Empire, les trois vagues de diffusion, 3500-3000 av. J.-C. et la classification de Lacombe ne reposent que sur le livre.",
    
    "Encadré p. 21 : la Bataille des vins est datée vers 1224, mais Philippe Auguste est mort en 1223. L’identification du nama d’Hésiode au commandaria vient de sources de vulgarisation (wein.plus, World of Fine Wine) et reste à prendre avec précaution ; le mavro comme pollinisateur du maratheftiko est cité par une seule source (Falstaff)."
  ]
}),
{
  chapitre: "Quel vin pour demain ?",
  pages: "331-333",
  question: "Quel vin pour demain, et qui le fera ?",
  fil: [
    "La conclusion part de deux rencontres de 2022, un symposium à Bordeaux et une conférence en ligne, qui disent la même chose : face aux problèmes environnementaux, il est urgent d’agir. Lepeltier se demande alors pourquoi et comment agir, alors que le vin a, pour beaucoup, perdu son sens.",
    "<b>Un vin de paradoxes.</b> Autrefois nécessaire et populaire, il est devenu un luxe pour privilégiés ; fleuron du patrimoine français, il est pointé par les lobbys antialcool ; symbole de naturalité, il est « hyperculturel » ; symbole d’enracinement, il est mondialisé. Ces paradoxes sont, pour elle, le reflet de nos propres contradictions.",
    "<b>Du totem au choix.</b> Barthes voyait dans le vin la boisson-totem de la nation française. Ce n’est plus vrai, car en boire n’est plus une nécessité sociale. Avec Fabrizio Bucella, elle parle d’un vin « dénormalisé » : produit hédonique, choisi plutôt que subi. On le boit alors pour ce qu’il représente, et on en parle plus qu’on n’en boit.",
    "<b>Une mythologie à inventer.</b> Elle croit que cette mythologie est déjà en train de se faire, avec les vins naturels. Pour elle, ce n’est pas d’abord l’écologie mais la joie de boire ensemble qui a poussé les pionniers à chercher un vin sans chimie, qui se boit. Elle voit l’origine de ce vin vivant, apparu selon elle dans les années 1980, dans la rencontre de cinq regards venus de métiers différents : Chauvet, Lapierre, Néauport, Morel et Chapel. Le vin « d’avant » qu’ils retrouvent est en fait réinventé.",
    "<b>Nature, culture, territoires.</b> S’appuyant sur Descola, elle rappelle que la séparation entre nature et culture est une manière de voir parmi d’autres, que les vignerons « nature » contestent. Les vins de terroir en offrent une version plus « civilisée » : de l’agriculture biologique à l’agriculture régénérative, la vigne devient un écosystème, et comme beaucoup de ces vins sortent des AOC, ils invitent à redéfinir le territoire en y incluant tous les vivants.",
    "<b>Le vin de demain.</b> Il dépendra du buveur de demain, plus divers que jamais, qui donne à sa bouteille le sens qu’il veut. Cette liberté est possible, pas inéluctable : il faut y croire et la désirer, comme le dit Jonathan Nossiter. La révolution à venir passera par l’éducation du goût et le respect du vivant : une révolution du palais."
  ],
  defend: "Le vin n’a plus de sens imposé : à nous d’inventer, par le goût et le respect du vivant, une mythologie du vin vivant, joyeuse et choisie.",
  client: "« Aujourd’hui, on ne boit plus du vin par obligation, on le choisit : et pour Lepeltier, le vin de demain sera celui que des buveurs divers voudront bien défendre, un vin vivant. »",
  filRouge: "Pourquoi le vin nature est-il, selon Lepeltier, un mouvement joyeux et pas seulement écologique ?",
  prudence: [
    "Les chiffres des rencontres de 2022 (35 experts, 17 pays ; 160 intervenants) ne sont pas confirmés : les communiqués ne donnent pas de nombre pour le symposium, et les comptes rendus de la conférence en ligne parlent de « plus d’une centaine » et de 170 présentateurs. À présenter comme « selon le livre ».",
    "Le terme « dénormalisé » est rapporté par Lepeltier d’après Bucella ; la page de son éditeur décrit le passage du vin à un produit hédonique sans employer le mot.",
    "L’apparition de la division nature/culture dans la cité athénienne au IVe siècle av. J.-C. est la thèse du livre ; une source lue situe plutôt l’idée moderne de nature aux Lumières. Divergence non tranchée.",
    "Le rôle de Morel et de Chapel dans les débuts du vin vivant n’est attesté que par un site de guide de vins nature ; la rencontre des cinq profils est une lecture de l’autrice.",
    "Tout ce chapitre est de l’opinion et de la thèse de Lepeltier (paradoxes, mythologie, révolution du palais) : à dire « pour Lepeltier »."
  ]
},
 {
  chapitre: "Bourgogne : panorama et appellations",
  question: "Pourquoi la Bourgogne, avec deux cépages seulement, passe-t-elle pour la région la plus compliquée de France ?",
  fil: [
   "La Bourgogne couvre environ 30 000 hectares, de l’Yonne à la Saône-et-Loire, en cinq grands ensembles : Chablis et le Grand Auxerrois, la Côte de Nuits, la Côte de Beaune, la Côte chalonnaise et le Mâconnais. On la croit terre de pinot noir ; elle produit pourtant surtout du blanc, environ 60 % des volumes, contre 30 % de rouge et 10 % de crémant.",
   "<b>Le ciel.</b> Le climat est de transition, entre océan et continent : l’été est court et variable, d’où deux cépages précoces, le chardonnay et le pinot noir. Gel de printemps, grêle, pluie aux vendanges : les millésimes sont très contrastés, et l’irrigation est interdite.",
   "<b>La pente.</b> La Côte-d’Or est un rebord de faille, fait de calcaires et de marnes du Jurassique. Les meilleurs climats occupent le mi-coteau : le haut est trop maigre et venté, le bas trop riche et gélif. Au-dessus, les Hautes-Côtes, plus fraîches ; au pied, la dénomination Bourgogne Côte d’Or, créée en 2017.",
   "<b>L’histoire.</b> Les abbayes de Cluny et de Cîteaux deviennent de grandes propriétaires, les ducs Valois font du vin un instrument de prestige et proscrivent le gamay en 1395. Puis la Révolution vend les vignes de l’Église et l’héritage égalitaire les émiette. Emblème du morcellement : le Clos de Vougeot, environ 50 ha, partagé à partir de 1889, compte aujourd’hui plus de 80 propriétaires. D’où le négociant-éleveur, à côté des domaines.",
   "<b>La hiérarchie.</b> 84 AOC sur quatre étages : 7 régionales, 44 villages et 33 grands crus ; les premiers crus sont des climats classés à l’intérieur des villages. Plus on monte, plus la parcelle est précise et le volume rare : les grands crus pèsent environ 1 % de la production.",
   "<b>Le chai.</b> Le pinot noir est trié, égrappé ou non, pigé, puis élevé en pièce de 228 litres ; le chardonnay est pressé aussitôt, puis fermenté et élevé en fût sur lies. Depuis le millésime 1996, l’oxydation prématurée des blancs (premox) rappelle que la garde n’est jamais acquise."
  ],
  defend: "En Bourgogne, on classe le lieu plutôt que le domaine : le climat, c’est-à-dire la parcelle, le producteur et le millésime comptent autant que le cépage.",
  client: "« Deux cépages, des milliers de parcelles : plus le nom sur l’étiquette est précis, plus la parcelle est rare. Et comme le temps y est capricieux, l’année et le vigneron comptent autant que l’appellation. »",
  filRouge: "Isolé au nord, loin de la Côte-d’Or, comment Chablis organise-t-il ses vins de chardonnay ?",
  src: "fiches 385 à 390 et 672 à 677 du site (WSET D3, Oxford Companion, INAO, BIVB, DRAAF Bourgogne-Franche-Comté, UNESCO)"
 },
 {
  chapitre: "Chablis et Grand Auxerrois",
  question: "Comment se lit la hiérarchie d’un vignoble entièrement voué au chardonnay ?",
  fil: [
   "Chablis, dans l’Yonne, est un vignoble septentrional, exposé au gel. Ici, tout est blanc sec, et de chardonnay seul.",
   "<b>Quatre étages.</b> Petit chablis, chablis, chablis premier cru (40 climats, regroupables sous 17 noms) et chablis grand cru. Plus on monte, plus le rendement de base baisse : 60 hl/ha pour les deux premiers, 58 pour le premier cru, 54 pour le grand cru.",
   "<b>Un grand cru unique.</b> Contrairement à la Côte-d’Or, où chaque grand cru est une appellation, le grand cru de Chablis est une seule appellation, limitée à la commune de Chablis. L’étiquette peut la compléter par l’un de sept climats : Blanchot, Bougros, Les Clos, Grenouilles, Preuses, Valmur, Vaudésir.",
   "<b>Le gel.</b> Vignoble du nord, Chablis redoute les gelées de printemps : on asperge ou on chauffe les parcelles. Le Kimméridgien, marne calcaire du Jurassique, fait sa réputation, même si l’aire n’a pas été tracée par la géologie seule (fiche 213).",
   "<b>Autour de Chablis.</b> Le Grand Auxerrois garde ses singularités : Irancy, rouge de pinot noir où le césar est admis ; Saint-Bris, seul sauvignon de Bourgogne ; Vézelay, chardonnay devenu appellation à part entière ; et des Bourgogne à dénomination locale, comme Tonnerre, Épineuil, Chitry ou Côtes d’Auxerre."
  ],
  defend: "À Chablis, la hiérarchie se lit en quatre mots, petit chablis, chablis, premier cru, grand cru, et le grand cru est une appellation unique déclinée en sept climats.",
  client: "« Chablis, c’est toujours du chardonnay en blanc sec. Du petit chablis au grand cru, on gagne en précision de lieu, et le rendement autorisé baisse. »",
  filRouge: "Plus au sud, sur la Côte de Nuits, pourquoi le pinot noir règne-t-il presque seul ?",
  src: "fiches 391, 392 et 213 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Côte de Nuits",
  question: "Qu’est-ce qui fait d’un coteau de quelques centaines de mètres de large la capitale du pinot noir ?",
  fil: [
   "La Côte de Nuits est la moitié nord de la Côte-d’Or : un coteau étroit, de Marsannay, aux portes de Dijon, jusqu’à Corgoloin, entre les plateaux des Hautes-Côtes et la plaine. Le sous-sol y est plus calcaire qu’en Côte de Beaune, des combes y canalisent des vents frais, et le pinot noir règne : les blancs y sont rares.",
   "<b>Les villages.</b> Du nord au sud : Marsannay, Fixin, Gevrey-Chambertin aux rouges puissants, Morey-Saint-Denis, Chambolle-Musigny aux rouges fins, Vougeot, Vosne-Romanée aux tanins veloutés, puis Nuits-Saint-Georges aux rouges robustes, qui n’a aucun grand cru.",
   "<b>Les grands crus.</b> 24 des 33 grands crus de Bourgogne sont ici : 9 à Gevrey, 8 à Vosne et Flagey-Échezeaux, 4 à Morey, 2 à Chambolle, 1 à Vougeot. Ce sont des rouges ; seul le Musigny existe aussi, très rarement, en blanc.",
   "<b>Les monopoles.</b> Un monopole est un climat qui n’a qu’un propriétaire : c’est un fait de propriété, pas un échelon de classement. Le Domaine de la Romanée-Conti possède ainsi en entier Romanée-Conti et La Tâche ; à Vosne, La Romanée, moins d’un hectare, est la plus petite AOC de France."
  ],
  defend: "La Côte de Nuits concentre l’élite du pinot noir : près de trois grands crus bourguignons sur quatre, et un style propre à chaque village.",
  client: "« Gevrey pour la puissance, Chambolle pour la finesse, Vosne pour le velours : en Côte de Nuits, chaque village a sa signature. »",
  filRouge: "Juste au sud, pourquoi la Côte de Beaune fait-elle à la fois les plus grands blancs et des rouges comme Pommard et Volnay ?",
  src: "fiches 393 à 395, 673 et 724 à 732 (une par appellation communale) du site (INAO, cahiers des charges et fiches produit ; WSET D3 ; Oxford Companion ; Garcia 2011)"
 },
 {
  chapitre: "Côte de Beaune",
  question: "Comment une même côte peut-elle donner Pommard en rouge et Montrachet en blanc ?",
  fil: [
   "La Côte de Beaune prolonge la Côte de Nuits vers le sud, sur environ 25 km, de Ladoix-Serrigny aux Maranges. Les marnes y tiennent plus de place, les sols sont plus profonds, et presque tous les villages font les deux couleurs.",
   "<b>Rouges et blancs.</b> Au nord, Aloxe-Corton, Pernand-Vergelesses, Savigny-lès-Beaune ; juste au sud de Beaune, Pommard aux rouges colorés et Volnay aux rouges fins, tous deux strictement rouges. Plus au sud, la réputation des blancs : Meursault, Puligny-Montrachet et Chassagne-Montrachet ; puis Saint-Aubin, Santenay et Maranges, en rouge comme en blanc.",
   "<b>Huit grands crus sur deux sites.</b> La colline de Corton porte Corton, en rouge comme en blanc, Corton-Charlemagne et Charlemagne, en blanc. Autour de Puligny et de Chassagne, cinq grands crus blancs : Montrachet, Bâtard-Montrachet, Chevalier-Montrachet, Bienvenues-Bâtard-Montrachet et Criots-Bâtard-Montrachet. Beaune, Pommard, Volnay et Meursault n’en ont aucun.",
   "<b>Beaune, capitale du commerce.</b> L’Hôtel-Dieu, fondé en 1443 par Nicolas Rolin et Guigone de Salins, vit de dons de vignes ; ses vins sont vendus aux enchères chaque troisième dimanche de novembre, au cœur des Trois Glorieuses."
  ],
  defend: "La Côte de Beaune est la côte des deux couleurs : les grands blancs au sud, des rouges réputés à Pommard et à Volnay, et Corton, qui n’est pas qu’un rouge.",
  client: "« Pour un grand blanc de Bourgogne, regardez vers Meursault, Puligny et Chassagne ; pour un rouge fin, vers Volnay. »",
  filRouge: "Au sud de la Côte-d’Or, comment la Côte chalonnaise organise-t-elle sa hiérarchie sans aucun grand cru ?",
  src: "fiches 396 à 398, 673 et 733 à 750 (une par appellation communale) du site (INAO ; WSET D3 ; Oxford Companion ; UNESCO ; Hospices de Beaune)"
 },
 {
  chapitre: "Côte chalonnaise",
  question: "Que reste-t-il de la hiérarchie bourguignonne quand il n’y a plus de grand cru ?",
  fil: [
   "La Côte chalonnaise prolonge la Côte-d’Or vers le sud. On y compte cinq appellations communales, et la hiérarchie s’y arrête au premier cru.",
   "<b>Du nord au sud.</b> Bouzeron, seule appellation communale de Bourgogne bâtie sur l’aligoté ; Rully, Mercurey et Givry, en blanc comme en rouge ; Montagny, blanc de chardonnay seul.",
   "<b>Les premiers crus.</b> Leur nombre grimpe vers le sud : 23 à Rully, 32 à Mercurey, 38 à Givry, 49 à Montagny.",
   "<b>Les régionales.</b> Bourgogne Côte Chalonnaise s’écrit dans les trois couleurs ; Bourgogne Côtes du Couchois, autour de Couches, est réservé au rouge par le cahier des charges homologué fin 2023."
  ],
  defend: "La Côte chalonnaise offre la hiérarchie bourguignonne sans son sommet : des villages et des premiers crus, en rouge comme en blanc, et l’aligoté de Bouzeron.",
  client: "« Mercurey ou Givry pour un rouge, Rully ou Montagny pour un blanc, et Bouzeron pour découvrir l’aligoté. »",
  filRouge: "Plus au sud encore, que devient le chardonnay dans le Mâconnais ?",
  src: "fiche 399 du site (INAO, cahiers des charges ; Oxford Companion ; WSET D3)"
 },
 {
  chapitre: "Mâconnais",
  question: "Comment le Mâconnais, terre de chardonnay, a-t-il gagné ses premiers crus ?",
  fil: [
   "Le Mâconnais est la partie la plus méridionale de la Bourgogne, et d’abord une terre de chardonnay.",
   "<b>Mâcon.</b> L’AOC admet trois couleurs : le blanc de chardonnay, le rouge et le rosé de gamay et de pinot noir. Avec un nom de commune (Mâcon-Lugny, par exemple), le rouge n’est plus qu’au gamay, et la mention Villages est réservée au blanc.",
   "<b>Les communales.</b> Viré-Clessé, qui a remplacé en 1999 les anciens Mâcon-Viré et Mâcon-Clessé, et Saint-Véran, créé en 1971 de part et d’autre de Pouilly-Fuissé : deux blancs de chardonnay.",
   "<b>Les Pouilly.</b> Sous les roches calcaires de Solutré et de Vergisson, Pouilly-Fuissé devient en 2020 la première appellation du Mâconnais à obtenir des premiers crus : 22 climats. Pouilly-Loché et Pouilly-Vinzelles suivent, avec des cahiers des charges homologués en 2024."
  ],
  defend: "Le Mâconnais est la Bourgogne du chardonnay, et sa hiérarchie progresse encore : des premiers crus à Pouilly-Fuissé depuis 2020.",
  client: "« Mâcon-Villages ou Saint-Véran pour entrer dans le Mâconnais, Pouilly-Fuissé et ses premiers crus pour monter d’un cran. »",
  filRouge: "Juste au sud, pourquoi le gamay, proscrit en Bourgogne en 1395, est-il roi en Beaujolais ?",
  src: "fiches 400, 401 et 672 du site (INAO, cahiers des charges et communiqués ; Decanter ; Oxford Companion)"
 },
 {
  chapitre: "Bordeaux : panorama et appellations",
  question: "Pourquoi Bordeaux, à la différence de la Bourgogne, assemble-t-il ses cépages et classe-t-il des châteaux plutôt que des parcelles ?",
  fil: [
   "Bordeaux est d’abord un port. En 1152, le mariage d’Aliénor d’Aquitaine et d’Henri Plantagenêt lance les échanges avec l’Angleterre, qui baptise « claret » ces vins clairs. Au XVIIe siècle, des ingénieurs hollandais assèchent les marais du Médoc, et des marchands étrangers installés aux Chartrons bâtissent la réputation des crus.",
   "<b>Le ciel.</b> Le climat est océanique et modéré : l’Atlantique et le Gulf Stream, l’estuaire de la Gironde et la forêt des Landes adoucissent tout. Mais la pluie est irrégulière : à la floraison, elle fait couler le merlot ; aux vendanges, elle dilue et fait pourrir.",
   "<b>Deux rives.</b> À l’ouest, la rive gauche, Médoc et Graves, repose sur des croupes de graves qui drainent vite : c’est la terre du cabernet-sauvignon, cépage tardif. À l’est, la rive droite, plus argileuse et plus fraîche, est le pays du merlot, plus précoce. Entre les deux fleuves, l’Entre-deux-Mers fait surtout du merlot et des blancs secs.",
   "<b>L’assemblage.</b> Les cépages se complètent, la chair du merlot remplissant la charpente du cabernet, et ils ne craignent pas les mêmes aléas : assembler, c’est aussi s’assurer contre l’année.",
   "<b>Le chai.</b> Dans les châteaux de qualité, le vin fermente en cuve, puis s’élève environ un an et demi à deux ans en barrique de 225 litres. L’assemblage de l’hiver sépare le grand vin du second vin.",
   "<b>Les classements.</b> Bordeaux classe des châteaux, région par région : 1855 pour le Médoc et Sauternes, les Graves depuis 1959, Saint-Émilion révisé environ tous les dix ans, les crus bourgeois ; Pomerol n’a jamais été classé.",
   "<b>Aujourd’hui.</b> Le vignoble se réduit : environ 91 500 ha en Gironde en 2025, après quelque 21 000 ha arrachés depuis 2023, tandis que les blancs, les rosés et les crémants progressent."
  ],
  defend: "Bordeaux s’explique par le commerce et l’assemblage : un port qui a fait naître ses grands crus, des cépages qui se complètent, et des châteaux classés plutôt que des parcelles.",
  client: "« À Bordeaux, on assemble : cabernet-sauvignon sur la rive gauche pour la structure, merlot sur la rive droite pour la rondeur. Et c’est le nom du château qui compte, plus que celui de la parcelle. »",
  filRouge: "Sur la rive gauche, comment le Médoc s’organise-t-il entre deux appellations régionales et six communales ?",
  src: "fiches 411 à 413 et 678 à 683 du site (WSET D3, Oxford Companion, INAO, Agreste Nouvelle-Aquitaine, Mille Vignes p. 160 et 173)"
 },
 {
  chapitre: "Médoc et Haut-Médoc",
  question: "Comment une presqu’île de marais est-elle devenue le berceau des crus classés de 1855 ?",
  fil: [
   "Le Médoc est une presqu’île de la rive gauche de la Gironde, longtemps marécageuse, asséchée au XVIIe siècle. Des croupes de graves, buttes de graviers déposés par les rivières, y alternent avec des sols argilo-calcaires.",
   "<b>Deux régionales.</b> Reconnues en 1936, l’AOC Médoc couvre le nord et l’AOC Haut-Médoc le sud, vers Bordeaux, malgré son nom. Ce sont des rouges où le cabernet-sauvignon est souvent majoritaire, avec le merlot, le cabernet franc et le petit verdot ; depuis 2025, l’AOC Médoc admet aussi des blancs secs.",
   "<b>Six communales.</b> Margaux, Saint-Julien, Pauillac et Saint-Estèphe concentrent les crus classés de 1855 ; Listrac-Médoc et Moulis-en-Médoc, plus discrètes, n’en ont aucun.",
   "<b>Les styles.</b> Margaux, la plus riche en crus classés (21), allie finesse et garde ; Saint-Julien (11 crus classés) l’harmonie ; Pauillac, aux trois premiers crus (Lafite-Rothschild, Latour, Mouton-Rothschild), la puissance ; Saint-Estèphe, la plus au nord, des vins corsés qui demandent du temps.",
   "<b>Deux classements.</b> Celui de 1855, fondé sur les prix, n’a presque pas bougé ; celui des crus bourgeois, en trois niveaux, se rejoue tous les cinq ans, avec dégustation à l’aveugle."
  ],
  defend: "Le Médoc est la terre du cabernet-sauvignon sur graves, et sa hiérarchie se lit en deux régionales, six communales et deux classements, l’un figé, l’autre révisable.",
  client: "« Margaux pour la finesse, Pauillac pour la puissance, Saint-Estèphe pour la charpente : sur la rive gauche, chaque commune a son caractère. »",
  filRouge: "Au sud de Bordeaux, pourquoi les Graves font-elles aussi bien le rouge que le blanc sec ?",
  src: "fiches 421 à 424, 751 à 754, 3 et 679 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion ; Conseil des Grands Crus Classés en 1855 ; Alliance des Crus Bourgeois)"
 },
 {
  chapitre: "Graves et Pessac-Léognan",
  question: "Pourquoi la région qui a donné son nom à un sol a-t-elle vu naître une appellation à part, Pessac-Léognan ?",
  fil: [
   "Les Graves s’étirent sur la rive gauche de la Garonne, de Bordeaux à Langon, sur environ 55 km, bordées à l’ouest par la forêt de pins. Leur nom vient de leurs sols pauvres de graviers et de galets, qui drainent bien.",
   "<b>Deux couleurs.</b> L’AOC Graves, reconnue en 1937, fait des rouges, menés par le cabernet-sauvignon et le merlot, et des blancs secs de sémillon, de sauvignon et de muscadelle ; en 2025, l’ancienne AOC Graves supérieures, pour les blancs moelleux, y a été absorbée.",
   "<b>Pessac-Léognan.</b> En 1987, les producteurs du nord, aux portes de Bordeaux, obtiennent leur propre appellation, sur dix communes, en rouge et en blanc sec.",
   "<b>Le classement des Graves.</b> Établi à la fin des années 1950, il compte 16 châteaux, tous en Pessac-Léognan, classés en rouge, en blanc ou dans les deux couleurs. Haut-Brion, seul cru de Graves classé en 1855, y figure en rouge."
  ],
  defend: "Les Graves sont la région bordelaise des grands rouges comme des grands blancs secs, et leur élite s’est regroupée en Pessac-Léognan.",
  client: "« Pour un grand bordeaux blanc sec, pensez Pessac-Léognan : ses châteaux sont classés en rouge comme en blanc. »",
  filRouge: "Un peu plus au sud, au bord du Ciron, comment naît un liquoreux comme le sauternes ?",
  src: "fiches 425, 426 et 3 du site (INAO, cahiers des charges ; Oxford Companion ; WSET D3)"
 },
 {
  chapitre: "Sauternais et liquoreux",
  question: "Comment une rivière froide et un champignon font-ils l’un des grands vins doux du monde ?",
  fil: [
   "L’AOC sauternes couvre cinq communes de la rive gauche de la Garonne : Sauternes, Barsac, Bommes, Fargues et Preignac. Le Ciron, petit affluent froid, y entretient des brumes matinales qui, suivies d’après-midi ensoleillés, favorisent la pourriture noble.",
   "<b>La vendange.</b> Le champignon flétrit les grains et concentre leurs sucres. Les raisins sont cueillis à la main, par tries successives, en plusieurs passages.",
   "<b>Les cépages.</b> Le sémillon domine, plus sensible à la pourriture noble ; sauvignon, sauvignon gris et muscadelle complètent. Barsac peut se vendre sous son nom ou sous celui de Sauternes.",
   "<b>Le classement.</b> En 1855, Yquem est seul « premier cru supérieur », au-dessus des premiers et des deuxièmes crus ; partages de propriétés aidant, on compte aujourd’hui 27 crus classés.",
   "<b>Les voisins.</b> Cérons, sur la même rive, et, face à Sauternes, Loupiac, Sainte-Croix-du-Mont et Cadillac font aussi des liquoreux, beaucoup plus confidentiels."
  ],
  defend: "Le sauternes est un vin de risque : il dépend de brumes, de soleil et de tries répétées, et le sémillon en est le cœur.",
  client: "« Le sauternes vient de raisins touchés par une pourriture noble, cueillis à la main en plusieurs passages, au fil du botrytis : c’est un vin de patience et de risque. »",
  filRouge: "De l’autre côté de la Dordogne, comment le merlot règne-t-il sur Saint-Émilion et Pomerol ?",
  src: "fiches 427, 428, 755 à 757 et 680 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion ; Conseil des Grands Crus Classés en 1855)"
 },
 {
  chapitre: "Libournais : Saint-Émilion, Pomerol et satellites",
  question: "Comment la rive droite a-t-elle fait du merlot sa signature ?",
  fil: [
   "Saint-Émilion s’étend sur la rive droite de la Dordogne, autour de sa cité médiévale : neuf communes et environ 5 400 à 5 500 ha. Un plateau calcaire domine la ville, prolongé par des coteaux argilo-calcaires, des graves vers Libourne et une plaine sableuse près du fleuve. Le merlot y domine, avec le cabernet franc.",
   "<b>Un paysage classé.</b> La juridiction de Saint-Émilion est inscrite à l’UNESCO depuis 1999 comme paysage culturel viticole. Depuis 1984, il ne reste que deux appellations : Saint-Émilion et Saint-Émilion grand cru.",
   "<b>Un classement révisable.</b> Créé en 1955 et révisé environ tous les dix ans par l’INAO, il compte dans son édition 2022 14 premiers grands crus classés et 71 grands crus classés. Ausone, Cheval Blanc puis Angélus s’en sont retirés.",
   "<b>Pomerol.</b> Petite appellation d’environ 800 ha, sur argiles, graves et « crasse de fer », où le merlot règne ; Petrus en est le nom le plus célèbre, et aucun classement n’y existe.",
   "<b>Les voisins.</b> Lalande-de-Pomerol au nord, Fronsac et Canon-Fronsac à l’ouest, et les quatre satellites de Saint-Émilion (Montagne, Lussac, Puisseguin, Saint-Georges) ne font que du rouge."
  ],
  defend: "La rive droite est le pays du merlot, sur argiles et calcaire, avec deux visages : Saint-Émilion, classé et révisé, et Pomerol, jamais classé.",
  client: "« Saint-Émilion et Pomerol, c’est le merlot : des vins plus ronds que ceux du Médoc, où domine le cabernet. »",
  filRouge: "Entre la Dordogne et la Garonne, que produit le grand plateau de l’Entre-deux-Mers ?",
  src: "fiches 429 à 431, 758 à 764 et 679 du site (INAO, cahiers des charges et classement ; UNESCO ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Entre-deux-Mers, Côtes et Bordeaux régionaux",
  question: "Où se fait l’essentiel du bordeaux, celui qu’on boit au quotidien ?",
  fil: [
   "L’Entre-deux-Mers est le plateau compris entre la Dordogne et la Garonne : 133 communes de Gironde. Son AOC, reconnue en 1937, a longtemps été réservée aux blancs secs de sauvignon, de sémillon et de muscadelle ; depuis 2023, elle admet aussi des rouges, sous des règles strictes.",
   "<b>Les Côtes de Bordeaux.</b> Créée en 2009, l’AOC réunit cinq terroirs dont le nom peut compléter l’appellation : Blaye, Cadillac, Castillon, Francs et Sainte-Foy. La base est rouge ; le blanc n’existe que sous certaines dénominations. Côtes de Bourg reste une appellation distincte.",
   "<b>Les régionales.</b> Bordeaux, reconnu en 1936, couvre le rouge, le rosé, le clairet et le blanc ; Bordeaux supérieur fait du rouge et du blanc ; le crémant de Bordeaux, blanc ou rosé, date de 1990.",
   "<b>Le cœur du volume.</b> Ces appellations régionales portent l’essentiel de la production, et ce sont elles que la crise touche le plus : on y arrache des vignes depuis 2023, et l’on y teste six cépages d’adaptation au climat depuis 2021."
  ],
  defend: "Le bordeaux du quotidien vient de l’Entre-deux-Mers, des Côtes et des appellations régionales : c’est là que la région se réinvente, entre arrachages, blancs, rosés et crémants.",
  client: "« Un Côtes de Bordeaux ou un Bordeaux supérieur, c’est le bordeaux du quotidien, bien moins cher que les crus classés. »",
  filRouge: "Plus au sud-est, comment le Sud-Ouest garde-t-il ses cépages à lui, du tannat au gros manseng ?",
  src: "fiches 432, 433, 765 à 772, 412 et 683 du site (INAO, cahiers des charges ; Agreste Nouvelle-Aquitaine ; Oxford Companion ; WSET D3)"
 },
 {
  chapitre: "Sud-Ouest : panorama et appellations",
  question: "Plus au sud-est, comment le Sud-Ouest garde-t-il ses cépages à lui, du tannat au gros manseng ?",
  fil: [
   "Le Sud-Ouest n’est pas une appellation mais une région d’usage : tous les vignobles du quart sud-ouest de la France, Bordeaux et Cognac exclus.",
   "<b>Le haut-pays face à Bordeaux.</b> Les vins de l’amont descendaient la Garonne et ses affluents vers Bordeaux, qui les taxait et ne les laissait gagner la mer qu’après avoir vendu les siens : c’est le « privilège de Bordeaux », que le cahier de l’IGP Côtes de Gascogne situe en 1373. Le vignoble de l’amont a gardé ses propres cépages.",
   "<b>Quatre ensembles.</b> Le Bergeracois et Duras ; la Garonne, avec le Marmandais, Buzet et le Brulhois ; le haut-pays, avec Cahors, Fronton, Gaillac et l’Aveyron ; la Gascogne et le piémont pyrénéen.",
   "<b>De l’océan au piémont.</b> L’influence atlantique s’atténue vers l’intérieur ; au pied des Pyrénées, un foehn, vent chaud du sud, aide Jurançon et Madiran à mûrir.",
   "<b>Des cépages maison.</b> Près de la Gironde dominent cabernets et merlot ; plus on remonte, plus on trouve tannat, mansengs, négrette ou mauzac. À Cahors, phylloxéra, concurrence bordelaise et gel de 1956 ont ramené le vignoble de près de 40 000 ha à moins d’un dixième.",
   "<b>Une IGP de blancs.</b> L’IGP Côtes de Gascogne, née du recul de l’armagnac, couvre tout le Gers et produit surtout du blanc, sans imposer de cépage."
  ],
  defend: "Tenu longtemps à l’écart du port par Bordeaux, le Sud-Ouest a gardé une mosaïque de cépages locaux : c’est sa singularité.",
  client: "« Le Sud-Ouest, c’est tout ce qui est à l’est et au sud de Bordeaux, avec ses propres cépages : tannat, mansengs, négrette, fer. »",
  filRouge: "Cahors, Madiran, Jurançon, Gaillac, Bergerac : comment s’y retrouver dans la mosaïque des appellations du Sud-Ouest ?",
  src: "fiches 414, 843 et 844 du site (cahier de l’IGP Côtes de Gascogne, BO-agri ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Sud-Ouest : appellations phares",
  question: "Cahors, Madiran, Jurançon, Gaillac, Bergerac : comment s’y retrouver dans la mosaïque des appellations du Sud-Ouest ?",
  fil: [
   "Plus on s’éloigne de Bordeaux, plus les cépages sont locaux : c’est la clé de lecture.",
   "<b>Le Bergeracois et Duras.</b> Mêmes cépages que Bordeaux, et un nom qui dit le style : Bergerac et Montravel pour les blancs secs, Côtes de Bergerac, Côtes de Montravel et Rosette pour les moelleux, Monbazillac, Saussignac et Haut-Montravel pour les liquoreux, Pécharmant pour le rouge.",
   "<b>La Garonne.</b> Côtes du Marmandais et Buzet restent bordelaises ; le Brulhois y ajoute le tannat.",
   "<b>Le haut-pays.</b> Malbec à Cahors (au moins 70 %), négrette à Fronton, duras, fer et prunelard à Gaillac, qui fait aussi des blancs doux et un mousseux de méthode ancestrale, fer à Marcillac et dans le reste de l’Aveyron.",
   "<b>Gascogne et Pyrénées.</b> Tannat à Madiran, Saint-Mont et dans les rouges du Béarn ; mansengs à Jurançon ; tannat et cabernet franc à Irouléguy, au Pays basque. Le Floc de Gascogne, vin de liqueur muté à l’armagnac, partage l’aire de l’eau-de-vie."
  ],
  defend: "En aval, le Sud-Ouest parle bordelais ; en amont, chaque appellation a son cépage maison. Connaître le cépage, c’est déjà connaître le vin.",
  client: "« Pour un rouge charpenté, un madiran ou un cahors ; pour un blanc doux, un jurançon ou un monbazillac ; pour l’original, un fronton de négrette ou un gaillac. »",
  filRouge: "Pourquoi dit-on qu’il y a deux Rhône, et qu’est-ce qui les relie ?",
  src: "fiches 484 à 488 et 845 à 858 du site (cahiers des charges des AOC du Sud-Ouest, BO-agri ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Vallée du Rhône : panorama et appellations",
  question: "Pourquoi dit-on qu’il y a deux Rhône, et qu’est-ce qui les relie ?",
  fil: [
   "Le Rhône, ce sont deux vignobles séparés par une cinquantaine de kilomètres presque sans vignes, entre Valence et Montélimar. Au nord, le climat est continental ; au sud, méditerranéen. Partout, un vent froid du nord assainit les vignes mais les malmène : échalas sur les pentes du nord, gobelets bas dans les plaines du sud.",
   "<b>Le Nord.</b> La plupart des huit crus s’accrochent en terrasses, sur la rive droite, au rebord granitique du Massif central ; l’Hermitage et Crozes sont en face, sur la rive gauche. Ce sont Côte-Rôtie, Condrieu, Château-Grillet, Saint-Joseph, Crozes-Hermitage, Hermitage, Cornas et Saint-Péray. Ils ne couvrent que quelques milliers d’hectares. La syrah y est le seul cépage rouge ; les blancs sont de viognier, ou de marsanne et roussanne.",
   "<b>Le Sud.</b> Plus vaste, il fait l’essentiel du volume, sur des sables, des calcaires, des argiles et des galets roulés. Les rouges y sont des assemblages menés par le grenache, avec la syrah, le mourvèdre et le cinsaut. Dix crus, dont Châteauneuf-du-Pape et Tavel, coiffent la pyramide depuis la promotion de Laudun en 2024.",
   "<b>Une pyramide commune.</b> Côtes du Rhône, Côtes du Rhône Villages, Villages suivi d’un nom, puis les crus : à chaque étage, les rendements baissent.",
   "<b>Une longue histoire.</b> Pline vante déjà le vin des Allobroges de Vienne ; les papes d’Avignon font connaître la vallée au XIVe siècle ; au XXe, le baron Le Roy, à Châteauneuf, pousse avec le sénateur Capus à la création des AOC.",
   "<b>Aujourd’hui.</b> Selon Inter Rhône, environ 60 000 ha d’AOC en 2025, surtout du rouge, et un tiers des volumes à l’export : la Belgique en est le premier marché."
  ],
  defend: "Le Rhône réunit deux vignobles opposés, la syrah seule sur les coteaux du nord et les assemblages de grenache du sud, sous une même pyramide d’appellations.",
  client: "« Au nord, la syrah sur des coteaux de granite ; au sud, le grenache en assemblage, plus chaud et plus rond. Les deux s’appellent Côtes du Rhône à la base, et ont leurs crus au sommet. »",
  filRouge: "Sur ces coteaux du Nord, qu’est-ce qui distingue une Côte-Rôtie d’un Hermitage ou d’un Cornas ?",
  src: "fiches 415, 416 et 684 à 689 du site (WSET D3, Oxford Companion, INAO, Inter Rhône, Mille Vignes p. 173 et 184)"
 },
 {
  chapitre: "Rhône Nord : les crus septentrionaux",
  question: "Comment huit petits crus, tous de syrah en rouge, arrivent-ils à être si différents ?",
  fil: [
   "Du nord au sud, les crus du Rhône Nord se succèdent sur des coteaux en terrasses, presque tous sur la rive droite, sur granite, schiste ou gneiss. La syrah y est le seul cépage rouge ; ce qui change, c’est la pente, la roche et ce qu’on lui associe.",
   "<b>Côte-Rôtie.</b> Tout au nord, des pentes très raides de schiste et de gneiss. Un rouge de syrah où le viognier est admis jusqu’à 20 %, à condition d’être vinifié avec elle : une syrah élégante et parfumée.",
   "<b>Condrieu et Château-Grillet.</b> Deux blancs 100 % viognier : Condrieu, reconnue en 1940, une appellation de sept communes, du sec au doux ; Château-Grillet, une AOC enclavée d’un seul domaine d’environ 3,5 ha, en blanc sec seulement.",
   "<b>Saint-Joseph.</b> Un long ruban de 26 communes sur la rive droite, surtout sur granite, surtout en rouge de syrah, avec un peu de blanc de marsanne et roussanne.",
   "<b>Hermitage et Crozes-Hermitage.</b> Sur la rive gauche, autour de Tain : l’Hermitage, une seule colline tournée vers le sud, en rouge, en blanc et parfois en vin de paille ; Crozes, le plus grand cru du Nord, sur onze communes.",
   "<b>Cornas et Saint-Péray.</b> Tout au sud : Cornas, rouge 100 % syrah dans un amphithéâtre granitique ; Saint-Péray, blanc de marsanne et roussanne, tranquille ou effervescent."
  ],
  defend: "Au Rhône Nord, un seul cépage rouge, la syrah, et huit lieux qui la font parler différemment, de la colline unique de l’Hermitage au long ruban de Saint-Joseph.",
  client: "« Côte-Rôtie pour une syrah élégante et parfumée, Cornas pour une syrah pure, Condrieu pour découvrir le viognier en blanc. »",
  filRouge: "Plus au sud, comment Châteauneuf-du-Pape peut-il assembler jusqu’à dix-huit cépages ?",
  src: "fiches 415, 434 à 438 et 773 à 775 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Rhône Sud : les crus méridionaux",
  question: "Que partagent les crus du Sud, du châteauneuf-du-pape au tavel ?",
  fil: [
   "Au sud, le relief s’ouvre et le climat devient méditerranéen. Les crus y sont des assemblages menés par le grenache ; ils sont dix depuis la promotion de Laudun en 2024.",
   "<b>Châteauneuf-du-Pape.</b> Cinq communes du Vaucluse, du rouge et du blanc, et 18 cépages possibles sans minimum imposé : le grenache domine dans les faits, pas par la règle. Son nom rappelle le château bâti pour les papes d’Avignon, et ses sols forment une mosaïque où les galets ne sont pas seuls.",
   "<b>Au pied des Dentelles.</b> Gigondas, rouge de grenache autorisé en blanc depuis le millésime 2023, et Vacqueyras, en trois couleurs, partagent la crête calcaire des Dentelles de Montmirail.",
   "<b>Les crus récents.</b> Beaumes-de-Venise rouge (2005), Vinsobres (2006), Rasteau rouge (2010) et Cairanne (2016) ont quitté le rang de village ; Vinsobres admet aussi le blanc depuis 2026, et Cairanne demande au moins 40 % de grenache depuis octobre 2026.",
   "<b>Le Gard.</b> Tavel ne fait que du rosé, seul cru du Rhône dans ce cas ; Lirac, voisine, fait les trois couleurs ; Laudun, dixième cru du Sud depuis 2024, fait du rouge et du blanc.",
   "<b>Les vins doux.</b> Muscat de Beaumes-de-Venise et Rasteau sont des vins doux naturels, mutés à l’alcool pour garder le sucre du raisin."
  ],
  defend: "Les crus du Sud sont des assemblages à dominante de grenache, chacun avec son identité : Châteauneuf et ses 18 cépages, Tavel et son rosé, les Dentelles et leurs coteaux.",
  client: "« Châteauneuf, Gigondas, Vacqueyras : des rouges de grenache en assemblage, généreux. Et pour un rosé de cru, Tavel est le seul du Rhône entièrement voué au rosé. »",
  filRouge: "Sous les crus, comment se lit la grande famille des Côtes du Rhône ?",
  src: "fiches 416, 439 à 443, 776 à 781 et 184 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion ; Mille Vignes, géologie de Châteauneuf)"
 },
 {
  chapitre: "Côtes du Rhône, villages et appellations satellites",
  question: "Que garantit vraiment une étiquette de côtes-du-rhône, et comment monter en gamme sans passer aux crus ?",
  fil: [
   "Le côtes-du-rhône est la base de la pyramide, très vaste, et surtout produite au sud. Ses rouges et rosés du sud doivent compter du grenache et de la syrah ou du mourvèdre ; au nord de Montélimar, l’obligation de grenache disparaît, ce qui laisse la place à la syrah.",
   "<b>Les villages.</b> Côtes du Rhône Villages couvre 95 communes, avec plus de grenache, de syrah et de mourvèdre, et un rendement plus bas, 44 hl/ha contre 51. Les 21 noms géographiques, comme Sablet, Séguret, Visan ou Plan de Dieu, montent encore d’un cran, à 41 hl/ha.",
   "<b>La couronne.</b> Autour, sept appellations voisines : Ventoux, Luberon, Grignan-les-Adhémar, Costières de Nîmes, Duché d’Uzès et Côtes du Vivarais, pour des rouges de grenache et de syrah, et la petite Clairette de Bellegarde, un blanc de clairette seule.",
   "<b>Le Diois.</b> À l’écart, autour de Die, la Clairette de Die, mousseux blanc dont l’ancestrale est douce, légère et faite surtout de muscat, le Crémant de Die, sec, et deux AOC de vins tranquilles, Châtillon-en-Diois et Coteaux de Die."
  ],
  defend: "Entre le côtes-du-rhône et les crus, les villages et leurs noms géographiques offrent un vrai palier : moins de rendement, plus d’exigences d’encépagement.",
  client: "« Un côtes-du-rhône villages, surtout avec un nom de village, c’est déjà plus exigeant qu’un côtes-du-rhône simple : rendement plus bas et assemblage plus encadré. »",
  filRouge: "Plus au sud-ouest, comment s’organisent les appellations du Languedoc ?",
  src: "fiches 444 à 446, 782 à 790 et 689 du site (INAO, cahiers des charges ; Inter Rhône ; Oxford Companion ; WSET D3)"
 },
 {
  chapitre: "Val de Loire : panorama et appellations",
  question: "Comment un seul fleuve peut-il réunir des vins aussi différents qu’un muscadet, un quarts-de-chaume et un sancerre ?",
  fil: [
   "La Loire n’est pas un vignoble mais une suite de vignobles le long du fleuve, du Pays nantais à l’Atlantique jusqu’au Centre-Loire. En la remontant, le climat passe de maritime à continental, et la roche change de monde.",
   "<b>Deux mondes géologiques.</b> En aval, le Massif armoricain : gneiss, granite et gabbro au Pays nantais, schistes de l’Anjou noir. En amont, le Bassin parisien : la craie tendre du tuffeau à Saumur et en Touraine, où l’on creuse les caves et dont sont bâtis les châteaux ; puis les marnes, les calcaires et le silex de Sancerre et de Pouilly.",
   "<b>Trois familles de cépages.</b> Le melon fait le muscadet ; le chenin et le cabernet franc règnent sur l’Anjou, Saumur et la Touraine ; le sauvignon et le pinot noir sur le Centre-Loire. Autour, une diversité rare : côt, gamay, grolleau, pineau d’Aunis, romorantin.",
   "<b>Tous les styles.</b> Blancs très secs et liquoreux de tries, rosés secs ou tendres, rouges légers ou de garde, bulles de toutes méthodes : une variété que l’Oxford Companion juge sans égale en France.",
   "<b>Un fleuve de commerce.</b> Avant le chemin de fer, la Loire portait le vin vers Paris, les Flandres et l’Angleterre. Le phylloxéra a durement frappé, et Sancerre s’est replanté en sauvignon.",
   "<b>Aujourd’hui.</b> Une région de blancs et de rosés, où les bulles, menées par le crémant de Loire, portent la croissance de l’export."
  ],
  defend: "La Loire se comprend en remontant le fleuve : un climat de plus en plus continental, deux mondes géologiques et trois familles de cépages, pour une variété de styles exceptionnelle.",
  client: "« Muscadet à Nantes, chenin et cabernet franc en Anjou et en Touraine, sauvignon à Sancerre : la Loire, c’est la fraîcheur, du blanc sec au liquoreux et aux bulles. »",
  filRouge: "À l’embouchure, comment le muscadet s’est-il donné des crus ?",
  src: "fiches 409, 410 et 690 à 695 du site (WSET D3, Oxford Companion, InterLoire, Mille Vignes p. 137, 163 et 173)"
 },
 {
  chapitre: "Pays nantais",
  question: "Que signifient vraiment « muscadet », « sur lie » et « cru communal » sur une étiquette ?",
  fil: [
   "Autour de Nantes, près de l’embouchure, le climat est maritime et humide, et le sous-sol appartient au Massif armoricain : gneiss, granite, gabbro.",
   "<b>Un vin, pas un cépage.</b> Le muscadet vient du melon, seul cépage des trois appellations sous-régionales ; le Muscadet régional tolère un peu de chardonnay. Quatre AOC : Muscadet, Muscadet Sèvre et Maine, cœur du vignoble, Muscadet Coteaux de la Loire et Muscadet Côtes de Grandlieu.",
   "<b>Sur lie.</b> La mention exige que le vin reste sur ses lies fines jusqu’au printemps qui suit la récolte, puis soit mis en bouteille sans soutirage : il y gagne en rondeur.",
   "<b>Les crus communaux.</b> Clisson, Gorges, Le Pallet et quatre autres noms précisent l’origine dans le Sèvre et Maine, avec un rendement plus bas et un élevage sur lies bien plus long ; d’autres sont en cours de reconnaissance.",
   "<b>Le Gros Plant.</b> Autre blanc sec et vif, sur une aire voisine du Muscadet, il repose sur la folle blanche et peut aussi porter la mention sur lie.",
   "<b>Autour.</b> Les Coteaux d’Ancenis, en amont, font surtout des rouges et rosés de gamay et un blanc moelleux de pinot gris ; plus au sud, en Vendée, les Fiefs Vendéens portent toujours l’une de leurs cinq dénominations, de Brem à Vix."
  ],
  defend: "Le muscadet est un vin de melon, que l’élevage sur lies arrondit et que les crus communaux font monter en précision et en garde.",
  client: "« Le muscadet, c’est le vin ; le melon, c’est le cépage ; le sur lie, c’est un vin resté sur ses levures, plus rond. Et un cru communal, c’est un muscadet de village, gardé longtemps sur ses lies. »",
  filRouge: "En remontant vers Angers, comment l’Anjou passe-t-il du schiste au tuffeau, et du sec au liquoreux ?",
  src: "fiches 447, 448, 690, 691 et 868 à 872 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion ; Mille Vignes p. 137)"
 },
 {
  chapitre: "Anjou-Saumur",
  question: "Comment un même secteur peut-il produire un chenin sec sur schiste, un liquoreux de tries et un rouge de cabernet franc sur tuffeau ?",
  fil: [
   "L’Anjou-Saumur est la charnière de la Loire : à l’ouest, les schistes de l’Anjou noir, sur le Massif armoricain ; à l’est, autour de Saumur, la craie tendre du tuffeau. Le chenin et le cabernet franc y dominent.",
   "<b>Savennières.</b> Sur les schistes de la rive droite, au sud-ouest d’Angers, un chenin surtout sec ; deux lieux-dits ont leur propre AOC, Roche aux Moines et Coulée de Serrant, à très faible rendement.",
   "<b>Les liquoreux.</b> Coteaux du Layon, Chaume, Bonnezeaux, Quarts de Chaume : des chenins surmûris, récoltés par tries successives. Plus l’aire se resserre, plus le rendement baisse et l’alcool naturel minimal monte.",
   "<b>Saumur.</b> Sur le tuffeau, où l’on creuse aussi les caves : Saumur-Champigny, rouge de cabernet franc, et l’AOC Saumur, en blanc, rouge et bulles.",
   "<b>La gamme angevine.</b> Anjou rouge, Anjou-Villages et Anjou Brissac pour les rouges ; Cabernet d’Anjou et Rosé d’Anjou, rosés tendres qui gardent du sucre, et Rosé de Loire, sec ; Crémant de Loire et Saumur mousseux pour les bulles. L’Anjou-Coteaux de la Loire est un chenin moelleux, l’Aubance un liquoreux plus discret que le Layon.",
   "<b>Autour de Saumur.</b> Saumur Puy-Notre-Dame, dénomination de rouge de cabernet franc, et Coteaux de Saumur, chenin doux ; l’ancien Cabernet de Saumur est aujourd’hui un Saumur rosé."
  ],
  defend: "L’Anjou-Saumur rassemble presque tous les styles de la Loire autour de deux cépages, le chenin et le cabernet franc, sur deux roches, le schiste et le tuffeau.",
  client: "« En Anjou, le chenin peut être sec, à Savennières, ou liquoreux, dans le Layon. Et attention : un Cabernet ou un Rosé d’Anjou n’est pas un rosé sec. »",
  filRouge: "Juste en amont, comment la Touraine joue-t-elle avec le chenin de Vouvray et le cabernet franc de Chinon ?",
  src: "fiches 449 à 452, 690, 691 et 873 à 881 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion ; Mille Vignes p. 163)"
 },
 {
  chapitre: "Touraine",
  question: "Que trouve-t-on derrière le nom de Touraine, entre le vouvray et le chinon ?",
  fil: [
   "La Touraine, autour de Tours, a un climat plus continental que l’Anjou, et ses coteaux reposent souvent sur le tuffeau, où l’on creuse les caves.",
   "<b>Le chenin.</b> Vouvray et Montlouis-sur-Loire, deux voisins en amont de Tours : des chenins tranquilles, mousseux ou pétillants, du sec au doux ; on lit la mention sur l’étiquette.",
   "<b>Le cabernet franc.</b> Chinon, Bourgueil et Saint-Nicolas-de-Bourgueil font des rouges de cabernet franc, avec un peu de cabernet sauvignon possible ; seul Chinon ajoute un blanc de chenin. Les sols vont du tuffeau aux graviers et aux sables.",
   "<b>L’AOC Touraine.</b> Sur 138 communes, du sauvignon en blanc, du côt et du cabernet franc en rouge, du gamay, des rosés et des bulles ; cinq dénominations précisent l’origine, comme Amboise ou Chenonceaux.",
   "<b>Autour.</b> Cheverny assemble, Cour-Cheverny garde le romorantin seul ; Valençay et le Haut-Poitou misent sur le sauvignon en blanc.",
   "<b>Au nord, le Loir.</b> Jasnières, chenin sur un seul coteau, les Coteaux du Loir et les Coteaux du Vendômois, où le pineau d’Aunis donne rouges poivrés et vins gris."
  ],
  defend: "La Touraine est la Loire des contrastes : le chenin de Vouvray et de Montlouis, le cabernet franc de Chinon et de Bourgueil, et le sauvignon de l’AOC Touraine.",
  client: "« Un vouvray peut être sec ou moelleux : regardez la mention. Pour un rouge, Chinon et Bourgueil, c’est le cabernet franc de Touraine. »",
  filRouge: "Plus en amont encore, pourquoi le sauvignon de Sancerre et de Pouilly a-t-il conquis le monde ?",
  src: "fiches 453 à 455, 690, 692, 882 à 884, 886 à 890 et 892 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Centre-Loire",
  question: "Qu’est-ce qui fait la différence entre deux sauvignons de Sancerre, ou entre Sancerre et Pouilly ?",
  fil: [
   "Le Centre-Loire a un climat continental et sa propre interprofession. Le sauvignon blanc y règne, avec le pinot noir pour les rouges et les rosés.",
   "<b>Sancerre.</b> Quatorze communes du Cher ; un blanc de sauvignon seul, un rouge et un rosé de pinot noir seul. Le terroir se lit en trois sols : terres blanches (marnes kimméridgiennes), caillottes (calcaires) et silex. Historiquement planté de pinot noir, Sancerre s’est replanté en sauvignon après le phylloxéra.",
   "<b>Les deux Pouilly.</b> Autour de Pouilly-sur-Loire, dans la Nièvre : le Pouilly-Fumé, de sauvignon seul, sur les mêmes familles de sols, et le Pouilly-sur-Loire, de chasselas, plus rare. À ne pas confondre avec le Pouilly-Fuissé mâconnais.",
   "<b>Les voisins.</b> Menetou-Salon, Quincy, Reuilly, Coteaux du Giennois et Châteaumeillant jouent chacun leur carte : uniquement du blanc de sauvignon à Quincy, gamay à Gien et à Châteaumeillant.",
   "<b>Plus au sud.</b> Le long de l’Allier et de la Loire amont, le gamay domine : Saint-Pourçain, où le tressallier entre dans les blancs, Côtes d’Auvergne et ses cinq dénominations autour de Clermont-Ferrand, Côte Roannaise et Côtes du Forez sur le granite."
  ],
  defend: "Le Centre-Loire est la terre du sauvignon, et à Sancerre comme à Pouilly le sol, terres blanches, caillottes ou silex, change le vin d’une même colline.",
  client: "« Sancerre n’est pas qu’un blanc : il existe aussi en rouge et en rosé de pinot noir. Et le Pouilly-Fumé, c’est du sauvignon de Loire, rien à voir avec le Pouilly-Fuissé de Bourgogne. »",
  filRouge: "Plus au sud-ouest, comment Bordeaux, à l’inverse de la Loire, a-t-il fait de l’assemblage sa signature ?",
  src: "fiches 456 à 458, 690, 694 et 893 à 900 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Champagne : panorama et appellations",
  question: "Comment un vignoble trop frais pour de grands vins tranquilles est-il devenu celui du plus célèbre des effervescents ?",
  fil: [
   "La Champagne est un vignoble de limite nord, juste au sud du 50e parallèle. Le raisin y mûrit mal pour un vin tranquille, mais il donne des vins de base légers et très acides, exactement ce que demande la prise de mousse en bouteille.",
   "<b>La craie.</b> L’essentiel du vignoble repose sur une craie poreuse, ancien fond de mer, qui stocke l’eau et la rend en été. Sous Reims et Épernay, elle a été creusée en crayères et en caves. Tout au sud, la Côte des Bar, dans l’Aube, est sur les marnes kimméridgiennes, comme Chablis.",
   "<b>Trois cépages, quatre grands secteurs.</b> Pinot noir, meunier et chardonnay se partagent le vignoble. La Montagne de Reims, la Vallée de la Marne, la Côte des Blancs et la Côte des Bar ont chacune leur cépage de prédilection.",
   "<b>Un classement par village.</b> Une seule appellation pour les bulles, et 17 communes grands crus, 42 premiers crus, héritées de l’échelle des crus qui fixait autrefois le prix du raisin. Le rendement est réglé chaque année selon la récolte et le marché.",
   "<b>L’assemblage.</b> Les années sont irrégulières : on assemble villages, cépages et vins de réserve pour un style constant. Le millésimé, lui, exprime une seule année.",
   "<b>Vignerons et maisons.</b> Les vignerons possèdent environ 90 % des vignes, les maisons vendent la plupart des bouteilles. Les ventes reculent depuis 2023, et la Belgique reste l’un des cinq premiers marchés d’export."
  ],
  defend: "La Champagne a fait de ses handicaps des atouts : climat frais, craie, années irrégulières, compensés par l’assemblage et une organisation collective.",
  client: "« Le champagne, c’est un vignoble frais sur la craie, où l’on assemble villages, cépages et années. Une maison vous donne un style constant ; un vigneron, avec RM sur l’étiquette, la signature de ses vignes. »",
  filRouge: "Entre Montagne de Reims, Vallée de la Marne, Côte des Blancs et Côte des Bar, qu’est-ce qui change d’un secteur à l’autre ?",
  src: "fiches 403, 404 et 696 à 700 du site (WSET D4, Oxford Companion, INAO, Comité Champagne via la presse)"
 },
 {
  chapitre: "Champagne : secteurs et villages",
  question: "Pourquoi un blanc de blancs de la Côte des Blancs ne ressemble-t-il pas à un champagne de la Côte des Bar ?",
  fil: [
   "Chaque grand secteur associe un sol et un cépage de prédilection, et les maisons puisent dans tous pour leurs assemblages.",
   "<b>La Montagne de Reims.</b> Un massif boisé autour duquel les vignes forment un croissant. Le pinot noir domine, avec des grands crus comme Verzenay, Verzy, Mailly-Champagne, Bouzy ou Ambonnay ; à Bouzy et Ambonnay, une partie du pinot noir devient aussi du rouge tranquille.",
   "<b>La Vallée de la Marne.</b> Le plus vaste secteur, pays du meunier, sur des argiles, des sables et du calcaire plutôt que sur la craie pure ; le pinot noir domine vers Aÿ, grand cru.",
   "<b>La Côte des Blancs.</b> De Chouilly à Vertus, le chardonnay presque seul sur une craie qui affleure : six grands crus, de Chouilly au Mesnil-sur-Oger, et des blancs de blancs tendus.",
   "<b>La Côte des Bar.</b> Dans l’Aube, sur des marnes et calcaires kimméridgiens, le pinot noir à plus de 80 % : des champagnes ronds et fruités, et le rosé tranquille des Riceys."
  ],
  defend: "En Champagne, le secteur dit le cépage et le sol : pinot noir sur la Montagne et dans l’Aube, meunier dans la Marne, chardonnay sur la craie de la Côte des Blancs.",
  client: "« Pour un champagne fin et tendu, cherchez un blanc de blancs de la Côte des Blancs ; pour plus de rondeur et de fruit, un pinot noir de l’Aube ; pour plus d’ampleur et de structure, un pinot noir de la Montagne de Reims. »",
  filRouge: "Une fois les raisins cueillis, comment passe-t-on du pressoir à la bouteille de champagne ?",
  src: "fiches 459 à 462, 466 et 697 du site (INAO, cahier des charges ; WSET D4 ; Oxford Companion)"
 },
 {
  chapitre: "Champagne : élaboration et styles",
  question: "Que révèlent vraiment les mots « brut », « blanc de blancs », « millésimé » ou « RM » sur une étiquette ?",
  fil: [
   "Le champagne se fait selon des règles chiffrées, du pressoir à la bouteille : c’est ce qui le distingue, plus encore que la seconde fermentation en bouteille, partagée avec d’autres effervescents.",
   "<b>Le pressurage.</b> Des grappes entières, pressées par unités de 4 000 kg, le marc, avec un volume de jus limité et séparé en cuvée et en taille.",
   "<b>L’assemblage et la prise de mousse.</b> Les vins clairs de plusieurs crus, cépages et années, vins de réserve compris, sont assemblés ; après le tirage, il reste au moins 12 mois en bouteille avant le dégorgement.",
   "<b>Les styles.</b> Blanc de blancs, de raisins blancs ; blanc de noirs, de raisins noirs ; rosé d’assemblage ou de macération, l’assemblage dominant selon la presse spécialisée. Le non millésimé reconduit le style de la maison grâce aux réserves ; le millésimé exprime une année.",
   "<b>L’étiquette.</b> Le dosage, du brut nature au doux, dit le sucre ajouté ; le code NM, RM, CM ou RC dit qui a élaboré le vin.",
   "<b>Sans bulles.</b> Les coteaux champenois et le rosé des Riceys sont des vins tranquilles, rares, de la même aire."
  ],
  defend: "Le champagne est un vin de règles et d’assemblage : pressurage encadré, vins de réserve, longue maturation sur lies, et une étiquette qui dit le dosage et le producteur.",
  client: "« Brut, c’est peu sucré ; brut nature, pas de sucre ajouté. Blanc de blancs, c’est du chardonnay en pratique ; RM, c’est un vigneron qui fait son propre champagne. »",
  filRouge: "Et en Alsace, que dit le nom d’un vin ?",
  src: "fiches 404, 463 à 466, 583 et 699 du site (INAO, cahier des charges ; WSET D4 ; Oxford Companion)"
 },
 {
  chapitre: "Alsace : panorama et appellations",
  question: "Comment un vignoble aussi au nord fait-il des blancs aussi mûrs, et pourquoi ses vins portent-ils le nom d’un cépage ?",
  fil: [
   "L’Alsace est un vignoble septentrional, mais abrité : les Vosges arrêtent les pluies venues de l’ouest, et la plaine ne reçoit qu’environ 600 mm par an. Étés chauds, longue saison, fraîcheur gardée.",
   "<b>Le relief commande.</b> Les grands vins viennent des coteaux au pied des Vosges ; la plaine, fertile, donne des vins plus simples. Sous les coteaux, une mosaïque de roches : granite, gneiss, grès, schistes, roches volcaniques, marnes et calcaires.",
   "<b>Une histoire entre deux pays.</b> Française au XVIIe siècle, allemande en 1871, la région subit l’oïdium et le phylloxéra et replante des hybrides en plaine. Revenue à la France, elle reconquiert ses coteaux surtout à partir des années 1960.",
   "<b>Des vins de cépage.</b> Presque tous blancs : riesling, gewurztraminer, pinot gris et muscat, les « nobles », avec le pinot blanc, le sylvaner et le pinot noir. Le cépage est sur l’étiquette, et depuis le millésime 2021, la sucrosité aussi.",
   "<b>Trois appellations.</b> Alsace, avec ses dénominations géographiques et ses lieux-dits, alsace grand cru et crémant d’alsace. La bouteille flûte signe la région.",
   "<b>Commune, couleur, assemblage.</b> Treize dénominations communales précisent l’origine, avec des rendements plus bas : la plupart sont blanches, Ottrott, Rodern et Saint-Hippolyte sont rouges. Les rouges et rosés sont de pinot noir ; l’edelzwicker, lui, se passe de nom de cépage.",
   "<b>Le marché.</b> Coopératives et maisons familiales pèsent lourd ; selon les chiffres du CIVA (2021), environ sept bouteilles sur dix se vendent en France, et la Belgique est le premier client à l’export."
  ],
  defend: "L’Alsace, c’est un vignoble du nord rendu sec et lumineux par les Vosges, qui parle cépage plutôt que lieu, et dont l’étiquette dit désormais aussi la douceur.",
  client: "« En Alsace, regardez d’abord le cépage : riesling tendu, gewurztraminer parfumé, pinot gris ample. Puis la mention sec, demi-sec, moelleux ou doux : elle vous évite la surprise. »",
  filRouge: "Et quand un lieu-dit précis s’ajoute au cépage, que promet la mention « grand cru » ?",
  src: "fiches 405, 470, 471, 701 à 705, 859, 861 et 862 du site (WSET D3, Oxford Companion, INAO, Vitisphere, CIVA via le WSET)"
 },
 {
  chapitre: "Alsace : grands crus et mentions",
  question: "Que garantissent vraiment « grand cru », « vendanges tardives » ou « sélection de grains nobles » sur une bouteille d’Alsace ?",
  fil: [
   "Deux précisions peuvent s’ajouter : le lieu, avec les grands crus, et la maturité, avec les mentions vendanges tardives et sélection de grains nobles, possibles en alsace comme en grand cru.",
   "<b>51 grands crus.</b> Chacun est une appellation à part depuis 2011, délimitée sur un lieu-dit. Les cépages nobles y règnent ; le pinot noir n’est admis que sur le Hengst, le Kirchberg de Barr et le Vorbourg, et le Zotzenberg accepte le sylvaner.",
   "<b>De 1 à 51.</b> Le Schlossberg seul en 1975, 25 crus de plus en 1983, 24 en 1992, le Kaefferkopf en 2007 : 14 dans le Bas-Rhin, autour de Barr et d’Andlau, 37 dans le Haut-Rhin, de Bergheim à Thann.",
   "<b>Un règlement commun.</b> Récolte à la main, 50 hl/ha de base en blanc, enrichissement bridé (interdit pour les rouges), élevage au moins jusqu’au 1er novembre de l’année suivante.",
   "<b>Une roche par cru.</b> Granite au Brand, grès vosgien au Kessler, roches volcaniques et sédimentaires au Rangen, dolomies au Geisberg : la mosaïque alsacienne se lit d’un grand cru à l’autre.",
   "<b>Vendanges tardives et grains nobles.</b> Des raisins de cépages nobles, cueillis surmûris, sans enrichissement ; la sélection de grains nobles exige une richesse en sucre encore plus élevée à la vendange. La mention dit la richesse du raisin, pas le sucre du vin.",
   "<b>Le crémant.</b> À côté, le crémant d’alsace, effervescent de seconde fermentation en bouteille, souvent à base de pinot blanc."
  ],
  defend: "En Alsace, « grand cru » désigne un lieu et une roche, pas un style ; VT et SGN désignent une maturité, pas un lieu.",
  client: "« Grand cru, c’est un coteau précis, avec son sol : un riesling du Brand, sur granite, ne ressemble pas à celui du Kessler, sur grès. Vendanges tardives, c’est un raisin cueilli très mûr : souvent un vin plus riche, parfois doux. »",
  filRouge: "Et en Bourgogne, où l’on nomme le lieu plutôt que le cépage, comment s’organise la hiérarchie ?",
  src: "fiches 405, 467 à 471, 702 et 864 à 867 du site (INAO, cahiers des charges ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Beaujolais : panorama et appellations",
  question: "Un seul cépage, le gamay : comment le Beaujolais tire-t-il de lui à la fois le nouveau du mois de novembre et des crus qui se gardent ?",
  fil: [
   "Le Beaujolais s’étire entre la plaine de la Saône et les monts du Beaujolais, qui l’abritent des vents d’ouest. Un climat de transition, des coteaux tournés vers l’est et le sud, et une menace : le gel de printemps sur un gamay qui débourre tôt.",
   "<b>Deux sous-sols.</b> Au nord, des roches anciennes, granites, porphyres et schistes, aux sols acides et drainants : le domaine des crus et des villages. Au sud, des calcaires, ceux des pierres dorées, aux sols plus lourds : surtout l’AOC beaujolais.",
   "<b>Une vigne basse, une vendange entière.</b> Le gobelet tient la vigne sur les pentes ; la plupart des raisins sont cueillis à la main, car la vinification la plus courante veut des grappes entières.",
   "<b>Un curseur de vinification.</b> La semi-carbonique donne fruit et souplesse ; une cuvaison plus longue, ou une vinification « à la bourguignonne » avec égrappage et fût, donne des crus plus structurés.",
   "<b>Une histoire en quatre temps.</b> Le gamay, banni de Bourgogne en 1395, reste roi au sud ; les vins partent à Lyon et à Paris ; le nouveau, autorisé en 1951, conquiert le monde ; puis vient la crise de surproduction du début des années 2000.",
   "<b>Aujourd’hui.</b> Environ 40 % du vignoble a disparu en vingt ans ; le nouveau ne pèse plus qu’environ un quart de la production, et les crus séduisent comme une alternative moins chère à la Bourgogne."
  ],
  defend: "Le Beaujolais n’est pas un vin, mais un éventail : le même gamay donne un vin de fête ou un vin de garde selon la roche, la cuvaison et l’ambition du vigneron.",
  client: "« Pour tous les jours, un beaujolais ou un villages, servi frais. Pour plus de matière, un cru. Le nouveau, c’est la fête de la récolte, le troisième jeudi de novembre, et seulement un quart de la production. »",
  filRouge: "Parmi les dix crus, comment choisir entre un beaujolais fin et floral et un beaujolais de garde ?",
  src: "fiches 406, 474, 475 et 706 à 711 du site (cahier des charges AOC Beaujolais, WSET D3, Oxford Companion, ministère de l’Agriculture, Decanter, Réussir)"
 },
 {
  chapitre: "Beaujolais : les dix crus",
  question: "Parmi les dix crus, comment choisir entre un beaujolais fin et floral et un beaujolais de garde ?",
  fil: [
   "Les dix crus sont tous rouges, tous de gamay, tous dans la moitié nord du vignoble, et chacun est une appellation à part.",
   "<b>Au nord, le granite.</b> Saint-Amour, Juliénas, Chénas, Moulin-à-Vent et Fleurie reposent surtout sur un granite altéré en sable ; Saint-Amour est en Saône-et-Loire, et la commune de Chénas est partagée entre Chénas et Moulin-à-Vent. Fleurie, sur granite rose, passe pour fin et floral ; Moulin-à-Vent, sur arènes roses, est le plus charpenté et le plus apte à la garde.",
   "<b>Au sud, plus de variété.</b> Chiroubles, sur des sables maigres, est léger et floral ; Morgon, sur des schistes riches en manganèse comme ceux de la colline du Py, est plein et de garde ; Régnié est le dernier cru, reconnu en 1988 ; Brouilly et Côte de Brouilly entourent le mont Brouilly et sa « pierre bleue ».",
   "<b>Autour des crus, le socle.</b> Beaujolais-Villages, mention du même cahier des charges que le beaujolais, couvre 38 communes du nord sur sols acides ; 30 communes peuvent aussi mettre leur nom à la suite de « Beaujolais » ; l’AOC beaujolais couvre les 88 communes, jusqu’aux calcaires du sud des Pierres Dorées, en rouge, rosé et blanc.",
   "<b>Le nouveau à part.</b> Vin de l’année en beaujolais ou beaujolais-villages, il sort le troisième jeudi de novembre ; les crus attendent le 1er février."
  ],
  defend: "Choisir un cru, c’est choisir une roche et un style : sables granitiques pour la finesse, schistes de Morgon ou arènes riches en fer et en manganèse de Moulin-à-Vent pour la garde.",
  client: "« Pour la finesse, un fleurie ou un chiroubles ; pour un vin qui tient la table et la cave, un morgon ou un moulin-à-vent. »",
  filRouge: "Plus à l’est, au pied d’un autre massif, comment le Jura fait-il des vins que l’on ne trouve nulle part ailleurs ?",
  src: "fiches 406, 472 à 475 et 791 à 799 du site (INAO, cahiers des charges ; BRGM ; Inter Beaujolais)"
 },
 {
  chapitre: "Jura : panorama et appellations",
  question: "Plus à l’est, au pied d’un autre massif, comment le Jura fait-il des vins que l’on ne trouve nulle part ailleurs ?",
  fil: [
   "Le vignoble jurassien est une bande étroite et discontinue, large de quelques kilomètres, vers 250 à 450 m d’altitude : c’est le Revermont, au pied du premier plateau calcaire du massif, tourné vers la plaine de la Bresse.",
   "<b>Un climat frais et humide.</b> Plus de 1000 mm de pluie par an, nettement plus qu’en Bourgogne, des hivers froids, mais des automnes relativement secs.",
   "<b>Des marnes sous un rebord calcaire.</b> Les sols sont des marnes et des argiles du Trias et du Lias, sous un rebord de calcaire dur, avec des éboulis calcaires sur les coteaux.",
   "<b>Cinq cépages.</b> Chardonnay et savagnin pour les blancs ; pinot noir, poulsard et trousseau pour les rouges et les rosés.",
   "<b>Deux vins singuliers.</b> Le vin jaune, de savagnin, reste en fût sans ouillage jusqu’au 15 décembre de la 6e année suivant la récolte, dont au moins 60 mois sous voile, et se vend en clavelin de 62 cl à partir du 1er janvier de la 7e année. Le vin de paille vient de raisins séchés hors souche au moins six semaines, pressés très riches en sucre.",
   "<b>Une poignée d’appellations.</b> Arbois, L’Étoile, Château-Chalon, Côtes du Jura et Crémant du Jura, auxquelles s’ajoute le macvin."
  ],
  defend: "Le Jura est un petit vignoble frais, sur marnes, qui doit sa singularité à deux façons de faire : laisser le savagnin vieillir sous voile pour le vin jaune, sécher les raisins pour le vin de paille.",
  client: "« Le Jura, c’est le pays du vin jaune : du savagnin resté plus de six ans en fût, sous un voile de levures. Mais on y fait aussi des blancs frais, des rouges légers et un crémant. »",
  filRouge: "Six appellations, deux mentions : comment s’y retrouver entre arbois, côtes-du-jura, château-chalon et vin jaune ?",
  src: "fiches 407 et 813 du site (cahiers des charges des AOC du Jura, BO-agri ; WSET D3 ; Oxford Companion ; World Atlas of Wine)"
 },
 {
  chapitre: "Jura : appellations et vin jaune",
  question: "Six appellations, deux mentions : comment s’y retrouver entre arbois, côtes-du-jura, château-chalon et vin jaune ?",
  fil: [
   "Le Jura compte six AOC viticoles, qu’on range en trois étages.",
   "<b>L’appellation régionale.</b> Les Côtes du Jura couvrent tout le vignoble, une bande d’environ 80 km de Saint-Amour au nord de Salins-les-Bains, en blanc, rouge et rosé, sans dénomination complémentaire.",
   "<b>Trois appellations locales.</b> Arbois, au nord, reconnue en 1936, fait blancs, rouges, rosés, vin jaune et vin de paille ; la mention Pupillin y est réservée aux vins d’une seule commune, aux marnes très pentues favorables au poulsard. L’Étoile, de quatre communes, ne fait que des blancs. Château-Chalon, de quatre communes aussi, ne fait que du vin jaune.",
   "<b>Deux spécialités sur toute l’aire.</b> Le crémant du Jura, reconnu en 1995, est le seul mousseux d’appellation. Le macvin du Jura est un vin de liqueur : un moût muté pendant les vendanges avec de l’eau-de-vie de marc de la même exploitation, puis élevé au moins 10 mois sous bois.",
   "<b>Des mentions, pas des appellations.</b> Vin jaune et vin de paille s’ajoutent au nom d’une AOC. Le vin jaune existe en Arbois, Côtes du Jura, L’Étoile et Château-Chalon ; le vin de paille en Arbois, Côtes du Jura et L’Étoile, pas à Château-Chalon.",
   "<b>Deux voies pour les blancs.</b> En fût ouillé ou en cuve, le blanc reste frais et fruité ; en fût non rempli, un voile peut se former et le style devient oxydatif. Côté rouges, le poulsard donne un vin très pâle aux tanins faibles, le trousseau et le pinot noir des vins plus structurés."
  ],
  defend: "Au Jura, le nom de l’appellation dit le lieu, la mention dit le style : un « arbois vin jaune » et un « château-chalon » sont tous deux des vins jaunes, mais seul Château-Chalon n’en fait pas d’autre.",
  client: "« Château-Chalon, c’est uniquement du vin jaune. Un arbois ou un côtes-du-jura peut être un blanc frais, un blanc sous voile, un rouge léger, ou un vin jaune : regardez l’étiquette. »",
  filRouge: "Plus au sud, au pied des Alpes, comment la Savoie fait-elle d’îlots de vigne une région à part ?",
  src: "fiches 492, 493, 814 à 817, 819 et 821 du site (cahiers des charges des AOC du Jura, BO-agri ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Savoie : panorama et appellations",
  question: "Plus au sud, au pied des Alpes, comment la Savoie fait-elle d’îlots de vigne une région à part ?",
  fil: [
   "La Savoie ne repose que sur deux grandes appellations, mais elle les découpe finement : c’est le cépage, plus que le lieu, qui donne la clé de lecture.",
   "<b>Le Vin de Savoie.</b> Il peut ajouter l’une de ses 16 dénominations géographiques, d’Abymes à Saint-Jeoire-Prieuré, et chacune fixe ses cépages ; Crépy, autrefois appellation distincte, en fait désormais partie.",
   "<b>La Roussette de Savoie.</b> Un blanc tranquille d’altesse, la « roussette », avec quatre dénominations : Frangy, Marestel, Monterminod et Monthoux.",
   "<b>Une carte par cépage.</b> La jacquère à Abymes, Apremont, Cruet, Montmélian et Saint-Jeoire-Prieuré ; le chasselas autour du Léman ; le gringet à Ayze ; la mondeuse noire seule à Arbin et Saint-Jean-de-la-Porte ; la roussanne seule à Chignin-Bergeron, où elle s’appelle « bergeron ».",
   "<b>Des blancs vifs.</b> Jacquère et chasselas donnent des blancs légers, floraux et fruités, souvent perlants dans leur jeunesse lorsqu’ils restent sur lies fines.",
   "<b>Des blancs de garde et des rouges.</b> L’altesse et la roussanne donnent des blancs plus amples, aptes à vieillir. En rouge, la mondeuse noire est poivrée, colorée et structurée ; gamay et pinot noir sont souples, peu tanniques ; le persan, rare, donne des vins sombres et tanniques."
  ],
  defend: "En Savoie, le nom ajouté à l’appellation dit presque toujours le cépage : apprendre les dénominations, c’est apprendre qui de la jacquère, du chasselas, de l’altesse, de la roussanne ou de la mondeuse est dans le verre.",
  client: "« Pour un blanc vif à l’apéritif, une jacquère d’Apremont ou un chasselas du Léman ; pour un blanc qui se garde, une roussette ou un chignin-bergeron ; pour un rouge poivré, une mondeuse. »",
  filRouge: "Seize dénominations, une roussette, un crémant, un Seyssel et un Bugey : comment lire une étiquette savoyarde ?",
  src: "fiches 408 et 823 du site (cahiers des charges AOC Vin de Savoie et Roussette de Savoie, BO-agri ; Oxford Companion)"
 },
 {
  chapitre: "Savoie : crus et appellations",
  question: "Seize dénominations, une roussette, un crémant, un Seyssel et un Bugey : comment lire une étiquette savoyarde ?",
  fil: [
   "L’AOC Vin de Savoie, reconnue en 1973, peut ajouter une dénomination ; les seuils de cépage s’entendent pour l’encépagement de l’exploitation, non pour chaque bouteille.",
   "<b>Le Léman et Ayze.</b> Crépy, Marignan, Marin et Ripaille font des blancs de chasselas, au moins 80 % de l’exploitation. Ayze, dans la vallée de l’Arve, mise sur le gringet, en blanc tranquille et en mousseux : le lac appelle le chasselas, l’Arve le gringet.",
   "<b>La jacquère.</b> Abymes, Apremont, Cruet, Montmélian et Saint-Jeoire-Prieuré se distinguent moins par le cépage que par l’aire et le sol : Apremont et les Abymes reposent sur le chaos de l’éboulement du Granier, en 1248.",
   "<b>Les rouges et le Chignin-Bergeron.</b> Arbin et Saint-Jean-de-la-Porte sont des rouges de mondeuse seule ; Chautagne, Chignin et Jongieux font du rouge (gamay, mondeuse, pinot noir) et du blanc de jacquère ; Chignin-Bergeron est un blanc de roussanne seule.",
   "<b>La Roussette de Savoie.</b> Altesse seule ; ses quatre dénominations, Frangy, Marestel, Monterminod et Monthoux, demandent un rendement plus bas et un degré naturel plus élevé que l’appellation générale.",
   "<b>Les bulles.</b> Le crémant de Savoie n’est pas une AOC à part mais une indication du Vin de Savoie : au moins 40 % de jacquère, vendange manuelle, 9 mois sur lies au moins. Seyssel, trois communes de part et d’autre du Rhône, fait un tranquille d’altesse ou de molette et un mousseux dominé par la molette.",
   "<b>Le Bugey à part.</b> Dans l’Ain, il a ses propres AOC, Bugey et Roussette du Bugey ; Cerdon, Manicle et Montagnieu y sont des dénominations du Bugey, non du Vin de Savoie."
  ],
  defend: "Une étiquette savoyarde se lit en deux temps : l’appellation (Vin de Savoie, Roussette, Seyssel, Bugey), puis la dénomination, qui dit le lieu et presque toujours le cépage.",
  client: "« Apremont, c’est de la jacquère ; Crépy, du chasselas ; Arbin, de la mondeuse ; Chignin-Bergeron, de la roussanne. Et pour les bulles : un crémant de Savoie, un Seyssel ou, côté Ain, un Cerdon rosé. »",
  filRouge: "Comment un seul fleuve peut-il réunir des vins aussi différents qu’un muscadet, un quarts-de-chaume et un sancerre ?",
  src: "fiches 494, 495 et 824 à 829 du site (cahiers des charges AOC Vin de Savoie, Roussette de Savoie et Seyssel, BO-agri ; Oxford Companion ; Biasini et al., IVES)"
 },
 {
  chapitre: "Languedoc : panorama et appellations",
  question: "Plus au sud-ouest, comment s’organisent les appellations du Languedoc ?",
  fil: [
   "Le Languedoc dessine un arc d’environ 200 km le long du golfe du Lion, de Nîmes à la frontière espagnole, adossé aux Cévennes, au Larzac, à l’Espinouse, à la Montagne Noire et aux Corbières : un amphithéâtre ouvert sur la Méditerranée. Le climat est méditerranéen, avec des étés chauds et secs et 400 à 900 mm de pluie selon les secteurs, tombant en averses, surtout à l’automne. Le mistral souffle sur l’est, le cers et la tramontane sur l’ouest, et le vent marin, humide, vient de la mer ; à l’extrême ouest, Limoux et la Malepère subissent des influences atlantiques.",
   "<b>Une mosaïque de sols.</b> Une coupe va de la plaine littorale aux piémonts et aux plateaux, puis aux montagnes (fiche 713) : alluvions près de la mer, calcaires au milieu, schistes au nord-ouest, comme à Faugères. Partout, des sols pauvres, caillouteux et bien drainés, qui limitent les rendements.",
   "<b>Des assemblages avant tout.</b> En AOC Languedoc, les rouges sont des assemblages d’au moins deux cépages dont grenache, mourvèdre, syrah (et lledoner pelut) forment le socle, sans qu’aucun dépasse 80 % du vin : un 100 % carignan part donc en IGP ou en Vin de France. Les blancs s’appuient sur huit cépages principaux, dont le piquepoul blanc. L’IGP Pays d’Oc, elle, mise au contraire sur le vin de cépage (fiche 714).",
   "<b>Une histoire de masse, puis de qualité.</b> Rome fonde Narbonne en 118 av. J.-C., les moines relancent la vigne, la plaine se couvre d’aramon, le phylloxéra, identifié en 1868, détruit le vignoble et la surproduction mène à la révolte de 1907. Les appellations arrivent par étapes (Frontignan 1936, Blanquette de Limoux 1938, Fitou 1948, Coteaux du Languedoc 1985), puis le vin de pays d’Oc, devenu IGP en 2009 (fiche 716).",
   "<b>Une pyramide qui bouge.</b> L’AOC régionale Languedoc, puis des appellations plus précises (Pic Saint-Loup, Terrasses du Larzac, Saint-Chinian, Corbières, Limoux, Picpoul de Pinet…), et au-dessous des AOC l’IGP Pays d’Oc, la plus grande IGP régionale de France. Depuis 2026, l’AOC Languedoc ne compte plus que neuf dénominations complémentaires : Grés de Montpellier et Montpeyroux sont devenues des AOC à part entière. Pas de nombre de crus à réciter par cœur : on date toujours l’information (fiche 417).",
   "<b>Le marché.</b> En Occitanie, la récolte 2022 se partage en volume entre environ 69 % d’IGP, 18 % d’AOP et 13 % de vins sans IG ; l’Occitanie est aussi la première région viticole bio de France. Le Languedoc garde l’image de la région au meilleur rapport qualité-prix de France et attire des investisseurs grâce à des terres relativement peu chères et de vieilles vignes (fiche 717)."
  ],
  defend: "Le Languedoc est un amphithéâtre de sols et de vents où l’on assemble plus qu’on ne choisit un cépage, avec une pyramide d’appellations qu’il faut toujours dater.",
  client: "« Pour un vin de cépage simple à lire, une IGP Pays d’Oc ; pour un lieu précis, une appellation comme Pic Saint-Loup, Saint-Chinian, Corbières ou Limoux. Et la liste bouge encore : Grés de Montpellier et Montpeyroux viennent de devenir des appellations à part entière. »",
  filRouge: "Faugères, Pic Saint-Loup, Corbières, Limoux : comment s’y retrouver parmi les crus et les dénominations du Languedoc ?",
  src: "fiches 417, 476 à 480 et 712 à 717 du site (cahiers des charges, INAO ; WSET D3 ; Oxford Companion ; Agreste ; Agence Bio)"
 },
 {
  chapitre: "Languedoc : crus et dénominations",
  question: "Faugères, Pic Saint-Loup, Corbières, Limoux : comment s’y retrouver parmi les crus et les dénominations du Languedoc ?",
  fil: [
   "Plutôt qu’une liste à réciter, les appellations du Languedoc se retiennent par leurs lieux : chacune s’accroche à un paysage, une roche ou un cépage. Plusieurs étaient des dénominations de Coteaux du Languedoc avant de devenir des AOC à part entière : Picpoul de Pinet (décret du 23 septembre 2013), Terrasses du Larzac (décret du 17 octobre 2014) et Pic Saint-Loup (2017).",
   "<b>Au nord de l’Hérault, la syrah et le Larzac.</b> Le Pic Saint-Loup couvre 17 communes et fait du rouge et du rosé, avec au moins 50 % de syrah dans le rouge. Les Terrasses du Larzac, sur 32 communes, ne font que du rouge, assemblé à trois cépages au moins sans qu’aucun dépasse 70 %.",
   "<b>Les schistes de l’arrière-pays de Béziers.</b> Faugères tient en sept communes sur des sols exclusivement schisteux, en rouge, rosé et blanc. Saint-Chinian, plus vaste (20 communes), a deux visages, schistes et sols argilo-calcaires ; ses deux dénominations rouges, Berlou (au moins 30 % de carignan) et Roquebrun (au moins 25 % de syrah), visent un rendement de base de 40 hl/ha contre 45 pour l’appellation.",
   "<b>Dans l’Aude, un cru par appellation.</b> Le Minervois a pour cœur Minervois-La Livinière, six communes en rouge seul, à 42 hl/ha contre 48. Les Corbières ont Corbières-Boutenac, un rouge sur dix communes où le carignan pèse au moins 30 % ; Fitou, reconnue en 1948 comme première AOC de rouge tranquille du Languedoc, réunit deux zones séparées par un plateau calcaire.",
   "<b>Des blancs, des muscats et des bulles.</b> Le Picpoul de Pinet est un blanc sec de piquepoul blanc seul, autour de l’étang de Thau ; la Clairette du Languedoc est une clairette pure ; les muscats de l’Hérault, de muscat à petits grains, sont des vins doux naturels. À Limoux, les bulles reconnues en 1938 reposent sur le mauzac : au moins 90 % dans la blanquette, seul dans la méthode ancestrale ; le crémant (1990) est dominé par le chardonnay, et le Limoux blanc tranquille se vinifie et s’élève en fût.",
   "<b>Ce qu’on retient.</b> Faugères, c’est le schiste pur ; Pic Saint-Loup, une syrah en vedette ; Boutenac et Fitou, le carignan assumé ; Limoux, le mauzac et les bulles. La liste des « crus » retenue par l’interprofession varie selon les années : on la date toujours (fiche 417)."
  ],
  defend: "Au Languedoc, un nom d’appellation renvoie à une roche, un cépage ou une méthode : le schiste à Faugères, le carignan à Boutenac, le mauzac à Limoux.",
  client: "« Pour une syrah en vedette, Pic Saint-Loup ; pour du schiste, Faugères ; pour du carignan assumé, Boutenac ou Fitou ; pour des bulles, Limoux : blanquette pour la pomme verte sèche, crémant pour un style plus proche de la Champagne. »",
  filRouge: "Plus au sud, au pied des Pyrénées, comment le Roussillon a-t-il bâti sa réputation sur les vins doux naturels ?",
  src: "fiches 417 et 476 à 480 du site (sources principales : cahiers des charges, INAO ; WSET D3 ; Oxford Companion)"
 },
{
  chapitre: "Roussillon : panorama et appellations",
  question: "Plus au sud, au pied des Pyrénées, comment le Roussillon a-t-il bâti sa réputation sur les vins doux naturels ?",
  fil: [
   "Le vignoble roussillonnais forme un amphithéâtre ouvert sur la Méditerranée, encadré par les Corbières au nord, le Canigou à l’ouest (environ 2 780 m) et les Albères au sud ; l’Agly, la Têt et le Tech ont découpé collines et terrasses. Il y brille environ 2 500 h de soleil par an et il tombe 500 à 650 mm de pluie, en orages surtout au printemps et à l’automne. La tramontane, vent froid de nord-ouest, assèche l’air et limite les maladies, mais elle peut casser les jeunes pousses et aggrave la sécheresse d’été (fiche 718).",
   "<b>Une mosaïque de sols.</b> Les Pyrénées ont mêlé schiste, calcaire, gneiss, granite et argile, avec en commun des sols pauvres, secs, caillouteux et drainants. Banyuls et Collioure reposent sur des schistes du Cambrien, Maury sur des schistes noirs très filtrants, Tautavel sur des sols argilo-calcaires, Caramany sur du gneiss, Lesquerde sur du granite altéré, et la plaine sur des galets (fiche 719).",
   "<b>Le règne des grenaches.</b> Le grenache noir domine les rouges et les vins doux naturels rouges, le grenache blanc et le macabeu les blancs ; l’Oxford et le WSET s’accordent sur le trio de tête grenache noir, syrah, carignan, avant les muscats. En Côtes du Roussillon, l’assemblage compte au moins deux cépages, dont aucun au-delà de 80 % (fiche 720).",
   "<b>Un royaume catalan devenu français.</b> Gouverné depuis Majorque puis depuis l’Aragon, le Roussillon ne devient français qu’en 1659, par le traité des Pyrénées. La tradition place vers 1300 les débuts du mutage et en crédite Arnaud de Villeneuve, mais aucun document d’époque ne l’atteste : on dit « traditionnellement crédité », jamais « inventeur ». Les appellations viennent bien plus tard : banyuls en 1936, banyuls grand cru en 1962, collioure en 1971, côtes-du-roussillon en 1977 (fiche 721).",
   "<b>Le pays des VDN.</b> Le Roussillon produit environ 80 % des vins doux naturels français (CIVR 2014, AD’OCC 2018). Le fleuron en est le banyuls grand cru : au moins 75 % de grenache noir, mutage sur le moût, élevage en bois sur près de trois ans, sur quatre communes ; Maury et les rivesaltes complètent le tableau (fiche 418).",
   "<b>Un vignoble qui rétrécit et se tourne vers le sec.</b> Les Pyrénées-Orientales comptaient 19 840 ha au recensement agricole de 2020, un vignoble en net recul. Les VDN et les apéritifs qui en dérivent sont passés de mode : ils forment aujourd’hui environ un quart de la production en volume, le reste étant du vin sec, surtout rouge. Les coopératives dominent encore la production courante, et la sécheresse continue depuis 2022 pèse sur les rendements (fiche 722)."
  ],
  defend: "Le Roussillon est un amphithéâtre de soleil, de vent et de schistes où le grenache règne : il a bâti sa réputation sur les vins doux naturels (environ 80 % de ceux de France), tout en se tournant désormais vers le sec.",
  client: "« Le Roussillon, c’est le Sud au pied des Pyrénées, sous le soleil et la tramontane. On y fait des vins doux naturels de grenache, banyuls, maury, rivesaltes, mais aussi de plus en plus de vins secs. »",
  filRouge: "Banyuls, maury, rivesaltes, collioure, côtes-du-roussillon : comment s’y retrouver entre vins doux naturels et vins secs ?",
  src: "fiches 418 et 718 à 722 du site (sources principales : cahiers des charges, INAO ; Météo-France ; CIVR ; Oxford Companion ; WSET D3 ; Agreste)"
 },
 {
  chapitre: "Roussillon : vins doux naturels et vins secs",
  question: "Banyuls, maury, rivesaltes, collioure, côtes-du-roussillon : comment s’y retrouver entre vins doux naturels et vins secs ?",
  fil: [
   "Pour ne pas se perdre, on commence par une ligne de partage : d’un côté les vins doux naturels (VDN), dont la fermentation est arrêtée par un ajout d’alcool neutre qui garde une partie du sucre ; de l’autre les vins secs, non mutés. Le mutage se fait sur grains pour un rouge, sur moût pour un blanc ou un muscat ; l’élevage, protégé de l’air ou oxydatif, donne deux familles de goûts, le rancio venant du bois, de l’oxygène, de la chaleur et du temps (fiche 635).",
   "<b>Sur la Côte Vermeille, un même schiste, deux familles.</b> Le banyuls (AOC de 1936) est un VDN qui porte obligatoirement une mention : blanc, rosé, rimage, ambré ou traditionnel. Le rimage, rouge de grenache noir muté sur les grains, est élevé à l’abri de l’air pour garder son fruit ; l’ambré et le traditionnel vieillissent au contact de l’air. Le banyuls grand cru (1962) est un VDN rouge élevé en bois. Le collioure, lui, est un vin sec, non muté : rouge dès 1971, rosé en 1991, blanc en 2003 (fiche 481).",
   "<b>Dans la vallée de l’Agly et la plaine, les autres VDN.</b> Le maury se limite à quatre communes et à ses schistes noirs ; il fait du blanc, du grenat, du tuilé et de l’ambré, et, depuis 2011, la même appellation couvre aussi un rouge sec. Le rivesaltes, AOC de 1936 sur une vaste aire à cheval sur les Pyrénées-Orientales et l’Aude, se décline en grenat, tuilé, ambré et rosé. Le muscat de rivesaltes, blanc, associe muscat à petits grains et muscat d’Alexandrie (fiches 482, 508).",
   "<b>Les vins secs des Côtes du Roussillon.</b> Les Côtes du Roussillon (1977) font du rouge, du rosé et du blanc. Les Côtes du Roussillon Villages, uniquement rouges, couvrent 51 communes ou parties de communes et sont plus exigeants : 45 hl/ha et 12,5 % vol. minimum, contre 48 hl/ha et 12 %. Cinq noms de lieux peuvent s’y ajouter : Caramany et Latour-de-France (1977), Lesquerde (1995), Tautavel (1997) et Les Aspres (2017) (fiche 483).",
   "<b>Hors des grandes AOC.</b> L’IGP Côtes Catalanes couvre l’essentiel du vignoble du département et accueille les vignerons dont les cépages ou les proportions ne collent pas à une AOC. Elle brille en blanc de grenache gris ou de macabeu, en rouge de vieux carignans et en muscats secs. Autour de Maury, le haut de la vallée de l’Agly, sur schiste noir, est devenu le centre de l’activité récente du Roussillon sec (fiche 723)."
  ],
  defend: "Au Roussillon, la question à poser est simple : le vin est-il muté ou non ? Banyuls, maury, rivesaltes et muscat de rivesaltes sont des VDN ; collioure, Maury sec, côtes-du-roussillon et l’IGP Côtes Catalanes sont des vins secs.",
  client: "« Pour un dessert au chocolat, un rimage de banyuls ; pour méditer, un banyuls grand cru ; pour un dessert aux fruits, un muscat de rivesaltes ; pour le repas, un collioure ou un côtes-du-roussillon Villages. »",
  filRouge: "Pourquoi la Provence est-elle devenue la région du rosé, et que boit-on d’autre là-bas ?",
  src: "fiches 481 à 483 et 723 du site, avec 508 et 635 en renvoi (sources principales : cahiers des charges, INAO ; WSET D3 et D5 ; Oxford Companion)"
 },
 {
  chapitre: "Provence : panorama et appellations",
  question: "Pourquoi la Provence est-elle devenue la région du rosé, et que boit-on d’autre là-bas ?",
  fil: [
   "La Provence est la première région française pour les rosés d’appellation : 40 à 45 % de la production nationale selon l’interprofession, sur environ 27 500 ha d’AOP. Les Phocéens, fondateurs de Marseille vers 600 av. J.-C., y ont apporté la vigne.",
   "<b>Deux Provences.</b> L’une calcaire, à l’ouest et au nord ; l’autre cristalline, au sud-est, avec les Maures et l’Estérel ; entre les deux, une dépression aux sols rouges. Sainte-Victoire et la Sainte-Baume marquent le relief.",
   "<b>Soleil et mistral.</b> Plus de 2 700 heures de soleil et 600 à 900 mm de pluie dans l’aire des Côtes de Provence. Le mistral assainit les vignes et limite les maladies, au risque de gêner la floraison.",
   "<b>Cinq cépages pour les rouges et les rosés.</b> Grenache, cinsaut, syrah, mourvèdre et tibouren sont les principaux des Côtes de Provence ; le cabernet-sauvignon n’y est qu’accessoire.",
   "<b>Des blancs de vermentino.</b> Le vermentino, appelé rolle, domine les blancs, avec la clairette, le sémillon et l’ugni blanc. La Londe en exige au moins la moitié dans son blanc.",
   "<b>Bandol à part.</b> Sur ses restanques, le mourvèdre fait des rouges de garde, au moins 18 mois en bois."
  ],
  defend: "La Provence a fait du rosé sa signature, mais son relief, son soleil et son mistral portent aussi des rouges de mourvèdre et de syrah et des blancs de vermentino.",
  client: "« La Provence, c’est d’abord le rosé, mais goûtez un rouge de Bandol, sur le mourvèdre, ou un blanc de rolle : la même lumière, d’autres vins. »",
  filRouge: "Côtes de Provence, Bandol, Cassis, Palette : comment s’y retrouver entre les grandes et les petites appellations de Provence ?",
  src: "fiches 419, 831 et 833 du site (cahiers des charges Côtes de Provence et Bandol, BO-agri ; CIVP ; WSET D3 ; Oxford Companion)"
 },
 {
  chapitre: "Provence : appellations et dénominations",
  question: "Côtes de Provence, Bandol, Cassis, Palette : comment s’y retrouver entre les grandes et les petites appellations de Provence ?",
  fil: [
   "La carte des appellations provençales se lit en trois cercles.",
   "<b>Trois régionales.</b> Côtes de Provence (1977), une centaine de communes surtout dans le Var, 55 hl/ha ; Coteaux d’Aix-en-Provence (1985), la Provence calcaire de l’ouest, où la counoise est principale ; Coteaux Varois en Provence (1993), une enclave plus fraîche autour de Brignoles, avec des vignes jusqu’à 350-500 m.",
   "<b>Cinq dénominations.</b> Cru Sainte-Victoire, Fréjus, La Londe, Pierrefeu et Notre-Dame des Anges s’ajoutent au nom de Côtes de Provence avec des règles plus serrées : 50 hl/ha, rouges élevés jusqu’au 15 août ou au 15 octobre, 20 % de tibouren au moins dans le rosé de Fréjus, la moitié de vermentino dans le blanc de La Londe.",
   "<b>Bandol.</b> Huit communes autour de la ville, des restanques face à la mer, le mourvèdre roi et des rouges au moins 18 mois en bois, à 40 hl/ha.",
   "<b>Les petites appellations.</b> Cassis, une seule commune et un blanc de clairette et de marsanne ; Palette, trois communes aux portes d’Aix, au moins 10 % de mourvèdre et des rouges 18 mois en bois ; Bellet, sur les coteaux de Nice, avec le braquet, la fuella nera et le vermentino. Les Baux-de-Provence et Pierrevert complètent la carte."
  ],
  defend: "Plus le cercle se resserre, plus les volumes baissent et plus le cahier se fait strict : des grandes régionales de rosé aux dénominations, puis à Bandol et aux appellations d’une ou trois communes.",
  client: "« Pour un rosé sûr, un côtes-de-provence ; pour un secteur précis, une dénomination comme Sainte-Victoire ; pour un vin de caractère, un bandol rouge, un cassis blanc ou un palette. »",
  filRouge: "Plus à l’est encore, sur l’île de Beauté, comment la Corse marie-t-elle cépages italiens et appellations françaises ?",
  src: "fiches 489, 490, 491 et 834 à 840 du site (cahiers des charges des AOC de Provence, BO-agri ; WSET D3 ; Oxford Companion)"
 }
];
