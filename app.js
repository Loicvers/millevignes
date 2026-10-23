/* ============ DONNÉES ============ */
const EXOS=[...FICHES.flatMap(f=>[...toExercises(f),...schemaExercise(f)]),...lexiqueExercises(LEXIQUE,FICHES)];
const EX_BY_ID=Object.fromEntries(EXOS.map(e=>[e.id,e]));
const TYPE_LBL={flashcard:'Flashcard',flashcard_reverse:'Flashcard inversée',mcq_single:'QCM',mcq_multi:'QCM — plusieurs réponses',true_false:'Vrai ou faux',cloze:'Texte à trous',short_answer:'Réponse courte',matching:'Associer',ordering:'Remettre dans l\'ordre',odd_one_out:'Trouver l\'intrus',label_schema:'Légender le schéma',explain_client:'Explique à un client'};
const NIVEAUX=["Fondamental","Intermédiaire","Pointu"];
const SESSION_MAX=20,NEW_FICHES=5; // nouvelles fiches par jour

/* ============ PERSISTANCE (localStorage) ============ */
// v2 : progression par exercice. La v1 (par fiche) est reprise une fois, puis laissée intacte.
const PKEY="mv_progress_v2",PKEY_V1="mv_progress_v1";
function fromV1(v1){const p={};for(const k in v1){p[notionId(k)+'-01']={...v1[k]};p[notionId(k)+'-02']={...v1[k]};}return p;}
function load(){
  try{const v2=localStorage.getItem(PKEY);if(v2)return JSON.parse(v2);const v1=localStorage.getItem(PKEY_V1);return v1?fromV1(JSON.parse(v1)):{};}
  catch{return {};}
}
let prog=load();
const LKEY='mv_lues';let lues={};try{lues=JSON.parse(localStorage.getItem(LKEY))||{};}catch{}
function saveLues(){try{localStorage.setItem(LKEY,JSON.stringify(lues));}catch{}}
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist();}catch{}
// prog[exId] = {ease, interval(jours), due(timestamp), acquired:bool}
// Journal des réponses (mesure du rappel différé) : {e: exercice, t: date, ok: 1|0|null, ms: durée, r: note choisie}.
const JKEY='mv_journal';let journal=[];try{journal=JSON.parse(localStorage.getItem(JKEY))||[];}catch{}
function logAnswer(ex,ok){const sc=seances[seances.length-1];if(sc&&!sc.fin){sc.r++;saveSeances();}const j={e:ex.id,t:now(),ok:ok==null?null:+ok,ms:now()-shownAt};if(ex.retry)j.retry=1;journal.push(j);journal=journal.slice(-5000);try{localStorage.setItem(JKEY,JSON.stringify(journal));}catch{}return j;}
// Séances : {t: début, n: exercices prévus, r: réponses données, fin: 1 si menée à terme} ; sert à compter les séances abandonnées.
const SEKEY='mv_seances';let seances=[];try{seances=JSON.parse(localStorage.getItem(SEKEY))||[];}catch{}
function saveSeances(){seances=seances.slice(-200);try{localStorage.setItem(SEKEY,JSON.stringify(seances));}catch{}}
function save(){try{localStorage.setItem(PKEY,JSON.stringify(prog));}catch{alert('Impossible d\'enregistrer la progression dans ce navigateur. Pense à la sauvegarder (bas de page).');}}
function now(){return Date.now();}
const DAY=86400000;

/* ============ RÉPÉTITION ESPACÉE (type SM-2 simplifié) ============ */
function rate(id,quality){ // quality: 'hard'|'ok'|'easy'
  let p=prog[id]||{ease:2.3,interval:0,due:0,acquired:false};
  if(quality==='hard'){p.ease=Math.max(1.3,p.ease-0.2);p.interval=1;}
  else if(quality==='ok'){p.interval=p.interval?Math.round(p.interval*p.ease):1;}
  else{p.ease=p.ease+0.1;p.interval=p.interval?Math.round(p.interval*p.ease*1.3):2;}
  p.due=now()+p.interval*DAY;
  p.acquired=true;
  prog[id]=p;save();updateBadges();
}
const isDue=e=>prog[e.id]&&prog[e.id].due<=now();
const isNew=e=>!prog[e.id];
// Révisions dues mélangées, puis les nouveautés dans l'ordre du livre, groupées par fiche, flashcard en tête.
const ficheNeuve=f=>EXOS.every(e=>e.fiche!==f||isNew(e));
const aDecouvrir=f=>ficheNeuve(f)&&!lues[f.id]; // déjà lue (séance ou lecture de chapitre) : on passe directement aux exercices
function etat(f){ // où en est la fiche, pour le sommaire
  const mine=EXOS.filter(e=>e.fiche===f),due=mine.filter(isDue).length;
  if(due)return['due',`${due} à revoir`];
  if(mine.length&&mine.every(e=>prog[e.id]))return['done','Travaillée'];
  if(mine.some(e=>prog[e.id]))return['part','Commencée'];
  return lues[f.id]?['lue','Lue']:['new','À découvrir'];
}
// Règles de séance : voir planSession() dans exercices.js.
function buildQueue(pool){return planSession(pool,prog,lues,now(),{max:SESSION_MAX,newFiches:NEW_FICHES});}

/* ============ ÉTAT FILTRES ============ */
let mode="revision";
let activeThemes=new Set(),activeSubs=new Set(),activeGeo=null,activeNiv=new Set();

/* ============ GÉO arbre ============ */
const GEO={};
FICHES.forEach(f=>{if(!f.geo)return;const{pays,region,appel}=f.geo;GEO[pays]=GEO[pays]||{};if(region){GEO[pays][region]=GEO[pays][region]||new Set();if(appel)GEO[pays][region].add(appel);}});

const themeChips=document.getElementById('themeChips');
const subPanel=document.getElementById('subPanel'),subChips=document.getElementById('subChips'),subLbl=document.getElementById('subLbl');
const themesPresent=THEME_ORDER.filter(t=>FICHES.some(f=>f.theme===t));
themesPresent.forEach(t=>{
  const b=document.createElement('button');b.className='chip';b.textContent=t;
  b.onclick=()=>{activeThemes.has(t)?activeThemes.delete(t):activeThemes.add(t);b.classList.toggle('on');buildSub();render();};
  themeChips.appendChild(b);
});
const nivChips=document.getElementById('nivChips');
NIVEAUX.forEach(n=>{const b=document.createElement('button');b.className='chip';b.textContent=n;
  b.onclick=()=>{activeNiv.has(n)?activeNiv.delete(n):activeNiv.add(n);b.classList.toggle('on');render();};nivChips.appendChild(b);});
function buildSub(){
  subChips.innerHTML='';
  if(activeThemes.size===1){
    const t=[...activeThemes][0];
    if(SOUS[t]&&SOUS[t].length){
      subLbl.textContent='Sous-thèmes — '+t;
      SOUS[t].forEach(s=>{const b=document.createElement('button');b.className='chip sub';b.textContent=s;if(activeSubs.has(s))b.classList.add('on');
        b.onclick=()=>{activeSubs.has(s)?activeSubs.delete(s):activeSubs.add(s);b.classList.toggle('on');render();};subChips.appendChild(b);});
      subPanel.classList.add('show');return;
    }
  }
  activeSubs.clear();subPanel.classList.remove('show');
}

const geoTree=document.getElementById('geoTree');
Object.keys(GEO).forEach(pays=>{
  const hasReg=Object.keys(GEO[pays]).length;
  const pn=document.createElement('button');pn.className='geo-node geo-pays';pn.innerHTML=`<span class="tw">${hasReg?'▸':''}</span>`+pays;geoTree.appendChild(pn);
  const rw=document.createElement('div');rw.className='geo-hidden'; // pays repliés par défaut
  if(hasReg)pn.setAttribute('aria-expanded','false');
  Object.keys(GEO[pays]).forEach(region=>{
    const rn=document.createElement('button');rn.className='geo-node geo-region';rn.innerHTML='<span class="tw">›</span>'+region;
    rn.onclick=e=>{e.stopPropagation();selGeo({region});};rw.appendChild(rn);
    [...GEO[pays][region]].forEach(appel=>{const an=document.createElement('button');an.className='geo-node geo-appel';an.textContent=appel;an.onclick=e=>{e.stopPropagation();selGeo({region,appel});};rw.appendChild(an);});
  });
  geoTree.appendChild(rw);
  pn.onclick=()=>{
    if(!hasReg){selGeo({pays});return;} // pays sans région (ex. Chypre) : on filtre directement
    const open=rw.classList.toggle('geo-hidden')===false;pn.setAttribute('aria-expanded',open);pn.querySelector('.tw').textContent=open?'▾':'▸';};
});
function selGeo(sel){
  const same=activeGeo&&activeGeo.pays===sel.pays&&activeGeo.region===sel.region&&activeGeo.appel===sel.appel;
  activeGeo=same?null:sel;
  document.querySelectorAll('.geo-node').forEach(n=>n.classList.remove('on'));
  if(activeGeo)document.querySelectorAll('.geo-node').forEach(n=>{const txt=n.textContent.replace(/[›▾▸]/,'').trim();
    if(activeGeo.appel?txt===activeGeo.appel&&n.classList.contains('geo-appel'):activeGeo.region?txt===activeGeo.region&&n.classList.contains('geo-region'):txt===activeGeo.pays&&n.classList.contains('geo-pays'))n.classList.add('on');});
  render();
}
document.getElementById('clearBtn').onclick=()=>{activeThemes.clear();activeSubs.clear();activeNiv.clear();activeGeo=null;document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));document.querySelectorAll('.geo-node').forEach(n=>n.classList.remove('on'));subPanel.classList.remove('show');render();};

/* ============ TABS ============ */
function marquerOnglet(m){document.querySelectorAll('.tab').forEach(x=>{const on=x.dataset.mode===m;x.classList.toggle('on',on);x.setAttribute('aria-selected',on);});}
function setMode(m){taire();mode=m;marquerOnglet(m);updateBadges();document.getElementById('filterBar').style.display=m==='due'||m==='lexique'||m==='suivi'||m==='cartes'?'none':'block';render();}
document.querySelectorAll('.tab').forEach(t=>{t.onclick=()=>{if(t.dataset.mode==='due')startSession(buildQueue(EXOS),'Session du jour');else setMode(t.dataset.mode);};});

