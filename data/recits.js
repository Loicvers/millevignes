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
}
];
