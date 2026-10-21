# Consignes pour Claude (dépôt millevignes)

Économiser les tokens : ne lire que ce dont la tâche a besoin.

- **Ne jamais lire `data/base.json`** : il est dérivé (`node tools/migrate-fiches.mjs`), volumineux et non versionné (`.gitignore`). Les tests tournent aussi sur GitHub à chaque push.
- Erreurs du livre déjà relevées : `docs/erreurs-du-livre.md` (lire les pages du lot, compléter avant le push).
- Sources citées par Lepeltier, classées par section avec leur état d'accès : `docs/bibliographie-lepeltier.md` (lire la section du lot avant la recherche).
- Les fiches sont dans `fiches/<page>-<section>.js` (une section de Mille Vignes = un fichier, `FICHES.push(...)`). `fiches.js` ne contient que l'en-tête et les catalogues `SOUS` / `THEME_ORDER`.
- Pour ajouter un lot, ouvrir **seulement** le fichier de la section concernée. Section inconnue → créer `fiches/<page de début de section>-<section>.js` et ajouter sa balise `<script>` dans `index.html` après les autres (un test le vérifie).
- Dernier id utilisé, sans rien ouvrir : `grep -ho "^    id: [0-9]*" fiches/*.js | sort -t: -k2 -n | tail -1`
- Fiches déjà en place sur des pages données : `grep -n "page: 1[89]\b" fiches/*.js` puis lire seulement ces blocs.
- Format des exercices et contrôles : `docs/IMPORT_FORMAT.md`. Ne pas relire `docs/AUDIT_INITIAL.md` (historique).
- Contrôles : `node tools/migrate-fiches.mjs && node --test 2>&1 | tail -8` (n'afficher que le résumé ; détail seulement en cas d'échec).
- Chaque fiche porte ses pastilles : `status` (`verified` | `needs_review`) et `to_check` (faits ⚠️). Voir `docs/IMPORT_FORMAT.md`. Après toute modification de pastilles : `node tools/a-verifier.mjs` (régénère `docs/a-verifier.md`, ne pas l'éditer à la main).
- Pastilles : seuls les faits clés restent dans `to_check` ; un détail secondaire appuyé par le seul livre va dans `selon_livre` (hors dette). Régions françaises : catalogue `REGIONS_FR` de `fiches.js`.
- Lot d'une section : suivre le skill `lot-mille-vignes` (sous-agents par chapitre, modèle selon l'étape : haiku pour l'extraction, sonnet pour la recherche et la rédaction, opus pour l'arbitrage et la relecture indépendante ; ids, écriture du fichier, contrôles et push restent à la session principale). Petite tâche (une fiche, un exercice) : sans sous-agent.
