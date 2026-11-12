// Supports papier de révision : un PDF A4 par région française, par section du livre, et pour les cépages et le monde viticole, compilés depuis les fiches du dépôt (rien n'est réécrit à la main).
// node supports/revision-regions/build.mjs [dossier de sortie] [Région… | Section du livre… | Les cépages | Le monde viticole]   (Playwright résolu via NODE_PATH, comme initiation-oenologie/build.mjs)
// Contenu : cours « Approfondir », fiches (synthèse, astuce, cartes, pastilles, sources), cépages (jauge, autres noms), auto-test et corrigé.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const { chromium } = createRequire(import.meta.url)('playwright');

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '../..');
const out = path.resolve(process.argv[2] || path.join(dir, 'pdf'));
const seules = process.argv.slice(3);
fs.mkdirSync(out, { recursive: true });

const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(root, 'fiches.js'), 'utf8'), ctx);
for (const f of fs.readdirSync(path.join(root, 'fiches')).sort())
  if (f.endsWith('.js')) vm.runInContext(fs.readFileSync(path.join(root, 'fiches', f), 'utf8'), ctx);
const { FICHES, REGIONS_FR, FRANCE_SOMMAIRE } = vm.runInContext('({FICHES,REGIONS_FR,FRANCE_SOMMAIRE})', ctx);

const TOC = JSON.parse(fs.readFileSync(path.join(root, 'data/mille-vignes-sommaire.json'), 'utf8')).sort((a, b) => a.page - b.page);
// Récits de chapitre (data/recits.js, texte du dépôt, avec ses <b>) : le fil de l'argument en tête de chaque chapitre.
const rctx = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'data/recits.js'), 'utf8') + ';this.R=RECITS', rctx);
const RECIT = new Map(rctx.R.map(x => [x.chapitre, x]));
const recitHTML = x => !x ? '' : `<div class="recit"><p class="appro">Le fil du chapitre</p>
  ${x.question ? `<p class="lede">${e(x.question)}</p>` : ''}${(x.fil || []).map(t => `<p>${t}</p>`).join('')}
  ${x.defend ? `<p><b class="lbl">${x.pages ? 'Ce qu’elle défend.' : 'À retenir.'}</b> ${x.defend}</p>` : ''}
  ${x.client ? `<p><b class="lbl">Au client.</b> <i>${x.client}</i></p>` : ''}
  ${x.filRouge ? `<p><b class="lbl">Question fil rouge.</b> ${x.filRouge}</p>` : ''}</div>`;
