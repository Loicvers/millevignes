# Audit initial — Phase 0

*Cave à savoir — 13 octobre 2026. Dépôt audité : `Loicvers/millevignes` (public), commit `8f57a2e`.*
*Aucun fichier existant n'a été modifié. Ce rapport est le seul ajout.*

## 1. État réel du projet

| Élément | Constat (vérifié) |
|---|---|
| Dépôt | 2 fichiers seulement : `index.html` (301 lignes) et `fiches.js` (227 lignes). 5 commits, tous du 17 juin 2026. |
| Fichiers de référence | `CONTEXTE-PROJET.md`, `STRUCTURE-FICHE-v2.md`, `boussole-classement.md`, `fiche-modele-complete.js`, `architecture.mermaid` : **absents du dépôt**. Ils n'existent que dans le Projet claude.ai. |
| Technologie | HTML + CSS + JavaScript natif, aucune dépendance, aucun build, aucun `package.json`, aucun test. Polices Google Fonts. |
| Hébergement | GitHub Pages sur un dépôt **public** : contenu et code lisibles par tous. |
| Données | 12 fiches, ids 1 à 12, dernier id = **12**. |
| Progression | `localStorage`, clé `mv_progress_v1`, par fiche. |

Environnement de travail : Node 22, git et gh disponibles. Pas d'accès en écriture au dépôt depuis cette session (lecture seule).

## 2. Inventaire des fiches (`fiches.js`)

