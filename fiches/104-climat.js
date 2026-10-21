// Climat — fiches de cette section de Mille Vignes. Voir l'en-tête de fiches.js.
FICHES.push(
  {
    id: 128,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "Climat, météo et millésime",
    synth: "Le climat décrit les conditions moyennes d’un lieu calculées sur 30 ans (normales de l’OMM, aujourd’hui 1991-2020), alors que la météo est l’état de l’atmosphère à un instant donné. Le millésime est l’expression d’une année précise de ces conditions : un effet à court terme, là où le climat fixe à long terme les styles et les cépages d’une région. Les mots du dégustateur (vin frais et acidulé, vin rond et puissant) renvoient à ce climat, via l’acidité, l’alcool, les tanins et les arômes. Les vendanges avancent : environ deux semaines plus tôt en Bourgogne que la norme historique, et jusqu’à 24 jours plus tôt qu’aux années 1970 dans plusieurs vignobles français.",
    mnemo: "Le climat, c’est le caractère ; la météo, l’humeur du jour ; le millésime, l’humeur de toute une année.",
    flash: { q: "Sur quelle durée calcule-t-on les normales qui définissent un climat ?", a: "Sur 30 ans (normales de l’OMM, actuellement 1991-2020).", keys: [["30","trente"]] },
    qcm: { q: "Que désigne le millésime par rapport au climat ?", opts: ["La moyenne des conditions sur 30 ans", "L’expression, une année donnée, des conditions météorologiques", "Un indice de chaleur cumulée", "Le style durable d’une région"], good: 1, expl: "Le millésime est un instantané annuel ; le climat, lui, est une moyenne de long terme." },
    exos: [
      { type: "matching", prompt: "Associe chaque notion à sa définition.", payload: { pairs: [["Climat", "Conditions moyennes d’un lieu sur 30 ans"], ["Météo", "État de l’atmosphère à un instant donné"], ["Millésime", "Expression d’une année précise de ces conditions"]] }, explanation: "Les trois termes jouent sur l’échelle de temps : l’instant, l’année, le long terme. Les confondre revient à attribuer à la météo d’un jour ce qui relève d’un climat." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Une récolte très tardive une année donnée prouve à elle seule que le climat d’un vignoble s’est refroidi.", answer: false }, explanation: "Une année isolée relève du millésime : pour parler d’évolution du climat, il faut des séries de dizaines d’années, comme celles des dates de vendange." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Les normales climatiques sont recalculées tous les {{10}} ans ; la période de référence actuelle est {{1991-2020}}." }, explanation: "L’OMM renouvelle ses normales par pas de dix ans pour suivre l’évolution du climat, d’où des références qui glissent (1981-2010, puis 1991-2020)." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Avancée des vendanges en Bourgogne (⚠️, une seule source) : le livre dit environ deux semaines depuis 1960-1970 ; National Geographic (Labbé et al. 2019) situe le net décrochage à la fin des années 1980.",
      "Avancée des vendanges en France (⚠️, une seule source) : Pleinchamp/INRAE donne environ 24 jours plus tôt depuis les années 1970 ; le livre parle d’un mois à Châteauneuf-du-Pape, chiffre non retrouvé."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 104 ; OMM, Normales climatologiques standard (1981-2010 / 1991-2020) ; Veille CatNat, nouvelles normales (Météo-France, janv. 2021) ; Futura Sciences, nouvelles normales climatiques ; National Geographic 2019 (Labbé et al., Bourgogne 1354-2018) ; Pleinchamp, Vendanges 24 jours plus tôt en 50 ans (INRAE).",
    page: 104
  },
  {
    id: 129,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "Températures : zéro de végétation, optimum et excès de chaleur",
    synth: "Le zéro de végétation est fixé à 10 °C : au-dessus, la vigne démarre sa croissance (débourrement), et ces températures dites actives servent de base aux indices de Winkler et de Huglin. La photosynthèse est la plus efficace autour de 25 à 30 °C (le livre dit 24 à 28 °C), ralentit au-delà de 30 °C et est très altérée vers 40 °C, stomates fermés (le livre parle d’arrêt). À l’échelle du globe, les vignobles se trouvent là où la température moyenne de la saison de croissance avoisine 13 à 21 °C ; le livre cite plutôt des isothermes annuelles de 10 à 22 °C, chiffre non retrouvé.",
    mnemo: "Un thermostat à trois crans : 10 °C pour allumer, 25-30 °C pour le plein régime, 40 °C pour disjoncter.",
    flash: { q: "Quelle température fixe le zéro de végétation de la vigne ?", a: "10 °C : seuil du débourrement et base des degrés-jours.", keys: [["10","dix"]] },
    qcm: { q: "D’après les sources consultées, autour de quelle plage la photosynthèse de la vigne est-elle la plus efficace ?", opts: ["5 à 10 °C", "15 à 20 °C", "25 à 30 °C", "38 à 42 °C"], good: 2, expl: "La photosynthèse plafonne sur une plage chaude mais modérée ; 10 °C n’est que le seuil de départ et 40 °C la zone où elle s’effondre." },
    exos: [
      { type: "short_answer", prompt: "Comment appelle-t-on le seuil de 10 °C à partir duquel la vigne démarre sa croissance ?", payload: { accepted: ["zéro de végétation", "le zéro de végétation", "zero de vegetation"] }, explanation: "Ce seuil n’est pas un optimum mais un point de départ : en dessous, la plante ne pousse pas. C’est pourquoi on ne cumule que la chaleur située au-dessus de lui." },
      { type: "ordering", prompt: "Classe ces repères du plus frais au plus chaud.", payload: { items: ["Début de croissance (≈ 10 °C)", "Optimum de photosynthèse (≈ 25-30 °C)", "Début du ralentissement (> 30 °C)", "Forte altération (≈ 40 °C)"] }, explanation: "La photosynthèse suit une courbe en cloche : elle démarre avec la croissance, plafonne sur une large plage, puis s’effondre quand les stomates se ferment sous la chaleur." },
      { type: "mcq_multi", prompt: "Selon les sources consultées, quelles affirmations sont exactes ?", payload: { options: ["Au-delà de 30 °C, la photosynthèse ralentit", "Vers 40 °C, la photosynthèse est très fortement altérée", "10 °C marque le début de la croissance de la vigne", "La photosynthèse est maximale à 10 °C"], answers: [0, 1, 2] }, explanation: "Il y a un seuil bas de démarrage, une large plage optimale, puis un déclin sous forte chaleur. Dire que le maximum est à 10 °C confond le seuil de départ avec l’optimum." }
    ],
    cours: null,
    schema: {"svg":"<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" fill=\"currentColor\" font-size=\"9\">\n<text x=\"12\" y=\"16\" opacity=\"0.7\">°C</text>\n<rect x=\"20\" y=\"80\" width=\"64\" height=\"16\" fill-opacity=\"0.06\" stroke=\"currentColor\"/>\n<rect x=\"84\" y=\"80\" width=\"96\" height=\"16\" fill-opacity=\"0.2\" stroke=\"currentColor\"/>\n<rect x=\"180\" y=\"80\" width=\"32\" height=\"16\" fill-opacity=\"0.55\" stroke=\"currentColor\"/>\n<rect x=\"212\" y=\"80\" width=\"64\" height=\"16\" fill-opacity=\"0.2\" stroke=\"currentColor\"/>\n<rect x=\"276\" y=\"80\" width=\"32\" height=\"16\" fill-opacity=\"0.06\" stroke=\"currentColor\"/>\n<line x1=\"20\" y1=\"100\" x2=\"308\" y2=\"100\" stroke=\"currentColor\"/><line x1=\"20\" y1=\"96\" x2=\"20\" y2=\"104\" stroke=\"currentColor\"/><text x=\"20\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">0</text><line x1=\"52\" y1=\"96\" x2=\"52\" y2=\"104\" stroke=\"currentColor\"/><text x=\"52\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">5</text><line x1=\"84\" y1=\"96\" x2=\"84\" y2=\"104\" stroke=\"currentColor\"/><text x=\"84\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">10</text><line x1=\"116\" y1=\"96\" x2=\"116\" y2=\"104\" stroke=\"currentColor\"/><text x=\"116\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">15</text><line x1=\"148\" y1=\"96\" x2=\"148\" y2=\"104\" stroke=\"currentColor\"/><text x=\"148\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">20</text><line x1=\"180\" y1=\"96\" x2=\"180\" y2=\"104\" stroke=\"currentColor\"/><text x=\"180\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">25</text><line x1=\"212\" y1=\"96\" x2=\"212\" y2=\"104\" stroke=\"currentColor\"/><text x=\"212\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">30</text><line x1=\"244\" y1=\"96\" x2=\"244\" y2=\"104\" stroke=\"currentColor\"/><text x=\"244\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">35</text><line x1=\"276\" y1=\"96\" x2=\"276\" y2=\"104\" stroke=\"currentColor\"/><text x=\"276\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">40</text><line x1=\"308\" y1=\"96\" x2=\"308\" y2=\"104\" stroke=\"currentColor\"/><text x=\"308\" y=\"116\" text-anchor=\"middle\" opacity=\"0.7\">45</text>\n<text x=\"84\" y=\"40\" text-anchor=\"middle\" font-weight=\"bold\">10 °C</text><text x=\"84\" y=\"52\" text-anchor=\"middle\">zéro de végétation</text><line x1=\"84\" y1=\"56\" x2=\"84\" y2=\"78\" stroke=\"currentColor\"/>\n<text x=\"196\" y=\"28\" text-anchor=\"middle\" font-weight=\"bold\">optimum</text><text x=\"196\" y=\"40\" text-anchor=\"middle\">photosynthèse ~25-30</text><line x1=\"196\" y1=\"44\" x2=\"196\" y2=\"78\" stroke=\"currentColor\"/>\n<text x=\"276\" y=\"58\" text-anchor=\"middle\" font-weight=\"bold\">40 °C</text><text x=\"276\" y=\"70\" text-anchor=\"middle\" font-size=\"8\">très altérée</text>\n<text x=\"52\" y=\"140\" text-anchor=\"middle\">repos</text>\n<text x=\"132\" y=\"140\" text-anchor=\"middle\">croissance</text><text x=\"132\" y=\"151\" text-anchor=\"middle\">(degrés « actifs »)</text>\n<text x=\"244\" y=\"140\" text-anchor=\"middle\">ralentit</text><text x=\"244\" y=\"151\" text-anchor=\"middle\">(stomates se ferment)</text>\n<text x=\"160\" y=\"182\" text-anchor=\"middle\" opacity=\"0.75\">Les indices de Winkler et de Huglin comptent la chaleur au-dessus de 10 °C.</text>\n<text x=\"160\" y=\"194\" text-anchor=\"middle\" opacity=\"0.75\">Le livre situe l’optimum à 24-28 °C.</text>\n</svg>","legende":"Les seuils de température de la vigne : 10 °C pour démarrer, un optimum vers 25-30 °C, une photosynthèse très altérée vers 40 °C.","src":"D’après Lepeltier, Mille Vignes, p. 105 ; Kriedemann 1968 ; dessin simplifié et original"},
    status: "needs_review",
    to_check: [
      "Optimum de photosynthèse (⚠️) : le livre donne 24-28 °C, Kriedemann (1968) 25-30 °C, Wine With Seth 20-30 °C ; retenir « autour de 25-30 °C ».",
      "Ralentissement et arrêt (⚠️) : sources de niveau 2b seulement ; elles parlent de forte altération vers 40 °C et non d’arrêt total, et une source évoque une inhibition dès 35 °C.",
      "Plage thermique des vignobles (⚠️) : le livre cite des isothermes annuelles de 10-22 °C, non retrouvées ; les sources donnent 13-21 °C en saison de croissance (grandeur différente).",
      "Le chiffre du livre « moins de 25 % de photosynthèse sous 10 °C » n’a été retrouvé dans aucune source : non repris dans la fiche.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 105 et 108 ; Huglin 1978, Nouveau mode d’évaluation des possibilités héliothermiques d’un milieu viticole ; Familia Torres, Budbreak ; Kriedemann 1968, Photosynthesis in vine leaves (Vitis) ; Wine With Seth, Photosynthesis in vines ; Wine With Seth, Latitude and the wine belt ; Jones, Climate, grapes and wine (IVES).",
    page: 105
  },
  {
    id: 130,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le froid : gel d’hiver et gel de printemps",
    synth: "Le gel peut frapper à trois moments : à l’automne avant le repos, en hiver pendant la dormance et au printemps après le débourrement ; c’est le plus destructeur, car la végétation est alors partie et les futures grappes sont à découvert. La vigne craint de plus en plus le froid à mesure que la végétation avance : environ -4 à -5 °C pour un bourgeon encore dormant au printemps, -3 °C au stade bourgeon dans le coton, -2 °C à la pointe verte, -1,5 °C à la première feuille étalée, puis -1 à 0 °C dès deux feuilles. En plein hiver, Vitis vinifera tient beaucoup plus bas (environ -22 à -26 °C selon le cépage d’après WSU), alors que le livre place le début des dégâts vers -15 à -20 °C : les chiffres ne coïncident pas.",
    mnemo: "La vigne se déshabille au printemps : à chaque couche retirée, un peu de tolérance au froid en moins.",
    flash: { q: "À quel moment le gel est-il le plus dommageable pour la vigne ?", a: "Au printemps, après le débourrement : les bourgeons porteurs de grappes ont démarré et sont exposés.", keys: [["printemps","avril","mai"],["débourrement","bourgeons","bourgeon","démarré"]] },
    qcm: { q: "Quel stade supporte le moins bien le gel de printemps ?", opts: ["Bourgeon encore dormant", "Bourgeon dans le coton", "Pointe verte", "Deux feuilles étalées ou plus"], good: 3, expl: "Plus la plante est avancée, plus le seuil de dégât se rapproche de 0 °C." },
    exos: [
      { type: "ordering", prompt: "Classe ces stades du moins sensible (supporte le plus froid) au plus sensible au gel.", payload: { items: ["Bourgeon encore dormant au printemps (≈ -4 à -5 °C)", "Bourgeon dans le coton (≈ -3 °C)", "Pointe verte (≈ -2 °C)", "Première feuille étalée (≈ -1,5 °C)", "Deux feuilles ou plus (-1 à 0 °C)"] }, explanation: "En sortant de dormance, les tissus s’hydratent et se développent, donc deviennent plus vulnérables : le seuil de dégât remonte vers 0 °C." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Un bourgeon encore dormant au printemps craint davantage un gel à -3 °C qu’une vigne dont les deux premières feuilles sont étalées.", answer: false }, explanation: "À un stade avancé, un degré sous zéro suffit à faire des dégâts, alors qu’un bourgeon encore dormant tolère plusieurs degrés de froid : tout l’enjeu est la date de débourrement." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Gel d’hiver (⚠️, une seule source) : le livre place les dégâts de vinifera vers -15/-20 °C et la résistance des vignes américaines et asiatiques à -30 °C ; WSU donne -22 à -26 °C de résistance maximale pour vinifera, environ -29 °C pour labrusca et hybrides, et ne traite pas des espèces asiatiques."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 105 et 108 ; AgriRéseau (Québec), Gel et températures critiques (Université Brock) ; Perennia, Spring frost and freeze damage (vigne) ; Washington State University, Cold hardiness (vinifera).",
    page: 105
  },
  {
    id: 131,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les types de gel",
    synth: "Le gel d’advection vient d’une masse d’air froid poussée par un vent (au-delà d’environ 15 km/h), sans inversion thermique ; le gel de radiation survient par nuit calme et ciel dégagé : le sol se refroidit et l’air froid s’accumule en bas sous de l’air plus chaud (inversion). La gelée blanche, ou gelée radiative, dépose une fine pellicule de givre ; la gelée noire noircit les organes sans givre : comme le livre, Le Cap et al. (INRAE, 2021) l’associent au gel d’advection, alors que Pleinchamp la range dans le gel d’évaporation. Le gel d’évaporation refroidit une surface par l’eau qui s’évapore et lui prend de la chaleur. En France, 2021 (gel d’avril, récolte nationale estimée en septembre à 33,3 Mhl, chiffre révisé depuis) et 2017 sont les grands gels de printemps récents.",
    mnemo: "Advection : le froid arrive en voiture (le vent). Radiation : le froid tombe du ciel clair et se pose en bas, comme l’eau au fond d’un bol.",
    flash: { q: "Pourquoi les éoliennes antigel ne marchent-elles que contre le gel de radiation ?", a: "Elles ramènent vers le sol l’air plus chaud d’en haut, ce qui suppose une inversion thermique ; en advection, toute la masse d’air est froide.", keys: [["inversion","chaud","chaude"],["advection","masse","radiation"]] },
    qcm: { q: "Par quel type de nuit un gel de radiation est-il le plus probable ?", opts: ["Nuit venteuse, ciel couvert", "Nuit calme, ciel dégagé", "Journée pluvieuse, vent d’ouest", "Nuit de tempête avec air polaire"], good: 1, expl: "Sans nuages ni vent, le sol perd sa chaleur et l’air froid reste collé au sol." },
    exos: [
      { type: "matching", prompt: "Associe chaque gel à son mécanisme.", payload: { pairs: [["Advection", "Masse d’air froid apportée par le vent, sans inversion"], ["Radiation", "Nuit calme et claire : le sol se refroidit, inversion thermique"], ["Évaporation", "Surface refroidie par l’eau qui s’évapore"]] }, explanation: "Le critère à retenir est l’origine du froid : importé par le vent, produit sur place par le sol, ou prélevé par l’évaporation." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les éoliennes antigel sont efficaces contre tous les types de gel.", answer: false }, explanation: "Elles exploitent l’air plus chaud en hauteur, qui n’existe qu’avec une inversion ; face à une masse d’air froid advectée, il n’y a rien de plus chaud à ramener." },
      { type: "mcq_single", prompt: "Quel gel d’avril a fait annoncer, en septembre 2021, une récolte française d’environ 33 Mhl (-29 %) ?", payload: { options: ["2017", "2018", "2020", "2021"], answer: 3 }, explanation: "2017 avait déjà fait chuter la récolte (environ 37 Mhl), mais c’est le gel d’avril 2021 qui a creusé l’écart, avec des parcelles provençales ayant perdu tous leurs bourgeons." }
    ],
    schema: { svg: "<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' fill='currentColor'><text x='4' y='13' font-size='10' font-weight='bold'>Gel de radiation : l’inversion de température</text><rect x='4' y='30' width='170' height='62' fill-opacity='0.06' stroke='currentColor' stroke-opacity='0.4'/><text x='10' y='48' font-size='9'>Air plus chaud</text><text x='10' y='60' font-size='9'>(couche d’inversion)</text><rect x='4' y='92' width='170' height='50' fill-opacity='0.22' stroke='currentColor' stroke-opacity='0.4'/><text x='10' y='110' font-size='9' font-weight='bold'>Air froid, sous 0 °C</text><text x='10' y='122' font-size='9'>(stagne près du sol)</text><rect x='4' y='142' width='170' height='10' fill-opacity='0.5'/><path d='M130,140 l0,-14 m-3,4 l3,-4 l3,4 M148,140 l0,-14 m-3,4 l3,-4 l3,4 M166,140 l0,-14 m-3,4 l3,-4 l3,4' fill='none' stroke='currentColor' stroke-width='1.3'/><text x='10' y='168' font-size='9'>Nuit calme, ciel dégagé :</text><text x='10' y='180' font-size='9'>le sol rayonne sa chaleur</text><line x1='215' y1='34' x2='215' y2='150' stroke='currentColor'/><line x1='215' y1='150' x2='312' y2='150' stroke='currentColor'/><text x='210' y='30' font-size='9' text-anchor='end'>hauteur</text><text x='312' y='164' font-size='9' text-anchor='end'>température</text><line x1='250' y1='36' x2='250' y2='150' stroke='currentColor' stroke-dasharray='3 3' stroke-opacity='0.7'/><text x='250' y='28' font-size='9' text-anchor='middle'>0 °C</text><polyline points='226,146 238,122 250,92 274,66 300,44' fill='none' stroke='currentColor' stroke-width='2'/><text x='312' y='176' font-size='9' text-anchor='end'>plus chaud en hauteur</text></svg>", legende: "Gel de radiation : par nuit claire et calme, le sol se refroidit et l’air froid reste au ras du sol, sous une couche plus chaude.", src: "D’après Lepeltier, Mille Vignes, p. 105 ; Pleinchamp, Les différents types de gel." },
    cours: {
      lede: "Tous les gels ne se valent pas : selon d’où vient le froid, on ne se défend pas de la même façon. Savoir nommer le type de gel, c’est déjà savoir si une éolienne servira ou non.",
      frise: null,
      essentiel: "Advection : le froid arrive avec le vent. Radiation : le froid se forme sur place, par nuit claire et calme, avec une inversion thermique. Blanche ou noire, une gelée se lit à ce qu’on voit : du givre, ou des organes brunis sans givre.",
      sections: [
        {
          h: "Le froid importé et le froid fabriqué sur place",
          blocs: [
            { imp: "essentiel", txt: "Gel d’advection : une grande masse d’air sous 0 °C est poussée par un vent (plus de 15 km/h environ). Elle couvre une zone large et il n’y a pas d’inversion thermique." },
            { imp: "essentiel", txt: "Gel de radiation : par nuit calme et ciel dégagé, le sol perd sa chaleur et refroidit l’air à son contact. L’air froid, plus dense, reste en bas sous de l’air plus chaud : c’est l’inversion thermique. Le manque de soleil la veille accentue le refroidissement." },
            { imp: "important", txt: "Gel d’évaporation : l’eau qui s’évapore d’une feuille ou du sol lui prend de la chaleur et peut la faire passer sous 0 °C." }
          ],
          table: { caption: "Trois origines du froid", head: ["Type", "Origine du froid", "Conditions", "Éoliennes antigel"], rows: [
            { imp: "essentiel", cells: ["Advection", "Masse d’air froid apportée", "Vent (> 15 km/h env.), zone large", "Inutiles"] },
            { imp: "essentiel", cells: ["Radiation", "Refroidissement du sol", "Nuit calme, ciel dégagé, inversion", "Utiles"] },
            { imp: "important", cells: ["Évaporation", "Chaleur prélevée par l’eau qui s’évapore", "Surface humide, air sec", "Non documenté dans nos sources"] }
          ] }
        },
        {
          h: "Gelée blanche, gelée noire",
          blocs: [
            { imp: "important", txt: "Gelée blanche : la vapeur d’eau givre, c’est un dépôt de glace visible (air humide, calme, ciel clair)." },
            { imp: "important", txt: "Gelée noire : les organes brunissent sans givre visible, par air sec. Le livre associe la gelée noire au gel d’advection (air sec, vent) ; Pleinchamp la range dans le gel d’évaporation. Divergence non tranchée." }
          ],
          table: null
        },
        {
          h: "Les gels qui ont marqué le vignoble français",
          blocs: [
            { imp: "important", txt: "2017 : gel de printemps sur Bordeaux, l’Alsace, Cognac et le Jura ; récolte nationale d’environ 37 Mhl." },
            { imp: "essentiel", txt: "2021 : gel d’avril, récolte estimée en septembre à 33,3 Mhl (-29 %), annoncée comme historiquement basse puis révisée à la hausse ; en Provence, certaines parcelles ont perdu 100 % de leurs bourgeons." },
            { imp: "culture", txt: "Le livre cite 2019, 2021 et 2022 ; seule 2021 est confirmée ici comme gel majeur national (2017 et 1991 s’y ajoutent dans les sources)." }
          ],
          table: null
        }
      ],
      synthese: [
        { imp: "essentiel", txt: "Advection : vent + masse d’air froid. Radiation : nuit claire et calme + inversion." },
        { imp: "important", txt: "Blanche = givre visible ; noire = organes brunis sans givre." },
        { imp: "important", txt: "Éoliennes antigel : seulement contre le gel de radiation." },
        { imp: "utile", txt: "À un client : un gel de printemps joue sur le millésime avant même qu’il existe ; 2021 en est l’exemple récent." }
      ],
      src: "Mille Vignes, P. Lepeltier, p. 105 ; Pleinchamp, Les différents types de gel et leurs paramètres de développement ; Perennia, Spring frost and freeze damage (vigne) ; Le Cap et al., Gelées du printemps 2020 à Quincy, SICTAG Mag’, février 2021 (hal-03279299) ; La Libre, production française (estimation ministère de l’Agriculture, sept. 2021) ; Gault&Millau, production 2017 (Agreste) ; BSV Vigne PACA n°4 du 13 avril 2021 (DRAAF). Cf. Mille Vignes, p. 105."
    },
    status: "needs_review",
    to_check: [
      "Récolte 2021 : estimation de septembre (33,3 Mhl) révisée ensuite ; valeur finale Agreste à confirmer",
      "Gelée noire : rattachée au gel d’advection par le livre et par Le Cap et al. (2021), au gel d’évaporation par Pleinchamp ; gelée blanche = gelée radiative (Le Cap et al.). Divergence non tranchée.",
      "Gel d’évaporation (⚠️, une seule source) : le livre l’explique par l’équilibre d’un sol humide avec un air à 0 °C ; Pleinchamp par l’évaporation qui prélève de la chaleur.",
      "Gels majeurs : le livre cite 2019, 2021 et 2022 ; les sources consultées confirment 2021, 2017 (et 1991), pas 2019 ni 2022 pour le vignoble national."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 105 ; Pleinchamp, Les différents types de gel et leurs paramètres de développement ; Perennia, Spring frost and freeze damage (vigne) ; Le Cap et al., Gelées du printemps 2020 à Quincy, SICTAG Mag’, février 2021 (hal-03279299) ; La Libre, production française (estimation ministère de l’Agriculture, sept. 2021) ; Gault&Millau, production 2017 (Agreste) ; BSV Vigne PACA n°4 du 13 avril 2021 (DRAAF).",
    page: 105
  },
  {
    id: 132,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’indice de Winkler",
    synth: "L’indice de Winkler (Amerine et Winkler, UC Davis, 1944) cumule des degrés-jours : pour chaque jour, on prend la température moyenne au-dessus de 10 °C, puis on additionne du 1er avril au 31 octobre dans l’hémisphère nord. Le total range un lieu dans l’une des cinq régions climatiques de Californie, de la I (la plus fraîche) à la V (la plus chaude). Sa limite : il ne retient que la température moyenne, sans la longueur du jour que Huglin ajoutera. Le livre parle d’« heures » et d’un arrêt au 30 octobre, là où les sources donnent des degrés-jours et le 31 octobre ; UC Davis (Forrestel, avec le soutien de Winiarski) travaille à le moderniser.",
    mnemo: "Une tirelire à chaleur : chaque jour y dépose ses degrés au-dessus de 10 °C ; selon le total, le lieu est rangé dans l’un des cinq tiroirs, du plus frais au plus chaud.",
    flash: { q: "Que cumule l’indice de Winkler, et au-dessus de quel seuil ?", a: "Des degrés-jours : la température moyenne journalière au-dessus de 10 °C, du 1er avril au 31 octobre (hémisphère nord).", keys: [["degrés-jours","degrés jours","degré jour"],["10","dix"]] },
    qcm: { q: "Quelle limite de l’indice de Winkler l’indice de Huglin corrige-t-il ?", opts: ["Il ignore la température", "Il ignore la longueur du jour", "Il choisit un seuil trop bas", "Il ne couvre que l’hiver"], good: 1, expl: "Huglin ajoute un coefficient de longueur du jour (et la température maximale) à la base du calcul de Winkler." },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "L’indice de Winkler additionne le nombre d’heures où la température dépasse 10 °C.", answer: false }, explanation: "Il somme des écarts : une journée à 20 °C de moyenne apporte 10 degrés-jours, quel que soit le nombre d’heures passées au-dessus de 10 °C. C’est un point où le livre s’écarte des sources." },
      { type: "ordering", prompt: "Classe les régions de Winkler de la plus fraîche à la plus chaude.", payload: { items: ["Région I (moins de 2500 °F-jours)", "Région II (2501 à 3000)", "Région III (3001 à 3500)", "Région IV (3501 à 4000)", "Région V (plus de 4000)"] }, explanation: "Plus le cumul de degrés-jours est élevé, plus la saison est chaude : la numérotation suit la chaleur, pas la qualité des vins." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Winkler additionne, du 1er {{avril}} au 31 {{octobre}}, les {{degrés-jours|degrés jours}} au-dessus de {{10}} °C." }, explanation: "Le seuil de 10 °C est le zéro de végétation : on ne compte que la chaleur utile à la croissance, sur la saison de l’hémisphère considéré (1er octobre-30 avril au sud)." },
      { type: "matching", prompt: "Associe chaque indice à ce qu’il prend en compte.", payload: { pairs: [["Winkler", "Température moyenne seule"], ["Huglin", "Températures moyenne et maximale, avec un coefficient de longueur du jour"]] }, explanation: "Deux lieux de même chaleur moyenne peuvent avoir des étés de durée de jour différente : c’est ce que Huglin cherche à saisir, pas Winkler." }
    ],
    schema: null,
    cours: {
      lede: "Winkler a donné au vignoble sa première règle de calcul : additionner la chaleur utile de la saison et ranger le lieu dans une classe.",
      frise: [
        { date: "1944", txt: "Amerine et Winkler publient les cinq régions climatiques de Californie (Hilgardia 15(6))." },
        { date: "2021", txt: "Un projet d’UC Davis, mené par Beth Forrestel avec le soutien de Warren Winiarski, entreprend de moderniser l’indice." }
      ],
      essentiel: "On compte des degrés-jours (moyenne journalière moins 10 °C) du 1er avril au 31 octobre au nord. Plus le total est haut, plus la région est chaude : I la plus fraîche, V la plus chaude.",
      sections: [
        {
          h: "Le calcul",
          blocs: [
            { imp: "essentiel", txt: "Pour chaque jour de la saison, on retient l’écart entre la température moyenne et 10 °C (50 °F) quand il est positif, puis on additionne. Hémisphère sud : du 1er octobre au 30 avril." },
            { imp: "important", txt: "Le livre parle d’un nombre d’heures et d’une fin au 30 octobre ; les sources donnent des degrés-jours et le 31 octobre. L’écart de date est sans conséquence, celui de méthode compte." }
          ],
          table: null
        },
        {
          h: "Les cinq régions",
          blocs: [
            { imp: "important", txt: "Les seuils d’origine sont en °F-jours ; leurs équivalents en °C-jours sont approchés et restent à sourcer." }
          ],
          table: { caption: "Les cinq régions de Winkler, de la plus fraîche à la plus chaude", head: ["Région", "°F-jours", "°C-jours (≈)"], rows: [
            { imp: "essentiel", cells: ["I", "moins de 2500", "environ 1390"] },
            { imp: "important", cells: ["II", "2501 à 3000", "1389 à 1667"] },
            { imp: "important", cells: ["III", "3001 à 3500", "1668 à 1944"] },
            { imp: "important", cells: ["IV", "3501 à 4000", "1945 à 2222"] },
            { imp: "essentiel", cells: ["V", "plus de 4000", "plus de 2222 (jusqu’à environ 2700)"] }
          ] }
        },
        {
          h: "Sa limite",
          blocs: [
            { imp: "essentiel", txt: "Winkler ne retient que la température moyenne. Huglin y ajoute la température maximale et un coefficient k de longueur du jour (de 1,02 à 1,06 entre 40° et 50° de latitude)." }
          ],
          table: null
        }
      ],
      synthese: [
        { imp: "essentiel", txt: "Winkler = degrés-jours au-dessus de 10 °C, du 1er avril au 31 octobre." },
        { imp: "essentiel", txt: "Cinq régions, de I (fraîche) à V (chaude)." },
        { imp: "important", txt: "Limite : il ignore la longueur du jour." },
        { imp: "utile", txt: "UC Davis le renouvelle (projet Forrestel, 2021)." }
      ],
      src: "Mille Vignes, P. Lepeltier, p. 108 et 110 ; Amerine et Winkler 1944, Composition and quality of musts and wines of California grapes, Hilgardia 15(6) ; Huglin 1978 ; xclim, indices agro-climatiques ; UC Davis, Winkler index modernization (Forrestel) ; JancisRobinson.com, Winiarski’s new climate index. Cf. Mille Vignes, p. 108-110."
    },
    status: "needs_review",
    to_check: [
      "Projet UC Davis (⚠️) : le livre parle de 74 parcelles de la Napa Valley et de 60 cépages testés aux canicules ; UC Davis précise que 74 blocs ont fourni des données de chimie 2015 en cabernet-sauvignon et que les 60 cultivars sont répartis dans deux blocs.",
      "Seuils des régions : donnés en °F-jours à l’origine (Amerine et Winkler 1944) ; équivalents en °C-jours et scission de la région I en Ia et Ib à sourcer (le livre ne cite pas les seuils).",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 108 et 110 ; Amerine et Winkler 1944, Composition and quality of musts and wines of California grapes, Hilgardia 15(6) ; Huglin 1978 ; xclim, indices agro-climatiques ; UC Davis, Winkler index modernization (Forrestel) ; JancisRobinson.com, Winiarski’s new climate index.",
    page: 108
  },
  {
    id: 133,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’indice héliothermique de Huglin et les cépages",
    synth: "L’indice héliothermique de Huglin (IH) additionne, du 1er avril au 30 septembre dans l’hémisphère nord, la moyenne des écarts à 10 °C de la température moyenne et de la maximale, le tout multiplié par un coefficient k lié à la latitude (1 à 1,06). Il intègre donc température et longueur du jour, et non l’insolation mesurée comme le laisse entendre le livre. Huglin juge la vigne à peine possible vers IH 1500 et tous les cépages mûrs au-delà de 2400. Les cépages se rangent par IH : Müller-Thurgau et riesling au frais, cabernets et merlot au milieu, grenache, syrah puis carignan au chaud.",
    mnemo: "IH = un thermomètre et une horloge : on lit la chaleur, puis on la pondère par la longueur du jour.",
    flash: { q: "Au-delà de la température moyenne, que combine l’indice de Huglin ?", a: "La température maximale et un coefficient k de longueur du jour, lié à la latitude.", keys: [["maximale","maximales","maximum","max"],["longueur du jour","jour","latitude","coefficient"]] },
    qcm: { q: "Parmi ces cépages, lequel demande le plus de chaleur d’après les repères de Huglin ?", opts: ["Müller-Thurgau", "Pinot noir", "Cabernet franc", "Carignan"], good: 3, expl: "Le carignan est placé vers IH 2200-2300 ; les trois autres sont placés à 1900 au plus." },
    exos: [
      { type: "matching", prompt: "Associe chaque cépage à son repère d’IH selon Huglin.", payload: { pairs: [["Müller-Thurgau", "IH 1500-1600"], ["Riesling", "IH 1700-1800"], ["Cabernet-Sauvignon", "IH 1900-2000"], ["Grenache", "IH 2100-2200"], ["Carignan", "IH 2200-2300"]] }, explanation: "Les repères suivent la précocité : plus un cépage mûrit tard, plus il lui faut de chaleur cumulée. Pour le pinot noir de Bourgogne, Bourguignon (2015) évoque plutôt 1600-1750 : ces repères restent indicatifs." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Dans l’indice de Huglin, le coefficient k mesure la durée d’ensoleillement réellement observée.", answer: false }, explanation: "k dépend de la latitude, donc de la longueur théorique du jour, et non d’un nombre d’heures de soleil mesuré (nuages compris). Le mot « luminosité » du livre est une simplification." },
      { type: "odd_one_out", prompt: "Quel cépage mûrit nettement plus tard que les trois autres, d’après les repères de Huglin ?", payload: { options: ["Müller-Thurgau", "Riesling", "Chardonnay", "Grenache"], answer: 3 }, explanation: "Le grenache est placé vers IH 2100-2200 ; les trois autres sont à 1800 au plus, ce sont des cépages de climats frais." },
      { type: "mcq_single", prompt: "Dans le système CCM, un IH de 2200 correspond à quelle classe ?", payload: { options: ["Frais", "Tempéré", "Tempéré chaud", "Très chaud"], answer: 2 }, explanation: "Les classes se coupent à 1500, 1800, 2100, 2400 et 3000 : 2200 tombe entre 2100 et 2400, c’est le « tempéré chaud »." }
    ],
    schema: null,
    cours: {
      lede: "Winkler comptait la chaleur ; Huglin la pondère par la longueur du jour et relie un lieu aux cépages qu’il permet de mûrir.",
      frise: null,
      essentiel: "IH = somme, d’avril à septembre, de [(T moyenne - 10) + (T max - 10)] / 2, multipliée par k. Sous 1500 la vigne est à peine possible ; au-delà de 2400, tous les cépages mûrissent.",
      sections: [
        {
          h: "Le calcul et les classes",
          blocs: [
            { imp: "essentiel", txt: "Chaque jour du 1er avril au 30 septembre (hémisphère nord), on moyenne les écarts à 10 °C de la température moyenne et de la maximale, puis on multiplie le total par k (de 1 à 1,06 selon la latitude)." },
            { imp: "important", txt: "k vaut de 1,02 à 1,06 entre 40° et 50° de latitude : il traduit la longueur du jour, pas l’insolation mesurée." }
          ],
          table: { caption: "Les classes de l’IH dans le système CCM (Tonietto et Carbonneau, 2004)", head: ["Classe", "IH"], rows: [
            { imp: "important", cells: ["Très frais", "1500 ou moins"] },
            { imp: "essentiel", cells: ["Frais", "1500 à 1800"] },
            { imp: "essentiel", cells: ["Tempéré", "1800 à 2100"] },
            { imp: "essentiel", cells: ["Tempéré chaud", "2100 à 2400"] },
            { imp: "important", cells: ["Chaud", "2400 à 3000"] },
            { imp: "important", cells: ["Très chaud", "plus de 3000"] }
          ] }
        },
        {
          h: "Quels cépages pour quel IH ?",
          blocs: [
            { imp: "important", txt: "Ces repères datent de Huglin (1978) et rangent les cépages par précocité. Ils sont indicatifs : pour le pinot noir bourguignon, Bourguignon (2015) évoque 1600-1750 au lieu de 1700-1800." }
          ],
          table: { caption: "Repères de maturité des cépages selon Huglin", head: ["IH", "Cépages"], rows: [
            { imp: "important", cells: ["1500-1600", "Müller-Thurgau"] },
            { imp: "essentiel", cells: ["1700-1800", "Riesling, chardonnay, pinot noir, sauvignon blanc"] },
            { imp: "important", cells: ["1800-1900", "Cabernet franc"] },
            { imp: "essentiel", cells: ["1900-2000", "Cabernet-sauvignon, merlot, chenin"] },
            { imp: "essentiel", cells: ["2100-2200", "Grenache, syrah"] },
            { imp: "important", cells: ["2200-2300", "Carignan"] },
            { imp: "utile", cells: ["environ 2300", "Aramon"] }
          ] }
        }
      ],
      synthese: [
        { imp: "essentiel", txt: "IH = température moyenne et maximale au-dessus de 10 °C, avril-septembre, pondérées par k." },
        { imp: "essentiel", txt: "Plus l’IH est haut, plus on peut mûrir des cépages tardifs." },
        { imp: "important", txt: "Frais (IH 1500-1800) : riesling, chardonnay, pinot noir. Tempéré chaud (2100-2400) : grenache, syrah, carignan." },
        { imp: "utile", txt: "À un client : un cépage « de climat frais » est un cépage qui mûrit avec peu de chaleur cumulée." }
      ],
      src: "Mille Vignes, P. Lepeltier, p. 110 ; Huglin 1978, Nouveau mode d’évaluation des possibilités héliothermiques d’un milieu viticole (CR Acad. Agric. 64) ; Tonietto et Carbonneau 2004, A multicriteria climatic classification system for grape-growing regions worldwide (copie Embrapa) ; xclim, indices agro-climatiques ; Bourguignon, Académie du Vin de Bordeaux 2015, La température et la vigne. Cf. Mille Vignes, p. 110."
    },
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 110 ; Huglin 1978, Nouveau mode d’évaluation des possibilités héliothermiques d’un milieu viticole (CR Acad. Agric. 64) ; Tonietto et Carbonneau 2004, A multicriteria climatic classification system for grape-growing regions worldwide (copie Embrapa) ; xclim, indices agro-climatiques ; Bourguignon, Académie du Vin de Bordeaux 2015, La température et la vigne.",
    page: 110
  },
  {
    id: 134,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Fraîcheur des nuits, indice de sécheresse et système CCM",
    synth: "L’indice de fraîcheur des nuits (IF) est la moyenne des températures minimales du seul mois de septembre (mars dans l’hémisphère sud) : à 12 °C ou moins les nuits sont très fraîches, au-dessus de 18 °C elles sont chaudes. L’indice de sécheresse (IS) est un bilan hydrique du sol, d’avril à septembre : réserve initiale de 200 mm plus pluie, moins transpiration potentielle et évaporation du sol ; le livre le dit fondé sur l’hygrométrie, ce qui est inexact. Le système CCM de Tonietto et Carbonneau combine IH, IF et IS : chaque région reçoit une classe par indice et leur combinaison forme son groupe climatique, appliqué à 97 régions de 29 pays.",
    mnemo: "Trois jauges au tableau de bord : IH, le chaud du jour ; IF, le frais de la nuit ; IS, la soif du sol.",
    flash: { q: "Sur quelle période se calcule l’indice de fraîcheur des nuits (hémisphère nord) ?", a: "C’est la moyenne des températures minimales du mois de septembre.", keys: [["minimales","minimale","minimum","min","nuit","nuits"],["septembre"]] },
    qcm: { q: "Sur quoi repose l’indice de sécheresse du CCM ?", opts: ["L’humidité relative de l’air", "Un bilan hydrique du sol (pluie, transpiration, évaporation)", "Le nombre de jours sans pluie", "La température maximale d’été"], good: 1, expl: "L’IS compte l’eau du sol comme un compte en banque : réserve, apports de pluie, pertes par transpiration et évaporation." },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "L’indice de sécheresse du système CCM se fonde sur l’hygrométrie, c’est-à-dire l’humidité de l’air.", answer: false }, explanation: "L’IS se calcule à partir de la pluie et de l’évapotranspiration, non de l’humidité de l’air : c’est une correction du livre, qui emploie ce mot pour désigner la sécheresse." },
      { type: "matching", prompt: "Associe chaque indice à ce qu’il mesure.", payload: { pairs: [["IH", "Chaleur pondérée par la longueur du jour (avril-septembre)"], ["IF", "Moyenne des minimales de septembre"], ["IS", "Bilan hydrique du sol (avril-septembre)"]] }, explanation: "Chaque indice répond à une question : quelle chaleur, quelles nuits, quelle eau. Le CCM les croise pour décrire un climat viticole plus finement qu’une moyenne unique." },
      { type: "mcq_single", prompt: "Dans le CCM, une moyenne des minimales de septembre de 15 °C donne des nuits…", payload: { options: ["très fraîches", "fraîches", "tempérées", "chaudes"], answer: 2 }, explanation: "Les classes se coupent à 12, 14 et 18 °C : 15 °C tombe entre 14 et 18 °C. C’est l’ordre de grandeur que le livre associe aux nuits qui suivent la véraison." }
    ],
    schema: null,
    cours: null,
    status: "verified",
    to_check: [
      
    ],
    src: "Mille Vignes, P. Lepeltier, p. 110 ; Tonietto et Carbonneau 2004, A multicriteria climatic classification system for grape-growing regions worldwide, Agric. For. Meteorol. 124, 81-97 (texte intégral) ; xclim, indices agro-climatiques (Huglin, Cool Night, Dryness) ; Tonietto, Embrapa (étude sur 46 régions, site CCM).",
    page: 110
  },
  {
    id: 135,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Pointu",
    geo: null,
    titre: "Autres outils : échelle de Jones et modèles GFV/GSR",
    synth: "Gregory Jones situe les vins de qualité dans une plage de température moyenne de saison de croissance d’environ 13 à 21 °C, et attribue une fourchette à chaque cépage : environ 14-16 °C pour le pinot noir, 16,8-20,2 °C pour le cabernet-sauvignon. Le modèle GFV (Grapevine Flowering Veraison) prédit floraison et véraison en cumulant les températures moyennes depuis le 60e jour de l’année (base 0 °C) ; Parker et ses coauteurs s’en servent pour classer les cépages selon leur besoin en chaleur. Le livre y ajoute un indice GSR, fondé sur le sucre des baies à maturité, que les sources consultées ne confirment pas.",
    mnemo: "Jones donne à chaque cépage sa tranche de thermomètre ; GFV lance le chronomètre entre floraison et véraison.",
    flash: { q: "Que prédit le modèle GFV ?", a: "Les dates de floraison et de véraison, par cumul des températures moyennes depuis le jour 60 de l’année.", keys: [["floraison"],["véraison"],["températures","température","degrés"]] },
    qcm: { q: "Selon l’échelle de Jones, quelle plage de température moyenne de saison correspond au pinot noir ?", opts: ["8-10 °C", "14-16 °C", "16,8-20,2 °C", "22-24 °C"], good: 1, expl: "Le pinot noir est un cépage de climat frais ; 16,8-20,2 °C est la plage du cabernet-sauvignon." },
    exos: [
      { type: "matching", prompt: "Associe chaque outil à ce qu’il décrit.", payload: { pairs: [["Échelle de Jones", "Plages de température moyenne de saison par cépage"], ["Modèle GFV", "Dates de floraison et de véraison par cumul de températures"], ["Indice de Huglin", "Chaleur d’avril à septembre pondérée par la longueur du jour"]] }, explanation: "Jones classe des cépages selon la chaleur de la saison, GFV prévoit des dates, Huglin décrit un lieu : trois angles pour juger l’adéquation cépage-climat." },
      { type: "flashcard_reverse", prompt: "Il prédit floraison et véraison en cumulant les températures moyennes dès le 60e jour de l’année. De quel modèle s’agit-il ?", payload: { answer: "Du modèle GFV (Grapevine Flowering Veraison)." }, explanation: "Son nom donne le contenu : Flowering (floraison) et Veraison (véraison), les deux repères qui encadrent le grossissement des baies." },
      { type: "short_answer", prompt: "Quel cépage se contente, dans l’échelle de Jones, d’une plage de 14 à 16 °C ?", payload: { accepted: ["pinot noir", "le pinot noir"] }, explanation: "Cette plage basse correspond à un cépage précoce qui mûrit avec peu de chaleur ; le cabernet-sauvignon, tardif, se place nettement plus haut." },
      { type: "flashcard", prompt: "Explique : pourquoi la fraîcheur des nuits compte-t-elle autant que la chaleur du jour ?", payload: { answer: "La chaleur du jour fait mûrir et produit les sucres. Quand les nuits restent fraîches après la véraison, la vigne respire moins : elle peut consacrer ses sucres à la maturation des composés secondaires (couleur, arômes, polyphénols) tout en conservant son acidité. Pour Lepeltier, c’est le point commun de presque tous les vignobles de qualité." }, explanation: "Question fil rouge du chapitre « Les éléments météorologiques et la vigne » (Mille Vignes, p. 108). Auto-évalue-toi : as-tu cité la respiration nocturne, l’acidité conservée et la maturation des arômes et de la couleur ?" }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Échelle de Jones (⚠️) : le livre la date de 2005 ; la source consultée est une synthèse de 2006, date non confirmée.",
      "GFV et GSR (⚠️) : GFV est confirmé, mais GSR, le chiffre de 95 cépages et la date de 2011 ne sont pas retrouvés ; la source montre Parker travaillant avec des équipes françaises (INRAE, Bordeaux)."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 110 ; Jones, Climate, grapes and wine (IVES, d’après Jones 2006) ; Wine With Seth, Latitude and the wine belt ; IVES, Classification for timing of flowering and veraison with the GFV model (Parker et al.).",
    page: 110
  },
  {
    id: 136,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’eau de la vigne : besoins, contrainte hydrique et évapotranspiration",
    synth: "La vigne consomme environ 450 à 550 mm d’eau sur le cycle (INRAE : environ 450 mm) ; le livre avance qu’elle peut produire avec 250 à 350 mm et que la plupart des vignobles de qualité reçoivent 400 mm en période végétative : ces chiffres ne se comparent pas directement, le sol apportant une réserve. Un déficit hydrique modéré freine la vigueur et la taille des baies et concentre sucres, arômes et polyphénols, surtout en rouge ; sans contrainte, la dilution menace, et un stress sévère nuit à la qualité et au rendement. Sous manque d’eau, l’acide abscissique (ABA) ferme les stomates ; il favorise aussi la maturation en levant le frein aux enzymes qui accumulent les sucres dans la baie, ce qui n’étaye qu’en partie l’idée du livre d’un aiguillage des sucres vers les fruits. L’évapotranspiration de référence (ETo) dépend du rayonnement, de la température, de l’humidité de l’air et du vent, et celle de la culture se calcule ETc = Kc × ETo.",
    mnemo: "Un peu de soif fait du bien à la vigne, pas la panique : l’eau en trop dilue, l’eau en moins épuise.",
    flash: { q: "Quel est l’effet d’un déficit hydrique modéré sur le raisin ?", a: "Il freine la vigueur et la taille des baies et concentre sucres, arômes et polyphénols (surtout en rouge).", keys: [["vigueur","baies","rendement","croissance"],["concentre","concentration","concentrés","sucres","polyphénols","arômes"]] },
    qcm: { q: "Quelle hormone ferme les stomates de la vigne en cas de manque d’eau ?", opts: ["Éthylène", "Acide abscissique", "Auxine", "Gibbérelline"], good: 1, expl: "L’ABA est le signal de sécheresse de la plante : il commande la fermeture des stomates pour limiter les pertes d’eau." },
    exos: [
      { type: "mcq_multi", prompt: "Quels facteurs entrent dans l’évapotranspiration de référence (ETo) ?", payload: { options: ["Le rayonnement", "La température", "L’humidité de l’air", "Le vent", "La couleur de la baie"], answers: [0, 1, 2, 3] }, explanation: "L’ETo est la demande évaporative de l’atmosphère : tout ce qui pousse l’eau à quitter le sol et les feuilles y contribue. La couleur de la baie n’a aucun rapport avec cette demande." },
      { type: "cloze", prompt: "Complète.", payload: { text: "L’évapotranspiration de la culture s’obtient par ETc = {{Kc}} × {{ETo}}." }, explanation: "Le coefficient cultural Kc adapte la demande de l’atmosphère à la plante : la même chaleur n’assoiffe pas de la même façon une jeune pousse et un feuillage complet." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Plus la contrainte hydrique est forte, meilleure est la qualité du raisin.", answer: false }, explanation: "La relation est en cloche : un déficit modéré concentre, mais au-delà d’un seuil la plante se bloque et la maturation en pâtit. Le piège est de confondre un peu de stress et beaucoup." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Besoins en eau (⚠️) : INRAE et Deloire & Pellegrino donnent 450-550 mm de consommation ; le livre cite 250-350 mm au minimum et 400 mm typique, ainsi que des moyennes annuelles de 600-900 mm non vérifiées. Le Handbook of Enology (vol. 1, p. 266 et 272) raisonne en pluie annuelle : sous 400 mm, rendements viables difficiles ; la plupart des grands vins sous 700-800 mm. Chiffres non comparables.","Acide abscissique (⚠️) : fermeture des stomates (OENO One ; Handbook of Enology, vol. 1, p. 268) ; levée de l’inhibition des enzymes d’accumulation des sucres et promotion de la maturation (Handbook, p. 249 et 268, une seule source) ; l’« aiguillage » des sucres vers les fruits du livre n’est étayé qu’en partie."],
    src: "Mille Vignes, P. Lepeltier, p. 110-111 ; Deloire et Pellegrino, revue technique IVES sur le déficit hydrique de la vigne ; INRAE, Pech Rouge, présentation sur l’eau et la vigne ; OENO One, revue sur le déficit hydrique modéré, l’ABA et la qualité du raisin ; FAO, Irrigation and drainage paper 56 (ETo, ETc, Kc) ; Tonietto et Carbonneau 2004 (copie Embrapa) ; Ribéreau-Gayon, Dubourdieu, Donèche, Lonvaud, Handbook of Enology, vol. 1, 2e éd. (2006), p. 249, 266-272",
    page: 110
  },
  {
    id: 137,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’effet de foehn",
    synth: "Une masse d’air humide qui rencontre un relief s’élève : l’air sec se refroidit de 1 °C par 100 m jusqu’au niveau de condensation, puis de 0,5 °C par 100 m une fois saturé, avec de la pluie côté au vent. Redescendu côté sous le vent, l’air asséché se réchauffe de 1 °C par 100 m : c’est le foehn, vent chaud et sec. Sur l’exemple du schéma, l’air est à 15 °C à 1 000 m côté au vent et à 22,5 °C à la même altitude côté sous le vent, soit 7,5 °C de plus. Le foehn touche Jurançon (vent chaud et sec du sud), le chinook en Oregon, le nor’wester néo-zélandais et le zonda andin ; le livre cite aussi l’Alsace.",
    mnemo: "L’air monte en pleurant (il perd son eau, se refroidit peu), redescend sec et se réchauffe vite : il repart plus chaud qu’il n’est arrivé.",
    flash: { q: "Pourquoi l’air est-il plus chaud au pied du versant sous le vent qu’au pied du versant au vent, à altitude égale ?", a: "Il a perdu son eau en pluie à la montée (refroidissement de 0,5 °C/100 m seulement), puis se réchauffe de 1 °C/100 m en descendant, devenu sec.", keys: [["pluie","pluies","précipitations","eau","humidité","condense","condensation"],["sec","sèche","séché"],["réchauffe","réchauffement","compression","adiabatique","descente","descendant"]] },
    qcm: { q: "Quel gradient s’applique à l’air qui redescend côté sous le vent ?", opts: ["-1 °C/100 m", "-0,5 °C/100 m", "+0,5 °C/100 m", "+1 °C/100 m"], good: 3, expl: "L’air asséché se comprime en descendant et se réchauffe au rythme de l’air sec, soit 1 °C par 100 m." },
    exos: [
      { type: "ordering", prompt: "Suis l’air le long du schéma, du pied du versant au vent jusqu’au pied du versant sous le vent.", payload: { items: ["Pied côté au vent, 1 000 m : 15 °C", "Niveau de condensation, environ 1 500 m : 10 °C", "Sommet, 3 000 m : 2,5 °C", "Côté sous le vent, 2 000 m : 12,5 °C", "Pied côté sous le vent, 1 000 m : 22,5 °C"] }, explanation: "Chaque valeur se déduit de la précédente : -5 °C sur 500 m d’air sec, -7,5 °C sur 1 500 m d’air saturé, puis +10 °C par tranche de 1 000 m de descente." },
      { type: "short_answer", prompt: "D’après le schéma, de combien de degrés l’air est-il plus chaud au pied sous le vent qu’au pied au vent (1 000 m des deux côtés) ?", payload: { accepted: ["7,5", "7.5", "7,5 °C", "7,5 degrés"] }, explanation: "À la montée l’air perd 12,5 °C (15 → 2,5) ; à la descente il en regagne 20 (2,5 → 22,5), car le refroidissement saturé est deux fois plus lent que le réchauffement sec. Solde : +7,5 °C." },
      { type: "matching", prompt: "Associe chaque gradient à la situation de l’air.", payload: { pairs: [["-1 °C/100 m", "Air sec qui monte, avant condensation"], ["-0,5 °C/100 m", "Air saturé qui monte, avec condensation et pluie"], ["+1 °C/100 m", "Air asséché qui redescend sous le vent"]] }, explanation: "La condensation libère de la chaleur, ce qui ralentit le refroidissement de l’air saturé ; une fois l’air asséché, il retrouve le rythme de l’air sec, mais en réchauffement." }
    ],
    schema: { svg: "<svg viewBox='0 0 360 236' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' fill='currentColor'><text x='4' y='13' font-size='10' font-weight='bold'>Principe de l’effet de foehn</text><polygon points='50,200 190,40 330,200' fill-opacity='0.12' stroke='currentColor' stroke-width='1.5'/><line x1='4' y1='200' x2='356' y2='200' stroke='currentColor' stroke-opacity='0.5'/><line x1='36' y1='160' x2='85' y2='160' stroke='currentColor' stroke-dasharray='3 3' stroke-opacity='0.7'/><circle cx='50' cy='200' r='3'/><circle cx='85' cy='160' r='3'/><circle cx='190' cy='40' r='3'/><circle cx='260' cy='120' r='3'/><circle cx='330' cy='200' r='3'/><text x='4' y='194' font-size='10' font-weight='bold'>15 °C</text><text x='78' y='154' font-size='10' font-weight='bold' text-anchor='end'>10 °C</text><text x='74' y='168' font-size='8' text-anchor='end'>condensation</text><text x='190' y='30' font-size='10' font-weight='bold' text-anchor='middle'>2,5 °C</text><text x='270' y='124' font-size='10' font-weight='bold'>12,5 °C</text><text x='316' y='192' font-size='10' font-weight='bold' text-anchor='end'>22,5 °C</text><text x='58' y='178' font-size='8' text-anchor='end'>-1 °C/100 m</text><text x='125' y='96' font-size='8' text-anchor='end'>-0,5 °C/100 m</text><text x='262' y='92' font-size='8'>+1 °C/100 m</text><text x='4' y='80' font-size='9'>Air humide</text><text x='4' y='92' font-size='9'>→ pluie</text><text x='250' y='28' font-size='9'>Air sec et chaud</text><text x='356' y='44' font-size='8' text-anchor='end'>3 000 m</text><text x='356' y='124' font-size='8' text-anchor='end'>2 000 m</text><text x='356' y='214' font-size='8' text-anchor='end'>1 000 m</text><text x='50' y='230' font-size='9'>Côté au vent</text><text x='330' y='230' font-size='9' text-anchor='end'>Côté sous le vent</text></svg>", legende: "Principe de l’effet de foehn : l’air perd son humidité à la montée, puis se réchauffe plus vite qu’il ne s’est refroidi en descendant.", src: "D’après Lepeltier, Mille Vignes, p. 111 ; ESA Eduspace, L’effet de foehn." },
    cours: null,
    status: "needs_review",
    to_check: [
      "Foehn, vignobles concernés (⚠️) : Jurançon confirmé par l’INAO (vent chaud et sec du sud) mais sans le mot foehn ; Alsace citée par une seule source (blog) ; le livre place le chinook en Oregon et dans l’État de Washington, la source seulement en Oregon."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 111-112 ; ESA Eduspace, L’effet de foehn ; Bubbly Professor, Zonda, Diablo, Nor’wester, Chinook : the foehn winds of wine ; INAO, cahier des charges / fiche AOC Jurançon.",
    page: 111
  },
  {
    id: 138,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vents et grêle",
    synth: "Le mistral est le vent du nord auquel la vallée du Rhône est exposée (INAO) ; la source consultée ne détaille pas son effet sur la vigne. Deux AVA américaines sont définies par le vent : Petaluma Gap (Californie, approuvée en décembre 2017), première AVA fondée sur le vent (au moins 8 mph), et Van Duzer Corridor (Oregon, 2018), où le vent frais du Pacifique traverse la Coast Range ; l’épaississement des peaux et l’allongement de la maturation sont présumés. La grêle est très localisée et les observations fiables ne remontent qu’à une vingtaine d’années : Météo-France ne voit pas de tendance nette en France, mais des grêlons de plus de 5 cm plus fréquents dans le Sud-Ouest, alors que le livre la dit en hausse.",
    mnemo: "Le mistral descend le Rhône, le Pacifique s’engouffre dans le Gap et le Corridor, la grêle tombe où elle veut.",
    flash: { q: "Qu’a de particulier l’AVA Petaluma Gap ?", a: "C’est la première AVA américaine définie par le vent (au moins 8 mph), approuvée en décembre 2017.", keys: [["vent"],["première","1ère","1re"]] },
    qcm: { q: "Quel vent est associé à la vallée du Rhône ?", opts: ["Tramontane", "Mistral", "Cers", "Autan"], good: 1, expl: "Le mistral est le vent du nord de la vallée du Rhône ; tramontane, cers et autan soufflent ailleurs dans le Sud." },
    exos: [
      { type: "matching", prompt: "Associe chaque vent ou couloir à son lieu.", payload: { pairs: [["Mistral", "Vallée du Rhône"], ["Petaluma Gap", "Californie (AVA, 2017)"], ["Van Duzer Corridor", "Oregon (AVA, 2018)"]] }, explanation: "Dans les trois cas, c’est un couloir qui canalise le vent ; pour les deux AVA, il a même servi à tracer la zone." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Il est établi que la grêle est devenue nettement plus fréquente en France.", answer: false }, explanation: "Les séries fiables sont trop courtes et la grêle trop locale pour dégager une tendance ; seule hausse relevée : les très gros grêlons dans le Sud-Ouest. Sur ce point, le livre va plus loin que Météo-France." },
      { type: "mcq_single", prompt: "Quel effet attribue-t-on, sans preuve définitive, au vent de la Van Duzer Corridor ?", payload: { options: ["Il épaissirait les peaux et allongerait la maturation", "Il supprimerait tout risque de gel", "Il ferait monter la teneur en sucre en été", "Il favoriserait le botrytis"], answer: 0 }, explanation: "Un vent frais qui traverse la chaîne côtière ralentit la maturation ; l’épaississement des peaux reste présumé dans les deux sources consultées." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Grêle (⚠️, une seule source journalistique citant Météo-France) : le livre dit qu’elle devient plus courante ; la source conclut à l’absence de tendance claire.",
      "Mistral (⚠️, une seule source) : l’INAO confirme l’exposition de la vallée du Rhône au mistral, mais pas l’effet du vent sur la vigne.",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 111-112 ; INAO, fiche AOC (vallée du Rhône exposée au mistral) ; JancisRobinson.com, Petaluma Gap, Trump’s first new AVA ; Libération, La grêle, un péril climatique qui grossit en France (Météo-France, CCR, France Assureurs).",
    page: 111
  },
  {
    id: 139,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le rayonnement UV et la vigne",
    synth: "Les UV augmentent d’environ 10 à 12 % par tranche de 1 000 m d’altitude, soit 3 à 4 % tous les 300 m. En Nouvelle-Zélande, les UV de pointe estivale seraient environ 40 % plus élevés qu’aux latitudes comparables de l’hémisphère nord (le livre dit 30 à 40 %), et un essai préliminaire du NIWA y associe les UV-B à davantage de flavonoïdes dans la peau du sauvignon blanc. La lumière UV sert aussi de traitement : appliquée la nuit par des robots, elle supprime l’oïdium (et le mildiou) dans les essais de Cornell, et des UV-C préventifs stimulent l’acide salicylique de la vigne (start-up avignonnaise UV Boosting). Contre l’échaudage, on pulvérise de l’argile blanche (kaolin), surtout en Californie ; les essais français consultés portent encore sur la cicadelle.",
    mnemo: "En altitude, la peau se blinde ; la nuit, les UV deviennent un fongicide ; le kaolin met un chapeau blanc aux baies.",
    flash: { q: "De combien les UV augmentent-ils environ par 1 000 m d’altitude ?", a: "D’environ 10 à 12 %, soit 3 à 4 % par tranche de 300 m.", keys: [["10","11","12"]] },
    qcm: { q: "Quelle technique vise à réduire les coups de soleil sur les baies ?", opts: ["Pulvériser du kaolin (argile blanche)", "Éclairer en UV la nuit", "Appliquer des UV-C avant le stress", "Planter en altitude"], good: 0, expl: "Le kaolin fait écran contre l’excès de soleil ; les UV nocturnes et les UV-C visent les champignons et les défenses de la plante." },
    exos: [
      { type: "matching", prompt: "Associe chaque technique à son objectif.", payload: { pairs: [["UV appliqués la nuit", "Supprimer l’oïdium (essais de Cornell)"], ["UV-C préventifs", "Stimuler les défenses via l’acide salicylique"], ["Kaolin pulvérisé", "Réduire la chaleur et les coups de soleil sur les baies"]] }, explanation: "Un même rayonnement sert deux logiques : arme contre le champignon ou stimulant des défenses ; le kaolin, à l’inverse, fait écran contre l’excès." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les UV contre l’oïdium sont appliqués en plein jour, quand la lumière est la plus forte.", answer: false }, explanation: "La lumière bleue du jour déclenche la réparation du champignon, ce qui annule le traitement ; d’où l’application nocturne par des robots." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Les UV augmentent d’environ {{10 à 12|10-12}} % par tranche de {{1000|1 000}} m d’altitude." }, explanation: "L’atmosphère filtre moins les UV quand on monte : l’effet de l’altitude, déjà vu pour la température, s’ajoute ici au rayonnement reçu par les baies." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "UV et Nouvelle-Zélande (⚠️) : le livre annonce 30 à 40 % de radiations en plus ; la seule source chiffrée (McKenzie et al. 2006, via le ministère néo-zélandais) donne environ 40 % pour les UV de pointe estivale ; essai NIWA préliminaire.",
      "UV la nuit (⚠️, une seule source) : Cornell confirme l’effet sur l’oïdium et le mildiou ; la date de 2019 donnée par le livre n’est pas vérifiée.",
      "UV d’Avignon (⚠️, une seule source de presse agricole) : Urban et Aarrouf ne sont pas nommés ; les vignobles bordelais, champenois et ligériens depuis 2019 ne sont pas retrouvés.",
      "Kaolin (⚠️) : effet anti-chaleur annoncé sans chiffres ; les essais français consultés portent surtout sur la cicadelle (environ 50 % d’efficacité)."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 105 et 108 ; OMS, Ultraviolet radiation and health ; Hong Kong Observatory, Ultraviolet radiation at high altitude ; Ministry for the Environment NZ, New Zealand’s UV levels (McKenzie et al. 2006) ; NIWA, UV, NZ and grapes ; Cornell Chronicle 2020, Robots armed with UV light fight grape mildew ; Pleinchamp, Des UV contre le mildiou et l’oïdium de la vigne (UV Boosting) ; Wein.plus, Californian vintners spray clay on grape leaves ; Ecophytopic, fiche pratique viticulture (kaolinite).",
    page: 105
  }
,
  {
    id: 140,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "La latitude : bandes viticoles, pôles et tropiques",
    synth: "La latitude règle le rayonnement et la chaleur reçus : la vigne européenne se cultive traditionnellement entre les 30e et 50e parallèles nord et, dans l’hémisphère sud, dans une bande plus étroite (30e à 40e selon Schultz et Jones, 25e à 45e selon Lepeltier). Vers les pôles, des variétés résistantes au froid permettent aujourd’hui une viticulture nordique, aléatoire et coûteuse (Norvège, Suède). Sous les tropiques, sans hiver marqué, la vigne ne connaît pas de dormance : on la taille à la demande et on peut viser jusqu’à deux récoltes par an.",
    mnemo: "Deux écharpes autour de la planète, plus large au nord qu’au sud ; au milieu, sous les tropiques, la vigne n’a jamais froid donc ne fait jamais la sieste d’hiver.",
    flash: { q: "Entre quels parallèles nord la vigne européenne est-elle traditionnellement cultivée ?", a: "Entre les 30e et 50e parallèles (Schultz et Jones, 2010).", keys: [["30","30e","30ème"],["50","50e","50ème"]] },
    qcm: { q: "Pourquoi la vigne peut-elle donner plusieurs récoltes par an sous les tropiques ?", opts: ["Elle n’y connaît pas de dormance hivernale et pousse en continu", "Ses raisins y mûrissent en trois semaines", "Elle n’y est cultivée que sous serre", "Elle n’y a jamais besoin d’être taillée"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Pour l’hémisphère sud, Lepeltier et Schultz & Jones donnent exactement la même bande de latitudes.", answer: false }, explanation: "Les deux bornes diffèrent : le livre étend la bande plus loin vers l’équateur comme vers le pôle. Divergence signalée, non tranchée." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Sous les tropiques, la vigne n’a pas de {{dormance}} : en décalant les tailles, on peut obtenir jusqu’à {{deux|2}} récoltes par an." }, explanation: "Sans hiver pour stopper la végétation, c’est la date de taille qui déclenche le cycle, pas la saison." },
      { type: "short_answer", prompt: "Quel pays scandinave est cité pour sa viticulture naissante, avec des variétés résistantes au froid comme Solaris ou Rondo ?", payload: { accepted: ["Norvège", "la Norvège", "Norvege", "Suède", "la Suède"] }, explanation: "Ces variétés supportent le froid et les maladies, ce qui rend possible une culture bien au-delà des latitudes classiques." }
    ],
    cours: null,
    schema: {"svg":"<svg viewBox=\"0 0 320 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" fill=\"currentColor\" font-size=\"9\">\n<rect x=\"36\" y=\"15.5\" width=\"164\" height=\"189\" fill-opacity=\"0.03\" stroke=\"currentColor\"/>\n<rect x=\"36\" y=\"85.43\" width=\"164\" height=\"49.139999999999986\" fill-opacity=\"0.08\" stroke=\"currentColor\"/><rect x=\"36\" y=\"57.5\" width=\"164\" height=\"21\" fill-opacity=\"0.4\" stroke=\"currentColor\"/><rect x=\"36\" y=\"141.5\" width=\"164\" height=\"10.5\" fill-opacity=\"0.4\" stroke=\"currentColor\"/><rect x=\"36\" y=\"136.25\" width=\"164\" height=\"21\" fill-opacity=\"0\" stroke=\"currentColor\" stroke-dasharray=\"4 3\" fill=\"none\"/><line x1=\"36\" y1=\"47\" x2=\"200\" y2=\"47\" stroke=\"currentColor\" stroke-opacity=\"0.25\"/><text x=\"32\" y=\"50\" text-anchor=\"end\" font-size=\"8\" opacity=\"0.7\">60° N</text><line x1=\"36\" y1=\"78.5\" x2=\"200\" y2=\"78.5\" stroke=\"currentColor\" stroke-opacity=\"0.25\"/><text x=\"32\" y=\"81.5\" text-anchor=\"end\" font-size=\"8\" opacity=\"0.7\">30° N</text><line x1=\"36\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"currentColor\" stroke-opacity=\"0.25\"/><text x=\"32\" y=\"113\" text-anchor=\"end\" font-size=\"8\" opacity=\"0.7\">0°</text><line x1=\"36\" y1=\"141.5\" x2=\"200\" y2=\"141.5\" stroke=\"currentColor\" stroke-opacity=\"0.25\"/><text x=\"32\" y=\"144.5\" text-anchor=\"end\" font-size=\"8\" opacity=\"0.7\">30° S</text><line x1=\"36\" y1=\"173\" x2=\"200\" y2=\"173\" stroke=\"currentColor\" stroke-opacity=\"0.25\"/><text x=\"32\" y=\"176\" text-anchor=\"end\" font-size=\"8\" opacity=\"0.7\">60° S</text>\n<text x=\"118\" y=\"107\" text-anchor=\"middle\" opacity=\"0.7\">équateur</text>\n<line x1=\"200\" y1=\"68\" x2=\"212\" y2=\"68\" stroke=\"currentColor\"/><text x=\"216\" y=\"66\" font-weight=\"bold\">30e-50e N</text><text x=\"216\" y=\"77\">bande classique</text>\n<line x1=\"200\" y1=\"110\" x2=\"212\" y2=\"110\" stroke=\"currentColor\"/><text x=\"216\" y=\"102\" font-weight=\"bold\">tropiques</text><text x=\"216\" y=\"113\">pas de dormance,</text><text x=\"216\" y=\"124\">jusqu’à 2 récoltes/an</text>\n<line x1=\"200\" y1=\"146.75\" x2=\"212\" y2=\"146.75\" stroke=\"currentColor\"/><text x=\"216\" y=\"144.75\" font-weight=\"bold\">30e-40e S</text><text x=\"216\" y=\"155.75\">Schultz et Jones</text><text x=\"216\" y=\"166.75\">pointillés : 25e-45e,</text><text x=\"216\" y=\"177.75\">selon le livre</text>\n<text x=\"216\" y=\"17.599999999999994\">vers les pôles :</text><text x=\"216\" y=\"28.599999999999994\">variétés résistantes</text><text x=\"216\" y=\"39.599999999999994\">au froid</text>\n</svg>","legende":"Les bandes viticoles de part et d’autre de l’équateur ; pour l’hémisphère sud, deux bornes coexistent.","src":"D’après Lepeltier, Mille Vignes, p. 113 ; Schultz et Jones ; dessin simplifié et original"},
    status: "needs_review",
    to_check: [
      "Récoltes tropicales : le livre dit plusieurs par an ; la source consultée donne jusqu’à deux (cycles de 90 à 150 jours)",
      "Bande de l’hémisphère sud : 25e-45e (livre) contre 30e-40e (Schultz et Jones) : divergence non tranchée, présentée comme telle",
      "Limites polaires actuelles (57° N, au-delà de 45° S) : une seule source (Jones 2019)",
      "Norvège : variétés résistantes au froid confirmées (NIBIO) ; le livre dit hybrides et 59° N, non vérifié, volontairement non repris",
      "45e parallèle, livre « La Magie du 45e parallèle » et perte de 0,6 °C par degré de latitude : non retrouvés, volontairement écartés"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 113 ; OENO One (citant Schultz & Jones, 2010) ; IVES, Jones 2019 ; Embrapa, Grapevine performance and production strategies in tropical climates ; NIBIO, Can Norway become a wine country ?",
    page: 113
  },
  {
    id: 141,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "L’altitude : fraîcheur, acidité et limites",
    synth: "En montant, l’air se refroidit d’environ 0,6 °C par 100 m (6,5 °C par km) : l’altitude peut donc compenser une latitude trop chaude. La maturation prend du retard, le sucre s’accumule moins et l’acidité se conserve mieux ; l’écart jour/nuit s’accentue, et des UV plus forts épaississent la peau, d’où plus de couleur et de tanins. Trop haut, le gel, le vent et la grêle menacent, et la maturité devient difficile à atteindre.",
    mnemo: "Un frigo à étages : plus on monte, plus il fait froid, le sucre ralentit, l’acidité tient bon et la peau s’épaissit sous le soleil.",
    flash: { q: "De combien la température baisse-t-elle en moyenne tous les 100 m d’altitude ?", a: "D’environ 0,6 à 0,65 °C.", keys: [["0 6","0 65","0 5"]] },
    qcm: { q: "Quel effet l’altitude a-t-elle sur l’acidité des raisins ?", opts: ["Elle tend à la préserver", "Elle la fait disparaître", "Elle n’a aucun effet", "Elle la transforme en sucre"], good: 0 },
    exos: [
      { type: "mcq_multi", prompt: "Quels effets associe-t-on à une altitude plus élevée ?", payload: { options: ["Écart jour/nuit plus marqué", "Rayonnement UV plus intense", "Maturation plus rapide", "Acidité mieux conservée", "Risque de gel réduit"], answers: [0, 1, 3] }, explanation: "L’air frais freine la maturation et la dégradation des acides ; en revanche le gel est plus à craindre, pas moins." },
      { type: "matching", prompt: "Associe chaque paramètre à son effet en altitude.", payload: { pairs: [["Gradient thermique", "Environ 0,6 °C de moins par 100 m"], ["Écart jour/nuit", "Préserve arômes et acidité"], ["UV plus forts", "Peau plus épaisse, plus de couleur et de tanins"], ["Altitude excessive", "Gel, vent, grêle, maturité difficile"]] }, explanation: "Chaque effet découle de la même cause : un air plus frais, plus sec et plus lumineux." },
      { type: "ordering", prompt: "Remets dans l’ordre cette chaîne de causes.", payload: { items: ["L’altitude augmente", "L’air se refroidit", "La maturation ralentit", "Le raisin garde son acidité et accumule moins de sucre"] }, explanation: "Le froid ralentit la dégradation de l’acide malique : c’est la lenteur du cycle qui sauve la fraîcheur." },
      { type: "flashcard", prompt: "Explique : cite trois façons dont un vigneron peut « refroidir » un vignoble sans changer de région.", payload: { answer: "Monter en altitude, où il fait plus frais et où les nuits sont plus fraîches. Choisir une exposition nord ou est, de plus en plus recherchée dans les vignobles du sud. Profiter d’une masse d’eau froide ou d’un couloir de vent frais, comme le brouillard du Pacifique ou les vents d’ouest des AVA Petaluma Gap et Van Duzer Corridor." }, explanation: "Question fil rouge du chapitre « La géographie du climat » (Mille Vignes, p. 112-116). Altitude, exposition et influence de l’eau ou du vent sont les trois leviers attendus." }
    ],
    schema: {
      svg: "<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' fill='currentColor'><polygon points='120,165 215,28 310,165' fill='currentColor' fill-opacity='0.12' stroke='currentColor' stroke-opacity='0.6'/><g stroke='currentColor' stroke-opacity='0.5' stroke-dasharray='4 3'><line x1='8' y1='165' x2='310' y2='165'/><line x1='8' y1='97' x2='310' y2='97'/><line x1='8' y1='28' x2='310' y2='28'/></g><g font-size='10'><text x='8' y='160'>Base : T</text><text x='8' y='92'>+ 500 m : T − 3 °C</text><text x='8' y='23'>+ 1000 m : T − 6 °C</text></g><line x1='215' y1='160' x2='215' y2='36' stroke='currentColor' stroke-width='1.5'/><polygon points='215,32 210,42 220,42' fill='currentColor'/><text x='222' y='118' font-size='9'>≈ 0,6 °C</text><text x='222' y='129' font-size='9'>par 100 m</text><text x='8' y='184' font-size='9' fill-opacity='0.8'>Valeurs moyennes arrondies ; T = température à la base</text></svg>",
      legende: "La température baisse d’environ 0,6 °C tous les 100 m (valeurs moyennes arrondies, variables selon la région et la saison).",
      src: "Schéma original, d’après le gradient moyen cité par Infoclimat et IVES (Gambetta)"
    },
    cours: {
      lede: "Monter de quelques centaines de mètres, c’est changer de climat sans changer de latitude. Pour la vigne, cela revient à échanger de la chaleur contre de la fraîcheur.",
      frise: null,
      essentiel: "L’altitude refroidit l’air : la maturation est plus lente, le sucre moindre et l’acidité mieux conservée. Les UV et l’écart jour/nuit renforcent couleur, tanins et arômes, jusqu’à une limite où le gel et le vent l’emportent.",
      sections: [
        {
          h: "Pourquoi planter en altitude ?",
          blocs: [
            { imp: "essentiel", txt: "La température baisse d’environ 0,6 à 0,65 °C par 100 m, soit 6,5 °C par km : c’est pourquoi l’altitude peut compenser une latitude basse." },
            { imp: "important", txt: "Lepeltier cite des vignobles de basse latitude cultivés à plus de 2000 m, comme Ao Yun au Yunnan ou la Quebrada de Humahuaca en Argentine." }
          ],
          table: {
            caption: "Les effets de l’altitude sur la vigne et le raisin",
            head: ["Paramètre", "Effet de l’altitude", "Conséquence"],
            rows: [
              { imp: "essentiel", cells: ["Température", "Baisse d’environ 0,6 °C par 100 m", "Maturation plus lente, cycle retardé"] },
              { imp: "important", cells: ["Sucre", "Accumulation moindre (tendance, chiffres variables)", "Degré alcoolique plus bas"] },
              { imp: "essentiel", cells: ["Acidité", "Mieux conservée, car moins de dégradation de l’acide malique au froid", "Vins plus frais, plus tendus"] },
              { imp: "important", cells: ["Écart jour/nuit", "Plus marqué", "Arômes et acidité préservés"] },
              { imp: "important", cells: ["UV", "Plus intenses", "Peau plus épaisse, plus de couleur et de tanins"] },
              { imp: "utile", cells: ["Limites", "Gel, vent, grêle plus fréquents", "Maturité et rendement difficiles à atteindre"] }
            ]
          }
        },
        {
          h: "Des chiffres qui divergent",
          blocs: [
            { imp: "utile", txt: "Lepeltier donne 0,6 °C par 100 m jusqu’à 500 m puis 1 °C par 170 m au-delà, ce qui revient à peu près au même gradient : la valeur moyenne de 0,6 °C par 100 m reste la plus sûre." },
            { imp: "utile", txt: "Le livre cite Pierre Galet pour un retard de végétation d’un jour par 30 m, puis par 20 m ; une source sud-africaine mesure un retard de récolte bien plus fort (6 à 7 jours par 100 m). Divergence non tranchée : retenir l’effet, pas le chiffre." },
            { imp: "culture", txt: "Pour le sucre, une publication évoque une baisse de 0,8 à 1 % par 100 m, sans citer sa source : à prendre comme un ordre de grandeur." }
          ],
          table: null
        }
      ],
      synthese: [
        { imp: "essentiel", txt: "Plus haut = plus frais : environ 0,6 °C de moins par 100 m." },
        { imp: "essentiel", txt: "Conséquences : maturation retardée, moins de sucre, acidité préservée." },
        { imp: "important", txt: "UV forts et nuits fraîches : plus de couleur, de tanins et d’arômes." },
        { imp: "utile", txt: "À un client : un vin d’altitude joue la fraîcheur, mais il y a une altitude au-delà de laquelle la vigne ne mûrit plus." }
      ],
      src: "Mille Vignes, P. Lepeltier ; Infoclimat, gradient thermique vertical ; IVES, Gambetta, altitude du vignoble ; WineWithSeth, High altitude viticulture ; Wineland (Afrique du Sud) ; Asadullayev et al., ICCPEAS 2025. Cf. Mille Vignes, p. 113-114."
    },
    status: "needs_review",
    to_check: [
      "Gradient du livre (0,6 °C par 100 m jusqu’à 500 m, puis 1 °C par 170 m) : changement de gradient à 500 m non retrouvé dans les sources ; la valeur moyenne de 0,6 °C par 100 m est, elle, confirmée",
      "Retard de végétation de Galet (1 jour par 30 m, puis par 20 m) : non retrouvé ; une source donne 6 à 7 jours par 100 m (divergence non tranchée, aucun chiffre en exercice)",
      "Sucre (−0,8 à 1 % par 100 m) et acidité (+1 % dans le livre, +0,9 g/L dans une publication non sourcée) : tendance confirmée, chiffres indicatifs",
      "Ao Yun et Quebrada de Humahuaca au-delà de 2000 m : repris du livre, non recoupé"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 113-114 ; Infoclimat, gradient thermique vertical ; IVES, Gambetta, altitude du vignoble ; WineWithSeth, High altitude viticulture ; Wineland ; Asadullayev et al., ICCPEAS 2025",
    page: 113
  },
  {
    id: 142,
    theme: "Géographie viticole",
    sous: ["Climat", "Appellations"],
    niveau: "Intermédiaire",
    geo: { pays: "Italie", region: "Sicile", appel: "Etna" },
    titre: "L’Etna, vignoble d’altitude",
    synth: "L’Etna est une DOC sicilienne (la première de l’île, par décret de 1968), et non une DOCG ; la carte du livre écrit AOC, mais l’équivalent italien est DOC. Le règlement trace la zone par des courbes de niveau variables (800 à 1000 m sur le flanc nord, 400 m à l’est, 600 m au sud-ouest) et le fleuve Alcantara au nord ; la presse spécialisée présente la route dite Quota Mille comme limite haute au nord : au-dessus, les vins sont déclassés en IGT/IGP. Lepeltier résume cela en « 1000 m au sud et à l’est, 800 m au nord », simplification que le texte officiel ne reprend pas ainsi. L’Etna Bianco Superiore exige au moins 80 % de carricante, sur la seule commune de Milo.",
    mnemo: "Au-delà de la Quota Mille, la vigne monte mais le vin perd sa DOC : il redescend en IGT.",
    flash: { q: "Quel est le statut de l’appellation Etna : DOC ou DOCG ?", a: "DOC : l’Etna n’est pas une DOCG.", keys: [["DOC"]] },
    qcm: { q: "Que devient un vin issu de raisins plantés au-dessus de la limite haute de l’Etna DOC ?", opts: ["Il est déclassé en IGT/IGP", "Il devient DOCG", "Il reste DOC avec la mention Superiore", "Il est interdit à la vente"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le règlement de l’Etna DOC fixe une limite haute unique de 1000 m sur tout le pourtour du volcan.", answer: false }, explanation: "La zone est tracée par des courbes de niveau qui varient selon les versants (limite haute vers 800 à 1000 m au nord, plancher plus bas à l’est et au sud-ouest) : la règle « 1000 m / 800 m » est une simplification." },
      { type: "flashcard_reverse", prompt: "Carricante à au moins 80 %, raisins de la seule commune de Milo.", payload: { answer: "L’Etna Bianco Superiore." }, explanation: "Le nom de la mention et le périmètre de Milo vont de pair : c’est un critère de provenance autant que de cépage." },
      { type: "mcq_single", prompt: "Comment s’appelle la route qui marque la limite haute de l’appellation au nord ?", payload: { options: ["Quota Mille", "Via Etnea", "Strada del Vino", "Route des Crêtes"], answer: 0 }, explanation: "Son nom rappelle simplement l’altitude d’environ 1000 m qu’elle suit." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Quota Mille : citée par Gambero Rosso comme limite haute, absente du disciplinare consulté",
      "Limites d’altitude « 1000 m sud et est, 800 m nord » (livre) : non retrouvées ; le disciplinare donne des courbes de niveau variables (800, 900, 1000 m au nord, 400 m à l’est, 600 m au sud-ouest), présentées comme telles",
      "DOC contre AOC : le livre emploie les deux (texte et légende de la carte) ; DOC confirmé par le disciplinare",
      "Débat de 2024 sur un passage éventuel en DOCG : non acté, non repris dans la fiche",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 114 ; Disciplinare Etna DOC (copie AIS), art. 1, 3 et 9 ; Gambero Rosso, Etna DOC et Quota Mille",
    page: 114
  },
  {
    id: 143,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "Exposition et pente : où tourner la vigne",
    synth: "Dans l’hémisphère nord, les versants tournés vers l’équateur (sud, sud-est, sud-ouest) sont les plus chauds ; une pente forte et bien exposée reçoit les rayons plus à la perpendiculaire et accumule plus de chaleur, et l’air froid s’y écoule vers le bas, ce qui limite le gel. Les coteaux de Bourgogne (Nuits-Saint-Georges, Meursault) regardent surtout l’est à sud-est, l’Hermitage plutôt le sud. Le nord reste l’exposition la plus difficile, choisie pour compenser un autre facteur : sur la Montagne de Reims, Verzenay, Verzy et Mailly, grands crus exposés nord, sont abrités des dépressions de sud-ouest. Les pentes extrêmes existent aussi, comme en Moselle (Allemagne).",
    mnemo: "Le coteau est un transat : on le tourne vers le soleil ; le nord n’est un bon siège que s’il fait coupe-vent.",
    flash: { q: "Dans l’hémisphère nord, quelles expositions sont les plus chaudes ?", a: "Celles tournées vers l’équateur : sud, sud-est et sud-ouest.", keys: [["sud"]] },
    qcm: { q: "Pourquoi les pentes limitent-elles le risque de gel ?", opts: ["L’air froid s’écoule vers le bas", "Leur sol est toujours plus sombre", "Le vent y est toujours nul", "La neige y protège les bourgeons"], good: 0 },
    exos: [
      { type: "odd_one_out", prompt: "Lequel de ces coteaux ne regarde pas vers l’est ?", payload: { options: ["Hermitage", "Meursault", "Nuits-Saint-Georges", "Verzenay"], answer: 3 }, explanation: "Les trois autres cherchent le soleil du sud à l’est ; Verzenay regarde le nord et doit son statut à l’abri que lui offre la Montagne de Reims." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Plus une pente est forte et bien exposée, plus les rayons du soleil arrivent à la perpendiculaire du sol.", answer: true }, explanation: "Une surface inclinée vers le soleil reçoit plus d’énergie par mètre carré qu’une surface plate : c’est l’angle d’incidence qui compte." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Verzenay, Verzy et Mailly, grands crus exposés au nord, se trouvent sur la {{Montagne de Reims}}." }, explanation: "Leur exposition nord est compensée par la protection du relief contre les dépressions venues du sud-ouest." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Précision du livre (sud-sud-est privilégié, ouest-sud-ouest ombragé le matin) : principe solide mais non sourcé en niveau 1 ; seul le principe général est repris",
      "Montagne de Reims (Verzenay, Verzy, Mailly face nord, abrités des dépressions de sud-ouest) : une seule source (WineWithSeth) ; moulin de Verzenay et vents d’ouest non vérifiés",
      "Expositions de Nuits-Saint-Georges, Meursault et Hermitage : une seule source (WineWithSeth)",
      "Barolo (170-540 m, plantations nouvelles interdites au nord) : une seule source de niveau 2b, non repris ; Pline et le classement des falernes : non vérifié dans le texte antique, non repris ; Beaujolais : limites d’altitude du livre non retrouvées dans le cahier des charges INAO, écarté ; formule sur la conduction de la chaleur par le sol : ambiguë, écartée",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 115 ; WineWithSeth, Aspect and sun angle at different latitudes ; WineWithSeth, Montagne de Reims",
    page: 115
  },
  {
    id: 144,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Masses d’eau et courants marins",
    synth: "Mers, océans, lacs et fleuves tempèrent le climat, mais l’effet dépend de la température de l’eau. Sur la façade atlantique française, le Gulf Stream adoucit surtout les hivers (son rôle sur les étés est plus indirect qu’on ne le dit), et l’estuaire de la Gironde prolonge la modération océanique à Bordeaux. Au Chili, c’est le courant froid de Humboldt qui rafraîchit la côte et amène le brouillard ; en Californie, l’air froid du Pacifique, aspiré par la chaleur de la vallée centrale, se glisse par la baie de San Pablo vers Napa et Carneros. Les lacs agissent aussi en miroir : le Léman renvoie la lumière sur les terrasses de Lavaux.",
    mnemo: "L’eau est un thermostat : chaude, elle réchauffe l’hiver (Gulf Stream) ; froide, elle rafraîchit l’été (Humboldt, brouillard de Napa) ; en lac, elle sert de miroir.",
    flash: { q: "Quel courant froid rafraîchit la côte viticole du Chili ?", a: "Le courant de Humboldt.", keys: [["Humboldt"]] },
    qcm: { q: "Que provoque surtout le Gulf Stream sur la façade atlantique française ?", opts: ["Des hivers adoucis", "Des étés caniculaires", "Des gelées de printemps plus fréquentes", "Un climat continental"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque masse d’eau à son effet sur la vigne.", payload: { pairs: [["Courant de Humboldt", "Côte chilienne : air frais et brouillard"], ["Baie de San Pablo", "Brouillard d’été qui gagne Carneros et Napa"], ["Lac Léman", "Reflet du soleil sur les vignes de Lavaux"], ["Gulf Stream", "Hivers adoucis de la façade atlantique"]] }, explanation: "L’effet dépend à chaque fois du couple eau et vent : froide ou chaude, proche ou réfléchissante." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le courant de Humboldt rafraîchit la côte viticole de la Californie.", answer: false }, explanation: "Humboldt longe la côte d’Amérique du Sud (Chili, Pérou) ; la Californie dépend du courant de Californie. Le livre parle de « côte ouest américaine », formule ambiguë." },
      { type: "mcq_single", prompt: "Pourquoi le brouillard se forme-t-il l’été autour des baies de San Francisco et de San Pablo ?", payload: { options: ["L’air froid du Pacifique est aspiré par la chaleur de la vallée centrale", "Des vents d’est poussent de l’air saharien vers la côte", "Les lacs de Napa s’évaporent chaque nuit", "Le Gulf Stream y remonte"], answer: 0 }, explanation: "C’est un effet d’appel : l’air chaud de l’intérieur monte et attire l’air frais océanique, qui se condense." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Gulf Stream : le livre dit qu’une eau chaude atténue la latitude ; une source météo nuance (effet surtout hivernal et indirect sur les étés), niveau 2b uniquement, à confirmer avec Météo-France",
      "Humboldt : le livre l’associe à la côte ouest américaine ; les sources le situent au Chili (Pérou compris) ; une seule source, orientée marketing, pour les détails (Casablanca, Leyda, Limarí)",
      "Reflet du Léman et terrasses de Lavaux : confirmés par le dossier UNESCO ; le chiffre « plus de 1 °C » du livre n’est pas retrouvé, non repris",
      "Brouillard de San Pablo : confirmé par une seule source de niveau 2a (AWRI)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 115-116 ; Figaro Nautisme / Météo Consult, Le Gulf Stream et les étés de la façade atlantique ; WineWithSeth, Atlantic influence on coastal vineyards ; 1WineDude, Humboldt ; AWRI, Carneros ; UNESCO, dossier Lavaux",
    page: 115
  },
  {
    id: 145,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "La viticulture héroïque et le CERVIM",
    synth: "La viticulture héroïque désigne les vignobles cultivés dans des conditions extrêmes : forte pente, altitude, terrasses, petites îles difficiles. Le CERVIM, centre de défense de la viticulture de montagne créé en 1987 sous l’égide de l’OIV, la reconnaît dès qu’une seule condition est remplie : pente supérieure à 30 %, altitude supérieure à 500 m (hors plateaux), terrasses ou talus, ou petite île aux conditions difficiles. Lepeltier avance qu’environ 7 % du vignoble européen serait concerné et cite en France Banyuls et la Côte-Rôtie, où la mécanisation est presque impossible.",
    mnemo: "P.A.T.I. : Pente, Altitude, Terrasses, Île. Un seul de ces défis suffit à faire un vigneron héroïque.",
    flash: { q: "Pourquoi parle-t-on de viticulture « héroïque » ?", a: "Parce que la culture s’y fait dans des conditions extrêmes (pente, altitude, terrasses, îles) qui rendent le travail très difficile et la mécanisation presque impossible.", keys: [["pente","pentes","altitude","terrasses","îles","escarpé","escarpées","extrêmes","difficiles"],["mécanisation","mécaniser","main","manuel","difficile","pénible"]] },
    qcm: { q: "Quel seuil d’altitude le CERVIM retient-il (hors plateaux) ?", opts: ["500 m", "200 m", "1000 m", "1500 m"], good: 0 },
    exos: [
      { type: "mcq_multi", prompt: "Quels critères peuvent, à eux seuls, faire reconnaître un vignoble comme héroïque par le CERVIM ?", payload: { options: ["Pente supérieure à 30 %", "Altitude supérieure à 500 m (hors plateaux)", "Plus de 100 ha d’un seul tenant", "Terrasses ou talus", "Cépages exclusivement internationaux", "Petite île aux conditions difficiles"], answers: [0, 1, 3, 5] }, explanation: "Les critères portent sur la difficulté physique du site, jamais sur la taille du domaine ni sur le choix des cépages." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Pour être reconnu héroïque, un vignoble doit réunir à la fois terrasses, forte pente et altitude.", answer: false }, explanation: "La formulation du livre peut laisser croire à des critères cumulatifs ; le CERVIM précise qu’une seule condition suffit." },
      { type: "flashcard", prompt: "Quel organisme international a placé sous son égide la création du CERVIM ?", payload: { answer: "L’OIV (Organisation internationale de la vigne et du vin)." }, explanation: "L’OIV est l’organisation intergouvernementale de référence sur la vigne et le vin." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "7 % du vignoble européen : une seule source (WineWithSeth), à présenter comme estimation ; la source CERVIM 2026 consultée ne donne que le chiffre italien (environ 3 % du vignoble italien)",
      "Exemples français : Banyuls et Côte-Rôtie cités par une seule source ; Collioure et l’Auvergne (livre) non vérifiés en tant qu’appellations. Liste des membres du CERVIM (cervim.org, lue le 20/10/2026) : membres français dont la Région Auvergne-Rhône-Alpes (catégorie A) et le Syndicat des Vignobles de la Côte Vermeille (catégorie B) ; aucune appellation (Collioure, Banyuls, Côte-Rôtie) n’y est nommée",
      "Le livre présente les critères comme cumulatifs ; le CERVIM précise qu’une seule condition suffit (divergence signalée en exercice)",
      "Mécanisation presque impossible, exploitations familiales : repris du livre, non recoupé"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 116 ; CERVIM, About us ; CERVIM, décret italien sur la viticulture héroïque ; WineWithSeth, Heroic viticulture ; Tomasi, CERVIM 2026",
    page: 116
  }
,
  {
    id: 146,
    theme: "Géographie viticole",
    sous: ["Climat", "Régions"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Classer les climats viticoles",
    synth: "Pour classer les climats de la vigne, on superpose les bassins viticoles aux grands types de climat de Köppen, une classification générale fondée sur les températures et les précipitations. On en tire trois familles d’usage : méditerranéen, maritime (océanique) et continental ; le livre y ajoute les climats semi-arides, où la vigne ne se passe guère d’irrigation. Köppen ne mesure pas l’aptitude de la vigne : les indices viticoles (Huglin, Winkler) viennent s’y ajouter. Les limites entre familles restent floues, un même vignoble pouvant être rangé différemment selon l’auteur.",
    mnemo: "Köppen, c’est la carte météo du globe ; la viticulture lui ajoute ses lunettes à elle.",
    flash: { q: "Sur quelle classification générale reposent, assez librement, les catégories de climats viticoles (méditerranéen, maritime, continental) ?", a: "Sur la classification de Köppen, fondée sur les températures et les précipitations.", keys: [["Köppen","Koeppen"]] },
    qcm: { q: "D’après le livre, quel climat est le plus représenté dans les vignobles du monde ?", opts: ["Continental", "Méditerranéen", "Polaire", "Maritime"], good: 1 },
    exos: [
      { type: "matching", prompt: "D’après le livre, associe chaque type de climat à sa caractéristique.", payload: { pairs: [["Méditerranéen", "Étés chauds et secs, hivers doux et humides"], ["Semi-aride", "Moins de 400 mm de pluie : irrigation quasi indispensable"], ["Maritime", "Pluviométrie importante, amplitude thermique modérée"], ["Continental", "Étés chauds, hivers froids, pluies surtout estivales"]] }, explanation: "Les noms décrivent la répartition des pluies et des températures dans l’année : c’est ce rythme, plus que la moyenne, qui dicte la conduite de la vigne." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La classification de Köppen a été conçue pour mesurer l’aptitude d’un lieu à la viticulture.", answer: false }, explanation: "Köppen décrit les climats de la planète pour tous les usages ; pour juger si un cépage mûrira, il faut des indices propres à la vigne, qui intègrent chaleur cumulée et rythme de la saison." },
      { type: "short_answer", prompt: "Quelle classification climatique générale (températures et précipitations) sert de base aux catégories viticoles usuelles ?", payload: { accepted: ["Köppen", "Koppen", "la classification de Köppen", "classification de Koppen"] }, explanation: "Les types viticoles sont des regroupements pratiques de ses classes, d’où leurs frontières approximatives." },
      { type: "flashcard", prompt: "Explique : pourquoi les meilleures expressions d’un cépage se trouvent-elles souvent en limite de sa zone de culture ?", payload: { answer: "En limite de zone, le raisin mûrit tout juste, sans excès de maturité. Cela demande plus de soin dans le choix du terroir, de la taille et du cépage, et plus de précision en vinification, mais c’est là que Lepeltier situe souvent l’expression la plus complète d’un cépage (chardonnay à Chablis, syrah en Côte-Rôtie). C’est une tendance, pas une règle, et le réchauffement déplace ces limites." }, explanation: "Question fil rouge du chapitre « Existe-t-il un climat idéal pour la viticulture ? » (Mille Vignes, p. 117-118 et 122)." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Classement du livre par surface plantée (méditerranéen, puis semi-aride, puis tempéré) : non retrouvé dans les sources consultées",
      "Willamette (Oregon) : le livre la range en climat maritime ; un classement Köppen Csb (méditerranéen à été frais) est avancé ailleurs, à sourcer ; non tranché",
      "Descriptions des types de climat (étés, pluies) : reprises du livre, non recoupées par une source indépendante",
      "Carbonneau et Escudier, De l’œnologie à la viticulture (Quae) : année de parution (2017 selon le livre) non confirmée",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 117 ; Puga et al. 2022, A climatic classification of the world’s wine regions (Oeno One) ; Éditions Quae, Alain Carbonneau",
    page: 117
  },
  {
    id: 147,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Volcans et millésimes",
    synth: "Une grande éruption projette des gaz soufrés dans la stratosphère : ils y forment des aérosols sulfatés qui renvoient une partie du rayonnement solaire et refroidissent la basse atmosphère pendant environ trois ans. Le Tambora (île de Sumbawa, Indonésie, 1815) a valu à 1816 le surnom d’« année sans été » en Europe ; Krakatau (1883) a teinté les couchers de soleil pendant des années ; Pinatubo (1991) a refroidi la surface terrestre d’environ 0,1 à 0,3 °C pendant près de trois ans (GIEC), jusqu’à 0,5 °C dans certaines régions (USGS). Le livre situe le Tambora à « Sumbawa, Java », alors que Sumbawa est une île distincte de Java ; il range aussi le Mont Saint Helens (1980) parmi les éruptions à effet global, ce que les sources lues n’étayent pas.",
    mnemo: "Un volcan, c’est un parasol : les gouttelettes de soufre dans le ciel font de l’ombre à la vigne pendant trois étés.",
    flash: { q: "Pourquoi une éruption majeure refroidit-elle le climat ?", a: "Ses aérosols sulfatés, injectés dans la stratosphère, réfléchissent le rayonnement solaire.", keys: [["aérosols","soufre","soufrés","sulfatés","cendres","poussières","particules"],["réfléchissent","réfléchit","bloquent","bloque","rayonnement","soleil","solaire"]] },
    qcm: { q: "Quelle éruption est à l’origine de « l’année sans été » de 1816 en Europe ?", opts: ["Krakatau", "Pinatubo", "Tambora", "Mont Saint Helens"], good: 2 },
    exos: [
      { type: "ordering", prompt: "Remets ces éruptions dans l’ordre chronologique.", payload: { items: ["Tambora", "Krakatau", "Pinatubo"] }, explanation: "Les deux plus anciennes datent du XIXe siècle (celle de l’île de Sumbawa précède de près de soixante-dix ans celle du détroit de la Sonde), la dernière appartient à l’ère des mesures par satellite." },
      { type: "cloze", prompt: "Complète le mécanisme.", payload: { text: "Les gaz soufrés montent dans la {{stratosphère}}, où ils forment des aérosols {{sulfatés|sulfates}} qui réfléchissent le rayonnement solaire." }, explanation: "C’est en altitude que ces particules persistent des années : sous les nuages, la pluie les ferait retomber vite." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le Tambora est un volcan de l’île de Java.", answer: false }, explanation: "Le livre écrit « Sumbawa, Java » : or Sumbawa est une île à part, à l’est de Java, dans les petites îles de la Sonde. Ne pas les confondre." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Krakatau : couchers de soleil rouges environ 3 ans ; le refroidissement chiffré (jusqu’à 1,2 °C) d’une source universitaire n’est pas recoupé et n’est pas repris",
      "Mont Saint Helens : l’USGS le cite pour son CO2, pas comme éruption refroidissante ; classement du livre non confirmé, volontairement absent des exercices",
      "Millésime 1816 en Bourgogne ou ailleurs : date de vendanges non vérifiée, non reprise",
      "Pinatubo ne figure pas dans la frise du livre : ajouté d’après l’USGS et la NASA",
      "Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."
    ],
    src: "Mille Vignes, P. Lepeltier, p. 119 ; Futura-Sciences, L’éruption du Tambora est bien responsable de l’année 1816 sans été ; Oregon State University, Describe the 1883 eruption of Krakatau ; USGS, Volcanoes can affect climate ; GIEC AR5, groupe I, chap. 5 (FAQ 5.1) ; NASA Earth Observatory, Volcanoes and climate change",
    page: 119
  },
  {
    id: 148,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les bans de vendanges, archives du climat",
    synth: "Le ban de vendanges est la date officielle d’ouverture des vendanges : très encadrée, donc archivée, elle sert de thermomètre du passé, une vendange précoce traduisant un printemps-été chaud, une tardive du froid ou de la pluie. Le Roy Ladurie en a fait un outil d’historien du climat ; Chuine et al. (2004) ont reconstitué les températures bourguignonnes depuis 1370 avec un modèle de maturation du pinot noir (l’été 2003 y sort du lot, près de 5,9 °C au-dessus de la moyenne 1960-1989, devant 1523), et Labbé et al. (2019) ont exploité la série de Beaune. Il faut toutefois démêler ce qui tient au climat de ce qui tient aux guerres, aux pratiques ou à la décision du propriétaire.",
    mnemo: "Chaque ban est un bulletin météo signé par le maire : « ouverture le 20 septembre » veut dire « été honnête ».",
    flash: { q: "Qu’est-ce qu’un ban de vendanges et pourquoi intéresse-t-il les climatologues ?", a: "La date officielle d’ouverture des vendanges, archivée : elle reflète la chaleur de la saison et permet de reconstituer le climat passé.", keys: [["date","ouverture","autorisation","début","commencer"],["climat","chaleur","températures","archives","reconstituer"]] },
    qcm: { q: "Pourquoi une vendange très précoce signale-t-elle un climat particulier ?", opts: ["Printemps et été chauds", "Hiver très rigoureux", "Été frais et pluvieux", "Gel de printemps"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque travail à son apport.", payload: { pairs: [["Le Roy Ladurie", "Historien qui a popularisé les bans de vendanges comme indicateur climatique"], ["Chuine et al. (2004)", "Températures de printemps-été en Bourgogne reconstituées par un modèle de maturation du pinot noir"], ["Labbé et al. (2019)", "Série de Beaune : vendanges environ 13 jours plus tôt depuis 1988"]] }, explanation: "Trois niveaux de la méthode : l’idée historique, le passage à la température chiffrée, puis la série longue qui montre la rupture récente." },
      { type: "mcq_multi", prompt: "D’après le livre, qu’est-ce qui peut fausser la lecture climatique d’une date de vendanges ?", payload: { options: ["Le contexte politique et les guerres", "L’évolution des pratiques œnologiques", "La décision du propriétaire", "Le fait qu’un ban n’ait aucune valeur officielle"], answers: [0, 1, 2] }, explanation: "Ces trois facteurs sont humains et indépendants de la météo ; en revanche, le caractère officiel et encadré du ban est ce qui rend la série fiable et archivable." },
      { type: "short_answer", prompt: "Comment appelle-t-on la date officielle d’ouverture des vendanges ?", payload: { accepted: ["ban de vendanges", "ban des vendanges", "bans de vendanges", "le ban de vendanges", "ban"] }, explanation: "Le ban est l’annonce officielle de l’ouverture : c’est elle, et non la récolte elle-même, qui laisse une trace dans les archives." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Une seule année de vendanges très tardives suffit à prouver un refroidissement durable du climat.", answer: false }, explanation: "Un ban isolé reflète aussi des décisions humaines et des pratiques : il faut une série longue, croisée avec d’autres témoins." }
    ],
    schema: null,
    cours: {"lede":"Avant les thermomètres, il y avait les vendanges : chaque année, une autorité fixe une date, et cette date finit dans les archives. Aligner des siècles de ban, c’est lire une courbe de température.","frise":[{"date":"1354","txt":"Début de la série de Beaune exploitée par Labbé et al. (2019), qui court jusqu’en 2018."},{"date":"1370","txt":"Début de la série bourguignonne de Chuine et al. (2004) pour reconstituer les températures de printemps-été."},{"date":"1967","txt":"Le Roy Ladurie publie Histoire du climat depuis l’an mil et popularise les dates de vendanges comme indicateur."},{"date":"1988-2018","txt":"À Beaune, les vendanges commencent en moyenne environ 13 jours plus tôt qu’avant (Labbé et al.)."},{"date":"2003","txt":"Canicule : été probablement le plus chaud en Bourgogne depuis 1370 selon Chuine et al."}],"essentiel":"Un ban de vendanges est une date officielle, donc archivée ; plus la date est précoce, plus le printemps-été a été chaud. Chaque série doit être corrigée de ce qui relève des hommes (guerres, pratiques, décisions).","sections":[{"h":"Pourquoi une date de vendange dit la température","blocs":[{"imp":"essentiel","txt":"La vigne mûrit d’autant plus vite que la saison est chaude : une vendange précoce signe un printemps-été chaud, une tardive du froid ou de la pluie. Comme le ban est une décision publique, il laisse une trace écrite."},{"imp":"important","txt":"Les historiens du climat l’utilisent avec d’autres témoins : dates de moisson des blés, progression des glaciers, cernes des arbres."},{"imp":"utile","txt":"Chuine et al. ne lisent pas la date brute : un modèle de maturation du pinot noir la convertit en température de printemps-été."}],"table":null},{"h":"Trois jalons de la méthode","blocs":[{"imp":"essentiel","txt":"Chaque étape fait passer la méthode d’un cran : de l’idée historique à la reconstitution chiffrée, puis à la série la plus longue."}],"table":{"caption":"Qui a fait quoi","head":["Travail","Ce qu’il apporte","À retenir"],"rows":[{"imp":"essentiel","cells":["Le Roy Ladurie (Histoire du climat depuis l’an mil, 1967)","Les bans de vendanges deviennent un indicateur climatique","Phénologie historique, à côté de la glaciologie et de la dendrochronologie"]},{"imp":"essentiel","cells":["Chuine et al. (Nature, 2004)","Températures de printemps-été en Bourgogne, de 1370 à 2003","L’été 2003 est probablement le plus chaud depuis 1370 ; des étés aussi chauds que ceux des années 1990 avaient déjà eu lieu avant"]},{"imp":"important","cells":["Labbé et al. (Climate of the Past, 2019)","Série de Beaune, de 1354 à 2018","Vendanges autour du 28 septembre jusqu’en 1987, puis environ 13 jours plus tôt ; phase tardive 1820-1860 liée entre autres à des éruptions"]}]}},{"h":"Les limites de la méthode","blocs":[{"imp":"essentiel","txt":"Une date de vendanges n’est pas qu’un thermomètre : guerres, évolution œnologique et choix du propriétaire jouent aussi. D’où la démarche interdisciplinaire (historiens, climatologues, écophysiologistes, modélisateurs) qui croise les séries."},{"imp":"culture","txt":"Les records de précocité : le livre cite le 16 août 1556 à Beaune, comme les compilations usuelles ; mais l’étude de Labbé et al. se contredit entre son texte (16 août) et un tableau (26 août). Pour 2003, 19 août selon le livre et le Burgundy Report, 20 août selon Labbé. On retiendra « mi à fin août »."}],"table":null}],"synthese":[{"imp":"essentiel","txt":"Ban de vendanges = date officielle d’ouverture, donc archivée ; vendange précoce = saison chaude."},{"imp":"essentiel","txt":"Chuine et al. (2004) reconstituent les températures bourguignonnes depuis 1370 ; Labbé et al. (2019) montrent environ 13 jours d’avance à Beaune depuis 1988."},{"imp":"important","txt":"Toujours séparer le climat de l’humain : guerres, pratiques, décisions du propriétaire."},{"imp":"utile","txt":"À un client : une vendange en août n’est pas nouvelle (1556), mais elle était exceptionnelle ; elle devient fréquente."}],"src":"Mille Vignes, P. Lepeltier ; Chuine et al. 2004, Grape ripening as a past climate indicator (Nature 432, 289) ; NOAA/WDS Paleoclimatology, jeu de données Chuine et al. 2004 ; Labbé et al. 2019, Climate of the Past 15, 1485-1501 ; Burgundy Report, Harvest trivia: the historical August harvests in Beaune ; compte rendu de H. Lamb, Nature 217 (1968) ; Hérodote.net, L’historien de la France paysanne et du climat. Cf. Mille Vignes, p. 119-120."},
    status: "needs_review",
    to_check: [
      "Labbé et al. 2019 : une seule étude primaire ; le livre ne la cite pas, chiffres cohérents avec sa tendance",
      "Vendanges 1556 à Beaune : 16 août (livre, compilations) contre 26 août (tableau de Labbé) ; vendanges 2003 : 19 août (livre, Burgundy Report) contre 20 août (Labbé) ; vendanges 1559 : 21 (livre) contre 24 août (Burgundy Report) ; non tranché, aucune de ces dates n’est donnée comme bonne réponse",
      "« Beau XVIe siècle » et « record de précocité en Europe » : formules non retrouvées dans les sources consultées ; seule la précocité des années 1550 en Bourgogne est étayée",
      "Série bourguignonne « depuis 1370 » (livre, Chuine) ; Beaune commence en 1354 chez Labbé : nuance de périmètre, pas contradiction"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 119-120 ; Chuine et al. 2004, Grape ripening as a past climate indicator (Nature 432, 289-290, lu) ; NOAA/WDS Paleoclimatology, jeu de données Chuine et al. 2004 (Bourgogne, 1370-2003) ; Labbé et al. 2019, Climate of the Past 15, 1485-1501 ; Burgundy Report, Harvest trivia: the historical August harvests in Beaune ; Hérodote.net, L’historien de la France paysanne et du climat",
    page: 119
  },
  {
    id: 149,
    theme: "Géographie viticole",
    sous: ["Climat", "Régions"],
    niveau: "Fondamental",
    geo: null,
    titre: "L’optimum climatique médiéval et les vignes du Nord",
    synth: "Vers l’an mil, un climat plus doux accompagne l’extension de la vigne vers le nord : le Domesday Book (1086) recense, selon les auteurs, 46 à 52 vignobles dans le sud de l’Angleterre, et des vignobles sont attestés en terres belges dès le IXe siècle. Le lien de cause à effet avec la chaleur est cependant débattu : pratiques monastiques, commerce et épidémies jouent aussi. Erreur du livre : aucune source n’atteste de vignes au Groenland, les Vikings y étaient éleveurs et chasseurs ; les raisins des sagas se trouvent au Vinland, en Amérique du Nord.",
    mnemo: "Vinland, c’est « vin » dans le nom mais l’Amérique dans l’atlas : le Groenland, lui, reste le pays des moutons.",
    flash: { q: "Où les sagas vikings situent-elles les raisins sauvages, et pas au Groenland ?", a: "Au Vinland, terre d’Amérique du Nord atteinte depuis le Groenland.", keys: [["Vinland"]] },
    qcm: { q: "Quel document anglais de 1086 recense une cinquantaine de vignobles (46 à 52 selon les auteurs) ?", opts: ["Le Domesday Book", "La Magna Carta", "La Chronique anglo-saxonne", "Le Livre de Kells"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les Vikings ont trouvé un Groenland couvert de vignes au Moyen Âge.", answer: false }, explanation: "Aucune source consultée ne mentionne de vigne au Groenland : colonies d’éleveurs, étés souvent sous 10 °C, arbres rares. Le livre confond le pays avec le Vinland des sagas, où les raisins sont situés." },
      { type: "matching", prompt: "Associe chaque lieu à ce que disent les sources.", payload: { pairs: [["Sud de l’Angleterre", "Vignobles recensés par le Domesday Book (1086)"], ["Terres belges", "Vignobles attestés dès le IXe siècle"], ["Groenland", "Colonies d’élevage, aucune vigne attestée"], ["Vinland", "Lieu des raisins des sagas, en Amérique du Nord"]] }, explanation: "Le piège est la ressemblance de noms : le Vinland n’a pas de lien géographique avec le Groenland, seulement un point de départ." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Le Vinland, « terre du {{vin}} », désigne des terres d’{{Amérique du Nord|Amérique}} atteintes depuis le Groenland." }, explanation: "Le site viking de L’Anse aux Meadows (Terre-Neuve) est trop au nord pour la vigne : les raisins des sagas relèvent peut-être de baies, ce qui renforce la prudence sur ce « climat doux »." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Erreur du livre (p. 120) : « Groenland couvert alors de vignes » ; aucune source ne confirme, à ajouter à la liste des erreurs du livre",
      "Domesday Book : 46 vignobles selon RealClimate, 46 à 52 selon les auteurs ; source unique, et son auteur juge les vignobles un mauvais indicateur de température",
      "Vignobles belges : source unique (ULiège, conférence 2026), le parallèle avec l’optimum médiéval n’y est pas démontré",
      "Raisins du Vinland : l’existence de raisins sauvages, peut-être des baies, est elle-même débattue"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 120 ; World History Encyclopedia, Le Groenland à l’ère viking ; World History Encyclopedia, Disparition des colonies vikings du Groenland ; World History Encyclopedia, Vinland ; Saga of the Greenlanders (résumé) ; Canadian Mysteries (Univ. Victoria), Vinland et climat ; RealClimate, Medieval warmth and English wine ; ULiège (Doutreloup, Sacré), conférence Amis de l’Université de Liège 2026",
    page: 120
  },
  {
    id: 150,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le petit âge glaciaire et le grand hiver de 1709",
    synth: "Le livre place le petit âge glaciaire entre le XIVe siècle et 1850, avec des pointes de froid vers 1300-1380, 1620-1670 et 1820-1860 ; le GIEC retient plutôt 1450-1850 pour lui et 950-1250 pour l’optimum médiéval (qu’il appelle anomalie climatique médiévale) : ces bornes ne font pas consensus. Le grand hiver de 1709 en est l’épisode emblématique : une seconde vague de gel d’environ trois semaines détruit arbres fruitiers et récoltes, et Saint-Simon mentionne la perte des vignes. Plus ancien, un « petit âge glaciaire de l’Antiquité tardive » (vers 536-660) suit un groupe d’éruptions ; son lien avec la chute de l’Empire romain reste une hypothèse.",
    mnemo: "Le froid arrive par vagues : trois pics dans le livre, une « bande » plus large chez le GIEC, comme deux cartes à l’échelle différente.",
    flash: { q: "Quelle expression le GIEC préfère-t-il à « optimum médiéval » ?", a: "« Anomalie climatique médiévale » (Medieval Climate Anomaly), car la chaleur n’est ni uniforme ni simultanée selon les régions.", keys: [["anomalie"]] },
    qcm: { q: "Quel épisode illustre le mieux le petit âge glaciaire dans les vignobles français ?", opts: ["La canicule de 2003", "Le grand hiver de 1709", "L’année sans été de 1816 seule", "Le gel de printemps de 2021"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets ces périodes dans l’ordre chronologique.", payload: { items: ["Petit âge glaciaire de l’Antiquité tardive", "Optimum climatique médiéval", "Petit âge glaciaire", "Réchauffement actuel"] }, explanation: "Le froid antique précède la douceur médiévale, que suit le petit âge glaciaire ; le réchauffement actuel clôt la série, après la fin du refroidissement." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les sources s’accordent sur les dates exactes du petit âge glaciaire.", answer: false }, explanation: "Selon le livre, il va du XIVe siècle à 1850, selon le GIEC d’environ 1450 à 1850 : le début change tout, car cela inclut ou non les pointes de froid des années 1300. Début et fin varient aussi selon les régions et les saisons." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Le GIEC préfère parler d’anomalie climatique {{médiévale}} plutôt que d’{{optimum}} médiéval." }, explanation: "Le mot « optimum » suggère un climat favorable partout et en même temps ; or timing et géographie varient d’une région à l’autre." }
    ],
    cours: null,
    schema: {"svg":"<svg viewBox=\"0 0 320 212\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" fill=\"currentColor\" font-size=\"9\">\n<text x=\"8\" y=\"40\" font-weight=\"700\">Livre</text>\n<rect x=\"53\" y=\"28\" width=\"92\" height=\"18\" rx=\"3\" fill-opacity=\"0.12\" stroke=\"currentColor\"/><rect x=\"145\" y=\"28\" width=\"126.5\" height=\"18\" rx=\"3\" fill-opacity=\"0.45\" stroke=\"currentColor\"/>\n<text x=\"8\" y=\"100\" font-weight=\"700\">GIEC</text>\n<rect x=\"64.5\" y=\"88\" width=\"69\" height=\"18\" rx=\"3\" fill-opacity=\"0.12\" stroke=\"currentColor\"/><rect x=\"179.5\" y=\"88\" width=\"92\" height=\"18\" rx=\"3\" fill-opacity=\"0.45\" stroke=\"currentColor\"/>\n<g font-size=\"8\"><text x=\"99\" y=\"22\" text-anchor=\"middle\">optimum médiéval</text><text x=\"208.25\" y=\"22\" text-anchor=\"middle\">petit âge glaciaire</text>\n<text x=\"99\" y=\"82\" text-anchor=\"middle\">anomalie médiévale</text><text x=\"225.5\" y=\"82\" text-anchor=\"middle\">petit âge glaciaire</text></g>\n<line x1=\"239.07000000000002\" y1=\"24\" x2=\"239.07000000000002\" y2=\"150\" stroke=\"currentColor\" stroke-dasharray=\"3 2\"/><text x=\"239.07000000000002\" y=\"138\" text-anchor=\"middle\" font-weight=\"700\">1709</text>\n<line x1=\"20\" y1=\"150\" x2=\"306\" y2=\"150\" stroke=\"currentColor\"/><line x1=\"30\" y1=\"150\" x2=\"30\" y2=\"156\" stroke=\"currentColor\"/><text x=\"30\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">800</text><line x1=\"76\" y1=\"150\" x2=\"76\" y2=\"156\" stroke=\"currentColor\"/><text x=\"76\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">1000</text><line x1=\"122\" y1=\"150\" x2=\"122\" y2=\"156\" stroke=\"currentColor\"/><text x=\"122\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">1200</text><line x1=\"168\" y1=\"150\" x2=\"168\" y2=\"156\" stroke=\"currentColor\"/><text x=\"168\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">1400</text><line x1=\"214\" y1=\"150\" x2=\"214\" y2=\"156\" stroke=\"currentColor\"/><text x=\"214\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">1600</text><line x1=\"260\" y1=\"150\" x2=\"260\" y2=\"156\" stroke=\"currentColor\"/><text x=\"260\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">1800</text><line x1=\"306\" y1=\"150\" x2=\"306\" y2=\"156\" stroke=\"currentColor\"/><text x=\"306\" y=\"168\" text-anchor=\"middle\" opacity=\"0.7\">2000</text>\n<text x=\"160\" y=\"190\" text-anchor=\"middle\">Mêmes épisodes, bornes différentes : les dates varient</text><text x=\"160\" y=\"202\" text-anchor=\"middle\">selon les auteurs (aucun consensus).</text>\n</svg>","legende":"Optimum médiéval et petit âge glaciaire selon le livre et selon le GIEC (AR5), avec le grand hiver de 1709.","src":"D’après Lepeltier, Mille Vignes, p. 120 ; GIEC AR5, groupe I, chap. 5 ; dessin simplifié et original"},
    status: "needs_review",
    to_check: ["Bornes : livre (optimum 900-1300 ; petit âge glaciaire XIVe siècle-1850 avec pics 1300-1380, 1620-1670, 1820-1860) contre GIEC AR5 (950-1250 ; 1450-1850, chap. 5, tableau 5.1, lu), qui précise que les durées varient selon les auteurs : divergence de convention, non tranchée","Pic froid 1620-1670 du livre : en Bourgogne, la reconstitution de Chuine et al. (Nature 2004, lu), tirée des dates de vendange, donne au contraire des printemps-étés parmi les plus chauds de la série dans les années 1630 à 1680 (au-dessus du 90e centile) ; les deux ne mesurent pas la même chose (températures d’avril à août en Bourgogne) : divergence signalée, non tranchée","Grand hiver de 1709 : source unique (Études héraultaises) ; « destructeur de nombreux vignobles » plausible mais non recoupé, la source cite arbres fruitiers, récoltes et Saint-Simon","Petit âge glaciaire de l’Antiquité tardive (536-660, Büntgen et al. 2016) : lien avec la chute de l’Empire romain et la peste de Justinien présenté comme hypothèse par les auteurs","Écart de température moyen de 0,3 à 0,7 °C entre optima et petits âges glaciaires (livre) : non recoupé, non repris","Sources revues le 20/10/2026 : Wikipédia retiré des sources ; les faits qui s’appuyaient dessus sont à revérifier."],
    src: "Mille Vignes, P. Lepeltier, p. 120 ; Études héraultaises, L’hiver 1709 (2006) ; Büntgen et al. 2016, Nature Geoscience (Late Antique Little Ice Age) ; Chuine et al. 2004, Nature 432, 289-290 (lu)",
    page: 120
  },
  {
    id: 151,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le réchauffement actuel et les vendanges",
    synth: "En 2020, la planète était environ 1,2 °C au-dessus du niveau préindustriel (OMM). En France, les vendanges ont lieu en moyenne près de deux semaines plus tôt qu’avant 1980, avec des écarts selon le vignoble et la période : environ 15 jours en 26 ans à Saint-Émilion, 26 jours en Alsace, 13 jours à Beaune depuis 1988 ; à Tavel et Châteauneuf-du-Pape, on est passé de la seconde quinzaine de septembre à celle d’août. Plus de sucre dans les moûts donne plus d’alcool, que la filière cherche à réduire. Le CO2 stimule la photosynthèse sans modifier sensiblement sucres et acidité dans l’essai de Geisenheim, et Ruddiman soutient que l’influence humaine remonte à l’agriculture néolithique, hypothèse débattue.",
    mnemo: "Les vendanges roulent vers l’été comme un train qui prend de l’avance : de 13 à 26 jours selon la gare.",
    flash: { q: "De combien les vendanges ont-elles avancé en France depuis 1980 environ ?", a: "En moyenne de près de deux semaines, mais les chiffres varient : 13 jours à Beaune, 15 à Saint-Émilion, 26 en Alsace selon le vignoble et la période.", keys: [["deux semaines","2 semaines","15 jours","quinze jours","13","15","semaines"]] },
    qcm: { q: "À Tavel et Châteauneuf-du-Pape, depuis les années 1950, les vendanges ont glissé…", opts: ["De début octobre à fin septembre", "De la seconde quinzaine de septembre à celle d’août", "De mi-août à début juillet", "Elles n’ont pas bougé"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque vignoble à l’avance des vendanges relevée dans les sources.", payload: { pairs: [["Alsace", "Environ 26 jours d’avance"], ["Saint-Émilion", "Environ 15 jours d’avance en 26 ans"], ["Beaune (depuis 1988)", "Environ 13 jours d’avance"]] }, explanation: "Ces écarts n’ont pas la même période de référence ni la même méthode : on les cite avec leur vignoble, jamais comme une valeur unique pour la France." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "À Geisenheim, enrichir l’air en CO2 a nettement modifié les sucres et l’acidité du raisin.", answer: false }, explanation: "La photosynthèse augmente, mais la baie n’en tire pas plus de sucre ni de changement d’acidité : les auteurs notent que la chaleur et la sécheresse, absentes de l’essai, pourraient modifier ce constat." },
      { type: "mcq_single", prompt: "Selon l’hypothèse de Ruddiman, quand l’influence humaine sur le climat commence-t-elle ?", payload: { options: ["Avec l’agriculture, il y a des millénaires", "Avec la révolution industrielle", "Avec l’invention du moteur à explosion", "Après 1950 seulement"], answer: 0 }, explanation: "Ruddiman invoque la déforestation (CO2) puis la riziculture irriguée (méthane) bien avant l’ère industrielle ; c’est une hypothèse, que ses détracteurs discutent." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "+1,2 °C en 2020 : une seule source officielle consultée (OMM), chiffre conforme au livre",
      "Avance des vendanges : 13, 15, 24 ou 26 jours selon vignoble, période et méthode ; le livre parle d’une semaine d’avance du débourrement à la véraison, non confirmée par les sources",
      "Tavel et Châteauneuf-du-Pape : source de presse unique (Pleinchamp)",
      "Hausse du degré alcoolique : aucun chiffre trouvé dans les sources, aucun « +x % vol. » avancé",
      "Geisenheim : le livre évoque plus de biomasse « dont acides » et plus de sensibilité aux pathogènes ; l’étude VineyardFACE ne le confirme pas (auteurs : chaleur et sécheresse pourraient changer le constat)",
      "Ruddiman (2003) : 0,8 °C vers 1800 dans l’article, « plus de 1 °C » dans le livre ; refroidissements « depuis 2 500 ans » (livre) contre épidémies des 1 000 dernières années (article) ; hypothèse présentée comme provisoire par son auteur"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 118-121 ; OMM, State of the Global Climate 2020 ; LACCAVE / INRAE, document de synthèse sur l’adaptation de la filière vin ; Labbé et al. 2019, Climate of the Past 15, 1485-1501 ; Pleinchamp, Vendanges 24 jours plus tôt en 50 ans ; OENO One, étude VineyardFACE Geisenheim (CO2 élevé, cabernet-sauvignon 2019-2021) ; Ruddiman 2003, The anthropogenic greenhouse era began thousands of years ago (Climatic Change)",
    page: 120
  },
  {
    id: 152,
    theme: "Géographie viticole",
    sous: ["Climat", "Appellations"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Bordeaux", appel: null },
    titre: "S’adapter en France : leviers et nouveaux cépages",
    synth: "Parmi les leviers d’adaptation, la filière juge le matériel végétal le plus puissant, devant la conduite (canopée, densité, orientation), l’eau et l’œnologie. Pour tester de nouveaux cépages en AOP, la règle des variétés d’intérêt à fin d’adaptation (VIFA) limite ces essais à 5 % de l’encépagement de l’exploitation et 10 % de l’assemblage. Bordeaux et Bordeaux supérieur ont ouvert la voie : six cépages approuvés en 2021, et dix variétés dans le cahier des charges AOC Bordeaux de 2026, cinq rouges (arinarnoa, castets, marselan, touriga nacional, vidoc) et cinq blanches (alvarinho, floréal, liliorila, sauvignac, souvignier gris), l’alvarinho n’étant pas admis en Bordeaux supérieur. Le livre parle de sept cépages avec le petit manseng : c’est la proposition votée par les producteurs en 2019, que l’INAO n’a pas retenue.",
    mnemo: "Bordeaux ouvre sa cave à six invités, pas un de plus : quatre rouges, deux blancs ; le petit manseng frappe à la porte mais attend dehors.",
    flash: { q: "Quelles variétés d’adaptation le cahier des charges AOC Bordeaux autorise-t-il pour les rouges ?", a: "Arinarnoa, castets, marselan, touriga nacional et vidoc (cahier des charges de 2026). Pas de petit manseng.", keys: [["arinarnoa"],["castets"],["marselan"],["touriga"],["vidoc"]] },
    qcm: { q: "Quel levier d’adaptation est jugé le plus puissant par la filière (LACCAVE/INRAE) ?", opts: ["Le matériel végétal", "La couleur des bouteilles", "Le choix de la date de mise en bouteille", "La taille des fûts"], good: 0 },
    exos: [
      { type: "cloze", prompt: "Complète les limites des VIFA.", payload: { text: "Une VIFA représente au plus {{5}} % de l’encépagement de l’exploitation et au plus {{10}} % de l’assemblage en AOP." }, explanation: "Ces plafonds gardent l’essai à l’état d’expérimentation : l’identité de l’appellation reste portée par les cépages d’origine." },
      { type: "mcq_single", prompt: "Lequel de ces cépages ne figure pas parmi les variétés d’adaptation du cahier des charges AOC Bordeaux ?", payload: { options: ["Marselan", "Alvarinho", "Petit manseng", "Touriga nacional"], answer: 2 }, explanation: "Le petit manseng faisait partie des sept cépages proposés par les producteurs en 2019, mais l’INAO ne l’a pas retenu ; marselan et touriga nacional sont admis en rouge, l’alvarinho en blanc sec." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "L’alvarinho est admis comme variété d’adaptation en AOC Bordeaux blanc sec, mais pas en Bordeaux supérieur.", answer: true }, explanation: "Les deux cahiers des charges (2026) partagent les mêmes variétés rouges, mais en blanc le Bordeaux supérieur ne retient que floréal, liliorila, sauvignac et souvignier gris." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Six cépages approuvés en 2021 : presse seule (The Drinks Business) ; la liste actuelle (dix variétés, sans petit manseng) et les plafonds de 5 % et 10 % sont confirmés par les cahiers des charges AOC Bordeaux (arrêté du 13 mai 2026) et Bordeaux supérieur (arrêté du 4 juin 2026)",
      "Leviers d’adaptation : LACCAVE/INRAE ne traite ni les porte-greffes ni l’altitude ; lien porte-greffes / sécheresse non vérifié ici",
      "Parentés (arinarnoa = tannat × cabernet-sauvignon, liliorila = baroque × chardonnay) : Decanter seule, marselan et castets non vérifiés (VIVC) ; non utilisées dans les exercices"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 121-122 ; LACCAVE / INRAE, document de synthèse sur l’adaptation de la filière vin ; Syndicat des vins de Bordeaux, Nouveaux cépages dans les cahiers des charges Bordeaux ; INAO, cahiers des charges AOC Bordeaux (arrêté du 13 mai 2026) et Bordeaux supérieur (arrêté du 4 juin 2026) ; The Drinks Business, INAO approves six new grapes in Bordeaux (27 janv. 2021) ; Decanter, Bordeaux winemakers allow new grapes (2 juillet 2019) ; INAO, directive VIFA du 3 juin 2021",
    page: 121
  },
  {
    id: 153,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Pointu",
    geo: null,
    titre: "VitAdapt et les cépages oubliés : le terret",
    synth: "VitAdapt est un dispositif d’environ 0,5 ha, lancé en 2009 par l’INRAE à Villenave-d’Ornon, près de Bordeaux : il teste 52 cépages de France et d’Europe du Sud et du Sud-Est face au réchauffement. Le livre cite aussi 5 hybrides, 6 groupes de précocité et une vingtaine de vinifications, éléments non confirmés ici. Le terret noir, très ancien cépage languedocien, bourgeonne tard et se récolte à degré modéré : autorisé à Châteauneuf-du-Pape, il y est presque absent, et Tablas Creek (Californie) l’a planté en 2010.",
    mnemo: "VitAdapt, c’est la pépinière-vitrine de Bordeaux : 52 candidats au casting, dont des vieux acteurs comme le terret qui font leur retour.",
    flash: { q: "Qu’est-ce que le programme VitAdapt ?", a: "Un dispositif INRAE près de Bordeaux, lancé en 2009, qui teste 52 cépages face au réchauffement.", keys: [["INRAE","INRA"],["cépages","cépage","variétés"],["réchauffement","climat","climatique","changement"]] },
    qcm: { q: "Pourquoi le terret noir intéresse-t-il face au réchauffement ?", opts: ["Il bourgeonne tard et se récolte à degré modéré", "Il est immunisé contre le mildiou", "Il donne des vins très alcoolisés", "Il mûrit avant tous les autres cépages"], good: 0 },
    exos: [
      { type: "short_answer", prompt: "Comment s’appelle le programme de l’INRAE près de Bordeaux qui teste 52 cépages face au réchauffement ?", payload: { accepted: ["VitAdapt", "Vitadapt", "Vit Adapt"] }, explanation: "Le nom contracte « vigne » et « adaptation » : c’est un essai en conditions réelles, pas un catalogue." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le terret a été replanté en nombre à Châteauneuf-du-Pape.", answer: false }, explanation: "Il y est autorisé, mais très peu planté (environ 2 acres en 2009). Le livre parle de « replanté » : la nuance est qu’autorisation et plantation réelle sont deux choses bien distinctes." },
      { type: "mcq_single", prompt: "Quel domaine californien a importé le terret noir de Beaucastel ?", payload: { options: ["Tablas Creek", "Ridge", "Robert Mondavi", "Opus One"], answer: 0 }, explanation: "Le domaine a fait venir ses plants de Beaucastel, à Châteauneuf-du-Pape : c’est le terret du Rhône qui voyage, pas un cépage californien d’origine." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "VitAdapt : 0,5 ha, 2009, 52 cépages (31 rouges, 21 blancs), source L’Info Durable ; 5 hybrides, 6 groupes de précocité et vingtaine de vinifications (livre) non confirmés ; source INRAE bloquée",
      "Terret noir : « replanté à Châteauneuf-du-Pape » (livre) nuancé par Tablas Creek et iDealwine (autorisé, très peu planté) ; ne pas le confondre avec les cépages de l’AOC Bordeaux ni avec VitAdapt",
      "Tablas Creek : importation 2003, planté en 2010, récolte vers 21-21,6 °Brix : source du domaine, intérêt commercial possible"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 121-122 ; L’Info Durable, Sur la parcelle 52, Bordeaux teste des cépages étrangers ; Tablas Creek, Terret noir ; iDealwine, Les 13 cépages à Châteauneuf : mythe ou réalité",
    page: 122
  },
  {
    id: 154,
    theme: "Géographie viticole",
    sous: ["Climat"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Nouveaux ravageurs : flavescence dorée et Drosophila suzukii",
    synth: "La flavescence dorée est une maladie à phytoplasme transmise par une cicadelle, Scaphoideus titanus, originaire de l’État de New York et introduite en Armagnac dans les années 1950. Le livre voit dans sa remontée vers le nord un effet du réchauffement, mais l’entomologiste Thiéry la juge plutôt normale et l’effet du climat incertain. Drosophila suzukii, mouche dont les larves abîment les baies, est une espèce invasive : elle a été détectée dans le vignoble bordelais (Sauternes et Barsac) aux vendanges 2011, sans dégât cette année-là ; le livre évoque des attaques en 2014 dans le Centre et le Nord-Est et la range parmi les effets du réchauffement, lien que ces sources n’établissent pas. Elle semble préférer les cépages rouges.",
    mnemo: "La cicadelle est le taxi du phytoplasme (venue de New York) ; la drosophile, elle, n’a besoin de personne : elle pique la baie elle-même.",
    flash: { q: "Quel insecte transmet le phytoplasme de la flavescence dorée ?", a: "Scaphoideus titanus, une cicadelle.", keys: [["Scaphoideus","cicadelle"]] },
    qcm: { q: "D’où est originaire Scaphoideus titanus ?", opts: ["De l’État de New York", "Du Japon", "De l’Afrique du Sud", "De l’Armagnac"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque élément à son rôle.", payload: { pairs: [["Phytoplasme", "Agent de la flavescence dorée"], ["Scaphoideus titanus", "Cicadelle vectrice du phytoplasme"], ["Drosophila suzukii", "Ravageur des baies, plutôt sur cépages rouges"]] }, explanation: "Distinguer l’agent (microbe), le vecteur (insecte qui le porte) et le ravageur direct (insecte qui abîme le fruit) évite de confondre les deux insectes." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La remontée de Scaphoideus titanus vers le nord est établie comme un effet direct du réchauffement.", answer: false }, explanation: "Le réchauffement peut favoriser le phytoplasme tout en défavorisant l’insecte : selon l’entomologiste cité, la progression de la cicadelle s’explique aussi par sa simple expansion depuis son point d’introduction." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Scaphoideus titanus vient de l’État de {{New York}} et a été introduit en {{Armagnac}} dans les années 1950." }, explanation: "Un ravageur introduit progresse de lui-même sur la carte : l’origine géographique aide à comprendre qu’on ne peut pas tout imputer au climat." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Flavescence dorée : le livre présente l’extension nordique comme un effet du réchauffement, la source (Réussir Vigne, Thiéry) nuance fortement ; source unique","Drosophila suzukii : première détection dans le vignoble bordelais aux vendanges 2011, sans dégât (Rouzès et al., J. Int. Sci. Vigne Vin 46(2), 2012, lu ; Réussir Vigne) ; les attaques de 2014 dans le Centre et le Nord-Est (livre) et le lien avec le climat ne sont pas vérifiés","Cépages « gris » (livre) : non confirmés, seule la préférence pour les rouges est étayée"],
    src: "Mille Vignes, P. Lepeltier, p. 121 ; Réussir Vigne, Progression de la cicadelle de la flavescence dorée vers les régions du nord ; Réussir Vigne, Rester vigilant face à Drosophila suzukii ; Rouzès, Delbac, Ravidat et Thiéry, First occurrence of Drosophila suzukii in the Sauternes vineyards (J. Int. Sci. Vigne Vin 46(2), 145-147, 2012, lu)",
    page: 121
  },
  {
    id: 155,
    theme: "Géographie viticole",
    sous: ["Climat", "Régions"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les nouveaux territoires viticoles",
    synth: "Face au réchauffement, on explore de nouvelles latitudes et altitudes. L’Angleterre et le Pays de Galles comptaient 3 758 ha de vignes en 2021 d’après la Food Standards Agency, plus de quatre fois plus qu’en 2000 ; le livre avance 2 700 ha pour la Grande-Bretagne, écart non expliqué. En Argentine, Bodega Colomé (Salta) cultive jusqu’à environ 3 100 m, des vignes présentées comme les plus hautes du monde. L’Australie dispose de son côté d’un atlas climatique, Australia’s Wine Future, qui projette l’évolution de chaque indication géographique.",
    mnemo: "Quand il fait trop chaud en bas, on monte ou on remonte vers le nord : Colomé monte, l’Angleterre remonte.",
    flash: { q: "Comment s’appelle l’atlas climatique australien pour les indications géographiques viticoles ?", a: "Australia’s Wine Future: A Climate Atlas (Université de Tasmanie).", keys: [["Climate Atlas","atlas"],["Tasmanie"]] },
    qcm: { q: "Pourquoi cherche-t-on des vignes en altitude face au réchauffement ?", opts: ["Les températures y sont plus fraîches", "Le sol y est toujours plus riche", "Les raisins y sont plus gros", "Il y a moins de soleil"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque territoire à ce qui l’illustre.", payload: { pairs: [["Angleterre et Pays de Galles", "Vignoble plus que quadruplé depuis 2000"], ["Salta (Bodega Colomé)", "Vignes jusqu’à environ 3 100 m d’altitude"], ["Australie", "Atlas climatique Australia’s Wine Future"]] }, explanation: "Deux réponses jouent sur la latitude ou l’altitude, la troisième sur l’anticipation : c’est la logique des nouveaux territoires, aller chercher le frais ou prévoir." },
      { type: "short_answer", prompt: "Quel atlas australien projette l’évolution du climat de chaque indication géographique viticole ?", payload: { accepted: ["Australia’s Wine Future", "Australias Wine Future", "Australia's Wine Future", "A Climate Atlas"] }, explanation: "Le projet, mené par l’Université de Tasmanie, a donné des tendances à court, moyen et long terme pour toutes les indications géographiques." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les sources donnent 2 700 ha de vignes en Grande-Bretagne en 2021, comme le livre.", answer: false }, explanation: "La source consultée donne 3 758 ha pour l’Angleterre et le Pays de Galles ; l’écart avec le livre tient peut-être à un périmètre ou à une source différents, à ne pas arbitrer ici." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Superficie britannique : 3 758 ha en 2021 (Food Standards Agency, via Decanter) contre 2 700 ha et 150 ha en 1975 dans le livre ; écart non expliqué, chiffre 1975 non retrouvé",
      "Bodega Colomé : environ 135 ha de 2 400 à 3 111 m, « plus haut du monde » = revendication commerciale, source unique ; altitudes de Tupungato, Uco, San Carlos (plus de 1 100 m) non vérifiées",
      "Australia’s Wine Future : le livre donne 5 km de résolution ; la source précise 5 km seulement pour le sud-est (environ 10 km pour la Tasmanie, le Queensland et le nord de la Nouvelle-Galles du Sud)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 121 ; Decanter, Sales of English and Welsh wine soared in 2021 ; Wein.plus Lexikon, Colomé ; Wine Australia, Australia’s Wine Future: A Climate Atlas",
    page: 121
  },
  {
    id: 156,
    theme: "Géographie viticole",
    sous: ["Climat", "Régions"],
    niveau: "Pointu",
    geo: { pays: "France", region: "Languedoc", appel: null },
    titre: "Mas de Daumas Gassac et Henri Enjalbert",
    synth: "Dans la vallée du Gassac (Hérault), Véronique et Aimé Guibert achètent le domaine en 1970. Le géographe Henri Enjalbert, ami de la famille, le parcourt en 1971 et compare son sol aux meilleurs terroirs de la Côte d’Or ; les cabernets-sauvignons y sont plantés en 1972. Le livre en fait l’exemple d’un terroir conçu par un géographe, et le domaine raconte que l’eau froide du Gassac sert aussi à refroidir le chai.",
    mnemo: "Un géographe, un ruisseau froid, un cabernet : le Gassac est une recette où le lieu passe avant la mode.",
    flash: { q: "Quel géographe, ami des Guibert, a parcouru le domaine du Gassac avant sa plantation ?", a: "Henri Enjalbert.", keys: [["Enjalbert"]] },
    qcm: { q: "Dans quel département se trouve le Mas de Daumas Gassac ?", opts: ["Hérault", "Gironde", "Côte-d’Or", "Vaucluse"], good: 0 },
    exos: [
      { type: "short_answer", prompt: "Quel géographe a conseillé les Guibert pour le choix des terroirs du Mas de Daumas Gassac ?", payload: { accepted: ["Enjalbert", "Henri Enjalbert", "Henri Enjalbert géographe"] }, explanation: "Enjalbert est géographe, pas œnologue : son regard porte sur le lieu (relief, eau, sol) plutôt que sur la vinification." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon le domaine, Henri Enjalbert a comparé le sol du Gassac aux meilleurs terroirs de la Côte d’Or.", answer: true }, explanation: "La source est le domaine lui-même : l’argument vaut comme récit, la comparaison d’un lieu à une référence connue étant un procédé classique pour légitimer un terroir." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Source unique et non indépendante (histoire du domaine sur son site) : comparaison avec la Côte d’Or, dates 1970-1972, eau froide du Gassac",
      "Les grèzes et les dates d’Enjalbert (1910-1983) figurent dans le livre mais pas sur la page du domaine : non reprises"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 123 ; Mas de Daumas Gassac, Histoire du domaine",
    page: 123
  }
);
