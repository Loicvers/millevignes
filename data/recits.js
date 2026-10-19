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
  "Section pas encore vérifiée contre des sources externes : les faits et les chiffres sont ceux du livre."
 ]
},
{
 "chapitre": "Comprendre les roches magmatiques",
 "pages": "130-132",
 "question": "Que sont les roches magmatiques, et quels vignobles reposent dessus ?",
 "fil": [
  "Il existe trois grandes familles de roches selon leur mode de formation : magmatiques, sédimentaires et métamorphiques. Les magmatiques naissent du refroidissement du magma.",
  "<b>Lentes ou rapides.</b> Refroidi lentement en profondeur, le magma donne des roches plutoniques aux cristaux visibles (le granit). Refroidi vite en surface, il donne des roches volcaniques au grain fin ou vitreux (le basalte). Chaque roche plutonique a son équivalent volcanique de même composition. On distingue les roches riches en potassium et sodium (felsiques) de celles riches en fer et magnésium (mafiques).",
  "<b>Sur roches plutoniques.</b> Le granit porte une partie du Rhône nord et du Beaujolais, le Dão portugais. Mais le Beaujolais n’est pas que granitique : Juliénas et Côte-de-Brouilly reposent surtout sur la diorite, la « pierre bleue ». Le gabbro est mis en avant par les nouveaux crus communaux du Muscadet. Le granit, dur, rend les caves difficiles à creuser : les chais y sont souvent en surface.",
  "<b>Sur roches volcaniques.</b> Le basalte, le plus répandu, porte l’Etna, la Columbia Valley ou une partie de l’Auvergne ; décomposé, il donne des sols fertiles. Rhyolite, andésite et porphyre apparaissent ailleurs (Savennières, Santorin). Les roches projetées par les éruptions explosives (cendres, tuf, ponce, lapilli) forment d’autres terroirs, comme les pouzzolanes de Lanzarote.",
  "L’encadré sur les vins de volcan pose la question : drainants, pauvres en matière organique, riches en certains minéraux, ces sols laissent-ils une signature commune ? Des recherches sont en cours."
 ],
 "defend": "Derrière le mot « granit » ou « volcanique » se cachent des roches très différentes : le langage du vin simplifie souvent à l’excès.",
 "client": "« Granit et basalte viennent tous deux du magma : l’un a refroidi lentement en profondeur, l’autre vite en surface. »",
 "filRouge": "Quelle différence entre une roche plutonique et une roche volcanique, et pourquoi cela compte-t-il pour un vignoble ?",
 "prudence": [
  "Section pas encore vérifiée contre des sources externes : les exemples de vignobles sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes.",
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
  "Section pas encore vérifiée contre des sources externes."
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
  "Section pas encore vérifiée contre des sources externes : les chiffres (profondeurs d’enracinement, pH, albédo) sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes : les chiffres (atlas, prix du foncier champenois) sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes."
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
  "Section pas encore vérifiée contre des sources externes : dates et chiffres (Yquem, levadas, karez, érosion) sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes."
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
  "Section pas encore vérifiée contre des sources externes : dates et chiffres sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes."
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
  "Section pas encore vérifiée contre des sources externes : dates et chiffres sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes.",
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
  "Section pas encore vérifiée contre des sources externes : la liste et les dates d’inscription UNESCO sont celles du livre."
 ]
},
{
 "chapitre": "Les composants du raisin",
 "pages": "204-207",
 "question": "Pourquoi fait-on du vin avec du raisin, et pas avec n’importe quel fruit ?",
 "fil": [
  "Presque tous les fruits fermentent, mais très peu donnent une boisson stable sans ajout d’eau, de sucre ou d’acide : en dehors du raisin, surtout la pomme et la poire. Le raisin réunit assez de sucre pour un alcool protecteur, assez d’acidité pour freiner les microbes, des polyphénols antioxydants et assez d’eau.",
  "<b>Où sont les composés.</b> La pulpe contient l’eau, les sucres et les acides ; la peau, l’essentiel des polyphénols et des arômes ; les pépins, des tanins et des huiles ; la rafle, des polyphénols et du potassium.",
  "<b>Sucres et acides.</b> Les sucres fermentescibles sont le glucose et le fructose. L’acide tartrique, propre à la vigne, reste stable à la chaleur, alors que l’acide malique diminue en mûrissant : avec le réchauffement, le tartrique devient l’acide clé.",
  "<b>Polyphénols et arômes.</b> Anthocyanes (couleur rouge), flavonols, tanins : ils donnent couleur, amertume et astringence. Les arômes sont souvent liés à des sucres (précurseurs) et ne se révèlent qu’à la fermentation et au vieillissement.",
  "<b>Des maturités qui divergent.</b> La maturité des sucres et des acides ne coïncide plus forcément avec celle des tanins et des arômes : on peut avoir beaucoup de sucre et des tanins encore verts."
 ],
 "defend": "Le goût du raisin témoigne du lieu où il a poussé ; face au climat, l’avenir passe d’abord par une viticulture capable de produire des raisins équilibrés, pour intervenir le moins possible au chai.",
 "client": "« Le raisin est presque le seul fruit qui donne naturellement un vin stable, sans ajouter ni sucre, ni acide, ni eau. »",
 "filRouge": "Qu’est-ce qui rend le raisin si propice à la fabrication du vin ?",
 "prudence": [
  "Section pas encore vérifiée contre des sources externes : proportions et teneurs sont celles du livre."
 ]
},
{
 "chapitre": "Du raisin au vin, une écologie microbienne",
 "pages": "208-216",
 "question": "Qui fait vraiment le vin : le vigneron ou les microbes ?",
 "fil": [
  "Pour Marc-André Selosse, vinifier, c’est « élever des microbes ». Lavoisier puis Gay-Lussac expliquent la fermentation en chimistes ; Pasteur montre qu’elle est l’œuvre d’êtres vivants, les levures, et que des bactéries peuvent gâter le vin.",
  "<b>Une compétition.</b> Sur le raisin vivent de nombreuses levures, surtout peu fermentaires ; Saccharomyces cerevisiae, la grande levure du vin, y est rare. Au fil de la fermentation, l’alcool, le manque d’oxygène et le soufre éliminent la plupart des espèces : une ou deux souches dominent. Les bactéries lactiques réalisent ensuite la fermentation malolactique, qui transforme l’acide malique en acide lactique plus doux.",
  "<b>Piloter sans tout contrôler.</b> Température, aération, soufre, nutriments : le vigneron oriente la population microbienne ; l’ensemencement par des levures sélectionnées (sèches depuis les années 1960) est le contrôle le plus direct.",
  "<b>Indigènes ou sélectionnées ?</b> Pour l’IFV, la fermentation spontanée apporte plus de risques que de complexité démontrée ; pour d’autres, comme Nicolas Joly, levurer efface le millésime et le lieu. Le débat est aussi idéologique.",
  "<b>Un « terroir microbien » ?</b> Des études suggèrent des populations microbiennes propres à certaines régions ; d’autres les contestent. Les chercheurs s’accordent sur quelques points : vignoble et chai s’ensemencent mutuellement, les levures voyagent facilement, et le lien précis entre une souche et le goût reste mal compris."
 ],
 "defend": "Le vigneron vit en mutualisme avec ses microbes : il faut préserver la liberté de laisser faire ou non, tout en s’interrogeant sur l’accélération permise par les biotechnologies.",
 "client": "« La levure qui fait le vin se trouve rarement sur le raisin : elle vit surtout au chai, et parfois dans les insectes qui la transportent. »",
 "filRouge": "Pourquoi l’idée de « levures de terroir » reste-t-elle controversée ?",
 "prudence": [
  "Section pas encore vérifiée contre des sources externes : chiffres et dates des études sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes : dates et chiffres sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes : prix, doses et chiffres sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes : dates et chiffres sont ceux du livre."
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
  "Section pas encore vérifiée contre des sources externes : seuils et pourcentages (goût de bouchon, acidité volatile) sont ceux du livre."
 ]
}
];