- **Par thème** : Cépages 7 · Viticulture 2 · Classifications 1 · Géographie viticole 1 · Histoire 1. Six thèmes sur onze sont vides.
- **Par niveau** : Fondamental 6 · Intermédiaire 4 · Pointu 2.
- **Pages citées** : 16 à 183 (Domestication surtout).
- **Contrôle automatique** (script Node, lecture seule) :
  - ids uniques, thèmes et sous-thèmes tous présents dans les catalogues, niveaux valides, `good` dans les bornes : ✅
  - champ `page` présent partout : ✅
  - aucune fiche n'a de champ `cours` : les pages de cours n'existent pas encore.
  - fiches 6 à 12 portent deux champs hors gabarit, `partie` et `chapitre` (utiles, à intégrer au nouveau schéma plutôt qu'à supprimer).
  - **bonne réponse du QCM : en position 2 (index 1) dans 9 fiches sur 12, en position 3 pour les 3 autres, jamais en 1 ou 4.** Comme `index.html` ne mélange pas les options, la réponse se devine.
- **Collision d'id** : `fiche-modele-complete.js` (Projet claude.ai) utilise l'id **10** pour « Pinot × Gouais », alors que l'id 10 du dépôt est « Génome de la vigne ». Si le modèle est collé tel quel, doublon.

## 3. Vérification des constats préliminaires (brief, §15)

| Constat | Résultat |
|---|---|
| Progression uniquement en `localStorage`, sans export ni partage | ✅ confirmé. Seule action : « Réinitialiser toute ma progression ». |
| Champ `cours` non affiché, pas de filtre « Essentiel seul » | ✅ confirmé. |
| Pas de filtre par niveau | ✅ confirmé (le niveau est affiché en étiquette seulement). |
| `src` en texte libre | ✅ confirmé. |
| Aucun statut éditorial (✅/⚠️) dans les données | ✅ confirmé. |
| Une flashcard + un QCM par fiche | ✅ confirmé. |
| Pas de manifeste PWA ni de Service Worker | ✅ confirmé. |
| Textes injectés via `innerHTML` | ✅ confirmé (lignes 199-292). Sans risque tant que les données viennent du dépôt ; à remplacer avant tout import de fichier. |

Constats supplémentaires :
- L'onglet **Atelier masterclass** est identique à « Réviser » : seul le texte d'introduction change.
- Le badge « À revoir » ne compte que les fiches déjà notées une fois ; une fiche jamais vue n'apparaît jamais dans « À revoir ».
- L'évaluation SM-2 est déclarée par l'utilisateur après le QCM, sans tenir compte du résultat du QCM.

## 4. Composants réutilisables

- **Taxonomie** (`SOUS`, `THEME_ORDER`) : à extraire telle quelle en données.
- **Contenu des 12 fiches** : convertible sans perte (ids `1` → `mv-0001`, `flash` → exercice `flashcard`, `qcm` → exercice `mcq_single`, `partie`/`chapitre`/`page` → référence de source).
- **Design** (palette, typographie, cartes, flashcard qui se retourne) : bon point de départ.
- **Filtres** thèmes / sous-thèmes / géographie et logique `matches()` : réutilisables.
- **Algorithme de révision** : simple et lisible ; à appliquer par exercice plutôt que par fiche.

## 5. Absent ou non vérifiable

- Fichiers de référence dans le dépôt (voir §1).
- Contenu réel de la progression sur tes appareils (`localStorage`) : invisible depuis le dépôt.
- Le dépôt privé `Loicvers/site` (poussé aujourd'hui) n'a pas été inspecté : à confirmer s'il concerne ce projet.
- L'adresse GitHub Pages et sa configuration n'ont pas été vérifiées.

## 6. Risques techniques, par priorité

1. **Perte de progression** : vider le navigateur, changer de téléphone ou passer en navigation privée efface tout, sans sauvegarde possible.
2. **Référentiel hors dépôt** : les règles de production (gabarit, boussole, contexte) ne sont pas versionnées avec les données.
3. **Collision d'ids** entre le modèle du Projet et les données (id 10).
4. **QCM devinables** : bonne réponse presque toujours en 2ᵉ position.
5. **Confidentialité** : dépôt et site publics. Acceptable pour des fiches reformulées, pas pour un carnet personnel.
6. **Édition manuelle de `fiches.js`** : une virgule manquante casse tout le site, sans message d'erreur visible.

## 7. Architecture proposée (adaptée à la taille réelle)

Le projet est petit : 2 fichiers, 12 fiches. On le fait évoluer au lieu de reconstruire selon l'arborescence du brief (§8).

- **Garder** JavaScript natif, sans build ni framework, servi en fichiers statiques.
- **Données** : `fiches.js` → `data/notions.json` + `data/exercises.json` + `data/sources.json` + `data/taxonomy.json`, chargés par `fetch`. L'ancien `fiches.js` reste intact jusqu'à validation de la migration.
- **Validation** : un script Node sans dépendance (`tools/validate.mjs`), réutilisé par l'application à l'import.
- **Progression** : clé par exercice, avec boutons **Exporter / Importer ma progression** dès la phase 1. Ça règle le risque n°1 et permet le passage ordinateur ↔ téléphone, en manuel.
- **Découpage en modules** seulement quand `index.html` devient difficile à suivre.
- **Reporté** : IndexedDB, Service Worker, Supabase, hébergement privé. Utiles, mais pas avant les décisions du §8.

## 8. Décisions qui t'appartiennent

1. **Dépôt cible** : on continue dans `millevignes`, ou `Loicvers/site` est déjà prévu pour Cave à savoir ?
2. **Accès en écriture** : autoriser cette session à pousser dans le dépôt (sinon tu copies les fichiers à la main).
3. **Ancienne progression** : la récupérer (export manuel depuis chaque navigateur) ou repartir de zéro ? Avec 12 fiches, repartir de zéro est un choix raisonnable.
4. **Fichiers de référence** : les verser dans le dépôt (`docs/`) pour qu'ils soient versionnés avec les données.
5. **Confidentialité** : le site doit-il devenir privé, ou seules les données personnelles (carnet, progression) doivent-elles l'être ?

## 9. Prochaine étape recommandée

**Phase 1, réduite au strict nécessaire** :
1. `data/*.json` + `docs/IMPORT_FORMAT.md` (le nouveau gabarit pour la production des lots dans le Projet claude.ai).
2. `tools/validate.mjs` + migration des 12 fiches avec rapport de migration.
3. Export / import de la progression dans `index.html`.
4. Mélange des options QCM à l'affichage.

Les types d'exercices supplémentaires arrivent en phase 2, un par un.

---

**Fait** : inspection du dépôt, contrôle automatisé des 12 fiches, vérification des 8 constats préliminaires, rédaction de ce rapport.
**Fichiers créés/modifiés** : `docs/AUDIT_INITIAL.md` (créé). Aucun autre.
**Tests exécutés** : contrôle de cohérence de `fiches.js` par script Node (ids, thèmes, sous-thèmes, niveaux, bornes QCM, champs hors gabarit). Résultats au §2. Aucun test d'interface exécuté.
**Risques ou limites** : progression réelle et dépôt `site` non inspectés.
**Décision attendue** : §8, points 1 et 2 au minimum.
**Prochaine étape** : Phase 1 réduite (§9), après ta validation.