// Lexique du site et fiches où apparaît chaque terme (data/lexique-fiches.js, généré par sync-site) ; photos copiées dans photos/<terme>.jpg
// (l'environnement de génération n'a pas accès à Commons), réduites à 640 px, crédit imprimé sous chaque photo.
const lctx = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'data/lexique.js'), 'utf8') + ';' + fs.readFileSync(path.join(root, 'data/lexique-fiches.js'), 'utf8') + ';this.L=LEXIQUE;this.LF=LEXIQUE_FICHES', lctx);
const slug = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const photoDe = t => t.photo && [path.join(dir, 'photos', slug(t.terme) + '.jpg')].find(fs.existsSync);
function lexiqueHTML(ids) {
  const termes = lctx.L.filter(t => t.status === 'verified' && (lctx.LF[t.terme] || []).some(i => ids.has(+i)))
    .sort((a, b) => !!b.photo - !!a.photo || a.terme.localeCompare(b.terme, 'fr'));
  if (!termes.length) return { n: 0, html: '' };
  return { n: termes.length, html: `<section class="part"><h2>Lexique${termes.some(photoDe) ? ' illustré' : ''}</h2><p class="muted">Les termes du lexique du site qui apparaissent dans ces fiches.</p><div class="lex">${termes.map(t => {
    const ph = photoDe(t);
    return `<div class="lexe${ph ? ' ph' : ''}">${ph ? `<figure><img src="file://${ph}" alt="${e(t.photo.legende)}"><figcaption>${e(t.photo.legende)} Photo : ${e(t.photo.auteur)}, ${e(t.photo.licence)}, ${e(t.photo.source || 'Wikimedia Commons')}.</figcaption></figure>` : ''}
      <h3>${e(t.terme)}</h3><p>${e(t.def)}</p>${t.etym ? `<p class="muted"><i>Étymologie :</i> ${e(t.etym)}</p>` : ''}${t.declic ? `<div class="astuce"><b>Déclic</b> ${e(t.declic)}</div>` : ''}
      <p class="src">Sources : ${e([].concat(t.src).join(' ; '))}</p></div>`; }).join('')}</div></section>` };
}
const tocDe = f => f.page ? TOC.filter(c => c.page <= f.page).at(-1) : null; // chapitre du livre qui contient la page
const ordreChap = new Map(FRANCE_SOMMAIRE.map((c, i) => [c.chapitre, i]));
const NIV = { Fondamental: 0, 'Intermédiaire': 1, Pointu: 2 };
// Chapitres de cépages → régions où la fiche est utile (une fiche sans geo.region n'irait sinon nulle part).
const CEP = {
  'Cépages d’Alsace': ['Alsace'],
  'Cépages de Bourgogne, du Beaujolais et de Champagne': ['Bourgogne', 'Beaujolais', 'Champagne'],
  'Cépages du Jura et de Savoie': ['Jura', 'Savoie'],
  'Cépages du Val de Loire': ['Val de Loire'],
  'Cépages de Bordeaux et des Charentes': ['Bordeaux', 'Charentes'],
  'Cépages du Sud-Ouest': ['Sud-Ouest'],
  'Cépages de la Vallée du Rhône': ['Vallée du Rhône'],
  'Cépages du Midi méditerranéen': ['Languedoc', 'Roussillon', 'Provence'],
  'Cépages de Corse': ['Corse'],
};
const estCep = f => f.chapitre && f.chapitre in CEP;
const dans = (f, r) => f.source === 'france' && (estCep(f)
  ? CEP[f.chapitre].includes(r) || f.geo?.region === r
  : r === 'France' ? FRANCE_SOMMAIRE.find(c => c.chapitre === f.chapitre)?.section === 'France' : f.geo?.region === r);
const tri = (a, b) => (ordreChap.get(a.chapitre) ?? 999) - (ordreChap.get(b.chapitre) ?? 999)
  || (a.cours ? 0 : 1) - (b.cours ? 0 : 1) || NIV[a.niveau] - NIV[b.niveau] || +a.id - +b.id;

const e = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const IMP = { essentiel: 'Essentiel', important: 'Important', utile: 'Utile', culture: 'Culture' };
const imp = i => `<i class="imp ${i}" title="${IMP[i] || ''}"></i>`;
const NIV5 = ['faible', 'moyen-', 'moyen', 'moyen+', 'élevé'];
const JL = { acidite: 'Acidité', tanins: 'Tanins', alcool: 'Alcool', corps: 'Corps', aromes: 'Arômes' };