/* ============ BIBLIOTHÈQUE ============ */
const grid=document.getElementById('grid');
function matches(f){
  if(activeThemes.size&&!activeThemes.has(f.theme))return false;
  if(activeSubs.size){const fs=f.sous||[];if(![...activeSubs].some(s=>fs.includes(s)))return false;}
  if(activeNiv.size&&!activeNiv.has(f.niveau))return false;
  if(activeGeo){if(!f.geo)return false;if(activeGeo.appel)return f.geo.appel===activeGeo.appel;if(activeGeo.region)return f.geo.region===activeGeo.region;return f.geo.pays===activeGeo.pays;}
  return true;
}
function render(){
  majBandeau();
  if(mode==='due')return;
  if(mode==='lexique')return renderLexique();
  if(mode==='suivi')return renderSuivi();
  if(mode==='cartes')return renderCartes();
  const nf=activeThemes.size+activeSubs.size+activeNiv.size+(activeGeo?1:0);
  document.getElementById('filtSum').textContent=nf?`Filtrer (${nf} actif${nf>1?'s':''})`:'Filtrer';
  const list=FICHES.filter(matches);
  document.getElementById('introLine').textContent= mode==='atelier'?'Compose ton programme : ajoute des fiches, note le vin servi et la durée, puis projette ou imprime le support.':'';
  renderProg();
  document.getElementById('shown').textContent=list.length;
  document.getElementById('acq').textContent=EXOS.filter(e=>prog[e.id]).length;
  const pool=list.flatMap(f=>EXOS.filter(e=>e.fiche===f));
  const sb=document.getElementById('sessionBtn');sb.textContent=`S'entraîner sur ces ${list.length} fiche(s)`;sb.disabled=!list.length;sb.hidden=!nf; // le bouton global ne sert que sur une sélection : sinon, la Session du jour fait le même travail
  sb.onclick=()=>startSession(buildQueue(pool).length?buildQueue(pool):shuffle(pool).slice(0,SESSION_MAX),'Session ciblée');
  // Points durs : voir pointsDurs() (exercices.js) ; deux réussites d'affilée les font sortir.
  const durs=pointsDurs(pool,prog,journal);
  const hb=document.getElementById('hardBtn');hb.hidden=!durs.length;hb.textContent=`Mes points durs (${durs.length})`;
  hb.onclick=()=>startSession(durs.slice(0,SESSION_MAX),'Mes points durs',[...new Set(durs.map(e=>e.fiche.id))]);
  grid.className='grid';grid.innerHTML='';
  if(!list.length){grid.innerHTML=`<div class="empty" style="grid-column:1/-1"><h3>Aucune fiche ne correspond</h3><p>Ajuste les filtres ou réinitialise.</p></div>`;return;}
  if(!CHAPS){list.forEach(f=>grid.appendChild(card(f)));return;} // plan du livre pas (encore) chargé : liste simple
  renderToc(list,nf>0);
}
/* ============ MON SUIVI (lit le journal, tout reste dans ce navigateur) ============ */
function renderSuivi(){
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;
  grid.className='suivi';grid.innerHTML='';
  const r=suivi(journal,id=>EX_BY_ID[id]&&EX_BY_ID[id].type,prog,now());
  const pct=c=>c[1]>=5?Math.round(100*c[0]/c[1])+' %':'—';
  const n=(c,u='réponse')=>c[1]?`sur ${c[1]} ${u}${c[1]>1?'s':''}`:'pas encore de données';
  const ab=seances.filter(x=>!x.fin&&x.r>0).length;
  const min=r.mediane==null?'—':r.mediane<90000?Math.round(r.mediane/1000)+' s':Math.round(r.mediane/60000)+' min';
  const rows=[
    ['Réussite immédiate',pct(r.immediate),`À la première réponse à un exercice, ${n(r.immediate)}. Les seconds essais ne comptent pas.`],
    ['Rappel sans aide',pct(r.libre),`Exercices où il faut produire la réponse (flashcard, texte à trous, réponse courte, ordre), ${n(r.libre)}.`],
    ['Réussite après ~7 jours',pct(r.j7),`Même exercice, réponse précédente 5 à 10 jours plus tôt, ${n(r.j7)}.`],
    ['Réussite après 3-4 semaines',pct(r.j28),`Même exercice, réponse précédente 21 à 35 jours plus tôt, ${n(r.j28)}.`],
    ['Révisions en retard',String(r.retard.n),r.retard.n?`dont ${r.retard.vieux} depuis plus de 7 jours.`:'Rien en retard.'],
    ['Durée médiane d\'une séance',min,r.nSeances?`Sur ${r.nSeances} séance${r.nSeances>1?'s':''} d'au moins 2 réponses (pause de plus de 30 min = nouvelle séance).`:'Pas encore de séance mesurable.'],
    ['Séances abandonnées',String(ab),`Commencées, au moins une réponse, jamais terminées — sur ${seances.length} séance${seances.length>1?'s':''} suivie${seances.length>1?'s':''} depuis l'ajout de ce suivi.`],
  ];
  const h=el('h2','suivi-t','Mon suivi');grid.append(h,el('p','suivi-note','Chiffres indicatifs : un seul utilisateur, aucune preuve. Ils servent à te repérer, pas à te noter.'));
  rows.forEach(([l,v,d])=>{const c=el('div','suivi-row');c.append(el('div','suivi-l',l),el('div','suivi-v',v),el('p','suivi-d',d));grid.append(c);});
}
/* ============ CARTES (toutes les cartes de régions, pour situer un domaine devant un client) ============ */
let carteQuery='';
const CARTES=FICHES.filter(f=>f.source==='france'&&/viewBox="/.test(f.schema?.svg??'')).sort((a,b)=>!a.geo?.region?-1:!b.geo?.region?1:a.geo.region.localeCompare(b.geo.region,'fr')||a.id-b.id);
function renderCartes(){
  document.getElementById('introLine').textContent=partenaires.length?'Cherche un domaine, une commune, une appellation ou une région : la carte s’affiche avec le domaine en évidence. Touche une carte pour l’agrandir.':'Toutes les cartes des régions. Touche une carte pour l’agrandir. Importe tes partenaires (bas de page) pour les y voir.';
  document.getElementById('progPanel').hidden=true;
  grid.className='lexique';grid.innerHTML='';
  const q=el('input','ex-input');q.type='search';q.placeholder=partenaires.length?'Domaine, commune, appellation ou région':'Région ou appellation';q.setAttribute('aria-label','Chercher une carte');q.value=carteQuery;
  const list=el('div');
  const draw=()=>{list.innerHTML='';const n=normalize(carteQuery);
    const hits=n?partenaires.filter(p=>normalize([p.nom,p.commune,p.region,...(p.appellations||[])].join(' ')).includes(n)):[];
    const hl=new Set(hits.map(p=>p.nom));
    const vues=!n?CARTES:hits.length?CARTES.filter(f=>hits.some(p=>p.points&&p.points[f.id])):CARTES.filter(f=>normalize([f.geo?.region,f.titre,f.schema.legende].join(' ')).includes(n));
    vues.forEach(f=>{const d=el('div','card lex');
      d.append(el('h3',null,f.schema.titre||f.geo?.region||'France'),el('p','src',f.schema.titre?(f.geo?.region||'France'):f.titre));
      d.insertAdjacentHTML('beforeend',`<figure class="schema" tabindex="0" role="button" aria-label="Agrandir la carte">${fitSvg(avecPartenaires(f,f.schema.svg,hl))}<figcaption>${f.schema.legende} — ${f.schema.src}</figcaption></figure>`+(hits.length?'':partenairesHTML(f)));
      const b=el('button','chip','Lire la fiche');b.onclick=()=>lireChapitre(f.titre,[f]);d.append(b);list.append(d);});
    if(hits.length)list.prepend(el('p','suivi-note',hits.map(p=>p.nom+(p.commune?' ('+p.commune+')':'')+(p.appellations?.length?' — '+p.appellations.join(', '):'')).join(' ; ')));
    if(!vues.length)list.append(el('p','empty','Aucune carte ne correspond.'));};
  q.oninput=()=>{carteQuery=q.value;draw();};
  grid.append(q,list);draw();
}
/* ============ LEXIQUE ============ */
// Photo libre de droits (Wikimedia Commons), avec crédit et licence obligatoires.
// shortcut: image chargée depuis Commons, donc absente hors ligne ; la copier dans le dépôt si l'usage hors ligne compte.
function lexPhoto(t){
  if(!t.photo)return null;const p=t.photo,f=el('figure','lex-ph'),i=el('img');
  i.src='https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(p.fichier)+'?width=640';i.alt=p.legende;i.loading='lazy';
  const c=el('figcaption',null,p.legende+' '),a=el('a',null,`Photo : ${p.auteur}, ${p.licence}, Wikimedia Commons`);
  a.href='https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(p.fichier);a.target='_blank';a.rel='noopener';
  c.append(a);f.append(i,c);return f;}

let lexQuery='';
function renderLexique(){
  document.getElementById('introLine').textContent='Les mots du métier, avec leur origine : retenir le sens d’un mot, c’est souvent retenir son étymologie.';
  document.getElementById('progPanel').hidden=true;
  grid.className='lexique';grid.innerHTML='';
  const q=el('input','ex-input');q.type='search';q.placeholder='Chercher un terme';q.setAttribute('aria-label','Chercher un terme');q.value=lexQuery;
  const list=el('div');
  const draw=()=>{list.innerHTML='';const n=normalize(lexQuery);
    [...LEXIQUE].sort((a,b)=>a.terme.localeCompare(b.terme,'fr')).filter(t=>!n||normalize(t.terme+' '+t.def).includes(n)).forEach(t=>{
      const d=el('div','card lex');
      d.append(el('h3',null,t.terme),el('p','synth',t.def));const ph=lexPhoto(t);if(ph)d.append(ph);
      if(t.etym){const e=el('p',null);e.append(el('b',null,'Étymologie : '),t.etym);d.append(e);}
      const m=el('div','mnemo');m.append(el('span','m-lbl','Déclic'),t.declic);d.append(m);
      const st=el('p','src',(t.status==='verified'?'✓ vérifiée':'⚠ à vérifier'+(t.note?' — '+t.note:''))+' · '+t.src.join(' ; '));d.append(st);
      const fs=lexFiches(t,FICHES).slice(0,6);
      if(fs.length){const w=el('div','lex-f');fs.forEach(f=>{const b=el('button','chip',f.titre);b.onclick=()=>lireChapitre('Lexique : '+t.terme,[f]);w.append(b);});d.append(w);}
      list.append(d);});
    if(!list.children.length)list.append(el('p','empty',LEXIQUE.length?'Aucun terme ne correspond.':'Lexique en préparation.'));};
  q.oninput=()=>{lexQuery=q.value;draw();};
  grid.append(q,list);draw();
}
let CHAPS=null;const chapOuverts=new Set();let secOuverts=null; // sections dépliées (au départ : celle où l'on en est)
function renderToc(list,filtre){
  grid.className='grid toc';
  const vue=f=>etat(f)[0]!=='new';
  // Reprendre : première fiche pas encore vue, dans l'ordre du livre
  const suite=CHAPS.flatMap(c=>c.fiches.map((f,i)=>({c,f,i}))).find(x=>!vue(x.f));
  if(!filtre&&suite&&mode!=='atelier'){
    const r=el('div','resume');
    r.append(el('p',null,`Reprendre — ${suite.c.chapitre}, fiche ${suite.i+1} sur ${suite.c.fiches.length}`),el('b',null,suite.f.titre));
    const b=el('button','btn primary','Continuer la lecture');b.onclick=()=>lireChapitre(suite.c.chapitre,suite.c.fiches,suite.i);r.append(b);grid.append(r);
  }
  let sec=null,box=grid;
  CHAPS.forEach(c=>{
    const fs=c.fiches.filter(f=>list.includes(f));if(!fs.length&&(c.fiches.length||filtre))return;
    const nom=c.section||c.partie;
    if(nom!==sec){sec=nom;const all=CHAPS.filter(x=>(x.section||x.partie)===nom).flatMap(x=>x.fiches);
      if(!secOuverts)secOuverts=new Set([suite?(suite.c.section||suite.c.partie):nom]);
      const sd=el('details','sec');sd.open=!!filtre||secOuverts.has(nom);sd.ontoggle=()=>{if(sd.open)secOuverts.add(nom);else secOuverts.delete(nom);};
      const h=el('summary','toc-sec');h.append(el('span','sec-t',nom),el('small',null,`${all.filter(vue).length} sur ${all.length} fiches vues`));
      const sp=all.filter(f=>list.includes(f)).flatMap(f=>EXOS.filter(e=>e.fiche===f)),st=el('button','btn','S\'entraîner sur cette section');st.disabled=!sp.length;
      st.onclick=()=>startSession(buildQueue(sp).length?buildQueue(sp):shuffle(sp).slice(0,SESSION_MAX),'Section : '+nom);
      const sa=el('div','chap-act sec-act');sa.append(st);sd.append(h,sa);grid.append(sd);box=sd;}
    const d=el('details','chap');d.open=filtre||chapOuverts.has(c.chapitre);d.ontoggle=()=>{if(d.open){chapOuverts.add(c.chapitre);remplir();}else chapOuverts.delete(c.chapitre);};
    const sm=el('summary'),nv=fs.filter(vue).length;
    sm.append(el('span','chap-t',c.chapitre),el('span','chap-m',(c.page?`p. ${c.page} · `:'')+(fs.length?`${nv}/${fs.length}`:'récit seul')));
    const bar=el('span','chap-bar');bar.setAttribute('aria-hidden','true');bar.append(el('i'));bar.firstChild.style.width=(fs.length?100*nv/fs.length:0)+'%';sm.append(bar);
    const inn=el('div','chap-in'),act=el('div','chap-act'),pool=fs.flatMap(f=>EXOS.filter(e=>e.fiche===f));
    const lire=el('button','btn','Lire le chapitre');lire.onclick=()=>lireChapitre(c.chapitre,fs);
    const tr=el('button','btn','S\'entraîner sur ce chapitre');tr.disabled=!pool.length;
    tr.onclick=()=>startSession(buildQueue(pool).length?buildQueue(pool):shuffle(pool).slice(0,SESSION_MAX),'Chapitre : '+c.chapitre);
    act.append(lire,tr);inn.append(act);d.append(sm,inn);box.append(d);
    let rempli=false;function remplir(){if(rempli)return;rempli=true;fs.forEach(f=>inn.append(card(f)));} // cartes construites à l'ouverture du chapitre
    if(d.open)remplir();
  });
}
function coursHTML(c){
  if(!c)return '';
  const b=x=>`<p class="imp-${x.imp}">${x.txt}</p>`;
  const tab=t=>t?`<table>${t.caption?`<caption>${t.caption}</caption>`:''}<tr>${t.head.map(h=>`<th>${h}</th>`).join('')}</tr>${t.rows.map(r=>`<tr class="imp-${r.imp}">${r.cells.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table>`:'';
  return `<details class="cours"><summary>Approfondir</summary>
    ${c.lede?`<p class="lede">${c.lede}</p>`:''}${c.essentiel?`<p class="ess">${c.essentiel}</p>`:''}
    ${c.frise?`<ul>${c.frise.map(x=>`<li><b>${x.date}</b> — ${x.txt}</li>`).join('')}</ul>`:''}
    ${(c.sections||[]).map(x=>`<h4>${x.h}</h4>${(x.blocs||[]).map(b).join('')}${tab(x.table)}`).join('')}
    ${c.synthese?`<h4>À retenir</h4>${c.synthese.map(b).join('')}`:''}
    ${c.src?`<p class="imp-culture">${c.src}</p>`:''}</details>`;
}
/* Schémas : certains textes dépassent le viewBox et sont coupés (surtout à droite). On mesure le dessin une fois et on élargit le viewBox, sans toucher au dessin. */
const fitCache=new Map();
function fitSvg(svg){
  if(fitCache.has(svg))return fitCache.get(svg);
  let out=svg;
  const m=svg.match(/viewBox="(-?[\d.]+)[ ,]+(-?[\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)"/);
  if(m){
    const box=document.createElement('div');box.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden;width:320px';box.innerHTML=svg;document.body.append(box);
    try{
      const b=box.querySelector('svg').getBBox(),W=+m[3],H=+m[4],x0=Math.min(+m[1],Math.floor(b.x-4)),y0=Math.min(+m[2],Math.floor(b.y-4));
      const x1=Math.max(+m[1]+W,Math.ceil(b.x+b.width+4)),y1=Math.max(+m[2]+H,Math.ceil(b.y+b.height+4));
      if(x0<+m[1]||y0<+m[2]||x1>+m[1]+W||y1>+m[2]+H)out=svg.replace(m[0],`viewBox="${x0} ${y0} ${x1-x0} ${y1-y0}"`);
    }catch{}
    box.remove();
  }
  fitCache.set(svg,out);return out;
}
/* ============ MES PARTENAIRES (fichier privé importé, gardé dans ce navigateur seulement) ============ */
const PAKEY='mv_partenaires';let partenaires=[];try{partenaires=JSON.parse(localStorage.getItem(PAKEY))||[];}catch{}
const escH=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
// Points des partenaires posés sur la carte d'une fiche, sans nom (trop serrés sur la carte de France) : nom au survol, liste sous la fiche.
function avecPartenaires(f,svg,hl){ // hl : noms des partenaires à mettre en avant (onglet Cartes), nom écrit sur la carte
  const pj=(svg.match(/data-proj="([^"]+)"/)||[])[1]?.split(',').map(Number),vb=(svg.match(/viewBox="([^"]+)"/)||[])[1]?.split(/[ ,]+/).map(Number);
  const pos=p=>{if(pj&&p.ll){const[x0,y1,k,s]=pj,x=(p.ll[0]-x0)*k*s,y=(y1-p.ll[1])*s;return x>=0&&y>=0&&x<=vb[2]&&y<=vb[3]?[+x.toFixed(1),+y.toFixed(1)]:null;}return p.points?.[f.id];}; // ll : suit la carte même si son cadrage a changé
  const pts=partenaires.filter(p=>pos(p));if(!pts.length)return svg;
  const W=+(svg.match(/viewBox="[^"]*?[ ,]+[^ ,"]+[ ,]+([\d.]+)/)||[,400])[1],fs=Math.max(8,W/45);
  const g=pts.map(p=>{const[x,y]=pos(p);if(hl&&hl.has(p.nom))return '';return `<circle cx="${+x}" cy="${+y}" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="${+x}" cy="${+y}" r="1.2" fill="currentColor"><title>${escH(p.nom)}</title></circle>`;}).join('')
    +pts.filter(p=>hl&&hl.has(p.nom)).map(p=>{const[x,y]=pos(p);return `<circle cx="${+x}" cy="${+y}" r="${fs*.6}" fill="#8b1e3f" stroke="#fff" stroke-width="1.5"><title>${escH(p.nom)}</title></circle><text x="${+x+fs*.9}" y="${+y+fs*.35}" font-size="${fs}" font-weight="700" fill="#8b1e3f" stroke="#fff" stroke-width="3" paint-order="stroke">${escH(p.nom)}</text>`;}).join('');
  return svg.replace(/<\/svg>\s*$/,`<g class="partenaires">${g}</g></svg>`);
}
// Fiche de région : ses partenaires ; carte sans région (France) : tous ceux qui y ont un point, car la carte ne porte pas les noms.
const partenairesHTML=f=>{const r=f.geo&&f.geo.region;const l=r?partenaires.filter(p=>p.region===r):partenaires.filter(p=>p.points&&p.points[f.id]);return l.length?`<details class="mnemo partenaires-liste"><summary class="m-lbl">Mes partenaires (${l.length})</summary>${l.map(p=>escH(p.nom)+(p.commune?' ('+escH(p.commune)+')':'')+(p.appellations&&p.appellations.length?' — '+p.appellations.map(escH).join(', '):'')).join(' ; ')}</details>`:'';};
const schemaHTML=f=>f.schema?`<figure class="schema" tabindex="0" role="button" aria-label="Agrandir le schéma">${fitSvg(avecPartenaires(f,f.schema.svg))}<figcaption>${f.schema.legende} — ${f.schema.src}</figcaption></figure>`:'';
/* Toucher un schéma l'ouvre en grand (défilement et pincement possibles) ; Échap ou le bouton le referment. */
let zoomOpener=null;
function fermerZoom(){const z=document.getElementById('zoom');if(!z||z.hidden)return false;z.hidden=true;document.body.style.overflow=document.getElementById('proj').hidden?'':'hidden';zoomOpener&&zoomOpener.focus({preventScroll:true});return true;}
function ouvrirZoom(fig){
  const z=document.getElementById('zoom'),c=fig.cloneNode(true);c.removeAttribute('tabindex');c.removeAttribute('role');c.removeAttribute('aria-label');
    z.querySelector('.zoom-in').replaceChildren(c);z.hidden=false;document.body.style.overflow='hidden';zoomOpener=fig;z.scrollTo(0,0);z.querySelector('button').focus();
}
document.addEventListener('click',e=>{const f=e.target.closest('.schema');if(f&&!f.closest('#zoom')&&!f.closest('#support'))ouvrirZoom(f);});
document.addEventListener('keydown',e=>{const f=e.target.classList&&e.target.classList.contains('schema')&&e.target;if(f&&(e.key==='Enter'||e.key===' ')){e.preventDefault();ouvrirZoom(f);}});
// Détails que seul le livre (ou une source) appuie : signalés, sans compter comme « à vérifier ».
const selonHTML=f=>f.selon_livre?.length?`<details class="selon-livre"><summary>${f.source==='france'?'Source unique, non recoupé':'Selon le livre, non recoupé'} (${f.selon_livre.length})</summary><ul>${f.selon_livre.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'';
function card(f){
  const c=document.createElement('div');c.className='card'+(f.theme==='Géographie viticole'?' t-geo':'');
  const mine=EXOS.filter(e=>e.fiche===f);
  const geoTag=f.geo?`<span class="tag geo">${f.geo.appel||f.geo.region||f.geo.pays}</span>`:'';
  const nDue=mine.filter(isDue).length;
  const dueTag=nDue?`<span class="tag due">${nDue} à revoir</span>`:'';
  const chk=f.to_check||[];
  const statTag=f.status==='verified'?'<span class="tag ok">✓ vérifiée</span>':chk.length?'<span class="tag warn">⚠ à vérifier</span>':'';
  const chkList=chk.length?`<details class="to-check"><summary>Points à vérifier (${chk.length})</summary><ul>${chk.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'';
  const selon=selonHTML(f);
  const subTags=(f.sous||[]).map(s=>`<span class="sub-tag">${s}</span>`).join('');
  c.innerHTML=`
    <div class="card-tags"><span class="tag theme">${f.theme}</span>${geoTag}<span class="tag niv">${f.niveau}</span>${dueTag}</div>
    <button class="card-toggle" aria-expanded="false"><h3>${f.titre}</h3><span class="fstat s-${etat(f)[0]}">${etat(f)[1]}</span></button>
    <p class="synth">${f.synth}</p>
    <div class="card-body"></div>`;
  // Le corps (schéma, approfondissement, flashcard…) ne se construit qu'à la première ouverture de la carte.
  const tg=c.querySelector('.card-toggle'),corps=c.querySelector('.card-body');let bati=false;
  const batir=()=>{bati=true;corps.innerHTML=`
    ${statTag?`<div class="stat-line">${statTag}</div>`:''}
    <div class="sub-tags">${subTags}</div>
    ${schemaHTML(f)}
    ${coursHTML(f.cours)}
    ${chkList}${selon}
    ${partenairesHTML(f)}
    <div class="mnemo"><span class="m-lbl">Astuce mémo</span>${f.mnemo}</div>
    <div class="flash-hint">Flashcard — touche pour retourner</div>
    <div class="flash" tabindex="0" role="button" aria-label="Retourner la flashcard"><div class="flash-in"><div class="flash-face flash-front">${f.flash.q}</div><div class="flash-face flash-back">${f.flash.a}</div></div></div>
    <button class="btn train">S'entraîner — ${mine.length} exercice(s)</button>
    <div class="src">— ${f.src}${f.page?', p. '+f.page:''}</div>`;
    const flash=corps.querySelector('.flash');flash.onclick=()=>flash.classList.toggle('flip');flash.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flash.click();}};
    corps.querySelector('.train').onclick=()=>startSession(shuffle(mine),'Fiche : '+f.titre,[f.id]); // fiche déjà sous les yeux
  };
  tg.onclick=()=>{if(!bati)batir();tg.setAttribute('aria-expanded',c.classList.toggle('open'));};
  if(mode==='atelier'){ // bouton visible même carte repliée
    const add=el('button','btn add');const sync=()=>{const inP=inProg(f.id);add.textContent=inP?'✓ Dans le programme':'Ajouter au programme';add.classList.toggle('in',inP);add.setAttribute('aria-pressed',inP);};
    add.onclick=()=>{toggleInProg(f.id);sync();renderProg();};
    sync();c.querySelector('.synth').after(add);}
  return c;
}

/* ============ MASTERCLASS : PROGRAMMES, SUPPORT, QUIZ, PROJECTION ============ */
// store = {cur, progs:{<clé>:{titre, quiz, items:[{id, vin, duree, contenu}]}}} ; contenu : synth | astuce | essentiel
const PRKEY='mv_programmes',FICHE_BY_ID=Object.fromEntries(FICHES.map(f=>[f.id,f]));
const newKey=()=>'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
const blankProg=titre=>({titre:titre||'',quiz:true,items:[]});
// Tout programme venu de l'extérieur (sauvegarde, lien) passe par ici : on ne garde que des champs connus et des fiches existantes.
function cleanProg(p){
  if(!p||typeof p!=='object'||!Array.isArray(p.items))return null;
  return {titre:String(p.titre||'').slice(0,120),quiz:p.quiz!==false,
    items:p.items.filter(x=>x&&FICHE_BY_ID[x.id]).map(x=>({id:x.id,vin:String(x.vin||'').slice(0,160),duree:Math.min(240,Math.max(0,parseInt(x.duree)||0)),contenu:['synth','astuce','essentiel'].includes(x.contenu)?x.contenu:'astuce'}))};
}
let store=(()=>{
  try{const s=JSON.parse(localStorage.getItem(PRKEY));if(s&&s.progs&&s.progs[s.cur]){for(const k in s.progs)s.progs[k]=cleanProg(s.progs[k])||blankProg();return s;}}catch{}
  const k=newKey(),s={cur:k,progs:{[k]:blankProg()}};
  try{const old=JSON.parse(localStorage.getItem('mv_programme')); // version précédente : un seul programme {titre, ids}
    if(old&&Array.isArray(old.ids))s.progs[k]=cleanProg({titre:old.titre,items:old.ids.map(id=>({id,duree:10}))});}catch{}
  return s;
})();
const P=()=>store.progs[store.cur];
function saveProg(){try{localStorage.setItem(PRKEY,JSON.stringify(store));}catch{alert('Impossible d\'enregistrer le programme dans ce navigateur.');}}
const inProg=id=>P().items.some(x=>x.id===id);
function toggleInProg(id){const it=P().items,i=it.findIndex(x=>x.id===id);i<0?it.push({id,vin:'',duree:10,contenu:'astuce'}):it.splice(i,1);saveProg();}
const fmtDuree=m=>m>=60?`${Math.floor(m/60)} h ${String(m%60).padStart(2,'0')}`:`${m} min`;
function essentiels(f){const c=f.cours;if(!c)return [];
  return [c.essentiel,...(c.sections||[]).flatMap(s=>(s.blocs||[]).filter(b=>b.imp==='essentiel').map(b=>b.txt)),...(c.synthese||[]).filter(b=>b.imp==='essentiel').map(b=>b.txt)].filter(Boolean);}

function renderProg(){
  const box=document.getElementById('progPanel');box.hidden=mode!=='atelier';if(box.hidden)return;
  const pr=P();box.innerHTML='';
  // choix du programme
  const bar=el('div','prog-bar'),sel=el('select','ex-input');sel.setAttribute('aria-label','Programme');
  Object.entries(store.progs).forEach(([k,p])=>sel.append(new Option((p.titre||'Sans titre')+` (${p.items.length})`,k,false,k===store.cur)));
  sel.onchange=()=>{store.cur=sel.value;saveProg();render();};
  const bNew=el('button','btn','Nouveau'),bDup=el('button','btn','Dupliquer'),bDel=el('button','btn','Supprimer');
  bNew.onclick=()=>{const k=newKey();store.progs[k]=blankProg();store.cur=k;saveProg();render();};
  bDup.onclick=()=>{const k=newKey();store.progs[k]=JSON.parse(JSON.stringify(pr));store.progs[k].titre=(pr.titre||'Sans titre')+' (copie)';store.cur=k;saveProg();render();};
  bDel.onclick=()=>{if(!confirm(`Supprimer le programme « ${pr.titre||'Sans titre'} » ?`))return;delete store.progs[store.cur];
    store.cur=Object.keys(store.progs)[0]||(k=>(store.progs[k]=blankProg(),k))(newKey());saveProg();render();};
  bar.append(sel,bNew,bDup,bDel);box.append(bar);
  const t=el('input','ex-input');t.placeholder='Titre de la masterclass';t.setAttribute('aria-label','Titre de la masterclass');t.value=pr.titre;
  t.oninput=()=>{pr.titre=t.value;saveProg();sel.selectedOptions[0].text=(t.value||'Sans titre')+` (${pr.items.length})`;};box.append(t);
  if(!pr.items.length){box.append(el('p','hint','Aucune fiche pour l\'instant : touche « Ajouter au programme » sur les fiches ci-dessous.'));return;}
  const total=el('p','hint');const upTotal=()=>total.textContent=`${pr.items.length} fiche(s) · durée prévue ${fmtDuree(pr.items.reduce((s,x)=>s+x.duree,0))}`;upTotal();
  const list=el('ol','prog-list');
  pr.items.forEach((it,i)=>{const f=FICHE_BY_ID[it.id],li=el('li','prog-item'),head=el('div','order-item');
    head.append(el('span',null,`${i+1}. ${f.titre}`));
    const up=el('button','mini','↑'),dn=el('button','mini','↓'),rm=el('button','mini','×');
    up.setAttribute('aria-label','Monter '+f.titre);dn.setAttribute('aria-label','Descendre '+f.titre);rm.setAttribute('aria-label','Retirer '+f.titre);
    up.disabled=!i;dn.disabled=i===pr.items.length-1;
    const mv=j=>{[pr.items[i],pr.items[j]]=[pr.items[j],pr.items[i]];saveProg();renderProg();};
    up.onclick=()=>mv(i-1);dn.onclick=()=>mv(i+1);rm.onclick=()=>{pr.items.splice(i,1);saveProg();render();};
    head.append(up,dn,rm);
    const opts=el('div','prog-opts');
    const vin=el('input','ex-input');vin.placeholder='Vin servi (cuvée, domaine, millésime)';vin.setAttribute('aria-label','Vin servi pour '+f.titre);vin.value=it.vin;vin.oninput=()=>{it.vin=vin.value;saveProg();};
    const du=el('input','ex-input');du.type='number';du.min=0;du.max=240;du.step=5;du.value=it.duree;du.setAttribute('aria-label','Durée en minutes pour '+f.titre);
    du.oninput=()=>{it.duree=Math.min(240,Math.max(0,parseInt(du.value)||0));saveProg();upTotal();};
    const ct=el('select','ex-input');ct.setAttribute('aria-label','Contenu imprimé pour '+f.titre);
    [['synth','Synthèse seule'],['astuce','+ astuce'],...(essentiels(f).length?[['essentiel','+ astuce + essentiels']]:[])].forEach(([v,l])=>ct.append(new Option(l,v,false,v===it.contenu)));
    ct.onchange=()=>{it.contenu=ct.value;saveProg();};
    const lab=(txt,inp)=>{const l=el('label','prog-field');l.append(el('span',null,txt),inp);return l;};
    opts.append(lab('Vin servi',vin),lab('Minutes',du),lab('Support',ct));
    li.append(head,opts);list.append(li);});
  box.append(list,total);
  const q=el('label','prog-check'),qc=el('input');qc.type='checkbox';qc.checked=pr.quiz;qc.onchange=()=>{pr.quiz=qc.checked;saveProg();};
  q.append(qc,' Ajouter un quiz et son corrigé (page séparée) au support');box.append(q);
  const acts=el('div','prog-actions'),bP=el('button','btn primary','Projeter'),bI=el('button','btn primary','Imprimer le support (PDF)'),bL=el('button','btn','Copier le lien'),bV=el('button','btn','Vider');
  bP.onclick=startProjection;bI.onclick=printSupport;bL.onclick=copyLink;
  bV.onclick=()=>{if(confirm('Retirer toutes les fiches de ce programme ?')){pr.items=[];saveProg();render();}};
  acts.append(bP,bI,bL,bV);box.append(acts);
}

/* ----- lien de partage : le programme voyage dans l'adresse (#prog=…) ----- */
const b64=s=>btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const unb64=s=>new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0)));
function copyLink(){
  const url=location.href.split('#')[0]+'#prog='+b64(JSON.stringify(P()));
  (navigator.clipboard?navigator.clipboard.writeText(url):Promise.reject()).then(()=>alert('Lien copié : ouvre-le sur un autre appareil pour y retrouver ce programme.'),()=>prompt('Copie ce lien :',url));
}
function importFromHash(){
  if(!location.hash.startsWith('#prog='))return;
  let p=null;try{p=cleanProg(JSON.parse(unb64(location.hash.slice(6))));}catch{}
  history.replaceState(null,'',location.pathname+location.search);
  if(!p){alert('Ce lien de programme est illisible.');return;}
  if(!confirm(`Ajouter le programme « ${p.titre||'Sans titre'} » (${p.items.length} fiche(s)) ?`))return;
  const k=newKey();store.progs[k]=p;store.cur=k;saveProg();setMode('atelier');
}

/* ----- support imprimé : fiches, vin et grille de dégustation, quiz, corrigé ----- */
const PRINTABLE=['mcq_single','odd_one_out','mcq_multi','true_false','short_answer'];
function quizFor(fs){ // une question par fiche à tour de rôle, 10 au plus
  const pools=fs.map(f=>shuffle(EXOS.filter(e=>e.fiche===f&&PRINTABLE.includes(e.type)))),out=[];
  for(let r=0;out.length<10&&pools.some(p=>p[r]);r++)pools.forEach(p=>{if(p[r]&&out.length<10)out.push(p[r]);});
  return out;
}
function printSupport(){
  const pr=P(),s=document.getElementById('support');s.innerHTML='';
  s.append(el('h1',null,pr.titre||'Masterclass'),el('p','sup-sub',`L'Atelier des Mille Vignes — ${pr.items.length} fiche(s) · ${fmtDuree(pr.items.reduce((a,x)=>a+x.duree,0))}`));
  pr.items.forEach((it,i)=>{const f=FICHE_BY_ID[it.id],a=el('article','sup-fiche');
    a.append(el('h2',null,`${i+1}. ${f.titre}`));
    if(it.vin)a.append(el('p','sup-vin','Vin servi : '+it.vin));
    a.insertAdjacentHTML('beforeend',`<p>${f.synth}</p>${schemaHTML(f)}`+
      (it.contenu!=='synth'?`<p><b>Astuce mémo : </b>${f.mnemo}</p>`:'')+
      (it.contenu==='essentiel'?`<ul class="sup-ess">${essentiels(f).map(x=>`<li>${x}</li>`).join('')}</ul>`:'')+
      (it.vin?`<table class="sup-grille">${['Œil','Nez','Bouche','Mes notes'].map(x=>`<tr><th>${x}</th><td></td></tr>`).join('')}</table>`:'')+
      `<p class="sup-src">${f.src}${f.page?', p. '+f.page:''}</p>`);
    s.append(a);});
  if(pr.quiz){const qs=quizFor(pr.items.map(x=>FICHE_BY_ID[x.id]));
    if(qs.length){
      const qz=el('section','sup-quiz');qz.append(el('h2',null,'Quiz'));const ol=el('ol');
      qs.forEach(ex=>{const li=el('li');const p=ex.payload;
        li.append(el('p','sup-q',ex.type==='true_false'?'Vrai ou faux : '+p.statement:ex.prompt+(ex.type==='mcq_multi'?' (plusieurs réponses)':'')));
        if(p.options){const o=el('ol','sup-opts');p.options.forEach(x=>o.append(el('li',null,x)));li.append(o);}
        else if(ex.type==='short_answer')li.append(el('p','sup-line','Réponse : ______________________________'));
        ol.append(li);});
      qz.append(ol);s.append(qz);
      const cg=el('section','sup-quiz');cg.append(el('h2',null,'Corrigé'));const ol2=el('ol');
      qs.forEach(ex=>ol2.append(el('li',null,correctText(ex))));cg.append(ol2);s.append(cg);
    }}
  s.append(el('p','sup-src','Contenus reformulés et crédités à leur source.'));
  window.print();
}

/* ----- projection : une fiche puis sa question au public, plein écran ----- */
let slides=[],slideAt=0;
function startProjection(){
  slides=P().items.flatMap(it=>[{k:'fiche',it},{k:'q',it}]);slideAt=0;
  const o=document.getElementById('proj');o.hidden=false;document.body.style.overflow='hidden';
  try{o.requestFullscreen&&o.requestFullscreen().catch(()=>{});}catch{}
  drawSlide();o.focus();
}
function stopProjection(){const o=document.getElementById('proj');o.hidden=true;document.body.style.overflow='';if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});}
function drawSlide(){
  const o=document.getElementById('proj'),s=slides[slideAt],f=FICHE_BY_ID[s.it.id],n=P().items.indexOf(s.it)+1;o.innerHTML='';
  const box=el('div','proj-slide');
  if(s.k==='fiche'){
    box.append(el('p','proj-kicker',`Fiche ${n} sur ${P().items.length}${s.it.duree?' · '+s.it.duree+' min':''}`),el('h2',null,f.titre));
    if(s.it.vin)box.append(el('p','proj-vin','Dans le verre : '+s.it.vin));
    box.insertAdjacentHTML('beforeend',`<p class="proj-synth">${f.synth}</p>${schemaHTML(f)}`);
  }else{
    box.append(el('p','proj-kicker','Question au public'));box.insertAdjacentHTML('beforeend',`<h2>${f.flash.q}</h2>`);
    const ans=el('div','proj-ans');ans.innerHTML=f.flash.a;ans.hidden=true;
    const rv=el('button','btn primary','Révéler la réponse');rv.onclick=()=>{ans.hidden=false;rv.remove();};box.append(rv,ans);
  }
  const nav=el('div','proj-nav'),pv=el('button','btn','‹ Précédent'),nx=el('button','btn','Suivant ›'),qt=el('button','btn','Quitter (Échap)');
  pv.disabled=!slideAt;nx.disabled=slideAt===slides.length-1;
  pv.onclick=()=>{slideAt--;drawSlide();};nx.onclick=()=>{slideAt++;drawSlide();};qt.onclick=stopProjection;
  nav.append(pv,el('span','proj-count',`${slideAt+1} / ${slides.length}`),nx,qt);
  o.append(box,nav);
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&fermerZoom())return;
  if(document.getElementById('proj').hidden)return;
  if(e.key==='Escape')stopProjection();
  else if(e.key==='ArrowRight'&&slideAt<slides.length-1){slideAt++;drawSlide();}
  else if(e.key==='ArrowLeft'&&slideAt>0){slideAt--;drawSlide();}
  else if(e.key===' '&&!(e.target instanceof HTMLButtonElement)){e.preventDefault();const r=document.querySelector('#proj .proj-slide .btn');r&&r.click();}
});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&!document.getElementById('proj').hidden)stopProjection();});

