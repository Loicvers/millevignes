// Géologie — fiches de cette section de Mille Vignes. Voir l'en-tête de fiches.js.
FICHES.push(
  {
    id: 157,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Fondamental",
    geo: null,
    titre: "La géologie, argument du vin",
    synth: "Longtemps discrète, la roche s’affiche aujourd’hui sur les étiquettes et sert d’argument aux vignerons comme aux sommeliers. Selon Lepeltier, cépages et savoir-faire voyagent vite alors que le sol ne s’exporte pas : face au Nouveau Monde, la dimension géo-pédologique devient un argument d’unicité (thèse de l’autrice, que les sources lues ne chiffrent pas). Lire le sous-sol n’est pas nouveau (murets, caves, plantes sauvages indicatrices), et l’œnogéologie, que le livre rattache à Georges Truc, étudie le lien entre sol, sous-sol, vigne et vin. Reste une question ouverte : une roche donnée rend-elle le vin meilleur ou plus complexe ?",
    mnemo: "Le cépage voyage en valise, le savoir-faire en avion, le sol reste à la maison : c’est la seule carte que le voisin ne peut pas copier.",
    flash: {"q":"Pourquoi le sol est-il devenu un argument d’unicité face aux vignobles du Nouveau Monde ?","a":"Parce que cépages et savoir-faire se diffusent facilement, alors que le sol, lui, ne s’exporte pas.","keys":[["sol"],["export","voyage","diffus","copi"]]},
    qcm: {"q":"Que cherche l’œnogéologie ?","opts":["Mesurer le taux de sucre des raisins","Relier sol, sous-sol, vigne et vin","Classer les cépages par famille","Dater les vignobles antiques"],"good":1,"expl":"Le terme associe géologie et vin : il s’agit de comprendre comment le substrat se retrouve dans la vigne puis dans le verre."},
    exos: [
      {"type":"flashcard","prompt":"Explique : pourquoi la géologie est-elle devenue un argument commercial si fort depuis cinquante ans ?","payload":{"answer":"Parce que cépages et savoir-faire se sont diffusés dans le monde entier, alors que le sol ne s’exporte pas : la suprématie française, discutée depuis les années 1970, a trouvé dans la géologie un argument d’unicité et de qualité face au Nouveau Monde. C’est une piste utile pour comprendre un terroir, mais pas une preuve qu’une roche donnée fait un meilleur vin."},"explanation":"Question fil rouge du chapitre « Pourquoi lire la géologie des vignobles ? » (Mille Vignes, p. 124-129). On attend l’opposition entre ce qui voyage (cépages, techniques) et ce qui reste (le sol), plus la nuance : argument d’unicité, pas garantie de qualité."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Le fait qu’un vin vienne d’une roche précise suffit à démontrer qu’il est meilleur.","answer":false},"explanation":"Lepeltier elle-même laisse la question ouverte : la roche renseigne sur l’origine et le terroir, mais ne mesure pas la qualité. Confondre argument commercial et preuve serait le piège."},
      {"type":"mcq_multi","prompt":"Quels éléments soutiennent l’idée que le sol est un argument d’unicité ?","payload":{"options":["Les cépages se plantent ailleurs","Les savoir-faire se diffusent vite","Le sol ne peut pas être exporté","Une roche garantit un vin meilleur"],"answers":[0,1,2]},"explanation":"L’argument repose sur le contraste entre ce qui se copie et ce qui reste attaché au lieu. La dernière option est une conclusion que le livre ne tire pas."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Sol non exportable et remise en cause de la suprématie française depuis les années 1970 (⚠️) : thèse de Lepeltier, aucune source lue ne la quantifie ni ne la date.","Œnogéologie, Georges Truc, années 1990 puis mi-2010 (⚠️) : une seule source lue (Decanter), qui présente Truc comme géologue de terrain du Rhône sans employer le mot ni donner ces dates ; graphies « onogéologie » et « cnogéologie » du texte extrait = OCR.","Lecture ancienne du sous-sol (murets, caves, plantes indicatrices) (⚠️) : affirmation du livre, non recoupée."],
    src: "Mille Vignes, P. Lepeltier, p. 124-127 ; Decanter, « It’s a rock thing: Georges Truc, the Rhône’s wine geologist » ; Fanet, Terroir, climat, sol (IVES).",
    page: 124
  },
  {
    id: 158,
    theme: "Géographie viticole",
    sous: ["Appellations","Régions"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Bourgogne","appel":null},
    titre: "Bourgogne, climats et appellations : le sol comme critère",
    synth: "En Bourgogne, un climat est une parcelle délimitée avec précision, définie par son sol, son sous-sol et ses conditions naturelles, et non par la météo : l’UNESCO a inscrit en 2015 les Climats du vignoble de Bourgogne (1 247 parcelles, sols argilo-calcaires, pinot noir et chardonnay). Pour Lepeltier, ces parcelles ont été hiérarchisées selon le potentiel de leurs sols (33 grands crus au sommet) et ce modèle aurait inspiré le système français d’appellations ; or l’INAO cite d’abord Champagne, cognac et Bordeaux (décrets de 1908 à 1911) et ne présente pas la Bourgogne comme modèle. L’INAO délimite les aires en s’appuyant sur la géologie, la pédologie et un travail d’expertise de terrain (cf. fiche sur le climat bourguignon, p. 158).",
    mnemo: "Un puzzle de parcelles : chaque pièce a sa propre « fiche de sol », et c’est la forme de la pièce, pas la météo, qui compte.",
    flash: {"q":"Comment l’INAO fonde-t-il la délimitation d’une aire d’appellation ?","a":"Sur des bases scientifiques (géologie, pédologie, agronomie, histoire, géographie) et un travail d’expertise de terrain.","keys":[["géolog"],["pédolog","sol"]]},
    qcm: {"q":"Que disent les sources de l’INAO sur la place de la Bourgogne dans les débuts des appellations ?","opts":["Les premiers décrets visent la Champagne, le cognac et Bordeaux ; la Bourgogne n’est pas présentée comme modèle","La Bourgogne a reçu le tout premier décret d’appellation en 1905","Le système a été copié sur le classement de 1855","La Bourgogne a été exclue des appellations jusqu’en 1960"],"good":0,"expl":"Le livre fait de la Bourgogne le modèle du système ; la page de l’INAO ne le dit pas, d’où une divergence à signaler."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"L’UNESCO a inscrit les Climats de Bourgogne pour leur hiérarchie en grands crus et premiers crus.","answer":false},"explanation":"L’inscription décrit 1 247 parcelles délimitées par leur géologie, leur hydrologie et leur exposition ; la hiérarchie des crus relève des appellations, pas de l’UNESCO."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Pour délimiter une aire, l’INAO s’appuie notamment sur la {{géologie}}, la {{pédologie}} et une expertise de terrain."},"explanation":"La délimitation se fait parcelle par parcelle : il faut savoir sur quelle roche et quel sol on se trouve avant de tracer la limite."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Hiérarchie en pyramide et 33 grands crus (⚠️) : une seule source de niveau 2b (Bourgogne Tourisme : 33 grands crus, 44 communales, 7 régionales) ; le niveau « sous-régional » du livre n’y figure pas ; à recouper avec le BIVB ou l’INAO.","Classement des climats selon le potentiel des sols (⚠️) : la page UNESCO décrit les parcelles, pas une hiérarchie des crus.","Bourgogne modèle du système d’appellations (⚠️) : thèse du livre, non confirmée par l’INAO (lois de 1905 et 1919, décrets de Champagne, du cognac, de Bordeaux).","Recours croissant de l’INAO aux géologues (⚠️) : aucune source lue ne date ni ne chiffre la tendance ; seule la base scientifique de la délimitation est confirmée.","Chablis réservé aux sols kimméridgiens en 1938 (⚠️, non utilisé en exercice) : une seule source (Fanet, IVES) ; non repris dans la synthèse."],
    src: "Mille Vignes, P. Lepeltier, p. 124-125 ; UNESCO, Les Climats du vignoble de Bourgogne ; INAO, « 1905-1935 : les débuts des appellations d’origine » et « Délimitation des aires de production » ; Bourgogne Tourisme ; Fanet, Terroir, climat, sol (IVES).",
    page: 124
  },
  {
    id: 159,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le temps long : échelle des temps géologiques et tectonique",
    synth: "Roches et reliefs se façonnent sur des milliards d’années : la Terre a plus de 4,5 milliards d’années et l’Archéen (environ 4 à 2,5 milliards d’années) voit une forte activité magmatique construire une grande part de la croûte continentale. La dérive des continents de Wegener (présentée en 1912, développée dans son livre de 1915) n’est pas la tectonique des plaques, admise dans les années 1960 : le livre les fond en une seule théorie de 1915. L’échelle des temps, d’abord relative (fossiles, stratigraphie), reçoit en 1913 sa première version chiffrée avec Arthur Holmes (datations radiométriques), et non son « invention » comme l’écrit le livre ; elle s’emboîte en éon, ère, période, époque, étage, avec des bornes révisées (Paléozoïque : environ 540 à 252 millions d’années, contre -541 et -252,2 dans le livre).",
    mnemo: "Des poupées russes du temps : l’éon contient des ères, qui contiennent des périodes, des époques, puis des étages.",
    flash: {"q":"Quelle différence entre la dérive des continents et la tectonique des plaques ?","a":"La dérive est l’idée de Wegener (1912, développée en 1915) ; la tectonique des plaques est la théorie établie dans les années 1960.","keys":[["Wegener"],["1960","années 60"]]},
    qcm: {"q":"Quelle est la plus grande unité de l’échelle des temps géologiques ?","opts":["L’éon","L’ère","La période","L’étage"],"good":0,"expl":"On descend de l’éon à l’étage comme on passe d’un grand ensemble à ses subdivisions ; l’ère n’est qu’un morceau d’éon."},
    exos: [
      {"type":"ordering","prompt":"Range ces unités du temps géologique de la plus grande à la plus petite.","payload":{"items":["Éon","Ère","Période","Époque","Étage"]},"explanation":"Chaque niveau découpe le précédent : Crétacé inférieur, par exemple, est une époque d’une période, elle-même dans une ère."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"La tectonique des plaques a été formulée telle quelle par Wegener en 1915.","answer":false},"explanation":"Wegener proposait que les continents dérivent, sans mécanisme convaincant ; c’est la théorie des plaques, confirmée dans les années 1960, qui l’a expliqué. Le livre les rapproche en une seule date."},
      {"type":"matching","prompt":"Associe chaque notion à son rôle dans la datation.","payload":{"pairs":[["Datation relative","Ordre des couches et des fossiles (stratigraphie)"],["Datation absolue","Désintégration d’isotopes radioactifs"],["Échelle de Holmes","Première échelle chiffrée, qui associe les deux"]]},"explanation":"La relative dit « avant » et « après », l’absolue donne l’âge en années ; Holmes est le premier à les avoir calées l’une sur l’autre."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Plus de 4,5 milliards d’années pour la Terre et 3,8 milliards d’années pour les ensembles de roches anciennes (⚠️) : une seule source lue (Universalis) ; ordres de grandeur, des roches et zircons plus anciens existent ; âge de la Terre non énoncé dans la page lue.","Wegener 1912 / 1915 et tectonique des plaques des années 1960 (⚠️) : une seule source lue (Futura-Sciences).","Échelle chiffrée de Holmes en 1913 (⚠️) : une seule source lue (EARTH Magazine) ; l’échelle relative date du XIXe siècle.","Bornes du Paléozoïque (⚠️) : la charte ICS 2023-06 donne 538,8 et 251,9 millions d’années, le livre -541 et -252,2 (anciennes versions) ; une seule source lue, âges révisables.","Hiérarchie éon, ère, période, époque, étage : confirmée par la charte ICS 2023-06 ; la distinction relative / absolue reste énoncée par le livre (⚠️)."],
    src: "Mille Vignes, P. Lepeltier, p. 126-127 ; Universalis, Archéen ; ICS, International Chronostratigraphic Chart 2023-06 ; Futura-Sciences, dérive des continents ; EARTH Magazine, « Benchmarks: March 1913 ».",
    page: 126
  },
  {
    id: 160,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les noms des âges géologiques : lieux, peuples et roches",
    synth: "Les noms des divisions du temps géologique viennent du grec ou du latin, mais aussi de lieux, de peuples ou de roches. Le Jurassique doit son nom au massif du Jura (franco-suisse), où ses calcaires ont été reconnus ; le Silurien aux Silures, tribu galloise de l’âge du fer, nom donné par Murchison ; le Carbonifère signifie « qui porte du charbon ». Pour un caviste, c’est un moyen simple de rattacher un âge à une région ou à une roche : le Jurassique est d’abord une affaire de calcaires.",
    mnemo: "Jurassique = Jura (le lieu), Silurien = Silures (le peuple), Carbonifère = carbone, le charbon (la roche).",
    flash: {"q":"D’où le Jurassique tire-t-il son nom ?","a":"Du massif du Jura, où les calcaires de cette époque ont été identifiés.","keys":[["Jura"]]},
    qcm: {"q":"Le nom « Silurien » vient…","opts":["d’une chaîne de montagnes","d’une tribu galloise, les Silures","du mot grec pour charbon","d’un fossile caractéristique"],"good":1,"expl":"Murchison a emprunté le nom d’un peuple de la région où il étudiait ces couches, comme d’autres géologues empruntent un lieu."},
    exos: [
      {"type":"matching","prompt":"Associe chaque âge à l’origine de son nom.","payload":{"pairs":[["Jurassique","Un massif montagneux (le Jura)"],["Silurien","Un peuple (les Silures)"],["Carbonifère","Une matière (le charbon)"]]},"explanation":"Les trois noms illustrent trois familles d’origine : lieu, peuple, roche ou matière."},
      {"type":"mcq_multi","prompt":"Lesquels de ces âges portent le nom d’un lieu ou d’un peuple ?","payload":{"options":["Jurassique","Silurien","Carbonifère"],"answers":[0,1]},"explanation":"Le Carbonifère se rattache à une matière, le charbon qu’on y trouve, et non à une géographie."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Le {{Carbonifère}} signifie « qui porte du {{charbon}} » ; le {{Jurassique}} tire son nom du massif du {{Jura}}."},"explanation":"Dans les deux cas le nom décrit ce qu’un géologue y observe : la roche ou le lieu des premières coupes."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Jurassique, massif du Jura, Brongniart 1829 (⚠️) : attribution à Brongniart à sourcer ; l’étymologie concorde avec le livre.",
      "Silurien, Silures, Murchison 1835 (⚠️) : une seule source (Geological Society) ; concorde avec le livre.",
      "Carbonifère, « qui porte du charbon », 1822 (⚠️) : à sourcer ; concorde avec le livre.",
      "Provenance grecque ou latine de nombreux noms d’âges (⚠️) : affirmation du livre, non recoupée.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 127 ; Geological Society of London, Silurian ; ICS, International Chronostratigraphic Chart 2023-06.",
    page: 127
  },
  {
    id: 161,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Fondamental",
    geo: null,
    titre: "Minéral, élément chimique, roche : trois mots à ne pas confondre",
    synth: "Un élément chimique est un type d’atome, défini par son nombre de protons (calcium, carbone, silicium). Un minéral est un solide naturel, formé par des processus géologiques et de structure cristalline (quartz, feldspath, mica, gypse). Une roche est un assemblage d’un ou plusieurs minéraux, défini par ses constituants et son mode de formation : le calcaire est une roche sédimentaire dominée par le carbonate de calcium. Le livre annonce environ 4 000 minéraux connus ; la liste de l’IMA en recense désormais plus de 6 200, et le nombre augmente chaque année.",
    mnemo: "L’élément est la lettre, le minéral le mot, la roche la phrase : le calcium (lettre) entre dans la calcite (mot), qui compose le calcaire (phrase).",
    flash: {"q":"Quelle différence entre un minéral et une roche ?","a":"Un minéral est une substance solide naturelle à structure cristalline ; une roche est un assemblage d’un ou plusieurs minéraux.","keys":[["minéral"],["assemblage","plusieurs","ensemble"]]},
    qcm: {"q":"Le calcaire est…","opts":["Un minéral pur","Une roche","Un élément chimique","Un ion"],"good":1,"expl":"Le calcaire est un assemblage où domine le carbonate de calcium ; l’élément calcium n’en est qu’un constituant atomique."},
    exos: [
      {"type":"odd_one_out","prompt":"Quel terme n’est pas un minéral ?","payload":{"options":["Quartz","Feldspath","Calcium","Mica"],"answer":2},"explanation":"Le calcium est un élément chimique, c’est-à-dire un atome ; les trois autres sont des solides cristallisés formés par des processus géologiques."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"On connaît environ 4 000 espèces minérales, comme l’indique le livre.","answer":false},"explanation":"C’est un chiffre d’une époque révolue : la liste maîtresse de l’IMA dépasse 6 200 espèces et croît à mesure que de nouvelles espèces sont approuvées. Erreur du livre à corriger."},
      {"type":"matching","prompt":"Associe chaque exemple à sa catégorie.","payload":{"pairs":[["Quartz","Minéral"],["Calcium","Élément chimique"],["Calcaire","Roche"]]},"explanation":"Le piège classique est de dire « minéral » pour tout ce qui vient du sol : l’échelle va de l’atome au minéral puis à la roche."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Élément défini par son nombre de protons (⚠️) : une seule source lue (Inrap) ; le nombre d’isotopes du carbone annoncé par l’extraction (quatre) n’est pas repris, la source en donne trois naturels.","Définition d’une roche et du calcaire, cycle des roches (⚠️) : énoncés par le livre, non recoupés par une source dédiée.","Définition du minéral (✅ pour l’essentiel) : l’IMA parle d’origine géologique et d’homogénéité, « inorganique » et « cristallin » sont des raccourcis pédagogiques."],
    src: "Mille Vignes, P. Lepeltier, p. 125-127 ; Larousse, Minéral ; Elements 2025, Expanding Mineral Vocabulary (IMA CNMNC) ; IMA Master List (2026-07) ; Inrap, Isotopes et archéologie.",
    page: 127
  },
  {
    id: 162,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Fondamental",
    geo: null,
    titre: "Roches magmatiques : plutoniques ou volcaniques ?",
    synth: "Les roches se rangent en trois familles selon leur origine (magmatiques, métamorphiques, sédimentaires) ; les magmatiques naissent de la cristallisation d’un magma, de la roche fondue. Refroidi lentement en profondeur, il donne une roche plutonique aux gros cristaux visibles (granite, diorite, gabbro) ; refroidi vite en surface, une roche volcanique au grain fin, parfois vitreuse (rhyolite, andésite, basalte). Chaque roche plutonique a un équivalent volcanique de même composition : granite et rhyolite, diorite et andésite, gabbro et basalte. On les classe aussi par leur chimie : felsique (riche en silice, pauvre en fer et en magnésium) ou mafique (l’inverse).",
    mnemo: "Le sirop de sucre : refroidi lentement, il fait de gros cristaux de sucre candi (le granite) ; jeté sur une plaque froide, il se fige en une plaque lisse aux cristaux invisibles à l’œil nu (le basalte).",
    flash: {"q":"Qu’est-ce qui distingue une roche plutonique d’une roche volcanique ?","a":"La vitesse et le lieu du refroidissement : lent en profondeur pour la plutonique (gros cristaux, ex. granite), rapide en surface pour la volcanique (grain fin, ex. basalte).","keys":[["lent","lentement"],["profondeur"],["rapide","vite"],["surface"]]},
    qcm: {"q":"Quel est l’équivalent volcanique du gabbro ?","opts":["La rhyolite","L’andésite","Le basalte","Le granite"],"good":2,"expl":"Le gabbro et le basalte partagent la même composition sombre et riche en fer et en magnésium ; seul le refroidissement diffère. Rhyolite et andésite sont les équivalents du granite et de la diorite."},
    exos: [
      {"type":"flashcard","prompt":"Explique : quelle différence entre une roche plutonique et une roche volcanique, et pourquoi cela compte-t-il pour un vignoble ?","payload":{"answer":"Une roche plutonique (granite, diorite, gabbro) a refroidi lentement en profondeur : ses cristaux sont gros et visibles. Une roche volcanique (rhyolite, andésite, basalte) a refroidi vite en surface : son grain est fin, parfois vitreux, pour une composition identique à son équivalent plutonique. Pour le vignoble, c’est la roche mère qui détermine le sol qui s’en détache, et donc le terroir."},"explanation":"Question fil rouge du chapitre « Comprendre les roches magmatiques » (Mille Vignes, p. 130-132). Auto-évalue-toi : as-tu cité le lieu et la vitesse de refroidissement, la taille des cristaux, et le lien roche mère → sol ?"},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Un granite et une rhyolite ont la même composition ; seule leur texture diffère.","answer":true},"explanation":"La composition vient du magma d’origine, la texture de la vitesse de refroidissement : deux roches de même magma peuvent donc avoir des aspects très différents sans être de natures chimiques différentes."},
      {"type":"matching","prompt":"Associe chaque roche plutonique à son équivalent volcanique.","payload":{"pairs":[["Granite","Rhyolite"],["Diorite","Andésite"],["Gabbro","Basalte"]]},"explanation":"Les trois couples vont du plus clair et riche en silice au plus sombre ; retiens l’échelle felsique vers mafique plutôt que trois paires isolées."},
      {"type":"odd_one_out","prompt":"Laquelle de ces roches n’est pas volcanique ?","payload":{"options":["Granite","Rhyolite","Andésite","Basalte"],"answer":0},"explanation":"Le granite est la seule roche plutonique de la liste : il a cristallisé en profondeur, alors que les trois autres sont des laves refroidies en surface."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Plutonique = refroidissement lent en profondeur, volcanique = rapide en surface (⚠️, une source de vulgarisation et un cours d’Oxford) : une seconde source explicite est à ajouter pour passer en ✅.","Felsique / mafique (⚠️, un seul manuel) : le critère central est la teneur en silice ; le livre parle de potassium et sodium contre magnésium et fer, attribue le classement à Bowen (son apport réel est la série de réaction et la cristallisation fractionnée) et dit les termes acide/basique abandonnés, point non confirmé."],
    src: "Mille Vignes, P. Lepeltier, p. 130-131 ; Futura-Sciences (roche magmatique, diorite, roche volcanique) ; University of Richmond, Volcanology (classification des roches ignées) ; Physical Geology (manuel ouvert), chapitre Crystallization ; Université d’Oxford, Earth Sciences (andésite)",
    page: 130
  },
  {
    id: 163,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vignobles sur roches plutoniques en France : granite, pierre bleue, gabbro",
    synth: "Le granite porte notamment Cornas et Condrieu au Rhône nord, une partie du Beaujolais et Clisson dans le Muscadet, alors que Côte-Rôtie repose sur des roches métamorphiques (gneiss, micaschistes). Le livre fait de la « pierre bleue » de Juliénas et de Côte-de-Brouilly une diorite, mais l’interprofession n’emploie pas ce mot et les sources divergent (granite bleu, porphyres, roches métamorphiques, diorite) : la question n’est pas tranchée. Le gabbro est associé à certains crus communaux du Muscadet (Gorges, Mouzillon-Tillières), avec des divergences selon les crus. Le livre ajoute que le granite, très dur à creuser, incite à bâtir les chais en surface.",
    mnemo: "Un granite, c’est du gros sel de cuisine : cristaux visibles, qui s’égrène en sable (les « gores » de Cornas) ; et on ne creuse pas une cave dans une roche aussi dure, on bâtit au-dessus.",
    flash: {"q":"Quelle roche le livre associe-t-il à la « pierre bleue » du Beaujolais, et cette identification est-elle établie ?","a":"La diorite (Juliénas, Côte-de-Brouilly). Elle n’est pas établie : l’interprofession ne parle pas de diorite et les sources avancent aussi granite bleu, porphyres ou roches métamorphiques.","keys":[["diorite"]]},
    qcm: {"q":"Laquelle de ces appellations repose sur des roches métamorphiques (gneiss, micaschistes) plutôt que sur du granite ?","opts":["Cornas","Condrieu","Côte-Rôtie","Clisson (Muscadet)"],"good":2,"expl":"« Rhône nord granitique » est un raccourci : Cornas et Condrieu sont sur granite, mais Côte-Rôtie est sur gneiss (Côte Blonde) et micaschistes (Côte Brune)."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les sources s’accordent pour identifier la pierre bleue de Côte-de-Brouilly à de la diorite.","answer":false},"explanation":"Le nom de terrain « pierre bleue » ne vaut pas identification pétrographique : l’interprofession parle de roches volcaniques, d’autres sources de porphyres ou de roches métamorphiques. Avant d’affirmer « diorite » en cours, il faut le cahier des charges."},
      {"type":"mcq_multi","prompt":"Lesquels de ces vignobles reposent au moins en partie sur du granite ?","payload":{"options":["Cornas","Condrieu","Clisson","Faugères","Chablis"],"answers":[0,1,2]},"explanation":"Faugères repose uniquement sur des schistes et Chablis sur des calcaires et marnes : seuls les trois premiers ont du granite dans leur socle."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Au Rhône nord, {{Cornas}} repose sur un granite décomposé, alors que Côte-Rôtie est sur {{gneiss|micaschistes}} et micaschistes."},"explanation":"Le Rhône nord n’est pas uniformément granitique : la nature de la roche change d’un coteau à l’autre, et Côte-Rôtie relève du métamorphique."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Granite au Rhône nord et Côte-Rôtie métamorphique (⚠️, une seule source de presse spécialisée) : à recouper avec Inter Rhône.",
      "Pierre bleue = diorite (⚠️, divergence) : le livre et Decanter disent diorite ; l’interprofession parle de roches volcaniques ; une fiche INAO citée de seconde main parle de granite bleu, le cahier des charges 2022 cité de porphyres et roches métamorphiques. Cahier des charges original non lu (extranet bloqué). Pour Juliénas, la pierre bleue ne couvre qu’environ 42 % des sols, la formule « surtout diorite » est un peu forte.",
      "Roches des crus communaux du Muscadet (⚠️, sources de niveau 2b seulement) : Clisson granite (sources concordantes), Gorges gabbro (une page ancienne écrit argile et quartz), Le Pallet gneiss ou gabbro-gneiss-grès selon les pages. Cahier des charges INAO des dénominations non lu.",
      "Chais en surface à cause du granite dur (⚠️) : affirmation du livre, aucune source lue.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 130 et 132 ; Inter Beaujolais (Côte de Brouilly, Juliénas) ; The Wine Doctor (Muscadet, Gorges) ; WineWisdom (crus communaux du Muscadet)",
    page: 130
  },
  {
    id: 164,
    theme: "Géologie-Terroir",
    sous: ["Roches","Volcanique"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vignobles sur roches volcaniques : basalte, rhyolite, andésite et porphyre",
    synth: "Le basalte, équivalent volcanique du gabbro, est une roche sombre qui porte entre autres l’Auvergne (la fiche INAO parle d’activité volcanique sans nommer le basalte), certains lieux-dits de Forst en Palatinat et, en socle sous du loess, la Columbia Valley. Le livre le dit « très fertile » une fois altéré puis décrit les sols volcaniques comme pauvres en matière organique : une fertilité minérale potentielle ne fait pas forcément une vigne vigoureuse. La rhyolite, équivalent volcanique du granite, reste minoritaire à Savennières (environ 5 % de l’appellation, le schiste dominant avec près de 58 %). Enfin, le porphyre est une texture (gros cristaux dans une pâte fine, cristallisation en deux temps), pas une variété d’andésite comme le laisse entendre le livre.",
    mnemo: "Le basalte, c’est du gabbro refroidi en urgence : même composition sombre, grain fin. Le porphyre, c’est une pâte à gâteau avec des pépites de chocolat : de gros cristaux noyés dans une pâte fine.",
    flash: {"q":"Le porphyre est-il une roche à part entière ?","a":"Non, c’est une texture : de gros cristaux (phénocristaux) dans une pâte plus fine, signe d’une cristallisation en deux temps. On parle par exemple d’une andésite porphyrique.","keys":[["texture"]]},
    qcm: {"q":"Quelle roche domine à Savennières, d’après les sources ?","opts":["La rhyolite","Le basalte","Le schiste","Le granite"],"good":2,"expl":"La rhyolite y existe bel et bien (environ 5 %) mais le livre la met en avant alors que le sol dominant de l’appellation est le schiste."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Le porphyre est une roche volcanique à part, au même titre que la rhyolite ou l’andésite.","answer":false},"explanation":"Porphyrique décrit un aspect, pas une composition : une andésite, un granite ou un basalte peuvent être porphyriques. C’est une erreur du livre, qui présente le porphyre comme la forme la plus connue de l’andésite."},
      {"type":"matching","prompt":"Associe chaque vignoble à ce que disent les sources.","payload":{"pairs":[["Forst (Palatinat)","Basalte sur certains lieux-dits seulement (Pechstein, Freundstück)"],["Columbia Valley","Basalte en socle sous des sols de loess et d’alluvions"],["Savennières","Rhyolite minoritaire, schiste dominant"],["Auvergne","Activité volcanique citée par l’INAO, sans nommer le basalte"]]},"explanation":"Dans chaque cas, la roche volcanique n’est pas forcément celle qu’on a sous le pied en surface : savoir si elle affleure, est en socle ou ne couvre qu’une partie du vignoble évite les raccourcis."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Le livre juge le basalte altéré {{fertile|très fertile}}, mais les sols volcaniques de vigne sont souvent {{pauvres}} en matière organique et très {{drainants|drainant}}."},"explanation":"La richesse minérale potentielle de la roche ne dit rien de ce que la vigne en tire : sol filtrant, peu d’humus et nutriments peu disponibles donnent plutôt de faibles rendements."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Auvergne (⚠️) : la fiche INAO des Côtes d’Auvergne ne nomme pas le basalte ; les sols incluent aussi granite et sédimentaire selon les secteurs, non vérifié.",
      "Forst et basalte (⚠️, une seule source) : basalte du volcan Pechstein limité à certains lieux-dits, le reste sur grès bigarré, calcaire, argile, limon.",
      "Columbia Valley (⚠️, une source officielle) : le basalte est le substrat profond, les sols de surface sont surtout du loess et des alluvions de crue.",
      "Savennières (⚠️, une seule source) : répartition schistes 57,6 %, rhyolites ou microgranites 4,9 % ; chiffre à recouper avec le BRGM ou l’ODG. Coteaux du Layon non vérifiés.",
      "Fertilité des sols basaltiques (⚠️, divergence) : sols volcaniques réputés fertiles en agriculture générale, mais pauvres en matière organique et peu productifs en vigne selon un article technique ; la montmorillonite citée par le livre n’est pas retrouvée.",
      "Porphyre (⚠️, correction du livre) : texture et non roche d’après deux sources (Futura-Sciences, Oxford).",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 132 ; INAO (fiche Côtes d’Auvergne) ; Washington State Wine Commission (Columbia Valley) ; Vins et Millésimes (Savennières) ; Réussir Vigne (vignobles volcaniques) ; WorldAtlas (sols volcaniques) ; Futura-Sciences (porphyrique) ; Université d’Oxford, Earth Sciences (andésite)",
    page: 132
  },
  {
    id: 165,
    theme: "Géologie-Terroir",
    sous: ["Roches","Volcanique"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les projections volcaniques : cendres, lapilli, ponce, tuf",
    synth: "Une éruption explosive projette des fragments de lave et de roche, les téphras ou roches pyroclastiques : poussières et cendres, lapilli, blocs et bombes, ponce (écume de lave solidifiée). Des cendres compactées donnent le tuf, roche tendre qui a donné son nom au village de Tufo, et donc au Greco di Tufo (Campanie, où les sols mêlent aussi argile, calcaire et soufre) ; à Tokaj, c’est un tuf rhyolitique riche en ponce qui domine, et qui a servi aux caves et aux murs de terrasses. À Lanzarote, une couche de lapilli, le picón, couvre le sol : elle laisse filtrer la pluie, limite l’évaporation et tempère le sol, et chaque vigne est plantée dans une cuvette. À Santorin, le sol aspa mélange basalte, ponce, cendre et andésite.",
    mnemo: "La farine, le gravier, le pavé : cendres, lapilli, blocs et bombes. Et le tuf, c’est la farine qui a pris comme du ciment.",
    flash: {"q":"Qu’est-ce que le picón de Lanzarote et à quoi sert-il ?","a":"Une couche de lapilli volcanique posée sur le sol : elle laisse filtrer la pluie, limite l’évaporation et stabilise la température. Les vignes sont plantées dans des cuvettes individuelles (hoyos).","keys":[["lapilli","pouzzolane"]]},
    qcm: {"q":"À quoi sert principalement la couche de picón sur le sol de Lanzarote ?","opts":["Filtrer l’eau de pluie, limiter l’évaporation et stabiliser la température","Apporter de la matière organique à la vigne","Protéger la vigne du gel hivernal","Fournir de l’argile qui retient l’eau"],"good":0,"expl":"Sur une île très sèche, la gestion de l’eau prime : le lapilli est une couverture minérale, pas un engrais, et il ne contient pas d’argile qui retiendrait l’eau."},
    exos: [
      {"type":"matching","prompt":"Associe chaque vignoble à son sol d’origine volcanique.","payload":{"pairs":[["Lanzarote","Couche de lapilli (picón)"],["Greco di Tufo","Tuf, cendres compactées"],["Tokaj","Tuf rhyolitique riche en ponce"],["Santorin","Sol aspa : basalte, ponce, cendre, andésite"]]},"explanation":"Les quatre lieux utilisent des produits de projection, mais à des états différents : fragments libres (lapilli), roche consolidée (tuf) ou mélange meuble (aspa)."},
      {"type":"odd_one_out","prompt":"Lequel de ces matériaux n’est pas un produit de projection volcanique ?","payload":{"options":["Cendre","Lapilli","Ponce","Granite"],"answer":3},"explanation":"Le granite cristallise en profondeur et n’est jamais projeté : les trois autres sont des fragments expulsés lors d’éruptions explosives."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"À Tokaj, la ponce forme à elle seule le sol des vignes, sans autre roche.","answer":false},"explanation":"La ponce y est un composant des tufs rhyolitiques, qui sont des roches consolidées : confondre le fragment et la roche qui le contient est l’erreur à éviter."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Tuf et Greco di Tufo (⚠️, une seule source) : le tuf n’est pas le seul sol, calcaire et argile dominent selon la commune.",
      "Tokaj (⚠️, une étude géologique à l’échelle régionale) : tuf rhyolitique dominant, ponce incluse dans les tufs ; Lipari non vérifié.",
      "Santorin (⚠️) : sol aspa décrit par deux pages du même site, pas d’indépendance entre elles.",
      "Ponce = écume de lave solidifiée et classement des téphras (⚠️) : définitions du livre non recoupées par les sources lues.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 131-132 ; DO Lanzarote (Suelo) ; ICEX, Foods and Wines from Spain (vins de Lanzarote) ; article Springer sur la géologie volcanique de Tokaj",
    page: 132
  },
  {
    id: 166,
    theme: "Géologie-Terroir",
    sous: ["Volcanique"],
    niveau: "Pointu",
    geo: null,
    titre: "Les « vins de volcan » : une signature commune ?",
    synth: "Des vignobles occupent des volcans actifs, éteints ou endormis, sur des îles comme sur des continents : Santorin, l’Etna, l’Auvergne, le Kaiserstuhl ou le Rangen de Thann en Alsace. Leurs sols sont décrits comme très drainants et pauvres en matière organique, avec des nutriments peu disponibles mais certains minéraux abondants. Des analyses rapportées par John Szabo relèvent par exemple davantage de potassium dans des vins de volcan que dans des vins non volcaniques, sans que l’effet sur le goût soit démontré scientifiquement. Aucune signature commune n’est donc établie : le mot « volcanique » recouvre des roches et des âges très différents, du Paléozoïque (Rangen) au Miocène (Kaiserstuhl).",
    mnemo: "Le volcan laisse des indices, pas encore une empreinte digitale.",
    flash: {"q":"Peut-on parler d’une signature démontrée des « vins de volcan » ?","a":"Non : des analyses rapportées par John Szabo relèvent des écarts chimiques (potassium notamment), mais leur effet sur le goût n’est pas démontré scientifiquement. La question reste ouverte."},
    qcm: {"q":"Que peut-on affirmer aujourd’hui sur les vins de volcan ?","opts":["Ils partagent une signature minérale démontrée au goût","Des écarts chimiques sont rapportés, mais leur effet gustatif n’est pas démontré","Ils proviennent tous de volcans encore actifs","Ils reposent tous sur du basalte"],"good":1,"expl":"Constater une différence dans l’analyse chimique ne prouve pas qu’elle soit perçue en dégustation. Les vignobles de volcan ne sont d’ailleurs ni tous sur volcan actif ni tous sur basalte."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Tous les vignobles dits « de volcan » reposent sur des laves récentes de basalte.","answer":false},"explanation":"Le Rangen de Thann relève d’un volcanisme paléozoïque en roches volcano-sédimentaires, le Kaiserstuhl est un massif miocène sous loess et Tokaj est sur tufs rhyolitiques : l’étiquette « volcanique » cache des histoires très différentes."},
      {"type":"mcq_multi","prompt":"Quels traits attribue-t-on couramment aux sols volcaniques de vigne ?","payload":{"options":["Très drainants","Pauvres en matière organique","Toujours très riches en humus","Nutriments peu disponibles"],"answers":[0,1,3]},"explanation":"Ces sols filtrent vite et contiennent peu d’humus ; l’abondance en minéraux de la roche ne veut pas dire que la vigne y accède facilement."},
      {"type":"matching","prompt":"Associe chaque vignoble à son contexte volcanique.","payload":{"pairs":[["Santorin","Sol aspa, vestige d’un ancien stratovolcan"],["Rangen de Thann","Grauwacke volcanique, volcanisme paléozoïque"],["Kaiserstuhl","Massif volcanique miocène recouvert de loess"],["Lanzarote","Cendres et lapilli d’éruptions du XVIIIe siècle"]]},"explanation":"Entre un volcan de l’ère primaire, un massif miocène et des éruptions vieilles de trois siècles, la notion de « terroir volcanique » recouvre des réalités qui ne se comparent pas facilement."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Analyses de John Szabo (⚠️) : rapportées par un article de presse technique, pas par une publication à comité de lecture ; le second chercheur cité par le livre n’est pas confirmé et n’est pas utilisé ici.",
      "Caractères des sols volcaniques de vigne (⚠️, une source technique) : drainants, pauvres en matière organique, nutriments peu disponibles.",
      "Rangen de Thann et Kaiserstuhl (⚠️, une source chacune) : volcanisme paléozoïque ancien pour le Rangen, loess sur socle volcanique miocène au Kaiserstuhl.",
      "Santorin (⚠️, même site pour toutes les pages) ; statut « endormi » du volcan non confirmé.",
      "Etna (⚠️, sources de niveau 2b) : sols d’origine volcanique, la nature basaltique des laves n’est pas confirmée.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 132 ; Réussir Vigne (trois spécificités des vignobles volcaniques) ; DO Lanzarote (Suelo)",
    page: 132
  },
  {
    id: 167,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Fondamental",
    geo: null,
    titre: "Naissance d’une roche sédimentaire",
    synth: "Une roche sédimentaire se fabrique en surface en quatre temps : la roche mère est désagrégée et altérée, les particules sont transportées (eau, glace, vent, gravité), elles se déposent en couches, puis la diagenèse les transforme en roche par compaction et cimentation. Ces roches gardent la trace de leur milieu de dépôt, par exemple les fossiles de la craie. Elles recouvrent environ les trois quarts des terres émergées, mais ne forment qu’environ 8 % du volume de la croûte : une mince pellicule sur des roches magmatiques et métamorphiques. Le livre parle de « plus de 70 % de la croûte », ce qui vaut pour la surface des continents et non pour le volume.",
    mnemo: "Un mille-feuille : on émiette (altération), on transporte la crème (transport), on étale les couches (dépôt), puis on presse et on laisse prendre (diagenèse).",
    flash: {"q":"Quelle étape transforme un sédiment meuble en roche ?","a":"La diagenèse : compaction des grains et cimentation entre eux.","keys":[["diagenèse","diagenese"]]},
    qcm: {"q":"Dans quel ordre se produisent les étapes de formation d’une roche sédimentaire ?","opts":["Dépôt, altération, transport, diagenèse","Altération, transport, dépôt, diagenèse","Transport, altération, diagenèse, dépôt","Altération, diagenèse, transport, dépôt"],"good":1,"expl":"Il faut d’abord des particules (altération), qu’on déplace (transport) puis qui s’accumulent (dépôt) ; la transformation en roche vient en dernier."},
    exos: [
      {"type":"ordering","prompt":"Remets les étapes de la formation d’une roche sédimentaire dans l’ordre.","payload":{"items":["Désagrégation et altération de la roche mère","Transport des particules","Dépôt en couches (sédimentation)","Diagenèse : compaction et cimentation"]},"explanation":"Chaque étape dépend de la précédente : sans particules libérées, rien à transporter ; sans dépôt, rien à compacter. La roche n’apparaît qu’à la fin."},
      {"type":"matching","prompt":"Associe chaque processus à son effet.","payload":{"pairs":[["Gel et eau","Désagrégation mécanique de la roche"],["Bactéries, lichens, racines","Altération chimique ou biochimique des minéraux"],["Compaction","Réduction de la porosité par la pression"],["Cimentation","Soudure des grains par un ciment"]]},"explanation":"L’altération produit les particules, la diagenèse les soude : le gel casse sans changer les minéraux, les organismes les transforment chimiquement (feldspaths en argile, par exemple)."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les roches sédimentaires forment l’essentiel du volume de la croûte terrestre.","answer":false},"explanation":"Elles couvrent une grande part de la surface des continents mais ne constituent qu’une fine couche superficielle : en profondeur, la croûte est surtout magmatique et métamorphique."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Part des roches sédimentaires (⚠️) : le livre dit « plus de 70 % de la croûte » ; les sources donnent environ 70-75 % de la surface des continents et environ 8 % du volume de la croûte, d’où la formulation corrigée de la fiche.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 133-135 ; LibreTexts Geosciences (SUNY Potsdam), Sedimentary Geology, Introduction ; Futura-Sciences, Roche sédimentaire.",
    page: 133
  },
  {
    id: 168,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Roches détritiques : de l’argile au poudingue",
    synth: "Les roches détritiques sont faites de débris de roches préexistantes, classés par taille : argile, silt (limon), sable, puis gravier, galets et blocs. Tant que les grains restent libres, le sédiment est meuble ; un ciment les soude en argilite, siltite, grès ou conglomérat (poudingue). Le seuil entre sable et gravier est de 2 mm ; au-delà de 4 mm, on parle de cailloutis. Dans les vignobles, on rencontre poudingues, grès et safres (grès compact du sud du Rhône, présent à Châteauneuf-du-Pape).",
    mnemo: "Du plus fin au plus gros : « A-S-S-G » comme Argile, Silt, Sable, Gravier ; on passe de la poudre de cacao au petit pois.",
    flash: {"q":"Quelle roche détritique consolidée correspond à un sable cimenté ?","a":"Le grès.","keys":[["grès","gres"]]},
    qcm: {"q":"Quel est le seuil standard entre sable et gravier ?","opts":["63 µm","0,5 mm","2 mm","4 cm"],"good":2,"expl":"63 µm sépare le silt du sable ; c’est 2 mm qui sépare le sable du gravier."},
    exos: [
      {"type":"ordering","prompt":"Classe ces particules de la plus fine à la plus grosse.","payload":{"items":["Argile","Silt","Sable","Gravier"]},"explanation":"Le classement repose sur des seuils de taille : l’argile est invisible à l’œil nu, le silt reste farineux, le sable est perceptible grain à grain, le gravier dépasse 2 mm."},
      {"type":"matching","prompt":"Associe chaque sédiment meuble à la roche consolidée qu’il donne.","payload":{"pairs":[["Sable","Grès"],["Galets et graviers","Poudingue (conglomérat)"],["Argile","Argilite"],["Silt","Siltite"]]},"explanation":"La roche consolidée garde la granulométrie du sédiment d’origine : seul le ciment change. Un poudingue se reconnaît à ses galets arrondis noyés dans le ciment."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Un grain de 1 mm est un gravier.","answer":false},"explanation":"La limite entre sable et gravier est fixée à 2 mm : à 1 mm, le grain reste un sable grossier, que l’on sent nettement sous les doigts."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Seuil de l’argile (⚠️) : 2 µm en pédologie et dans de nombreux manuels européens, 4 µm selon l’échelle de Wentworth (USGS) ; seule l’USGS a été lue. Seuil non utilisé dans les exercices.",
      "Seuil sable/gravier de 2 mm (⚠️, une seule source, USGS, niveau 1) : norme de Wentworth ; le « > 4 mm » du livre désigne les cailloutis, pas une contradiction.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 133-134 ; USGS, Open-File Report 2006-1195, Sediment nomenclature ; Futura-Sciences, Roche sédimentaire ; Decanter, Walls: the joy of sand ; WineWithSeth, Châteauneuf-du-Pape AOC.",
    page: 133
  },
  {
    id: 169,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Roches chimiques et biochimiques : craie, diatomite, gypse, tuffeau",
    synth: "Certaines roches naissent de la précipitation d’ions dissous (le gypse, évaporite) ; d’autres, de l’activité d’organismes vivants. La craie est un calcaire très poreux fait de coccolithes, plaques d’algues planctoniques : c’est la roche de la Champagne. La diatomite est une roche siliceuse formée de squelettes de diatomées, très poreuse, utilisée pour filtrer le vin (kieselguhr). Le tuffeau, calcaire blanc crayeux de la Loire, se distingue de la craie de Champagne (débris de coquilles et foraminifères plutôt que coccolithes, selon Futura-Sciences). Le classement varie selon les sources : le livre range le silex parmi les chimiques, d’autres le comptent parmi les biochimiques.",
    mnemo: "Craie = cimetière de petites plaques d’algues ; diatomite = verre pilé de squelettes d’algues qui sert de filtre ; gypse = croûte laissée par l’eau qui s’évapore.",
    flash: {"q":"De quoi la craie est-elle principalement faite ?","a":"De coccolithes, plaques calcaires d’algues planctoniques.","keys":[["coccolithes","coccolithe"]]},
    qcm: {"q":"Quelle roche est utilisée pour filtrer le vin sous le nom de kieselguhr ?","opts":["La craie","Le gypse","La diatomite","Le tuffeau"],"good":2,"expl":"Craie et tuffeau sont des calcaires, le gypse un sulfate : seule la diatomite, siliceuse et poreuse à 85-95 %, sert de terre filtrante."},
    exos: [
      {"type":"matching","prompt":"Associe chaque roche à son origine.","payload":{"pairs":[["Craie","Coccolithes d’algues planctoniques"],["Diatomite","Squelettes siliceux de diatomées"],["Gypse","Précipitation par évaporation d’une eau saturée"],["Tuffeau","Calcaire à carapaces et foraminifères, mer peu profonde"]]},"explanation":"Chaque origine laisse une signature : le plancton calcaire donne une roche carbonatée, les diatomées une roche siliceuse, l’évaporation un sel de sulfate."},
      {"type":"odd_one_out","prompt":"Laquelle de ces roches n’est pas d’origine biologique ?","payload":{"options":["Craie","Diatomite","Gypse","Tuffeau"],"answer":2},"explanation":"Le gypse cristallise quand l’eau s’évapore, sans intervention directe d’organismes. Les trois autres sont constituées de restes d’êtres vivants."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Toutes les sources s’accordent pour ranger le silex parmi les roches chimiques.","answer":false},"explanation":"Le livre le range parmi les chimiques, mais d’autres sources le classent plutôt parmi les biochimiques (chert). Le classement dépend de la source."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"La diatomite, aussi appelée {{kieselguhr}}, sert à {{filtrer|clarifier}} le vin."},"explanation":"Sa structure poreuse retient les particules en suspension tout en laissant passer le liquide, d’où son emploi en œnologie."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Classement du silex (⚠️) : chimique selon le livre ; un classement biochimique (chert) est avancé ailleurs, à sourcer ; classification non unanime, présentée comme telle.",
      "Diatomite « abrasive » (⚠️) : le BRGM la décrit comme faiblement abrasive (Mohs 4,5-6), non reprise dans la fiche.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 134 ; Futura-Sciences, Roche sédimentaire et Tuffeau ; BRGM/MineralInfo, Diatomite ; Champagne Larmandier-Bernier, Géologie, pédologie et dégustation ; Wine Review Online, Bubbling up from the chalk.",
    page: 134
  },
  {
    id: 170,
    theme: "Géologie-Terroir",
    sous: ["Calcaire","Roches"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Bourgogne","appel":null},
    titre: "Le calcaire et ses cousins : dolomie, marne, calcaire oolithique",
    synth: "Un calcaire contient au moins 50 % de carbonates, rarement purs (au-delà de 90 %, on parle de calcaire pur). Il se dissout lentement dans l’eau, réagit à l’acide et donne des sols au pH élevé. Sa rétention d’eau varie beaucoup avec sa porosité et sa fissuration : une craie très poreuse stocke l’eau, un calcaire dur et fissuré draine. Parmi ses cousins, la dolomie est riche en magnésium (dolomite), et la marne mêle calcaire et argile (grossièrement entre 35 et 65 % d’argile : « moitié-moitié » est une simplification). En Côte-d’Or, certains calcaires du Bajocien sont oolithiques, faits de petits grains sphériques.",
    mnemo: "Le calcaire est une éponge à géométrie variable : la craie boit, le calcaire dur laisse filer. Marne = sandwich calcaire-argile ; dolomie = calcaire « magnésien » de Dolomieu, celui qui a baptisé les Dolomites.",
    flash: {"q":"Qu’est-ce qu’une dolomie ?","a":"Une roche carbonatée riche en magnésium (dolomite), dont le nom vient du géologue Déodat de Dolomieu, qui l’a aussi donné aux Dolomites.","keys":[["magnésium","magnesium"],["dolomite","carbonat"]]},
    qcm: {"q":"Une marne est un mélange de :","opts":["Sable et gravier","Calcaire et argile","Argile et schiste","Gypse et sel"],"good":1,"expl":"C’est la proportion relative de calcaire et d’argile qui distingue argile, marne, calcaire marneux et calcaire."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Un sol calcaire retient toujours bien l’eau.","answer":false},"explanation":"Tout dépend de la porosité : la craie stocke l’eau, alors qu’un calcaire dur et fissuré la laisse s’écouler. Généraliser est une simplification."},
      {"type":"matching","prompt":"Associe chaque roche à sa particularité.","payload":{"pairs":[["Dolomie","Riche en magnésium"],["Marne","Mélange de calcaire et d’argile"],["Calcaire oolithique","Petits grains sphériques formés en mer agitée peu profonde"],["Craie","Calcaire très poreux de coccolithes"]]},"explanation":"Chaque nom renvoie à un ingrédient ou à une texture : le magnésium, l’argile, les grains sphériques, le plancton."},
      {"type":"short_answer","prompt":"Quel test simple fait réagir un calcaire (effervescence) ?","payload":{"accepted":["acide","l’acide","un acide","acide chlorhydrique","vinaigre"]},"explanation":"Les carbonates libèrent du gaz carbonique au contact d’un acide : c’est ce qui permet de les distinguer d’un grès ou d’un schiste sur le terrain."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Seuil de 50 % (⚠️) : seuil général de carbonates (calcite, aragonite, dolomite) selon Futura/OQLF, pas uniquement de CaCO3 ; calcaire pur au-delà de 90 % : à sourcer.",
      "Propriétés du calcaire (⚠️) : rétention d’eau très variable selon porosité ; pH élevé cohérent mais non chiffré dans les sources lues.",
      "Marne (⚠️) : « parts égales » du livre simplifie un intervalle d’environ 35-65 % d’argile (Universalis, une seule source).",
      "Calcaires oolithiques de Côte-d’Or (⚠️) : confirmés dans le Bajocien par une seule source (WineWithSeth) ; entroques de Pouilly-Fuissé non vérifiées, non reprises.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 134 ; Futura-Sciences, Roche carbonatée et Dolomie ; OQLF, Grand dictionnaire terminologique, calcaire ; Encyclopædia Universalis, Marnes ; Larmandier-Bernier, Géologie, pédologie et dégustation ; WineWithSeth, Côte d’Or geology.",
    page: 134
  },
  {
    id: 171,
    theme: "Géologie-Terroir",
    sous: ["Galets","Roches"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Vallée du Rhône","appel":"Châteauneuf-du-Pape"},
    titre: "Galets roulés et graves : drainants, inertes, et pourtant précieux",
    synth: "Graves et galets drainent très bien mais sont chimiquement inertes : ils n’apportent pas de nutriments. À Châteauneuf-du-Pape, les galets roulés alpins des terrasses villafranchiennes du Rhône reposent sur une matrice argileuse rougeâtre ; l’intérêt du terroir vient donc surtout des argiles dessous, qui retiennent l’eau. Le rôle des galets comme réservoirs de chaleur est débattu : un vigneron de Château La Nerthe parle même de mythe.",
    mnemo: "Le galet est un tamis : il laisse filer l’eau et ne nourrit rien ; c’est l’argile dessous, le réservoir, qui abreuve la vigne.",
    flash: {"q":"Explique : pourquoi des galets roulés, chimiquement inertes, peuvent-ils pourtant faire un bon terroir ?","a":"Les galets drainent bien et laissent la racine descendre, mais ils n’apportent rien. L’intérêt vient des argiles situées en dessous, qui retiennent l’eau et la restituent à la vigne.","keys":[["argile","argiles"],["drain","eau"]]},
    qcm: {"q":"À Châteauneuf-du-Pape, d’où vient surtout l’intérêt du terroir de galets selon les vignerons sceptiques ?","opts":["De la chaleur stockée par les galets","Des argiles sous les galets","De la richesse chimique des galets","De la proximité du Rhône"],"good":1,"expl":"Les galets sont inertes : l’eau stockée dans l’argile explique ce que les cailloux seuls ne peuvent fournir."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Tous les vignerons de Châteauneuf-du-Pape s’accordent pour dire que les galets restituent la chaleur la nuit.","answer":false},"explanation":"Ce rôle thermique est contesté : certains parlent de mythe et mettent plutôt en avant l’argile sous-jacente. Le débat reste ouvert."},
      {"type":"mcq_multi","prompt":"Quelles propriétés les galets et graves ont-ils selon le livre ?","payload":{"options":["Ils drainent très bien","Ils sont chimiquement inertes","Ils apportent beaucoup d’éléments nutritifs","Ils retiennent fortement l’eau"],"answers":[0,1]},"explanation":"Des cailloux ne libèrent pas de nutriments et laissent l’eau s’écouler : ce qui retient l’eau et nourrit, c’est la fraction fine située dessous."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Galets drainants et inertes (⚠️) : propriétés reprises du livre ; seul le cas de Châteauneuf-du-Pape est documenté (WineWithSeth, une seule source), les graves bordelaises n’ont pas été recoupées.","Rôle thermique des galets (⚠️) : débat présenté comme tel (opinion de Ralph Garcin, Château La Nerthe, rapportée par une source), non tranché.","Inertie limitée aux galets et graves : le livre ne l’applique pas aux lœss ni aux sables."],
    src: "Mille Vignes, P. Lepeltier, p. 135 ; WineWithSeth, Châteauneuf-du-Pape AOC ; Decanter, Walls: the joy of sand.",
    page: 135
  },
  {
    id: 172,
    theme: "Géologie-Terroir",
    sous: ["Calcaire"],
    niveau: "Pointu",
    geo: {"pays":"États-Unis","region":"Californie","appel":"Mount Harlan"},
    titre: "Calera : chercher du calcaire hors de France",
    synth: "Bourgogne et Champagne reposent sur des sédiments calcaires, ce qui a poussé des vignerons à chercher des sols comparables ailleurs. Josh Jensen (le livre écrit « Jansen »), passé par le Domaine de la Romanée-Conti et par Dujac, a installé Calera sur le mont Harlan, en Californie, dans les années 1970. Le livre en tire une leçon : croire à une adéquation parfaite entre un cépage et une roche est réducteur, des pistes restent à explorer.",
    mnemo: "Calera veut dire « four à chaux » : Jensen a planté sa Bourgogne là où l’on cuisait le calcaire.",
    flash: {"q":"Quel type de sol Josh Jensen cherchait-il en Californie, inspiré par la Bourgogne ?","a":"Un sol calcaire.","keys":[["calcaire","calcair"]]},
    qcm: {"q":"Qu’illustre l’aventure de Calera selon le livre ?","opts":["Qu’un cépage ne réussit que sur une seule roche","Qu’associer un cépage à une roche unique est réducteur","Que le calcaire est indispensable à tout grand vin","Que les vignobles du Nouveau Monde n’ont pas de terroir"],"good":1,"expl":"La démarche de Jensen part d’une idée (le calcaire bourguignon) mais montre surtout que des terroirs restent à explorer, pas qu’une règle unique existe."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Calera est installé sur le mont Harlan, en Californie.","answer":true},"explanation":"Le site se trouve dans les Gabilan Mountains. La date exacte de plantation varie selon les sources, ce qui justifie de ne retenir que la décennie."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"« Calera » signifie « {{four à chaux}} » en espagnol : un ancien four se trouvait sur la propriété, signe du {{calcaire}} du site."},"explanation":"On cuisait le calcaire pour en faire de la chaux : le nom du domaine rappelle la roche que Jensen était venu chercher."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Date de plantation (⚠️) : le livre dit 1974 ; Wine Spectator situe la découverte du site en 1974, Vinography l’achat du terrain en 1973 et la plantation en 1975 ; seule la décennie est retenue, aucun exercice sur l’année.","Four à chaux sur la propriété (⚠️, une source : Vinography)."],
    src: "Mille Vignes, P. Lepeltier, p. 135 ; Wine Spectator, Josh Jensen dies at 78 ; Vinography, 50 Years of Limestone Dreams (Calera).",
    page: 135
  },
  {
    id: 173,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le métamorphisme : une roche transformée sans fondre",
    synth: "Le métamorphisme transforme une roche préexistante (le protolithe) à l’état solide : sous l’effet de la pression, de la température et des fluides, ses minéraux se recomposent par recristallisation, par opposition à la cristallisation d’un magma. Quand la contrainte est orientée, la roche prend une structure en feuillets (foliation, dont la schistosité). Le livre dit que la pression vaut « 12 fois » celle de la surface vers 12-24 km de profondeur ; c’est une erreur, car la colonne de roche pèse des centaines de MPa, soit des milliers de fois la pression atmosphérique (le diagramme du livre, p. 137, donne d’ailleurs 500 à 1 000 MPa).",
    mnemo: "La cocotte-minute : pression et chaleur, l’aliment reste solide mais sa structure change complètement ; si tout fondait, on ne ferait plus du métamorphisme mais du magma.",
    flash: {"q":"Qu’est-ce que le métamorphisme ?","a":"La transformation d’une roche à l’état solide, sans fusion, par recristallisation de ses minéraux sous l’effet de la pression et de la température.","keys":[["solide","sans fusion","sans fondre"],["pression"],["température","temperature"]]},
    qcm: {"q":"Qu’est-ce qui distingue le métamorphisme de la formation d’une roche magmatique ?","opts":["La roche est transformée à l’état solide, sans passer par un magma","La roche se forme toujours en surface","La roche fond complètement avant de se recristalliser","La roche est issue de sédiments non consolidés"],"good":0,"expl":"Le magmatisme part d’un liquide qui cristallise ; le métamorphisme part d’une roche déjà solide dont les minéraux se réorganisent."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Aux profondeurs où se forment les roches métamorphiques, la pression n’est qu’une douzaine de fois celle de la surface.","answer":false},"explanation":"Ces roches supportent le poids de kilomètres de roche au-dessus d’elles : on parle de centaines de MPa, alors que la pression atmosphérique est d’environ 0,1 MPa. Le facteur est de plusieurs milliers, pas de douze."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Le métamorphisme transforme un {{protolithe}} resté à l’état {{solide}}, sans {{fusion|fondre|fondre complètement}}."},"explanation":"Le terme protolithe désigne la roche de départ ; si elle fondait, on sortirait du métamorphisme pour entrer dans le domaine du magma."},
      {"type":"mcq_multi","prompt":"Quels facteurs provoquent le métamorphisme d’une roche ?","payload":{"options":["La pression","La température","Les fluides qui circulent dans la roche","La cristallisation d’un magma en surface"],"answers":[0,1,2]},"explanation":"La cristallisation d’un magma fabrique une roche magmatique : c’est l’opposé du métamorphisme, qui modifie une roche déjà formée."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Ordre de grandeur de la pression (⚠️) : « centaines de MPa » vient d’un calcul de contrôle (environ 27 MPa par km), cohérent avec le diagramme du livre et la fourchette des gneiss, mais non trouvé tel quel dans une source lue ; il corrige l’erreur « 12 fois » du livre (contradiction interne p. 136 / p. 137).",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 136-137 ; Futura-Sciences, Métamorphisme ; Encyclopædia Universalis, Métamorphisme et géodynamique",
    page: 136
  },
  {
    id: 174,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "De l’argile à la migmatite : une gradation sans frontière nette",
    synth: "Une argile enfouie de plus en plus profondément devient successivement ardoise, phyllade, schiste ou micaschiste, puis gneiss, et enfin migmatite, déjà partiellement fondue. Ces noms jalonnent un continuum : les limites entre ardoise, schiste et micaschiste ne sont pas strictement fixées, d’où l’absence de classification de référence. Le gneiss alterne des lits clairs (quartz, feldspaths) et sombres (micas). Une autre série part du basalte ou du gabbro et passe par les schistes verts et l’amphibolite ; sous très haute pression (subduction), elle donne l’éclogite.",
    mnemo: "L’ascenseur vers les profondeurs : à chaque étage plus bas, l’argile change de nom (ardoise, schiste, micaschiste, gneiss) jusqu’au sous-sol où elle commence à fondre (migmatite).",
    flash: {"q":"Dans la série qui part de l’argile, quelle roche est déjà partiellement fondue ?","a":"La migmatite, au-delà du gneiss : fusion partielle, parties claires fondues mêlées à un résidu sombre.","keys":[["migmatite"]]},
    qcm: {"q":"Parmi ces roches issues d’une argile, laquelle est la plus transformée ?","opts":["Ardoise","Micaschiste","Gneiss","Argilite"],"good":2,"expl":"Plus l’enfouissement est profond, plus la roche s’éloigne de l’argile : l’argilite est à peine transformée, l’ardoise est de bas grade, le gneiss de haut grade."},
    exos: [
      {"type":"ordering","prompt":"Classe ces roches par degré de métamorphisme croissant, à partir d’une argile.","payload":{"items":["Argile","Ardoise","Micaschiste","Gneiss","Migmatite"]},"explanation":"Chaque stade correspond à des conditions plus profondes et plus chaudes : les micas grossissent du schiste au micaschiste, puis le gneiss s’organise en lits, et la migmatite marque le début de la fusion."},
      {"type":"matching","prompt":"Associe chaque roche à son trait distinctif.","payload":{"pairs":[["Gneiss","Lits clairs (quartz, feldspaths) et sombres (micas) alternés"],["Migmatite","Roche partiellement fondue : parties claires fondues et résidu sombre"],["Amphibolite","Stade intermédiaire de la série du basalte, après les schistes verts"],["Éclogite","Très haute pression, issue de gabbros ou de basaltes déshydratés"]]},"explanation":"Les deux séries (argile et basalte) ne produisent pas les mêmes roches : la composition de départ oriente l’assemblage minéral final."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Il existe une frontière nette et universelle entre l’ardoise, le schiste et le micaschiste.","answer":false},"explanation":"Ces roches se succèdent par degrés. Le passage de l’une à l’autre dépend de paramètres multiples, et les noms de terrain recouvrent des roches proches."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 136-138 ; Futura-Sciences, Métamorphisme, Gneiss et Migmatite ; Encyclopædia Universalis, Métamorphisme et géodynamique",
    page: 136
  },
  {
    id: 175,
    theme: "Géologie-Terroir",
    sous: ["Schiste","Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vignobles sur ardoises et schistes : Anjou noir, Faugères, Moselle, Priorat, Douro",
    synth: "Anciennes argiles métamorphisées, les ardoises et schistes donnent leur identité à plusieurs vignobles : l’Anjou noir, Faugères (sols exclusivement schisteux sur sept communes de l’Hérault), la Côte Brune de Côte-Rôtie, la Moselle, le Priorat (la llicorella) et le Douro (le xisto). Mais « schiste » recouvre des roches très différentes : phyllades, schistes argileux, micaschistes, et même, sur le Marienburg en Moselle, des schistes gris, rouge et bleu aux vins distincts. Le livre avance que leur effet passe peut-être par des voies indirectes (chaleur, lumière, vie du sol) plutôt que par la roche elle-même : attribuer directement le goût au schiste est hasardeux.",
    mnemo: "Une ardoise de toit, c’est un livre aux pages collées : la roche se délite en feuillets, et les racines s’y glissent comme un marque-page entre les pages.",
    flash: {"q":"Quelle appellation de l’Hérault repose uniquement sur des sols de schiste ?","a":"Faugères, sur sept communes du piémont du Haut-Languedoc.","keys":[["faugères","faugeres"]]},
    qcm: {"q":"Comment appelle-t-on l’ardoise ou schiste feuilleté, sombre et cuivré, du Priorat ?","opts":["La llicorella","Le xisto","La cornéenne","Le Schiefer"],"good":0,"expl":"Xisto est le terme portugais du Douro et Schiefer le mot allemand pour schiste ; la cornéenne est une autre roche (métamorphisme de contact)."},
    exos: [
      {"type":"flashcard","prompt":"Explique : pourquoi est-il hasardeux d’attribuer directement le goût d’un vin à son schiste ?","payload":{"answer":"Parce que « schiste » recouvre des roches très différentes (ardoise, phyllade, micaschiste ; schistes gris, rouge ou bleu d’un même vignoble de Moselle), et que l’effet sur le vin passe sans doute par des voies indirectes (chaleur, drainage, enracinement dans les feuillets, vie du sol) plutôt que par un goût transmis par la roche. Le lien direct n’est pas démontré."},"explanation":"Question fil rouge du chapitre « Comprendre les roches métamorphiques » (Mille Vignes, p. 136-138). Sont attendus : la diversité des roches regroupées sous le mot schiste, et l’idée d’effets indirects plutôt que d’un transfert de goût."},
      {"type":"matching","prompt":"Associe chaque vignoble à son trait schisteux.","payload":{"pairs":[["Priorat","Llicorella, schiste feuilleté sombre"],["Douro","Xisto : schistes fracturés verticalement, où plongent les racines"],["Faugères","Sols uniquement schisteux, dans l’Hérault"],["Moselle (Marienburg)","Schistes gris, rouge et bleu aux vins distincts"]]},"explanation":"Les noms locaux (llicorella, xisto) désignent des familles de roches, pas une roche unique : un même mot en langue locale cache des variations de nature et d’altération."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Le mot « schiste » désigne une seule roche, de composition homogène d’un vignoble à l’autre.","answer":false},"explanation":"Il regroupe des roches proches mais distinctes (ardoise, phyllade, schiste argileux, micaschiste), au point qu’un seul domaine mosellan en cultive trois couleurs. C’est pourquoi toute généralisation sur « le goût du schiste » est fragile."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Anjou noir (⚠️) : identité schisteuse (schistes, ardoise, phtanite, spilite) tirée d’une seule source lue.",
      "Côte Brune, Côte-Rôtie (⚠️) : substrat décrit tantôt comme micaschiste, tantôt comme micaschiste ou gneiss selon les sources ; la fiche ne tranche pas.",
      "Moselle (⚠️) : ardoise de la Moselle moyenne tirée d’une seule famille de sources (blog Wine With Seth) ; âge dévonien non repris.",
      "Priorat, llicorella (⚠️) : définition de la llicorella issue d’un seul site (pages jumelles) ; Turisme Priorat non lu.",
      "Douro, xisto (⚠️) : fracture verticale et regroupement de roches issus d’un seul site ; l’article IVES de Sousa n’a pas été lu.",
      "Effets indirects (chaleur, lumière, vie du sol) (⚠️) : hypothèse présentée comme telle par le livre, non vérifiée dans les sources lues ; la minéralité au goût est traitée plus loin (p. 284).",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 136-138 ; INAO / Terroirs de Schiste (Faugères) ; Wine With Seth (Anjou noir, Moselle, Priorat, Douro, Côte-Rôtie) ; Indigo Wine (Clemens Busch).",
    page: 136
  },
  {
    id: 176,
    theme: "Géologie-Terroir",
    sous: ["Roches"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Gneiss, amphibolite, serpentinite : du Muscadet à la Wachau",
    synth: "Le gneiss, roche de la croûte continentale faite de quartz, de feldspaths et de micas en lits clairs et sombres, est un paragneiss s’il dérive d’une roche sédimentaire et un orthogneiss s’il dérive d’une roche magmatique comme le granite. On le rencontre en Wachau (le Gföhler Gneis, socle cristallin creusé par le Danube), à Caramany (Roussillon) et au Pallet, dans le Muscadet, vignoble du socle du massif armoricain, reste de la chaîne hercynienne que l’érosion a mis à nu. L’amphibolite, issue de gabbros ou de basaltes métamorphisés, est citée parmi les roches du Muscadet ; la serpentinite, très riche en magnésium, pauvre en calcium et chargée en nickel et chrome, est hostile à la vigne.",
    mnemo: "Le gneiss, c’est un tissu rayé : bande claire (quartz, feldspath), bande sombre (micas). Para : P comme « particules » déposées (sédiments) ; Ortho : O comme « origine en fusion » (magma, granite).",
    flash: {"q":"Quelle différence entre un paragneiss et un orthogneiss ?","a":"Le paragneiss dérive d’une roche sédimentaire, l’orthogneiss d’une roche magmatique (un granite, par exemple).","keys":[["sédimentaire","sedimentaire"],["magmatique","granite"]]},
    qcm: {"q":"Quelle roche, issue de la transformation d’un gabbro ou d’un basalte, est citée parmi celles du Muscadet ?","opts":["L’amphibolite","La migmatite","Le micaschiste","L’ardoise"],"good":0,"expl":"L’ardoise et le micaschiste dérivent d’argiles, et la migmatite d’un gneiss poussé jusqu’à la fusion partielle ; seule l’amphibolite prolonge la série du basalte."},
    exos: [
      {"type":"matching","prompt":"Associe chaque vignoble à son contexte sur gneiss.","payload":{"pairs":[["Wachau","Autriche : Gföhler Gneis, socle creusé par le Danube"],["Caramany","Roussillon : vallée de l’Agly, gneiss et granite"],["Le Pallet","Muscadet : socle du massif armoricain"]]},"explanation":"Le gneiss affleure là où l’érosion a dégagé un vieux socle cristallin ; le contexte (fleuve, vallée, massif) explique pourquoi il se trouve à la surface."},
      {"type":"odd_one_out","prompt":"Laquelle de ces roches n’est pas métamorphique ?","payload":{"options":["Gneiss","Amphibolite","Micaschiste","Gabbro"],"answer":3},"explanation":"Le gabbro est une roche magmatique plutonique ; c’est justement l’un des protolithes dont dérive l’amphibolite par métamorphisme."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Un orthogneiss est un gneiss dérivé d’une roche sédimentaire.","answer":false},"explanation":"Le préfixe « ortho » renvoie à l’origine magmatique ; c’est « para » qui désigne une origine sédimentaire. Le piège est de croire que ces préfixes décrivent la dureté ou le grain."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"La serpentinite est très riche en {{magnésium}} et pauvre en {{calcium}}, ce qui la rend hostile à la vigne."},"explanation":"L’excès de magnésium gêne l’absorption du calcium, et les métaux lourds (nickel, chrome) gênent les racines : c’est un sol difficile, pas un terroir de référence."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Gneiss du Pallet (⚠️) : deux sources de niveau 2b seulement ; le cahier des charges INAO du Muscadet Sèvre-et-Maine n’a pas pu être lu (extranet bloqué).",
      "Nombre de crus du Muscadet (⚠️) : 7 ou 10 selon les sources (Wine With Seth : 10 zones) ; cahiers des charges INAO non lus ; volontairement non retenu dans la fiche et les exercices.",
      "Amphibolite emblématique du Muscadet (⚠️) : citée parmi les roches du Muscadet (surtout Côtes de Grandlieu), mais le caractère « emblématique » est une appréciation ; les argiles d’altération (montmorillonite) ne sont pas confirmées.",
      "Serpentinite et vigne (⚠️) : richesse en magnésium, pauvreté en calcium, nickel et chrome tirés d’une source écologique générale, non viticole ; le volet potassium du livre (et Troodos, Chypre) n’est pas confirmé ; statut métamorphique de la serpentinite à confirmer par une seconde source.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 136-138 ; Futura-Sciences, Gneiss ; Encyclopædia Universalis, Métamorphisme ; INAO (Côtes du Roussillon Villages Caramany) ; cahier des charges autrichien DAC Wachau ; Wine With Seth (Muscadet)",
    page: 137
  },
  {
    id: 177,
    theme: "Géologie-Terroir",
    sous: ["Roches","Sols"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le cycle des roches : un recyclage permanent qui fabrique les sols",
    synth: "Aucune roche n’est éternelle : altérée et érodée en surface, ses débris sont transportés, déposés puis enfouis (diagenèse), éventuellement métamorphisés en profondeur ; la fusion partielle (anatexie) refait du magma, qui cristallise en roche magmatique, et la boucle recommence, avec des raccourcis possibles. Les sols naissent de l’altération de surface de ce recyclage. Pour les plus vieilles roches, le livre dit « plus de 500 millions d’années » : c’est vrai mais très en dessous, car les plus vieilles roches intactes connues approchent les 4 milliards d’années, avec le gneiss d’Acasta (Canada), lui-même une roche métamorphique. Les durées chiffrées du cycle données par le livre ne sont pas reprises ici, faute de source.",
    mnemo: "La cuisine d’un grand pâtissier qui ne jette rien : on broie (altération), on empile (dépôt), on cuit sous presse (métamorphisme), on refait fondre (anatexie), on recoule dans le moule (magma qui cristallise) ; les miettes tombées au sol deviennent le terreau.",
    flash: {"q":"Quelle est la plus vieille roche intacte connue, et de quel type est-elle ?","a":"Le gneiss d’Acasta (Canada), vieux d’environ 4 milliards d’années : une roche métamorphique.","keys":[["acasta"],["métamorphique","metamorphique"]]},
    qcm: {"q":"Quel processus, en profondeur, redonne du magma à partir d’une roche métamorphique ?","opts":["La diagenèse","L’anatexie (fusion partielle)","La schistosité","L’altération"],"good":1,"expl":"La diagenèse transforme des sédiments en roche à basse température, la schistosité est une structure en feuillets et l’altération agit en surface ; seule la fusion partielle produit du liquide."},
    exos: [
      {"type":"ordering","prompt":"Remets dans l’ordre une boucle du cycle des roches, à partir d’une roche affleurante.","payload":{"items":["Altération et érosion en surface","Dépôt et enfouissement des sédiments","Métamorphisme en profondeur","Fusion partielle (anatexie)","Cristallisation du magma en roche magmatique"]},"explanation":"Le sens est dicté par la profondeur et la température : les roches s’enfoncent, chauffent, se transforment, fondent, puis le magma remonte et refroidit. Un raccourci est possible, par exemple une roche métamorphique directement altérée en surface."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les plus vieilles roches connues de la Terre ont environ 500 millions d’années.","answer":false},"explanation":"Cette valeur est environ huit fois trop faible : le gneiss d’Acasta approche 4 milliards d’années. Fait notable, cette roche record est elle-même métamorphique."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 138 ; Futura-Sciences, Roche métamorphique et Gneiss d’Acasta ; Encyclopædia Universalis, Métamorphisme et géodynamique.",
    page: 138
  },
  {
    id: 178,
    theme: "Géologie-Terroir",
    sous: ["Sols"],
    niveau: "Fondamental",
    geo: null,
    titre: "Naissance d’un sol : la pédogenèse",
    synth: "La vigne pousse dans un sol, couche mince et vivante, et non directement sur la roche : un tas de roche ne devient pas un sol sans une longue transformation. Celle-ci combine l’altération de la roche (par le vivant, le gel, l’eau, l’air) et l’arrivée de matière organique qui s’humifie. La vitesse varie énormément selon la roche et le climat, de quelques décennies à plusieurs millénaires par centimètre, et « 1 cm par siècle » n’est qu’une moyenne tempérée. Cette science porte le nom de pédologie, dont le Russe Dokoutchaïev est considéré comme le fondateur (travaux de 1883).",
    mnemo: "Un sol, c’est du pain au levain : la farine (roche) ne suffit pas, il faut le temps et les ferments (le vivant).",
    flash: {"q":"Quels sont les deux grands mouvements qui font naître un sol ?","a":"L’altération de la roche et l’humification de la matière organique.","keys":[["altération","altérations"],["humification","humus","matière organique"]]},
    qcm: {"q":"Que veut dire « 1 cm de sol par siècle » ?","opts":["Une règle valable pour tous les sols","Une moyenne tempérée, la vitesse réelle variant de décennies à millénaires par cm","La vitesse exacte sur sable","La vitesse d’érosion d’un vignoble"],"good":1,"expl":"La vitesse de formation dépend de la roche, du relief et du climat ; la moyenne ne dit rien d’un cas précis."},
    exos: [
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Une vigne plantée sur des éboulis de roche fraîche est déjà sur un sol mature.","answer":false},"explanation":"Un sol mature suppose une longue transformation organo-minérale ; sans elle, on a un matériau minéral brut, pas un sol différencié."},
      {"type":"matching","prompt":"Associe chaque agent d’altération à son mode d’action.","payload":{"pairs":[["Gel et dégel","Fragmente la roche mécaniquement"],["Eau chargée de CO2","Dissout et transporte des éléments"],["Biofilm d’algues et de bactéries","Attaque la roche chimiquement et mécaniquement"]]},"explanation":"Chaque agent travaille à sa façon, et la fragmentation physique augmente la surface offerte aux attaques chimiques."},
      {"type":"mcq_multi","prompt":"Quels facteurs font varier la vitesse de formation d’un sol ?","payload":{"options":["La nature de la roche","Le climat","Le relief","L’âge des vignes plantées dessus"],"answers":[0,1,2]},"explanation":"Roche, climat et relief dosent l’altération ; l’âge des vignes ne change rien à un processus qui se compte en siècles."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Durée de formation d’un sol (⚠️, une seule source de niveau 1, AFES) : de quelques décennies à plusieurs millénaires par cm selon la roche et le climat ; le « 1 cm par siècle » est une moyenne, pas une règle.",
      "Altération chimique des roches (⚠️) : le détail (eau acide, hydrolyse) n’est pas doublé par deux sources de niveau 1 ou 2a ; la fiche n’en retient que l’idée générale.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 139-140 ; AFES, Étude et Gestion des Sols (Dokouchaev) ; AFES, Temps (vitesses de formation des sols)",
    page: 139
  },
  {
    id: 179,
    theme: "Géologie-Terroir",
    sous: ["Sols"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Lire un sol : les horizons",
    synth: "Un sol se décrit en creusant une fosse et en lisant ses horizons, des couches superposées. De haut en bas : O (litière et matière organique), A (horizon minéral de surface riche en matière organique et en vie), E (horizon appauvri, lessivé, absent du livre), B (accumulation d’argile et de fer), C (roche altérée) et R (roche dure intacte). Le type de sol dépend du climat : la France classe ses sols en 34 grands ensembles de références (Référentiel pédologique), la base mondiale WRB en 32 groupes. Pour la litière et l’humus, voir la fiche 98.",
    mnemo: "La fosse se lit comme un immeuble : grenier encombré (O), salon habité (A), couloir délavé (E), cave où tout s’entasse (B), fondations fissurées (C), rocher (R).",
    flash: {"q":"Quel horizon représente la roche dure non altérée ?","a":"L’horizon R (roche mère).","keys":[["R"]]},
    qcm: {"q":"Quel horizon est la zone d’altération de la roche mère ?","opts":["O","A","B","C"],"good":3,"expl":"L’horizon C est le matériau parental peu altéré ; la roche intacte, dessous, est le R."},
    exos: [
      {"type":"ordering","prompt":"Classe les horizons de la surface vers la profondeur.","payload":{"items":["O : litière et matière organique","A : horizon minéral riche en vie","E : horizon appauvri, lessivé","B : horizon d’accumulation","C : roche altérée","R : roche dure intacte"]},"explanation":"La séquence suit le trajet de l’altération : plus on descend, moins la roche a été transformée par le vivant et l’eau."},
      {"type":"matching","prompt":"Associe chaque horizon à sa description.","payload":{"pairs":[["O","Litière et matière organique"],["A","Terre arable organo-minérale, riche mais fragile"],["B","Sous-sol enrichi en argile"],["C","Zone d’altération de la roche mère"]]},"explanation":"Les lettres décrivent une fonction : on passe du vivant (O, A) à l’accumulation minérale (B) puis à la roche en cours d’altération (C)."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les classifications de sols sont les mêmes partout : on trouve les mêmes types de sols sous tous les climats.","answer":false},"explanation":"Le type de sol dépend du climat, ce qui explique que chaque pays ait ses classifications, en plus d’une base mondiale."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Horizons O, A, E, B, C, R (⚠️, une seule source de niveau 2b) : Lepeltier omet l’horizon E ; la lettre est O (organique) et non le chiffre 0 ; le détail R/M/D du Référentiel pédologique n’est pas vérifié.",
      "34 grands ensembles de références du Référentiel pédologique 2008 (⚠️, une seule source, mais de niveau 1 : AFES).",
      "32 groupes de la base mondiale WRB (⚠️, une seule source, édition non précisée).",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 140 ; AFES, Référentiel pédologique 2008 ; ISRIC / IUSS, World Reference Base, Soil groups.",
    page: 140
  },
  {
    id: 180,
    theme: "Géologie-Terroir",
    sous: ["Sols","Roches"],
    niveau: "Fondamental",
    geo: {"pays":"France","region":"Alsace","appel":"Alsace grand cru"},
    titre: "Pas de sol idéal pour la vigne",
    synth: "Les grands vins naissent de sols très variés, et il serait vain de les hiérarchiser. L’Alsace en est la preuve : ses 51 grands crus se répartissent sur une mosaïque géologique d’une quinzaine de familles de roches, du granite au calcaire, en passant par le grès, le schiste et le volcanique. Selon Lepeltier, la vigne est frugale et s’accommode de sols pauvres, pourvu qu’ils n’aient ni carence ni excès. La qualité tient donc moins à un sol type qu’à la façon dont chaque sol sert la vigne, l’eau en tête (fiche suivante).",
    mnemo: "Une carte des vins d’Alsace comme un patchwork : 51 pièces, une quinzaine de tissus différents, tous des grands crus.",
    flash: {"q":"Combien de grands crus compte l’Alsace, et que montrent-ils sur les sols ?","a":"51 ; ils reposent sur une grande diversité de roches, ce qui prouve qu’il n’y a pas de sol idéal.","keys":[["51","cinquante et un"],["diversité","variés","variété","mosaïque"]]},
    qcm: {"q":"Que montre le cas des grands crus d’Alsace ?","opts":["Seul le granite fait de grands vins","Les grands vins viennent de sols géologiquement très variés","Le calcaire est indispensable","Le sol n’a aucune importance"],"good":1,"expl":"Granit, grès, schiste, calcaire et volcanique y donnent des grands crus : aucune roche ne s’impose."},
    exos: [
      {"type":"odd_one_out","prompt":"Parmi ces roches du vignoble alsacien, laquelle n’y est PAS citée comme socle de grands crus ?","payload":{"options":["Granit","Grès","Calcaire","Craie à silex de Champagne"],"answer":3},"explanation":"L’Alsace réunit des roches anciennes, des grès, des calcaires et des volcaniques ; la craie champenoise appartient à un autre bassin."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les grands crus d’Alsace prouvent qu’il existe un sol idéal : le granite.","answer":false},"explanation":"Les grands crus alsaciens se trouvent sur de nombreuses roches différentes : c’est cette variété qui interdit de désigner un sol idéal."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Frugalité de la vigne et préférence pour les sols pauvres sans carence ni excès (⚠️) : affirmation du livre, non vérifiée à part dans les sources.",
      "51 grands crus d’Alsace : une seule source (Atout France) ; le site du CIVA (niveau 1) n’a pas pu être lu.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 142 ; Atout France (Taste France), Alsace vineyard terroirs",
    page: 142
  },
  {
    id: 181,
    theme: "Géologie-Terroir",
    sous: ["Sols"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Nutrition minérale : ce que le sol donne vraiment",
    synth: "La vigne a besoin d’azote, phosphore, potassium, magnésium, calcium et soufre, plus des oligo-éléments, mais en petite quantité. Les minéraux de la roche ne sont pas directement assimilables : ils le deviennent grâce au pH, au vivant et au complexe argilo-humique (fiche 99). L’azote fait exception, car il vient surtout de la matière organique ou des apports. Van Leeuwen le tient pour le facteur chimique le plus susceptible d’influencer la vigne, mais juge que les propriétés physiques du sol comptent plus pour le terroir. Il ne voit pas de lien démontré entre microbiote et typicité du vin, là où Lepeltier met le microbiote en avant ; le désaccord n’est pas tranché.",
    mnemo: "Un garde-manger sous clé : la roche est le stock, le sol vivant détient les clés, l’azote est la seule denrée qui arrive par le compost.",
    flash: {"q":"Quel élément nutritif vient surtout de la matière organique plutôt que de la roche ?","a":"L’azote.","keys":[["azote","azote N"]]},
    qcm: {"q":"Pourquoi les minéraux de la roche ne nourrissent-ils pas directement la vigne ?","opts":["Ils sont toxiques pour la vigne","Ils ne sont pas directement assimilables, il faut les rendre disponibles","La vigne n’a besoin d’aucun minéral","Ils sont tous lessivés dès la plantation"],"good":1,"expl":"La roche contient les éléments, mais sous des formes que les racines ne captent pas ; pH, vivant et argiles les libèrent."},
    exos: [
      {"type":"mcq_multi","prompt":"Quels éléments font partie des six macro-éléments indispensables à la vigne ?","payload":{"options":["Azote","Potassium","Magnésium","Plomb"],"answers":[0,1,2]},"explanation":"Les six majeurs sont azote, phosphore, potassium, magnésium, calcium et soufre ; le plomb n’est pas un nutriment."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Selon van Leeuwen, le lien entre l’activité microbienne du sol et la typicité du vin est démontré.","answer":false},"explanation":"Il le juge non démontré, alors que Lepeltier insiste sur le rôle du microbiote : les deux positions coexistent."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Azote comme facteur chimique clé et primauté des propriétés physiques (⚠️, une seule source, van Leeuwen et al., IVES).","Disponibilité des minéraux par le pH, le microbiote et le complexe argilo-humique (⚠️) : reprise du livre, non revérifiée ici (voir les fiches 97 à 100).","Divergence Lepeltier / van Leeuwen sur le microbiote et la typicité : signalée, non tranchée.","Six macro-éléments N, P, K, Mg, Ca, S (⚠️) : liste du livre, non recoupée dans la recherche (à doubler : IFV, chambre d’agriculture)."],
    src: "Mille Vignes, P. Lepeltier, p. 142 ; van Leeuwen et al., Méthodologies pour étudier le sol en vue d’un zonage viticole (IVES).",
    page: 142
  },
  {
    id: 182,
    theme: "Géologie-Terroir",
    sous: ["Sols"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Bordeaux","appel":null},
    titre: "Seguin, van Leeuwen et l’eau : ce qui fait la qualité",
    synth: "Dans le Médoc, Gérard Seguin conclut que le sol joue surtout par la régulation de l’alimentation en eau de la vigne, et non par sa richesse en un élément nutritif. Le livre date ce résultat de 1986, mais ses travaux remontent à 1969 et aux années 1970, 1986 étant une synthèse. Van Leeuwen confirme : un déficit hydrique modéré stoppe plus tôt la croissance des rameaux, allège les baies, concentre sucres et anthocyanes et réduit l’acidité ; la qualité des rouges bordelais suit mieux ce déficit que la température. Son étude de 7 propriétés prestigieuses (environ 400 ha) y a relevé 9 types de sols, avec des qualités très inégales selon le sol.",
    mnemo: "La vigne est un sportif à qui l’on mesure l’eau, pas le garde-manger : un petit manque bien dosé fait le champion.",
    flash: {"q":"Selon Seguin, par quoi le sol agit-il surtout sur la qualité du vin ?","a":"Par la régulation de l’alimentation en eau de la vigne, plus que par sa fertilité.","keys":[["eau","hydrique","alimentation en eau"]]},
    qcm: {"q":"Que corrèle le mieux avec la qualité des rouges bordelais d’après van Leeuwen ?","opts":["La teneur en azote du sol","Le déficit hydrique","L’altitude","La couleur de la roche"],"good":1,"expl":"La qualité des millésimes suit mieux l’intensité du déficit hydrique que la seule température."},
    exos: [
      {"type":"flashcard","prompt":"Explique : pourquoi la régulation de l’eau compte-t-elle plus que la richesse minérale du sol pour la qualité du vin ?","payload":{"answer":"Un déficit hydrique modéré freine la croissance des rameaux et la taille des baies, ce qui concentre les sucres et les anthocyanes : c’est ce qui fait la qualité. À l’inverse, la richesse minérale ne corrèle pas avec les grands vins, dont les sols sont souvent pauvres. Le sol compte donc surtout par sa façon de doser l’eau."},"explanation":"Question fil rouge du chapitre « Existe-t-il un sol idéal pour la viticulture ? » (Mille Vignes, p. 139-145). Sont attendus : le lien déficit hydrique modéré / concentration du raisin et l’absence de corrélation avec la fertilité minérale."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Selon Seguin, les grands sols du Médoc se distinguent par leur richesse en éléments nutritifs.","answer":false},"explanation":"Il n’a trouvé aucune corrélation entre qualité et teneur en un nutriment : de grands sites ont des sols pauvres mais une alimentation en eau régulière et limitée, avec un enracinement profond."},
      {"type":"mcq_multi","prompt":"Quels effets un déficit hydrique modéré a-t-il sur la vigne, selon van Leeuwen ?","payload":{"options":["La croissance des rameaux s’arrête plus tôt","Les baies sont plus légères","Les sucres et anthocyanes augmentent","L’acidité totale augmente"],"answers":[0,1,2]},"explanation":"Le déficit concentre le raisin et réduit l’acidité totale (moins d’acide malique) : le dernier choix est donc l’inverse du résultat observé."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Seguin : la qualité tient à la régulation de l’eau plus qu’à la fertilité (⚠️, sources van Leeuwen OENO One et Goode, secondaires) ; la précision du livre sur des sols carencés en azote et magnésium n’a pas été retrouvée et n’est pas reprise.","Date de Seguin (⚠️) : le livre dit 1986 ; les travaux datent de 1969 et des années 1970, avec une synthèse en 1986 ; les publications HAL INRAE n’ont pu être lues.","« Léger déficit après véraison » : la précision sur la véraison n’apparaît pas dans les résumés lus et n’est pas reprise.","Étude bordelaise (⚠️, source primaire unique) : 7 propriétés, environ 400 ha, 9 types de sols, les chiffres du livre correspondent."],
    src: "Mille Vignes, P. Lepeltier, p. 142-143 ; van Leeuwen, In memoriam : Professor Gérard Seguin, OENO One ; van Leeuwen et al., Vine water status is a key factor in grape ripening and vintage quality for red Bordeaux wine, OENO One ; van Leeuwen et al., Les sols et le matériel végétal dans des crus prestigieux de Bordeaux, Terroir 2008 (IVES) ; Wineanorak (J. Goode), On soils and wines part 6.",
    page: 143
  },
  {
    id: 183,
    theme: "Géologie-Terroir",
    sous: ["Sols","Argile"],
    niveau: "Pointu",
    geo: null,
    titre: "Ce qui règle l’eau : texture, fissures, pierrosité et argiles",
    synth: "Le régime hydrique d’un sol dépend de sa texture (argiles qui retiennent l’eau, sables drainants), de la perméabilité de la roche, de sa fracturation, de la topographie et de la pierrosité : les fissures laissent s’infiltrer l’eau même sous des sols calcaires ou granitiques. Les argiles comptent aussi : les smectites (dont la montmorillonite) gonflent fortement et craquellent au séchage, la kaolinite et l’illite gonflent très peu. En Bourgogne, l’étude des Bourguignon (53 parcelles, laboratoire LAMS) relie type d’argile et cépage, mais reste une corrélation inédite et critiquée, pas un mécanisme établi. Wittendal, sur 2 816 climats de Côte-d’Or (le livre dit « vignobles »), trouve que la structure du sol compte plus que l’altitude ou la pente.",
    mnemo: "Une éponge (smectite) qui gonfle et se fendille, contre une pile d’assiettes (kaolinite, illite) dont la hauteur ne bouge pas, mouillée ou sèche.",
    flash: {"q":"Quelles argiles gonflent fortement à l’humidité et craquellent en séchant ?","a":"Les smectites (dont les montmorillonites).","keys":[["smectite","smectites","montmorillonite"]]},
    qcm: {"q":"Pourquoi un sous-sol calcaire ou granitique peut-il tout de même alimenter la vigne en eau ?","opts":["Grâce à ses fissures, où l’eau s’infiltre et où les racines descendent","Parce que ces roches sont toujours poreuses comme une éponge","Parce qu’elles condensent l’humidité de l’air","Parce qu’elles sont imperméables et retiennent l’eau en surface"],"good":0,"expl":"La roche massive stocke peu, mais sa fracturation ouvre des réservoirs et des chemins : c’est la fissure, plus que la nature de la roche, qui compte."},
    exos: [
      {"type":"matching","prompt":"Associe chaque argile à son comportement avec l’eau.","payload":{"pairs":[["Smectite (montmorillonite)","Gonfle à l’humidité et se fend en séchant"],["Kaolinite et illite","Volume presque stable, mouillées ou sèches"],["Sable","Laisse filer l’eau, en retient peu"]]},"explanation":"Le gonflement tient à la structure du feuillet : seules les smectites accueillent l’eau entre leurs feuillets, ce qui explique les fissures de séchage."},
      {"type":"odd_one_out","prompt":"Laquelle de ces argiles se comporte différemment des autres face à l’eau ?","payload":{"options":["Kaolinite","Illite","Smectite"],"answer":2},"explanation":"Kaolinite et illite restent stables, alors que la smectite gonfle et se rétracte, d’où un effet marqué sur le régime hydrique."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"L’étude de laboratoire des Bourguignon sur 53 parcelles établit le mécanisme par lequel les argiles décident du cépage.","answer":false},"explanation":"Elle ne montre qu’une corrélation statistique, inachevée et critiquée (indicateur unique, contre-exemples) : un mécanisme causal n’y est pas démontré."},
      {"type":"mcq_multi","prompt":"Quels éléments influencent la perméabilité d’un sol viticole ?","payload":{"options":["La fracturation de la roche","La pierrosité","La topographie","Le cépage planté"],"answers":[0,1,2]},"explanation":"Fissures et cailloux ouvrent des chemins à l’eau, la pente décide de son écoulement ; le cépage ne modifie pas la perméabilité du milieu."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Smectites contre kaolinite et illite (⚠️, une seule source de niveau 2b : Wineanorak) : à doubler par un manuel (BRGM, Planet-Terre).",
      "Étude Bourguignon / LAMS (⚠️) : 53 parcelles et environ 86 % confirmés par une fiche de conférence, mais étude inédite, inachevée et critiquée ; date 2002 non confirmée et non reprise ; à présenter comme corrélation de laboratoire.",
      "Wittendal (⚠️, une seule source secondaire, Goode) : 2 816 climats et non « vignobles » ; étude primaire non retrouvée.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 143-145 ; Wineanorak (J. Goode), On soils and wines part 6 ; Académie du Vin, fiche de conférence (LAMS, Bourguignon) ; La Passion du Vin, fil Terroir : la surface interne des argiles.",
    page: 143
  },
  {
    id: 184,
    theme: "Géologie-Terroir",
    sous: ["Sols","Galets"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Vallée du Rhône","appel":"Châteauneuf-du-Pape"},
    titre: "Châteauneuf-du-Pape : une mosaïque de sols",
    synth: "L’appellation n’est pas qu’une affaire de galets : elle juxtapose des secteurs géologiques distincts, calcaires crétacés à l’ouest (blancs, acidité), safres tertiaires (sables, grès, marnes) à l’est et au nord, grès rouges, argiles rouges riches en fer, et les terrasses de galets. Selon le livre, chaque secteur donne un style propre, que le grenache révèle. Les galets sont du quartzite alpin apporté par le Rhône, seul résidu des terrasses : les autres roches ont été dissoutes par l’altération et leurs résidus forment les argiles ferrugineuses. Le livre précise « calcaires urgoniens » : c’est un faciès du Crétacé inférieur, compatible avec les « calcaires crétacés » des sources.",
    mnemo: "Un pavage de quatre quartiers : calcaire pâle, safres dorés, grès rouges, galets luisants ; seul le quartzite a survécu au lavage.",
    flash: {"q":"Pourquoi les galets de Châteauneuf sont-ils du quartzite ?","a":"Parce que les autres roches des terrasses ont été dissoutes par l’altération ; le quartzite, très résistant, subsiste.","keys":[["altération","dissous","dissoutes"],["résistant","quartzite"]]},
    qcm: {"q":"Que révèle la géologie de Châteauneuf-du-Pape ?","opts":["Un sol unique couvert de galets","Plusieurs secteurs géologiques donnant des styles différents","Un sol exclusivement calcaire","Un sol uniformément sableux"],"good":1,"expl":"Calcaires, safres, grès et galets coexistent : l’appellation est une mosaïque et non un tapis de galets."},
    exos: [
      {"type":"matching","prompt":"Associe chaque secteur de Châteauneuf-du-Pape à sa nature.","payload":{"pairs":[["Ouest","Calcaires crétacés"],["Est et nord","Safres tertiaires (sables, grès, marnes)"],["Terrasses","Galets de quartzite sur argiles rouges"]]},"explanation":"La répartition par secteurs explique qu’un même cépage, le grenache, change de style d’un coin à l’autre de l’appellation."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"Les galets de Châteauneuf sont des {{quartzites|quartzite}} apportés par le {{Rhône}} ; dessous, les argiles rouges sont riches en {{fer}}."},"explanation":"Les argiles rouges sont le résidu des roches dissoutes par l’altération : le fer qu’elles gardent leur donne cette couleur."},
      {"type":"odd_one_out","prompt":"Lequel de ces sols n’appartient pas à la mosaïque de Châteauneuf-du-Pape ?","payload":{"options":["Calcaires crétacés","Safres","Galets roulés","Schistes ardoisiers"],"answer":3},"explanation":"L’appellation est sédimentaire et alluviale (calcaires, sables et grès tertiaires, terrasses du Rhône) ; le schiste appartient aux vieux socles, comme l’Anjou noir ou Faugères."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Secteurs géologiques (⚠️) : sources du syndicat de Châteauneuf, de Wine With Seth, du Département de Vaucluse ; les styles par secteur viennent du livre (Georges Truc), non revérifiés.","« Calcaires urgoniens » (⚠️) : terme du livre absent des sources lues, qui parlent de calcaires crétacés (l’Urgonien est un faciès du Crétacé inférieur) ; orientation ouest/est du livre non confirmée telle quelle.","Lampourdier (⚠️) : attesté comme lieu de carrières de sables et calcaires, pas explicitement comme massif géologique ; non repris."],
    src: "Mille Vignes, P. Lepeltier, p. 139 et 144 ; Syndicat des vignerons de Châteauneuf-du-Pape, Soil & vineyard map ; Wine With Seth, Galets roulés ; Vins du Rhône, coupe géologique de Lirac ; Département de Vaucluse, Paysages : la terrasse de Châteauneuf-du-Pape.",
    page: 144
  },
  {
    id: 185,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Val de Loire","appel":null},
    titre: "Rationaliser le terroir : l’Unité terroir de base (UTB)",
    synth: "Le terroir n’a pas de statut juridique propre : la recherche tente de le rationaliser, et selon Lepeltier l’INAO a commandé des études de sol des zones viticoles dès la fin des années 1930. En Anjou, l’équipe de l’INRA d’Angers (René Morlat) définit l’Unité terroir de base : une zone homogène par son mésoclimat, sa roche et son degré d’altération (roche, altération, altérite). Croisée avec l’expérience des vignerons et des dégustations, cette approche relie le vin à la précocité, au potentiel de vigueur et à l’alimentation en eau, surtout dictés par la lithologie. Un atlas en a été tiré pour le Val de Loire, utile aux vignerons à l’échelle de la parcelle (conduite, porte-greffe, cépage).",
    mnemo: "L’UTB, c’est un carré de carte postale où le ciel, la roche et son usure racontent la même histoire : à l’intérieur, tout fonctionne pareil pour la vigne.",
    flash: {"q":"Quelles trois composantes définissent une Unité terroir de base (UTB) ?","a":"Un mésoclimat, un substrat géologique et son état d’altération (roche, altération, altérite).","keys":[["climat","mésoclimat","mesoclimat"],["roche","géologie","substrat"],["altération","alteration","altérite"]]},
    qcm: {"q":"Qu’est-ce qui définit une zone comme une UTB ?","opts":["Son appartenance à une même appellation","L’homogénéité de son climat local, de sa roche et de son altération","Le cépage qui y est planté","Le prix de ses parcelles"],"good":1,"expl":"Une UTB ne suit ni les limites d’appellation ni le cépage : elle regroupe des lieux où climat local, roche et altération font fonctionner la vigne de la même façon."},
    exos: [
      {"type":"mcq_multi","prompt":"D’après Lepeltier, de quoi dépend surtout la relation entre un vin et son terroir dans l’approche des UTB ?","payload":{"options":["La précocité","Le potentiel de vigueur","L’alimentation en eau","Le millésime","Le mode de commercialisation"],"answers":[0,1,2]},"explanation":"Ces trois variables traduisent ce que la plante vit concrètement dans le sol et sous le climat local, et elles découlent surtout de la lithologie. Le millésime et le circuit de vente ne définissent pas l’unité."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Une UTB se définit uniquement par la nature de la roche, sans tenir compte du climat.","answer":false},"explanation":"L’intérêt de l’UTB est de combiner le mésoclimat avec la géologie et l’état d’altération : la roche seule ne dit rien de la chaleur ou de l’eau que la vigne reçoit."},
      {"type":"cloze","prompt":"Complète.","payload":{"text":"L’UTB repose sur l’éco-géo-pédologie : mésoclimat, substrat {{géologique|géologie}} et état d’{{altération|alteration}}."},"explanation":"Le troisième terme compte autant que la roche : une même roche, plus ou moins altérée, n’offre pas les mêmes réserves en eau ni le même enracinement."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Études de sol commandées par l’INAO dès la fin des années 1930 : l’INAO date de 1935 et les premières délimitations de 1936-1938, mais le caractère géo-pédologique de ces analyses n’est pas confirmé ; fait attribué à Lepeltier.","Précocité, vigueur et alimentation en eau comme trois variables de l’UTB : précocité et eau sont documentées (étude Anjou, Rioux, Guilbault, Morlat), la vigueur n’a pas été retrouvée comme variable de l’UTB elle-même.","Attribution à l’INRA d’Angers et à René Morlat : concordante avec les sources lues (IVES) mais aucune page INRAE directe ; le rôle de Salette et d’Asselin cités par le livre n’est pas établi."],
    src: "Mille Vignes, P. Lepeltier, p. 146-148 ; Rioux, Guilbault, Morlat, Étude Terroirs d’Anjou (IVES) ; Carbonneau, Interactions terroir-vigne (IVES) ; INAO, Histoire 1935-1970",
    page: 146
  },
  {
    id: 186,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "De l’UTB à l’UTV : cépage, climat du Nouveau Monde et Mendoza",
    synth: "Alain Carbonneau élargit l’UTB en Unité terroir viticole (UTV), qui ajoute le cépage et le système de culture : un vignoble devient un ensemble d’UTV, avec davantage de place pour le facteur humain. Les pays neufs, où le terroir sert surtout d’argument commercial, raisonnent plutôt par le climat, par exemple avec le zonage de Winkler aux États-Unis (degrés-jours au-dessus de 10 °C), ce qui relativise le sol. En Argentine, Mendoza s’est dotée d’indications géographiques fondées sur le terroir : le Paraje Altamira, reconnu en 2013 (zone étendue en 2017), s’appuie sur un cône alluvial du Tunuyán et des galets encroûtés de calcaire. Selon le livre, c’est la reconnaissance de 2017 qui précise ces critères.",
    mnemo: "UTB + chapeau de cépage + gants du vigneron = UTV : le terroir enfile les habits de l’humain.",
    flash: {"q":"Que l’UTV de Carbonneau ajoute-t-elle à l’UTB ?","a":"Le cépage et le système de culture (la conduite de la vigne).","keys":[["cépage","cepage"],["culture","conduite","système"]]},
    qcm: {"q":"Sur quoi les pays du Nouveau Monde fondent-ils surtout leur zonage viticole ?","opts":["Sur le sol et la roche","Sur le climat","Sur l’histoire des familles de vignerons","Sur la couleur des raisins"],"good":1,"expl":"L’exemple type est le zonage de Winkler en Californie, fondé sur les degrés-jours : la chaleur disponible y prime sur la roche."},
    exos: [
      {"type":"matching","prompt":"Associe chaque unité à ce qu’elle prend en compte.","payload":{"pairs":[["UTB","Mésoclimat, roche et altération"],["UTV","UTB + cépage + système de culture"],["Zonage de Winkler","Chaleur cumulée au-dessus de 10 °C"]]},"explanation":"Chaque niveau ajoute une couche : le milieu naturel (UTB), puis les choix humains (UTV), alors que Winkler s’en tient au seul climat."},
      {"type":"odd_one_out","prompt":"Lequel de ces éléments n’entre PAS dans la définition de l’UTV de Carbonneau ?","payload":{"options":["L’UTB (milieu naturel)","Le cépage","Le système de culture","Le prix du foncier"],"answer":3},"explanation":"L’UTV élargit le milieu naturel aux choix techniques du vigneron ; le marché foncier relève de l’économie du terroir, pas de sa définition viticole."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Le zonage de Winkler, utilisé aux États-Unis, classe les régions d’après leur climat sans étudier la roche.","answer":true},"explanation":"L’indice compte des degrés-jours : il illustre cette approche du Nouveau Monde, centrée sur le climat, qui laisse le sol de côté."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Paraje Altamira : reconnue en 2013 (résolution C.44) et zone étendue en 2017 (INV, résolution E 82/2017) ; le livre place la reconnaissance en 2017 : divergence signalée, non tranchée en faveur du livre.",
      "Cône alluvial du Tunuyán et galets encroûtés de carbonate de calcium : source de niveau 2b seulement (Wine With Seth), le texte de 2017 n’en parle pas.",
      "Raisonnement par le climat dans les pays neufs : Winkler (Davis, 1944) confirmé par une encyclopédie ; la méthode homoclimatique australienne citée par le livre n’est pas vérifiée et n’est pas reprise.",
      "Zuccardi, Parra et la cartographie de Mendoza « depuis 2012 par la faculté de Cuyo » : date non retrouvée, non reprise ; seule la validation des limites d’Altamira par l’UNCuyo et l’INTA est établie.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 148-149 ; Carbonneau, Interactions terroir-vigne (IVES) ; INV Argentine, Resolución E 82/2017 ; Wine With Seth, Paraje Altamira",
    page: 148
  },
  {
    id: 187,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Intermédiaire",
    geo: {"pays":"France","region":"Champagne","appel":null},
    titre: "L’homme fabrique le terroir",
    synth: "Le terroir ne se limite pas à la nature : l’homme y est à la fois acteur et objet. Les sols viticoles sont souvent des anthroposols, c’est-à-dire des sols profondément remaniés (terrasses, apports de terre), et le climat, plus difficile à infléchir, est tout de même modifié par des murs, de l’irrigation ou des dispositifs contre le gel. Cette construction a une valeur économique : en Champagne, un hectare d’appellation vaut de l’ordre du million d’euros en 2020, contre une fraction de ce prix hors appellation. Le livre avance 1 196 000 €/ha, quand la SAFER en relaie environ 1 041 000 pour l’AOC entière : même ordre de grandeur, chiffres différents.",
    mnemo: "Le terroir est un jardin, pas une jungle : des murs en pierre, un tuyau d’arrosage, une soufflerie antigel… et un notaire qui compte les zéros.",
    flash: {"q":"Comment appelle-t-on les sols profondément remaniés par l’homme, fréquents en vignoble ?","a":"Des anthroposols.","keys":[["anthroposol","anthroposols"]]},
    qcm: {"q":"Quelle intervention humaine agit sur le CLIMAT d’une parcelle ?","opts":["La construction de murs","Le choix du porte-greffe","L’analyse de la roche","Le dosage du soufre au chai"],"good":0,"expl":"Un mur emmagasine la chaleur et abrite du vent, il change l’air autour du cep ; les autres réponses n’agissent pas sur le climat de la parcelle."},
    exos: [
      {"type":"matching","prompt":"Associe chaque intervention à ce qu’elle modifie.","payload":{"pairs":[["Terrasses et apports de terre","Le sol (anthroposol)"],["Murs de pierre","Le microclimat de la parcelle"],["Irrigation","L’alimentation en eau de la vigne"],["Lutte contre le gel","Les températures au moment critique"]]},"explanation":"Le sol se transforme plus aisément que le climat, mais l’homme agit sur les deux : voilà pourquoi une définition « naturelle » du terroir est incomplète."},
      {"type":"mcq_multi","prompt":"Quelles interventions humaines influencent le climat ou le milieu d’un vignoble, selon Lepeltier ?","payload":{"options":["Les murs","L’irrigation","Les dispositifs contre le gel","Le vieillissement du vin en cave"],"answers":[0,1,2]},"explanation":"Ces aménagements changent chaleur, humidité ou risque de gel au niveau de la vigne ; l’élevage en cave intervient après la récolte et ne touche pas au milieu."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"En 2020, un hectare en appellation Champagne se vend de l’ordre d’un million d’euros, soit des dizaines de fois plus qu’une terre agricole hors appellation.","answer":true},"explanation":"L’écart montre que le terroir se capitalise dans le foncier : c’est l’appellation, pilier de l’AOC, qui porte la valeur. Les sources divergent sur le chiffre précis, pas sur l’ordre de grandeur."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Prix du foncier champenois 2020 : le livre donne 1 196 000 €/ha, le chiffre SAFER relayé pour l’AOC entière est 1 041 000 €/ha ; seul l’ordre de grandeur (environ 1 M€/ha) est repris, divergence signalée.","Hors appellation : « moins de 14 000 €/ha » du livre, cohérent avec les terres et prés de la Marne (10 740 €/ha en 2020) mais mélange peut-être deux séries ; non repris en chiffre.","Seuil « plus de 50 % » d’anthroposols : non retrouvé (Référentiel pédologique AFES à consulter), non repris ; le terme lui-même est bien employé en pédologie viticole.","Murs, irrigation et dispositifs antigel comme leviers sur le climat : énoncé du livre, non recoupé par une source dédiée."],
    src: "Mille Vignes, P. Lepeltier, p. 149 ; Vaudour et al., Zonage Côtes-du-Rhône (IVES) ; SAFER via ma-propriete.fr, prix des vignes en Champagne ; Decanter, How much does a French vineyard cost ; Réussir, Prix des terres 2020",
    page: 149
  },
  {
    id: 188,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les quatre sens du mot « terroir »",
    synth: "Selon Lepeltier, qui s’appuie sur Emmanuelle Vaudour, le mot terroir recouvre plusieurs significations : la matière (potentialités naturelles du sol et du climat), l’espace (un territoire de production façonné par une société), la conscience (mémoire et identité, le patrimoine) et le slogan (argument publicitaire jouant sur les valeurs rurales). Une définition limitée au sol et au climat n’en retient donc qu’un seul. Elle oublie l’homme, qui construit ses terroirs depuis des millénaires, et la dimension économique. Pour Lepeltier, l’homme fait donc partie intégrante du terroir, idée que la section Terroir développe avec Roger Dion (p. 150).",
    mnemo: "Terroir = M.E.C.S. : Matière, Espace, Conscience, Slogan. Le sol-et-climat n’est que la première lettre.",
    flash: {"q":"Quels sont les quatre sens du mot terroir cités par Lepeltier d’après Vaudour ?","a":"La matière (sol et climat), l’espace (territoire de production), la conscience (identité, mémoire) et le slogan (argument publicitaire).","keys":[["matière","matiere","naturel"],["espace","territoire"],["conscience","identité","identitaire","patrimoine"],["slogan","publicité","publicitaire","marketing"]]},
    qcm: {"q":"Quel sens du mot terroir correspond uniquement au sol et au climat ?","opts":["Le terroir-slogan","Le terroir-conscience","Le terroir-matière","Le terroir-espace"],"good":2,"expl":"La matière désigne les potentialités naturelles ; espace, conscience et slogan ajoutent la société, l’identité et le discours commercial."},
    exos: [
      {"type":"flashcard","prompt":"Explique : pourquoi une définition du terroir limitée au sol et au climat est-elle insuffisante ?","payload":{"answer":"Parce que le sol et le climat ne sont qu’un des sens du mot terroir, le sens naturel. Le terroir est aussi un espace façonné par une société, une identité transmise et parfois un argument de vente. Et l’homme modifie lui-même le sol et le climat (terrasses, murs, irrigation) : le terroir est en partie construit par l’humain, qu’il faut remettre au cœur de sa définition."},"explanation":"Question fil rouge du chapitre « Climat, sol et terroir » (Mille Vignes, p. 146-149). On attend l’idée qu’un terroir est aussi humain, culturel et économique, avec un exemple d’intervention de l’homme sur le milieu."},
      {"type":"matching","prompt":"Associe chaque sens du mot terroir à sa définition.","payload":{"pairs":[["Terroir-matière","Potentialités naturelles : sol et climat"],["Terroir-espace","Territoire de production façonné par une société"],["Terroir-conscience","Mémoire, identité, patrimoine"],["Terroir-slogan","Argument publicitaire aux valeurs rurales"]]},"explanation":"Les quatre sens vont du plus matériel au plus symbolique : un caviste doit repérer duquel on parle quand un client ou une étiquette invoque « le terroir »."},
      {"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Dire d’un vin qu’il est « un pur produit de son terroir » renvoie forcément au seul sol et au climat.","answer":false},"explanation":"L’expression peut aussi invoquer l’identité d’un lieu ou n’être qu’un slogan : sans préciser le sens, l’affirmation reste floue. C’est tout l’enjeu de distinguer les registres."}
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Typologie en quatre sens (matière, espace, conscience, slogan) attribuée à Vaudour (2003) : non retrouvée dans les textes de Vaudour lus, ni l’année 2003 ; présentée comme « selon Lepeltier, d’après Vaudour ». Ne pas la confondre avec les quatre registres d’un article de 1996-98 (milieu exploité, plante, matière première, vin).","Libellés des quatre sens (« agro-culturale », « terroir-matière », etc.) : reformulés d’après le livre, non recoupés."],
    src: "Mille Vignes, P. Lepeltier, p. 149 ; Vaudour, Les terroirs viticoles (Dunod) ; Vaudour et al., Zonage Côtes-du-Rhône (IVES)",
    page: 149
  }
);
