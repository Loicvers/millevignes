# L'Atelier des Mille Vignes

Site de révision œnologique, à partir de *Mille Vignes* (Pascaline Lepeltier) et de « La France viticole » :
fiches vérifiées, exercices en répétition espacée, lexique, cartes, masterclass. Site statique, sans serveur,
utilisable hors ligne (PWA) ; la progression reste dans le navigateur (sauvegarde et restauration dans « Réglages »).

## Lancer le site en local
```bash
python3 -m http.server 8000
```
puis ouvrir http://localhost:8000.

## Organisation
| Où | Quoi |
|---|---|
| `fiches/` | les fiches, un fichier par section du livre ou par région (`FICHES.push(...)`) |
| `fiches.js` | catalogues (thèmes, régions, sommaire France) |
| `exercices.js` | fabrication des exercices, correction, plan des séances, répétition espacée |
| `app.js`, `style.css`, `index.html` | l'interface |
| `sw.js` | cache hors ligne (liste des fichiers et nom du cache générés) |
| `data/` | lexique, récits de chapitre, sommaire |
| `tools/` | outils de contrôle et de génération |
| `docs/` | état du projet, journal, bibliographie, erreurs du livre, format d'import |

## Après une modification
```bash
node tools/sync-site.mjs
```
```bash
node tools/migrate-fiches.mjs && node --test
```
Le premier aligne `index.html` et `sw.js` sur les fichiers et renouvelle le cache (sinon les appareils gardent
l'ancienne version) ; le second régénère `data/base.json` et lance les tests, qui tournent aussi sur GitHub à chaque push.
Chiffres du projet : `node tools/etat.mjs` (écrit `docs/etat.md`).

## Sources
Les textes intégraux sont dans un dépôt **privé** séparé (`millevignes-sources`, droits d'auteur), jamais ici.
`node tools/verifier-citations.mjs` contrôle les citations du livre contre ce texte (dépôt cloné à côté).

Consignes de travail pour Claude : `CLAUDE.md`.