/* ============ SESSION D'EXERCICES ============ */
let shownAt=0,queue=[],pos=0,score={ok:0,total:0},sessionTitle='',synthVue=new Set(),schemaVu=new Set(),decouvertes=new Set(),nouvelles=[]; // fiches dont la synthèse a déjà servi de correction dans la séance
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
function startSession(q,title,dejaLues=[]){
  queue=q;pos=0;score={ok:0,total:0};sessionTitle=title;synthVue=new Set();schemaVu=new Set();decouvertes=new Set(dejaLues);
  if(q.length){seances.push({t:now(),n:q.length,r:0,fin:0});saveSeances();}
  nouvelles=[...new Set(q.map(e=>e.fiche).filter(f=>!decouvertes.has(f.id)&&aDecouvrir(f)))];
  mode='due';marquerOnglet('due');
  document.getElementById('filterBar').style.display='none';
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;document.getElementById('saveBanner').hidden=true;
  showExercise();window.scrollTo(0,0);
}
function showExercise(){
  grid.className='session';grid.innerHTML='';
  if(pos>=queue.length){
    const box=el('div','empty');
    if(!queue.length){box.append(el('h3',null,'Rien à revoir pour le moment'),el('p',null,'Tous les exercices sont planifiés plus tard. Reviens demain, ou entraîne-toi sur une fiche depuis l\'onglet Fiches.'));}
    else{const sc=seances[seances.length-1];if(sc&&!sc.fin){sc.fin=1;saveSeances();}
      box.append(el('h3',null,'Session terminée'),el('p',null,score.total?`${score.ok} bonne(s) réponse(s) sur ${score.total} exercice(s) corrigé(s).`:`${queue.length} carte(s) revue(s).`));
      const again=el('button','btn','Retour aux fiches');again.onclick=()=>setMode('revision');box.append(again);const sv=el('button','btn','Mon suivi');sv.onclick=()=>{setMode('suivi');window.scrollTo(0,0);};box.append(' ',sv);}
    grid.append(box);return;
  }
  const ex=queue[pos],p=ex.payload,f=ex.fiche;shownAt=now();
  if(!decouvertes.has(f.id)&&aDecouvrir(f)){decouvertes.add(f.id);const n=queue.filter(e=>e.fiche===f).length;
    const lire=()=>showDecouverte(f,{head:`Nouvelle notion ${nouvelles.indexOf(f)+1} sur ${nouvelles.length}`,lead:`Lis-la tranquillement : ${n} exercice${n>1?'s':''} sur cette notion ensuite.`}); // apprendre avant d'être interrogé
    pretestOn()&&f.qcm?showPretest(f,lire):lire();return;}
  const box=el('div','ex');
  const head=el('div','ex-head',`${sessionTitle} · ${pos+1}/${queue.length} · ${TYPE_LBL[ex.type]}`);
  if(f.status!=='verified')head.append(el('span','ex-warn','⚠ fiche à vérifier')); // la maîtrise (notes) et la fiabilité (statut) restent deux informations séparées
  box.append(head);
  box.append(el('div','ex-prompt',ex.prompt));
  const body=el('div','ex-body'),actions=el('div','ex-actions'),fb=el('div','fb');fb.setAttribute('aria-live','polite');
  box.append(body,fb,actions);grid.append(box);
  const submit=(answer,label='Valider')=>{const b=el('button','btn primary',label);b.onclick=()=>finish(ex,grade(ex,answer()),fb,actions,body);actions.append(b);return b;};
  const choice=(opts,onPick)=>shuffle(opts.map((o,i)=>i)).forEach(i=>{const b=el('button','opt',opts[i]);b.dataset.i=i;b.onclick=()=>onPick(i,b);body.append(b);});
  switch(ex.type){
    case 'flashcard':case 'flashcard_reverse':{
      const inp=el('textarea','ex-input');inp.rows=2;inp.placeholder='Ta réponse : elle sera corrigée par mots-clés (facultatif)';inp.setAttribute('aria-label','Ta réponse');body.append(inp);
      const show=el('button','btn primary','Voir la réponse');show.onclick=()=>{show.remove();const mine=inp.value.trim();inp.remove();
        const k=mine?flashKeys(p.answer,mine,p.keys):null;
        if(mine)body.append(el('p','ex-mine','Ta réponse : '+mine));body.append(el('div','ex-answer',p.answer));
        if(k&&k.ok!==null){const m=el('p','ex-keys');m.append(el('b',null,`Mots-clés retrouvés : ${k.found.length} sur ${k.keys.length}`));if(k.missing.length)m.append(' — manquants : '+k.missing.join(', '));body.append(m);}
        finish(ex,k?k.ok:null,fb,actions,body);};actions.append(show);break;}
    case 'label_schema':Object.assign(p,maskSchema(f.schema.svg,p.labels));body.insertAdjacentHTML('beforeend',`<figure class="schema" tabindex="0" role="button" aria-label="Agrandir le schéma">${fitSvg(p.svg)}</figure>`); // puis comme un QCM
    case 'mcq_single':case 'odd_one_out':
      choice(p.options,(i,b)=>{finish(ex,grade(ex,i),fb,actions,body);b.classList.add(i===p.answer?'good':'bad');body.querySelector(`[data-i="${p.answer}"]`).classList.add('good');});break;
    case 'true_false':
      [['Vrai',true],['Faux',false]].forEach(([t,v])=>{const b=el('button','opt',t);b.onclick=()=>{finish(ex,grade(ex,v),fb,actions,body);b.classList.add(v===p.answer?'good':'bad');};body.append(b);});
      body.prepend(el('p','ex-statement',p.statement));break;
    case 'mcq_multi':{
      const picked=new Set();
      choice(p.options,(i,b)=>{picked.has(i)?picked.delete(i):picked.add(i);b.classList.toggle('picked');b.setAttribute('aria-pressed',picked.has(i));});
      submit(()=>[...picked]);break;}
    case 'explain_client':{
      const inp=el('textarea','ex-input');inp.rows=5;inp.placeholder='Ta réponse, comme tu la dirais à un client';inp.setAttribute('aria-label','Ta réponse');body.append(inp);
      const show=el('button','btn primary','Voir la réponse modèle');
      show.onclick=()=>{show.remove();inp.readOnly=true; // ton texte reste à l'écran, il n'est pas enregistré
        body.append(el('div','ex-answer',p.model));
        const fs=el('fieldset','ex-crit');fs.append(el('legend',null,'Auto-évaluation : coche ce que ta réponse contenait'));
        const boxes=p.criteria.map(t=>{const l=el('label','prog-check'),c=el('input');c.type='checkbox';l.append(c,' '+t);fs.append(l);return c;});
        body.append(fs);actions.innerHTML='';
        const v=el('button','btn primary','Valider');v.onclick=()=>finish(ex,null,fb,actions,body,boxes.map(c=>+c.checked));actions.append(v);boxes[0].focus();};
      actions.append(show);break;}
    case 'short_answer':{
      const inp=el('input','ex-input');inp.placeholder='Ta réponse';inp.setAttribute('aria-label','Ta réponse');body.append(inp);
      const b=submit(()=>inp.value);inp.onkeydown=e=>{if(e.key==='Enter')b.click();};setTimeout(()=>inp.focus());break;}
    case 'cloze':{
      const inputs=[],line=el('p','ex-cloze');
      clozeParts(p.text).forEach((part,i)=>{if(i%2){const inp=el('input','ex-input blank');inp.setAttribute('aria-label','Trou '+(inputs.length+1));inputs.push(inp);line.append(inp);}else line.append(part);});
      body.append(line);const b=submit(()=>inputs.map(x=>x.value));inputs.forEach(x=>x.onkeydown=e=>{if(e.key==='Enter')b.click();});break;}
    case 'matching':{
      const rights=shuffle(p.pairs.map(x=>x[1])),sels=[];
      p.pairs.forEach(([left])=>{const row=el('label','match-row');row.append(el('span',null,left));const s=el('select','ex-input');s.append(new Option('— choisir —',''));rights.forEach(r=>s.append(new Option(r,r)));sels.push(s);row.append(s);body.append(row);});
      submit(()=>sels.map(s=>s.value));break;}
    case 'ordering':{
      let items=shuffle(p.items);if(items.every((x,i)=>x===p.items[i]))items.reverse(); // jamais déjà dans l'ordre
      const list=el('ol','order');
      const draw=()=>{list.innerHTML='';items.forEach((it,i)=>{const li=el('li','order-item');li.append(el('span',null,it));
        const up=el('button','mini','↑'),dn=el('button','mini','↓');up.setAttribute('aria-label','Monter '+it);dn.setAttribute('aria-label','Descendre '+it);up.disabled=!i;dn.disabled=i===items.length-1;
        up.onclick=()=>{[items[i-1],items[i]]=[items[i],items[i-1]];draw();};dn.onclick=()=>{[items[i+1],items[i]]=[items[i],items[i+1]];draw();};li.append(up,dn);list.append(li);});};
      draw();body.append(list);submit(()=>items);break;}
  }
}
/* Pré-test : une question avant de découvrir une notion neuve. Ni note, ni journal, ni répétition espacée ; réglage dans le pied de page. */
const PTKEY='mv_pretest';
const pretestOn=()=>{try{return localStorage.getItem(PTKEY)!=='0';}catch{return true;}};
function showPretest(f,suite){
  const box=el('div','ex'),q=f.qcm;
  const head=el('div','ex-head',`Pré-test · notion ${nouvelles.indexOf(f)+1} sur ${nouvelles.length}`);
  if(f.status!=='verified')head.append(el('span','ex-warn','⚠ fiche à vérifier'));
  box.append(head,el('div','ex-prompt',q.q),el('p','ex-mine','Pas de note : essayer avant de lire prépare la mémoire, même si tu te trompes.'));
  const body=el('div','ex-body');shuffle(q.opts.map((_,i)=>i)).forEach(i=>{const b=el('button','opt',q.opts[i]);b.onclick=suite;body.append(b);});
  const actions=el('div','ex-actions'),nsp=el('button','btn','Je ne sais pas encore'),pass=el('button','btn','Passer');nsp.onclick=pass.onclick=suite;actions.append(nsp,pass);
  box.append(body,actions);grid.className='session';grid.innerHTML='';grid.append(box);window.scrollTo(0,0);
}
function correctText(ex){
  const p=ex.payload;
  switch(ex.type){
    case 'flashcard':case 'flashcard_reverse':return '';
    case 'mcq_single':case 'odd_one_out':case 'label_schema':return p.options[p.answer];
    case 'mcq_multi':return p.answers.map(i=>p.options[i]).join(' ; ');
    case 'true_false':return p.answer?'Vrai':'Faux';
    case 'short_answer':return p.accepted[0];
    case 'cloze':return clozeParts(p.text).map((x,i)=>i%2?x[0]:x).join('');
    case 'matching':return p.pairs.map(x=>x[0]+' → '+x[1]).join(' ; ');
    case 'ordering':return p.items.join(' → ');
  }
  return '';
}
function showDecouverte(f,{head='Nouvelle notion',lead='',btnLbl='J\'ai lu, aux exercices',onGo=()=>showExercise(),onPrev=null,onQuit=null}={}){
  const box=el('div','ex decouverte');
  box.innerHTML=`<div class="ex-head"><span>${head}</span>${f.page?`<span class="folio">Mille Vignes, p. ${f.page}</span>`:''}</div>
    <h3>${f.titre}</h3><p class="synth">${f.synth}</p>${schemaHTML(f)}
    <div class="mnemo"><span class="m-lbl">Astuce mémo</span>${f.mnemo}</div>${coursHTML(f.cours)}
    <div class="src">— ${f.src}</div>${lead?`<p class="lead">${lead}</p>`:''}`;
  const actions=el('div','ex-actions'),go=el('button','btn primary',btnLbl),nav=(lbl,fn,cls='btn')=>{const b=el('button',cls,lbl);b.onclick=()=>{fn();window.scrollTo(0,0);};actions.append(b);};
  go.onclick=()=>{taire();if(!(lues[f.id]>1))lues[f.id]=now();saveLues();onGo();window.scrollTo(0,0);};
  ecouter([f.titre,f.synth,f.mnemo&&'Astuce : '+f.mnemo],box,actions);
  if(onPrev)nav('Fiche précédente',()=>{taire();onPrev();});
  actions.append(go);
  if(onQuit)nav('Quitter la lecture',onQuit,'btn later');
  box.append(actions);
  grid.className='session';grid.innerHTML='';grid.append(box);setTimeout(()=>go.focus({preventScroll:true}));
}
/* ============ LIRE UN CHAPITRE (fiches en cours, sans exercice) ============ */
function lireChapitre(titre,fiches,depart=0){
  mode='due';marquerOnglet(null);
  document.getElementById('filterBar').style.display='none';
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;document.getElementById('saveBanner').hidden=true;
  const page=i=>{
    if(i>=fiches.length){grid.className='session';grid.innerHTML='';const box=el('div','empty');
      box.append(el('h3',null,'Chapitre lu'),el('p',null,fiches.length?`${fiches.length} fiche(s). Ses exercices t'attendent dans la Session du jour.`:'Les fiches et exercices de ce chapitre arriveront avec son lot.'));
      const b=el('button','btn','Retour aux fiches');b.onclick=()=>setMode('revision');box.append(b);grid.append(box);return;}
    showDecouverte(fiches[i],{head:`${titre} · fiche ${i+1} sur ${fiches.length}`,btnLbl:i+1<fiches.length?'Fiche suivante':'Terminer le chapitre',onGo:()=>page(i+1),onPrev:i?()=>page(i-1):null,onQuit:()=>setMode('revision')});
  };
  const r=typeof RECITS!=='undefined'&&RECITS.find(x=>x.chapitre===titre);
  r?showRecit(r,()=>page(depart)):page(depart);window.scrollTo(0,0);
}
/* Récit du chapitre : le fil de l'argument avant les fiches, avec lecture à voix haute (synthèse vocale du navigateur) */
function taire(){try{speechSynthesis.cancel();}catch(e){}}
// Meilleure voix française installée : les voix « améliorées », « naturelles » ou en ligne sonnent bien moins robotiques.
function voixFr(){
  const vs=speechSynthesis.getVoices().filter(v=>/^fr/i.test(v.lang));
  const note=v=>(/premium/i.test(v.name)?4:/enhanced|qualit|amélior|natural|neural|online|google/i.test(v.name)?2:0)+(/fr[-_]FR/i.test(v.lang)?1:0);
  return vs.sort((a,b)=>note(b)-note(a))[0];
}
if('speechSynthesis' in window)speechSynthesis.getVoices(); // amorce le chargement des voix (asynchrone sur Chrome)
// Bouton « Écouter » (synthèse vocale du navigateur) ; sans elle, un message à la place
function ecouter(textes,box,actions){
  if(!('speechSynthesis' in window)){box.append(el('p','lead','Lecture à voix haute indisponible dans ce navigateur : ouvre le site dans Chrome ou Safari.'));return;}
  const b=el('button','btn','Écouter');
  b.onclick=()=>{if(speechSynthesis.speaking){taire();b.textContent='Écouter';return;}
    // Une phrase par énoncé : pauses naturelles, et Chrome Android coupe les textes longs vers 15 s.
    const phrases=textes.filter(Boolean).map(x=>x.replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ')).flatMap(x=>x.split(/(?<=[.!?…])\s+(?=[A-ZÀ-Ý«])/)).map(x=>x.trim()).filter(Boolean);
    const v=voixFr();
    phrases.forEach((x,i)=>{const u=new SpeechSynthesisUtterance(x);u.lang=v?.lang||'fr-FR';if(v)u.voice=v;u.rate=.95;
      if(i===phrases.length-1)u.onend=()=>b.textContent='Écouter';speechSynthesis.speak(u);});
    b.textContent='Arrêter';};
  actions.append(b);
}
function showRecit(r,onGo){
  const box=el('div','ex decouverte recit');
  box.innerHTML=`<div class="ex-head"><span>Récit du chapitre</span><span class="folio">Mille Vignes, p. ${r.pages}</span></div>
    <h3>${r.chapitre}</h3><p class="lead"><b>La question.</b> ${r.question}</p>${r.fil.map(t=>`<p class="synth">${t}</p>`).join('')}
    <p class="synth"><b>Ce qu’elle défend.</b> ${r.defend}</p>
    <div class="mnemo"><span class="m-lbl">À dire à un client</span>${r.client}</div>
    <p class="synth"><b>Question fil rouge.</b> ${r.filRouge}</p>
    ${r.prudence?.length?`<details class="cours"><summary>Points de prudence (le livre corrigé)</summary>${r.prudence.map(t=>`<p>${t}</p>`).join('')}</details>`:''}
    <div class="src">— D’après Pascaline Lepeltier, Mille Vignes, p. ${r.pages}. Texte reformulé.</div>`;
  const actions=el('div','ex-actions'),go=el('button','btn primary','Aux fiches du chapitre'),quit=el('button','btn later','Quitter la lecture');
  go.onclick=()=>{taire();onGo();window.scrollTo(0,0);};quit.onclick=()=>{taire();setMode('revision');};
  ecouter([r.chapitre,r.question,...r.fil,r.defend,r.filRouge],box,actions);
  actions.append(go,quit);box.append(actions);
  grid.className='session';grid.innerHTML='';grid.append(box);
}
// Le chapitre se déduit de la page (sommaire du livre) ; sans lui (fichier ouvert hors serveur), la liste reste simple.
fetch('data/mille-vignes-sommaire.json').then(r=>r.json()).then(toc=>{
  toc.sort((a,b)=>a.page-b.page);
  const chap=f=>toc.filter(c=>c.page<=f.page).pop();
  const par=new Map();
  FICHES.filter(f=>f.page).sort((a,b)=>a.page-b.page||a.id-b.id).forEach(f=>{const c=chap(f);if(c){if(!par.has(c))par.set(c,[]);par.get(c).push(f);}});
  CHAPS=[...par].map(([c,fiches])=>({...c,fiches}));
  // chapitres sans fiches mais avec un récit : lisibles avant le lot
  if(typeof RECITS!=='undefined')toc.forEach(c=>{if(!par.has(c)&&RECITS.some(r=>r.chapitre===c.chapitre))CHAPS.push({...c,fiches:[]});});
  CHAPS.sort((a,b)=>a.page-b.page);
  // Chapitres hors livre « La France viticole », après le livre, dans l'ordre de FRANCE_SOMMAIRE.
  if(typeof FRANCE_SOMMAIRE!=='undefined')FRANCE_SOMMAIRE.forEach(c=>{const fs=FICHES.filter(f=>f.source==='france'&&f.chapitre===c.chapitre).sort((a,b)=>a.id-b.id);if(fs.length)CHAPS.push({partie:c.partie||'La France viticole',section:c.section,chapitre:c.chapitre,fiches:fs});});
  render();
}).catch(()=>{});
// Le schéma s'affiche en entier la première fois dans la séance, puis derrière « Voir le schéma » (comme la synthèse).
function schemaCorrection(f){
  if(!f.schema)return '';
  if(!schemaVu.has(f.id)){schemaVu.add(f.id);return schemaHTML(f);}
  return `<details class="cours"><summary>Voir le schéma</summary>${schemaHTML(f)}</details>`;
}
function finish(ex,ok,fb,actions,body,crit){
  body.querySelectorAll('button,input,select').forEach(x=>x.disabled=true);actions.innerHTML='';
  if(ok!==null){score.total++;if(ok)score.ok++;
    fb.className='fb '+(ok?'good':'bad');fb.append(el('strong',null,ok?'Bonne réponse.':'Pas tout à fait.'));
    if(!ok&&correctText(ex))fb.append(el('p',null,'Réponse attendue : '+correctText(ex)));}
  else fb.className='fb';
  // Sans explication propre, la synthèse ne s'affiche qu'une fois par fiche et par séance (sinon elle se répète sous chaque exercice).
  const expl=ex.explanation||(!synthVue.has(ex.fiche.id)&&ex.fiche.synth);
  if(!ex.explanation)synthVue.add(ex.fiche.id);
  if(crit){const n=crit.reduce((a,x)=>a+x,0);fb.prepend(el('strong',null,`${n} critère${n>1?'s':''} sur 3.`));}
  if(expl)fb.append(el('p','fb-expl',expl));
  fb.append(el('p','fb-src',`Fiche : ${ex.fiche.titre}${ex.fiche.page?' — p. '+ex.fiche.page:''}`));
  const chk=ex.fiche.status!=='verified'&&ex.fiche.to_check||[];
  fb.insertAdjacentHTML('beforeend',(chk.length?`<details class="to-check"><summary>Points à vérifier (${chk.length})</summary><ul>${chk.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'')+selonHTML(ex.fiche)+schemaCorrection(ex.fiche)+coursHTML(ex.fiche.cours));
  const next=()=>{pos++;showExercise();window.scrollTo(0,0);};
  const btns=el('div','srs-btns');
  const entry=logAnswer(ex,ok);
  if(crit){ // auto-évaluation : le nombre de critères cochés donne la note (0-1 Difficile, 2 Correct, 3 Facile)
    const n=crit.reduce((a,x)=>a+x,0),q=n<2?'hard':n===2?'ok':'easy';
    rate(ex.id,q);entry.c=crit;entry.r=q;try{localStorage.setItem(JKEY,JSON.stringify(journal));}catch{}
    const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);setTimeout(()=>b.focus());return;}
  if(ex.retry){const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);setTimeout(()=>b.focus());return;} // seconde chance : déjà reprogrammé
  if(ok===false)queue.push({...ex,retry:true}); // revient une fois en fin de séance, après la correction
  const before=prog[ex.id];if(ok!==false)rate(ex.id,'ok'); // enregistré tout de suite ; le bouton choisi remplace ce « Correct » provisoire
  const add=(q,t,s)=>{const b=el('button','srs-btn srs-'+q,t);b.append(el('span','sub2',s));b.onclick=()=>{if(before)prog[ex.id]=before;else delete prog[ex.id];rate(ex.id,q);entry.r=q;try{localStorage.setItem(JKEY,JSON.stringify(journal));}catch{}next();};btns.append(b);};
  if(ok===false){rate(ex.id,'hard');const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);
    if(ex.type.startsWith('flashcard')){const o=el('button','btn','En fait, j’avais juste');o.onclick=()=>{if(before)prog[ex.id]=before;else delete prog[ex.id];rate(ex.id,'ok');entry.r='ok';try{localStorage.setItem(JKEY,JSON.stringify(journal));}catch{}next();};actions.append(o);} // correction par mots-clés : le doute profite à l'élève
    setTimeout(()=>b.focus());return;}
  if(ok===null)add('hard','Difficile','revoir demain');else add('hard','Au hasard','revoir demain'); // réussite par chance : pas une maîtrise
  add('ok','Correct','à intervalle');add('easy','Facile','espacer');
  actions.append(el('div','srs-lbl','Comment l\'as-tu retenue ?'),btns);
  fb.tabIndex=-1;fb.focus({preventScroll:true}); // le bouton « Voir la réponse » a disparu : le focus va à la correction
}
// Safari efface le stockage d'un site non visité depuis 7 jours : on rappelle la sauvegarde après 7 jours sans export.
const SAVED_KEY='mv_saved_at';
function majBandeau(){
  let t=0;try{t=+localStorage.getItem(SAVED_KEY)||0;}catch{}
  const depuis=t||(journal[0]&&journal[0].t)||now(); // jamais sauvegardé : on compte depuis la première réponse
  document.getElementById('saveBanner').hidden=!(mode==='revision'&&Object.keys(prog).length&&now()-depuis>7*DAY);
}
// Pendant la Session du jour, le badge compte ce qu'il reste dans la séance en cours (comme le « 1/9 » de l'en-tête) ; sinon, ce que planifierait une nouvelle séance.
function updateBadges(){document.getElementById('dueBadge').textContent=mode==='due'&&sessionTitle==='Session du jour'&&pos<queue.length?queue.length-pos-1:buildQueue(EXOS).length;}

updateBadges();render();importFromHash();
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  // Nouvelle version du site installée : recharger tout de suite (sauf pendant une séance d'exercices) au lieu d'attendre l'ouverture suivante.
  const avant=navigator.serviceWorker.controller;let fait=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(avant&&!fait&&mode!=='due'){fait=true;location.reload();}});
  navigator.serviceWorker.register('sw.js').then(r=>r.update()).catch(()=>{});
}
/* ============ SAUVEGARDE / RESTAURATION DE LA PROGRESSION ============ */
async function exportProg(){
  const nom='millevignes-progression-'+new Date().toISOString().slice(0,10)+'.json';
  const blob=new Blob([JSON.stringify({app:'millevignes',version:2,key:PKEY,saved_at:new Date().toISOString(),progress:prog,lues,journal,seances,programmes:store},null,2)],{type:'application/json'});
  // Sur iPhone, le menu de partage permet « Enregistrer dans Fichiers » (iCloud Drive) ; ailleurs, téléchargement.
  const file=new File([blob],nom,{type:'application/json'});
  if(navigator.canShare&&navigator.canShare({files:[file]})){
    try{await navigator.share({files:[file]});}
    catch(e){if(e.name==='AbortError')return; // partage annulé : rien n'est sauvegardé
      dl(blob,nom);}
  }else dl(blob,nom);
  try{localStorage.setItem(SAVED_KEY,String(now()));}catch{}majBandeau();
}
function dl(blob,nom){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=nom;a.click();URL.revokeObjectURL(a.href);}
document.querySelector('.zoom-x').onclick=fermerZoom;
const ptBtn=document.getElementById('pretestBtn');
const majPt=()=>ptBtn.textContent='Pré-test avant les nouvelles fiches : '+(pretestOn()?'activé':'désactivé');
ptBtn.onclick=()=>{try{localStorage.setItem(PTKEY,pretestOn()?'0':'1');}catch{}majPt();};majPt();
document.getElementById('suiviLink').onclick=()=>{setMode('suivi');window.scrollTo(0,0);};
document.getElementById('exportProg').onclick=document.getElementById('saveNow').onclick=exportProg;
document.getElementById('importBtn').onclick=()=>document.getElementById('importProg').click();
document.getElementById('importProg').onchange=async e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  let data;try{data=JSON.parse(await file.text());}catch{alert('Fichier illisible : ce n\'est pas un JSON valide.');return;}
  let p=data&&data.app==='millevignes'&&data.progress;
  const ok=p&&typeof p==='object'&&Object.values(p).every(v=>v&&typeof v.due==='number'&&typeof v.interval==='number'&&typeof v.ease==='number');
  if(!ok){alert('Ce fichier n\'est pas une sauvegarde de progression Mille Vignes.');return;}
  if(data.version!==2)p=fromV1(p); // sauvegarde de l'ancien site (par fiche)
  const n=Object.keys(p).length,cur=Object.keys(prog).length;
  if(!confirm(`Restaurer ${n} exercice(s) suivi(s), sauvegardés le ${(data.saved_at||'?').slice(0,10)} ?\nTa progression actuelle (${cur} exercice(s)) sera remplacée.`))return;
  prog=p;save();
  if(data.lues&&typeof data.lues==='object'){lues=data.lues;saveLues();}
  if(Array.isArray(data.seances)){seances=data.seances;saveSeances();}
  if(Array.isArray(data.journal)){journal=data.journal;try{localStorage.setItem(JKEY,JSON.stringify(journal));}catch{}}
  const ps=data.programmes&&data.programmes.progs; // sauvegardes récentes : les programmes de masterclass s'ajoutent à ceux du navigateur
  if(ps&&typeof ps==='object')for(const k in ps){const c=cleanProg(ps[k]);if(c)store.progs[k]=c;}
  saveProg();updateBadges();render();
};
document.getElementById('resetAll').onclick=()=>{if((prompt('Cela efface toute ta progression de mémorisation, sans retour possible. Pense d\'abord à la sauvegarder.\n\nPour confirmer, tape EFFACER :')||'').trim()==='EFFACER'){prog={};save();lues={};saveLues();updateBadges();render();}};

// Import du fichier privé de partenaires préparé par Claude (jamais publié dans le dépôt).
document.getElementById('partBtn').onclick=()=>document.getElementById('partFile').click();
document.getElementById('partFile').onchange=async e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  let data;try{data=JSON.parse(await file.text());}catch{alert('Fichier illisible : ce n\'est pas un JSON valide.');return;}
  const l=data&&data.app==='millevignes-partenaires'&&Array.isArray(data.partenaires)&&data.partenaires;
  const ok=l&&l.every(p=>p&&typeof p.nom==='string'&&p.nom.length<=120&&(!p.points||Object.values(p.points).every(v=>Array.isArray(v)&&v.length===2&&v.every(Number.isFinite))));
  if(!ok){alert('Ce fichier n\'est pas un fichier de partenaires Mille Vignes.');return;}
  if(!confirm(`Importer ${l.length} partenaire(s) ? Ils restent dans ce navigateur seulement et remplacent la liste actuelle (${partenaires.length}).`))return;
  partenaires=l;try{localStorage.setItem(PAKEY,JSON.stringify(l));}catch{alert('Impossible d\'enregistrer les partenaires dans ce navigateur.');}
  fitCache.clear();render();
};

/* ============ MOTS DU LEXIQUE DANS LES TEXTES ============ */
// Souligne la première occurrence de chaque terme du lexique dans les textes de lecture ; un toucher ouvre sa définition.
// Pas dans les énoncés d'exercice (la définition soufflerait la réponse), ni dans l'onglet Lexique lui-même.
const LEX_SEL='.synth,.mnemo,.fb-expl,.lede,.ess,.lead,.proj-synth,.cours p,.cours li,.cours td';
const LEX_FORMES=LEXIQUE.flatMap(t=>t.terme.replace(/\(.*?\)/g,'').split(/[\/,]/).map(s=>s.trim()).filter(Boolean).map(f=>[f,t])).sort((a,b)=>b[0].length-a[0].length);
const LEX_RE=new RegExp(`(?<!\\p{L})(${LEX_FORMES.map(([f])=>f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})(?:s|x)?(?!\\p{L})`,'giu');
const lexDe=m=>{const n=normalize(m);return (LEX_FORMES.find(([f])=>n===normalize(f)||n===normalize(f)+'s'||n===normalize(f)+'x')||[])[1];};
function lexMarquer(zone){
  if(!LEXIQUE.length||zone.closest?.('.lexique'))return;
  zone.querySelectorAll(LEX_SEL).forEach(bloc=>{
    if(bloc.dataset.lx||bloc.closest('.lexique'))return;bloc.dataset.lx=1;
    const vus=new Set(),w=document.createTreeWalker(bloc,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('a,button,summary,.lx,svg')?2:1}),noeuds=[];
    while(w.nextNode())noeuds.push(w.currentNode);
    noeuds.forEach(n=>{
      const txt=n.nodeValue,frag=document.createDocumentFragment();let i=0,touche=false;
      for(const m of txt.matchAll(LEX_RE)){const t=lexDe(m[0]);if(!t||vus.has(t))continue;vus.add(t);touche=true;
        frag.append(txt.slice(i,m.index));const s=el('span','lx',m[0]);s.tabIndex=0;s.setAttribute('role','button');s.dataset.terme=t.terme;frag.append(s);i=m.index+m[0].length;}
      if(touche){frag.append(txt.slice(i));n.replaceWith(frag);}
    });
  });
}
const lexPop=el('div','lex-pop');lexPop.hidden=true;lexPop.setAttribute('role','dialog');document.body.append(lexPop);
function lexOuvrir(terme){
  const t=LEXIQUE.find(x=>x.terme===terme);if(!t)return;lexPop.innerHTML='';
  const x=el('button','lex-x','×');x.setAttribute('aria-label','Fermer');x.onclick=()=>lexPop.hidden=true;
  lexPop.append(x,el('h4',null,t.terme),el('p',null,t.def));const ph=lexPhoto(t);if(ph)lexPop.append(ph);
  const m=el('div','mnemo');m.append(el('span','m-lbl','Déclic'),t.declic);lexPop.append(m);
  if(mode!=='due'){const b=el('button','btn','Voir au lexique');b.onclick=()=>{lexPop.hidden=true;lexQuery=t.terme;setMode('lexique');window.scrollTo(0,0);};lexPop.append(b);}
  lexPop.hidden=false;x.focus();
}
document.addEventListener('click',e=>{const s=e.target.closest('.lx');if(s){e.preventDefault();e.stopPropagation();lexOuvrir(s.dataset.terme);}else if(!lexPop.hidden&&!lexPop.contains(e.target))lexPop.hidden=true;},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')lexPop.hidden=true;else if(e.key==='Enter'&&e.target.classList?.contains('lx'))lexOuvrir(e.target.dataset.terme);});
['grid','support','proj'].forEach(id=>{const z=document.getElementById(id);if(!z)return;lexMarquer(z);new MutationObserver(()=>lexMarquer(z)).observe(z,{childList:true,subtree:true});});
