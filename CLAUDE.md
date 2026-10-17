# Consignes pour Claude (dépôt millevignes)

Économiser les tokens : ne lire que ce dont la tâche a besoin.

- **Ne jamais lire `data/base.json`** : il est dérivé (`node tools/migrate-fiches.mjs`) et volumineux.
- Les fiches sont dans `fiches/<page>-<section>.js` (une section de Mille Vignes = un fichier, `FICHES.push(...)`). `fiches.js` ne contient que l'en-tête et les catalogues `SOUS` / `THEME_ORDER`.
- Pour ajouter un lot, ouvrir **seulement** le fichier de la section concernée. Section inconnue → créer `fiches/<page de début de section>-<section>.js` et ajouter sa balise `<script>` dans `index.html` après les autres (un test le vérifie).
- Dernier id utilisé, sans rien ouvrir : `grep -ho "^    id: [0-9]*" fiches/*.js | sort -t: -k2 -n | tail -1`
- Fiches déjà en place sur des pages données : `grep -n "page: 1[89]\b" fiches/*.js` puis lire seulement ces blocs.
- Format des exercices et contrôles : `docs/IMPORT_FORMAT.md`. Ne pas relire `docs/AUDIT_INITIAL.md` (historique).
- Contrôles : `node tools/migrate-fiches.mjs && node --test 2>&1 | tail -8` (n'afficher que le résumé ; détail seulement en cas d'échec).
