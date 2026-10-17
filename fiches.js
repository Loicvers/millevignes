/* ===================================================================
   FICHES.JS — Base de données des fiches de révision
   -------------------------------------------------------------------
   NE PAS MODIFIER À LA MAIN sauf si tu es à l'aise.
   À chaque chapitre lu, demande à Claude le « bloc fiche » prêt à coller :
   il suffit de l'insérer dans le tableau FICHES ci-dessous, avant le ];
   final, sans oublier la virgule de séparation.

   Champs d'une fiche :
   - id      : numéro unique
   - theme   : thème principal (unique) — voir THEME_ORDER
   - sous    : sous-thèmes (plusieurs possibles) — voir catalogue SOUS
   - niveau  : "Fondamental" | "Intermédiaire" | "Pointu"
   - geo     : { pays, region, appel } ou null
   - titre, synth (synthèse), mnemo (astuce)
   - flash   : { q, a }  (flashcard à retourner)
   - qcm     : { q, opts:[...], good } (good = index de la bonne réponse, base 0)
   - src     : source courte
   - page    : page précise dans Mille Vignes (nombre) — facultatif mais recommandé
   - exos    : exercices supplémentaires { type, prompt, payload, explanation } — voir docs/IMPORT_FORMAT.md
               (pas encore affichés par le site : ils le seront en phase 2)
   =================================================================== */

