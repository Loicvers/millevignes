# FORMAT D'UN LOT — schema_version 1

*Gabarit de production des fiches pour le Projet claude.ai. Remplace `STRUCTURE-FICHE-v2.md`.*
*Contrôle : `node tools/validate.mjs mon-lot.json` (affiche les erreurs, ou l'aperçu de l'import).*

**Circuit actuel** : les fiches sont dans `fiches/<page>-<section>.js` (une section du livre par fichier ; `fiches.js` garde l'en-tête et les catalogues). Claude ajoute les fiches dans le fichier de la section (champs du site) et leurs exercices supplémentaires dans `exos`, au format des exercices décrit ci-dessous, puis lance `node tools/migrate-fiches.mjs && node --test` et pousse sur GitHub. `data/base.json` est un fichier dérivé, à ne jamais modifier à la main : il sert à la validation.

**Pastilles dans `fiches/*.js`** : chaque fiche porte `status` (`"verified"` si tous les faits importants sont ✅, sinon `"needs_review"`) et `to_check` (liste des faits ⚠️, vide si `verified`). La migration les reprend telles quelles ; le site affiche « ✓ vérifiée » ou « ⚠ à vérifier » avec la liste dépliable. Fiche sans `status` = « à revoir » par défaut. Divergences avec le livre : dans la synthèse et/ou un exercice vrai/faux.

Le format « lot JSON » ci-dessous sert aux imports futurs dans l'application. On n'édite rien à la main.
Exemple complet couvrant les 10 types : `tests/fixtures/lot-exemple.json`.

```json
{
  "schema_version": 1,
  "lot": { "titre": "Mille Vignes — Domestication, p. 22-30", "date": "2026-10-14" },
  "sources":   [ ... ],
  "notions":   [ ... ],
  "exercises": [ ... ]
}
```

## Règles communes

- **id** : minuscules, chiffres, tirets. Jamais réutilisé, jamais renommé.
  - notion Mille Vignes : `mv-0013`, `mv-0014`… (suite du dernier id de `data/base.json`, aujourd'hui **mv-0012**) ;
  - exercice : id de la notion + numéro, `mv-0013-01`, `mv-0013-02`… ;
  - source : nom court, `src-wine-grapes-2012`, `src-inao-cdc-margaux`.
- **content_version** : `1` à la création. Pour corriger un élément déjà importé, renvoyer le même id avec `content_version` + 1. Même id + même version + contenu différent = **conflit**, la base n'est pas modifiée.
- Une source déjà dans la base (ex. `mille-vignes`) est citée par son id, pas redéclarée.
- Contenu **reformulé**, jamais recopié. Ne pas inventer de page, date ou URL : laisser `null`.

## Source

```json
{ "id": "src-wine-grapes-2012", "type": "livre", "level": "2a",
  "title": "Wine Grapes", "author": "Robinson, Harding, Vouillamoz", "year": 2012,
  "url": null, "consulted": "2026-10-14", "content_version": 1 }
```

- `type` : `livre` · `article` · `officiel` · `technique` · `reglementaire` · `presse` · `perso` · `autre`
- `level` (obligatoire) : `"1"` officiel · `"2a"` ouvrages et recherche · `"2b"` presse, dégustation · `"perso"`

## Notion (la fiche)

```json
{
  "id": "mv-0013",
  "theme": "Cépages",
  "sous": ["Origine & parenté"],
  "niveau": "Intermédiaire",
  "geo": { "pays": "France", "region": "Bourgogne", "appel": null },
  "titre": "…",
  "synth": "2 à 4 phrases reformulées.",
  "mnemo": "Astuce avec une image concrète, ou null.",
  "refs": [
    { "source_id": "mille-vignes", "page": 27, "partie": "Lire la vigne", "chapitre": "La classification des cépages" },
    { "source_id": "src-wine-grapes-2012", "page": null }
  ],
  "status": "verified",
  "to_check": [],
  "divergences": ["Wine Grapes situe X en 1997, Lepeltier en 1999."],
  "cours": null,
  "content_version": 1
}
```

- `refs` vers `mille-vignes` : donner la **page** suffit. Partie, section et chapitre se déduisent du sommaire (`data/mille-vignes-sommaire.json`). Si `chapitre` est indiqué et ne correspond pas à la page, le lot est refusé.
- `theme`, `sous` : catalogue de `data/base.json` (11 thèmes). Un sous-thème hors catalogue est refusé.
- `niveau` : `Fondamental` · `Intermédiaire` · `Pointu`. `geo` : objet ou `null`.
- **`status` et pastilles** :
  - tous les faits importants ✅ → `"verified"` ;
  - au moins un fait ⚠️ → `"needs_review"` **et** `to_check` liste ces faits (obligatoire) ;
  - les faits ❌ ne figurent pas dans la notion ;
  - `"draft"` pour un brouillon, `"needs_update"` pour une donnée susceptible d'être périmée.
- `divergences` (facultatif) : désaccords entre sources ou avec l'autrice, non tranchés.
- `cours` : page de cours, même structure que dans `STRUCTURE-FICHE-v2.md` (`lede`, `frise`, `essentiel`, `sections`, `synthese`, `src`), ou `null`. `imp` vaut `essentiel` · `important` · `utile` · `culture`.

### Schéma (facultatif)

Champ `schema` de la notion (et de la fiche dans `fiches/*.js`), affiché dans la carte sous la synthèse :

```json
"schema": { "svg": "<svg viewBox=\"0 0 300 160\">…</svg>",
            "legende": "Les stades du cycle végétatif",
            "src": "D'après Lepeltier, Mille Vignes, p. 45" }
```

- Dessin **original** redessiné, jamais une copie ou un scan du livre (le site est public). Réservé aux notions phares ; les autres schémas deviennent des exercices (`ordering`, `matching`) ou un tableau de cours.
- `svg` : un seul `<svg>…</svg>` inerte. Refusé s'il contient un script, un attribut d'événement (`onload`…), un `foreignObject` ou un lien externe. Couleurs via `currentColor` pour suivre le thème.
- `legende` et `src` (crédit) obligatoires.

## Exercices — 10 types

Champs communs :

```json
{ "id": "mv-0013-03", "type": "…", "notion_ids": ["mv-0013"], "prompt": "Consigne ou question affichée",
  "payload": { … }, "explanation": "Correction (facultatif : à défaut, la synthèse de la notion)", "content_version": 1 }
```

| type | payload | exemple |
|---|---|---|
| `flashcard` | `{ "answer": "…" }` | prompt = recto, answer = verso |
| `flashcard_reverse` | `{ "answer": "…" }` | même notion, sens inverse (prompt = la réponse de la flashcard) |
| `mcq_single` | `{ "options": [≥3], "answer": index }` | une bonne réponse |
| `mcq_multi` | `{ "options": [≥3], "answers": [index…] }` | plusieurs bonnes réponses |
| `true_false` | `{ "statement": "…", "answer": true/false }` | justification dans `explanation` |
| `cloze` | `{ "text": "Le {{Pinot}} × {{Gouais blanc|Gouais}}…" }` | `{{réponse|variante}}` par trou |
| `short_answer` | `{ "accepted": ["véraison", "…"] }` | casse, accents et œ ignorés à la correction |
| `matching` | `{ "pairs": [["gauche","droite"], …] }` | ≥ 2 paires |
| `ordering` | `{ "items": ["1er","2e","3e", …] }` | ≥ 3 éléments, **dans l'ordre correct** |
| `odd_one_out` | `{ "options": [≥3], "answer": index }` | l'intrus ; le pourquoi dans `explanation` |

Bonnes pratiques :
- **varier** : viser 4 à 6 exercices par notion, de types différents ;
- index **base 0** ; écrire les options dans un ordre quelconque (le site les mélange à l'affichage) ;
- distracteurs **plausibles**, jamais absurdes ;
- un exercice peut relier plusieurs notions (`notion_ids` à plusieurs ids), surtout `matching` et `ordering`.

## Contrôles automatiques (`tools/lot.mjs`)

Refus si : `schema_version` ≠ 1 · id mal formé ou en double · thème, sous-thème, niveau ou status hors liste · source ou notion référencée inconnue · page hors du livre ou chapitre incohérent avec la page · `needs_review` sans `to_check` · type d'exercice inconnu · payload non conforme à son type · `imp` invalide.
Tests : `node --test`.
