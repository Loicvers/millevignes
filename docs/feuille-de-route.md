# Feuille de route

À lire en début de session, avec la fin de `docs/journal.md` (ce qui a été fait) et `docs/etat.md` (les chiffres).
À tenir à jour : cocher ce qui est fait, ajouter les décisions nouvelles. Mise à jour : 30/10/2026.

## Objectif
- Être prêt **le plus tôt possible**, première échéance le **31/12/2026**. Pas de diplôme précis visé pour l'instant.
- Dans l'app : réglage « Échéance de révision » (Réglages et sauvegarde). Au 28/10, avec 748 fiches à découvrir : 12 nouvelles fiches par jour, séances jusqu'à 44 exercices. Le rythme se recalcule chaque jour.
- Conséquence : privilégier ce qui sert la révision d'ici là (couverture et justesse) plutôt que de nouvelles fonctions.

## Décisions prises
- Contenu : cours « Approfondir » écrits uniquement à partir des fiches vérifiées, sans fait nouveau (comme les récits).
- Contrôle des citations : `tools/verifier-citations.mjs` vérifie les seules citations « Selon le livre (p. N) ». Étendre le contrôle aux nombres des synthèses a été essayé et écarté (51 % absents de la page : les synthèses citent d'autres sources).
- Chargement à la demande des fiches et allègement des `selon_livre` : écartés (évaluation ≈ 120 ms, 1,3 Mo compressé, gain trop faible).
- Sauvegarde : restauration par fusion (la réponse la plus récente gagne), pas de serveur ni de synchronisation par compte.
- OCR : `indra-ocr` retenu à la place de Tesseract (essai du 28/10 sur le World Atlas p. 26 : chiffres et petits mots justes, ordre des colonnes parfois mêlé). Il tourne sur le PC de Loïc (Windows, PowerShell : `py "$HOME\Downloads\extraire_indra.py" "<pdf>" "<dossier resultats>"`, rien ne s'affiche avant la fin ; fichier renvoyé par l'envoi web de GitHub, Claude le range et le compare), pas dans le conteneur (modèles bloqués).
- Réseau du conteneur (29/10) : BO-agri (info.agriculture.gouv.fr) autorisé, cahiers des charges lisibles (recherche plein texte, section I = date de reconnaissance) ; www.inao.gouv.fr autorisé (fiches produit lisibles, ex. inao.gouv.fr/node/2097) ; extranet.inao.gouv.fr (PDF des cahiers des charges) encore refusé.
- Dépôt de sources : écriture autorisée par Loïc (registre, outils) ; jamais de contenu des sources dans ce dépôt public.

## À faire, par priorité
1. **Lots France sur les régions peu couvertes** (en cours de développement de son côté) : Jura (fait le 30/10 : 11 fiches, cartes, récits ; 818 et 820 en attente des arrêtés), Savoie (fait le 30/10 : 13 fiches, cartes, récits ; 822 et 830 à vérifier), Provence (fait le 30/10 : 16 fiches, cartes, récits ; 832, 841, 842 à vérifier), Corse, Sud-Ouest (fait le 30/10 : 24 fiches, cartes, récits ; 844 à vérifier) (une fiche chacune), Alsace (fait le 30/10 : 9 fiches, cartes, récits ; 860 et 863 à vérifier), Beaujolais (fait le 29/10). Reste : voir « Régions : niveau de détail » ci-dessous. Source principale : WSET D3 2024 (dépôt de sources). Skill `lot-mille-vignes`.
2. **Relancer l'OCR** sur le PC avec `py outils/extraire_indra.py <pdf> <dossier>` (dépôt de sources), puis remplacer le texte et pousser :
   - [x] World Atlas of Wine 7e (fait le 29/10 : 201 pages, texte remplacé)
   - [x] WSET 2 (fait le 29/10 : 118 pages, texte presque identique à l'ancien OCR, un peu plus propre)
   - [x] Jourjon, Morlat, Seguin 1991 (fait le 29/10 : 24 pages)
   - [x] Morris, Bourgogne blanc et Vins de Loire (faits le 29/10 avec `--ocr` : ordre de lecture et caractères nettement meilleurs)
3. [x] **Cours « Approfondir » des cépages** : fait le 30/10, 76 sur 76 (les 49 derniers par blocs de 10, appuyés sur les fiches vérifiées et recontrôlés dans Wine Grapes, l’Oxford et les supports WSET du dépôt de sources, avec au plus deux compléments attribués par cours ; voir le journal).
3b. [x] **Cours « Approfondir » de la vinification** : fait le 30/10, 71 sur 71 (voir le journal ; quelques fiches à reprendre : 231, 244, 342, 356, 357).
4. **Monde** : 1 à 4 fiches par pays ; à développer selon le temps restant après la France.
5. **Plus de fiches « Pointu »** (114 sur 748) si l'objectif devient un diplôme (WSET 3 ou 4).

## Régions : niveau de détail (bilan du 30/10)
Référence : les lots Rhône, Alsace, Sud-Ouest (une fiche par appellation ou style, vérifiée sur le cahier des charges en vigueur, carte de situation par fiche d’appellation, récit de chaque chapitre, cours « Approfondir » de la région mis à jour).
- [ ] **Languedoc** (12) : appellations regroupées par 2 ou 3 (Pic Saint-Loup + Terrasses, Minervois + Corbières + Fitou…) ; manquent AOC Languedoc et ses dénominations (Grés de Montpellier, Pézenas, Clape, Cabardès, Malepère, Clairette…), crus séparés (Boutenac, La Livinière). Aucune carte sur les fiches d’appellation.
- [ ] **Roussillon** (10) : 4 fiches d’appellation groupées (Banyuls + Collioure, Maury + Rivesaltes + Muscat…) ; à éclater, aucune carte.
- [x] **Val de Loire** : fait le 30/10 (65 fiches, 33 nouvelles 868-900, 8 recentrées, cartes de situation, récits des 4 chapitres). Restent à vérifier 885 Touraine Noble Joué et 891 Orléans (cahiers du 27/10/2026 non publiés sur BO-agri), 900 Côte Roannaise (cahier introuvable) ; cours « Approfondir » de la région (409) à mettre à jour ; cahiers de Menetou-Salon, Châteaumeillant et Côtes du Forez (2011-2013) à revoir s’il en existe de plus récents.
- [ ] **Bourgogne** (50) : Côte de Beaune 21 et Côte de Nuits 12, mais Chablis 2, Côte chalonnaise 1, Mâconnais 2 ; 4 cartes en tout.
- [ ] **Bordeaux** (44) : détail atteint, cartes presque absentes (1 sur 35 fiches d’appellation).
Ordre : Languedoc, Roussillon, Bourgogne hors Côte d’Or, cartes de Bordeaux ; Corse en dernier (pas de vins corses à la cave).
- [ ] **Corse** (3 fiches) : lot complet à faire (Patrimonio, Ajaccio, Vin de Corse et ses 5 dénominations, Muscat du Cap Corse, milieu, cépages et styles), cartes, récits des 2 chapitres (aucun), cours.
- [ ] **Cours de région** absents : Jura, Savoie, Provence, Sud-Ouest, Corse (Alsace fait le 30/10).
- [ ] **Récits** absents : Corse (2), Charentes, Lorraine, France (2).
- [ ] **Points à vérifier** des lots du 30/10 : 818, 820 (Jura), 822, 830 (Savoie), 832, 841, 842 (Provence), 844 (Sud-Ouest), 860, 863 (Alsace).
- Champagne (15 : 4 secteurs, styles, 3 AOC), Charentes et Lorraine : niveau suffisant pour l’objectif ; Lorraine pourrait passer à 2 fiches (Toul, Moselle).

## Refonte de la structure (proposée le 29/10, validée par Loïc)
Quatre onglets autour des deux usages (réviser chaque jour, travailler devant un client) ; mêmes données et mêmes clés de stockage.
- [x] Étape 1 — **Aujourd'hui** (accueil, remplace « Session du jour ») : séance du jour avec durée estimée, échéance (J-n, fiches vues, rythme), reprendre la lecture, examen blanc et points durs, suivi en bref.
- [x] Étape 2 — **Atlas** (29/10) (remplace Cartes et les parties France et Monde de Fiches) : une ligne par région ou pays avec sa progression ; page de région avec carte et partenaires, S'entraîner / Examen blanc / Lire, et trois blocs (vignoble et appellations, cépages, dans le livre). Une région réunit ses fiches des trois parties (Bordeaux : 21 + 5 + 11).
- [x] Étape 3 — **Bibliothèque** (29/10) (Livre, Cépages, Lexique) et barre à 4 onglets, éventuellement en bas d'écran sur mobile. Peut attendre janvier.
- [x] Atlas plus lisible (29/10, maquette validée) : accueil en tuiles, page de région en trois blocs (carte, réviser, fiches groupées avec les comptes de la région), région précédente / suivante.

## Audit du 29/10 (reste à faire)
- [x] Audit du code du 30/10 : cache hors ligne sans mise à jour en arrière-plan, échecs d'enregistrement signalés, « Effacer » complet. Le reste de cet audit (biais des QCM, fiches 70 et 78) est fait le même jour.
Corrigé le 29/10 : hors ligne, quiz imprimé, lenteur au chargement, alternance livre/France, plafond des intervalles à l'échéance.
- [x] Vrai/faux rééquilibré (29/10) : 152 → 258 vrais sur 641 (40 %) ; 106 énoncés faux réécrits en vrais à partir de leur explication et de la synthèse, sans fait nouveau (3 rédacteurs, relecture indépendante : 88 validés, 18 corrigés). Test : cliquet à 38 % sur l'existant, 35 à 65 % sur les nouvelles fiches (id > 750).
- [x] Explications (29/10) : les 209 exercices corrigés qui n'en avaient pas (97 QCM, 13 QCM multiples, 29 appariements, 70 autres) en ont une, tirée de la synthèse de la fiche (198, relecture indépendante : 162 validées, 36 corrigées) ou des sources (11, livre, WSET D3, Oxford Companion). Les 750 flashcards n'en ont pas besoin (la réponse s'affiche). Test : aucun exercice corrigé sans explication.
- [x] Exercices dont un élément n'est pas dans la synthèse (relevés le 29/10) : fiche 70, « sa longueur » comme critère ampélographique de la grappe (le livre ne cite que forme et compacité) ; fiche du n45, paire « riparia aime les sols riches et frais ». Vérifié le 30/10 : la longueur n'est dans aucune source, remplacée par un leurre faux ; « sols riches et frais » est dans le Foëx et l'Oxford mais pas dans la synthèse, paire ramenée à « craint le calcaire (chlorose ferrique) ».
- [x] Erreur reposée dans la même séance : 4 exercices plus loin (29/10 ; avant : en fin de séance).
- [x] Recherche plein texte dans les fiches (29/10) : champ en tête de l'onglet Fiches, tous les mots cherchés dans le titre, la synthèse et l'astuce ; se combine aux filtres, à « S'entraîner » et à l'examen blanc.
- [x] Examen blanc minuté (29/10) : 40 questions corrigées automatiquement, une par fiche, une minute par question, sans correction avant le bilan (score, seuil WSET 55 %, résultat par thème, « Revoir mes erreurs »). Résultats conservés (100 derniers, dans la sauvegarde) et affichés dans « Mon suivi » avec le thème le plus faible ; les erreurs sur des fiches déjà travaillées passent « à revoir demain » (pas celles des fiches jamais lues, qui gardent leur découverte).
- [x] Design (29/10) : en-tête réduit sur mobile (130 → 112 px, sous-titre masqué) et collant (le titre défile, les onglets restent) ; réglages remontés dans un panneau sous l'en-tête (bouton « Réglages ») ; sommaire des fiches par partie (Livre · France · Cépages · Monde), une recherche ou un filtre montrant tout. La barre de filtres ne s'affiche que dans Fiches et Masterclass (voulu : Masterclass s'en sert). Reste : largeurs sur ordinateur.
- [x] Biais des QCM (30/10) : la bonne réponse était strictement la plus longue dans 46 % des QCM (472 sur 1019) ; les 230 où l'écart était le plus visible sont réécrits (leurres rallongés, parfois bonne réponse resserrée, aucun fait nouveau ; 5 rédacteurs, 2 relecteurs indépendants : 193 validés, 37 corrigés). Reste 23,7 % (hasard : 25 %). Test : cliquet à 25 % sur l'existant, 35 % au plus sur les nouvelles fiches.

## Alsace : ce qui manque (lot du 30/10, PR #32 fusionnée)
- [ ] **860 Klevener** : date d’introduction à Heiligenstein par Erhard (Ehret) Wantz, 1740 (Oxford) ou 1742 (klevener.fr, heywang-vins.fr : autorisation d’étendre la plantation sur l’Auboden après un litige devant le Conseil des échevins de Strasbourg ; acte non cité). Chercher une source historique (archives de Heiligenstein ou de Strasbourg, histoire du vignoble alsacien, ODG ou syndicat viticole).
- [ ] **863 « Alsace cru » / premier cru** : état connu par Vitisphere seulement (27 mars et 4 août 2025). À trouver : avis du comité national de l’INAO, procédure nationale d’opposition (liste inao.gouv.fr/pno : rien pour l’Alsace au 27/10/2026), arrêté. Le dossier « cru » et « premier cru » de 2017 et les projets de cahier sont sur extranet.inao.gouv.fr, refusé par la session.
- [ ] **861 pinot noir** : seule source fiable, l’Oxford (11 % du vignoble en 2019, en `selon_livre`). Il manque un chiffre primaire récent (CIVA, FranceAgriMer, douanes) ; Vinous (1 840 ha, 12 %, 2024) et le Figaro Vin (1 337 ha, 9,1 %) divergent et n’ont pas été ouverts. Le graphique du WSET D3 (CIVA 2021) est illisible dans le texte du dépôt de sources.
- [ ] **Surfaces des grands crus** (864-866) : tirées d’une capture de la brochure du CIVA (Brochure_D13_Grands_Crus, version anglaise, p. 12). Il manque l’année de la brochure ; Kanzlerberg 3,23 ha (CIVA) contre 3,40 ha (cahier). Ranger la brochure dans le dépôt de sources et l’ajouter au registre.
- [ ] **Partenaires** : relancer `tools/cartes/partenaires.mjs` (liste privée) pour les 4 nouvelles cartes (860, 861, 865, 866).
- [ ] **CONTEXTE-PROJET** (Projet claude.ai) : reporter le lot Alsace (9 fiches 859-867, 7 vérifiées, 2 à vérifier ; 865 fiches au total).
- Réseau : vinsalsace.com coupe la connexion depuis le conteneur (même autorisé) ; franceagrimer.fr, extranet.inao.gouv.fr, klevener.fr, v1.vinous.com non autorisés.

## En attente de Loïc
- Relecture humaine des 14 cours écrits le 28/10 : facultative. Deux relecteurs IA indépendants les ont relus le 29/10 et les anomalies sont corrigées (voir le journal).

## Fait
- Schémas et cartes (29/10) : 101 → 247. Cartes de situation pour les appellations du Rhône, de la Loire et de Champagne et pour les 76 cépages, cartes des 14 pays, Lorraine et Charentes (voir le journal). Reste : relancer `partenaires.mjs` sur les nouvelles cartes (liste privée) ; vérifier sur BO-agri les cahiers récents de Sancerre, Menetou-Salon, Châteaumeillant.
- Rhône par appellation (29/10) : 39 fiches au lieu de 21 (18 nouvelles, 9 recentrées), toutes vérifiées sur les cahiers des charges en vigueur ; Côtes du Vivarais et Clairette de Bellegarde sans cahier lu (absents du BO-agri).
- Beaujolais par appellation (29/10) : 20 fiches au lieu de 11 (9 nouvelles, 3 recentrées), toutes vérifiées sur les cahiers des charges en vigueur.
- Bordeaux par appellation (29/10) : 44 fiches au lieu de 22, une par appellation, toutes vérifiées (Lalande-de-Pomerol et Saint-Georges sur les fiches produit INAO).
- Tests sur iPhone réel (29/10) : mode sombre, ouverture sans réseau, sauvegarde vers iCloud Drive, restauration et échéance validés.

## Idées non retenues pour l'instant
- Pineau, *La Corne de vache et le Microscope* (2019) : texte indisponible (29/10), recherche abandonnée ; la fiche du vin nature s'appuie sur d'autres sources, la notice suffit pour citer le livre.
- Mesure de l'efficacité de la répétition espacée par type d'exercice : attendre d'avoir des semaines de journal.
- Champ `sources` par fiche : chantier de saisie lourd.
- Accessibilité au lecteur d'écran et navigation des onglets aux flèches : à tester sur appareil.
