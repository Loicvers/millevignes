# FORMAT D'UN LOT — schema_version 1

*Gabarit de production des fiches pour le Projet claude.ai. Remplace `STRUCTURE-FICHE-v2.md` et `fiche-modele-complete.js`.*
*Contrôle : `node tools/validate.mjs mon-lot.json` (affiche les erreurs, ou l'aperçu de l'import).*

**Circuit actuel** : les fiches sont dans `fiches/<page>-<section>.js` (une section du livre par fichier, ajout par `FICHES.push(...)` ; `fiches.js` garde l'en-tête et les catalogues). Claude ajoute les fiches (champs du site) et leurs exercices supplémentaires dans `exos`, au format des exercices décrit ci-dessous, pose les pastilles (`status`, `to_check`), puis lance `node tools/migrate-fiches.mjs && node --test` et pousse sur GitHub. `data/base.json` est un fichier dérivé et non versionné, à ne jamais modifier ni lire : il sert à la validation (GitHub relance les contrôles à chaque push).

## Fiche du site (fiches/*.js)

```js
{
  id: 38,                       // suite du dernier id, jamais réutilisé
  theme: "Viticulture", sous: ["Maladies"], niveau: "Pointu",   // Fondamental | Intermédiaire | Pointu
  geo: { pays: "France", region: "Bourgogne", appel: null },    // ou null
  titre: "…", synth: "2 à 4 phrases reformulées.", mnemo: "Image concrète.",
  flash: { q: "…", a: "…", keys: [["Asie", "asiatique"], ["40"]] }, // keys facultatif : seuls les points demandés, avec leurs variantes ; corrigé juste à 2/3
  qcm: { q: "…", opts: ["a", "b", "c", "d"], good: 1 },          // index base 0
  exos: [ { type: "true_false", prompt: "Vrai ou faux ?", payload: { … }, explanation: "…" } ],  // 2 à 4, types ci-dessous
  schema: null,                 // ou { svg, legende, src } (voir Schéma)
  cours: null,                  // ou page de cours (voir Notion)
  status: "needs_review",       // "verified" si tous les faits importants sont ✅
  to_check: ["Fait ⚠️ : pourquoi"],  // vide si verified
  src: "Mille Vignes, P. Lepeltier ; autres sources",
  page: 18
}
```
Apostrophes typographiques (’) dans les textes. Catalogue des sous-thèmes : `SOUS` dans `fiches.js`.

**Pastilles** : la migration reprend `status` et `to_check` tels quels ; le site affiche « ✓ vérifiée » ou « ⚠ à vérifier » avec la liste dépliable. Une fiche sans `status` est marquée « à revoir » par défaut. Les divergences avec le livre vont dans la synthèse et/ou un exercice vrai/faux.

Le format « lot JSON » ci-dessous sert aux imports futurs dans l'application. On n'édite rien à la main.
Exemple complet couvrant les 11 types : `tests/fixtures/lot-exemple.json`.

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
  - notion Mille Vignes : `mv-0013`, `mv-0014`… (dérivé de l'id de la fiche : fiche 22 → `mv-0022`) ;
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
- `theme`, `sous` : catalogue de `fiches.js` (11 thèmes). Un sous-thème hors catalogue est refusé.
- `niveau` : `Fondamental` (ce qu'un client curieux demande au comptoir, ≈ WSET 2) · `Intermédiaire` (ce qu'on explique en masterclass, avec le pourquoi, ≈ WSET 3) · `Pointu` (recherche, chiffres d'expert, histoire fine, diplômes de sommelier). `geo` : objet ou `null` ; en France, `region` vient du catalogue `REGIONS_FR` de `fiches.js` (un test refuse tout autre nom) ; une appellation exige sa région.
- **`status` et pastilles** :
  - tous les faits importants ✅ → `"verified"` ;
  - au moins un fait ⚠️ → `"needs_review"` **et** `to_check` liste ces faits (obligatoire) ;
  - les faits ❌ ne figurent pas dans la notion ;
  - **double vérification réservée aux faits clés** (règle du 21/10/2026) : un fait qu'on répétera à un client ou en masterclass (définition, date ou chiffre central, réglementation, santé) reste dans `to_check` tant qu'il n'est pas ✅. Un détail secondaire que seul le livre (ou une source unique) appuie va dans `selon_livre` : affiché « Selon le livre, non recoupé », il ne compte pas comme dette et n'empêche pas `verified`. Reclasser des points existants : `node tools/trier-points.mjs tri.json` ;
  - **divergence expliquée hors dette** (règle du 25/10/2026) : une divergence entre sources que la synthèse ou un exercice expose clairement au lecteur (les deux versions et leurs sources) sort de `to_check` et va dans `selon_livre`, sous la forme « Divergence expliquée : … ». Si la fiche ne l'expose pas encore, on l'écrit d'abord dans la synthèse ;
  - `"draft"` pour un brouillon, `"needs_update"` pour une donnée susceptible d'être périmée.
- `divergences` (facultatif) : désaccords entre sources ou avec l'autrice, non tranchés.

### Page de cours (`cours`, facultatif, réservé aux notions phares)

```js
cours: {
  lede: "Accroche qui donne l'angle.",
  frise: [ { date: "1999", txt: "…" } ],          // ou null
  essentiel: "Le point central, 1-2 phrases.",
  sections: [ { h: "Titre", blocs: [ { imp: "essentiel", txt: "…" } ],
                table: { caption: "…", head: ["…"], rows: [ { imp: "important", cells: ["…"] } ] } } ],  // table ou null
  synthese: [ { imp: "essentiel", txt: "…" } ],
  src: "Sources complètes. Cf. Mille Vignes, p. X."
}
```
`imp` vaut `essentiel` (à savoir absolument) · `important` · `utile` · `culture` (anecdote).

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

## Autres noms (fiches de cépages)

Champ facultatif `noms: [{ nom: "Garnacha", ou: "Espagne" }, …]` : synonymes vrais (Wine Grapes « principal synonyms », recoupés), au plus 6, avec le pays ou la région où le nom s’emploie ; jamais une fausse identité (« varieties commonly mistaken for »). Affiché « Autres noms » sur la fiche.

## Jauge de structure (fiches de cépages)

Champ facultatif `jauge`, affiché en points sur la fiche (« Structure typique ») :

```js
jauge: { style: "Alsace, vin sec", acidite: 5, tanins: null, alcool: 3, corps: 3, aromes: 4,
         a_verifier: ["alcool"], src: "WSET, Understanding Wines (2016) ; Wine Grapes (2012)" }
```

- Échelle de la grille de dégustation WSET : 1 faible · 2 moyen- · 3 moyen · 4 moyen+ · 5 élevé. `null` : critère sans objet (tanins d'un blanc). Fourchette de la source : `[a, b]` (ex. `[1, 3]` « faible à moyen »), affichée en points pleins puis pâles.
- Mots « crisp », « fresh », « lively » (vif, frais) sur l'acidité : comptés 4, toujours dans `a_verifier`.
- `note` (facultatif) : une phrase sur une divergence entre sources ou une précision de style, affichée sous la jauge.
- Critère absent du champ : aucune source ne le documente ; il n’est pas affiché (jamais estimé).
- `style` : le vin décrit (région et style typiques), car la structure change selon le lieu et la vinification.
- Un niveau n'est posé que s'il s'appuie sur une source ; deux sources concordantes sinon le critère va dans `a_verifier` (⚠ affiché). Divergence : le niveau de la source la plus récente, l'écart noté dans `selon_livre` ou un exercice.
- Exercices tirés des jauges (`ordering`, `mcq_single`…) : seulement sur des critères hors `a_verifier`, entre cépages au même style comparable.

## Exercices — 11 types

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
| `explain_client` | `{ "model": "…", "criteria": ["…", "…", "…"] }` | « Explique à un client » : texte libre, puis réponse modèle et 3 critères cochés en auto-évaluation (voir ci-dessous) |

**`explain_client`** (seulement là où le contenu s'y prête, jamais sur toutes les fiches) :
- `prompt` : la question posée par un client. `model` : la réponse modèle, dite comme à un client (3 à 5 phrases).
- `criteria` : **exactement 3**. Les critères 1 et 2 sont **propres à la fiche** : les deux points que la réponse doit contenir. Quand la fiche porte une vraie nuance (« ça dépend de… »), elle devient l'un de ces deux critères ; sinon on n'en invente pas. Le critère 3 est générique : « Mots simples, pas de jargon sans explication ».
- **Fiabilité** : la réponse modèle et les critères reprennent **uniquement les faits de la fiche**, sans aucun ajout. Si la fiche est « à vérifier », l'avertissement s'affiche aussi sur cet exercice.
- Pas de correction automatique du texte. Le nombre de critères cochés donne la note : 0-1 Difficile, 2 Correct, 3 Facile. Le texte saisi n'est pas conservé ; le journal garde les critères cochés (`c: [1,0,1]`).

Bonnes pratiques :
- **varier** : viser 4 à 6 exercices par notion, de types différents ;
- index **base 0** ; écrire les options dans un ordre quelconque (le site les mélange à l'affichage) ;
- distracteurs **plausibles**, jamais absurdes ;
- `explanation` : donner le **pourquoi** propre à la question (ce qui rend la bonne réponse juste, le piège du distracteur), sans redire la réponse ni recopier la synthèse (refusé par les contrôles). À défaut d'explication, le site montre la synthèse, mais une seule fois par fiche et par séance ;
- interroger ce qu'un caviste doit savoir ou expliquer : **pas de question sur une date ou un détail biographique** (naissance, mort d'un auteur…), sauf si la date est elle-même un repère utile (loi, réglementation, millésime, parution qui a changé les pratiques) ;
- un exercice peut relier plusieurs notions (`notion_ids` à plusieurs ids), surtout `matching` et `ordering`.

## Contrôles automatiques (`tools/lot.mjs`)

Refus si : `schema_version` ≠ 1 · id mal formé ou en double · thème, sous-thème, niveau ou status hors liste · source ou notion référencée inconnue · page hors du livre ou chapitre incohérent avec la page · `needs_review` sans `to_check` · type d'exercice inconnu · payload non conforme à son type · `imp` invalide.
Tests : `node --test`.
