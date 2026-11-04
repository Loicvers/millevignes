// Rend support.html en PDF A4 (Chromium via Playwright) : node build.mjs [entrée.html] [sortie.pdf]
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // résolu via NODE_PATH ou l'installation globale
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(dir, process.argv[2] || 'support.html');
const out = path.resolve(dir, process.argv[3] || 'Initiation-oenologie-support.pdf');
const foot = `<div style="width:100%;text-align:center;font-family:Inter,sans-serif;font-size:8pt;color:#625a4e;padding-bottom:4mm">
Initiation à l'œnologie · Une Autre Clé du Paradis · <span class="pageNumber"></span></div>`;
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true,
  displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: foot,
  margin: { top: '18mm', right: '20mm', bottom: '20mm', left: '20mm' } });
await browser.close();
console.log('écrit', out);
