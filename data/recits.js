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
  "Eyrie Vineyards : le domaine dit n’avoir jamais labouré (le livre dit que Jason Lett a arrêté le labour).",
  "Fosse-Sèche : 15 + 30 ha p. 99, 15 + 18 ha p. 101 dans le livre.",
  "Vignenvie : 600 g de cuivre par an, environ sept fois moins que la limite bio (le livre dit dix).",
  "Nouvelle-Zélande : 59 % est une part de viticulteurs ; vignoble de 42 519 ha et 23,6 millions de moutons en 2024 (le livre : 37 000 ha et 27 millions).",
  "Le rôle de Léon Barral comme pionnier de l’intégration animale, la date de l’AVN et celle de La Corne de vache et le Microscope (2019 ou 2020) ne sont pas confirmés."
 ]
}
];