const FICHES = [
  {
    id: 1,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Bordeaux", appel: null },
    titre: "Le Cabernet-Sauvignon",
    synth: "Né d'un croisement spontané entre le Cabernet franc et le Sauvignon blanc, identifié par l'analyse ADN dans les années 1990. Cépage tardif à petites baies épaisses, riche en tanins — colonne vertébrale des grands rouges du Médoc.",
    mnemo: "« Cab-Sauv = Cabernet franc × Sauvignon blanc. » Son nom contient ses deux parents. Un croisement caché dans le nom.",
    flash: { q: "De quel croisement est issu le Cabernet-Sauvignon ?", a: "Cabernet franc × Sauvignon blanc (croisement spontané)." },
    qcm: { q: "Comment a-t-on prouvé la parenté du Cabernet-Sauvignon ?", opts: ["Par les archives monastiques", "Par analyse ADN dans les années 1990", "Par la forme des feuilles", "Par la dégustation comparée"], good: 1 },
    src: "Lepeltier, Mille Vignes — Domestication",
    page: 27
  },
  {
    id: 2,
    theme: "Cépages",
    sous: ["Mutations", "Profil & usage"],
    niveau: "Fondamental",
    geo: { pays: "France", region: "Bourgogne", appel: null },
    titre: "Le Pinot et ses mutations",
    synth: "Le Pinot est génétiquement instable : Pinot noir, gris et blanc sont le même cépage ayant muté en couleur. Cette plasticité explique une grande diversité née d'une souche unique, surtout en Bourgogne et en Alsace.",
    mnemo: "« Un seul Pinot, trois habits. » Noir, gris, blanc = même plante qui change de manteau (mutation de couleur).",
    flash: { q: "Pinot noir, gris et blanc sont-ils trois cépages distincts ?", a: "Non : un même cépage ayant muté en couleur." },
    qcm: { q: "Qu'est-ce qui distingue Pinot noir, gris et blanc ?", opts: ["Trois espèces différentes", "Des mutations de couleur d'un même cépage", "Trois régions d'origine", "Trois modes de taille"], good: 1 },
    src: "Lepeltier, Mille Vignes — Domestication",
    page: 31
  },
  {
    id: 3,
    theme: "Classifications",
    sous: ["Histoire des crus"],
    niveau: "Intermédiaire",
    geo: { pays: "France", region: "Bordeaux", appel: "Margaux" },
    titre: "Le classement de 1855",
    synth: "Établi pour l'Exposition universelle de Paris, ce classement hiérarchise les crus du Médoc (et Sauternes) selon le prix de vente de l'époque, en cinq niveaux. Quasi figé depuis : une seule modification majeure en plus d'un siècle et demi.",
    mnemo: "« 1855, gravé dans le marbre. » Né d'une expo, classé par le prix, presque jamais retouché. 18-55, deux paires.",
    flash: { q: "Sur quel critère reposait le classement de 1855 ?", a: "Le prix de vente des vins à l'époque." },
    qcm: { q: "À quelle occasion fut créé le classement de 1855 ?", opts: ["La Révolution française", "L'Exposition universelle de Paris", "La création des AOC", "Le phylloxéra"], good: 1 },
    src: "Lepeltier, Mille Vignes — Terroir",
    page: 183
  },
  {
    id: 4,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La véraison",
    synth: "Étape clé du cycle : le raisin change de couleur et entame sa maturation. Le grain se gorge de sucre, l'acidité chute, les arômes se forment. Compte à rebours avant les vendanges.",
    mnemo: "« Vér-aison → vert-à-raisin. » Le vert vire au raisin mûr. À partir de là, ~45 jours avant récolte.",
    flash: { q: "Sucre et acidité à la véraison ?", a: "Le sucre monte, l'acidité chute." },
    qcm: { q: "La véraison correspond à…", opts: ["La floraison", "Le changement de couleur + début de maturation", "La taille d'hiver", "La chute des feuilles"], good: 1 },
    src: "Lepeltier, Mille Vignes — Nature",
    page: 45
  },
  {
    id: 5,
    theme: "Géographie viticole",
    sous: ["Notion de terroir"],
    niveau: "Fondamental",
    geo: { pays: "France", region: "Bourgogne", appel: null },
    titre: "Le climat bourguignon",
    synth: "En Bourgogne, un « climat » n'est pas la météo : c'est une parcelle précise, délimitée et nommée, avec sa géologie et son exposition. Classés à l'UNESCO, ils incarnent l'idée française de terroir.",
    mnemo: "« En Bourgogne, le climat est un lieu, pas un temps. » Un climat = une parcelle à nom propre (ex. Montrachet).",
    flash: { q: "Que désigne un « climat » en Bourgogne ?", a: "Une parcelle de vigne délimitée et nommée." },
    qcm: { q: "Les climats de Bourgogne sont…", opts: ["Des prévisions météo", "Des parcelles délimitées classées UNESCO", "Des cépages locaux", "Des techniques de taille"], good: 1 },
    src: "Lepeltier, Mille Vignes — Terroir",
    page: 158
  },
  {
    id: 6,
    theme: "Cépages",
    sous: ["Ampélographie"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Classification botanique de Vitis vinifera",
    synth: "La vigne cultivée appartient à la famille des Vitacées, ordre des Vitales, dans le clade des Rosidés (eudicotylédones, angiospermes). Le genre Vitis regroupe une soixantaine d’espèces ; V. vinifera est la seule espèce eurasiatique largement utilisée pour le vin. Sa sous-espèce domestiquée est nommée subsp. sativa, dont le nom de référence actuel est subsp. vinifera.",
    mnemo: "Quatre ‘Vi’ qui descendent comme un escalier vers le cep : Vitales → Vitacées → Vitis → vinifera. Et au-dessus, les Rosidés (la vigne est cousine du rosier).",
    flash: { q: "À quelle famille et quel ordre appartient Vitis vinifera, et dans quel clade ?", a: "Famille des Vitacées, ordre des Vitales, clade des Rosidés (eudicotylédones, angiospermes)." },
    qcm: { q: "La sous-espèce cultivée de Vitis vinifera est nommée :", opts: ["subsp. sylvestris", "subsp. sativa (ou subsp. vinifera)", "subsp. rotundifolia", "subsp. labrusca"], good: 1 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; VIVC ; APG IV",
    page: 16
  },
  {
    id: 7,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Fondamental",
    geo: null,
    titre: "Sylvestris et sativa : les deux visages de V. vinifera",
    synth: "Vitis vinifera se divise en deux sous-espèces. La sylvestris (la lambrusque) est la forme sauvage : liane dioïque des forêts alluviales, à petites baies et pépins ronds, aujourd’hui menacée et protégée en France depuis 1995. La sativa (ou vinifera) est la forme domestiquée, hermaphrodite, sélectionnée depuis le Néolithique pour des baies plus grosses et plus sucrées ; c’est elle qui a donné toute la diversité des cépages.",
    mnemo: "Sylvestris vit dans la sylve (la forêt), sativa vient du latin satus, ‘semé, cultivé’. La sauvageonne grimpe aux arbres, la cultivée grimpe au piquet du vigneron.",
    flash: { q: "Quelles sont les deux sous-espèces de Vitis vinifera et qu’est-ce qui les distingue ?", a: "Sylvestris : sauvage, dioïque, petites baies, en voie de disparition (protégée en France depuis 1995). Sativa (ou vinifera) : domestiquée, hermaphrodite, à l’origine de tous les cépages cultivés." },
    qcm: { q: "La lambrusque (V. vinifera subsp. sylvestris) se distingue de la forme cultivée principalement par :", opts: ["Ses fleurs hermaphrodites", "Sa dioécie (pieds mâles et pieds femelles séparés)", "Sa résistance naturelle au phylloxéra", "Son origine nord-américaine"], good: 1 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; INRAE ; arrêté de protection 1995",
    page: 17
  },
  {
    id: 8,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Fondamental",
    geo: null,
    titre: "Domestication de la vigne : le foyer caucasien",
    synth: "La vigne cultivée est née d’une longue domestication de la lambrusque sauvage, amorcée au Néolithique vers 8000 av. J.-C. Le foyer le plus probable se situe dans le bassin caucasien (actuelles Géorgie, Arménie, Turquie orientale), où V. vinifera avait trouvé refuge pendant les dernières glaciations. Les plus anciens résidus de vin attestés (jarres néolithiques) y sont datés d’environ 6000 av. J.-C.",
    mnemo: "Berceau caucasien = vin de Géorgie en qvevri. Quand la dernière glace recule, la vigne sort de sa cachette de montagne et entre chez les hommes.",
    flash: { q: "Où et quand situe-t-on le foyer principal de domestication de Vitis vinifera ?", a: "Dans le bassin caucasien (Géorgie, Arménie, Turquie orientale), à partir d’environ 8000 av. J.-C., au Néolithique." },
    qcm: { q: "Le foyer le plus probable de domestication de la vigne se situe :", opts: ["Dans la vallée du Nil", "Sur les rives de la Méditerranée occidentale", "Dans le bassin caucasien", "En Mésopotamie centrale"], good: 2 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; P. McGovern ; Zohary & Hopf",
    page: 18
  },
  {
    id: 9,
    theme: "Viticulture",
    sous: ["Cycle de la vigne"],
    niveau: "Fondamental",
    geo: null,
    titre: "La vigne, liane arbustive et pérenne",
    synth: "La vigne est une liane verte, arbustive et pérenne, au potentiel adaptatif remarquable. En tant qu’eudicotylédone, elle possède une racine principale pivotante et un cambium qui lui permet de produire du bois et de s’épaissir année après année. Plante à graine, sa fécondation donne un fruit (la baie) dont l’embryon, le pépin, est entouré d’une pulpe nourricière.",
    mnemo: "La vigne, c’est l’arbre déguisé en liane : un cambium d’arbre (pour faire du bois) et un port de liane (qui s’accroche pour aller chercher la lumière). De là sa nature protéiforme.",
    flash: { q: "Pourquoi dit-on de la vigne qu’elle est à la fois une liane et une plante ligneuse ?", a: "Liane par son port grimpant qui cherche la lumière à l’aide de vrilles ; ligneuse car, comme toutes les dicotylédones, son cambium produit du bois et lui permet de s’épaissir et de vivre plusieurs décennies." },
    qcm: { q: "Sur le plan botanique, le pépin de raisin correspond à :", opts: ["Un fruit complet à lui seul", "L’embryon entouré de réserves nutritives", "Une racine modifiée", "Un bourgeon dormant"], good: 1 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier",
    page: 16
  },
  {
    id: 10,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: null,
    titre: "Génome de la vigne : un ‘fossile vivant’ des plantes à fleurs",
    synth: "Le génome de Vitis vinifera (souche PN40024 de Pinot noir) a été entièrement séquencé en 2007 par un consortium franco-italien (Génoscope/INRA). Il révèle une structure très ancestrale, proche de celle de l’ancêtre commun des eudicotylédones, ce qui vaut à la vigne le surnom de ‘fossile vivant’ des plantes à fleurs. Il est particulièrement riche en gènes de la voie des terpènes, des stilbènes et des tanins, ce qui éclaire la complexité aromatique et phénolique du vin.",
    mnemo: "2007, l’année du Pinot noir au microscope. La rose a évolué côté pétales, la vigne est restée ‘archaïque’ dans ses chromosomes : un cœlacanthe végétal, mais avec une trousse d’arômes bien remplie.",
    flash: { q: "En quelle année et sur quel cépage le génome de la vigne a-t-il été décodé ? Qu’a-t-il révélé ?", a: "En 2007, à partir du Pinot noir (souche PN40024). Le génome présente une structure proche de l’ancêtre des eudicotylédones et une richesse marquée en gènes liés aux terpènes et aux polyphénols." },
    qcm: { q: "Le séquençage du génome de la vigne (2007) a notamment mis en évidence :", opts: ["Une duplication récente du génome propre à la vigne", "Une structure proche de l’ancêtre des eudicotylédones et une richesse en gènes terpéniques", "Un nombre de chromosomes inférieur à celui des autres angiospermes", "Une origine nord-américaine de V. vinifera"], good: 1 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; Jaillon et al., Nature 449, 2007",
    page: 16
  },
  {
    id: 11,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Vitacées, sous-genres et trois bassins de Vitis",
    synth: "La famille des Vitacées, apparue au Crétacé il y a environ 100 millions d’années, compte 16 genres selon la classification de Wen et al. (2018) ; Lepeltier en compte 17. Le genre Vitis se divise en deux sous-genres : Muscadinia (2n=40 chromosomes, américain, dont V. rotundifolia, résistante aux pathogènes) et Euvitis (2n=38), de loin le plus important. Euvitis se répartit sur trois bassins : Asie orientale (le plus riche en espèces, intéressant pour la résistance au froid), Amérique du Nord (une trentaine d’espèces coévoluées avec les futurs ravageurs du vignoble européen) et Eurasie/Proche-Orient (une seule espèce, V. vinifera, réfugiée au Caucase pendant les glaciations).",
    mnemo: "Muscadinia/Euvitis = 40/38 chromosomes : ‘le cousin américain a deux chromosomes de plus’. Trois bassins d’Euvitis = trois cadeaux : l’Asie offre le froid, l’Amérique offre la résistance, l’Eurasie offre le vin.",
    flash: { q: "Quels sont les deux sous-genres de Vitis, leurs nombres de chromosomes, et les trois bassins d’Euvitis ?", a: "Muscadinia (2n=40, américain, ~3 espèces dont V. rotundifolia) et Euvitis (2n=38). Les trois bassins d’Euvitis : Asie orientale (résistance au froid), Amérique du Nord (résistance aux pathogènes) et Eurasie/Proche-Orient (V. vinifera, l’espèce du vin)." },
    qcm: { q: "Parmi ces espèces, laquelle appartient au sous-genre Muscadinia ?", opts: ["Vitis vinifera", "Vitis riparia", "Vitis rotundifolia", "Vitis amurensis"], good: 2 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; Wine Grapes (Robinson/Harding/Vouillamoz) ; Wen et al., J. Syst. Evol. 2018",
    page: 17
  },
  {
    id: 12,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: { pays: "France", region: "Champagne", appel: null },
    titre: "Vitis sezannensis : le plus vieux fossile de feuille de vigne",
    synth: "Découvert au XIXᵉ siècle par le paléobotaniste Gaston de Saporta dans les travertins de Sézanne (Marne), Vitis sezannensis est l’un des plus anciens fossiles de feuille rattachés au genre Vitis. Il est daté de la fin du Paléocène (Thanétien supérieur), il y a environ 56 millions d’années, et témoigne de la présence très ancienne des Vitacées en Europe occidentale. Beau clin d’œil : la Champagne, terre du vin, conserve aussi la mémoire fossile de la vigne.",
    mnemo: "Sézanne en Champagne : bulles dans le verre, vigne dans la pierre. Le terroir champenois cachait la doyenne des feuilles de vigne, 56 millions d’années avant le premier coup de sécateur.",
    flash: { q: "Quel est le plus ancien fossile connu de feuille de vigne, et où a-t-il été découvert ?", a: "Vitis sezannensis, découvert dans les travertins de Sézanne (Marne, Champagne), daté de la fin du Paléocène (~56 millions d’années)." },
    qcm: { q: "Le plus ancien fossile de feuille attribué au genre Vitis a été trouvé :", opts: ["Dans le Caucase", "En Sicile", "À Sézanne, en Champagne", "Dans les Andes"], good: 2 },
    partie: "Lire la vigne",
    chapitre: "L’origine de la vigne",
    src: "Mille Vignes, P. Lepeltier ; Saporta 1868 ; MNHN ; Acta Palaeontol. Pol. 2020 (âge du site de Sézanne)",
    page: 17
  }
  ,{
    id: 13,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "Le plus ancien vin connu : la Géorgie vers 6000 av. J.-C.",
    synth: "En 2017, l’équipe de Patrick McGovern et Stephen Batiuk publie dans PNAS l’analyse de jarres néolithiques de Gadachrili Gora et Shulaveris Gora, à environ 50 km au sud de Tbilissi. Huit d’entre elles portent des traces d’acide tartrique, signature du raisin, avec des acides malique, succinique et citrique : du vin, vers 6000-5800 av. J.-C. Ce record recule de 600 à 1 000 ans le précédent, Hajji Firuz Tepe dans le Zagros iranien (vers 5400 av. J.-C.). Le premier pressoir connu, à Areni-1 en Arménie, est bien plus récent : vers 4100-4000 av. J.-C.",
    mnemo: "Géorgie 6000, Iran 5400, Arménie 4000 : le vin descend l’escalier des millénaires en partant du Caucase. 8 jarres, 8 000 ans.",
    flash: { q: "Où et de quand date la plus ancienne preuve chimique de vin ?", a: "Géorgie, sites de Gadachrili Gora et Shulaveris Gora (sud de Tbilissi), vers 6000-5800 av. J.-C. : acide tartrique dans huit jarres (PNAS, 2017)." },
    qcm: { q: "Quel composé sert d’« empreinte » du raisin et du vin dans les résidus archéologiques ?", opts: ["L’acide syringique", "L’acide tartrique", "L’acide acétique", "Le resvératrol"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Range ces sites du plus ancien au plus récent.", payload: { items: ["Gadachrili Gora (Géorgie)", "Hajji Firuz Tepe (Iran)", "Areni-1 (Arménie)"] }, explanation: "Vers 6000, 5400 puis 4100-4000 av. J.-C." },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Le pressoir d’Areni-1, en Arménie, a environ 9 000 ans.", answer: false }, explanation: "Il date de 4100-4000 av. J.-C., soit environ 6 000 ans. Le livre donne « 9 000 ans » p. 20, mais sa propre carte indique 4100-4000 av. J.-C." },
      { type: "short_answer", prompt: "Dans quel pays se trouvent les sites du plus ancien vin connu ?", payload: { accepted: ["Géorgie", "Georgie"] } }
    ],
    src: "Mille Vignes, P. Lepeltier ; McGovern et al., PNAS 2017 ; Barnard et al., J. Archaeol. Sci. 2011",
    page: 19
  },
  {
    id: 14,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’hypothèse paléolithique : avant le vigneron, le cueilleur",
    synth: "Pour Patrick McGovern, l’envie de boire précède la domestication : des chasseurs-cueilleurs auraient goûté des raisins sauvages restés quelques jours à fermenter. L’attrait de l’alcool aurait ensuite poussé à cultiver la vigne. Notre lignée était déjà équipée pour en profiter : une mutation de l’alcool déshydrogénase (ADH4), apparue il y a environ 10 millions d’années chez un ancêtre commun aux grands singes africains, multiplie par environ 40 la capacité à dégrader l’éthanol. Problème : sans maîtrise, ce jus tourne vite au vinaigre. Le défi devient alors de reproduire et de conserver la fermentation.",
    mnemo: "Homo imbibens avant Homo agricola : on a aimé boire avant de savoir planter. Le cueilleur trouve, le vigneron conserve.",
    flash: { q: "Que dit l’hypothèse paléolithique de McGovern ?", a: "Le goût pour des raisins sauvages naturellement fermentés, découverts par des chasseurs-cueilleurs, aurait motivé la domestication de la vigne." },
    qcm: { q: "Quel obstacle les premiers buveurs de raisin fermenté devaient-ils surmonter ?", opts: ["Le manque de sucre des baies sauvages", "La transformation rapide du jus en vinaigre", "L’absence de levures sauvages", "La toxicité des pépins"], good: 1 },
    exos: [
      { type: "cloze", prompt: "Complète.", payload: { text: "McGovern surnomme notre espèce Homo {{imbibens}} ; la mutation qui nous aide à dégrader l’alcool touche l’enzyme {{alcool déshydrogénase|ADH|ADH4}}." } },
      { type: "mcq_single", prompt: "La plus ancienne boisson alcoolisée connue, à Jiahu (Chine, vers 7000 av. J.-C.), était…", payload: { options: ["Un vin de raisin pur", "Un mélange fermenté de riz, de miel et de fruits", "Une bière d’orge", "Un hydromel pur"], answer: 1 }, explanation: "Plus ancienne que le vin géorgien, mais ce n’est pas un vin de raisin pur. D’où la distinction « plus ancien vin » et « plus ancienne boisson alcoolisée »." }
    ],
    src: "Mille Vignes, P. Lepeltier ; McGovern, Ancient Wine (2003) ; Carrigan et al., PNAS 2015 (ADH4) ; McGovern et al., PNAS 2004 (Jiahu)",
    page: 19
  },
  {
    id: 15,
    theme: "Cépages",
    sous: ["Origine & parenté", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: null,
    titre: "L’hypothèse hermaphrodite : la clé de la domestication",
    synth: "Domestiquer, c’est maîtriser la reproduction. La lambrusque (V. sylvestris) est dioïque : pieds mâles et pieds femelles séparés, donc une récolte incertaine. De rares mutants hermaphrodites, capables de s’autoféconder, auraient été repérés et conservés par l’homme. Il les a ensuite fixés par multiplication végétative (bouturage, marcottage) : chaque rejeton est un clone du parent. C’est ainsi qu’apparaît V. vinifera subsp. sativa. José Vouillamoz défend cette lecture. En 2020, Massonnet et al. (Nature Communications) ont localisé le déterminisme du sexe sur un même locus du chromosome 2 et attribuent la forme hermaphrodite à une recombinaison rare survenue pendant la domestication.",
    mnemo: "Sauvage = un couple obligatoire (mâle + femelle). Cultivée = autonome (hermaphrodite). La bouture, c’est la photocopieuse du vigneron : elle fige le bon pied.",
    flash: { q: "Pourquoi l’hermaphrodisme a-t-il été décisif dans la domestication de la vigne ?", a: "La vigne sauvage est dioïque : sa fructification dépend de la présence de pieds mâles. Les rares hermaphrodites, autofertiles, donnent une récolte régulière ; l’homme les a sélectionnés et multipliés par bouturage." },
    qcm: { q: "Par quel moyen l’homme a-t-il conservé à l’identique les pieds hermaphrodites repérés ?", opts: ["Par semis de pépins", "Par multiplication végétative (bouturage, marcottage)", "Par greffage sur porte-greffe américain", "Par pollinisation croisée"], good: 1 },
    exos: [
      { type: "matching", prompt: "Associe chaque forme de V. vinifera à son mode de reproduction.", payload: { pairs: [["subsp. sylvestris (sauvage)", "Dioïque : pieds mâles et femelles"], ["subsp. sativa (cultivée)", "Hermaphrodite, autofertile"]] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Une bouture de vigne donne une plante génétiquement identique au pied mère.", answer: true }, explanation: "C’est un clone. C’est pour cela qu’un cépage peut traverser les siècles inchangé, à quelques mutations près." },
      { type: "odd_one_out", prompt: "Trouve l’intrus : lequel n’est PAS un mode de multiplication végétative ?", payload: { options: ["Bouturage", "Marcottage", "Semis", "Provignage"], answer: 2 }, explanation: "Le semis passe par la graine : il brasse les gènes et ne reproduit donc pas le parent." }
    ],
    src: "Mille Vignes, P. Lepeltier ; J. Vouillamoz ; Massonnet et al., Nature Communications 2020",
    page: 20
  },
  {
    id: 16,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Fondamental",
    geo: null,
    titre: "Du Caucase à la Méditerranée : centres primaires et secondaires",
    synth: "Les premiers centres de domestication occupent une large zone du Caucase au Proche-Orient : Géorgie (culture de Shulaveri-Shomu), Arménie, Zagros iranien, Mésopotamie, Croissant fertile. La vigne cultivée diffuse ensuite vers l’ouest en plusieurs vagues, au rythme des migrations et des échanges, plus fréquents entre 3500 et 3000 av. J.-C. Des centres secondaires naissent autour de la Méditerranée. Là, les proto-cépages venus d’Orient se croisent avec les lambrusques locales : les variétés s’adaptent et se diversifient (baies plus grosses, moins acides, plus sucrées, couleurs variées).",
    mnemo: "Le vin voyage d’est en ouest, comme le soleil à l’envers : il naît au Caucase et prend l’accent local en épousant les lambrusques de chaque rivage.",
    flash: { q: "Que se passe-t-il quand la vigne cultivée atteint les centres secondaires méditerranéens ?", a: "Les proto-cépages se croisent avec les lambrusques locales, ce qui produit des variétés adaptées et diversifiées." },
    qcm: { q: "Quelle zone regroupe les centres primaires de domestication de V. vinifera ?", opts: ["Le Maghreb et l’Andalousie", "Du Caucase au Proche-Orient", "La vallée du Rhin", "L’Asie centrale et la Chine"], good: 1 },
    exos: [
      { type: "mcq_multi", prompt: "Lesquelles de ces régions font partie de la zone primaire de domestication ?", payload: { options: ["Géorgie", "Zagros iranien", "Bourgogne", "Croissant fertile", "Andalousie"], answers: [0, 1, 3] } },
      { type: "short_answer", prompt: "Comment appelle-t-on la vigne sauvage locale avec laquelle les proto-cépages se sont croisés ?", payload: { accepted: ["lambrusque", "lambrusques", "sylvestris", "vitis sylvestris"] } }
    ],
    src: "Mille Vignes, P. Lepeltier ; McGovern et al., PNAS 2017",
    page: 20
  },
  {
    id: 17,
    theme: "Histoire",
    sous: ["Antiquité"],
    niveau: "Intermédiaire",
    geo: { pays: "Égypte", region: null, appel: null },
    titre: "L’Égypte ancienne et la couleur des premiers raisins",
    synth: "Les fresques funéraires de l’Ancien Empire (vers 2700-2220 av. J.-C.) montrent les plus anciennes représentations connues de la couleur des raisins : toutes les grappes sont noires. La chimie confirme la place du rouge. Maria Rosa Guasch-Jané (université de Barcelone) a trouvé de l’acide syringique, produit de dégradation des pigments du raisin noir, dans les jarres de Toutânkhamon. Ses travaux y ont aussi révélé du vin blanc (2006). Le pigment pelliculaire n’était donc qu’au début de sa sélection.",
    mnemo: "Syringique = signe du rouge. Sur les murs, des grappes noires ; dans les jarres de Toutânkhamon, du rouge et aussi du blanc.",
    flash: { q: "Quel marqueur chimique révèle un vin rouge dans une jarre antique ?", a: "L’acide syringique, issu de la dégradation des pigments (anthocyanes) du raisin noir." },
    qcm: { q: "Sur les fresques de l’Ancien Empire égyptien, les grappes représentées sont…", opts: ["Toutes blanches", "Toutes noires", "Moitié noires, moitié blanches", "Roses"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Les analyses des jarres de Toutânkhamon n’ont révélé que du vin rouge.", answer: false }, explanation: "Guasch-Jané a aussi identifié du vin blanc (2006)." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Dans les jarres antiques, l’acide {{tartrique}} prouve la présence de raisin, et l’acide {{syringique}} celle d’un vin rouge." } }
    ],
    src: "Mille Vignes, P. Lepeltier ; Guasch-Jané et al., Anal. Chem. 2004 et J. Archaeol. Sci. 2006",
    page: 21
  },
  {
    id: 18,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: null,
    titre: "Cépages primitifs, anciens et récents",
    synth: "Grâce aux marqueurs moléculaires, l’ampélographe Thierry Lacombe (INRAE Montpellier) range la vigne en quatre groupes historiques : les lambrusques, puis les cépages primitifs, anciens et récents. Comme la vigne se multiplie par voie végétative, des cépages anciens de plusieurs siècles nous accompagnent encore : savagnin, pinot. Un pépin médiéval trouvé près d’Orléans a ainsi le même ADN que le savagnin blanc actuel (Ramos-Madrigal et al., Nature Plants, 2019). Aucun cépage « primitif » n’a en revanche été retrouvé : soit ils ont disparu, soit nous n’en connaissons que des descendants.",
    mnemo: "Lambrusque → primitif (introuvable) → ancien (savagnin, pinot) → récent. Le savagnin, c’est un clone qui a traversé le Moyen Âge sans changer de passeport.",
    flash: { q: "Pourquoi peut-on encore boire des cépages vieux de plusieurs siècles ?", a: "Parce que la vigne se multiplie par voie végétative : chaque bouture est un clone, et le cépage se transmet à l’identique (savagnin, pinot)." },
    qcm: { q: "Lequel de ces quatre groupes n’a jamais été retrouvé parmi les vignes actuelles ?", opts: ["Les lambrusques", "Les cépages primitifs", "Les cépages anciens", "Les cépages récents"], good: 1 },
    exos: [
      { type: "ordering", prompt: "Range ces groupes du plus ancien au plus récent.", payload: { items: ["Lambrusques", "Cépages primitifs", "Cépages anciens", "Cépages récents"] } },
      { type: "mcq_single", prompt: "Quel cépage actuel partage son ADN avec un pépin médiéval retrouvé près d’Orléans ?", payload: { options: ["Chardonnay", "Savagnin blanc", "Gamay", "Melon de Bourgogne"], answer: 1 } }
    ],
    src: "Mille Vignes, P. Lepeltier ; T. Lacombe (INRAE) ; Ramos-Madrigal et al., Nature Plants 2019",
    page: 21
  },
  {
    id: 19,
    theme: "Cépages",
    sous: ["Profil & usage", "Ampélographie"],
    niveau: "Intermédiaire",
    geo: { pays: "Chypre", region: null, appel: null },
    titre: "Le maratheftiko, une vinifera à fleurs femelles",
    synth: "Cépage rouge autochtone de Chypre, le maratheftiko est un rare exemple de V. vinifera non hermaphrodite : ses fleurs sont fonctionnellement femelles. Pour être fécondé, il doit être planté au milieu d’autres variétés qui fleurissent en même temps, traditionnellement le mavro. Même pollinisé, il donne souvent des grappes irrégulières aux petites baies (millerandage) et de faibles rendements. Presque disparu avec la modernisation du vignoble, il est aujourd’hui préservé et revalorisé au nom de la diversité ampélographique.",
    mnemo: "Maratheftiko = « Mara, il lui faut un fiancé ». Fleurs femelles : pas de grappe sans voisin pollinisateur, le mavro.",
    flash: { q: "Qu’a de particulier le maratheftiko de Chypre ?", a: "Ses fleurs sont femelles : il ne s’autoféconde pas et doit être complanté avec un pollinisateur (le mavro), d’où des rendements faibles et du millerandage." },
    qcm: { q: "Pourquoi plante-t-on le maratheftiko avec d’autres cépages ?", opts: ["Pour assembler les vins à la cave", "Parce que ses fleurs femelles ont besoin d’un pollinisateur", "Pour le protéger du phylloxéra", "Pour limiter sa vigueur"], good: 1 },
    exos: [
      { type: "short_answer", prompt: "Quel cépage chypriote sert traditionnellement de pollinisateur au maratheftiko ?", payload: { accepted: ["mavro"] } },
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "Toutes les V. vinifera cultivées sont hermaphrodites.", answer: false }, explanation: "Quelques cépages ont des fleurs femelles, comme le maratheftiko." }
    ],
    src: "Mille Vignes, P. Lepeltier ; Falstaff, fiche Maratheftiko",
    page: 21
  },
  {
    id: 20,
    theme: "Cépages",
    sous: ["Origine & parenté"],
    niveau: "Pointu",
    geo: null,
    titre: "Vitis amurensis, la vigne du grand froid",
    synth: "Originaire de la vallée de l’Amour, entre Russie et Chine, V. amurensis est l’espèce de vigne la plus résistante au froid : elle supporte environ −45 °C dans l’air et −16 °C au niveau des racines. Des chercheurs russes s’y intéressent dès 1907. En Chine, dans le Jilin, on en fait du vin, très acide, dès les années 1930. Surtout, elle s’hybride facilement : on la retrouve dans l’ascendance du cabernet severny, du solaris ou du rondo, des cépages pensés pour les vignobles du nord.",
    mnemo: "Amurensis, la vigne de l’Amour… et du froid : −45 °C, elle tient. Ses petits-enfants s’appellent severny (« du nord » en russe) et solaris.",
    flash: { q: "Pourquoi V. amurensis intéresse-t-elle les sélectionneurs ?", a: "Elle supporte des froids extrêmes (environ −45 °C) et s’hybride facilement : on la trouve dans l’ascendance du solaris, du cabernet severny et du rondo." },
    qcm: { q: "De quelle région V. amurensis est-elle originaire ?", opts: ["Des Appalaches", "De la vallée de l’Amour (Russie, Chine)", "Du Caucase", "Des Andes"], good: 1 },
    exos: [
      { type: "mcq_multi", prompt: "Lesquels de ces cépages ont V. amurensis dans leur ascendance ?", payload: { options: ["Solaris", "Cabernet severny", "Rondo", "Chardonnay", "Syrah"], answers: [0, 1, 2] } },
      { type: "matching", prompt: "Associe chaque espèce à son atout.", payload: { pairs: [["V. amurensis", "Résistance au grand froid"], ["Muscadinia rotundifolia", "Résistance au nématode du court-noué"]] } }
    ],
    src: "Mille Vignes, P. Lepeltier ; Wine Grapes (Robinson/Harding/Vouillamoz) ; glossaire Wein-Plus",
    page: 18
  },
  {
    id: 21,
    theme: "Viticulture",
    sous: ["Maladies"],
    niveau: "Pointu",
    geo: null,
    titre: "Muscadinia rotundifolia contre le court-noué",
    synth: "La muscadine (Muscadinia rotundifolia), vigne du sud-est des États-Unis, compte 40 chromosomes, contre 38 chez Vitis, ce qui rend les croisements difficiles et souvent stériles. Elle résiste pourtant à de nombreux parasites, dont Xiphinema index, le nématode qui transmet le virus du court-noué, l’une des maladies virales les plus graves de la vigne. Ses hybrides ont donné des porte-greffes tolérants (VR O39-16, par exemple). Elle a aussi sa légende : la « Mother Vine » de Roanoke, en Caroline du Nord, un scuppernong que le livre date d’environ 1500. Les historiens penchent plutôt pour les années 1850.",
    mnemo: "Le nématode pique, le virus suit : la muscadine ne se laisse pas faire. 40 chromosomes, un cousin trop différent pour faire des enfants faciles.",
    flash: { q: "Quel intérêt présente Muscadinia rotundifolia pour la viticulture ?", a: "Sa résistance à Xiphinema index, le nématode vecteur du court-noué : elle sert à créer des porte-greffes tolérants (ex. VR O39-16)." },
    qcm: { q: "Qui transmet le virus du court-noué à la vigne ?", opts: ["Un puceron", "Le nématode Xiphinema index", "La cicadelle de la flavescence dorée", "Le phylloxéra"], good: 1 },
    exos: [
      { type: "true_false", prompt: "Vrai ou faux ?", payload: { statement: "La « Mother Vine » de Roanoke est datée avec certitude de 1500.", answer: false }, explanation: "C’est une tradition. Les historiens (NCpedia) estiment plutôt les années 1850." },
      { type: "cloze", prompt: "Complète.", payload: { text: "Muscadinia compte {{40}} chromosomes, Vitis en compte {{38}}." } }
    ],
    src: "Mille Vignes, P. Lepeltier ; Ferris et al. 2012 (porte-greffes VR) ; NCpedia, Mother Vineyard",
    page: 18
  }
];

/* Catalogue des sous-thèmes par thème.
   Ajoute librement de nouveaux sous-thèmes ici si besoin. */
const SOUS = {
  "Viticulture":        ["Cycle de la vigne", "Conduite", "Taille", "Maladies"],
  "Cépages":            ["Ampélographie", "Origine & parenté", "Mutations", "Profil & usage"],
  "Géologie-Terroir":   ["Calcaire", "Argile", "Schiste", "Galets", "Volcanique"],
  "Géographie viticole":["Notion de terroir", "Régions", "Appellations"],
  "Classifications":    ["Histoire des crus", "AOC / IGP", "Hiérarchies"],
  "Vinification":       ["Macérations", "Fermentations", "Techniques"],
  "Élevage":            ["Bois", "Lies", "Récipients", "Durée"],
  "Dégustation":        ["Méthode", "Arômes", "Défauts"],
  "Accords":            ["Principes", "Régionaux"],
  "Histoire":           ["Antiquité", "Moyen Âge", "Moderne"],
  "Service":            ["Contenants", "Bouchage", "Température & carafage", "Art de servir"]
};

/* Ordre d'affichage des thèmes dans le filtre */
const THEME_ORDER = [
  "Viticulture", "Cépages", "Géologie-Terroir", "Géographie viticole",
  "Classifications", "Vinification", "Élevage", "Dégustation", "Accords", "Service", "Histoire"
];
