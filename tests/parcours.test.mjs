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
