// Parcours réel dans un navigateur : séance, sauvegarde, effacement, restauration (deux fois). C'est le seul chemin qui écrit
// la progression (app.js) ; les autres tests ne voient que exercices.js. Playwright n'est pas une dépendance du dépôt :
// le test tourne là où il est installé (sessions Claude), il est sauté ailleurs (GitHub).
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

let chromium = null;
try { ({ chromium } = createRequire(import.meta.url)("playwright")); } catch {}

test("parcours : une séance s'enregistre, se sauvegarde et se restaure sans perte ni doublon", { skip: !chromium && "Playwright absent" }, async () => {
  const navigateur = await chromium.launch();
  try {
    const page = await (await navigateur.newContext({ acceptDownloads: true })).newPage();
    const erreurs = [];
    page.on("pageerror", e => erreurs.push(e.message));
    page.on("dialog", d => d.accept(d.type() === "prompt" ? "EFFACER" : undefined));
    // Chaque écran d'exercice montre sa question (un commentaire mal placé l'avait fait disparaître, 02/11). Contexte à part :
    // ces 40 séances lancées dans la même milliseconde se fondraient à la restauration (fusion par horodatage).
    const essai = await (await navigateur.newContext()).newPage();
    await essai.goto(new URL("../index.html", import.meta.url).href);
    const sansQuestion = await essai.evaluate(() => EXOS.slice(0, 40).filter(e => { startSession([e], "test", [e.fiche.id]); const q = document.querySelector("#grid .ex-prompt"); return !q || !q.textContent.trim(); }).map(e => e.id));
    assert.deepEqual(sansQuestion, [], "exercices sans question affichée");
    // un exercice marqué avec_fiche montre le titre et le schéma de sa fiche au-dessus de la question
    const avecFiche = await essai.evaluate(() => { const e = EXOS.find(x => x.fiche.schema); startSession([{ ...e, avec_fiche: true }], "test", [e.fiche.id]);
      return !!document.querySelector("#grid .ex-fiche figure.schema") && document.querySelector("#grid .ex-fiche").compareDocumentPosition(document.querySelector("#grid .ex-prompt")) === Node.DOCUMENT_POSITION_FOLLOWING; });
    assert.ok(avecFiche, "fiche affichée au-dessus de la question");
    await page.goto(new URL("../index.html", import.meta.url).href);
    await page.click("text=Commencer la séance");
    // Découverte, pré-test, exercices : « Correct » s'il est proposé, sinon une option, sinon le bouton principal.
    for (let i = 0; i < 20; i++) {
      const srs = page.locator(".srs-btn.srs-ok:visible").first(), opt = page.locator(".ex-body .opt:visible:not([disabled])").first();
      const suite = page.locator("#grid button.btn.primary:visible").first();
      if (await srs.count()) await srs.click();
      else if (await opt.count()) {
        await opt.click();
        const valider = page.locator("#grid .ex-actions .btn.primary:visible").first();
        if (await valider.count()) await valider.click();
      } else if (await suite.count()) await suite.click();
      else break;
    }
    const etat = () => page.evaluate(() => ({ prog: localStorage.getItem("mv_progress_v2"), lues: Object.keys(lues).length, journal: journal.length, seances: seances.length }));
    const avant = await etat();
    assert.ok(Object.keys(JSON.parse(avant.prog)).length >= 3 && avant.journal >= 3, "la séance a enregistré des réponses");

    await page.evaluate(() => setMode("jour"));
    await page.click("#reglagesBtn");
    const [sauvegarde] = await Promise.all([page.waitForEvent("download"), page.click("#exportProg")]);
    const fichier = await sauvegarde.path();
    await page.click("#resetAll");
    assert.equal(await page.evaluate(() => Object.keys(prog).length + journal.length + seances.length), 0, "tout est effacé");

    // La fusion suit la confirmation sans attente : une fois le dialogue accepté, l'état lu est celui d'après la restauration.
    for (const fois of ["1re", "2e"]) {
      await Promise.all([page.waitForEvent("dialog"), page.setInputFiles("#importProg", fichier)]);
      assert.deepEqual(await etat(), avant, `${fois} restauration`);
    }
    assert.deepEqual(erreurs, []);
  } finally {
    await navigateur.close();
  }
});

