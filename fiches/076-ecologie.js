// Écologie — fiches de cette section de Mille Vignes. Voir l'en-tête de fiches.js.
FICHES.push(
  {
    id: 97,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Fondamental",
    geo: null,
    titre: "Le sol, interface vivante",
    synth: "Le sol est l’interface entre l’atmosphère et la roche (lithosphère) : roche mère, terre et sol ne sont pas synonymes, et Lepeltier insiste sur cette confusion fréquente. Longtemps traité en simple support de la plante, il fait l’objet d’études sur sa fraction organique depuis la fin des années 1970. Cette fraction se lit de haut en bas : la litière (matière organique libre et grossière, en surface), la matière organique fraîche et fine en dessous, puis l’humus, matière transformée, stable et liée aux minéraux. Selosse le résume par trois défauts : trop petit, trop sale, trop opaque.",
    mnemo: "Le sol est un mille-feuille : la litière en croûte, la matière fraîche en crème, l’humus collé au biscuit minéral.",
    flash: { q: "Comment appelle-t-on la matière organique transformée, stable et liée aux minéraux du sol ?", a: "L’humus." },
    qcm: { q: "D’après le livre, quelle est la couche de matière organique libre et grossière, en surface ?", opts: ["L’humus", "La litière", "La roche mère", "Le complexe argilo-humique"], good: 1 },
    exos: [
      { type: "matching", prompt: "D’après le livre, associe chaque fraction organique à sa description.", payload: { pairs: [["Litière", "Matière organique grossière, libre, en surface"], ["Matière organique fraîche", "Matière fine, libre, sous la litière"], ["Humus", "Matière transformée, stable, liée aux minéraux"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Roche mère, terre et sol désignent exactement la même chose.", answer: false }, explanation: "Le sol est l’interface entre atmosphère et lithosphère ; la roche mère n’en est que l’un des ingrédients." }
    ],
    status: "needs_review",
    to_check: [
      "« Trop petit, trop sale, trop opaque » : une présentation de Selosse parle de cinq termes (opaque, sale, lent, trop petit, dégradant) ; Lepeltier simplifie",
      "Chiffres du livre (sol 6,5 % de la surface terrestre, terres non cultivables 22,5 %) : non retrouvés, volontairement non repris",
      "« Sol vu comme simple support » jusqu’aux années 1970 : repris du livre, non recoupé", "Découpage litière / matière organique fraîche / humus : repris du livre (p. 76), non recoupé"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 76 ; Selosse, Le sol, un invisible omniprésent (diaporama) ; Population Education, Earth’s surface",
    page: 76
  },
  {
    id: 98,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "De la litière à l’humus",
    synth: "La matière organique qui tombe au sol est d’abord fragmentée par la faune détritivore (insectes, acariens), puis attaquée par les champignons et les bactéries, qui s’en prennent à la lignine et à la cellulose. Une partie est minéralisée vite (minéralisation primaire) : eau, CO2 et sels minéraux sont libérés, et ces sels sont lessivables. L’autre partie suit une humification lente qui donne l’humus (humine, acides humiques et fulviques), sorte de garde-manger d’azote et de phosphore ; sa minéralisation secondaire relâche ensuite ces éléments peu à peu.",
    mnemo: "La litière passe à la cuisine : on hache (faune), on cuit (champignons, bactéries), on mange tout de suite (primaire) ou on met en bocal (humus) pour plus tard (secondaire).",
    flash: { q: "Quelle différence de rythme entre minéralisation primaire et humification ?", a: "La minéralisation primaire est rapide ; l’humification est lente et produit l’humus." },
    qcm: { q: "Quels organismes fragmentent d’abord la matière organique fraîche ?", opts: ["La faune détritivore", "Les mycorhizes", "Les nématodes du court-noué", "Les racines de vigne"], good: 0 },
    exos: [
      { type: "ordering", prompt: "D’après le livre, remets dans l’ordre les étapes de la voie lente, qui mène à l’humus.", payload: { items: ["Fragmentation par la faune détritivore", "Attaque par champignons et bactéries", "Humification (lente) en humus", "Minéralisation secondaire de l’humus"] } },
      { type: "cloze", prompt: "D’après le livre, complète.", payload: { text: "La minéralisation {{primaire}} est rapide, alors que l’{{humification}} est lente et mène à l’humus." } },
      { type: "odd_one_out", prompt: "D’après le livre, quel élément n’est pas un constituant de l’humus ?", payload: { options: ["Humine", "Acides humiques", "Acides fulviques", "Lignine"], answer: 3 }, explanation: "La lignine, comme la cellulose, est une matière végétale que champignons et bactéries décomposent ; l’humus comprend humine et acides humiques et fulviques." }
    ],
    status: "needs_review",
    to_check: ["Enchaînement des étapes de décomposition et composition de l’humus : repris du livre (p. 78), non recoupé par une source indépendante"],
    src: "Mille Vignes, P. Lepeltier, p. 78",
    page: 78
  },
  {
    id: 99,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Pointu",
    geo: null,
    titre: "Complexe argilo-humique, CEC et glomaline",
    synth: "Argiles et humus sont des colloïdes chargés négativement : ils se repoussent et risquent d’être lessivés, sauf si des colles biologiques ou des ponts cationiques (Ca2+, Mg2+, hydroxydes de fer) les relient en complexe argilo-humique. Ce complexe retient des cations (K+, NH4+) : c’est la capacité d’échange cationique (CEC), et il donne une texture grumeleuse. Lepeltier attribue la colle glomaline aux vers de terre ; or elle a été décrite en 1996 par Sara Wright (USDA) chez les champignons mycorhiziens à arbuscules, et son identité exacte reste discutée. Les turricules sont des agrégats d’argile et d’humus.",
    mnemo: "Deux aimants de même pôle se repoussent : il faut un pont de calcium ou de magnésium, comme un scotch, pour les coller.",
    flash: { q: "Qui produit la glomaline, d’après les sources scientifiques lues ?", a: "Les champignons mycorhiziens à arbuscules (et non les vers de terre) ; décrite par Sara Wright en 1996." },
    qcm: { q: "Qui a décrit la glomaline en 1996 ?", opts: ["Marc-André Selosse", "Sara F. Wright (USDA-ARS)", "Albert Frank", "Lionel Ranjard"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La glomaline est une protéine sécrétée par le tube digestif des vers de terre.", answer: false }, explanation: "C’est l’affirmation du livre, mais la glomaline est attribuée aux champignons mycorhiziens à arbuscules (Wright, 1996). Son identité moléculaire reste discutée." },
      { type: "mcq_multi", prompt: "Quels éléments servent de ponts cationiques entre argiles et humus d’après le livre ?", payload: { options: ["Calcium (Ca2+)", "Magnésium (Mg2+)", "Hydroxydes de fer", "Nitrates (NO3-)", "Chlorures (Cl-)"], answers: [0, 1, 2] } },
      { type: "flashcard_reverse", prompt: "Colloïdes chargés négativement qui se repoussent et sont lessivables s’ils ne sont pas liés.", payload: { answer: "Les argiles et l’humus" } }
    ],
    status: "needs_review",
    to_check: [
      "Rôle d’agrégation de la glomaline : identité de la molécule discutée (extrait brut GRSP, mélange possible de matières organiques ; revue 2021)",
      "Thèse de Claude et Lydia Bourguignon sur l’origine des argiles (indirectement via la nutrition des plantes) : non reprise par la pédologie classique, non reprise ici",
      "Définition de la CEC : une source générale et une citation de l’IFV seulement"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 78 ; USDA ARS, AR Magazine (2002), glomaline ; Wikipédia, Glomalin ; Crop Science Centre, revue de 25 ans de recherche sur la glomaline (2021) ; IRD, formation des argiles ; Wikipédia, Cation-exchange capacity ; Pleinchamp (IFV)",
    page: 78
  },
  {
    id: 100,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "La vie d’un gramme de sol",
    synth: "Un gramme de sol abrite environ un milliard de bactéries pour un million d’espèces, d’après Lionel Ranjard (INRA Dijon) ; les champignons y sont environ dix fois moins nombreux. L’Atlas français des bactéries du sol, publié en décembre 2018 par le Muséum et Biotope, s’appuie sur 2 200 sites du RMQS (un point tous les 16 km). Pour la faune, le livre reprend trois catégories de vers de terre : épigés (en surface), endogés (en profondeur) et anéciques (qui montent et descendent). Il juge les sols viticoles français appauvris, sans que sa valeur moyenne de matière organique soit retrouvée.",
    mnemo: "Un gramme de sol, c’est une mégapole : un milliard d’habitants, un million de métiers.",
    flash: { q: "Combien de bactéries et d’espèces dans un gramme de sol selon Ranjard ?", a: "Environ 1 milliard de bactéries pour 1 million d’espèces." },
    qcm: { q: "Combien de sites du RMQS l’Atlas français des bactéries du sol exploite-t-il ?", opts: ["Environ 220", "Environ 2 200", "Environ 22 000", "Environ 220 000"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque catégorie de vers de terre à sa position.", payload: { pairs: [["Épigé", "Vit en surface"], ["Endogé", "Vit en profondeur"], ["Anécique", "Monte et descend dans le sol"]] } },
      { type: "short_answer", prompt: "Quel chercheur de l’INRA de Dijon chiffre à un milliard le nombre de bactéries par gramme de sol ?", payload: { accepted: ["Ranjard", "Lionel Ranjard"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Un gramme de sol contient de l’ordre d’un milliard de bactéries et d’un million d’espèces.", answer: true } }
    ],
    status: "needs_review",
    to_check: [
      "Étymologie d’anécique (grec anesis, « élasticité ») et date de la classification de Bouché (1977 selon l’AFES, 1972 selon une autre source) : non tranchés",
      "MO moyenne des sols viticoles français « à peine 2 % » et Trentin « le double » : non retrouvés (Trentin : 2,4 à 3,2 % selon l’année)",
      "Taille des micro-organismes « 10^-9 m » donnée par le livre : probable erreur d’ordre de grandeur, non reprise",
      "Faible biomasse microbienne des vignobles (Ranjard) : une seule source journalistique"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 79-81 ; Futura-Sciences, atlas des bactéries du sol (2019) ; Réussir Grandes Cultures, la vie du sol livre ses secrets (2014) ; MNHN Sciences Press, Atlas français des bactéries du sol ; Capowiez et al., Étude et Gestion des Sols (2022) ; Fondazione Mach, sols viticoles trentins",
    page: 79
  },
  {
    id: 101,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Selosse : les microbes, jamais seuls",
    synth: "Dans Jamais seul (Actes Sud, 2017), Marc-André Selosse défend l’idée que les microbes construisent plantes, animaux et civilisations, en contrepoint d’un héritage pasteurien centré sur le microbe pathogène. Le livre en tire que la biomasse terrestre serait composée à 90 % de microbes : les estimations de Bar-On, Phillips et Milo (PNAS, 2018) donnent plutôt environ 80 % pour les plantes et 15 % pour les bactéries. Le nombre d’espèces microbiennes (de l’ordre de 10^12) n’est qu’une extrapolation par modèle (Locey et Lennon, 2016).",
    mnemo: "Une forêt, vue d’avion, est verte : ce sont les plantes qui pèsent le plus, les microbes sont les ouvriers invisibles.",
    flash: { q: "Quel groupe domine la biomasse terrestre d’après Bar-On et al. (2018) ?", a: "Les plantes (environ 80 %), loin devant les bactéries (environ 15 %)." },
    qcm: { q: "Quel groupe domine la biomasse mondiale d’après Bar-On, Phillips et Milo (2018) ?", opts: ["Les bactéries", "Les champignons", "Les plantes", "Les animaux"], good: 2 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Bar-On et al. (2018), les microbes représentent 90 % de la biomasse terrestre.", answer: false }, explanation: "Ils pèsent environ 16 % (bactéries ~15 %, archées, champignons) ; les plantes font environ 80 %. Environ 90 % de la biomasse bactérienne se trouve en sous-sol profond, d’où peut-être la confusion." },
      { type: "flashcard", prompt: "Pourquoi l’affirmation « 90 % de la biomasse terrestre = microbes » est-elle écartée ?", payload: { answer: "Bar-On et al. (2018) comptent environ 80 % de plantes et 15 % de bactéries ; ~90 % de la biomasse bactérienne est en sous-sol profond." } }
    ],
    status: "needs_review",
    to_check: [
      "Titre et date de Jamais seul : une seule page lue (Espace des sciences)",
      "Estimation de 10^12 espèces microbiennes et fraction connue de 0,001 % : extrapolation modélisée (Locey et Lennon), texte PNAS non lu",
      "Le chiffre de 90 % attribué à Selosse n’a pas été retrouvé dans ses écrits : il n’est pas repris"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 79 ; Bar-On, Phillips et Milo (2018), The biomass distribution on Earth ; Our World in Data, Life on Earth ; Locey et Lennon, Scaling laws predict global microbial diversity ; Espace des sciences, Jamais seul",
    page: 79
  },
  {
    id: 102,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Les mycorhizes : une alliance racine-champignon",
    synth: "Albert Bernhard Frank décrit et nomme la mycorhize en 1885, et cette symbiose existe depuis plus de 450 millions d’années. La plante fournit des sucres, le champignon apporte eau et sels minéraux (azote, phosphore). La vigne forme des endomycorhizes à arbuscules, où le champignon pénètre dans les cellules racinaires, comme la grande majorité des plantes (environ 70 à 80 %). L’ectomycorhize, avec son manteau fongique et ses hyphes entre les cellules, est rare : environ 2 % des espèces de plantes (surtout des arbres forestiers, dont les chênes truffiers) ; le « 10 % » du livre correspond aux familles.",
    mnemo: "Endo = dedans, comme des arbres miniatures (arbuscules) plantés dans la cellule ; ecto = dehors, un manteau posé sur la racine.",
    flash: { q: "Quel type de mycorhize forme la vigne ?", a: "Une endomycorhize à arbuscules." },
    qcm: { q: "Qui a décrit et nommé la mycorhize en 1885 ?", opts: ["Albert Frank", "Peter Wohlleben", "Marc-André Selosse", "Lorenz Hiltner"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque type de mycorhize à sa description.", payload: { pairs: [["Endomycorhize", "Arbuscules dans les cellules racinaires (cas de la vigne)"], ["Ectomycorhize", "Manteau fongique et hyphes entre les cellules (chênes truffiers)"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les ectomycorhizes concernent environ 10 % des espèces de plantes.", answer: false }, explanation: "Environ 2 % des espèces de plantes (Brundrett et Tedersoo, 2018) ; le chiffre de 10 % correspond à la part des familles." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Albert {{Frank}} décrit la mycorhize en {{1885}} ; la symbiose existe depuis plus de {{450}} millions d’années." } }
    ],
    status: "needs_review",
    to_check: ["Part des plantes à endomycorhizes à arbuscules : 72 % des espèces à fleurs (Brundrett et Tedersoo), environ 80 % (Mycoagra, livre) : formulé « 70 à 80 % »"],
    src: "Mille Vignes, P. Lepeltier, p. 77 et 81 ; Brundrett et Tedersoo (2018), New Phytologist ; Projet CASDAR Mycoagra, fiche symbiose mycorhizienne ; Wikipédia, Mycorrhiza et Albert Bernhard Frank ; Frontiers in Plant Science (2021), mycorhization de Vitis vinifera ; Réussir Vigne (2017)",
    page: 81
  },
  {
    id: 103,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Pointu",
    geo: null,
    titre: "Quatre services des mycorhizes, et le piège des engrais",
    synth: "Les mycorhizes rendent quatre services : nutrition (sucres contre eau, azote, phosphore), protection contre les pathogènes (compétition, antibiotiques, défenses induites), atténuation des stress (hydrique, polluants, métaux lourds) et agrégation du complexe argilo-humique. La résistance induite par la mycorhize (RIM) est documentée chez la vigne surtout pour les maladies racinaires ; contre le mildiou ou le botrytis, l’effet n’est pas démontré au champ. Piège : une vigne fertilisée en N, P et K nourrit moins ses champignons et perd leurs fonctions. Le livre évoque aussi, d’après Selosse, une « double spirale de dépendance ».",
    mnemo: "Gâter la vigne d’engrais, c’est lui servir un buffet à domicile : elle licencie ses livreurs (les champignons).",
    flash: { q: "Pourquoi une vigne très fertilisée profite-t-elle moins de ses mycorhizes ?", a: "Elle nourrit moins ses champignons, et perd donc leurs fonctions." },
    qcm: { q: "Que signifie RIM dans le livre ?", opts: ["Réseau d’interactions microbiennes", "Résistance induite par la mycorhize", "Rhizosphère intégrée au milieu", "Réserve indispensable en minéraux"], good: 1 },
    exos: [
      { type: "mcq_multi", prompt: "Quels sont les services rendus par les mycorhizes d’après le livre ?", payload: { options: ["Nutrition de la plante", "Protection contre les pathogènes", "Atténuation des stress", "Agrégation du complexe argilo-humique", "Fixation directe de la lumière"], answers: [0, 1, 2, 3] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon le livre, une vigne fortement fertilisée en N, P et K nourrit davantage ses champignons mycorhiziens.", answer: false }, explanation: "Elle fait des économies d’énergie : elle nourrit moins ses champignons et perd leurs fonctions." }
    ],
    status: "needs_review",
    to_check: [
      "Volume de sol exploré par le mycélium : le livre dit « jusqu’à mille fois » (p. 81) puis « centuplé » (p. 84) ; Mycoagra : au moins 40 fois (une seule source). Facteur non repris",
      "« Double spirale de dépendance » de Selosse (p. 93) : citée par le livre, non relue",
      "Bénéfices phytosanitaires de la RIM sur vigne : possibles mais non démontrés au champ pour les maladies foliaires"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 81-84 et 93 ; Frontiers in Plant Science (2021), symbiose AM et défenses de Vitis vinifera ; Réussir Vigne (2017) ; Projet CASDAR Mycoagra, fiche symbiose mycorhizienne",
    page: 81
  },
  {
    id: 104,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Nématodes et court-noué",
    synth: "Les nématodes du sol sont pour la plupart non pathogènes : beaucoup sont prédateurs ou décomposeurs. Un seul cas pèse lourd en vigne : Xiphinema index transmet le GFLV (grapevine fanleaf virus), agent du court-noué ; Thorne et Allen l’ont décrit en 1950, et son rôle de vecteur a été établi en 1958 par Hewitt, Raski et Goheen en Californie. Xiphinema italiae est un vecteur secondaire (signalé en 1970). La maladie réduit le rendement et la longévité des ceps.",
    mnemo: "Le nématode est le facteur : il livre le virus (GFLV) directement à la racine.",
    flash: { q: "Quel nématode est le principal vecteur du virus du court-noué ?", a: "Xiphinema index." },
    qcm: { q: "Qui a identifié en 1958 le rôle de Xiphinema index comme vecteur du court-noué ?", opts: ["Hewitt, Raski et Goheen", "Thorne et Allen", "Bar-On, Phillips et Milo", "Locey et Lennon"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ? (d’après le livre)", payload: { statement: "La plupart des nématodes du sol sont des parasites de la vigne.", answer: false }, explanation: "La majorité est non pathogène (prédateurs, décomposeurs) ; seuls certains vecteurs, comme Xiphinema index, posent problème." },
      { type: "ordering", prompt: "Remets ces jalons dans l’ordre chronologique.", payload: { items: ["Description de Xiphinema index (Thorne et Allen)", "Rôle de vecteur identifié (Hewitt, Raski, Goheen)", "Xiphinema italiae signalé comme vecteur secondaire"] } },
      { type: "short_answer", prompt: "Quel est le sigle du virus du court-noué ?", payload: { accepted: ["GFLV", "grapevine fanleaf virus"] } }
    ],
    status: "needs_review",
    to_check: ["Majorité des nématodes du sol non pathogènes (prédateurs, décomposeurs) : repris du livre (p. 81), non recoupé"],
    src: "Mille Vignes, P. Lepeltier, p. 81 ; FAO, Fanleaf degeneration ; INRAE, plaquette VACCIVINE (2021) ; Acta Agriculturae Slovenica, Xiphinema index",
    page: 81
  },
  {
    id: 105,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Pointu",
    geo: null,
    titre: "La marche de l’oïdium en Europe (carte)",
    synth: "La carte du livre suit la propagation de l’oïdium de 1845 à 1854, par voies terrestres et maritimes, depuis un foyer anglais jusqu’à la péninsule ibérique, aux îles et aux Canaries. Les sources situent la première observation chez le jardinier William Tucker, à Margate (Kent), en 1845, alors que la carte place le foyer à Londres. En France, l’oïdium apparaît vers 1847 dans des serres près de Paris et touche tout le pays vers 1850. Les dates régionales de la carte (Bordeaux, Rioja, Requena) divergent parfois d’un an ou plus des sources.",
    mnemo: "Une tache d’huile qui s’étale : Angleterre, France, puis l’Espagne et les îles, en neuf ans.",
    flash: { q: "Sur quelle période la carte du livre suit-elle la propagation de l’oïdium ?", a: "De 1845 à 1854." },
    qcm: { q: "Quelle période couvre la carte de propagation de l’oïdium en Europe du livre ?", opts: ["1815-1824", "1845-1854", "1878-1887", "1905-1914"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Selon la carte du livre (p. 80), remets ces vagues de propagation dans l’ordre, de la plus ancienne à la plus récente.", payload: { items: ["Foyer anglais (1845)", "Vinho Verde, Rosselló, Gandie (1851)", "Maresme, Málaga, Banyalbufar (1852)", "La Palma, Lanzarote (1854)"] } },
      { type: "flashcard_reverse", prompt: "1845-1854", payload: { answer: "Période de propagation de l’oïdium en Europe représentée sur la carte du livre." } }
    ],
    status: "needs_review",
    to_check: [
      "Foyer initial : Londres (carte du livre) contre Margate, Kent (Académie d’agriculture, Wein.plus)",
      "Dates régionales divergentes : Bordeaux 1851 (livre) contre 1850 (Académie) ; Suisse 1852 contre 1851 ; Rioja 1853 contre 1854-1862 ; Requena 1854 contre 1855 (Geocrítica)",
      "Dates espagnoles de 1852 : une seule source (Geocrítica, Université de Barcelone)",
      "Voies terrestres et maritimes : non vérifiées dans les sources lues", "Arrivée en France (serres près de Paris en 1847, tout le pays vers 1850) : Académie d’agriculture seule (deux textes du même colloque)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 80 ; Académie d’agriculture de France, histoire de l’oïdium (2007) ; Wein.plus, William Tucker ; Geocrítica (Université de Barcelone), l’oïdium en Catalogne",
    page: 80
  },
  {
    id: 106,
    theme: "Viticulture",
    sous: ["Sol vivant"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "Truffes et plants de vigne mycorhizés",
    synth: "La truffe est la partie visible d’un champignon ectomycorhizien associé aux chênes. Le livre cite Tuber melanosporum (noire du Périgord), T. uncinatum (de Bourgogne), T. aestivum (d’été) et T. magnatum (blanche) : or des analyses moléculaires (Paolocci et al., 2004) montrent que T. uncinatum et T. aestivum ne forment qu’une espèce, distinguée surtout par la saison de récolte. Des pépinières proposent des plants de vigne mycorhizés (essais Sicavac de 2009 à 2015), mais les gains de croissance initiaux s’estompent après trois à quatre ans. Le livre pose la question des souches importées contre indigènes.",
    mnemo: "Même truffe, deux étiquettes : « d’été » en juin, « de Bourgogne » à l’automne.",
    flash: { q: "Que disent les analyses moléculaires de T. uncinatum et T. aestivum ?", a: "Ce sont une seule et même espèce, T. uncinatum étant un synonyme de T. aestivum." },
    qcm: { q: "Quelle espèce de truffe désigne la truffe noire du Périgord ?", opts: ["Tuber magnatum", "Tuber melanosporum", "Tuber aestivum", "Tuber uncinatum"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Tuber uncinatum et Tuber aestivum sont deux espèces distinctes selon les analyses moléculaires.", answer: false }, explanation: "Paolocci et al. (2004) : ce sont deux morphotypes d’une même espèce ; la distinction repose surtout sur la saison de récolte." },
      { type: "matching", prompt: "Associe chaque espèce à son nom usuel.", payload: { pairs: [["Tuber melanosporum", "Truffe noire du Périgord"], ["Tuber aestivum", "Truffe d’été"], ["Tuber magnatum", "Truffe blanche"]] } }
    ],
    status: "needs_review",
    to_check: [
      "Plants de vigne mycorhizés en pépinière (« depuis une dizaine d’années » selon le livre) : une seule source lue (Réussir Vigne, 2017) ; date de début d’offre commerciale non établie",
      "Débat souches importées contre indigènes : question posée par le livre, non vérifiée"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 84 ; Wikipédia, Tuber aestivum ; Paolocci et al. (2004), Tuber aestivum and T. uncinatum ; Réussir Vigne (2017), plants mycorhizés",
    page: 84
  }
,
  {
    id: 107,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "La vigne holobionte : une plante habitée de microbes",
    synth: "Lepeltier replace la vigne dans la lecture symbiotique du vivant : la feuille héberge une phyllosphère de micro-organismes, et ses chloroplastes descendraient de cyanobactéries intégrées à la cellule. L’idée remonte à Andreas Schimper, qui note dès 1883 que les chloroplastes se divisent comme des cyanobactéries libres ; Lynn Margulis l’a ensuite consacrée avec la théorie endosymbiotique (article de 1967, ouvrage de 1970). Le terme holobionte, forgé par Adolf Meyer-Abich en 1943 et repris par Margulis au début des années 1990, désigne l’hôte avec les espèces qui l’accompagnent : la vigne est donc un supraorganisme, ce qui pose la question de fongicides peu sélectifs.",
    mnemo: "La feuille est un immeuble en copropriété : le propriétaire, la vigne, ne vit jamais seul sous son toit.",
    flash: { q: "Que veut dire « la vigne est un holobionte » ?", a: "Que la vigne forme une unité écologique avec les micro-organismes qu’elle héberge (phyllosphère, racines…), et non un organisme isolé." },
    qcm: { q: "Qui note en 1883 que les chloroplastes se divisent comme des cyanobactéries libres ?", opts: ["Lynn Margulis", "Andreas Schimper", "Francis Hallé", "Rudolf Steiner"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Andreas Schimper a suggéré, dès 1883, que les plantes vertes résultent de l’union symbiotique de deux organismes.", answer: true }, explanation: "Schimper (1856-1901) le propose en note en 1883, bien avant Margulis. Le livre ne donne pas cette date." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Le terme {{holobionte}} désigne un hôte et l’ensemble des micro-organismes qu’il héberge." }, explanation: "Terme forgé par Meyer-Abich (1943) et popularisé par Margulis ; le livre l’applique à la vigne (p. 85)." }
    ],
    status: "needs_review",
    to_check: [
      "Date de Margulis : le livre dit « années 1970 » ; l’article fondateur (signé Lynn Sagan) paraît en 1967 et le livre de synthèse date de 1970 ; dates de vie de Margulis non revérifiées",
      "Holobionte : Meyer-Abich (1943), repris par Margulis (1990-1991), une seule source lue (Wikipedia) ; définition de Selosse citée par le livre non vérifiée",
      "« 100 millions de bactéries par gramme de feuille » (livre) non retrouvé : les sources donnent 10^6 à 10^7 par cm² de feuille ; chiffre non repris ici"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 85 ; Wikipedia, Andreas Franz Wilhelm Schimper ; Wikipedia, Symbiogenesis ; Encyclopédie de l’environnement, pionniers de la théorie endosymbiotique ; Embryo Project, On the Origin of Mitosing Cells (1967) ; Wikipedia, Holobiont ; BioNumbers, bactéries par cm² de feuille",
    page: 85
  },
  {
    id: 108,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le biocontrôle microbien et les agents des maladies de la vigne",
    synth: "Face aux maladies, le livre cite des alliés microbiens : le champignon Trichoderma contre les maladies du bois (esca, black dead arm, eutypiose), la bactérie Bacillus pumilus contre l’oïdium, la levure Metschnikowia fructicola et l’amibe Willaertia magna, dont le lysat a été approuvé comme substance active dans l’UE en 2025. Côté pathogènes, la maladie de Pierce est due à une bactérie (Xylella fastidiosa) et la flavescence dorée à un phytoplasme, transmis par la cicadelle Scaphoideus titanus. Pour l’arrivée du mildiou, l’Académie d’agriculture donne 1878, Lepeltier 1879.",
    mnemo: "Une équipe de secours microscopique : un champignon pour panser les plaies de taille, une bactérie préventive pour l’oïdium.",
    flash: { q: "Quel agent de biocontrôle colonise les plaies de taille contre esca et black dead arm ?", a: "Le champignon Trichoderma (par exemple Trichoderma atroviride I-1237)." },
    qcm: { q: "Quel est l’agent de la flavescence dorée ?", opts: ["Un phytoplasme", "Une bactérie du xylème (Xylella)", "Un virus transmis par un nématode", "Un champignon du bois"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque agent à son rôle.", payload: { pairs: [["Trichoderma", "Biocontrôle des maladies du bois"], ["Bacillus pumilus", "Biocontrôle préventif de l’oïdium"], ["Xylella fastidiosa", "Bactérie de la maladie de Pierce"], ["Phytoplasme", "Agent de la flavescence dorée"]] } },
      { type: "odd_one_out", prompt: "Quel est l’intrus parmi ces agents ?", payload: { options: ["Trichoderma atroviride", "Bacillus pumilus", "Xylella fastidiosa", "Metschnikowia fructicola"], answer: 2 }, explanation: "Xylella fastidiosa est un pathogène (maladie de Pierce) ; les trois autres sont des micro-organismes utilisés ou cités en biocontrôle." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La flavescence dorée est transmise par la cicadelle Scaphoideus titanus.", answer: true }, explanation: "Le phytoplasme est transmis par cette cicadelle ; première observation en 1949 en Armagnac." }
    ],
    status: "needs_review",
    to_check: [
      "Metschnikowia fructicola : une seule source (souche commercialisée, efficacité modérée sur raisin de table) ; homologation pour la vigne de cuve en France non vérifiée",
      "Willaertia magna : règlement d’exécution (UE) 2025/1177 lu via une copie tierce (approbation à l’échelle de l’espèce, jusqu’en 2040) ; AMM française d’un produit commercial non vérifiée",
      "Mildiou : 1879 (livre) contre 1878 (Académie d’agriculture, source unique) ; HAL/INRAE inaccessible, divergence non tranchée"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 85-86 ; Communiqué Bayer/Agrauxine, Esquive WP (2014) ; Réussir Vigne, Sonata ; Réussir Vigne, La Xylella fastidiosa ; Wikipedia, Flavescence dorée ; PMC10528312, Metschnikowia en vignobles bio ; Règlement (UE) 2025/1177 ; Réussir Vigne, essais Willaertia ; Académie d’agriculture de France, histoire oïdium/mildiou",
    page: 85
  },
  {
    id: 109,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Pointu",
    geo: null,
    titre: "Terroirs microbiens : une piste débattue",
    synth: "Des études de séquençage montrent que les communautés de levures et de bactéries ne se répartissent pas au hasard : elles varient selon les lieux, d’où l’idée d’un terroir microbien. L’étude de Bokulich et de ses collègues sur des moûts californiens (PNAS, 2014) en est un exemple (le livre ne la nomme pas) : les communautés dépendent de la région, mais aussi du cépage, du millésime et du climat. Lepeltier signale que ces résultats sont contestés par d’autres recherches ; l’étude elle-même établit des corrélations, sans démontrer de causalité.",
    mnemo: "Le terroir a-t-il une empreinte digitale microbienne ? La piste existe, mais l’empreinte reste floue.",
    flash: { q: "Que désigne l’idée de « terroir microbien » ?", a: "L’hypothèse que des communautés de levures et de bactéries propres à un lieu contribuent à la signature d’un vin ; thèse débattue." },
    qcm: { q: "Que désigne l’expression « terroir microbien » ?", opts: ["Des communautés de micro-organismes caractéristiques d’un lieu", "Un sol calcaire riche en bactéries", "Une levure commerciale sélectionnée", "Un traitement microbiologique du vin"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Lepeltier, l’existence de terroirs microbiens fait l’objet de contestations.", answer: true }, explanation: "Le livre présente ces études de séquençage comme contestées." },
      { type: "short_answer", prompt: "Quelle technique d’analyse a servi à décrire les communautés de levures et de bactéries des moûts ?", payload: { accepted: ["séquençage", "le séquençage", "séquençage de l’ADN", "sequencage"] } },
      { type: "flashcard_reverse", prompt: "Études de séquençage montrant des communautés microbiennes propres à une zone, discutées par Lepeltier.", payload: { answer: "Le terroir microbien" } }
    ],
    status: "needs_review",
    to_check: [
      "Bokulich et al. : 273 moûts californiens sur deux millésimes ; corrélation et non causalité, étude limitée à la Californie ; résumé PNAS non lu directement (PMC bloqué)",
      "Date : mise en ligne en novembre 2013, volume 2014 ; le livre retient 2014"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 86 ; Infowine, Mapping the microbial terroir of wine ; UC Davis Mills lab, page de l’étude Bokulich et al.",
    page: 86
  },
  {
    id: 110,
    theme: "Viticulture",
    sous: ["Conduite", "Biodiversité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "La vigne mariée à l’arbre (vite maritata)",
    synth: "Sur le modèle de la liane forestière, la vigne a longtemps grimpé sur des arbres vivants : c’est la vite maritata ou vigne arborescente, qui, selon Lepeltier, vient des Étrusques, tandis que le gobelet bas est un héritage gréco-oriental. Virgile, dans les Géorgiques, évoque déjà l’union des vignes et des ormes. Le livre oppose les riches, qui plantent sur échalas, aux pauvres, qui utilisent des arbres et la complantation (joala, joualle). Condamnée par les agronomes puis par le remembrement du XXe siècle, cette pratique a presque disparu ; le schéma du livre en liste les formes (Bigorre et Béarn, Savoie et comté de Foix, Gascogne, Latium, Vénétie, Abruzzes, Toscane, Campanie).",
    mnemo: "Un orme-tuteur : l’arbre donne le bras, la vigne s’y accroche, et le couple dure des siècles.",
    flash: { q: "Que signifie vite maritata ?", a: "La vigne « mariée » à un arbre vivant qui lui sert de tuteur (vigne arborescente)." },
    qcm: { q: "Que signifie vite maritata ?", opts: ["Vigne mariée à un arbre", "Vigne taillée en gobelet", "Vigne palissée sur fil de fer", "Vigne greffée sur porte-greffe américain"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque région à la forme de vigne haute du schéma des vignes arborescentes.", payload: { pairs: [["Vénétie", "Système original des frères Belussi"], ["Campanie", "Vigne haute en support mixte"], ["Latium", "Feston simple"]] }, explanation: "Formes citées dans le schéma du livre (p. 82-83) : le feston simple est situé dans le Latium (Lazio), le système des frères Belussi en Vénétie (Veneto), la vigne haute en support mixte en Campanie." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Dans les Géorgiques, Virgile évoque l’union des vignes et des ormes.", answer: true }, explanation: "Géorgiques I, v. 2 : « ulmisque adiungere vitis ». Le livre ne nomme pas le poète ; l’identification à Virgile est une inférence. L’expression vite maritata n’y figure pas." },
      { type: "mcq_single", prompt: "Selon le livre, qui plantait la vigne sur échalas, par opposition à l’arbre ?", payload: { options: ["Les riches", "Les pauvres", "Les moines uniquement", "Les armées romaines"], answer: 0 }, explanation: "Selon Lepeltier, les riches utilisaient l’échalas, les pauvres des arbres et la complantation." }
    ],
    status: "needs_review",
    to_check: [
      "Étrusques (conduite haute) et héritage gréco-oriental du gobelet : une seule source (Guado al Melo, vulgarisation) ; à doubler par un ouvrage académique",
      "Joala/joualle : définition et lien avec le Sud-Ouest tirés d’une seule source grand public (Consoglobe) ; article Réussir sur les joualles non ouvert",
      "Virgile : identification du « poète » par inférence ; le terme vite maritata ne figure pas dans son texte"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 82-83 (schéma), 86-88 ; Virgile, Georgics I (Sacred Texts) ; Guado al Melo, Wine and the Etruscans II: the married vine ; Consoglobe, Tentez la joualle",
    page: 86
  },
  {
    id: 111,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Pointu",
    geo: null,
    titre: "Plantes compagnes et arômes du vin",
    synth: "Le livre avance que des plantes voisines marquent les arômes du vin : l’eucalyptus pour la note mentholée du cabernet de Martha’s Vineyard (Heitz Cellar), mais Joe Heitz doutait lui-même de cette explication, qu’il attribuait au clone. L’Australian Wine Research Institute relie le 1,8-cinéole (eucalyptol) surtout aux débris d’eucalyptus récoltés avec le raisin plutôt qu’à un dépôt aérien. À Bordeaux, l’équipe de l’ISVV (Poitou et al., 2017) relie l’armoise de Verlot à des teneurs plus élevées en 1,8-cinéole dans certains rouges, qui renforcent la nuance mentholée.",
    mnemo: "Un voisin qui parfume : l’eucalyptus à Napa, l’armoise à Bordeaux, la menthe dans le verre.",
    flash: { q: "Quelle plante de certains vignobles bordelais a été reliée à plus de 1,8-cinéole dans des vins rouges ?", a: "L’armoise de Verlot (Artemisia verlotiorum), selon Poitou et al. (ISVV, 2017)." },
    qcm: { q: "Quelle plante a été reliée, à Bordeaux, à des teneurs plus élevées en 1,8-cinéole dans certains rouges ?", opts: ["L’armoise de Verlot", "La lavande", "Le thym", "Le romarin"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Des chercheurs de l’ISVV (Bordeaux) ont relié la présence d’armoise de Verlot à une teneur plus élevée en 1,8-cinéole dans certains vins rouges français.", answer: true }, explanation: "Poitou, Thibon et Darriet (2017), Journal of Agricultural and Food Chemistry ; jusqu’à 2,61 µg/L dans certains vins." },
      { type: "cloze", prompt: "Complète.", payload: { text: "L’armoise de {{Verlot}} (Artemisia verlotiorum) a été reliée au {{1,8-cinéole}} dans des rouges français." } }
    ],
    status: "needs_review",
    to_check: [
      "1,8-cinéole (AWRI) : l’AWRI insiste sur le contact avec des débris d’eucalyptus plutôt que sur un « dépôt » aérien ; l’étude sur les pinots de la Yarra Valley n’a pas été confirmée",
      "Martha’s Vineyard : effet des eucalyptus présenté comme acquis par le livre, mais contesté par Heitz ; une seule source (Decanter)",
      "Les frères Verlot (Bernard et Jean-Baptiste) non vérifiés",
      "Darricau, La Vigne et ses plantes compagnes (2019) et Diego Tomasi / roncier et pinot noir : non retrouvés, non repris"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 88 ; AWRI, Fact sheet Eucalyptus character in wine ; Poitou, Thibon, Darriet, J. Agric. Food Chem. 65(2), 2017 (ISVV) ; Réussir Vigne, Les notes végétales dévoilent leurs mystères ; Decanter, Heitz Martha’s Vineyard 1974",
    page: 88
  },
  {
    id: 112,
    theme: "Viticulture",
    sous: ["Sol vivant", "Biodiversité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Couverts, adventices et engrais verts",
    synth: "Certains cahiers des charges d’appellation imposent un couvert végétal : celui de Saumur-Champigny exige un couvert des tournières et un couvert maîtrisé de l’inter-rang (version 2015 lue), alors que Lussac-Saint-Émilion ou Pessac-Léognan n’en imposent pas explicitement. L’herbe concurrence la vigne pour l’eau et l’azote et peut accroître l’humidité (gel, pourriture). Lepeltier présente aussi les adventices comme bio-indicatrices (Gérard Ducerf) et les engrais verts : brassicacées et poacées décompactantes, fabacées fixatrices d’azote.",
    mnemo: "Le tapis vert de la cave à ciel ouvert : il nourrit le sol, mais boit aussi à la table de la vigne.",
    flash: { q: "Quelles familles d’engrais verts le livre cite-t-il ?", a: "Brassicacées (crucifères) et poacées (graminées) pour décompacter, fabacées pour fixer l’azote." },
    qcm: { q: "Quel inconvénient le livre attribue-t-il à l’herbe dans les rangs ?", opts: ["Elle concurrence la vigne pour l’eau et l’azote", "Elle acidifie le raisin", "Elle empêche la photosynthèse", "Elle fait fuir les auxiliaires"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Tous les cahiers des charges d’AOC français imposent un couvert végétal dans les vignes.", answer: false }, explanation: "Saumur-Champigny l’impose (tournières, inter-rang maîtrisé) ; Irouléguy impose seulement l’enherbement du contour des parcelles ; Lussac-Saint-Émilion et Pessac-Léognan n’ont pas d’obligation explicite." },
      { type: "mcq_multi", prompt: "Quelles familles le livre cite-t-il parmi les engrais verts ?", payload: { options: ["Brassicacées (crucifères)", "Poacées (graminées)", "Fabacées", "Orchidacées", "Éricacées"], answers: [0, 1, 2] }, explanation: "Les fabacées fixent l’azote ; brassicacées et poacées décompactent le sol." }
    ],
    status: "needs_review",
    to_check: [
      "Cahier des charges de Saumur-Champigny : version PNO de 2015 lue, état actuel non vérifié",
      "Ducerf, L’Encyclopédie des plantes bio-indicatrices : existence confirmée par des catalogues, contenu non lu",
      "« Baragane » (poireau des vignes dans le Bordelais) : non confirmé ; Allium vineale s’appelle « ail des vignes »",
      "Luzerne, vesce velue et avoine en jachère contre les nématodes du court-noué : non confirmés (la source lue cite le sainfoin et au moins 18 mois de repos)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 88-89 ; INAO, CDC Saumur-Champigny (PNO juin 2015) ; INAO, CDC Irouléguy ; INAO, CDC Lussac Saint-Émilion 2023 ; Kokopelli, Encyclopédie des plantes bio-indicatrices ; Farmknowledge, Allium vineale ; DRAAF Grand Est, fiche court-noué",
    page: 88
  },
  {
    id: 113,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Ravageurs de la vigne et auxiliaires",
    synth: "En monoculture, la vigne forme un agrosystème fragile. Le livre cite parmi les ravageurs les tordeuses de la grappe : l’eudémis (Lobesia botrana), la cochylis (Eupoecilia ambiguella), l’eulia (Argyrotaenia pulchellana) et la pyrale de la vigne. S’y ajoutent cicadelles, acariens et cochenilles. Le projet Agrolife, mené à Lánia (Chypre) de 2014 à 2017, associe confusion sexuelle, haies et fleurs indigènes pour attirer les auxiliaires.",
    mnemo: "Le trio de la grappe : Eudémis la première, Cochylis la deuxième, Eulia la petite dernière.",
    flash: { q: "Quel est le nom latin de l’eudémis ?", a: "Lobesia botrana." },
    qcm: { q: "Quel est le nom latin de l’eudémis de la vigne ?", opts: ["Lobesia botrana", "Eupoecilia ambiguella", "Scaphoideus titanus", "Xylella fastidiosa"], good: 0 },
    exos: [
      { type: "matching", prompt: "Associe chaque tordeuse de la grappe à son nom latin.", payload: { pairs: [["Eudémis", "Lobesia botrana"], ["Cochylis", "Eupoecilia ambiguella"]] } },
      { type: "flashcard", prompt: "Quelle technique, testée dans le projet Agrolife, évite de traiter les vers de la grappe par insecticide ?", payload: { answer: "La confusion sexuelle." }, explanation: "Elle perturbe l’accouplement des tordeuses." }
    ],
    status: "needs_review",
    to_check: [
      "Pyrale : le livre cite la pyrale de la vigne ; la source lue (Réussir) vise la pyrale du daphné (Cryptoblabes gnidiella), une autre espèce ; nom latin de la pyrale de la vigne (Sparganothis pilleriana) non vérifié",
      "Agrolife : projet de juin 2014 à juin 2017 à Kapilio-Lania ; murets de pierres sèches non cités par les sources, caractère « LIFE » (UE) non explicite",
      "Eulia (Argyrotaenia pulchellana) : une seule source (Réussir Vigne) ; eudémis et cochylis recoupées par la DRAAF Nouvelle-Aquitaine"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 87, 89-91 ; Réussir Vigne, Vers de la grappe : eudémis, cochylis, eulia et pyrale ; DRAAF Nouvelle-Aquitaine, fiche technique vers de la grappe ; Cyprus Mail, Ditching the poisons ; CUT (Ktisis), fiche projet AGROLIFE",
    page: 89
  },
  {
    id: 114,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Pointu",
    geo: { pays: "France", region: "Languedoc", appel: null },
    titre: "Restinclières, laboratoire de l’agroforesterie",
    synth: "Dans l’Hérault, au nord de Montpellier, le domaine de Restinclières sert de laboratoire à ciel ouvert pour associer arbres et cultures, vigne comprise. Il couvre environ 50 ha selon les sources (53 ha selon le livre) et compte environ 80 essences. Le Département de l’Hérault en est propriétaire depuis 1990 ; l’INRA y mène des essais à partir de 1995-1996 selon les sources. Le livre prête aux arbres en général un rôle d’abri pour les auxiliaires, de maintien du sol, de brise-vent, d’ombrage et de pare-feu.",
    mnemo: "Restinclières : la vigne et l’arbre, en ménage dans l’Hérault depuis les années 1990.",
    flash: { q: "Qu’étudie-t-on à Restinclières (Hérault) ?", a: "L’agroforesterie : l’association d’arbres et de cultures, dont la vigne." },
    qcm: { q: "Dans quel département se trouve le domaine de Restinclières ?", opts: ["Hérault", "Gironde", "Marne", "Vaucluse"], good: 0 },
    exos: [
      { type: "mcq_single", prompt: "Environ combien d’essences d’arbres compte le domaine ?", payload: { options: ["Environ 8", "Environ 80", "Environ 200", "Environ 800"], answer: 1 }, explanation: "« Quelque 80 essences » selon L’Info Durable (le livre dit plus de 80)." },
      { type: "short_answer", prompt: "Comment appelle-t-on l’association d’arbres et de cultures étudiée à Restinclières ?", payload: { accepted: ["agroforesterie", "l’agroforesterie", "viti-agroforesterie", "agroforesterie viticole"] } }
    ],
    status: "needs_review",
    to_check: [
      "Surface : 53 ha (livre) contre 50 ha (domaine) ou 40 ha en agroforesterie selon les sources ; non tranché",
      "INRA « depuis 1990 » (livre) : 1990 est l’achat par le Département ; INRA = convention en 1995 (Ecophytopic) ou premiers essais en 1996 avec Christian Dupraz (Réussir)",
      "Parcelle de 1996 : syrah, grenache et 7 essences (cormier, pins, aulne, cyprès, poirier) non retrouvés ; sources partielles (cormiers, pins pignon, arbres espacés d’environ 15 m)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 88, 91 ; L’Info Durable, À Restinclières les arbres protègent les cultures ; Ecophytopic, fiche Restinclières ; Réussir Vigne, Agroforesterie les pièges à éviter",
    page: 91
  },
  {
    id: 115,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Permaculture, animaux au vignoble et « Non solus »",
    synth: "Lepeltier présente une échelle de permaculture en dix niveaux attribuée à Alain Malard, de la monoculture à l’énergie, en passant par le sol couvert, les paillages, les haies, les arbres, puis vaches, poules et cochons. Elle évoque aussi moutons, chèvres, poules et labour à cheval au vignoble. La devise « Non solus » (orme et vigne) est celle des Elzevier, imprimeurs de Leyde au XVIIe siècle, et non d’Érasme (mort en 1536) comme l’écrit le livre.",
    mnemo: "L’orme dit à la vigne : « Non solus », tu n’es pas seule ; le mouton, la poule et la haie aussi.",
    flash: { q: "À qui appartient la devise « Non solus » (orme et vigne) ?", a: "À la marque des imprimeurs Elzevier de Leyde, et non à Érasme." },
    qcm: { q: "Quelle devise accompagne l’orme et la vigne dans l’emblème des Elzevier ?", opts: ["Non solus", "In vino veritas", "Labor omnia vincit", "Vitis amica ulmo"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La devise « Non solus » est celle de l’humaniste Érasme.", answer: false }, explanation: "Le livre l’attribue à Érasme « au XVIIe siècle », mais elle figure sur la marque des imprimeurs Elzevier (XVIIe siècle) ; Érasme est mort en 1536." },
      { type: "ordering", prompt: "Selon l’échelle de permaculture présentée dans le livre (attribuée à Alain Malard), remets ces niveaux dans l’ordre croissant.", payload: { items: ["Monoculture", "Sol couvert", "Haies", "Arbres", "Vaches", "Poules"] }, explanation: "Ordre repris du schéma du livre (p. 90) : monoculture, sol couvert, paillages, haies, arbres, vaches, poules, cochons, paysages, énergie." }
    ],
    status: "needs_review",
    to_check: [
      "Échelle de permaculture en 10 niveaux : non retrouvée dans les sources lues (Réussir présente Alain Malard comme vigneron et auteur de Vignes, vins et permaculture) ; présentée comme proposition citée par Lepeltier",
      "Date de l’emblème Elzevier : 1620 selon Elsevier, ou emblème de Corrozet de 1540 adapté à Leyde selon Wikipedia ; non tranché"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 90-91 ; Réussir Vigne, Cinq points clés pour structurer une parcelle en permaculture ; Elsevier Connect, What does Non Solus mean ; Britannica, Elzevir family ; Wikipedia, The Elm and the Vine",
    page: 90
  }
,
  {
    id: 116,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Après 1945 : la viticulture conventionnelle",
    synth: "Après 1945, l’exode rural et le manque de main-d’œuvre poussent à restructurer le vignoble : remembrement, passage de la polyculture à la monoculture, mécanisation. De 1950 au début des années 1990, la révolution agricole généralise les produits de synthèse (herbicides, pesticides, fongicides, engrais) : c’est la viticulture « conventionnelle ». Rachel Carson (1907-1964) en alerte les effets dans Printemps silencieux, paru en 1962 (traduction française en 1963) ; Lepeltier situe dans les années 1970 la prise de conscience du public et des politiques que ce livre a nourrie. Lepeltier chiffre le poids de la vigne dans les pesticides (15,6 % pour 3,2 % de la SAU) ; l’ordre de grandeur est cohérent, mais ce chiffre exact n’est pas confirmé (Sénat 2012 : 14,4 % pour 3,3 %).",
    mnemo: "Le tracteur enjambeur remplace les mains : on arrache les haies, on aligne les rangs, on pulvérise.",
    flash: { q: "Quels bouleversements du vignoble français après 1945 ?", a: "Remembrement, monoculture à la place de la polyculture, mécanisation, puis produits de synthèse (1950 – début des années 1990)." },
    qcm: { q: "Selon le livre, quelle période voit la révolution agricole qui généralise les produits de synthèse ?", opts: ["1900 – 1930", "1950 – début des années 1990", "1995 – 2010", "Depuis 2005"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Printemps silencieux (Silent Spring) de Rachel Carson paraît dans les années 1970.", answer: false }, explanation: "Il paraît le 27 septembre 1962 (traduction française en 1963). Lepeltier place dans les années 1970 la prise de conscience qu’il a nourrie ; l’interdiction du DDT aux États-Unis date de 1972." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Rachel Carson est née en {{1907}} et morte en {{1964}}." } },
      { type: "odd_one_out", prompt: "Selon le livre, quel changement n’appartient PAS à la restructuration du vignoble après 1945 ?", payload: { options: ["Remembrement", "Mécanisation", "Passage de la polyculture à la monoculture", "Retour à la polyculture"], answer: 3 }, explanation: "Le livre décrit l’inverse : la polyculture recule au profit de la monoculture." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Printemps silencieux : paru en 1962 (fr. 1963) ; le livre situe la prise de conscience dans les années 1970 sans dater la parution ; éditeur français non vérifié",
      "15,6 % des pesticides pour 3,2 % de la SAU (chiffres de 2002, publiés en 2005) : source introuvable en ligne ; Sénat 2012 : 14,4 % / 3,3 % ; Agreste et Ecophyto R&D 2010 non lus (HAL bloqué)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 92 ; Universalis, Rachel Carson ; Britannica, Rachel Carson ; L’Info Durable, Vigne et pesticides (mission sénatoriale 2012) ; Assemblée nationale, QE n° 100076",
    page: 92
  },
  {
    id: 117,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "Raisonnée, intégrée, durable : les demi-mesures",
    synth: "Face aux excès de la viticulture conventionnelle, la viticulture raisonnée (traitements informés et contrôlés) puis les approches intégrée et durable (management environnemental et social) se développent. En France, le décret n° 2002-631 du 25 avril 2002 organise la qualification des exploitations en agriculture raisonnée, valable cinq ans et délivrée via des organismes certificateurs agréés. La HVE (Haute Valeur Environnementale), issue du Grenelle de l’environnement, repose sur quatre thèmes : biodiversité, stratégie phytosanitaire, fertilisation et irrigation. Lepeltier cite aussi la norme ISO 14001 et, avec la géographe Sylvaine Boulanger-Fassier, voit dans les mentalités un frein : le temps d’observation passe pour du temps perdu.",
    mnemo: "Trois étiquettes sur la bouteille, un même carnet de traitements : on réduit la dose, on ne change pas la logique.",
    flash: { q: "Quels sont les quatre thèmes de la certification HVE ?", a: "Biodiversité, stratégie phytosanitaire, fertilisation, irrigation (gestion de l’eau)." },
    qcm: { q: "Quel texte officiel encadre en 2002 la qualification des exploitations en agriculture raisonnée ?", opts: ["Le décret n° 2002-631", "La loi Grenelle II", "Le règlement européen sur le bio", "Le décret-loi de 1935 sur les AOC"], good: 0 },
    exos: [
      { type: "mcq_multi", prompt: "Quels thèmes entrent dans la certification HVE ?", payload: { options: ["Biodiversité", "Stratégie phytosanitaire", "Fertilisation", "Irrigation (gestion de l’eau)", "Choix du cépage", "Date des vendanges"], answers: [0, 1, 2, 3] }, explanation: "Quatre thèmes : biodiversité, stratégie phytosanitaire, fertilisation, irrigation." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Une qualification en agriculture raisonnée (décret de 2002) est valable cinq ans.", answer: true }, explanation: "Le décret du 25 avril 2002 fixe une qualification de 5 ans, avec agrément et contrôle des organismes certificateurs." },
      { type: "short_answer", prompt: "En quelle année est publié le décret n° 2002-631 sur la qualification en agriculture raisonnée ?", payload: { accepted: ["2002", "25 avril 2002"] } }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Le livre date l’encouragement officiel de la viticulture raisonnée « depuis 2000 » ; le texte officiel est de 2002 (décret n° 2002-631), « 2000 » non retrouvé",
      "Origine de la HVE : Grenelle (2007+), Grenelle II (2010), décret de juin 2011 ; Pleinchamp date la certification de 2012 ; numéro du décret non confirmé",
      "ISO 14001 : aucune source lue ne la relie à la viticulture durable française",
      "Sylvaine Boulanger-Fassier, La Viticulture durable… (2008) : référence non retrouvée"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 93 ; AIDA/INERIS, décret n° 2002-631 ; Générations Futures, L’agriculture raisonnée ; DRAAF Bourgogne-Franche-Comté, fiche HVE ; Le Monde du Droit, certification environnementale (JO 21 juin 2011) ; Pleinchamp, les 10 ans de la HVE",
    page: 93
  },
  {
    id: 118,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Pointu",
    geo: null,
    titre: "Descola, Latour et la fin du Grand Partage",
    synth: "Pour Philippe Descola (Par-delà nature et culture, Gallimard, 2005), la séparation entre nature et culture est propre au « naturalisme », l’une de quatre ontologies avec le totémisme, l’animisme et l’analogisme ; il a tenu la chaire d’Anthropologie de la nature au Collège de France (2000-2019). Bruno Latour, dans Nous n’avons jamais été modernes (1991), remet en cause cette séparation moderne et s’appuie sur l’hypothèse Gaïa, qui voit la Terre comme un système autorégulé (Lovelock et Margulis, vers 1972). Le livre présente James Lovelock comme climatologue : c’était un chimiste et inventeur.",
    mnemo: "Quatre manières de regarder un arbre : le naturaliste le mesure, l’animiste lui parle, le totémiste s’en réclame, l’analogiste y lit le cosmos.",
    flash: { q: "Quelles sont les quatre ontologies de Descola ?", a: "Naturalisme, animisme, totémisme, analogisme." },
    qcm: { q: "Combien d’ontologies Descola distingue-t-il dans Par-delà nature et culture ?", opts: ["Deux", "Trois", "Quatre", "Cinq"], good: 2 },
    exos: [
      { type: "matching", prompt: "Associe chaque ontologie de Descola à sa caractéristique.", payload: { pairs: [["Naturalisme", "Continuité physique, discontinuité intérieure : dominant aujourd’hui"], ["Animisme", "Exemple : les Achuar"], ["Totémisme", "Exemple : l’Australie"], ["Analogisme", "Dominant en Europe jusqu’à la Renaissance"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "James Lovelock, à l’origine de l’hypothèse Gaïa, était climatologue de formation.", answer: false }, explanation: "Le livre le présente comme climatologue, mais Lovelock (1919-2022) était chimiste et inventeur (détecteur à capture d’électrons, 1957)." },
      { type: "flashcard_reverse", prompt: "Hypothèse avancée vers 1972 par Lovelock et Lynn Margulis : la Terre forme un système vivant autorégulé.", payload: { answer: "L’hypothèse Gaïa" } }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Latour : l’expression « Grand Partage » datée du « début des années 1980 » et les « deux partages » (humains/non-humains ; modernes/non-modernes) ne sont pas confirmés ; l’expression est antérieure (Goody, Lévi-Strauss)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 93-94 ; Collège de France, biographie de Philippe Descola ; Lex.dk, Philippe Descola ; Wikipedia, We Have Never Been Modern ; Universalis, Anthropologie et ontologie ; Britannica, Gaia hypothesis ; Green Templeton College, James Lovelock",
    page: 93
  },
  {
    id: 119,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Pointu",
    geo: null,
    titre: "Une diplomatie avec le vivant : Larrère, Morizot, Calvo",
    synth: "Baptiste Morizot (Manières d’être vivant, Actes Sud, 2020) plaide pour une cohabitation « diplomatique » avec le vivant, et Catherine et Raphaël Larrère (Du bon usage de la nature) pour un usage écocentré de la nature ; la date de ce dernier ouvrage est 1997 selon Wikipédia, 1998 selon Lepeltier. Un encadré évoque Raw Wine Alive!, rendez-vous en ligne de décembre 2021 organisé par Isabelle Legeron MW, où intervient Paco Calvo. Celui-ci dirige le Minimal Intelligence Lab (MINT Lab) de l’université de Murcie et travaille sur l’intelligence des plantes.",
    mnemo: "Pour parler au vivant, envoyer un diplomate plutôt qu’un huissier : Morizot à la table, Calvo qui filme les plantes en accéléré.",
    flash: { q: "Qui est Paco Calvo ?", a: "Le chercheur qui dirige le Minimal Intelligence Lab (MINT Lab) de l’université de Murcie et étudie l’intelligence des plantes." },
    qcm: { q: "Qui dirige le Minimal Intelligence Lab de l’université de Murcie ?", opts: ["Paco Calvo", "Baptiste Morizot", "Philippe Descola", "Francis Hallé"], good: 0 },
    exos: [
      { type: "cloze", prompt: "Complète.", payload: { text: "Manières d’être vivant de Baptiste Morizot paraît en {{2020}} chez {{Actes Sud}}." } },
      { type: "short_answer", prompt: "Dans quelle ville espagnole se trouve l’université où Paco Calvo dirige le MINT Lab ?", payload: { accepted: ["Murcie", "Murcia"] } },
      { type: "flashcard_reverse", prompt: "Manières d’être vivant (Actes Sud, 2020).", payload: { answer: "Baptiste Morizot" } }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Larrère, Du bon usage de la nature : 1997 (Aubier, une seule source) contre 1998 dans le livre ; à doubler avec le catalogue BnF",
      "Morizot : « crise de la sensibilité » et « diplomatie » (formules du livre) non retrouvées littéralement dans l’entretien Reporterre lu",
      "Raw Wine Alive! : événement des 5-6 décembre 2021 confirmé, mais « premier colloque international en ligne » non confirmé"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 94 ; Critiques Libres, Manières d’être vivant ; Reporterre, entretien avec Baptiste Morizot ; Wikipedia, Catherine Larrère ; MINT Lab, Université de Murcie ; JancisRobinson.com, Alive 2021 ; The Drinks Business, Isabelle Legeron MW et Alive",
    page: 94
  },
  {
    id: 120,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: null, appel: null },
    titre: "La carte du bio viticole français en 2020",
    synth: "En 2020, la France compte environ 137 400 ha de vignes bio (certifiées ou en conversion), soit près de 17 % du vignoble (Agence Bio, via Réussir). La carte du livre classe les régions par part de bio : Provence (43,9 %), Jura (32,8 %), Alsace (32,6 %) et Corse (30,6 %) en tête, Champagne (6,2 %) en dernière position. La biodynamie reste marginale au niveau national (environ 1,4 % fin 2019) mais atteint 8,2 % dans le Jura et 5,8 % en Alsace selon la carte.",
    mnemo: "Podium bio du livre : Provence, Jura, Alsace ; la Champagne ferme la marche.",
    flash: { q: "Quelles régions dépassent 30 % de vignes bio sur la carte du livre (2020) ?", a: "Provence, Jura, Alsace et Corse." },
    qcm: { q: "Selon la carte du livre, laquelle de ces régions a la plus forte part de vigne bio en 2020 ?", opts: ["Champagne", "Bordeaux", "Jura", "Bourgogne-Beaujolais"], good: 2 },
    exos: [
      { type: "ordering", prompt: "Classe ces régions de la plus forte à la plus faible part de vigne bio en 2020, selon la carte du livre (p. 95).", payload: { items: ["Jura", "Alsace", "Loire", "Bordeaux", "Champagne"] }, explanation: "Selon la carte du livre : Jura 32,81 %, Alsace 32,62 %, Loire 20,02 %, Bordeaux 16,88 %, Champagne 6,15 %." },
      { type: "mcq_multi", prompt: "Selon la carte du livre, quelles régions dépassent 30 % de vigne bio (certifiée + conversion) en 2020 ?", payload: { options: ["Provence", "Jura", "Alsace", "Corse", "Loire", "Bordeaux"], answers: [0, 1, 2, 3] }, explanation: "Provence 43,89 %, Jura 32,81 %, Alsace 32,62 %, Corse 30,56 % ; Loire 20,02 % et Bordeaux 16,88 % restent en dessous." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon la carte du livre, la Champagne a la plus faible part de bio parmi les douze régions représentées.", answer: true }, explanation: "Champagne : 6,15 %, loin devant la suivante, Bourgogne-Beaujolais (15,55 %)." }
    ],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: [
      "Provence : 43,89 % sur la carte contre « proche de 30 % » pour PACA (Réussir/Agence Bio 2020) ; périmètre différent probable",
      "Languedoc-Roussillon : 17,15 % sur la carte contre 19 % (Occitanie, DRAAF) ; hectares divergents selon les sources",
      "Corse (30,56 %) et Champagne (6,15 %) : ordre de grandeur plausible, non recoupé par une source officielle",
      "Part nationale de 17 % (une seule source, Réussir) ; biodynamie nationale ~1,4 % valable fin 2019, chiffre 2020 non trouvé",
      "Jura : Réussir indique 29 % (périmètre départemental) contre 32,81 % sur la carte"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 95 ; Réussir Vigne, chiffres de la viticulture bio en 2020 (Agence Bio) ; Réussir Vigne, bio 2020 en régions ; Decanter, Bordeaux organic vineyards (CIVB) ; DRAAF Bourgogne-Franche-Comté, viticulture ; DRAAF Occitanie, viticulture LR ; L’Info Durable, biodynamie (2019)",
    page: 95
  }
,
  {
    id: 121,
    theme: "Vinification",
    sous: ["Vin nature"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Une histoire du vin nature",
    synth: "Il n’existe pas de définition légale du vin nature, mais l’expression a une longue histoire. Lepeltier cite André Jullien (Topographie de tous les vignobles connus, 1816) pour un vin « naturel » sans substance étrangère, puis la révolte des vignerons du Midi contre les vins de sucre et trafiqués (1907) et le groupement allemand de 1910, ancêtre du VDP. L’expression revient dans les années 1980 contre les vins technologiques, dans le sillage de Jules Chauvet (1907-1989), négociant du Beaujolais dont s’inspireraient Marcel Lapierre et Pierre Overnoy. L’anthropologue Christelle Pineau a consacré un livre à ce mouvement (2019 selon Lepeltier, 2020 selon La Vie des idées).",
    mnemo: "1907 le Midi crie contre le sucre, 1910 l’Allemagne pose son label : le « naturel » naît d’une méfiance envers le sac de sucre.",
    flash: { q: "Que devient le groupement fondé en 1910 par des producteurs allemands, le Verband Deutscher Naturweinversteigerer ?", a: "Il est l’ancêtre de l’actuel VDP ; « Naturwein » désignait un vin non chaptalisé." },
    qcm: { q: "Quelle année marque la révolte des vignerons du Languedoc-Roussillon contre les vins de sucre et trafiqués ?", opts: ["1816", "1907", "1962", "1985"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque nom à ce qui le caractérise.", payload: { pairs: [["André Jullien", "Topographie de tous les vignobles connus (1816)"], ["Jules Chauvet", "Négociant du Beaujolais (1907-1989)"], ["Verband Deutscher Naturweinversteigerer", "Fondé en 1910, devenu le VDP"]] } },
      { type: "ordering", prompt: "Remets ces jalons dans l’ordre chronologique.", payload: { items: ["Topographie de tous les vignobles connus (1816)", "Révolte des vignerons du Midi (1907)", "Fondation du groupement allemand ancêtre du VDP (1910)", "Retour de l’expression « vin nature » (années 1980)"] }, explanation: "Le retour des années 1980 est donné par Lepeltier ; les trois dates précédentes sont recoupées." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Lepeltier, il existe une définition légale du vin nature.", answer: false }, explanation: "Elle écrit au contraire qu’il n’y a pas de définition légale ; seules des chartes privées existent." },
      { type: "short_answer", prompt: "Quel nom porte aujourd’hui le groupement allemand fondé en 1910 sous le nom de Verband Deutscher Naturweinversteigerer ?", payload: { accepted: ["VDP", "le VDP", "Verband Deutscher Prädikatsweingüter"] } }
    ],
    status: "needs_review",
    to_check: [
      "Définition de Jullien (vin sans substance étrangère) : citation non retrouvée dans les sources lues, texte de 1816 non consulté",
      "Chauvet inspirateur de Lapierre et Overnoy, guidés par Néauport : le rôle de Néauport ne repose que sur un témoignage de forum",
      "Chauvet n’emploierait jamais l’expression « vin naturel » : aucune source ne l’atteste ni ne l’infirme",
      "Livre de Pineau : 2019 selon Lepeltier, 2020 selon La Vie des idées (éditeur non consulté) ; sous-titre « radicalités » au pluriel ; « vignerons chercheurs » non retrouvé"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 96-97 ; Wikipedia, André Jullien ; wein.plus, Jullien et association of German natural wine auctioneers ; Wikipedia, VDP ; Wikipedia, Revolt of the Languedoc winegrowers ; Wikipédia FR, Vin naturel ; Wikipedia, Jules Chauvet ; La Passion du Vin (forum) ; La Vie des idées, In Vino Natura",
    page: 97
  },
  {
    id: 122,
    theme: "Vinification",
    sous: ["Vin nature"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "Les chartes du vin nature",
    synth: "Faute de définition légale, le vin nature se définit par des chartes privées. Lepeltier cite l’AVN (Association des vins naturels), présentée comme la première, les vins S.A.I.N.S. (Sans Aucun Intrant Ni Sulfite) et, la plus récente, Vin Méthode Nature. Celle-ci naît d’un syndicat de défense créé à l’automne 2019 ; son label est présenté en mars 2020 : SO2 total inférieur à 30 mg/L, ajouté seulement avant la mise en bouteille, avec un contrôle par un tiers (audits aléatoires d’un organisme certificateur). La charte a été validée par la DGCCRF, mais reste un label privé : le rôle de l’INAO est contesté.",
    mnemo: "Trois chartes, trois étiquettes : AVN = l’aînée, SAINS = le zéro sulfite, Méthode Nature = le 30 mg sous contrôle.",
    flash: { q: "Quel seuil de SO2 total impose la charte Vin Méthode Nature ?", a: "Moins de 30 mg/L, avec un contrôle par un organisme tiers." },
    qcm: { q: "Que signifie S.A.I.N.S. ?", opts: ["Sans Aucun Intrant Ni Sulfite", "Sélection Agricole Issue de Nos Sols", "Soufre Autorisé Inférieur à Nos Seuils", "Syndicat des Artisans Indépendants du Nature"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le syndicat de défense des vins nature’l, à l’origine de Vin Méthode Nature, a été fondé à l’automne 2019.", answer: true }, explanation: "Le label a été présenté en mars 2020." },
      { type: "mcq_multi", prompt: "Quelles exigences appartiennent à la charte Vin Méthode Nature ?", payload: { options: ["SO2 total inférieur à 30 mg/L", "SO2 ajouté seulement avant la mise en bouteille", "Audits aléatoires par un organisme certificateur", "Interdiction de toute levure, même indigène"], answers: [0, 1, 2] }, explanation: "La charte demande au contraire des levures indigènes." },
      { type: "cloze", prompt: "Complète.", payload: { text: "La charte Vin Méthode Nature fixe un SO2 total inférieur à {{30}} mg/L." } },
      { type: "flashcard_reverse", prompt: "Syndicat créé à l’automne 2019, label présenté en mars 2020 : de quelle charte s’agit-il ?", payload: { answer: "Vin Méthode Nature" } }
    ],
    status: "needs_review",
    to_check: [
      "Année de fondation de l’AVN : 2000 selon une source, aucune année ailleurs ; ne pas dater",
      "S.A.I.N.S. : une seule source donne 2012, les autres citent la charte sans date",
      "Vin Méthode Nature « seule » à pouvoir figurer sur l’étiquette : à nuancer (AVN et S.A.I.N.S. existent comme chartes privées) ; validation DGCCRF confirmée, rôle de l’INAO contesté (reconnaissance selon M. Touton, rejet d’une définition en 2018 selon Reporterre)"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 97 ; Idealwine, label officiel ; Que Choisir, vins nature ; M. Touton ; Reporterre ; Wikipédia FR, Vin naturel",
    page: 97
  },
  {
    id: 123,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Pointu",
    geo: null,
    titre: "Agir indirectement : Haudricourt et Fukuoka",
    synth: "Lepeltier oppose le réflexe « à un problème une molécule » à une conduite multifactorielle qui accompagne la vigne. Elle s’appuie sur André-Georges Haudricourt (1911-1996), dont l’article de 1962 sur la domestication des plantes et animaux distinguerait une action directe positive, occidentale et interventionniste, d’une action indirecte négative, associée à l’Asie. Elle évoque aussi Masanobu Fukuoka (1913-2008), microbiologiste et phytopathologiste revenu sur la ferme familiale de Shikoku, qui y cultive sans machine, pesticide, engrais ni labour, et raconte sa démarche dans La Révolution d’un brin de paille (1975).",
    mnemo: "Haudricourt : le jardinier qui pousse contre celui qui laisse faire ; Fukuoka : un brin de paille suffit à lancer la révolution.",
    flash: { q: "Quel livre de Fukuoka (1975) expose son agriculture sans labour ni intrants ?", a: "La Révolution d’un brin de paille (traduit en français sous le titre La Révolution d’un seul brin de paille)." },
    qcm: { q: "Sur quelle île du Japon se trouve la ferme de Fukuoka ?", opts: ["Hokkaido", "Okinawa", "Shikoku", "Sado"], good: 2 },
    exos: [
      { type: "matching", prompt: "Associe chaque personnage à ses dates.", payload: { pairs: [["André-Georges Haudricourt", "1911-1996"], ["Masanobu Fukuoka", "1913-2008"]] } },
      { type: "short_answer", prompt: "Quelle profession scientifique exerçait d’abord Fukuoka, spécialiste des maladies des plantes ?", payload: { accepted: ["microbiologiste", "phytopathologiste", "un microbiologiste", "un phytopathologiste"] }, explanation: "Formé comme microbiologiste, il a travaillé en inspection végétale à Yokohama." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "L’article de Haudricourt sur la domestication des animaux et la culture des plantes date de 1962.", answer: true }, explanation: "« Domestication des animaux, culture des plantes et traitement d’autrui », L’Homme, 1962." }
    ],
    status: "needs_review",
    to_check: [
      "Distinction de Haudricourt entre action directe positive (Occident) et indirecte négative (Asie) : thèse non confirmée dans les sources lues (analyse HAL bloquée)",
      "Cultures de Fukuoka : riz et céréales d’hiver confirmés, agrumes non retrouvés"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 97-98 ; Wikipédia FR, André-Georges Haudricourt ; Wikipedia EN, André-Georges Haudricourt ; Wikipedia EN, Masanobu Fukuoka ; Wikipédia FR, Masanobu Fukuoka",
    page: 97
  },
  {
    id: 124,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: { pays: "États-Unis", region: "Oregon", appel: "Willamette Valley" },
    titre: "Permaculture, régénératif et vigne non labourée",
    synth: "En 1978, Bill Mollison et David Holmgren publient Permaculture One ; Robert Rodale (1930-1990) popularise ensuite l’agriculture régénérative. Pour Lepeltier, le labour est une bioturbation humaine, intensifiée par la mécanisation du début du XXe siècle. Elle cite Eyrie Vineyards, en Oregon, où David Lett plante du pinot noir en 1965 dans la Willamette Valley ; le domaine affirme n’y avoir jamais labouré, alors que le livre évoque un arrêt du labour par Jason Lett. La Regenerative Viticulture Foundation, ONG britannique lancée en 2022, promeut cette transition.",
    mnemo: "Mollison et Holmgren plantent la graine en 1978 ; Rodale la cultive ; Eyrie la laisse enfin tranquille sous terre.",
    flash: { q: "Quel ouvrage publié en 1978 fonde la permaculture ?", a: "Permaculture One, de Bill Mollison et David Holmgren." },
    qcm: { q: "Où se situe le domaine Eyrie Vineyards ?", opts: ["Willamette Valley (Oregon)", "Napa Valley (Californie)", "Finger Lakes (New York)", "Marlborough (Nouvelle-Zélande)"], good: 0 },
    exos: [
      { type: "cloze", prompt: "Complète.", payload: { text: "{{Permaculture One}} est publié en {{1978}} par Mollison et Holmgren." } },
      { type: "odd_one_out", prompt: "Quel élément n’est pas un fondateur ou auteur de Permaculture One ?", payload: { options: ["Bill Mollison", "David Holmgren", "Robert Rodale"], answer: 2 }, explanation: "Rodale est associé à l’agriculture régénérative, pas à Permaculture One." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La Regenerative Viticulture Foundation est une ONG britannique lancée en 2022.", answer: true } }
    ],
    status: "needs_review",
    to_check: [
      "Rodale et le terme « regenerative organic agriculture » au début des années 1980 : date non confirmée (site du Rodale Institute illisible)",
      "Lett en 1965 : pinot noir confirmé ; le pinot gris est « premier des États-Unis », pas « de la Willamette », et n’est pas daté de 1965",
      "Eyrie dit n’avoir « jamais labouré » ; arrêt du labour par Jason Lett sur 24 ha et études sur les mycorhizes non retrouvés",
      "Mimi Casteel « ingénieure forestière » : les sources disent seulement qu’elle a étudié les sciences forestières"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 96-98 ; Wikipedia, Permaculture et Bill Mollison ; Wikipedia, Robert Rodale ; Regenerative Viticulture Foundation, About us ; The Drinks Business ; Wikipedia, The Eyrie Vineyards ; Eyrie Vineyards, grape growing ; Oregon Business",
    page: 98
  },
  {
    id: 125,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Pointu",
    geo: { pays: "France", region: null, appel: null },
    titre: "La vitiforesterie aujourd’hui",
    synth: "Lepeltier rappelle que la vigne associée aux arbres est connue depuis l’Antiquité : l’asprinio d’Aversa grimpe sur des peupliers au-delà de 10 m, et la pratique est restée répandue en Italie centrale jusqu’aux années 1960 et reste visible en Géorgie, en Bolivie (vallée de Cinti) et au Chili (Colchagua). La vitiforesterie moderne, vieille d’une trentaine d’années, interplante ou borde la vigne d’arbres (sol, biomasse, microclimat, gel). Deux exemples français : Vignenvie à Charnay (Éric Texier, 3 ha, sans labour) et le Château de Fosse-Sèche (Saumurois), dont la carte et le texte du livre donnent des surfaces différentes.",
    mnemo: "L’asprinio monte au peuplier comme au mât : la vigne cherche l’arbre depuis l’Antiquité.",
    flash: { q: "Quel cépage italien du livre est conduit sur de hauts peupliers ?", a: "L’asprinio d’Aversa." },
    qcm: { q: "Selon Lepeltier, depuis quand la vitiforesterie est-elle connue ?", opts: ["Depuis l’Antiquité", "Depuis la Renaissance", "Depuis le phylloxéra", "Depuis les années 1980 seulement"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le livre donne la même surface d’aménagement pour Fosse-Sèche en p. 99 et en p. 101.", answer: false }, explanation: "La légende de la carte (p. 99) indique 30 ha dédiés à l’écosystème, le texte (p. 101) 18 ha d’aménagement agroforestier." },
      { type: "mcq_multi", prompt: "Quels pays ou régions Lepeltier cite-t-elle pour la vigne sur arbres ?", payload: { options: ["Géorgie", "Bolivie (vallée de Cinti)", "Chili (Colchagua)", "Japon (Shikoku)"], answers: [0, 1, 2] }, explanation: "Shikoku est la région de la ferme de Fukuoka, pas un exemple de vitiforesterie." },
      { type: "short_answer", prompt: "Sur quel arbre l’asprinio d’Aversa est-il conduit selon Lepeltier ?", payload: { accepted: ["peuplier", "le peuplier", "peupliers", "les peupliers"] }, explanation: "Selon le livre, à plus de 10 m de haut." }
    ],
    status: "needs_review",
    to_check: [
      "Asprinio d’Aversa : vignes sur peupliers ou ormes, souvent 10 à 15 m (une seule source) ; DOC 1993 non vérifiée sur le disciplinare",
      "Vallée de Cinti : arbres-tuteurs confirmés par une seule source",
      "Vignenvie (Charnay, 2007, 3 ha, Éric Texier) : aucune source fiable lue",
      "Cuivre de Vignenvie : 600 g/an donné comme « dix fois moins » que la limite bio ; la limite bio est de 28 kg/ha sur 7 ans (4 kg/ha/an en moyenne), soit environ sept fois moins, et l’unité de 600 g est à préciser",
      "Fosse-Sèche : 15 ha de vigne et 45 ha au total confirmés ; 30 ha (p. 99) contre 18 ha (p. 101) d’aménagement, 4 500 à 5 000 arbres et projet Nature 2050 non vérifiés"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 99-101 ; Apron and Sneakers, asprinio d’Aversa ; Wine With Seth, Cinti Valley ; Raisin, vignerons de Charnay ; Chambre d’agriculture de l’Aude, gestion du cuivre ; Atlantic Loire Valley, Fosse-Sèche",
    page: 100
  },
  {
    id: 126,
    theme: "Viticulture",
    sous: ["Biodiversité"],
    niveau: "Pointu",
    geo: { pays: "Nouvelle-Zélande", region: "Marlborough", appel: null },
    titre: "Le vitipastoralisme : des moutons dans les vignes",
    synth: "Le vitipastoralisme consiste à faire pâturer des animaux dans la vigne, à demeure ou de passage (souvent l’hiver). Lepeltier cite le domaine Léon Barral (Faugères) comme pionnier de l’intégration animale ; les sources lues y décrivent un troupeau d’environ 60 vaches, sans attester ce rôle de pionnier. Elle s’appuie surtout sur la Nouvelle-Zélande, où une étude de Meredith Niles, Garrett et Walsh (2018, Marlborough, 15 viticulteurs) conclut que les avantages dépassent les inconvénients : tonte, herbicides, azote, fioul et effeuillage d’un côté, dégâts sur fils et tuyaux de l’autre. Attention aux chiffres : le 59 % de l’étude concerne la part des viticulteurs, non des hectares.",
    mnemo: "Le mouton est le tracteur qui broute : il tond, désherbe et fume en une seule passe.",
    flash: { q: "À quoi correspond le 59 % cité par l’étude de Niles et al. ?", a: "À la part de viticulteurs néo-zélandais qui font pâturer leurs vignes, et non à une part des hectares." },
    qcm: { q: "Dans quelle région néo-zélandaise l’étude de Niles et al. (2018) a-t-elle été menée ?", opts: ["Marlborough", "Hawke’s Bay", "Central Otago", "Gisborne"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Selon Lepeltier, 59 % des 37 000 ha de vignes néo-zélandaises accueillent des moutons l’hiver.", answer: true }, explanation: "C’est ce que dit le livre, mais l’étude source parle de 59 % des viticulteurs, et les surfaces actuelles avoisinent 42 000 ha." },
      { type: "matching", prompt: "Associe chaque nom à son rôle dans la fiche.", payload: { pairs: [["Meredith Niles", "Étude de 2018 sur le pâturage à Marlborough"], ["Léon Barral", "Domaine de Faugères cité comme pionnier"]] } },
      { type: "short_answer", prompt: "Quel mot désigne le pâturage d’animaux dans la vigne ?", payload: { accepted: ["vitipastoralisme", "le vitipastoralisme", "viti-pastoralisme"] } }
    ],
    status: "needs_review",
    to_check: [
      "Surface néo-zélandaise : 37 000 ha selon Lepeltier, environ 42 000 ha (41 991 en 2023, 42 519 en 2024) selon New Zealand Winegrowers",
      "Moutons : 27 millions selon Lepeltier, 23,6 millions au 30 juin 2024 selon Stats NZ (chiffre variable selon l’année)",
      "59 % : part des viticulteurs dans l’étude (communication personnelle de Sustainable Winegrowing NZ), non des hectares ; erreur d’interprétation probable du livre",
      "Léon Barral : bovins (environ 60 vaches) d’après les sources lues ; statut de « pionnier » non attesté"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 101 ; Niles, Garrett & Walsh (2018), Agronomy for Sustainable Development ; UVM ScholarWorks ; NZ Winegrowers, Vineyard report 2024 ; Stats NZ via Scoop ; Réussir Vigne ; Not Drinking Poison",
    page: 101
  },
  {
    id: 127,
    theme: "Viticulture",
    sous: ["Modèles agricoles"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’agroécologie : un mot né en 1928",
    synth: "Lepeltier fait apparaître le mot agroécologie en 1928 sous la plume de Basil Bensin ; d’autres auteurs l’attribuent à Friederichs en 1930. Le courant prend son essor dans les années 1970. Elle cite Miguel Altieri pour un ouvrage de base scientifique sur une agriculture alternative (1983 selon elle, 1987 pour l’édition de catalogue). En Amérique latine, la dimension sociale domine, avec la souveraineté alimentaire.",
    mnemo: "Agro + écologie : le champ lu comme un écosystème, et pas seulement comme une usine à grains.",
    flash: { q: "Quel terme désigne l’étude du champ cultivé comme écosystème, apparu en 1928 selon Lepeltier ?", a: "L’agroécologie (Basil Bensin, 1928 ; Friederichs, 1930, selon d’autres auteurs)." },
    qcm: { q: "Quel chercheur Lepeltier cite-t-elle pour les bases scientifiques de l’agroécologie ?", opts: ["Miguel Altieri", "Masanobu Fukuoka", "Jules Chauvet", "Francis Hallé"], good: 0 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Lepeltier attribue l’apparition du mot agroécologie à Basil Bensin en 1928.", answer: true }, explanation: "D’autres auteurs retiennent Friederichs en 1930 : l’origine du mot est débattue." },
      { type: "odd_one_out", prompt: "Quel nom n’est pas lié à l’agroécologie dans cette fiche ?", payload: { options: ["Basil Bensin", "Miguel Altieri", "Jules Chauvet"], answer: 2 }, explanation: "Chauvet est une figure du vin nature (fiche 121)." },
      { type: "short_answer", prompt: "Quel enjeu social domine l’agroécologie en Amérique latine selon Lepeltier ?", payload: { accepted: ["souveraineté alimentaire", "la souveraineté alimentaire"] } }
    ],
    status: "needs_review",
    to_check: [
      "Origine du mot : Bensin 1928 (Wezel et al.) ou Friederichs 1930 (Dalgaard et al.) ; dates de Bensin (1881-1973) non vérifiées",
      "Altieri : 1983 selon Lepeltier et Wikipédia FR, 1987 selon un catalogue (édition Westview) ; titre exact à confirmer"
    ],
    src: "Mille Vignes, P. Lepeltier, p. 101 ; Wikipedia, Agroecology ; Wikipédia FR, Agroécologie ; CiNii, catalogue Altieri",
    page: 101
  }
);
