// Nature — fiches de cette section de Mille Vignes. Voir l'en-tête de fiches.js.
FICHES.push(
  {
    id: 4,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La véraison",
    synth: "Étape clé du cycle : la baie change de couleur (ou devient translucide chez les blancs), s’assouplit et entame sa maturation. Elle cesse de se comporter en organe vert : elle stocke des sucres, son acidité baisse, pigments, tanins et arômes s’élaborent. Commence alors le compte à rebours avant les vendanges.",
    mnemo: "« Vér-aison → vert-à-raisin. » Le vert vire au raisin mûr : départ du compte à rebours vers la vendange.",
    flash: { q: "Sucre et acidité à la véraison ?", a: "Le sucre monte, l’acidité baisse." },
    qcm: { q: "La véraison correspond à…", opts: ["La floraison", "Le changement de couleur et le début de la maturation", "La taille d’hiver", "La chute des feuilles"], good: 1 },
    exos: [
      { type: "flashcard_reverse", prompt: "Stade où la baie change de couleur et commence à stocker du sucre.", payload: { answer: "La véraison (stade M de Baggiolini)." } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Chez un cépage blanc, la véraison se repère au passage de la baie du vert opaque au translucide.", answer: true }, explanation: "Les blancs ne se colorent pas : la baie « traluit »." },
      { type: "mcq_multi", prompt: "Qu’est-ce qui se passe à partir de la véraison ?", payload: { options: ["Les sucres s’accumulent", "L’acidité diminue", "La baie s’assouplit", "La baie redevient chlorophyllienne"], answers: [0, 1, 2] } }
    ],
    status: "needs_review",
    to_check: ["Durée véraison → vendange (environ 40 à 50 jours selon les sources usuelles) : non recoupée lors de la recherche, donc retirée de la fiche."],
    src: "Mille Vignes, P. Lepeltier, p. 46 et 62",
    page: 45
  },
  {
    id: 54,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La racine de vigne : anatomie et circulation des sèves",
    synth: "Le système racinaire associe racines principales et radicelles (le « chevelu »). À la pointe, une coiffe protège les cellules méristématiques qui font pousser la racine ; au-dessus viennent la zone d’élongation puis la zone pilifère, dont les poils absorbent l’eau et les minéraux et multiplient la surface d’échange. Au centre, le xylème monte la sève brute (eau + minéraux) vers les rameaux, le phloème descend la sève élaborée (sucres de la photosynthèse) vers les racines.",
    mnemo: "Xylème = ascenseur de l’eau (« X » comme eXtraite du sol) ; Phloème = livreur de sucre (« P » comme Photosynthèse).",
    flash: { q: "Quel tissu conduit la sève élaborée vers les racines ?", a: "Le phloème (le xylème monte la sève brute)." },
    qcm: { q: "Quelle zone de la racine absorbe l’essentiel de l’eau et des minéraux ?", opts: ["La coiffe", "La zone pilifère (poils absorbants)", "La zone d’élongation", "Le cylindre central"], good: 1 },
    exos: [
      { type: "ordering", prompt: "De la pointe vers le haut, remets les zones de la racine dans l’ordre.", payload: { items: ["Coiffe", "Zone méristématique", "Zone d’élongation", "Zone pilifère"] } },
      { type: "matching", prompt: "Associe chaque tissu à la sève qu’il transporte.", payload: { pairs: [["Xylème", "Sève brute (eau, minéraux), vers le haut"], ["Phloème", "Sève élaborée (sucres), vers les racines"]] } },
      { type: "cloze", prompt: "Complète.", payload: { text: "L’ensemble des radicelles s’appelle le {{chevelu}} racinaire." } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 40 ; Cornell, Grapes 101 : grapevine roots ; Université de Patras, cours Vine biology",
    page: 40
  },
  {
    id: 55,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Pointu",
    geo: null,
    titre: "Pourquoi les racines américaines survivent au phylloxéra",
    synth: "En vieillissant, la racine s’épaissit grâce au cambium et au phellogène, qui produit du liège. Chez les Vitis américaines résistantes, une piqûre de phylloxéra déclenche la formation d’un périderme de cicatrisation qui isole la zone attaquée ; chez V. vinifera, les lésions nécrosent et s’infectent jusqu’aux tissus conducteurs, et la racine finit par pourrir. La présence de ce périderme est l’un des critères qui servent à évaluer la résistance.",
    mnemo: "L’américaine pose un pansement de liège ; la vinifera laisse la plaie s’infecter.",
    flash: { q: "Quel mécanisme protège les racines des Vitis américaines du phylloxéra ?", a: "Un périderme de cicatrisation (liège produit par le phellogène) qui isole les piqûres et évite la nécrose." },
    qcm: { q: "Que se passe-t-il sur une racine de V. vinifera piquée par le phylloxéra ?", opts: ["Elle forme vite du liège et guérit", "Les lésions nécrosent et s’infectent", "Elle produit des vrilles", "Rien : le puceron ne vit que sur les feuilles"], good: 1 },
    exos: [
      { type: "short_answer", prompt: "Quel tissu de la racine produit le liège ?", payload: { accepted: ["phellogène", "le phellogène"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La capacité à cicatriser les piqûres racinaires contribue à la résistance des porte-greffes américains.", answer: true }, explanation: "Un périderme de cicatrisation isole la zone piquée ; c’est l’un des mécanismes de résistance, parmi d’autres." }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 40-41 ; Vitis 30 (1991), « Further evidence of phylloxera biotypes » ; Interaction between V. vinifera and grape phylloxera (PMC4242323)",
    page: 41
  },
  {
    id: 56,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Architecture et profondeur des racines",
    synth: "Matériel végétal, sol, roche mère, climat et pratiques façonnent l’enracinement : selon Lepeltier, un pied issu de semis forme une racine pivotante, une bouture des racines plus traçantes. L’essentiel des racines se loge entre environ 15 et 60 cm, dans un sol aéré ; en surface, elles subissent sécheresse, gel, labour et herbicides ; en profondeur, elles manquent d’oxygène. Lepeltier évoque une plongée possible de « plusieurs dizaines de mètres » ; les sources consultées documentent plutôt 6 m environ, parfois davantage. Les racines ancrent, nourrissent, stockent et façonnent le sol avec leurs exsudats et les mycorhizes.",
    mnemo: "Le gros des racines vit entre une demi-bêche et deux bêches de profondeur.",
    flash: { q: "Dans quelle tranche de sol se trouve l’essentiel des racines de vigne ?", a: "Environ 15 à 50-60 cm de profondeur." },
    qcm: { q: "Quelle profondeur maximale de racines est couramment documentée ?", opts: ["50 cm", "Environ 6 m, parfois plus", "100 m", "Les racines ne dépassent jamais 1 m"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les sources consultées confirment que les racines de vigne descendent couramment à plusieurs dizaines de mètres.", answer: false }, explanation: "Divergence avec Lepeltier (p. 41) : les sources parlent d’environ 6 m, parfois un peu plus." },
      { type: "mcq_multi", prompt: "Quelles fonctions les racines assurent-elles ?", payload: { options: ["Ancrage", "Alimentation en eau et nutriments", "Stockage de réserves", "Photosynthèse"], answers: [0, 1, 2] } },
      { type: "matching", prompt: "Associe l’origine du pied à son enracinement (selon Lepeltier).", payload: { pairs: [["Semis (pépin)", "Racine pivotante et plongeante"], ["Bouture", "Racines traçantes, latérales"]] } }
    ],
    status: "needs_review",
    to_check: ["Semis = racine pivotante : non sourcé ; les boutures forment des racines adventives près des nœuds (Cornell), sans preuve qu’elles soient plus traçantes.", "Profondeur maximale : « plusieurs dizaines de mètres » (Lepeltier) non documenté ; 6 m et plus assez courant, plus de 10 m rare (UC Davis, eXtension)."],
    src: "Mille Vignes, P. Lepeltier, p. 41 ; Lodi Winegrape Commission, Grapevine roots and rootstocks ; PMC12197271",
    page: 41
  },
  {
    id: 57,
    theme: "Viticulture",
    sous: ["Taille"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le vocabulaire du cep : tronc, bras, courson, baguette",
    synth: "Le vieux bois (tronc et bras) forme la charpente du cep. Il porte le bois de taille, né l’année précédente : taillé court, c’est un courson (ou côt) ; taillé long, une baguette. Au printemps, ses yeux donnent des rameaux herbacés qui, en s’aoûtant (ils brunissent et se lignifient), deviennent des sarments. Les pousses nées du vieux bois sont des gourmands, celles du porte-greffe des drageons : on les supprime.",
    mnemo: "Courson = court ; Baguette = longue comme une baguette de pain. Rameau vert → sarment brun.",
    flash: { q: "Comment appelle-t-on une pousse issue du porte-greffe ?", a: "Un drageon (un gourmand, lui, pousse sur le vieux bois du greffon)." },
    qcm: { q: "Un rameau devient un sarment quand…", opts: ["Il porte des fleurs", "Il s’aoûte : il brunit et se lignifie", "Il est taillé", "Il touche le sol"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque terme à sa définition.", payload: { pairs: [["Courson (côt)", "Bois de taille coupé court"], ["Baguette", "Bois de taille coupé long"], ["Gourmand", "Pousse née du vieux bois"], ["Drageon", "Pousse née du porte-greffe"]] } },
      { type: "odd_one_out", prompt: "Lequel ne fait pas partie de la charpente permanente du cep ?", payload: { options: ["Tronc", "Bras", "Rameau de l’année", "Vieux bois"], answer: 2 }, explanation: "Le rameau est une pousse de l’année, renouvelée à chaque cycle." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Le rameau vert devient {{sarment}} quand il s’aoûte." } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 41-42 ; University of Nevada Extension ; UC Master Gardeners",
    page: 41
  },
  {
    id: 58,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le rameau : nœuds, entre-nœuds, vrilles et apex",
    synth: "Le rameau alterne des renflements, les nœuds, et des segments, les entre-nœuds (ou mérithalles). Chaque nœud porte, d’un côté, une vrille ou une inflorescence (rameau modifié qui accroche la plante à son support) et, de l’autre, une feuille avec ses bourgeons à l’aisselle du pétiole. L’apex, bourgeon terminal, pilote la croissance par signaux hormonaux : l’écimer ou le rogner trop tôt redistribue les ressources de la vigne.",
    mnemo: "Vrille et grappe sont cousines : toutes deux sont des rameaux transformés, nés en face de la feuille.",
    flash: { q: "Quel autre nom porte l’entre-nœud ?", a: "Le mérithalle." },
    qcm: { q: "La vrille est…", opts: ["Une racine aérienne", "Un rameau transformé qui accroche la vigne", "Une feuille modifiée", "Un bourgeon dormant"], good: 1 },
    exos: [
      { type: "flashcard", prompt: "Quel organe contrôle la croissance du rameau par signaux hormonaux ?", payload: { answer: "L’apex (le bourgeon terminal)." } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Rogner l’apex en été n’a aucun effet sur la répartition des ressources de la vigne.", answer: false }, explanation: "Supprimer l’apex modifie la distribution des sucres et peut relancer les entre-cœurs." }
    ],
    status: "needs_review",
    to_check: ["Morphologie du rameau : non recoupée par deux sources lors de la recherche du lot."],
    src: "Mille Vignes, P. Lepeltier, p. 42-43",
    page: 42
  },
  {
    id: 59,
    theme: "Viticulture",
    sous: ["Taille"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’œil composé et la fertilité des bourgeons",
    synth: "À l’aisselle de chaque feuille se forme un œil composé : un bourgeon principal, qui débourre le premier et porte les plus grosses grappes, flanqué de bourgeons secondaires de secours (après un gel, par exemple), moins fertiles. À côté, le prompt-bourgeon se développe dès l’année et donne l’entre-cœur, souvent stérile. Les ébauches de grappes de l’an N+1 se forment dans les yeux pendant l’an N : une récolte se prépare dès l’année précédente (Lepeltier parle de N−1, N et N+1). La fertilité selon le rang de l’œil guide la taille ; Lepeltier cite le gamay, fertile dès la base (taille courte), et le poulsard, qui exige une taille longue.",
    mnemo: "Un œil = une équipe : un titulaire (principal), des remplaçants (secondaires), et un pressé qui joue tout de suite (prompt-bourgeon).",
    flash: { q: "Quand se forment les ébauches de grappes récoltées l’année N+1 ?", a: "Pendant l’année N, dans les yeux qui passeront l’hiver." },
    qcm: { q: "Que donne le prompt-bourgeon ?", opts: ["La grappe principale", "Un entre-cœur la même année", "La racine principale", "Rien avant deux ans"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Après un gel de printemps, les bourgeons secondaires peuvent prendre le relais, avec des grappes plus petites.", answer: true } },
      { type: "matching", prompt: "Associe chaque bourgeon à son rôle.", payload: { pairs: [["Bourgeon principal", "Débourre en premier, plus grosse grappe"], ["Bourgeons secondaires", "Relais en cas d’accident"], ["Prompt-bourgeon", "Pousse l’année même (entre-cœur)"]] } },
      { type: "mcq_single", prompt: "Pourquoi un cépage peu fertile sur ses yeux de base est-il taillé long ?", payload: { options: ["Pour limiter la vigueur", "Pour garder des yeux plus haut placés, plus fertiles", "Pour faciliter la vendange mécanique", "Pour lutter contre l’oïdium"], answer: 1 } }
    ],
    status: "needs_review",
    to_check: ["Fertilité des yeux de base : gamay fertile, poulsard peu fertile (taille longue) — seule la taille longue du poulsard est confirmée."],
    src: "Mille Vignes, P. Lepeltier, p. 42-43 ; UC Davis, Flowering and fruiting of grapevine ; PMC4246755",
    page: 42
  },
  {
    id: 60,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La feuille de vigne : structure et couleur",
    synth: "Une fois formée, la feuille garde sa découpe (lobes, dents, pilosité), qui sert à l’ampélographe. Sa face supérieure, à épiderme épaissi, limite l’évaporation ; la face inférieure porte les stomates, par où passent les échanges gazeux de la photosynthèse, de la respiration et de la transpiration. Entre les deux, un parenchyme palissadique dense riche en chlorophylle, puis un parenchyme lacuneux aéré. Sa couleur évolue du vert tendre à l’automne flamboyant et renseigne sur l’état de la plante (carence, maladie).",
    mnemo: "Le dessus est le toit (épais, imperméable), le dessous les fenêtres (stomates).",
    flash: { q: "Où se trouvent principalement les stomates de la feuille de vigne ?", a: "Sur la face inférieure." },
    qcm: { q: "Quel tissu, juste sous l’épiderme supérieur, concentre la chlorophylle ?", opts: ["Le parenchyme palissadique", "Le parenchyme lacuneux", "Le phellogène", "La cuticule"], good: 0 },
    exos: [
      { type: "ordering", prompt: "De la face supérieure à la face inférieure, remets les couches de la feuille dans l’ordre.", payload: { items: ["Épiderme supérieur épaissi", "Parenchyme palissadique", "Parenchyme lacuneux", "Épiderme inférieur à stomates"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La couleur des feuilles peut signaler une carence ou une maladie.", answer: true } }
    ],
    status: "needs_review",
    to_check: ["Anatomie foliaire (stomates, parenchymes) : non recoupée par deux sources lors de la recherche du lot."],
    src: "Mille Vignes, P. Lepeltier, p. 42-44",
    page: 42
  },
  {
    id: 61,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Photosynthèse, respiration, transpiration",
    synth: "Par la photosynthèse, la feuille fabrique sucres, acides aminés, lipides, puis composés secondaires (polyphénols, anthocyanes, arômes) ; la sève élaborée les distribue d’abord aux organes en croissance, puis, après la véraison, aux grappes et aux réserves. La respiration brûle des sucres pour fournir l’énergie ; les jeunes feuilles respirent le plus. La transpiration dépend de la lumière, de l’humidité de l’air et de l’eau disponible. Correction : Lepeltier écrit que des cyanobactéries vivent dans les chloroplastes ; en réalité les chloroplastes sont eux-mêmes les descendants d’une cyanobactérie ancestrale (endosymbiose).",
    mnemo: "Le chloroplaste est une ancienne cyanobactérie « adoptée » : un locataire devenu une pièce de la maison.",
    flash: { q: "Quelle est l’origine évolutive du chloroplaste ?", a: "Une cyanobactérie ancestrale intégrée par endosymbiose." },
    qcm: { q: "Après la véraison, la sève élaborée va en priorité…", opts: ["Aux racines uniquement", "Aux grappes et aux organes de réserve", "Aux vrilles", "Aux nouveaux rameaux"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les chloroplastes de la feuille de vigne contiennent des cyanobactéries vivantes.", answer: false }, explanation: "Erreur du livre (p. 44) : le chloroplaste descend d’une cyanobactérie, il n’en abrite pas." },
      { type: "mcq_multi", prompt: "Qu’est-ce qui fait varier l’intensité de la photosynthèse ?", payload: { options: ["L’âge des feuilles", "L’ensoleillement", "La disponibilité en eau", "La couleur de l’étiquette"], answers: [0, 1, 2] } },
      { type: "short_answer", prompt: "Comment nomme-t-on la symbiose où un organisme vit à l’intérieur d’un autre ?", payload: { accepted: ["endosymbiose", "l’endosymbiose"] } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 44 ; manuels de biologie (endosymbiose des plastes) ; Wikipédia, Chloroplast",
    page: 44
  },
  {
    id: 62,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Pointu",
    geo: { pays: "Grèce", region: "Santorin", appel: null },
    titre: "Santorin et la conduite en kouloura",
    synth: "Sur l’île volcanique de Santorin, née de l’éruption minoenne il y a environ 3 600 ans, la vigne est traditionnellement enroulée en couronne au ras du sol (kouloura), ce qui protège les grappes du vent et du soleil et capte l’humidité nocturne sur une île presque sans pluie. Le phylloxéra ne prospère pas dans ces sols volcaniques : les ceps, francs de pied, sont très vieux ; quand un pied faiblit, on recrée la souche sur les mêmes racines. L’assyrtiko domine l’encépagement.",
    mnemo: "Une couronne de Noël posée sur la cendre : la kouloura garde la grappe à l’ombre.",
    flash: { q: "Pourquoi les vignes de Santorin sont-elles franches de pied ?", a: "Le phylloxéra ne prospère pas dans les sols volcaniques de l’île." },
    qcm: { q: "Quel cépage blanc domine à Santorin ?", opts: ["Assyrtiko", "Xinomavro", "Agiorgitiko", "Moschofilero"], good: 0 },
    exos: [
      { type: "mcq_multi", prompt: "À quoi sert la conduite en kouloura ?", payload: { options: ["Protéger les grappes du vent", "Les abriter du soleil", "Capter l’humidité nocturne", "Faciliter la vendange mécanique"], answers: [0, 1, 2] } },
      { type: "short_answer", prompt: "Comment s’appelle la conduite en corbeille au ras du sol de Santorin ?", payload: { accepted: ["kouloura", "koulouri", "kouloures", "koulouras"] } }
    ],
    status: "needs_review",
    to_check: ["Superficie du vignoble : 1 000 à 1 200 ha selon les sources (presse, Karakasis MW), aucune donnée officielle ; chiffre retiré.", "Subventions de l’UE à la conduite traditionnelle : non trouvé."],
    src: "Mille Vignes, P. Lepeltier, p. 44 ; Robert Parker Wine Advocate, Santorini ; Around the World in 80 Harvests (2021) ; Friedrich et al., Science, 2006 ; Cherubini et al., Antiquity, 2014",
    page: 44
  },
  {
    id: 63,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La fleur de vigne",
    synth: "Discrète et verdâtre, la fleur de vigne n’a pas besoin d’attirer les pollinisateurs. Chez V. vinifera cultivée, elle est presque toujours hermaphrodite : calice réduit, pétales soudés en capuchon, étamines porteuses du pollen, pistil dont l’ovaire contient quatre ovules, nectaires. Quelques cépages sont fonctionnellement femelles. Les inflorescences, déjà ébauchées dans le bourgeon, fleurissent quelques semaines après le débourrement (6 à 8 selon UC Davis ; Lepeltier dit 8 à 10) ; la floraison d’une parcelle s’étale sur une quinzaine de jours.",
    mnemo: "La fleur de vigne garde son chapeau : le capuchon tombe, et seulement alors la fête commence.",
    flash: { q: "Combien d’ovules l’ovaire de la fleur de vigne contient-il ?", a: "Quatre, d’où au maximum quatre pépins par baie." },
    qcm: { q: "Le capuchon floral est formé…", opts: ["Des sépales", "Des pétales soudés", "Des étamines", "Du stigmate"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La fleur de V. vinifera cultivée a besoin des abeilles pour être fécondée.", answer: false }, explanation: "Hermaphrodite, elle s’autoféconde ou reçoit le pollen d’une fleur voisine." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Une baie complète contient au plus {{quatre|4}} pépins." } },
      { type: "mcq_single", prompt: "Combien de temps dure la floraison d’une même parcelle, environ ?", payload: { options: ["Une journée", "Une quinzaine de jours", "Deux mois", "Tout l’été"], answer: 1 } }
    ],
    status: "needs_review",
    to_check: ["Structure florale : calyptre, 5 étamines et ovaire à 2 loges de 2 ovules (eXtension, NMSU) ; « calice réduit » non confirmé.", "Riesling ~125 fleurs, tannat >440 par inflorescence (Lepeltier) : non confirmé, retiré."],
    src: "Mille Vignes, P. Lepeltier, p. 45 ; UC Davis, Flowering and fruiting of grapevine",
    page: 45
  },
  {
    id: 64,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Floraison, nouaison et coulure",
    synth: "Pour fleurir, le capuchon doit tomber, ce qui demande chaleur, soleil et poussée des étamines ; pluie, vent et froid à ce moment compromettent la récolte. La nouaison est le passage de la fleur fécondée au jeune fruit. Toutes les fleurs ne nouent pas : une étude sur 120 cépages trouve environ 35 % de nouaison en moyenne. La coulure est la chute des fleurs ou des jeunes baies non fécondées ; Lepeltier cite le grenache et le merlot parmi les cépages sensibles, et un porte-greffe trop vigoureux peut l’aggraver.",
    mnemo: "Coulure = la fleur « coule » de la grappe et tombe ; il reste des trous dans la grappe.",
    flash: { q: "Qu’est-ce que la coulure ?", a: "La chute des fleurs ou jeunes baies non fécondées, d’où des grappes clairsemées." },
    qcm: { q: "Quel taux moyen de nouaison une étude sur 120 cépages a-t-elle mesuré ?", opts: ["Environ 5 %", "Environ 35 %", "Environ 80 %", "100 %"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets les étapes du cycle reproducteur dans l’ordre.", payload: { items: ["Floraison", "Pollinisation", "Fécondation", "Nouaison"] } },
      { type: "mcq_multi", prompt: "Quels facteurs favorisent la coulure ?", payload: { options: ["Pluie et froid à la floraison", "Porte-greffe trop vigoureux", "Sensibilité du cépage", "Un soleil chaud et sec à la floraison"], answers: [0, 1, 2] } }
    ],
    status: "needs_review",
    to_check: ["Taux moyen de nouaison d’environ 35 % (Tello et al.) : non retrouvé ; autres sources : 30-50 % (NMSU), 42-48 % sur 114 cépages (thèse, Université de Saragosse).", "Sensibilité du grenache et du merlot à la coulure : une seule source (NMSU).", "« Le taux de nouaison dépasse rarement 50 % » (Lepeltier) : plausible, non confirmé explicitement."],
    src: "Mille Vignes, P. Lepeltier, p. 45-46 ; Tello et al., étude de 120 cépages (CBGG)",
    page: 45
  },
  {
    id: 65,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le millerandage, défaut ou atout ?",
    synth: "Une grappe millerandée mêle de grosses baies et de petites baies sans pépins, mal fécondées : les Anglo-Saxons parlent de « hen and chicks ». Ces petites baies à peau épaisse, peu juteuses, concentrent couleur et sucre, ce qui peut aider la qualité. Henri Jayer (1922-2006) y voyait un atout pour le pinot noir. Lepeltier cite le clone de chardonnay 1066, agréé en France, comme recherché en Bourgogne pour ce caractère. En Margaret River (Australie), le clone Gingin, sujet au millerandage, est réputé pour ses vins de qualité.",
    mnemo: "Poule et poussins dans la même grappe : les poussins apportent la concentration.",
    flash: { q: "Quel surnom anglais désigne une grappe millerandée ?", a: "« Hen and chicks » (poule et poussins)." },
    qcm: { q: "Quel clone de chardonnay, sujet au millerandage, est emblématique de Margaret River ?", opts: ["Gingin", "Dijon 76", "Dijon 95", "Wente"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les baies millerandées sont de petites baies mal fécondées, souvent sans pépins.", answer: true } },
      { type: "odd_one_out", prompt: "Lequel n’est pas un effet attribué au millerandage ?", payload: { options: ["Concentration de la couleur", "Grappes plus aérées", "Rendement plus faible", "Baies plus juteuses"], answer: 3 }, explanation: "Les baies millerandées sont au contraire peu juteuses." }
    ],
    status: "needs_review",
    to_check: ["Clone 1066 : bien agréé en France (liste FranceAgriMer, mars 2026) ; petites baies et faible rendement confirmés (AWRI, essai EIT Hawke’s Bay), le terme « millerandé » ne figure que chez AWRI.", "Millerandage des millésimes 1978 et 1995 chez Jayer : non confirmé."],
    src: "Mille Vignes, P. Lepeltier, p. 47 ; Wine Anorak, Gingin and Mendoza (2024) ; Margaret River Wine, Clone Wars ; Christie’s, Henri Jayer ; FranceAgriMer, liste des clones de vigne agréés (mars 2026)",
    page: 47
  },
  {
    id: 66,
    theme: "Cépages",
    sous: ["Ampélographie"],
    niveau: "Pointu",
    geo: null,
    titre: "Raisins sans pépins : deux mécanismes",
    synth: "Une baie complète, dite pyrène, porte deux à quatre pépins. L’apyrénie a deux origines. Dans la sténospermocarpie (type sultanine, ou Thompson seedless), la fécondation a lieu mais les graines avortent : il reste des traces de pépins. Dans la parthénocarpie (type corinthe noir), le fruit se forme sans fécondation et sans pépins ; les baies sont petites. Les baies millerandées sont, elles, un accident de fécondation.",
    mnemo: "Sultanine = Sténo (« s » + « s ») : des pépins avortés ; Corinthe = Pas de père (parthénocarpie).",
    flash: { q: "Quel mécanisme explique l’apyrénie de la sultanine ?", a: "La sténospermocarpie : fécondation, puis avortement des graines (traces de pépins)." },
    qcm: { q: "Une baie pyrène est une baie…", opts: ["Sans pépins", "Avec deux à quatre pépins", "Millerandée", "Teinturière"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque type de baie à son exemple.", payload: { pairs: [["Apyrène sténospermocarpique", "Sultanine"], ["Apyrène parthénocarpique", "Corinthe noir"], ["Pyrène", "Raisin de cuve classique"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Dans la parthénocarpie, le fruit se développe sans fécondation.", answer: true } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 45 ; Seedlessness in Grapes (ResearchGate) ; Costantini et al., BMC Plant Biology, 2021 ; Journal of Experimental Botany, 2016",
    page: 45
  },
  {
    id: 67,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les trois phases de la baie",
    synth: "La baie se développe en trois temps. 1) Croissance herbacée, de la nouaison à la véraison : baies dures et vertes, qui font de la photosynthèse et accumulent les acides (malique, tartrique). 2) Maturation, de la véraison à la maturité : elles grossissent, s’assouplissent, se colorent et stockent ; sucres, pigments et tanins s’élaborent. 3) Maturité puis surmaturité : la baie porte ses caractères variétaux ; laissée sur pied, elle se concentre (passerillage, pourriture noble par Botrytis cinerea).",
    mnemo: "Vert-acide → coloré-sucré → concentré : le raisin passe de citron à confiture.",
    flash: { q: "Quand la baie accumule-t-elle surtout ses acides ?", a: "Pendant la croissance herbacée, avant la véraison." },
    qcm: { q: "Quel champignon provoque la pourriture noble ?", opts: ["Botrytis cinerea", "Plasmopara viticola", "Erysiphe necator", "Guignardia bidwellii"], good: 0 },
    exos: [
      { type: "ordering", prompt: "Remets ces étapes de la vie de la baie dans l’ordre.", payload: { items: ["Croissance herbacée", "Véraison", "Maturation", "Maturité", "Surmaturité"] } },
      { type: "mcq_single", prompt: "Pendant la croissance herbacée, la baie se comporte comme…", payload: { options: ["Un organe chlorophyllien", "Un organe de réserve", "Une racine", "Un bourgeon dormant"], answer: 0 } }
    ],
    status: "needs_review",
    to_check: ["Teneur en sucre « de 1 à 20 % en quarante jours » (Lepeltier) : non recoupée, retirée de la synthèse."],
    src: "Mille Vignes, P. Lepeltier, p. 46",
    page: 46
  },
  {
    id: 68,
    theme: "Cépages",
    sous: ["Ampélographie"],
    niveau: "Pointu",
    geo: null,
    titre: "Forme et couleur des baies",
    synth: "La forme et la grosseur des baies sont des repères ampélographiques codés par l’OIV (descripteur 223 pour la forme de la baie, 208 pour la forme de la grappe). La couleur dépend de deux gènes voisins, VvMybA1 et VvMybA2, qui commandent la synthèse des anthocyanes dans la pellicule : les cépages blancs portent les deux gènes inactivés (un rétrotransposon, Gret1, bloque VvMybA1). Gris et roses résultent de mutations partielles. Les teinturiers, rares, ont aussi la pulpe colorée ; le pinot, très instable, existe en blanc, gris, noir ou teinturier.",
    mnemo: "Deux interrupteurs de couleur : les deux éteints = raisin blanc.",
    flash: { q: "Pourquoi un cépage est-il blanc ?", a: "Ses gènes de couleur VvMybA1 et VvMybA2 sont inactifs : pas d’anthocyanes dans la pellicule." },
    qcm: { q: "Qu’a de particulier un cépage teinturier ?", opts: ["Une pellicule blanche", "Une pulpe colorée", "Pas de pépins", "Des feuilles rouges toute l’année"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Chez la plupart des cépages noirs, le jus de la pulpe est incolore.", answer: true }, explanation: "La couleur vient de la pellicule, d’où les blancs de noirs." },
      { type: "short_answer", prompt: "Quelle famille de pigments donne la couleur rouge de la pellicule ?", payload: { accepted: ["anthocyanes", "les anthocyanes", "anthocyane"] } },
      { type: "matching", prompt: "Associe chaque descripteur OIV à son objet.", payload: { pairs: [["OIV 223", "Forme de la baie"], ["OIV 208", "Forme de la grappe"]] } }
    ],
    status: "needs_review",
    to_check: ["Nombre de formes de baies reconnues par l’OIV (10 selon Lepeltier) : non confirmé.", "Liste des pinots de Pierre Galet : non vérifiée."],
    src: "Mille Vignes, P. Lepeltier, p. 46-47 ; OIV, Liste des descripteurs, 3e éd. ; PMC6902604 ; Genes 11(8):891 (2020)",
    page: 46
  },
  {
    id: 69,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "Ce que la baie donne au vin : pellicule, pulpe, pépins",
    synth: "La baie compte trois couches : la pellicule (épicarpe), la pulpe (mésocarpe) et une fine paroi interne contre les pépins (endocarpe). La pellicule, couverte de pruine cireuse qui porte levures et bactéries, renferme arômes, précurseurs, tanins et pigments : d’où l’importance de la macération. La pulpe apporte eau, sucres et acides ; chez le raisin de cuve, elle est surtout du jus. Le pépin (embryon, albumen huileux, téguments durs) libère des tanins parfois astringents : on le goûte à la vendange pour juger la maturité.",
    mnemo: "Peau = parfum et couleur ; pulpe = sucre et acide ; pépin = tanin (et huile à ne pas extraire).",
    flash: { q: "Comment s’appelle la couche cireuse qui recouvre la pellicule ?", a: "La pruine." },
    qcm: { q: "Où se concentrent surtout les arômes et les pigments de la baie ?", opts: ["Dans la pulpe", "Dans la pellicule", "Dans le pépin", "Dans la rafle"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque couche à son nom savant.", payload: { pairs: [["Pellicule", "Épicarpe"], ["Pulpe", "Mésocarpe"], ["Paroi autour des pépins", "Endocarpe"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "On évite d’écraser les pépins car leur huile et leurs tanins peuvent altérer le vin.", answer: true } },
      { type: "odd_one_out", prompt: "Lequel ne fait pas partie du pépin ?", payload: { options: ["Embryon", "Albumen", "Téguments", "Pruine"], answer: 3 }, explanation: "La pruine recouvre la pellicule." }
    ],
    status: "needs_review",
    to_check: ["Anatomie de la baie et du pépin : non recoupée par deux sources lors de la recherche du lot."],
    src: "Mille Vignes, P. Lepeltier, p. 47-48",
    page: 47
  },
  {
    id: 70,
    theme: "Cépages",
    sous: ["Ampélographie"],
    niveau: "Fondamental",
    geo: null,
    titre: "La grappe et sa rafle",
    synth: "La grappe est l’inflorescence fécondée. Ses baies sont nourries par la rafle, charpente de fibres et de tanins qui reste verte ou se lignifie à maturité ; longtemps écartée, elle est aujourd’hui réutilisée en vinification (vendange entière). Forme (cylindrique, conique, ailée…) et compacité de la grappe servent à l’ampélographe. Dressée en fleur, la grappe pend une fois nouée, protégée du soleil par le feuillage ; serrée, elle est plus exposée à la pourriture.",
    mnemo: "La rafle est l’arbre de la grappe : tronc, branches, et les baies au bout.",
    flash: { q: "Qu’est-ce que la rafle ?", a: "La charpente ligneuse ou herbacée de la grappe, qui porte et nourrit les baies." },
    qcm: { q: "Garder les rafles en cuve s’appelle travailler en…", opts: ["Vendange entière", "Saignée", "Thermovinification", "Pressurage direct"], good: 0 },
    exos: [
      { type: "mcq_multi", prompt: "Quels critères l’ampélographe note-t-il sur une grappe ?", payload: { options: ["Sa forme", "Sa compacité", "Sa longueur", "Le nom du vigneron"], answers: [0, 1, 2] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Une grappe compacte est plus exposée à la pourriture qu’une grappe lâche.", answer: true } }
    ],
    status: "needs_review",
    to_check: ["Poids et longueur de grappes cités par Lepeltier (de 5 à 50 cm, 100 à 500 g, plus d’1 kg pour muscat d’Alexandrie ou ugni blanc) : non vérifiés, retirés."],
    src: "Mille Vignes, P. Lepeltier, p. 48 ; OIV, descripteur 208",
    page: 48
  },
  {
    id: 71,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Une très vieille pratique : l’histoire de la greffe",
    synth: "La greffe n’est pas née avec le phylloxéra : les Grecs (Théophraste) notaient déjà qu’elle réussit entre plantes botaniquement proches, et les agronomes romains (Columelle, Pline l’Ancien, puis Palladius) en décrivent le choix du bourgeon, le sol et le climat. Au Moyen Âge, l’agronome andalou Ibn al-’Awwâm, à Séville, compile ce savoir dans son Livre de l’agriculture, vers la fin du XIIe siècle (Lepeltier le place au XIe). Avant 1863, on greffait surtout pour rajeunir une vigne ou changer de cépage.",
    mnemo: "Grecs, Romains, Andalous : la greffe a 2 000 ans d’avance sur le phylloxéra.",
    flash: { q: "Quel agronome andalou a compilé le savoir médiéval sur la greffe ?", a: "Ibn al-’Awwâm (Séville, fin du XIIe siècle), dans son Livre de l’agriculture." },
    qcm: { q: "Selon les sources consultées, Ibn al-’Awwâm a écrit vers…", opts: ["Le IVe siècle av. J.-C.", "La fin du XIIe siècle", "Le XVIe siècle", "1868"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Ibn al-’Awwâm a écrit au XIe siècle, comme l’indique Lepeltier.", answer: false }, explanation: "Les sources le situent plutôt à la fin du XIIe siècle." },
      { type: "ordering", prompt: "Remets ces auteurs dans l’ordre chronologique.", payload: { items: ["Théophraste", "Columelle", "Palladius", "Ibn al-’Awwâm"] } }
    ],
    status: "needs_review",
    to_check: ["Ibn al-’Awwâm fin XIIe s. : une seule source (filaha.org).", "Théophraste, Columelle, Pline, Palladius sur la greffe : non recoupé."],
    src: "Mille Vignes, P. Lepeltier, p. 49 ; filaha.org, Ibn al-Awwam",
    page: 49
  },
  {
    id: 72,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le point de greffe et l’affinité porte-greffe / greffon",
    synth: "Greffer, c’est mettre en contact les tissus conducteurs (cambium) du porte-greffe et du greffon pour qu’ils se soudent : au point de greffe se forme un cal, le bourrelet de soudure, où xylème et phloème se reconnectent. Toutes les combinaisons ne prennent pas : plus les plantes sont éloignées, plus c’est difficile (Vitis sur Muscadinia réussit mal). Le bourrelet freine et filtre les flux de sève ; la vigne greffée est un être nouveau, qualifié de « chimère » par Jean Branas et de « plante artificielle » (Nathalie Ollat, citée par Lepeltier). Le porte-greffe peut faire varier fortement la vigueur d’un même greffon.",
    mnemo: "Le bourrelet est une douane : il laisse passer la sève, mais contrôle et ralentit.",
    flash: { q: "Comment s’appelle la zone de soudure entre porte-greffe et greffon ?", a: "Le bourrelet de soudure (point de greffe), où se forme un cal." },
    qcm: { q: "Qu’est-ce qui détermine le mieux la réussite d’une greffe ?", opts: ["La couleur des raisins", "La proximité botanique et le contact des tissus conducteurs", "La date de vendange", "Le type de bouchon"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Un chardonnay greffé sur une vigne américaine prend son goût foxé.", answer: false }, explanation: "La greffe ne transmet pas les caractères variétaux du porte-greffe au greffon." },
      { type: "mcq_multi", prompt: "Sur quoi le porte-greffe influe-t-il ?", payload: { options: ["La vigueur", "L’absorption de l’eau et des minéraux", "La résistance au phylloxéra des racines", "La couleur génétique du raisin"], answers: [0, 1, 2] } }
    ],
    status: "needs_review",
    to_check: ["Expressions « chimère » (Branas) et « plante artificielle » (Ollat) : attribution non retrouvée dans les sources consultées."],
    src: "Mille Vignes, P. Lepeltier, p. 49-50 et 54 ; INRAE, Nathalie Ollat, Tomorrow’s inventive vines",
    page: 49
  },
  {
    id: 73,
    theme: "Histoire",
    sous: ["Moderne"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Provence", appel: null },
    titre: "La découverte du phylloxéra (1868)",
    synth: "Les premiers dépérissements apparaissent en France vers 1863 (Gard). Le 15 juillet 1868, Jules-Émile Planchon, Gaston Bazille et Félix Sahut découvrent un puceron sur les racines de vignes mourantes en Provence ; Planchon le nomme Rhizaphis vastatrix, puis Phylloxera vastatrix. L’Américain Riley confirme qu’il s’agit de l’insecte décrit en 1855 par Asa Fitch (Pemphigus vitifoliae). Son nom valide est aujourd’hui Daktulosphaira vitifoliae. Lepeltier attribue le nom vastatrix à Victor Signoret : celui-ci a surtout rattaché l’insecte au genre Phylloxera.",
    mnemo: "1868, l’année où trois Montpelliérains ont regardé sous la vigne.",
    flash: { q: "Qui identifie le phylloxéra sur des racines en 1868 ?", a: "Planchon, Bazille et Sahut (15 juillet 1868)." },
    qcm: { q: "Quel est le nom scientifique valide du phylloxéra aujourd’hui ?", opts: ["Phylloxera vastatrix", "Daktulosphaira vitifoliae", "Plasmopara viticola", "Rhizaphis vastatrix"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets ces noms dans l’ordre où ils ont servi de nom de référence pour l’insecte.", payload: { items: ["Pemphigus vitifoliae (Fitch)", "Rhizaphis vastatrix (Planchon)", "Phylloxera vastatrix", "Daktulosphaira vitifoliae (nom valide actuel)"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Victor Signoret a créé l’espèce Phylloxera vastatrix.", answer: false }, explanation: "Signoret a rattaché l’insecte au genre Phylloxera ; l’espèce vastatrix vient de Planchon." },
      { type: "short_answer", prompt: "En quelle année le phylloxéra est-il identifié en France ?", payload: { accepted: ["1868"] } }
    ],
    status: "needs_review",
    to_check: ["Lieu de la découverte : Saint-Rémy-de-Provence (château de Lagoy) ou Saint-Martin-de-Crau selon les sources.", "Premiers symptômes dans le Gard en 1863 : confirmé par INRAE ; localité de Pujaut : une seule source.", "Daktulosphaira vitifoliae « nom officiel depuis 1974 » : correspond à Russell (1974/1975), une seule source."],
    src: "Mille Vignes, P. Lepeltier, p. 50 ; Legros, Étude et Gestion des Sols 12(2) ; PMC5126539 (catalogue des Phylloxeridae) ; INRAE, Delmotte et al., Invasions et vigne (HAL)",
    page: 50
  },
  {
    id: 74,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le cycle du phylloxéra",
    synth: "Le phylloxéra alterne reproduction sexuée et parthénogenèse (femelles pondant sans fécondation). Un œuf d’hiver éclot au printemps en femelle qui pique les jeunes feuilles et forme des galles (forme gallicole) ; ses descendantes gagnent les racines (forme radicicole). Sur les radicelles, les piqûres causent des nodosités ; sur les racines plus âgées, des tubérosités, mortelles pour V. vinifera car elles nécrosent et s’infectent. Des femelles ailées dispersent l’insecte. Les vignes américaines souffrent surtout des galles foliaires, V. vinifera de la forme racinaire ; les sols sableux, qui empêchent le puceron de circuler, le freinent.",
    mnemo: "Galles en haut chez l’Américaine, tubérosités en bas chez l’Européenne.",
    flash: { q: "Quelle forme du phylloxéra tue V. vinifera ?", a: "La forme radicicole (sur les racines), qui cause des tubérosités nécrosées." },
    qcm: { q: "Pourquoi les sols sableux protègent-ils du phylloxéra ?", opts: ["Ils sont trop acides", "Le puceron ne peut pas circuler entre les grains jusqu’aux racines", "Ils contiennent du soufre", "Les vignes y sont toujours greffées"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque lésion à son organe.", payload: { pairs: [["Galles", "Feuilles"], ["Nodosités", "Radicelles"], ["Tubérosités", "Racines âgées"]] } },
      { type: "ordering", prompt: "Remets le cycle dans l’ordre en partant de l’œuf.", payload: { items: ["Œuf d’hiver sous l’écorce", "Femelle aptère sur jeunes feuilles (galles)", "Générations parthénogénétiques, descente aux racines", "Femelles ailées qui dispersent l’insecte", "Mâles et femelles sexués, ponte d’un nouvel œuf d’hiver"] } },
      { type: "short_answer", prompt: "Comment appelle-t-on la reproduction d’une femelle sans fécondation ?", payload: { accepted: ["parthénogenèse", "parthenogenese", "la parthénogenèse"] } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 50-53 ; Wine with Seth, Phylloxera ; Wikipédia, Great French Wine Blight",
    page: 50
  },
  {
    id: 75,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les vignobles épargnés et les vieilles vignes franches de pied",
    synth: "Quelques vignobles isolés ou aux sols défavorables au puceron ont gardé des vignes non greffées : une grande partie du Chili, l’Australie-Méridionale (Barossa), des îles (Santorin…). En Barossa, la charte des vieilles vignes (2009) classe les ceps en old vines (35 ans et plus), survivors (70 ans et plus ; Lepeltier écrit 60), centenarians (100 ans et plus) et ancestors (125 ans et plus). On y désinfecte les semelles des visiteurs : le phylloxéra voyage aussi par la terre collée aux chaussures.",
    mnemo: "Barossa compte en 35, 70, 100, 125 : vieille, survivante, centenaire, ancêtre.",
    flash: { q: "À partir de quel âge un cep est-il « survivor » dans la charte de Barossa ?", a: "70 ans (et non 60 comme l’écrit Lepeltier)." },
    qcm: { q: "Quelle catégorie de la charte de Barossa désigne les ceps de 125 ans et plus ?", opts: ["Old vine", "Survivor", "Centenarian", "Ancestor"], good: 3 },
    exos: [
      { type: "ordering", prompt: "Range les catégories de Barossa de la plus jeune à la plus ancienne.", payload: { items: ["Old vine (35 ans)", "Survivor (70 ans)", "Centenarian (100 ans)", "Ancestor (125 ans)"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le Chili a une grande partie de son vignoble franc de pied.", answer: true } }
    ],
    status: "needs_review",
    to_check: ["Autres zones citées par Lepeltier (Washington, Chypre, Canaries, Moselle) : non vérifiées.", "Plantation de Hill of Grace vers 1860 (Lepeltier : 1868) : une seule source."],
    src: "Mille Vignes, P. Lepeltier, p. 51 et 54 ; Barossa Old Vine Charter (barossa.com) ; Wikipédia, Great French Wine Blight",
    page: 51
  },
  {
    id: 76,
    theme: "Histoire",
    sous: ["Moderne"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Lutter contre le phylloxéra : chimistes contre américanistes",
    synth: "Face au puceron, plusieurs remèdes sont testés : submersion hivernale des vignes, plantation dans les sables, injection de sulfure de carbone au pal ou de sulfocarbonate de potassium. Efficaces localement mais coûteux, ils sont supplantés par la greffe sur porte-greffes américains, défendue par l’école de Montpellier (les « américanistes ») contre les « sulfuristes », attachés aux vignes franches de pied. En 1908, le botaniste rennais Lucien Daniel publie un rapport critique : selon lui, la greffe modifie la physiologie et la qualité du vin. La greffe l’emporte néanmoins.",
    mnemo: "Eau, sable, poison ou greffe : seule la greffe passe à l’échelle.",
    flash: { q: "Comment s’appelaient les partisans de la greffe sur plants américains ?", a: "Les américanistes (face aux sulfuristes, ou chimistes)." },
    qcm: { q: "Quel produit était injecté au pied des ceps contre le phylloxéra ?", opts: ["Bouillie bordelaise", "Sulfure de carbone", "Arsénite de sodium", "Soufre mouillable"], good: 1 },
    exos: [
      { type: "mcq_multi", prompt: "Quels remèdes ont été tentés avant la généralisation de la greffe ?", payload: { options: ["Submersion des vignes", "Plantation dans les sables", "Sulfure de carbone", "Vaccination des ceps"], answers: [0, 1, 2] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Lucien Daniel jugeait que la greffe conservait intégralement les caractères des vignes françaises.", answer: false }, explanation: "Il contestait cette thèse des américanistes et demandait plus d’expérimentation." }
    ],
    status: "needs_review",
    to_check: ["Rôle de Laliman (greffe dès 1869, forme gallicole) et de Pulliat : non vérifié.", "Lucien Daniel (1856-1940), rapport de 1908 : une seule source (Wikipédia).", "« Greffe sur 0,5 % des surfaces en 1863 » (Lepeltier) : aucune source, retiré."],
    src: "Mille Vignes, P. Lepeltier, p. 51-52 ; Legros, Étude et Gestion des Sols 12(2) ; Wikipédia, Lucien Daniel",
    page: 51
  },
  {
    id: 77,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Loire", appel: "Montlouis-sur-Loire" },
    titre: "Franc de pied ou greffé : l’expérience Chidaine",
    synth: "À Montlouis-sur-Loire, François Chidaine plante à partir de 1998, avec des sélections massales du domaine, sa parcelle des Bournais (3,99 ha, exposée au nord, argilo-calcaire sur tuffeau) : un demi-hectare y est en franc de pied, à côté du chenin greffé, ce qui permet de comparer les deux. D’après Lepeltier, les francs de pied y sont moins vigoureux, moins sensibles aux maladies, produisent moins avec de petites baies et donnent des vins plus tendus, moins alcooleux ; le porte-greffe lisse l’effet millésime et augmente le rendement. Le franc de pied est vinifié à part depuis 2007 et mis en bouteille séparément certains millésimes. Une association européenne de vignerons francs de pied réunit, autour de Loïc Pasquet (Liber Pater ; Lepeltier écrit « Paquet »), des domaines comme Egon Müller ou Chartogne-Taillet.",
    mnemo: "Même âge, même bois, deux destins : le franc de pied, c’est la vigne au régime.",
    flash: { q: "Quel vigneron (Liber Pater) est au cœur de l’association européenne des vignerons francs de pied ?", a: "Loïc Pasquet (Lepeltier écrit « Paquet »)." },
    qcm: { q: "Dans la comparaison de Chidaine, les francs de pied…", opts: ["Sont plus vigoureux", "Produisent moins, avec de plus petites baies", "Sont plus sensibles aux maladies", "Donnent des vins plus alcooleux"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Lepeltier, le porte-greffe tend à lisser l’effet millésime.", answer: true } },
      { type: "mcq_single", prompt: "Quelle part des Bournais (3,99 ha) est plantée en franc de pied ?", payload: { options: ["Environ un demi-hectare", "La moitié de la parcelle", "La totalité", "Aucune : la parcelle est entièrement greffée"], answer: 0 }, explanation: "Un demi-hectare, vinifié à part depuis 2007 (La RVF)." },
      { type: "short_answer", prompt: "Quel cépage est planté franc de pied aux Bournais ?", payload: { accepted: ["chenin", "chenin blanc", "le chenin"] } }
    ],
    status: "needs_review",
    to_check: ["Porte-greffe riparia gloire et rendements de 10-15 hl/ha : non confirmés.", "Année de fondation de l’association (2021 selon Lepeltier) : non confirmée."],
    src: "Mille Vignes, P. Lepeltier, p. 52 ; La Revue du vin de France, Verticale du montlouis Les Bournais ; Wine Berserkers (extrait du site du domaine Chidaine) ; Vert de Vin, association Francs de Pied",
    page: 52
  },
  {
    id: 78,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Le calcaire, la chlorose et la quête de V. berlandieri",
    synth: "Les premiers porte-greffes, V. riparia et V. rupestris purs, venaient de sols nord-américains plutôt acides ; plantés sur les sols calcaires de Champagne, Bourgogne ou Charentes, ils provoquent une chlorose ferrique (jaunissement des feuilles par mauvaise absorption du fer). V. berlandieri, vigne texane des sols calcaires, est déjà à l’essai à Montpellier quand, en 1887, Pierre Viala part en mission aux États-Unis chercher des vignes tolérantes au calcaire. Elle supporte le calcaire mais se greffe et s’enracine mal : croisée avec le chasselas par Millardet et de Grasset (en 1882), elle donne le 41 B, porte-greffe qui sauve Cognac et la Champagne, où il couvre encore plus de 80 % du vignoble.",
    mnemo: "Berlandieri, la Texane du calcaire : têtue à la greffe, mais elle a sauvé la Champagne avec le 41 B.",
    flash: { q: "Quel porte-greffe, issu de chasselas × berlandieri, domine en Champagne ?", a: "Le 41 B (Millardet et de Grasset)." },
    qcm: { q: "Quelle mission part en Amérique chercher des vignes tolérantes au calcaire, et quand ?", opts: ["Planchon, 1868", "Pierre Viala, 1887", "Millardet, 1885", "Ganzin, 1879"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La mission de Pierre Viala aux États-Unis date de 1888, comme l’écrit Lepeltier.", answer: false }, explanation: "Arrêté du 16 mars 1887, arrivée à New York le 5 juin 1887 (INRAE)." },
      { type: "short_answer", prompt: "Comment s’appelle le jaunissement des feuilles lié au calcaire actif ?", payload: { accepted: ["chlorose", "chlorose ferrique", "la chlorose ferrique"] } },
      { type: "matching", prompt: "Associe chaque espèce à son point faible.", payload: { pairs: [["V. riparia", "Craint le calcaire, aime les sols riches et frais"], ["V. berlandieri", "Supporte le calcaire mais se greffe mal"]] } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 55 ; INRAE Agate, 1887 viticultural mission to America ; Legros, Étude et Gestion des Sols 12(2) ; Decanter, Vine rootstocks ; Plantgrape, fiche 41 B ; Comité Champagne, Viticulture et biodiversité ; UMC, La multiplication de la vigne",
    page: 55
  },
  {
    id: 79,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "Les principaux porte-greffes et leurs parents",
    synth: "La plupart des porte-greffes actuels ont été créés entre 1869 et 1902, en croisant trois espèces américaines : V. riparia, V. rupestris et V. berlandieri (parfois avec V. vinifera). Exemples : 3309 C et 101-14 (riparia × rupestris), SO4 et 161-49 (berlandieri × riparia), 110 R, 140 Ru et 1103 P (berlandieri × rupestris), 41 B (berlandieri × chasselas). Deux exceptions récentes, de l’INRA : le fercal (1959) et le gravesac (1962). Le catalogue officiel compte 31 porte-greffes inscrits (liste A, 2026), comme l’indique Lepeltier. En 2025, six porte-greffes couvrent environ 70 % des 2 045 ha de vignes mères françaises : 110 R, SO4, fercal, 3309 C, 140 Ru et 41 B (FranceAgriMer) ; Lepeltier cite le gravesac à la place du 41 B parmi les six dominants. Pour Lepeltier, le porte-greffe a permis de descendre des coteaux vers les plaines et de produire davantage.",
    mnemo: "Trois mères américaines : Riparia la riveraine, Rupestris la rocheuse, Berlandieri la calcaire.",
    flash: { q: "Quelles trois espèces américaines sont à l’origine de la plupart des porte-greffes ?", a: "V. riparia, V. rupestris et V. berlandieri." },
    qcm: { q: "Lequel de ces porte-greffes est une création de l’INRA des années 1950-1960 ?", opts: ["3309 C", "Fercal", "41 B", "1103 P"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque porte-greffe à ses parents.", payload: { pairs: [["3309 C", "Riparia × rupestris"], ["SO4", "Berlandieri × riparia"], ["110 R", "Berlandieri × rupestris"], ["41 B", "Chasselas × berlandieri"]] } },
      { type: "odd_one_out", prompt: "Lequel n’est pas une espèce parente des porte-greffes classiques ?", payload: { options: ["V. riparia", "V. rupestris", "V. berlandieri", "V. sylvestris"], answer: 3 }, explanation: "V. sylvestris est la vigne sauvage européenne, sensible au phylloxéra." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le gravesac (1962) est issu du croisement 161-49 C × 3309 C.", answer: true } },
      { type: "mcq_single", prompt: "Quel porte-greffe occupe la plus grande surface de vignes mères en France en 2025 ?", payload: { options: ["110 Richter", "41 B", "Gravesac", "101-14 MGt"], answer: 0 }, explanation: "110 R : 359,6 ha, devant le SO4 (335,4 ha) (FranceAgriMer, 2025)." }
    ],
    status: "needs_review",
    to_check: ["Dates de création des porte-greffes : une seule source par porte-greffe (Plantgrape) : 3309 C 1881, 101-14 et 41 B 1882, 140 Ru 1894, 110 R 1902, SO4 sélectionné en 1919 dans des croisements de Teleki de 1896."],
    src: "Mille Vignes, P. Lepeltier, p. 55-56 ; Plantgrape (Pl@ntNet/IFV), fiches Gravesac et Fercal ; Decanter, Vine rootstocks ; FranceAgriMer, Les chiffres de la pépinière viticole 2025 ; FranceAgriMer, Catalogue officiel, liste A (sept. 2026)",
    page: 55
  },
  {
    id: 80,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Pointu",
    geo: null,
    titre: "Un pool génétique trop étroit : la leçon de l’AxR1",
    synth: "Presque tous les porte-greffes reposent sur trois espèces, et souvent sur quelques individus seulement : une base génétique étroite qui expose tout le vignoble aux mêmes parasites. L’AxR1 (aramon × rupestris, de Ganzin) l’illustre : planté en masse en Californie, il est attaqué par un biotype de phylloxéra repéré à Napa en 1982, ce qui impose de replanter des dizaines de milliers d’acres. La recherche cherche donc de nouveaux porte-greffes tolérants à la sécheresse, aux nématodes ou au sel.",
    mnemo: "AxR1 : un porte-greffe à moitié vinifera n’est qu’à moitié protégé.",
    flash: { q: "Pourquoi l’AxR1 a-t-il échoué en Californie ?", a: "En partie vinifera (aramon), il n’était pas assez résistant : un biotype de phylloxéra l’a attaqué dans les années 1980." },
    qcm: { q: "L’AxR1 est un croisement…", opts: ["Riparia × berlandieri", "Aramon × rupestris", "Chasselas × berlandieri", "Rupestris × cordifolia"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Un porte-greffe en partie issu de V. vinifera peut rester sensible au phylloxéra.", answer: true } },
      { type: "mcq_multi", prompt: "Sur quelles contraintes travaillent les nouveaux porte-greffes ?", payload: { options: ["Sécheresse", "Nématodes", "Salinité", "Couleur des baies"], answers: [0, 1, 2] } }
    ],
    status: "needs_review",
    to_check: ["Origine de 99 % des porte-greffes dans trois clones (Andrew Walker, UC Davis) : introuvable dans les publications UC Davis et CDFA consultées.", "AxR1 obtenu par Ganzin en 1879 : une seule source (Wein.plus).", "Échec de l’AxR1 en Californie (biotype B détecté à Napa en 1982, recommandation retirée en 1989) : sources de presse seulement, cause débattue."],
    src: "Mille Vignes, P. Lepeltier, p. 55-56 ; Wine with Seth, Phylloxera and Napa Valley replanting ; Decanter, Vine rootstocks",
    page: 55
  },
  {
    id: 81,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Greffage, surgreffage, regreffage ; sur place ou sur table",
    synth: "Le greffage est la greffe initiale d’un greffon sur un porte-greffe. Le surgreffage change de cépage sur une vigne en place, sans arracher. Le regreffage repart sous le point de greffe, sur le porte-greffe, pour sauver un cep dépérissant. La greffe se fait soit en place, au vignoble, sur un porte-greffe déjà enraciné (main-d’œuvre qualifiée, peu mécanisable), soit sur table en pépinière, qui produit des greffés-soudés prêts à planter : c’est l’écrasante majorité des plantations actuelles.",
    mnemo: "Greffer = naître ; surgreffer = changer de tête ; regreffer = repartir des racines.",
    flash: { q: "Qu’est-ce que le surgreffage ?", a: "Greffer un nouveau cépage sur une vigne en place, sans l’arracher." },
    qcm: { q: "Le regreffage consiste à…", opts: ["Greffer au-dessus du greffon", "Greffer de nouveau sous le point de greffe, sur le porte-greffe", "Bouturer le greffon", "Greffer deux cépages sur le même bras"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque opération à son but.", payload: { pairs: [["Greffage", "Créer un nouveau plant"], ["Surgreffage", "Changer de cépage sans arracher"], ["Regreffage", "Sauver un cep dont le greffon dépérit"]] } },
      { type: "mcq_single", prompt: "Qu’appelle-t-on un greffé-soudé ?", payload: { options: ["Une vigne greffée en place au vignoble", "Un plant greffé sur table en pépinière, prêt à planter", "Une vigne franche de pied", "Un porte-greffe sans greffon"], answer: 1 } }
    ],
    status: "needs_review",
    to_check: ["Invention du greffage sur table en 1878 (Lepeltier) : non sourcée.", "Regreffage sous le point de soudure : une seule source."],
    src: "Mille Vignes, P. Lepeltier, p. 57 ; Triple Performance, Le surgreffage de la vigne ; Vitigreffe",
    page: 57
  },
  {
    id: 82,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Les techniques de greffe : fente, anglaise, oméga, écusson",
    synth: "La greffe en fente insère un greffon taillé en biseau dans le porte-greffe fendu ; manuelle, elle se pratique en place ou sur table. L’anglaise assemble deux coupes biseautées de même diamètre. La greffe oméga, mécanique, emboîte un porte-greffe découpé en Ω et un greffon en Ω inversé : selon l’IFV, elle représente environ 95 % des greffés-soudés en France. Ses critiques lui reprochent de couper les vaisseaux en travers des fibres, d’où des nécroses. La greffe en écusson insère un seul œil : en chip-bud, un copeau portant l’œil est plaqué dans une entaille du sujet ; en T-bud, l’écusson est glissé sous l’écorce incisée en T. Peu nécrosante, elle sert au surgreffage.",
    mnemo: "Oméga = Ω = la machine ; fente et écusson = la main.",
    flash: { q: "Quelle technique représente environ 95 % des greffés-soudés en France ?", a: "La greffe oméga (mécanique)." },
    qcm: { q: "Quelle greffe insère un œil dans une incision en T de l’écorce ?", opts: ["Fente", "Oméga", "T-bud (écusson)", "Anglaise"], good: 2 },
    exos: [
      { type: "matching", prompt: "Associe chaque greffe à sa description.", payload: { pairs: [["Fente", "Greffon en biseau dans un porte-greffe fendu"], ["Oméga", "Emboîtement mécanique en Ω"], ["Chip-bud", "Copeau portant un œil, plaqué sur l’écorce"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "On reproche à la greffe oméga de couper les vaisseaux en travers des fibres.", answer: true } }
    ],
    status: "needs_review",
    to_check: ["Machine oméga « inventée en 1975 par le pépiniériste allemand Wagner » (Lepeltier) : non sourcé.", "Chip-bud et T-bud en viticulture : non recoupés."],
    src: "Mille Vignes, P. Lepeltier, p. 57-59 ; IFV, La production de plants de vigne en pépinières ; Groupe Velletaz",
    page: 58
  },
  {
    id: 83,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "L’esca, maladie du bois",
    synth: "Les maladies fongiques du bois sont devenues une cause majeure de mortalité des vignes en France, l’esca en tête. Elle prend une forme lente (feuilles tigrées, dessèchement progressif sur plusieurs années) et une forme apoplectique (le cep se dessèche brutalement en pleine chaleur). Dans le tronc, des champignons pionniers (Phaeomoniella chlamydospora, Phaeoacremonium) causent des nécroses brunes, puis Fomitiporia mediterranea transforme le bois en amadou, une pourriture blanche. Le seul traitement efficace, l’arsénite de sodium, est interdit depuis novembre 2001 pour sa toxicité.",
    mnemo: "Esca, c’est aussi le nom italien de l’amadou : le bois du cep devient de l’éponge à allumer le feu.",
    flash: { q: "Depuis quand l’arsénite de sodium est-il interdit en France ?", a: "Novembre 2001." },
    qcm: { q: "Comment appelle-t-on la forme brutale de l’esca, où le cep se dessèche en quelques jours ?", opts: ["Forme lente", "Forme apoplectique", "Forme gallicole", "Forme chlorotique"], good: 1 },
    exos: [
      { type: "short_answer", prompt: "Quel nom donne-t-on au bois dégradé en pourriture blanche par l’esca ?", payload: { accepted: ["amadou", "l’amadou", "l'amadou"] } },
      { type: "matching", prompt: "Associe chaque champignon à son rôle.", payload: { pairs: [["Phaeomoniella chlamydospora", "Pionnier des nécroses brunes"], ["Fomitiporia mediterranea", "Amadou (pourriture blanche)"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Il existe aujourd’hui un traitement chimique autorisé aussi efficace que l’arsénite de sodium.", answer: false } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 58 et 61 ; IFV Occitanie, Esca ; INRAE Ephytia, Vigne : principaux symptômes ; Assemblée nationale, question écrite sur l’arsénite de sodium",
    page: 58
  },
  {
    id: 84,
    theme: "Viticulture",
    sous: ["Taille"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Charentes", appel: null },
    titre: "Tailler pour limiter les maladies du bois : Poussard et curetage",
    synth: "Chaque plaie de taille dessèche une partie du bois (cône de dessiccation) et ouvre une porte aux spores. D’où l’intérêt de tailles qui respectent les flux de sève, avec des plaies petites, éloignées du tronc et toujours du même côté. Eugène Poussard, vigneron de Pérignac (Charente), adapte dès 1911 la taille Guyot en ce sens : c’est la taille Guyot-Poussard, remise à l’honneur par François Dal (Sicavac) et les maîtres tailleurs frioulans Simonit & Sirch. Sur un cep atteint, le curetage retire à la scie ou au couteau le bois nécrosé pour prolonger sa vie.",
    mnemo: "Poussard : « ne coupe pas l’autoroute de la sève ».",
    flash: { q: "Qui est à l’origine de la taille Guyot-Poussard ?", a: "Eugène Poussard, vigneron de Pérignac (Charente), dès 1911." },
    qcm: { q: "Qu’est-ce qu’un cône de dessiccation ?", opts: ["Un outil de taille", "La zone de bois mort qui se forme sous une plaie de taille", "Un bourgeon dormant", "Une galle de phylloxéra"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Des plaies de taille petites et éloignées du tronc limitent le bois mort dans la charpente.", answer: true } },
      { type: "short_answer", prompt: "Comment s’appelle l’opération qui retire le bois nécrosé d’un cep atteint d’esca ?", payload: { accepted: ["curetage", "le curetage"] } }
    ],
    status: "needs_review",
    to_check: ["Efficacité du curetage contre l’esca : non vérifiée lors de la recherche.", "Date de 1911 pour la taille de Poussard : une seule source (LBV France ; ailleurs « début du XXe siècle »)."],
    src: "Mille Vignes, P. Lepeltier, p. 58 et 60 ; LBV France, Un siècle d’évolution de la taille ; Anima Vinum (2022) ; Vitisphere, taille Poussard et taille douce",
    page: 58
  },
  {
    id: 85,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "Type de greffe et esca : l’étude de 2017",
    synth: "Une étude publiée dans OENO One en 2017 (équipe de l’ISVV de Bordeaux, avec le greffeur Marc Birebent) a comparé, sur cabernet-sauvignon et mourvèdre, des parcelles greffées en fente, en anglaise et en oméga : les greffes en fente montraient nettement moins de symptômes foliaires d’esca que l’anglaise et l’oméga. Les auteurs signalent toutefois que les parcelles en oméga étaient plus jeunes, ce qui peut biaiser la comparaison.",
    mnemo: "Moins de machine, moins d’esca… à âge égal, reste à confirmer.",
    flash: { q: "Quelle greffe présentait le moins d’esca dans l’étude OENO One 2017 ?", a: "La greffe en fente (manuelle), face à l’anglaise et à l’oméga." },
    qcm: { q: "Quel biais l’étude elle-même signale-t-elle ?", opts: ["Les cépages étaient différents", "Les parcelles en oméga étaient plus jeunes", "Il n’y avait qu’une parcelle", "Les vignes n’étaient pas greffées"], good: 1 },
    exos: [
      { type: "mcq_multi", prompt: "Quels cépages ont été suivis ?", payload: { options: ["Cabernet-sauvignon", "Mourvèdre", "Merlot", "Chardonnay"], answers: [0, 1] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "L’esca existait avant l’invention de la greffe oméga.", answer: true }, explanation: "La greffe n’est qu’un facteur parmi d’autres." }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 61 ; Mary et al., Impact of grafting type on Esca foliar symptoms, OENO One 51(2-3), 2017 ; Réussir Vigne, La greffe au cœur des enjeux",
    page: 61
  },
  {
    id: 86,
    theme: "Cépages",
    sous: ["Profil & usage"],
    niveau: "Pointu",
    geo: { pays: "France", region: "Bordeaux", appel: null },
    titre: "La greffe a-t-elle fait la fortune du merlot ?",
    synth: "Lepeltier rapporte une hypothèse d’Alain Carbonneau : le bourrelet de greffe retient dans la partie aérienne une plus grande part des sucres de la sève élaborée. Le merlot, peu répandu avant le phylloxéra car il nouait mal, en aurait profité pour mieux fructifier et s’étendre dans le Bordelais, tandis que le malbec, sujet à la coulure par excès de vigueur, y aurait reculé. Hypothèse à présenter comme telle : aucune source indépendante n’a été trouvée.",
    mnemo: "Le bourrelet garde le sucre en haut : le merlot en aurait mangé sa part.",
    flash: { q: "Selon l’hypothèse rapportée par Lepeltier, quel cépage aurait profité de la greffe à Bordeaux ?", a: "Le merlot, au détriment du malbec." },
    qcm: { q: "Pourquoi le malbec aurait-il reculé dans le Bordelais ?", opts: ["Il gelait toujours", "Coulure liée à une vigueur excessive", "Interdiction légale", "Il ne se greffait pas"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le rôle de la greffe dans l’essor du merlot est un fait établi par plusieurs études.", answer: false }, explanation: "C’est une hypothèse rapportée par Lepeltier, non confirmée par une source indépendante." },
      { type: "short_answer", prompt: "Quel agronome est à l’origine de cette hypothèse, selon Lepeltier ?", payload: { accepted: ["Alain Carbonneau", "Carbonneau"] } }
    ],
    status: "needs_review",
    to_check: ["Hypothèse d’Alain Carbonneau sur la greffe et l’expansion du merlot : aucune source trouvée hors Lepeltier."],
    src: "Mille Vignes, P. Lepeltier, p. 61",
    page: 61
  },
  {
    id: 87,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "Les stades-repères de Baggiolini (A à P)",
    synth: "Le cycle annuel se repère en stades notés par lettres depuis Baggiolini (1952) : A bourgeon d’hiver, B bourgeon dans le coton, C pointe verte, D sortie des feuilles, E feuilles étalées, F grappes visibles, G grappes séparées, H boutons floraux séparés, I floraison, J nouaison, K petit pois, L fermeture de la grappe, M véraison, N maturité, puis O et P en fin de cycle (Lepeltier : aoûtement et chute des feuilles ; INRAE : début de chute et chute des feuilles). L’échelle internationale BBCH, adoptée dans les années 1990, les traduit en codes chiffrés (C = 07, I = 65, M = 85).",
    mnemo: "A-B-C : le bourgeon s’éveille ; I = « Ici fleurit » ; M = « Mûrir commence » (véraison).",
    flash: { q: "À quel stade Baggiolini correspond la floraison ?", a: "Stade I (BBCH 65)." },
    qcm: { q: "Le stade C, « pointe verte », correspond à…", opts: ["La floraison", "Le débourrement proprement dit", "La véraison", "L’aoûtement"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets ces stades dans l’ordre du cycle.", payload: { items: ["Bourgeon dans le coton (B)", "Pointe verte (C)", "Feuilles étalées (E)", "Boutons floraux séparés (H)", "Floraison (I)", "Nouaison (J)", "Fermeture de la grappe (L)", "Véraison (M)"] } },
      { type: "matching", prompt: "Associe chaque lettre à son stade.", payload: { pairs: [["C", "Pointe verte"], ["I", "Floraison"], ["J", "Nouaison"], ["M", "Véraison"]] } },
      { type: "cloze", prompt: "Complète.", payload: { text: "Au stade {{K}}, les baies ont la taille d’un petit pois." } }
    ],
    schema: {
      svg: "<svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" fill=\"currentColor\"><circle cx=\"150\" cy=\"90\" r=\"70\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.35\" stroke-width=\"2\"/><g font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"middle\"><text x=\"150\" y=\"20\">A</text><text x=\"177\" y=\"25\">B</text><text x=\"200\" y=\"41\">C</text><text x=\"215\" y=\"63\">D</text><text x=\"220\" y=\"90\">E</text><text x=\"215\" y=\"117\">F</text><text x=\"200\" y=\"140\">G</text><text x=\"177\" y=\"155\">H</text><text x=\"150\" y=\"160\">I</text><text x=\"123\" y=\"155\">J</text><text x=\"100\" y=\"140\">K</text><text x=\"85\" y=\"117\">L</text><text x=\"80\" y=\"90\">M</text><text x=\"85\" y=\"63\">N</text><text x=\"100\" y=\"41\">O</text><text x=\"123\" y=\"25\">P</text></g><g font-size=\"9\" text-anchor=\"middle\" opacity=\"0.8\"><text x=\"150\" y=\"62\">hiver → printemps</text><text x=\"150\" y=\"80\">A–C débourrement</text><text x=\"150\" y=\"92\">F–H inflorescences</text><text x=\"150\" y=\"104\">I–L floraison → grappe</text><text x=\"150\" y=\"116\">M–N maturation</text><text x=\"150\" y=\"128\">O–P fin de cycle</text></g></svg>",
      legende: "Les seize stades-repères de la vigne, de A (bourgeon d’hiver) à P (chute des feuilles)",
      src: "D’après Lepeltier, Mille Vignes, p. 62-63 ; stades de Baggiolini (1952), INRAE"
    },
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 62-63 ; INRAE, Méthode d’observation de la vigne (stades-repères de Baggiolini, 1952) ; AWRI, échelle E-L modifiée",
    page: 62
  },
  {
    id: 88,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "La sélection clonale en France",
    synth: "Pour enrayer les viroses comme le court-noué (virus GFLV transmis par le nématode Xiphinema index), l’État crée en 1944 une section de sélection et de contrôle des bois et plants ; la sélection clonale démarre en 1962 avec l’ANTAV, devenue ENTAV puis IFV. Une souche repérée est testée par indexage (greffée sur une variété indicatrice qui révèle les virus), complété par des tests ELISA ou PCR, et son identité est vérifiée par marqueurs ADN. Elle est ensuite suivie au vignoble au moins cinq ans, avec au moins trois années de vinifications, puis agréée après avis de la section vigne du CTPS : une quinzaine d’années en tout. Le conservatoire national est au domaine de l’Espiguette (Le Grau-du-Roi). La liste officielle de mars 2026 recense environ 1 240 clones de 392 variétés (Lepeltier : 1 350 clones de 380 variétés en 2022), dont 48 clones agréés de pinot noir (47 selon Lepeltier), 31 de chardonnay, 8 de riesling et un seul de gringet.",
    mnemo: "Un clone, c’est quinze ans d’examens avant d’avoir son diplôme (l’agrément).",
    flash: { q: "En quelle année la sélection clonale démarre-t-elle en France ?", a: "En 1962 (ANTAV, aujourd’hui IFV)." },
    qcm: { q: "Quel virus a motivé la sélection sanitaire des plants ?", opts: ["Le court-noué (GFLV)", "La flavescence dorée", "Le mildiou", "L’oïdium"], good: 0 },
    exos: [
      { type: "ordering", prompt: "Remets le parcours d’un clone dans l’ordre.", payload: { items: ["Prospection dans les vieilles vignes", "Tests virologiques (ELISA, indexage)", "Suivi agronomique et vinifications", "Agrément après avis du CTPS", "Multiplication et diffusion"] } },
      { type: "mcq_single", prompt: "Pendant combien d’années minimum un clone candidat est-il vinifié avant agrément ?", payload: { options: ["Une", "Trois", "Dix", "Aucune : seule la santé compte"], answer: 1 }, explanation: "Règlement technique : vinifications au moins 3 ans, contrôles au vignoble au moins 5 ans." },
      { type: "mcq_single", prompt: "Combien de temps faut-il, environ, pour agréer un clone ?", payload: { options: ["Un an", "Cinq ans", "Une quinzaine d’années", "Cinquante ans"], answer: 2 } },
      { type: "matching", prompt: "Associe chaque cépage à son nombre de clones agréés (liste de mars 2026).", payload: { pairs: [["Pinot noir", "48"], ["Chardonnay", "31"], ["Riesling", "8"], ["Gringet", "1"]] } },
      { type: "short_answer", prompt: "Sur quel domaine se trouve le conservatoire national de l’IFV ?", payload: { accepted: ["Espiguette", "l’Espiguette", "domaine de l’Espiguette", "l'Espiguette"] } }
    ],
    status: "needs_review",
    to_check: ["Clones 76, 95, 96 = 50 % du chardonnay produit : non confirmé (il faudrait les statistiques de plants par clone de FranceAgriMer)."],
    src: "Mille Vignes, P. Lepeltier, p. 64-65 ; IFV, What is clonal selection ; IFV, plaquette sélection clonale ; IFV, Court-noué ; GEVES, inscription des variétés de vigne ; FranceAgriMer, liste des clones de vigne agréés (mars 2026) ; FranceAgriMer, Règlement technique de sélection clonale (2016) ; IVES/OIV 2024 (Audeguin)",
    page: 64
  },
  {
    id: 89,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Les catégories de plants et le passeport phytosanitaire",
    synth: "La filière distingue le matériel initial (la tête de clone conservée), le matériel de base (prémultiplication) et le matériel certifié, vendu aux viticulteurs sous étiquette bleue ; existe aussi une catégorie standard, à étiquette jaune. Cette étiquette vaut passeport phytosanitaire européen, contrôlé par FranceAgriMer. Pour éliminer le phytoplasme de la flavescence dorée, les bois et plants peuvent passer à l’eau chaude, 45 minutes à 50 °C.",
    mnemo: "Initial → base → certifié : le grand-père, le père, le fils. Bleu = certifié.",
    flash: { q: "Quelle couleur d’étiquette porte un plant certifié ?", a: "Bleue (standard : jaune)." },
    qcm: { q: "Quel traitement élimine la flavescence dorée des bois et plants ?", opts: ["Eau chaude, 45 min à 50 °C", "Soufre", "Bouillie bordelaise", "Froid, −20 °C"], good: 0 },
    exos: [
      { type: "ordering", prompt: "Remets les catégories de matériel dans l’ordre de multiplication.", payload: { items: ["Matériel initial", "Matériel de base", "Matériel certifié"] } },
      { type: "matching", prompt: "Associe chaque catégorie à sa couleur d’étiquette.", payload: { pairs: [["Certifié", "Bleue"], ["Standard", "Jaune"]] } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 65-66 ; FranceAgriMer, Bois et plants de vigne : contrôle et certification ; GEVES, commercialisation des semences et plants ; DRAAF Occitanie, traitement à l’eau chaude",
    page: 65
  },
  {
    id: 90,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Sélection massale contre sélection clonale",
    synth: "Les deux sélections multiplient par voie végétative (bouture, greffe) des souches choisies : toute vigne plantée est donc un clone. La sélection clonale part d’un individu unique, assaini et évalué, diffusé à grande échelle. La sélection massale prélève de nombreux ceps dans de vieilles vignes, pour conserver leur diversité génétique et leur adaptation au lieu ; le vigneron n’en a les droits que pour son propre vignoble, afin de limiter la propagation des maladies. Mais la diversité finale dépend de la variabilité réelle du cépage : peu répandu, il reste génétiquement pauvre.",
    mnemo: "Clonale = un champion photocopié ; massale = une équipe entière.",
    flash: { q: "Quel est le but principal d’une sélection massale ?", a: "Préserver la diversité génétique de vieilles vignes adaptées à leur lieu." },
    qcm: { q: "Une vigne issue de sélection massale est-elle génétiquement un clone ?", opts: ["Non, elle vient de semis", "Oui, chaque plant est multiplié par voie végétative", "Seulement si elle est greffée sur riparia", "Seulement en bio"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Lepeltier, une sélection massale ne peut légalement provenir que du vignoble du vigneron qui la fait.", answer: true } },
      { type: "matching", prompt: "Associe chaque sélection à sa logique.", payload: { pairs: [["Clonale", "Un individu sélectionné, assaini, diffusé largement"], ["Massale", "Une population de ceps, diversité conservée"]] } }
    ],
    status: "needs_review",
    to_check: ["Règle de propriété de la massale (droits limités au vignoble du vigneron) : non vérifiée.", "Interdiction de la sélection massale de porte-greffes depuis 1960 (Lepeltier) : non vérifiée, retirée."],
    src: "Mille Vignes, P. Lepeltier, p. 64-66",
    page: 65
  },
  {
    id: 91,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "Fabriquer un greffé-soudé en pépinière",
    synth: "Le pépiniériste cultive sur parcelles agréées des vignes mères de porte-greffes (2 045 ha en France en 2025, en net recul) et de greffons (1 592 ha en 2025). Les bois prélevés en hiver sont greffés, paraffinés, puis placés en stratification, au chaud et à l’humidité (vers 28 °C, 10 à 25 jours selon l’IFV), jusqu’à formation d’un cal. Les plants passent ensuite une saison en pépinière de plein champ, sont arrachés à l’automne et triés : la soudure doit résister à la pression du pouce.",
    mnemo: "Greffer, cirer, couver, planter, trier : le plant passe un an en nursery.",
    flash: { q: "Qu’est-ce que la stratification d’un greffé-soudé ?", a: "Un séjour au chaud et à l’humidité (vers 28 °C) jusqu’à la formation du cal de soudure." },
    qcm: { q: "Combien de temps dure la stratification selon l’IFV ?", opts: ["Une heure", "10 à 25 jours", "Six mois", "Deux ans"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets les étapes de production dans l’ordre.", payload: { items: ["Prélèvement des bois en hiver", "Greffage et paraffinage", "Stratification au chaud", "Culture en pépinière de plein champ", "Arrachage et tri à l’automne"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les surfaces de vignes mères de porte-greffes varient sensiblement d’une année à l’autre.", answer: true }, explanation: "Environ 2 131 ha en 2016, 2 300 ha en 2024, 2 045 ha en 2025." }
    ],
    status: "needs_review",
    to_check: ["Pertes au tri de 40 à 50 % (Lepeltier) : contredit, 20 à 30 % selon la Chambre d’agriculture de Champagne (2024).", "Prix du plant : 1,00 à 1,20 € HT selon l’IFV (1,30 € chez Lepeltier) ; 99 % de greffés-soudés et 25 000-30 000 €/ha : non confirmés."],
    src: "Mille Vignes, P. Lepeltier, p. 66-67 ; IFV, La production de plants de vigne en pépinières ; FranceAgriMer, chiffres clés FFPV 2025 ; Vitisphere (2024)",
    page: 66
  },
  {
    id: 92,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Loire", appel: "Sancerre" },
    titre: "Des pépinières remises en question",
    synth: "On arrache de plus en plus de vignes de moins de trente ans, frappées par l’esca et le dépérissement : Lepeltier y voit l’effet d’une production de plants pensée en « matériel végétal », au moindre coût. Des alternatives émergent. Lilian Bérillon, pépiniériste à Jonquières (Vaucluse), mise sur la sélection massale et la diversité des porte-greffes ; sa société est en redressement judiciaire depuis juillet 2026 (BODACC). En Centre-Loire, le Sicavac a mené une sélection massale du sauvignon (2005-2012) et lancé la marque Ceps Sicavac (structure créée en 2014), qui associe des clones agréés (108, 159, 376, 906) à des sélections massales : vignes mères palissées, plants sans herbicide, récoltés après la chute des feuilles.",
    mnemo: "« On plante pour ses petits-enfants » : le plant de qualité est un placement à cinquante ans.",
    flash: { q: "Quelle démarche Centre-Loire a lancée pour des plants de sauvignon de qualité ?", a: "La marque Ceps Sicavac, appuyée sur une sélection massale du sauvignon." },
    qcm: { q: "Où se trouve la pépinière de Lilian Bérillon ?", opts: ["Jonquières (Vaucluse)", "Montlouis (Indre-et-Loire)", "Pérignac (Charente)", "Le Grau-du-Roi (Gard)"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La structure Ceps Sicavac existe depuis 2010, comme l’écrit Lepeltier.", answer: false }, explanation: "La sélection date de 2005-2012 et la structure de 2014." },
      { type: "mcq_multi", prompt: "Quelles exigences porte le cahier des charges Ceps Sicavac selon Lepeltier ?", payload: { options: ["Vignes mères palissées", "Pas d’herbicide", "Plants récoltés après la chute des feuilles", "Greffe oméga obligatoire"], answers: [0, 1, 2] } }
    ],
    status: "needs_review",
    to_check: ["Situation actuelle de la pépinière Bérillon (procédure collective signalée) : à vérifier.", "Détail du cahier des charges Ceps Sicavac : repris de Lepeltier, non recoupé."],
    src: "Mille Vignes, P. Lepeltier, p. 67 ; Vins du Centre-Loire, sélection massale du sauvignon ; Plan national dépérissement, fiche Ceps Sicavac ; Terre de Vins, Lilian Bérillon ; FranceAgriMer, liste des clones agréés (mars 2026) ; BODACC (via Pappers), Pépinières Lilian Bérillon",
    page: 67
  },
  {
    id: 93,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Les fléaux venus d’Amérique au XIXe siècle",
    synth: "V. vinifera n’avait aucune défense contre les parasites américains introduits au XIXe siècle. L’oïdium (Erysiphe necator) apparaît en Angleterre en 1845 puis en France en 1847 ; on le combat au soufre. Le phylloxéra suit dans les années 1860. Le mildiou (Plasmopara viticola) arrive en 1878 ; la bouillie bordelaise (cuivre) contre lui est mise au point en 1885. Le black rot (Guignardia bidwellii) suit en 1885-1886 (1886 à Montpellier selon INRAE). L’anthracnose, souvent rangée avec eux, est en fait d’origine européenne.",
    mnemo: "O-P-M-B : Oïdium, Phylloxéra, Mildiou, Black rot, dans l’ordre d’arrivée.",
    flash: { q: "Quel remède historique contre le mildiou est mis au point en 1885 ?", a: "La bouillie bordelaise (sulfate de cuivre et chaux)." },
    qcm: { q: "Laquelle de ces maladies n’est pas d’origine américaine ?", opts: ["Oïdium", "Mildiou", "Black rot", "Anthracnose"], good: 3 },
    exos: [
      { type: "ordering", prompt: "Remets ces fléaux dans l’ordre de leur arrivée en France.", payload: { items: ["Oïdium (1847)", "Phylloxéra (années 1860)", "Mildiou (1878)", "Black rot (vers 1885)"] } },
      { type: "matching", prompt: "Associe chaque maladie à son agent.", payload: { pairs: [["Oïdium", "Erysiphe necator"], ["Mildiou", "Plasmopara viticola"], ["Black rot", "Guignardia bidwellii"]] } },
      { type: "matching", prompt: "Associe chaque maladie à son remède historique.", payload: { pairs: [["Oïdium", "Soufre"], ["Mildiou", "Bouillie bordelaise (cuivre)"], ["Phylloxéra", "Greffe sur porte-greffe américain"]] } }
    ],
    status: "needs_review",
    to_check: ["Origine européenne de l’anthracnose : une seule source (IFV Occitanie)."],
    src: "Mille Vignes, P. Lepeltier, p. 68-69 ; INRAE, Delmotte et al., Invasions et vigne (HAL) ; IFV Occitanie, Anthracnose ; Wikipédia, Erysiphe necator et Plasmopara viticola",
    page: 68
  },
  {
    id: 94,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Pointu",
    geo: null,
    titre: "Francis Hallé : la plante est une colonie",
    synth: "Le botaniste Francis Hallé, spécialiste des forêts tropicales et cofondateur du Radeau des cimes (1986), critique une botanique pensée sur le modèle animal. Dans Éloge de la plante (1999 ; Lepeltier cite 2014), il montre que la plante, fixe et autotrophe, n’a pas d’organes vitaux centralisés : coupée, elle se multiplie au lieu de mourir, et ses cellules peuvent régénérer une plante entière (totipotence). Elle croît par réitération de son architecture, ce qui en fait moins un individu qu’une colonie : un cep atteint d’esca peut porter des fruits malgré son bois mort.",
    mnemo: "Coupez un chien, il meurt ; coupez une vigne, vous avez une bouture.",
    flash: { q: "Pourquoi Hallé dit-il que la plante est une colonie plutôt qu’un individu ?", a: "Elle croît en répétant son architecture, se multiplie quand on la coupe et n’a pas d’organe vital centralisé." },
    qcm: { q: "La capacité d’une cellule végétale à régénérer une plante entière s’appelle…", opts: ["La totipotence", "La parthénogenèse", "L’endosymbiose", "La photosynthèse"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Éloge de la plante de Francis Hallé est paru pour la première fois en 2014.", answer: false }, explanation: "Première édition au Seuil en 1999 ; 2014 est une date de réédition probable." },
      { type: "short_answer", prompt: "Comment s’appelle la croissance par répétition de l’architecture d’origine ?", payload: { accepted: ["réitération", "la réitération", "reiteration"] } }
    ],
    status: "needs_review",
    to_check: ["Concept de réitération attribué à Oldeman (1972) : date non vérifiée.", "« Plante = colonie » : une seule source au-delà de Lepeltier."],
    src: "Mille Vignes, P. Lepeltier, p. 70-72 ; Actes Sud, Francis Hallé ; Association Francis Hallé ; Hallé & Oldeman, Essai sur l’architecture des arbres tropicaux (1970)",
    page: 70
  },
  {
    id: 95,
    theme: "Histoire",
    sous: ["Moderne"],
    niveau: "Pointu",
    geo: null,
    titre: "Goethe et la métamorphose des plantes",
    synth: "Dans son Essai sur la métamorphose des plantes (1790), Goethe propose de comprendre la plante comme un tout en mouvement plutôt que de la décomposer en catégories, à la manière de Linné. Cotylédons, feuilles, sépales, pétales, étamines et fruits seraient les variations d’un même organe de base (la feuille, Blatt), qui alterne expansion et contraction. Il nomme Urpflanze la « plante archétypale », principe commun à toutes les plantes. Sa méthode valorise l’observation sensible et l’imagination, à côté de l’analyse.",
    mnemo: "Pour Goethe, une fleur n’est qu’une feuille qui s’est mise en habits de fête.",
    flash: { q: "Comment Goethe nomme-t-il la « plante archétypale » ?", a: "L’Urpflanze." },
    qcm: { q: "En quelle année paraît l’Essai sur la métamorphose des plantes ?", opts: ["1650", "1790", "1868", "1924"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Pour Goethe, les organes floraux sont des feuilles transformées.", answer: true } },
      { type: "cloze", prompt: "Complète.", payload: { text: "Goethe appelle l’organe de base de la plante le {{Blatt}}, la feuille." } }
    ],
    status: "needs_review",
    to_check: ["Urpflanze et Blatt : concepts connus, non sourcés lors de la recherche."],
    src: "Mille Vignes, P. Lepeltier, p. 72-73 ; Wikipédia, Metamorphosis of Plants ; Morgan Library, notice de l’édition originale (Gotha, Ettinger, 1790)",
    page: 73
  },
  {
    id: 96,
    theme: "Viticulture",
    sous: ["Conduite"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Steiner, la biodynamie et le « geste de la vigne »",
    synth: "Éditeur des écrits scientifiques de Goethe à partir des années 1880, Rudolf Steiner en tire sa propre théorie de la connaissance. En juin 1924, à Koberwitz (Silésie), il donne huit conférences, le Cours aux agriculteurs, fondement de la biodynamie. Jean-Michel Florin, coordinateur du Mouvement de l’agriculture bio-dynamique (MABD) et responsable de la section d’agriculture du Goetheanum, applique cette lecture à la vigne : une plante très végétative, qui pousse dans toutes les directions et que le vigneron canalise par la taille et le rognage. Lepeltier souligne que cette approche, polémique, invite à observer la plante dans son milieu.",
    mnemo: "Goethe a observé, Steiner a cultivé : de la métamorphose à la biodynamie.",
    flash: { q: "Où et quand Steiner donne-t-il le Cours aux agriculteurs ?", a: "À Koberwitz (Silésie), en juin 1924 : huit conférences." },
    qcm: { q: "Quel organisme Jean-Michel Florin coordonne-t-il en France ?", opts: ["L’IFV", "Le MABD (Mouvement de l’agriculture bio-dynamique)", "L’INAO", "Demeter International"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Remets ces jalons dans l’ordre chronologique.", payload: { items: ["Goethe publie l’Essai sur la métamorphose des plantes", "Steiner édite les écrits scientifiques de Goethe", "Cours aux agriculteurs de Koberwitz"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Pour la lecture biodynamique, la vigne est dominée par une force de croissance végétative que le vigneron doit canaliser.", answer: true } }
    ],
    status: "verified",
    to_check: [],
    src: "Mille Vignes, P. Lepeltier, p. 73-75 ; Section d’agriculture du Goetheanum, Cours aux agriculteurs ; Orgprints ; Wikipédia, Rudolf Steiner ; J.-M. Florin (dir.), Viticulture biodynamique, MABD, 2017 (éd. anglaise Floris Books, 2021)",
    page: 73
  }
);