test("jeux : sprint, cartes à toucher et Devine le vin se jouent sans erreur ; records et cas limites", { skip: !chromium && "Playwright absent" }, async () => {
  const navigateur = await chromium.launch();
  try {
    const page = await navigateur.newPage();
    const erreurs = [];
    page.on("pageerror", e => erreurs.push(e.message));
    await page.goto(new URL("../index.html", import.meta.url).href);
    // Beaujolais entièrement travaillé, et une cave de 5 vins jouables dont deux jumeaux (mêmes indices) et deux vins sans fiche
    await page.evaluate(() => { const D = 86400000, t = Date.now(), p = {};
      LIEUX.find(x => x.nom === "Beaujolais").fiches.forEach(f => exosDe(f).forEach(e => { p[e.id] = { ease: 2.5, interval: 10, due: t + 5 * D, acquired: true }; }));
      localStorage.setItem("mv_progress_v2", JSON.stringify(p));
      const vin = (cuvee, cep, sol, app) => ({ cuvee, couleur: "rouge", cepages: [{ nom: cep }], sol, appellation: app, questions: [] });
      localStorage.setItem("mv_partenaires", JSON.stringify([{ nom: "Domaine A", region: "Beaujolais", vins: [vin("Morgon Côte du Py", "gamay", "schiste", "Morgon"), vin("Morgon Charmes", "gamay", "schiste", "Morgon"), { cuvee: "Sans fiche", questions: [] }] },
        { nom: "Domaine B", region: "", vins: [{ cuvee: "Rien", questions: [] }, vin("Fleurie", "gamay", "granite", "Fleurie"), vin("Brouilly", "gamay", "granite", "Brouilly"), vin("Chénas", "gamay", "granite", "Chénas")] }])); });
    await page.reload();
    // Sprint : une réponse, temps écoulé → bilan et record ; un second sprint sans réponse n'écrase pas le record
    await page.evaluate(() => { setMode("jour"); startSprint(); });
    await page.click(".ex-body .opt");
    await page.evaluate(() => { examen.fin = Date.now() - 1; });
    await page.waitForSelector(".bilan h3");
    assert.match(await page.textContent(".bilan h3"), /^Sprint\s: \d bonne réponse sur 1/);
    assert.equal(await page.evaluate(() => jeux.sprint.n), 1);
    await page.evaluate(() => { startSprint(); examen.fin = Date.now() - 1; });
    await page.waitForSelector(".bilan h3");
    assert.equal(await page.evaluate(() => jeux.sprint.n), 1, "un sprint sans réponse n'est pas un record");
    // Cartes à toucher : toucher une zone donne un verdict, la bonne zone est marquée
    await page.evaluate(() => { setMode("cartes"); allerLieu("Beaujolais"); });
    await page.click("text=Cartes à toucher");
    const cartes = await page.evaluate(() => { const z = document.querySelector(".jeu-carte path[data-z]"); z.dispatchEvent(new MouseEvent("click", { bubbles: true })); return { fb: document.querySelector(".fb").textContent, cible: !!document.querySelector(".jeu-carte path.cible") }; });
    assert.match(cartes.fb, /Bonne réponse|Pas là/); assert.ok(cartes.cible);
    // Devine le vin : 4 options, jamais un vin sans fiche, jamais les deux jumeaux ensemble quand l'un est la réponse
    await page.evaluate(() => setMode("cave"));
    await page.click("text=Devine le vin");
    for (let i = 0; i < 5; i++) {
      const opts = await page.$$eval(".ex-body .opt", os => os.map(o => o.textContent));
      assert.equal(opts.length, 4); assert.ok(!opts.some(o => /Sans fiche|Rien/.test(o)), "vin sans fiche écarté");
      await page.click(".ex-body .opt");
      const fb = await page.textContent(".fb"), cible = /Bonne réponse/.test(fb) ? opts[0] : (fb.match(/C’était (.+?)\.$/) || [])[1]; // on clique toujours la première option
      if (/^Morgon/.test(cible || "")) assert.ok(!(opts.includes("Morgon Côte du Py") && opts.includes("Morgon Charmes")), "jumeaux jamais face à face : " + cible);
      await page.click(".ex-actions .btn.primary");
    }
    assert.match(await page.textContent(".ex h3"), /^Devine le vin\s: \d+ points? sur \d+/);
    assert.deepEqual(erreurs, []);
  } finally {
    await navigateur.close();
  }
});