const coursHTML = (c, vu = '') => !c ? '' : `<div class="cours"><p class="appro">Approfondir</p>
  ${c.lede && !vu.includes(c.lede) ? `<p class="lede">${e(c.lede)}</p>` : ''}
  ${c.essentiel && !vu.includes(c.essentiel) ? `<div class="note"><b>L'essentiel</b> ${e(c.essentiel)}</div>` : ''}
  ${c.frise?.length ? `<table class="frise"><tbody>${c.frise.map(x => `<tr><th>${e(x.date)}</th><td>${e(x.txt)}</td></tr>`).join('')}</tbody></table>` : ''}
  ${(c.sections || []).map(s => `<h4>${e(s.h)}</h4>
    ${s.blocs?.length ? `<ul class="blocs">${s.blocs.map(b => `<li>${imp(b.imp)}${e(b.txt)}</li>`).join('')}</ul>` : ''}
    ${s.table ? `<table class="tab">${s.table.caption ? `<caption>${e(s.table.caption)}</caption>` : ''}
      <thead><tr>${s.table.head.map(h => `<th>${e(h)}</th>`).join('')}</tr></thead>
      <tbody>${s.table.rows.map(r => `<tr>${r.cells.map((x, i) => `<td>${i ? '' : imp(r.imp)}${e(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}`).join('')}
  ${c.synthese?.length ? `<div class="note retenir"><b>À retenir</b><ul class="blocs">${c.synthese.map(b => `<li>${imp(b.imp)}${e(b.txt)}</li>`).join('')}</ul></div>` : ''}
  ${c.src ? `<p class="src">Sources du cours : ${e(c.src)}</p>` : ''}</div>`;

const jaugeHTML = j => {
  if (!j) return '';
  const av = j.a_verifier || [];
  const lig = k => { const [a, b] = [].concat(j[k], j[k]);
    return `<tr><th>${JL[k]}</th><td class="pts">${'●'.repeat(a)}<b>${'●'.repeat(b - a)}</b><i>${'●'.repeat(5 - b)}</i></td><td>${a === b ? NIV5[a - 1] : `${NIV5[a - 1]} à ${NIV5[b - 1]}`}${av.includes(k) ? ' ⚠️' : ''}</td></tr>`; };
  return `<div class="jauge"><b>Structure typique</b> <span class="muted">(${e(j.style)})</span>
    <table>${Object.keys(JL).filter(k => j[k] != null).map(lig).join('')}</table>
    ${j.note ? `<p class="src">${e(j.note)}</p>` : ''}<p class="src">${e(j.src)}</p></div>`;
};

// tete : fiche dont l'accroche, l'essentiel et la carte sont déjà en couverture.
const ficheHTML = (f, tete) => `<article class="fiche">
  <div class="meta"><span>n° ${e(f.id)}</span>${f.page ? `<span>Mille Vignes p. ${e(f.page)}</span>` : ''}<span class="niv n${NIV[f.niveau]}">${e(f.niveau)}</span>
    <span>${f.status === 'verified' ? '✅ vérifiée' : '⚠️ à revoir'}</span>${f.geo?.appel ? `<span>${e(f.geo.appel)}</span>` : ''}</div>
  <h3>${e(f.titre)}</h3>
  <p class="synth">${e(f.synth)}</p>
  ${f.mnemo ? `<div class="astuce"><b>Astuce</b> ${e(f.mnemo)}</div>` : ''}
  ${f.noms?.length ? `<p><b class="lbl">Autres noms</b> ${f.noms.map(n => `<b>${e(n.nom)}</b> (${e(n.ou)})`).join(', ')}</p>` : ''}
  ${jaugeHTML(f.jauge)}
  ${f.schema && f !== tete ? `<figure class="${estCep(f) ? 'mini' : ''}">${f.schema.svg}<figcaption>${e(f.schema.legende)}${f.schema.src ? ` — ${e(f.schema.src)}` : ''}</figcaption></figure>` : ''}
  ${coursHTML(f.cours, f === tete ? f.cours.lede + f.cours.essentiel : '')}
  ${f.to_check?.length ? `<div class="warn"><b>⚠️ À vérifier</b><ul>${f.to_check.map(t => `<li>${e(t)}</li>`).join('')}</ul></div>` : ''}
  ${f.selon_livre?.length ? `<div class="warn soft"><b>Source unique ou divergence expliquée</b><ul>${f.selon_livre.map(t => `<li>${e(t)}</li>`).join('')}</ul></div>` : ''}
  <p class="src">Sources : ${e(f.src)}</p></article>`;

const avert = []; // anomalies relevées pendant la génération, affichées à la fin
const L = 'ABCDEFGHIJ';
// Mélange déterministe (même PDF à chaque génération) qui ne laisse jamais l'ordre d'origine, pour les listes à remettre en ordre ou à relier.
const melange = (arr, graine) => {
  const t = arr.map((x, i) => [x, i]); let g = graine * 9301 + 49297;
  for (let i = t.length - 1; i > 0; i--) { g = (g * 9301 + 49297) % 233280; const j = Math.floor(g / 233280 * (i + 1)); [t[i], t[j]] = [t[j], t[i]]; }
  if (t.length > 1 && t.every(([, i], k) => i === k)) t.push(t.shift());
  return t;
};
const lignes = n => '<span class="ecrire"></span>'.repeat(n);
const opts = (o, coche) => `<ol class="opts">${o.map((x, i) => `<li>${coche ? '☐ ' : ''}${L[i]}. ${e(x)}</li>`).join('')}</ol>`;
const expl = x => x ? ` <span class="muted">— ${e(x)}</span>` : '';
// Un exercice du site (champ exos, docs/IMPORT_FORMAT.md) → [énoncé, réponse] imprimables.
function exoPapier(x, graine) {
  const p = x.payload || {};
  switch (x.type) {
    case 'true_false': return [`${e(x.prompt)} <b>${e(p.statement)}</b> <span class="vf">Vrai ☐ Faux ☐</span>`, `<b>${p.answer ? 'Vrai' : 'Faux'}</b>${expl(x.explanation)}`];
    case 'mcq_single': case 'odd_one_out': return [`${e(x.prompt)}${opts(p.options)}`, `<b>${L[p.answer]}. ${e(p.options[p.answer])}</b>${expl(x.explanation)}`];
    case 'mcq_multi': return [`${e(x.prompt)} <span class="muted">(plusieurs réponses)</span>${opts(p.options, true)}`, `<b>${p.answers.map(i => L[i]).join(', ')}</b> (${p.answers.map(i => e(p.options[i])).join(' ; ')})${expl(x.explanation)}`];
    case 'cloze': { const r = [];
      const t = e(p.text).replace(/\{\{(.*?)\}\}/g, (_, m) => { r.push(m.split('|')[0]); return `<span class="trou">${r.length}</span>`; });
      return [`${e(x.prompt)} ${t}`, `<b>${r.map((m, i) => `${i + 1}. ${m}`).join(' ; ')}</b>${expl(x.explanation)}`]; }
    case 'short_answer': return [`${e(x.prompt)}${lignes(1)}`, `<b>${e(p.accepted[0])}</b>${p.accepted.length > 1 ? ` (accepté : ${p.accepted.slice(1).map(e).join(', ')})` : ''}${expl(x.explanation)}`];
    case 'ordering': { const m = melange(p.items, graine);
      return [`${e(x.prompt)}${opts(m.map(([v]) => v))}<span class="muted">Ordre : </span>${'<span class="case"></span>'.repeat(m.length)}`,
        `<b>${p.items.map(v => L[m.findIndex(([w]) => w === v)]).join(' → ')}</b> (${p.items.map(e).join(' → ')})${expl(x.explanation)}`]; }
    case 'matching': { const m = melange(p.pairs.map(q => q[1]), graine);
      return [`${e(x.prompt)}<table class="relier"><tbody>${p.pairs.map((q, i) => `<tr><td>${i + 1}. ${e(q[0])}</td><td class="case"></td><td>${L[i]}. ${e(m[i][0])}</td></tr>`).join('')}</tbody></table>`,
        `<b>${p.pairs.map((q, i) => `${i + 1}-${L[m.findIndex(([, k]) => k === i)]}`).join(', ')}</b>${expl(x.explanation)}`]; }
    case 'explain_client': return [`${e(x.prompt)}${lignes(4)}`, `<i>${e(p.model)}</i>${p.criteria?.length ? `<br><span class="muted">À dire : ${[].concat(p.criteria).map(e).join(' ; ')}</span>` : ''}`];
    case 'flashcard': case 'flashcard_reverse': return [`${e(x.prompt)}${lignes(1)}`, `<b>${e(p.answer)}</b>${expl(x.explanation)}`];
  }
  avert.push(`exercice de type inconnu « ${x.type} » non imprimé`);
  return null;
}
// Auto-test par chapitre : carte flash, QCM puis exercices variés de chaque fiche ; corrigé expliqué à la fin.
function autoTest(groupes) {
  let n = 0; const q = [], a = [];
  for (const g of groupes) {
    q.push(`<h3 class="tchap">${e(g.h)}</h3>`); a.push(`<h3 class="tchap">${e(g.h)}</h3>`);
    for (const f of g.fiches) {
      const items = [];
      if (f.flash?.q) items.push([`${e(f.flash.q)}${lignes(2)}`, `<b>${e(f.flash.a)}</b>`]);
      if (f.qcm?.q) items.push([`${e(f.qcm.q)}${opts(f.qcm.opts)}`, `<b>${L[f.qcm.good]}. ${e(f.qcm.opts[f.qcm.good])}</b>${expl(f.qcm.expl)}`]);
      (f.exos || []).forEach((x, k) => { const r = exoPapier(x, +f.id * 31 + k); if (r) items.push(r); });
      for (const [qq, aa] of items) { n++;
        q.push(`<li value="${n}">${qq} <span class="ref">(fiche ${f.id})</span></li>`);
        a.push(`<li value="${n}">${aa}</li>`); }
    }
  }
  return { n, html: `<section class="part test"><h2>Auto-test</h2><p class="muted">${n} questions, chapitre par chapitre : la carte flash, le QCM et les exercices de chaque fiche. Réponses expliquées au corrigé.</p><ol class="qs">${q.join('')}</ol></section>
    <section class="part test"><h2>Corrigé</h2><ol class="qs ans">${a.join('')}</ol></section>` };
}

const css = `
@font-face{font-family:'Cormorant';font-weight:400 600;src:url(${root}/fonts/cormorant.woff2) format('woff2')}
@font-face{font-family:'Cormorant';font-style:italic;src:url(${root}/fonts/cormorant-italic.woff2) format('woff2')}
@font-face{font-family:'Inter';src:url(${root}/fonts/inter.woff2) format('woff2')}
:root{--wine:#5b1a24;--wine2:#7a2c38;--gold:#a8843a;--olive:#5c7a4f;--slate:#456e8a;--ink:#1a1612;--muted:#625a4e;--cream:#faf3e0;--line:#d8d0c2}
@page{size:A4}
*{box-sizing:border-box;margin:0;padding:0}
html{font-size:9.6pt}
body{font-family:'Inter',sans-serif;color:var(--ink);line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact}
p{margin:0 0 5pt}
h1,h2,h3,h4{font-family:'Cormorant',serif;font-weight:600;line-height:1.15;break-after:avoid;color:var(--wine)}
h2{font-size:21pt;margin:0 0 8pt;padding-bottom:4pt;border-bottom:1.5px solid var(--wine)}
h2.chap{font-size:17pt;margin-top:14pt;border-bottom-width:1px}
h3{font-size:14pt;margin:2pt 0 4pt}
h4{font-size:12pt;color:var(--wine2);margin:8pt 0 3pt}
ul,ol{margin:0 0 5pt 13pt}
.part{break-before:page}
.muted{color:var(--muted)}
.src{font-size:7.6pt;color:var(--muted);line-height:1.35}
.fiche{border-top:1px solid var(--line);padding-top:7pt;margin-top:10pt}
.meta{break-after:avoid;display:flex;gap:9pt;font-size:7.8pt;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.niv{color:#fff;padding:0 4pt;border-radius:2px}.n0{background:var(--olive)}.n1{background:var(--slate)}.n2{background:var(--wine)}
.synth{font-size:1.02rem}
.note,.astuce,.warn,.jauge{background:var(--cream);padding:5pt 9pt;margin:5pt 0 7pt;border-left:3px solid var(--wine);break-inside:avoid}
.astuce{border-left-color:var(--gold);font-style:italic}.astuce b,.note b,.warn b,.jauge>b{font-style:normal;color:var(--wine);margin-right:4pt}
.warn{border-left-color:#c0392b;background:#fbecea;font-size:.9rem}.warn.soft{border-left-color:var(--gold);background:#f6f1e6}
.lbl{color:var(--wine)}
.lede{font-family:'Cormorant';font-style:italic;font-size:13pt;color:var(--wine2)}
.lex{columns:2;column-gap:8mm}.lexe{break-inside:avoid;margin:0 0 8pt;padding-bottom:6pt;border-bottom:1px solid var(--line)}.lexe h3{font-size:13pt;margin:0 0 2pt}
.lexe figure{margin:0 0 4pt}.lexe img{width:100%;max-height:55mm;object-fit:cover;display:block;border-radius:2px}.lexe figcaption{font-size:6.8pt}
.recit{background:var(--cream);padding:7pt 11pt;margin:4pt 0 10pt;border-top:2px solid var(--gold)}.recit p{margin-bottom:4pt}
.cours{margin-top:6pt;padding:2pt 0 2pt 9pt;border-left:2px solid var(--line)}
.appro{break-after:avoid;font-size:7.8pt;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:3pt}
ul.blocs{list-style:none;margin-left:0}ul.blocs li{margin:0 0 3pt;padding-left:13pt;position:relative}
.imp{position:absolute;left:0;top:.42em;width:7px;height:7px;border-radius:50%;display:inline-block}
td .imp{position:static;margin-right:4pt;vertical-align:middle}
.imp.essentiel{background:var(--wine)}.imp.important{background:var(--gold)}.imp.utile{background:var(--slate)}.imp.culture{border:1px solid var(--muted)}
table{width:100%;border-collapse:collapse;margin:4pt 0 7pt;font-size:.92rem}
caption{text-align:left;font-weight:600;color:var(--wine);margin-bottom:2pt}
th{text-align:left;font-weight:600;color:var(--wine);padding:2.5pt 6pt 2.5pt 0;border-bottom:1.2px solid var(--wine);vertical-align:top}
td{padding:2.5pt 6pt 2.5pt 0;border-bottom:1px solid var(--line);vertical-align:top}
tr{break-inside:avoid}
.frise,.tab,.jauge,figure,.note,.astuce{break-inside:avoid}
.frise th{border-bottom:1px solid var(--line);white-space:nowrap;width:1%}
.jauge table{width:auto;margin:3pt 0}.jauge th{border:0;padding-right:10pt}.jauge td{border:0}
.pts{color:var(--wine);letter-spacing:1px}.pts b{color:#c79aa1;font-weight:400}.pts i{color:#e3dccf;font-style:normal}
figure{margin:6pt auto 8pt;break-inside:avoid;text-align:center}
figure svg{display:block;margin:0 auto;width:100%;max-width:110mm;max-height:78mm;height:auto;color:var(--ink);overflow:visible}
figure.mini svg{max-height:55mm}
figure.couv svg{max-height:105mm}
figure.couv{margin:2mm 0 4mm}
figcaption{font-size:7.6pt;color:var(--muted);margin-top:3pt;text-align:left}
.test .qs{columns:2;column-gap:9mm;column-rule:1px solid var(--line);font-size:.92rem}
.qs{margin-left:18pt}.qs>li{margin:0 0 7pt;break-inside:avoid}.opts{list-style:none;margin:2pt 0 0 6pt}.ref{font-size:7pt;color:var(--muted)}
.ans>li{margin-bottom:4pt;font-size:.95em}
.tchap{column-span:all;font-size:12pt;margin:8pt 0 5pt -18pt;padding-bottom:2pt;border-bottom:1px solid var(--line)}
.trou{display:inline-block;min-width:22mm;border-bottom:1px solid var(--ink);text-align:center;font-size:6.5pt;color:var(--muted);vertical-align:baseline}
.vf{display:block;margin-top:2pt;color:var(--muted);font-size:.9em}
.case{display:inline-block;width:5mm;height:5mm;border:1px solid var(--muted);margin:2pt 2pt 0 0;vertical-align:middle}
.relier{margin:3pt 0 0;font-size:.95em}.relier td{border:0;padding:1.5pt 3pt 1.5pt 0;vertical-align:middle}.relier td.case{display:table-cell;width:5mm}
.ecrire{display:block;height:15pt;border-bottom:1px dotted var(--muted)}
.cover{min-height:262mm;display:flex;flex-direction:column;break-after:page}
.cover .brand{font-size:8.5pt;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:var(--gold)}
.cover h1{font-size:46pt;margin:8mm 0 3mm}
.cover .tag{font-family:'Cormorant';font-style:italic;font-size:15pt;color:var(--wine2);padding-bottom:5mm;border-bottom:1px solid var(--gold);margin-bottom:4mm}
.cover table{font-size:9.5pt}.cover td:last-child{text-align:right;color:var(--muted)}
.cover .leg{margin-top:auto;font-size:8.3pt;color:var(--muted);border-top:1px solid var(--line);padding-top:4mm}
.cover .leg span{margin-right:12pt;white-space:nowrap}.cover .leg .imp{position:static;margin-right:3pt;vertical-align:middle}`;

// Même recadrage que fitSvg (app.js) : élargit le viewBox aux étiquettes qui débordent.
const fit = `for(const s of document.querySelectorAll('figure svg')){const v=s.viewBox.baseVal;if(!v||!v.width)continue;
  try{const b=s.getBBox(),x0=Math.min(v.x,Math.floor(b.x-4)),y0=Math.min(v.y,Math.floor(b.y-4)),x1=Math.max(v.x+v.width,Math.ceil(b.x+b.width+4)),y1=Math.max(v.y+v.height,Math.ceil(b.y+b.height+4));
  s.setAttribute('viewBox',[x0,y0,x1-x0,y1-y0].join(' '))}catch{}}
// Couverture sur une seule page : on réduit la carte jusqu'à ce que tout tienne (hauteur utile A4 ≈ 265 mm).
const c=document.querySelector('.cover'),m=c.querySelector('figure.couv svg');
c.style.minHeight='0';for(let h=105;m&&h>40&&c.scrollHeight>264*96/25.4;h-=5)m.style.maxHeight=h+'mm';c.style.minHeight='';`;

const date = new Date().toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' });
const regions = ['France', ...REGIONS_FR.slice().sort((a, b) =>
  FRANCE_SOMMAIRE.findIndex(c => c.section === a) - FRANCE_SOMMAIRE.findIndex(c => c.section === b))];
// Un support = un nom de fichier, un titre, des groupes (chapitres) de fiches, et la fiche de tête dont la couverture reprend l'accroche.
const supports = regions.map((r, i) => {
  const fs_ = FICHES.filter(f => dans(f, r)).sort(tri);
  const regionales = fs_.filter(f => !estCep(f)), cepages = fs_.filter(estCep);
  return { nom: `${String(i).padStart(2, '0')}-${r.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z]+/g, '-')}`, cle: r,
    titre: r === 'France' ? 'La France viticole' : r, tete: regionales.find(f => f.cours?.lede),
    groupes: [...[...new Set(regionales.map(f => f.chapitre))].map(c => ({ h: c, fiches: regionales.filter(f => f.chapitre === c) })),
      { h: 'Les cépages', fiches: cepages, sansTete: true }] };
});
// Sections du livre, dans l'ordre des pages (récit en tête de chaque chapitre) ; la Vinification reçoit en plus les fiches
// de vinification et d'élevage rangées ailleurs (régions, autres sections).
const parPage = (a, b) => a.page - b.page || +a.id - +b.id;
const sectionDe = f => tocDe(f) && (tocDe(f).section || tocDe(f).partie);
const nomDe = (n, t) => `${n}-${t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z]+/g, '-')}`;
[...new Set(TOC.map(t => t.section || t.partie))].forEach(sec => {
  const livre = FICHES.filter(f => sectionDe(f) === sec).sort(parPage);
  if (!livre.length) return;
  const groupes = [...new Set(livre.map(f => tocDe(f).chapitre))].map(c => ({ h: c, p: TOC.find(t => t.chapitre === c).page, fiches: livre.filter(f => tocDe(f).chapitre === c) }));
  if (sec === 'Vinification') groupes.push({ h: 'Compléments : vinification et élevage dans les autres chapitres et les régions',
    fiches: FICHES.filter(f => !livre.includes(f) && ['Vinification', 'Élevage'].includes(f.theme)).sort((a, b) => (a.page || 9999) - (b.page || 9999) || tri(a, b)) });
  supports.push({ nom: nomDe(20 + supports.filter(x => x.livre).length, sec), cle: sec, livre: true, titre: sec, groupes });
});
// Parties hors livre du site : cépages (par région d'élection) et monde viticole (par pays), dans l'ordre de FRANCE_SOMMAIRE.
[['Les cépages', 40], ['Le monde viticole', 41]].forEach(([partie, n]) => {
  const chaps = FRANCE_SOMMAIRE.filter(c => c.partie === partie);
  const groupes = chaps.map(c => ({ h: c.chapitre, fiches: FICHES.filter(f => f.source === 'france' && f.chapitre === c.chapitre).sort(tri) }));
  supports.push({ nom: nomDe(n, partie), cle: partie, titre: partie, groupes });
});

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 680, height: 1000 } }); // 180 mm : largeur utile A4, pour mesurer comme à l'impression
await page.emulateMedia({ media: 'print' });
const bilan = [];
for (const { nom, cle, titre, tete, groupes: gs } of supports) {
  if (seules.length && !seules.includes(cle)) continue;
  const groupes = gs.filter(g => g.fiches.length), fs_ = groupes.flatMap(g => g.fiches);
  if (!fs_.length) continue;
  const test = autoTest(groupes), lex = lexiqueHTML(new Set(fs_.map(f => +f.id)));
  const nv = fs_.filter(f => f.status === 'verified').length;
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${e(titre)} — fiches de révision</title><style>${css}</style></head><body>
  <section class="cover"><div class="brand">L'Atelier des Mille Vignes · Fiches de révision</div><h1>${e(titre)}</h1>
    ${tete ? `<p class="tag">${e(tete.cours.lede)}</p>${tete.cours.essentiel ? `<div class="note"><b>L'essentiel</b> ${e(tete.cours.essentiel)}</div>` : ''}
      ${tete.schema ? `<figure class="couv">${tete.schema.svg}<figcaption>${e(tete.schema.legende)}${tete.schema.src ? ` — ${e(tete.schema.src)}` : ''}</figcaption></figure>` : ''}` : ''}
    <table><thead><tr><th>Sommaire</th><th></th></tr></thead><tbody>
      ${groupes.map(g => `<tr><td>${e(g.h)}${g.p ? ` <span class="muted">(p. ${g.p})</span>` : ''}${!tete && RECIT.get(g.h)?.question ? `<br><i class="muted">${e(RECIT.get(g.h).question)}</i>` : ''}</td><td>${g.fiches.length} fiches</td></tr>`).join('')}
      ${lex.n ? `<tr><td>Lexique</td><td>${lex.n} termes</td></tr>` : ''}
      <tr><td>Auto-test et corrigé</td><td>${test.n} questions</td></tr></tbody></table>
    <div class="leg"><p><b>${fs_.length} fiches</b> · ${nv} ✅ vérifiées${fs_.length - nv ? ` · ${fs_.length - nv} ⚠️ à revoir` : ''} · édition du ${date}</p>
      <p><span><i class="imp essentiel"></i>Essentiel</span><span><i class="imp important"></i>Important</span><span><i class="imp utile"></i>Utile</span><span><i class="imp culture"></i>Culture</span>
      <span><b class="niv n0">Fondamental</b> comptoir</span><span><b class="niv n1">Intermédiaire</b> masterclass</span><span><b class="niv n2">Pointu</b> expert</span></p>
      <p>Contenu reformulé à partir des sources citées sous chaque fiche ; les n° renvoient aux fiches du site.</p></div></section>
  ${groupes.map((g, k) => `<section class="${!k || g.sansTete ? 'part' : ''}"><h2 class="${!k || g.sansTete ? '' : 'chap'}">${e(g.h)}${g.p ? ` <span class="muted">· p. ${g.p}</span>` : ''}</h2>${recitHTML(RECIT.get(g.h))}${g.fiches.map(f => ficheHTML(f, g.sansTete ? null : tete)).join('')}</section>`).join('')}
  ${lex.html}
  ${test.html}</body></html>`;
  const tmp = path.join(out, nom + '.html');
  fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(fit);
  // Contrôles : rien ne dépasse la largeur utile, pas de texte cassé, toutes les images chargées, couverture sur une page.
  const pb = await page.evaluate(() => {
    const W = document.body.getBoundingClientRect().right + 1, out = [];
    for (const el of document.querySelectorAll('body *')) if (el.getBoundingClientRect().right > W && !el.closest('svg')) { out.push('déborde : ' + (el.closest('article')?.querySelector('h3')?.textContent || el.tagName).slice(0, 60)); break; }
    const t = document.body.innerText.match(/\b(undefined|NaN|null)\b|\[object/); if (t) out.push('texte cassé : ' + t[0]);
    for (const i of document.images) if (!i.naturalWidth) out.push('image manquante : ' + i.alt);
    if (document.querySelector('.cover').scrollHeight > 264 * 96 / 25.4) out.push('couverture sur 2 pages');
    return out;
  });
  avert.push(...pb.map(x => `${nom} : ${x}`));
  await page.pdf({ path: path.join(out, nom + '.pdf'), format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;text-align:center;font-family:sans-serif;font-size:7pt;color:#625a4e;padding-bottom:3mm">${e(titre)} · Fiches de révision · <span class="pageNumber"></span>/<span class="totalPages"></span></div>`,
    margin: { top: '14mm', right: '15mm', bottom: '16mm', left: '15mm' } });
  fs.unlinkSync(tmp);
  bilan.push(`${nom}.pdf : ${fs_.length} fiches, ${test.n} questions`);
}
await browser.close();
console.log(bilan.join('\n'));
console.log(avert.length ? `\n⚠️ ${avert.length} anomalie(s) :\n` + [...new Set(avert)].join('\n') : '\nAucune anomalie relevée.');
