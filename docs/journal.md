# Journal du projet

Une ligne datée par session (ce qui a changé, décisions). Les chiffres à jour sont dans `docs/etat.md`, pas ici.

## Historique repris de CONTEXTE-PROJET (avant le 21/10/2026, soir)
- 2026-09 : choix d'un dépôt GitHub (Markdown/JS) comme source de vérité plutôt que Notion ; le site reste l'interface de révision.
- 2026-10-18 : Domestication (fiches 1-53) et Nature (4, 54-96) en ligne ; Écologie (97-127) en ligne. Premières pages Approfondir (12 notions) et schémas. Contrôles relancés par GitHub à chaque push ; `data/base.json` n'est plus versionné.
- 2026-10-19 : Climat (128-156) en ligne. Chantier « termes illustrés » (schémas, exercice « Légender le schéma », « Mes points durs », onglet Lexique). Récits de chapitre (`data/recits.js`) avec bouton « Écouter ». Réglages pédagogiques : 5 nouvelles fiches par jour, carte « Découverte », mode « Lire un chapitre ».
- 2026-10-20 : Géologie (157-188), Terroir (189-222, plus 3 et 5) et Vinification (223-252) en ligne, chacune relue par opus. Wikipédia exclu des sources (seule sa bibliographie sert).
- 2026-10-21 : Dégustation (253-292), Service (293-336) et Conclusion (337-341) en ligne : tout le livre a ses fiches. Audit des fiches 6-21 (p. 16-21). Compléments hors livre tirés du Handbook of Enology (342-365) et de Spurrier et Dovaz (366-371). Règle sur le poids de Lepeltier (son avis mène sur les jugements de praticienne ; la source primaire récente tranche sur un fait vérifiable). Sources déposées par Loïc : 16 fiches mises à jour.

## 2026-10-21 (soir)
- Bilan objectif du projet. Décisions : double vérification réservée aux faits clés (champ `selon_livre` pour les détails secondaires, hors dette) ; prochain grand chantier = France par régions, appellations, cépages et styles (atlas déposés) ; le lien avec les bouteilles de la cave viendra après ; point d'usage réel dans quelques semaines.
- Tri des 846 points à vérifier (sonnet, relecture opus) : 590 rangés « selon le livre », 256 restent en dette ; notes « Wikipédia retiré » gardées en dette.
- Étiquettes géographiques normalisées et catalogue `REGIONS_FR` (test). Sauvegarde de la progression par le menu de partage.
- Niveaux : les 20 cas litigieux tranchés selon l’avis de Claude, validé par Loïc.
- Contexte réorganisé : CONTEXTE-PROJET réduit aux règles stables ; chiffres générés dans `docs/etat.md` ; ce journal ; sources lues dans `docs/sources-lues.md`.
- Lot A hors livre (fiches 372-384, 40 exercices) d’après le Grand Cours de dégustation de l’École du Vin (Hachette, 2b), recoupé par Plantgrape, Anderson et Nelgen 2020, OIV, INAO, Comité Champagne et le SAT WSET : dix profils de cépages de France (p. 31) et trois fiches styles, climat dans le verre, qualité (p. 278). Relecture opus : 30 corrections. Erreurs du livre Hachette confirmées : grenache 3e et non 2e cépage de France ; carignan « plus de 75 000 ha » = chiffre de 2010 (47 312 ha en 2016) ; airén plus le premier cépage mondial depuis 2010 ; Coulée de Serrant « cinq plus grands blancs du monde » = avis de critique. Révision géographique décidée : cartes SVG originales à légender (exercice existant) et filtre geo.

## 2026-10-22
- Ouverture du chantier « La France viticole » (hors livre) : fiches à `source: "france"` rangées par chapitre (`FRANCE_SOMMAIRE` dans `fiches.js`), affichées après le livre ; les nouveautés du livre passent en premier dans la Session du jour.
- Lot Bourgogne : 17 fiches (385-401) en six chapitres (panorama et appellations, Chablis et Grand Auxerrois, Côte de Nuits, Côte de Beaune, Côte chalonnaise, Mâconnais), 98 exercices. Recherche sonnet, relecture opus (37 corrections). 9 vérifiées, 8 à vérifier (13 points clés).
- L'atlas déposé sert de trame, pas de source : nombreuses données datées ou fausses (voir `docs/sources-lues.md`).
