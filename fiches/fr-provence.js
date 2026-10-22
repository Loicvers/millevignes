// La France viticole — Provence (hors livre). Voir l’en-tête de fiches.js et FRANCE_SOMMAIRE.
FICHES.push(
  {
    id: 419,
    theme: "Géographie viticole",
    sous: ["Régions","Appellations"],
    niveau: "Fondamental",
    geo: {"pays":"France","region":"Provence","appel":null},
    source: "france",
    chapitre: "Provence : panorama et appellations",
    titre: "Provence : la région du rosé",
    synth: "La Provence est la première région française pour les rosés AOP : 40 à 45 % de la production nationale selon le CIVP (39 % en 2012 d’après FranceAgriMer). Le vignoble AOP couvre environ 27 500 ha ; la récolte 2024 a atteint 1,13 million d’hl, dont 89 % de rosé. Trois grandes AOP structurent la région : côtes-de-provence (la plus vaste, environ 20 400 ha en 2022), coteaux-d’aix-en-provence (environ 4 400 ha) et coteaux-varois-en-provence (environ 3 000 ha), toutes fortement tournées vers le rosé. Côté histoire, les Phocéens fondent Marseille vers 600 av. J.-C., il y a environ 2 600 ans, et y apportent la vigne ; la plus ancienne vigne retrouvée près de Marseille date, elle, du Ve siècle av. J.-C. Bandol, à part, est célèbre pour son mourvèdre.",
    mnemo: "Une carte postale rose : trois bandes de couleur-appellation sur la côte, dont presque tout le dégradé tire vers le rose, et à l’horizon un bateau grec qui accoste à Marseille avec ses ceps.",
    flash: {"q":"Quelles sont les trois grandes AOP de Provence ?","a":"Côtes-de-provence, coteaux-d’aix-en-provence et coteaux-varois-en-provence.","keys":[["côtes-de-provence","cotes-de-provence","côtes de provence"],["coteaux-d’aix","coteaux d’aix","coteaux-d'aix","aix"],["coteaux-varois","coteaux varois","varois"]]},
    qcm: {"q":"Quelle part des rosés AOP français la Provence représente-t-elle aujourd’hui, d’après le CIVP ?","opts":["Environ 10 %","Environ 25 %","Environ 40 à 45 %","Plus de 80 %"],"good":2,"expl":"Elle domine le rosé AOP sans en avoir le monopole : le CIVP parle de 40 à 45 % de la production nationale, contre 39 % en 2012. Les autres régions produisent encore l’essentiel du reste."},
    exos: [{"type":"ordering","prompt":"Classe ces AOP provençales, de la plus étendue à la moins étendue (surfaces 2022).","payload":{"items":["Côtes-de-provence","Coteaux-d’aix-en-provence","Coteaux-varois-en-provence"]},"explanation":"Côtes-de-provence couvre plus de quatre fois la surface de coteaux-d’aix, elle-même devant coteaux-varois."},{"type":"cloze","prompt":"Complète la phrase.","payload":{"text":"En 2024, {{89}} % de la récolte AOP de Provence était du rosé."},"explanation":"Sur 1,13 Mhl récoltés, environ 1,0 Mhl étaient des rosés (CIVP) : la région est un vignoble spécialisé."},{"type":"true_false","prompt":"Vrai ou faux ?","payload":{"statement":"Les Phocéens ont introduit la vigne en Provence au XVe siècle avant J.-C.","answer":false},"explanation":"Marseille a été fondée vers 600 av. J.-C. : le XVe siècle av. J.-C. est beaucoup trop ancien pour les Phocéens."}],
    schema: null,
    cours: null,
    status: "needs_review",
    to_check: ["Part de la Provence dans les rosés du monde : environ 5 % d’après le CIVP (chiffres clés 2024), mais non repris dans le bilan 2025 ; le livre dit 6 % ⚠️"],
    selon_livre: ["Bellet (Nice) : rouge et rosé de braquet et folle noire, blanc de vermentino (chardonnay seulement accessoire), AOC du 11 novembre 1941 : fiches INAO et cahier des charges (décret du 1er décembre 2011) ; surface non donnée"],
    src: "CIVP, chiffres clés 2024 et 2025, guide pratique ; FranceAgriMer, Observatoire du rosé (2014) ; wein.plus d’après Inrap (vignoble de Marseille) ; INAO, cahier des charges Bandol (BO-agri, arrêté du 11 août 2026, 8 communes, 40 hl/ha) et projet de modification (2024) ; D’après École du Vin de France, Le Grand Cours de dégustation (Hachette), p. 234-237 ; cf. Mille Vignes, P. Lepeltier, p. 183"
  }
);
