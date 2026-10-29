# Feuille de route

À lire en début de session, avec la fin de `docs/journal.md` (ce qui a été fait) et `docs/etat.md` (les chiffres).
À tenir à jour : cocher ce qui est fait, ajouter les décisions nouvelles. Mise à jour : 29/10/2026.

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
- Dépôt de sources : écriture autorisée par Loïc (registre, outils) ; jamais de contenu des sources dans ce dépôt public.

## À faire, par priorité
1. **Lots France sur les régions peu couvertes** (en cours de développement de son côté) : Jura, Savoie, Provence, Corse, Sud-Ouest (une fiche chacune), puis Alsace, Champagne, Beaujolais. Source principale : WSET D3 2024 (dépôt de sources). Skill `lot-mille-vignes`.
2. **Relancer l'OCR** sur le PC avec `py outils/extraire_indra.py <pdf> <dossier>` (dépôt de sources), puis remplacer le texte et pousser :
   - [x] World Atlas of Wine 7e (fait le 29/10 : 201 pages, texte remplacé)
   - [x] WSET 2 (fait le 29/10 : 118 pages, texte presque identique à l'ancien OCR, un peu plus propre)
   - [x] Jourjon, Morlat, Seguin 1991 (fait le 29/10 : 24 pages)
   - [x] Morris, Bourgogne blanc et Vins de Loire (faits le 29/10 avec `--ocr` : ordre de lecture et caractères nettement meilleurs)
3. **Cours « Approfondir » des autres cépages** (9 sur 76 faits : chardonnay, pinot noir, cabernet-sauvignon, merlot, syrah, grenache noir, sauvignon blanc, chenin, riesling). Suivants logiques : gamay, cabernet franc, sémillon, gewurztraminer, viognier, mourvèdre, tempranillo, sangiovese, nebbiolo.
4. **Monde** : 1 à 4 fiches par pays ; à développer selon le temps restant après la France.
5. **Plus de fiches « Pointu »** (114 sur 748) si l'objectif devient un diplôme (WSET 3 ou 4).

## Audit du 29/10 (reste à faire)
Corrigé le 29/10 : hors ligne, quiz imprimé, lenteur au chargement, alternance livre/France, plafond des intervalles à l'échéance.
- [x] Vrai/faux rééquilibré (29/10) : 152 → 258 vrais sur 641 (40 %) ; 106 énoncés faux réécrits en vrais à partir de leur explication et de la synthèse, sans fait nouveau (3 rédacteurs, relecture indépendante : 88 validés, 18 corrigés). Test : cliquet à 38 % sur l'existant, 35 à 65 % sur les nouvelles fiches (id > 750).
- [x] Explications (29/10) : les 209 exercices corrigés qui n'en avaient pas (97 QCM, 13 QCM multiples, 29 appariements, 70 autres) en ont une, tirée de la synthèse de la fiche (198, relecture indépendante : 162 validées, 36 corrigées) ou des sources (11, livre, WSET D3, Oxford Companion). Les 750 flashcards n'en ont pas besoin (la réponse s'affiche). Test : aucun exercice corrigé sans explication.
- [ ] Exercices dont un élément n'est pas dans la synthèse (relevés le 29/10) : fiche 70, « sa longueur » comme critère ampélographique de la grappe (le livre ne cite que forme et compacité) ; fiche du n45, paire « riparia aime les sols riches et frais ». À vérifier sur les sources.
- [x] Erreur reposée dans la même séance : 4 exercices plus loin (29/10 ; avant : en fin de séance).
- [x] Recherche plein texte dans les fiches (29/10) : champ en tête de l'onglet Fiches, tous les mots cherchés dans le titre, la synthèse et l'astuce ; se combine aux filtres, à « S'entraîner » et à l'examen blanc.
- [x] Examen blanc minuté (29/10) : 40 questions corrigées automatiquement, une par fiche, une minute par question, sans correction avant le bilan (score, seuil WSET 55 %, résultat par thème, « Revoir mes erreurs »). Résultats conservés (100 derniers, dans la sauvegarde) et affichés dans « Mon suivi » avec le thème le plus faible ; les erreurs sur des fiches déjà travaillées passent « à revoir demain » (pas celles des fiches jamais lues, qui gardent leur découverte).
- [x] Design (29/10) : en-tête réduit sur mobile (130 → 112 px, sous-titre masqué) et collant (le titre défile, les onglets restent) ; réglages remontés dans un panneau sous l'en-tête (bouton « Réglages ») ; sommaire des fiches par partie (Livre · France · Cépages · Monde), une recherche ou un filtre montrant tout. La barre de filtres ne s'affiche que dans Fiches et Masterclass (voulu : Masterclass s'en sert). Reste : largeurs sur ordinateur.
- [ ] Biais des QCM : la bonne réponse est strictement la plus longue dans 49 % des cas (471 sur 958, recompté le 29/10 ; 25 % attendus). Test : cliquet à 50 % sur l'existant, 35 % au plus sur les nouvelles fiches. Rallonger les leurres au fil des lots.

## En attente de Loïc
- Relecture humaine des 14 cours écrits le 28/10 : facultative. Deux relecteurs IA indépendants les ont relus le 29/10 et les anomalies sont corrigées (voir le journal).

## Fait
- Tests sur iPhone réel (29/10) : mode sombre, ouverture sans réseau, sauvegarde vers iCloud Drive, restauration et échéance validés.

## Idées non retenues pour l'instant
- Pineau, *La Corne de vache et le Microscope* (2019) : texte indisponible (29/10), recherche abandonnée ; la fiche du vin nature s'appuie sur d'autres sources, la notice suffit pour citer le livre.
- Mesure de l'efficacité de la répétition espacée par type d'exercice : attendre d'avoir des semaines de journal.
- Champ `sources` par fiche : chantier de saisie lourd.
- Accessibilité au lecteur d'écran et navigation des onglets aux flèches : à tester sur appareil.
