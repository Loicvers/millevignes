/* ============ DONNÉES ============ */
const EXOS=[...FICHES.flatMap(f=>[...toExercises(f),...schemaExercise(f,FICHES)]),...lexiqueExercises(LEXIQUE,FICHES)];
const EX_BY_ID=Object.fromEntries(EXOS.map(e=>[e.id,e]));
// Exercices de chaque fiche, rangés une fois (les chercher dans EXOS pour chaque fiche : des millions de comparaisons par écran). À refaire si EXOS change (majCave).
const EXOS_DE=new Map(),exosDe=f=>EXOS_DE.get(f)||[];
function indexerExos(){EXOS_DE.clear();for(const e of EXOS){if(!EXOS_DE.has(e.fiche))EXOS_DE.set(e.fiche,[]);EXOS_DE.get(e.fiche).push(e);}}
indexerExos();
const TYPE_LBL={flashcard:'Flashcard',flashcard_reverse:'Flashcard inversée',mcq_single:'QCM',mcq_multi:'QCM — plusieurs réponses',true_false:'Vrai ou faux',cloze:'Texte à trous',short_answer:'Réponse courte',matching:'Associer',ordering:'Remettre dans l\'ordre',odd_one_out:'Trouver l\'intrus',label_schema:'Légender le schéma',explain_client:'Explique à un client'};
const NIVEAUX=["Fondamental","Intermédiaire","Pointu"];
const SKEY='mv_session_max',TAILLES=[10,20,40];
let SESSION_MAX=(()=>{try{const n=+localStorage.getItem(SKEY);return TAILLES.includes(n)?n:20;}catch{return 20;}})();
const NEW_FICHES=5; // nouvelles fiches par jour, sans échéance
const ECHKEY='mv_echeance';let echeance='';try{echeance=localStorage.getItem(ECHKEY)||'';}catch{}
// Avec une échéance, le rythme monte pour tout voir à temps, et la séance s'allonge d'autant (les révisions passent d'abord).
const restantes=()=>{const vus=new Set(EXOS.filter(e=>prog[e.id]).map(e=>e.fiche));return FICHES.filter(f=>!vus.has(f)&&!lues[f.id]).length;};
const rythmeDuJour=()=>echeance?rythme(restantes(),now(),echeance,NEW_FICHES):NEW_FICHES;

/* ============ PERSISTANCE (localStorage) ============ */
// Progression par exercice (v2).
const PKEY="mv_progress_v2";
function load(){try{return JSON.parse(localStorage.getItem(PKEY))||{};}catch{return {};}}
let prog=load();
const LKEY='mv_lues';let lues={};try{lues=JSON.parse(localStorage.getItem(LKEY))||{};}catch{}
function saveLues(){put(LKEY,lues);}
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist();}catch{}
// prog[exId] = {ease, interval(jours), due(timestamp), acquired:bool}
// Journal des réponses (mesure du rappel différé) : {e: exercice, t: date, ok: 1|0|null, ms: durée, r: note choisie}.
const JKEY='mv_journal';let journal=[];try{journal=JSON.parse(localStorage.getItem(JKEY))||[];}catch{}
function logAnswer(ex,ok){const sc=seances[seances.length-1];if(sc&&!sc.fin){sc.r++;saveSeances();}const j={e:ex.id,t:now(),ok:ok==null?null:+ok,ms:now()-shownAt};if(ex.retry)j.retry=1;journal.push(j);journal=journal.slice(-5000);put(JKEY,journal);return j;}
// Séances : {t: début, n: exercices prévus, r: réponses données, fin: 1 si menée à terme} ; sert à compter les séances abandonnées.
const SEKEY='mv_seances';let seances=[];try{seances=JSON.parse(localStorage.getItem(SEKEY))||[];}catch{}
const EXKEY='mv_examens';let examens=[];try{examens=JSON.parse(localStorage.getItem(EXKEY))||[];}catch{}
function saveExamens(){examens=examens.slice(-100);put(EXKEY,examens);}
// Records des jeux (sprint, cartes à toucher, devine le vin) : {sprint:{ok,n,t}, vins:{pts,max,t}, cartes:{[lieu]:{ok,n,t}}}. Hors calendrier de révision.
const JXKEY='mv_jeux';let jeux={};try{jeux=JSON.parse(localStorage.getItem(JXKEY))||{};}catch{}
function saveJeux(){put(JXKEY,jeux);}
function saveSeances(){seances=seances.slice(-200);put(SEKEY,seances);}
// Un échec d'enregistrement (stockage plein, navigation privée) est signalé une fois par ouverture, quelle que soit la donnée.
let alerteStockage=false;
function put(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch{if(!alerteStockage){alerteStockage=true;alert('Impossible d\'enregistrer dans ce navigateur (stockage plein ou navigation privée). Pense à sauvegarder ta progression (Réglages).');}}}
function save(){put(PKEY,prog);}
function now(){return Date.now();}
const DAY=86400000;

/* ============ RÉPÉTITION ESPACÉE (type SM-2 simplifié) ============ */
function rate(id,quality){ // quality: 'hard'|'ok'|'easy'
  prog[id]=noterFiche(id,prog,quality,now());save();updateBadges(); // calendrier par fiche (exercices.js)
}
// Fiche à revoir : l'échéance de son dernier exercice répondu (un calendrier par fiche, voir planSession).
const ficheDue=f=>{let d=null;for(const e of exosDe(f))if(/^mv-/.test(e.id)&&prog[e.id]&&(!d||quand(prog[e.id])>quand(d)))d=prog[e.id];return !!d&&d.due<=now();};
const isNew=e=>!prog[e.id];
// Révisions dues mélangées, puis les nouveautés dans l'ordre du livre, groupées par fiche, flashcard en tête.
const ficheNeuve=f=>exosDe(f).every(isNew);
const aDecouvrir=f=>ficheNeuve(f)&&!lues[f.id]; // déjà lue (séance ou lecture de chapitre) : on passe directement aux exercices
function etat(f){ // où en est la fiche, pour le sommaire
  const mine=exosDe(f);
  if(ficheDue(f))return['due','À revoir'];
  if(mine.length&&mine.every(e=>prog[e.id]))return['done','Travaillée'];
  if(mine.some(e=>prog[e.id]))return['part','Commencée'];
  return lues[f.id]?['lue','Lue']:['new','À découvrir'];
}
// Règles de séance : voir planSession() dans exercices.js.
function buildQueue(pool){const n=rythmeDuJour();return planSession(pool,prog,lues,now(),{max:echeance?SESSION_MAX+2*n:SESSION_MAX,newFiches:n});}

/* ============ ÉTAT FILTRES ============ */
let mode="jour"; // accueil : Aujourd'hui
let activeThemes=new Set(),activeSubs=new Set(),activeGeo=null,activeNiv=new Set(),ficheQuery=[];

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
let attente;document.getElementById('ficheSearch').oninput=e=>{clearTimeout(attente);attente=setTimeout(()=>{ficheQuery=normalize(e.target.value).split(' ').filter(Boolean);render();},200);}; // rendu du sommaire ≈ 200 ms : on attend la fin de la frappe
document.getElementById('clearBtn').onclick=()=>{ficheQuery=[];document.getElementById('ficheSearch').value='';activeThemes.clear();activeSubs.clear();activeNiv.clear();activeGeo=null;document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));document.querySelectorAll('.geo-node').forEach(n=>n.classList.remove('on'));subPanel.classList.remove('show');render();};

/* ============ TABS ============ */
function marquerOnglet(m){m={lexique:'revision',cave:'revision',suivi:'jour'}[m]||m; // le lexique et ma cave vivent dans la Bibliothèque, le suivi dans Aujourd'hui
  document.querySelectorAll('.tab').forEach(x=>{const on=x.dataset.mode===m;x.classList.toggle('on',on);x.setAttribute('aria-selected',on);});}
function setMode(m){
  if(examen&&mode==='due'&&pos<queue.length&&!confirm(`Quitter ${examen.sprint?'le sprint':'l’examen blanc'} ? Les réponses données ne seront pas comptées.`))return; // un toucher sur les onglets effaçait l'examen sans prévenir
  examen=null;taire();mode=m;marquerOnglet(m);updateBadges();document.getElementById('filterBar').style.display=m==='due'||m==='jeu'||m==='jour'||m==='lexique'||m==='cave'||m==='suivi'||m==='cartes'?'none':'block';render();}
document.querySelectorAll('.tab').forEach(t=>{t.onclick=()=>{setMode(t.dataset.mode);};});

/* ============ BIBLIOTHÈQUE ============ */
const grid=document.getElementById('grid');
function matches(f){
  if(ficheQuery.length){const t=texteNorm(f);if(!ficheQuery.every(w=>t.includes(w)))return false;} // tous les mots, dans le titre, la synthèse ou l'astuce
  if(activeThemes.size&&!activeThemes.has(f.theme))return false;
  if(activeSubs.size){const fs=f.sous||[];if(![...activeSubs].some(s=>fs.includes(s)))return false;}
  if(activeNiv.size&&!activeNiv.has(f.niveau))return false;
  if(activeGeo){if(!f.geo)return false;if(activeGeo.appel)return f.geo.appel===activeGeo.appel;if(activeGeo.region)return f.geo.region===activeGeo.region;return f.geo.pays===activeGeo.pays;}
  return true;
}
function render(){
  majBandeau();
  if(mode==='due'||mode==='jeu')return;
  if(mode==='lexique')return renderLexique();
  if(mode==='cave')return renderCave();
  if(mode==='suivi')return renderSuivi();
  if(mode==='jour')return renderJour();
  if(mode==='cartes')return renderCartes();
  const nf=activeThemes.size+activeSubs.size+activeNiv.size+(activeGeo?1:0)+(ficheQuery.length?1:0);
  const noms=[...activeThemes,...activeSubs,...activeNiv,...(activeGeo?[activeGeo.appel||activeGeo.region||activeGeo.pays]:[]),...(ficheQuery.length?[`« ${ficheQuery.join(' ')} »`]:[])].join(' · '); // le filtre actif se lit sans ouvrir le panneau
  document.getElementById('filtSum').textContent=nf?`Filtrer : ${noms.length>42?noms.slice(0,41)+'…':noms}`:'Filtrer';
  const list=FICHES.filter(matches);
  document.getElementById('introLine').textContent= mode==='atelier'?'Compose ton programme : ajoute des fiches, note le vin servi et la durée, puis projette ou imprime le support.':'';
  renderProg();
  document.getElementById('shown').textContent=list.length;
  document.getElementById('acq').textContent=EXOS.filter(e=>prog[e.id]).length;
  const pool=list.flatMap(f=>exosDe(f));
  const sb=document.getElementById('sessionBtn');sb.textContent=`S'entraîner sur ces ${list.length} fiche(s)`;sb.disabled=!list.length;sb.hidden=!nf||mode==='atelier'; // le bouton global ne sert que sur une sélection : sinon, la Séance du jour fait le même travail
  sb.onclick=()=>startSession(buildQueue(pool).length?buildQueue(pool):shuffle(pool).slice(0,SESSION_MAX),'Session ciblée');
  // Points durs : voir pointsDurs() (exercices.js) ; deux réussites d'affilée les font sortir.
  const durs=pointsDurs(pool,prog,journal);
  const hb=document.getElementById('hardBtn');hb.hidden=!nf||!durs.length||mode==='atelier';hb.textContent=`Mes points durs (${durs.length})`;
  const xb=document.getElementById('examBtn');xb.hidden=!nf||mode==='atelier'; // sans filtre : comme sur Aujourd'hui ; Masterclass compose un programme, on n'y révise pas
  xb.textContent=nf?`Examen blanc sur ces fiches`:'Examen blanc';xb.disabled=!list.length;xb.onclick=()=>startExamen(pool);
  hb.onclick=()=>startSession(durs.slice(0,SESSION_MAX),'Mes points durs',[...new Set(durs.map(e=>e.fiche.id))]);
  grid.className='grid';grid.innerHTML='';
  if(!list.length){grid.innerHTML=`<div class="empty" style="grid-column:1/-1"><h3>Aucune fiche ne correspond</h3><p>Ajuste les filtres ou réinitialise.</p></div>`;return;}
  if(!CHAPS){list.forEach(f=>grid.appendChild(card(f)));return;} // plan du livre pas (encore) chargé : liste simple
  renderToc(list,nf>0);
}
/* ============ AUJOURD'HUI (accueil : ce qu'il y a à faire, réuni sur un écran) ============ */
function renderJour(){
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;
  grid.className='jour';grid.innerHTML='';
  const carte=(titre,...enfants)=>{const c=el('section','jour-carte');c.append(el('h3',null,titre),...enfants);grid.append(c);return c;};
  const bouton=(t,fn,cls='btn')=>{const b=el('button',cls,t);b.onclick=()=>{fn();window.scrollTo(0,0);};return b;};
  // Séance du jour ; durée estimée sur la médiane des dernières réponses (30 s sans historique)
  const q=buildQueue(EXOS),ms=journal.slice(-300).map(j=>j.ms).filter(x=>x>0&&x<300000).sort((a,b)=>a-b),med=ms.length>=20?ms[ms.length>>1]:30000;
  const min=Math.max(1,Math.round(q.length*med/60000));
  carte('Séance du jour',el('p','jour-chiffre',q.length?`${q.length} exercice${q.length>1?'s':''} · environ ${min} min`:'Rien à revoir pour le moment'),
    q.length?bouton('Commencer la séance',()=>startSession(buildQueue(EXOS),'Séance du jour'),'btn primary'):el('p','jour-note','Tout est planifié plus tard : lis un chapitre ou passe un examen blanc.'),
    el('p','jour-note',(s=>!s.n?'Chaque jour d’affilée avec une séance terminée compte dans ta série ; un jour manqué par semaine est pardonné.':
      `Série : ${plur(s.n,'jour')} · ${s.fait?'séance d’aujourd’hui faite.':s.gel?'hier manqué et pardonné : termine une séance aujourd’hui pour la garder.':'termine une séance aujourd’hui pour la garder.'}`)(serie(seances,examens,now()))));
  // Échéance
  const vues=FICHES.filter(f=>etat(f)[0]!=='new').length,bar=el('span','chap-bar');bar.append(el('i'));bar.firstChild.style.width=100*vues/FICHES.length+'%';
  if(echeance){const j=Math.round((new Date(echeance+'T12:00')-new Date(new Date().toDateString()+' 12:00'))/DAY); // jours de calendrier
    carte('Échéance',el('p','jour-chiffre',`${new Date(echeance+'T12:00').toLocaleDateString('fr-FR',{day:'numeric',month:'long'})} · ${j>0?'J-'+j:j===0?'c’est aujourd’hui':'dépassée'}`),bar,el('p','jour-note',`${vues} fiches vues sur ${FICHES.length} · ${restantes()} à découvrir, ${rythmeDuJour()} nouvelles par jour.`));}
  else carte('Échéance',...(vues?[bar]:[]),el('p','jour-note',`${vues} fiches vues sur ${FICHES.length}. Fixe une date dans les Réglages : le rythme se calcule pour tout voir à temps.`),bouton('Ouvrir les réglages',()=>document.getElementById('reglagesBtn').click()));
  // Reprendre la lecture (première fiche pas encore vue, dans l'ordre du sommaire)
  const suite=CHAPS&&CHAPS.flatMap(c=>c.fiches.map((f,i)=>({c,f,i}))).find(x=>etat(x.f)[0]==='new');
  if(suite)carte('Reprendre la lecture',el('p','jour-note',`${suite.c.chapitre}, fiche ${suite.i+1} sur ${suite.c.fiches.length}`),el('b',null,suite.f.titre),el('br'),bouton('Continuer',()=>lireChapitre(suite.c.chapitre,suite.c.fiches,suite.i)));
  // S'évaluer : examen blanc et points durs
  const der=examens[examens.length-1],durs=pointsDurs(EXOS,prog,journal),ev=carte('S’évaluer');
  ev.append(el('p','jour-note',der?`Dernier examen blanc : ${Math.round(100*der.ok/der.n)} % (${new Date(der.t).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}).`:'Pas encore d’examen blanc : 40 questions mélangées, sans aide, une minute chacune.'),
    bouton('Examen blanc',()=>startExamen(EXOS)),' ',durs.length?bouton(`Mes points durs (${durs.length})`,()=>startSession(durs.slice(0,SESSION_MAX),'Mes points durs',[...new Set(durs.map(e=>e.fiche.id))])):'',' ',bouton('Sprint 3 min',()=>startSprint()),
    el('p','jour-note',jeux.sprint?`Sprint : questions rapides sur tes fiches vues, hors révision. Record : ${jeux.sprint.ok} bonnes réponses.`:'Sprint : trois minutes de questions rapides sur tes fiches vues, hors révision.'));
  // Suivi en bref
  const r=suivi(journal,id=>EX_BY_ID[id]&&EX_BY_ID[id].type,prog,now()),pc=c=>c[1]>=5?Math.round(100*c[0]/c[1])+' %':'—';
  carte('Mon suivi',el('p','jour-note',!journal.length?'Fais ta première séance : tes taux de réussite apparaîtront ici.':`Réussite immédiate ${pc(r.immediate)} · rappel sans aide ${pc(r.libre)} · ${r.retard.n} révision${r.retard.n>1?'s':''} en retard.`),bouton('Voir le détail',()=>setMode('suivi')));
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
  if(jeux.sprint)rows.push(['Record au sprint',`${jeux.sprint.ok}`,`bonnes réponses sur ${jeux.sprint.n} en 3 minutes, le ${new Date(jeux.sprint.t).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}.`]);
  if(jeux.vins)rows.push(['Record à « Devine le vin »',`${jeux.vins.pts}`,`points sur ${jeux.vins.max}.`]);
  const cj=Object.entries(jeux.cartes||{});if(cj.length)rows.push(['Cartes à toucher',`${cj.length}`,cj.map(([l,c])=>`${l} ${c.ok}/${c.n}`).join(' · ')+'.']);
  rows.forEach(([l,v,d])=>{const c=el('div','suivi-row');c.append(el('div','suivi-l',l),el('div','suivi-v',v),el('p','suivi-d',d));grid.append(c);});
  grid.append(el('h2','suivi-t','Examens blancs'));
  if(!examens.length)grid.append(el('p','suivi-note','Pas encore d\'examen blanc : lance-le depuis l\'onglet Aujourd’hui ou une page de l\'Atlas.'));
  examens.slice(-10).reverse().forEach(x=>{const faible=Object.entries(x.th||{}).filter(([,[,m]])=>m>=3).sort((a,b)=>a[1][0]/a[1][1]-b[1][0]/b[1][1])[0]; // thème le plus faible, sur 3 questions au moins
    const c=el('div','suivi-row');c.append(el('div','suivi-l',new Date(x.t).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})),el('div','suivi-v',Math.round(100*x.ok/x.n)+' %'),el('p','suivi-d',`${x.ok} sur ${x.n}`+(faible?` — plus faible : ${faible[0]} (${faible[1][0]}/${faible[1][1]})`:'')));grid.append(c);});
}
/* ============ CARTES (toutes les cartes de régions, pour situer un domaine devant un client) ============ */
let carteQuery='';
// cartes de l'atlas : cartes de région ou de pays (avec titre) et schémas ; pas les cartes de situation des appellations et cépages (data-proj sans titre)
const CARTES=FICHES.filter(f=>f.source==='france'&&/viewBox="/.test(f.schema?.svg??'')&&(f.schema.titre||!f.schema.svg.includes('data-proj'))).sort((a,b)=>!a.geo?.region?-1:!b.geo?.region?1:a.geo.region.localeCompare(b.geo.region,'fr')||a.id-b.id);
/* ============ ATLAS (une page par région ou pays : cartes, puis toutes ses fiches) ============ */
const LIEUX=lieux(FICHES,typeof FRANCE_SOMMAIRE!=='undefined'?FRANCE_SOMMAIRE:[]);
let lieu=(()=>{try{return localStorage.getItem('mv_lieu')||'';}catch{return '';}})();
const allerLieu=nom=>{lieu=nom;try{nom?localStorage.setItem('mv_lieu',nom):localStorage.removeItem('mv_lieu');}catch{}render();window.scrollTo(0,0);};
const barre=(v,n,m=0)=>{const b=el('span','chap-bar');b.setAttribute('aria-hidden','true');b.append(el('i'),el('i','m'));b.firstChild.style.width=(n?100*v/n:0)+'%';b.lastChild.style.width=(n?100*m/n:0)+'%';return b;}; // vues en clair, maîtrisées (travaillées, rien à revoir) par-dessus
const maitrise=fs=>fs.filter(f=>etat(f)[0]==='done').length,etatLieu=(n,v,m)=>`${plur(n,'fiche')} · ${plur(v,'vue')}${m?` · ${m} maîtrisée${m>1?'s':''}`:''}`;
const carteHTML=(f,hl)=>`<figure class="schema" tabindex="0" role="button" aria-label="Agrandir la carte">${fitSvg(avecPartenaires(f,f.schema.svg,hl))}<figcaption>${f.schema.legende} — ${f.schema.src}</figcaption></figure>`;
const carteDe=(f,l)=>l.france?f.geo?.pays==='France'&&(l.nom==='France'?!f.geo.region:f.geo.region===l.nom):f.geo?.pays===l.nom;
const nomLieu=x=>x.nom==='France'?'Thèmes généraux sur la France':x.nom;
const plur=(n,m)=>`${n} ${m}${n>1?'s':''}`;
// Tuile d’un lieu (accueil et recherche de l’atlas) ; « sans carte » sur les rares lieux qui n’en ont pas
function tuile(x){const vue=f=>etat(f)[0]!=='new',v=x.fiches.filter(vue).length,m=maitrise(x.fiches),b=el('button','lieu'),h=el('span','lieu-h');
  h.append(el('span','lieu-n',x.nom));if(!CARTES.some(f=>carteDe(f,x)))h.append(el('span','lieu-c','sans carte'));
  if(m===x.fiches.length)b.classList.add('maitrise'),h.append(el('span','lieu-c','maîtrisé')); // toutes les fiches travaillées, rien à revoir
  b.append(h,el('span','chap-m',etatLieu(x.fiches.length,v,m)),barre(v,x.fiches.length,m));b.onclick=()=>allerLieu(x.nom);return b;}
function renderLieu(l){
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;
  grid.className='grid toc';grid.innerHTML='';
  const vue=f=>etat(f)[0]!=='new',v=l.fiches.filter(vue).length,tete=el('div','lieu-tete');
  const ret=el('button','lien','← Atlas');ret.onclick=()=>allerLieu('');
  // fiches en trois groupes : vignoble (France ou monde), cépages, puis livre
  const rang=c=>/France viticole|monde viticole/.test(c.partie)?0:c.partie==='Les cépages'?1:2;
  const groupe=c=>[l.france?'Appellations':'Vignoble','Cépages','Dans le livre'][rang(c)];
  const chaps=(CHAPS||[]).filter(c=>c.fiches.some(f=>l.fiches.includes(f))).sort((a,b)=>rang(a)-rang(b));
  const ordre=chaps.flatMap(c=>c.fiches.filter(f=>l.fiches.includes(f))),pool=l.fiches.flatMap(f=>exosDe(f));
  tete.append(ret,el('h2','lieu-t',nomLieu(l)));
  const cs=CARTES.filter(f=>carteDe(f,l)); // la première carte en vue, les autres repliées
  if(cs.length){tete.append(el('p','lieu-k','La carte'));const w=el('div','lieu-carte');
    w.insertAdjacentHTML('beforeend',carteHTML(cs[0],null)+partenairesHTML(cs[0]));
    if(cs.length>1)w.insertAdjacentHTML('beforeend',`<details class="cours"><summary>Autres cartes (${cs.length-1})</summary>${cs.slice(1).map(f=>carteHTML(f,null)).join('')}</details>`);
    tete.append(w);}
  const rev=el('div','lieu-rev'),act=el('div','chap-act'),bt=(t,fn,cls='btn')=>{const b=el('button',cls,t);b.onclick=fn;act.append(b);};
  bt('S’entraîner',()=>startSession(buildQueue(pool).length?buildQueue(pool):shuffle(pool).slice(0,SESSION_MAX),l.nom),'btn primary');
  bt('Examen blanc',()=>startExamen(pool));bt('Tout lire',()=>lireChapitre(l.nom,ordre));
  if(cartesJeu(l).length)bt('Cartes à toucher',()=>jouerCartes(l));bt('Sprint 3 min',()=>startSprint(pool));
  const m=maitrise(l.fiches);rev.append(el('p','jour-note',etatLieu(l.fiches.length,v,m)),barre(v,l.fiches.length,m),act);
  tete.append(el('p','lieu-k','Réviser'),rev,el('p','lieu-k','Les fiches'));
  grid.append(tete);
  renderToc(l.fiches,true,{chaps,groupe,ouvrir:nom=>nom===groupe(chaps[0])});
  const i=LIEUX.indexOf(l),pied=el('div','lieu-pied'),aller=(x,t)=>{if(!x)return el('span');const b=el('button','lien',t);b.onclick=()=>allerLieu(x.nom);return b;};
  pied.append(aller(LIEUX[i-1],'← '+(LIEUX[i-1]&&nomLieu(LIEUX[i-1]))),aller(LIEUX[i+1],(LIEUX[i+1]&&nomLieu(LIEUX[i+1]))+' →'));grid.append(pied);
}
function renderCartes(){
  const l=lieu&&LIEUX.find(x=>x.nom===lieu);if(l)return renderLieu(l);
  document.getElementById('introLine').textContent=partenaires.length?'Choisis une région ou un pays, ou cherche un domaine, une commune, une appellation : la carte s’affiche avec le domaine en évidence.':'Choisis une région ou un pays : sa carte, ses appellations, ses cépages et ce qu’en dit le livre. Importe tes partenaires (Réglages) pour les voir sur les cartes.';
  document.getElementById('progPanel').hidden=true;
  grid.className='lexique';grid.innerHTML='';
  const q=el('input','ex-input');q.type='search';q.placeholder=partenaires.length?'Domaine, commune, appellation, région ou pays':'Région, pays ou appellation';q.setAttribute('aria-label','Chercher dans l’atlas');q.value=carteQuery;
  const list=el('div');
  const draw=()=>{list.innerHTML='';const n=normalize(carteQuery);
    if(!n){ // sans recherche : les lieux en tuiles ; les pays à moins de 4 fiches en pastilles
      list.className='lieux-acc';const fr=LIEUX.filter(x=>x.france),gen=fr.find(x=>x.nom==='France'),mo=LIEUX.filter(x=>!x.france);
      const tuiles=ls=>{const g=el('div','lieux');ls.forEach(x=>g.append(tuile(x)));return g;};
      const tf=el('div','lieux-tt');tf.append(el('h2','lieux-t','France'));
      list.append(tf,tuiles(fr.filter(x=>x!==gen)));
      if(gen){const b=el('button','lieu lieu-gen');b.append(el('span','lieu-n',nomLieu(gen)),el('span','chap-m',String(gen.fiches.length)));b.onclick=()=>allerLieu(gen.nom);list.append(b);}
      list.append(el('h2','lieux-t','Monde'),tuiles(mo.filter(x=>x.fiches.length>=4)));
      const pt=mo.filter(x=>x.fiches.length<4);
      if(pt.length){list.append(el('p','lieu-k','Autres pays'));const w=el('div','parties');pt.forEach(x=>{const b=el('button','partie',x.nom);b.append(el('small',null,' '+x.fiches.length));b.onclick=()=>allerLieu(x.nom);w.append(b);});list.append(w);}
      return;}
    list.className='';
    const ls=LIEUX.filter(x=>normalize(nomLieu(x)).includes(n));if(ls.length){const g=el('div','lieux');ls.forEach(x=>g.append(tuile(x)));list.append(g);}
    const hits=partenaires.filter(p=>normalize([p.nom,p.commune,p.region,...(p.appellations||[])].join(' ')).includes(n));
    const hl=new Set(hits.map(p=>p.nom));
    const vues=hits.length?CARTES.filter(f=>hits.some(p=>p.points&&p.points[f.id])):CARTES.filter(f=>normalize([f.geo?.region,f.titre,f.schema.legende].join(' ')).includes(n));
    vues.forEach(f=>{const d=el('div','card lex');
      d.append(el('h3',null,f.schema.titre||f.geo?.region||'France'),el('p','src',f.schema.titre?(f.geo?.region||'France'):f.titre));
      d.insertAdjacentHTML('beforeend',carteHTML(f,hl)+(hits.length?'':partenairesHTML(f)));
      const b=el('button','chip','Lire la fiche');b.onclick=()=>lireChapitre(f.titre,[f]);d.append(b);const r=f.geo?.region&&LIEUX.find(x=>x.nom===f.geo.region);if(r){const g=el('button','chip','Page '+r.nom);g.onclick=()=>allerLieu(r.nom);d.append(' ',g);}list.append(d);});
    if(hits.length)list.prepend(el('p','suivi-note',hits.map(p=>p.nom+(p.commune?' ('+p.commune+')':'')+(p.appellations?.length?' — '+p.appellations.join(', '):'')).join(' ; ')));
    if(!vues.length&&!ls.length)list.append(el('p','empty','Aucune région ni carte ne correspond.'));};
  q.oninput=()=>{carteQuery=q.value;draw();};
  grid.append(q,list);draw();
}
/* ============ LEXIQUE ============ */
// Photo libre de droits (Wikimedia Commons), avec crédit et licence obligatoires.
// shortcut: image chargée depuis Commons, donc absente hors ligne ; la copier dans le dépôt si l'usage hors ligne compte.
function lexPhoto(t){
  if(!t.photo)return null;const p=t.photo,f=el('figure','lex-ph'),i=el('img');
  // Hors Commons (p.url) : image d'une autre banque, avec sa page et son nom de source pour le crédit.
  i.src=p.url||'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(p.fichier)+'?width=640';i.alt=p.legende;i.loading='lazy';
  const c=el('figcaption',null,p.legende+' '),a=el('a',null,`Photo : ${p.auteur}, ${p.licence}, ${p.source||'Wikimedia Commons'}`);
  a.href=p.page||'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(p.fichier);a.target='_blank';a.rel='noopener';
  c.append(a);f.append(i,c);return f;}

let lexQuery='';
function renderLexique(){
  document.getElementById('introLine').textContent='Les mots du métier, avec leur origine : retenir le sens d’un mot, c’est souvent retenir son étymologie.';
  document.getElementById('progPanel').hidden=true;
  grid.className='lexique';grid.innerHTML='';
  if(CHAPS)grid.append(navParties());
  const q=el('input','ex-input');q.type='search';q.placeholder='Chercher un terme';q.setAttribute('aria-label','Chercher un terme');q.value=lexQuery;
  const list=el('div');
  const draw=()=>{list.innerHTML='';const n=normalize(lexQuery);
    [...LEXIQUE].sort((a,b)=>a.terme.localeCompare(b.terme,'fr')).filter(t=>!n||normalize(t.terme+' '+t.def).includes(n)).forEach(t=>{
      const d=el('div','card lex');
      d.append(el('h3',null,t.terme),el('p','synth',t.def));const ph=lexPhoto(t);if(ph)d.append(ph);
      if(t.etym){const e=el('p','lex-etym');e.append(el('b',null,'Étymologie : '),t.etym);d.append(e);}
      const m=el('div','mnemo');m.append(el('span','m-lbl','Déclic'),t.declic);d.append(m);
      const st=el('p','src',(t.status==='verified'?'✓ vérifiée':'⚠ à vérifier'+(t.note?' — '+t.note:''))+' · '+t.src.join(' ; '));d.append(st);
      const fs=fichesDuTerme(t,FICHES);
      if(fs.length){const w=el('div','lex-f');fs.forEach(f=>{const b=el('button','chip',f.titre);b.onclick=()=>lireChapitre('Lexique : '+t.terme,[f]);w.append(b);});d.append(w);}
      list.append(d);});
    if(!list.children.length)list.append(el('p','empty',LEXIQUE.length?'Aucun terme ne correspond.':'Lexique en préparation.'));};
  q.oninput=()=>{lexQuery=q.value;draw();};
  grid.append(q,list);draw();
}
/* ============ MA CAVE (vins du fichier privé de partenaires) ============ */
let caveQuery='';
const CAVE_CHAMPS=[['Cépages',v=>(v.cepages||[]).map(c=>c.nom+(c.pct?` ${c.pct} %`:'')).join(', ')],['Sol',v=>v.sol],['Vignes',v=>[v.vignes,v.rendement].filter(Boolean).join(' ; ')],
  ['Culture',v=>v.culture],['Vendange',v=>v.vendange],['Vinification',v=>v.vinification],['Élevage',v=>v.elevage],['Analyse',v=>[v.alcool,v.sucres].filter(Boolean).join(' · ')],
  ['Dégustation',v=>v.degustation],['Service',v=>[v.service,v.garde&&'garde '+v.garde].filter(Boolean).join(' · ')],['Accords',v=>v.accords]];
function carteVin(v,byId,ouvert){
  const d=el('details','card lex vin');d.open=ouvert;
  const s=el('summary');s.append(el('b',null,v.cuvee),el('span','vin-sub',' '+[v.appellation,v.couleur,v.millesime_fiche&&'fiche '+v.millesime_fiche].filter(Boolean).join(' · ')));d.append(s);
  // Valeur en .synth (termes du lexique soulignés), libellé hors .synth : « Élevage » ne doit pas se souligner sur chaque vin.
  CAVE_CHAMPS.forEach(([k,f])=>{const t=f(v);if(t){const p=el('p','vin-l');p.append(el('b',null,k+' : '),el('span','synth',String(t)));d.append(p);}});
  if(v.incertitudes)d.append(el('p','vin-warn','⚠ '+v.incertitudes));
  if(v.a_dire?.length){const m=el('div','mnemo'),ul=el('ul');m.append(el('span','m-lbl','À dire au client'),ul);v.a_dire.forEach(x=>ul.append(el('li',null,String(x))));d.append(m);}
  if(v.questions?.length){const q=el('details','vin-q');q.append(el('summary',null,`Questions (${v.questions.length})`));v.questions.forEach(x=>{const p=el('p');p.append(el('b',null,x.q+' '),String(x.r));q.append(p);});d.append(q);}
  const fs=[...(byId[SOL_VERRE]&&solsDe(v).length?[byId[SOL_VERRE]]:[]),...Object.keys(v.liens||{}).map(id=>byId[id]).filter(Boolean)]; // vin dont le sol est connu : d'abord la synthèse sol → vin
  if(fs.length){const w=el('div','lex-f');fs.forEach(f=>{const b=el('button','chip',f.titre);b.onclick=()=>lireChapitre(v.cuvee,[f]);w.append(b);});d.append(w);}
  const srcs=(v.sources||[]).filter(x=>x&&typeof x.url==='string'&&x.url);
  srcs.forEach(x=>{const p=el('p','src'),t=(x.type||'source')+' · '+x.url.replace(/^https?:\/\/(www\.)?/,'').slice(0,70);
    if(/^https?:\/\//.test(x.url)){const a=el('a',null,t);a.href=x.url;a.target='_blank';a.rel='noopener';p.append(a);}else p.textContent=t; // fichier importé : lien seulement en http(s) ; sinon (tarif, photo) en texte
    d.append(p);});
  if(!srcs.length)d.append(el('p','src','Aucune source : fiche à demander au domaine.'));
  return d;
}
function renderCave(){
  document.getElementById('introLine').textContent='Tes vins, d’après les fiches techniques des domaines : l’essentiel, quoi dire au client, et les fiches qu’ils illustrent.';
  document.getElementById('progPanel').hidden=true;
  grid.className='cave';grid.innerHTML='';
  if(CHAPS)grid.append(navParties());
  const q=el('input','ex-input');q.type='search';q.placeholder='Chercher un domaine, une cuvée, un cépage';q.setAttribute('aria-label','Chercher dans ma cave');q.value=caveQuery;
  const list=el('div'),byId=Object.fromEntries(FICHES.map(f=>[f.id,f]));
  const draw=()=>{list.innerHTML='';const n=normalize(caveQuery);
    const vins=vinsDe().filter(v=>!n||normalize([v.dom,v.reg,v.cuvee,v.appellation,v.couleur,...(v.cepages||[]).map(c=>c.nom)].join(' ')).includes(n));
    const parDom={};vins.forEach(v=>(parDom[v.dom]??=[]).push(v));
    Object.entries(parDom).forEach(([dom,l])=>{const h=el('h3','cave-dom',dom);h.append(el('small',null,' · '+(l[0].reg||'')));list.append(h);l.forEach(v=>list.append(carteVin(v,byId,!!n&&vins.length<=3)));});
    if(!list.children.length)list.append(el('p','empty',vinsDe().length?'Aucun vin ne correspond.':'Importe ton fichier de partenaires (Réglages) pour voir tes vins.'));};
  q.oninput=()=>{caveQuery=q.value;draw();};
  grid.append(q);
  if(vinsJouables().length>=4){const j=el('button','btn','Devine le vin');j.onclick=()=>{jouerVins();window.scrollTo(0,0);};grid.append(el('p','cave-jeu',jeux.vins?`Record : ${jeux.vins.pts} points sur ${jeux.vins.max}. `:'Retrouve une cuvée à partir d’indices : moins tu en lis, plus tu marques. '),j);}
  grid.append(list);draw();
}
// « Dans ma cave » d'une fiche : le nom du vin ouvre sa fiche dans Ma cave.
document.addEventListener('click',e=>{const b=e.target.closest('.vers-cave');if(b){caveQuery=b.dataset.cuvee;setMode('cave');window.scrollTo(0,0);}});
let CHAPS=null;const chapOuverts=new Set();let secOuverts=null; // sections dépliées (au départ : celle où l'on en est)
const TOUTES=['Le livre','La France viticole','Les cépages','Le monde viticole'],partieDe=c=>TOUTES.includes(c.partie)?c.partie:'Le livre';
const partiesDuMode=()=>mode==='atelier'?TOUTES:['Le livre','Les cépages']; // France et monde : onglet Atlas (Masterclass garde tout pour composer ses programmes)
let partie=(()=>{try{return localStorage.getItem('mv_partie')||'Le livre';}catch{return 'Le livre';}})();
const recaler=d=>{if(d.getBoundingClientRect().top<0)d.scrollIntoView({block:'start'});}; // replié depuis son titre collé : on revient sur ce titre
function navParties(){
  const nav=el('div','parties'),lex=mode==='lexique'||mode==='cave';nav.setAttribute('role','group');nav.setAttribute('aria-label','Partie de la bibliothèque');
  const btn=(p,n,on,fn)=>{const b=el('button','partie'+(on?' on':''),p.replace(/^(Le |La |Les )/,'').replace(/^./,x=>x.toUpperCase()));b.append(el('small',null,' '+n));b.setAttribute('aria-pressed',on);b.onclick=fn;nav.append(b);};
  partiesDuMode().forEach(p=>btn(p,CHAPS.filter(c=>partieDe(c)===p).reduce((s,c)=>s+c.fiches.length,0),!lex&&p===partie,()=>{partie=p;try{localStorage.setItem('mv_partie',p);}catch{}secOuverts=null;lex?setMode('revision'):render();}));
  if(mode!=='atelier')btn('Lexique',LEXIQUE.length,mode==='lexique',()=>setMode('lexique'));
  if(mode!=='atelier'&&vinsDe().length)btn('Ma cave',vinsDe().length,mode==='cave',()=>setMode('cave'));
  return nav;
}
function renderToc(list,filtre,{chaps:ordre=null,ouvrir=filtre,groupe=null}={}){ // groupe : chapitre → nom de bloc (page de région), comptes limités à list
  grid.className='grid toc';
  const vue=f=>etat(f)[0]!=='new';
  // Une partie à la fois (livre, France, cépages, monde) ; une recherche ou un filtre montre tout.
  if(!partiesDuMode().includes(partie))partie='Le livre';
  const chaps=ordre||(filtre?CHAPS:CHAPS.filter(c=>partieDe(c)===partie));
  if(!filtre&&!ordre)grid.append(navParties());
  // Reprendre : première fiche pas encore vue, dans l'ordre du sommaire
  const suite=chaps.flatMap(c=>c.fiches.map((f,i)=>({c,f,i}))).find(x=>!vue(x.f));
  if(!filtre&&!ordre&&suite&&mode!=='atelier'){
    const r=el('div','resume');
    r.append(el('p',null,`Reprendre — ${suite.c.chapitre}, fiche ${suite.i+1} sur ${suite.c.fiches.length}`),el('b',null,suite.f.titre));
    const b=el('button','btn primary','Continuer la lecture');b.onclick=()=>lireChapitre(suite.c.chapitre,suite.c.fiches,suite.i);r.append(b);grid.append(r);
  }
  let sec=null,box=grid;
  chaps.forEach(c=>{
    const fs=c.fiches.filter(f=>list.includes(f));if(!fs.length&&(c.fiches.length||filtre))return;
    const nom=groupe?groupe(c):c.section||c.partie;
    if(nom!==sec){sec=nom;const all=groupe?chaps.filter(x=>groupe(x)===nom).flatMap(x=>x.fiches).filter(f=>list.includes(f)):CHAPS.filter(x=>(x.section||x.partie)===nom).flatMap(x=>x.fiches);
      if(!secOuverts)secOuverts=new Set([suite?(suite.c.section||suite.c.partie):nom]);
      const sd=el('details','sec');sd.open=ordre?(typeof ouvrir==='function'?ouvrir(nom):ouvrir):!!filtre||secOuverts.has(nom);sd.ontoggle=()=>{if(sd.open)secOuverts.add(nom);else{secOuverts.delete(nom);recaler(sd);}};
      const h=el('summary','toc-sec');const nv=all.filter(vue).length;h.append(el('span','sec-t',nom),el('small',null,groupe?`${all.length} fiche${all.length>1?'s':''} · ${nv} vue${nv>1?'s':''}`:`${nv} sur ${all.length} fiches vues`));
      const sp=all.filter(f=>list.includes(f)).flatMap(f=>exosDe(f)),st=el('button','btn','S\'entraîner sur cette section');st.disabled=!sp.length;
      st.onclick=()=>startSession(buildQueue(sp).length?buildQueue(sp):shuffle(sp).slice(0,SESSION_MAX),'Section : '+nom);
      const sa=el('div','chap-act sec-act');sa.append(st);sd.append(h);if(!groupe&&mode!=='atelier')sd.append(sa);grid.append(sd);box=sd;}
    const d=el('details','chap');d.open=ordre?false:filtre||chapOuverts.has(c.chapitre);d.ontoggle=()=>{if(d.open){chapOuverts.add(c.chapitre);remplir();}else{chapOuverts.delete(c.chapitre);recaler(d);}};
    const sm=el('summary'),nv=fs.filter(vue).length;
    sm.append(el('span','chap-t',c.chapitre),el('span','chap-m',(c.page?`p. ${c.page} · `:'')+(fs.length?`${nv}/${fs.length}`:'récit seul')));
    const bar=el('span','chap-bar');bar.setAttribute('aria-hidden','true');bar.append(el('i'));bar.firstChild.style.width=(fs.length?100*nv/fs.length:0)+'%';sm.append(bar);
    const inn=el('div','chap-in'),act=el('div','chap-act'),pool=fs.flatMap(f=>exosDe(f));
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
  // Colonnes égales (style.css) ; à 4 colonnes et plus, trop étroites sur un téléphone : le tableau défile de côté.
  const tab=t=>{if(!t)return '';const large=t.head.length>3;const h=`<table${large?` style="min-width:${t.head.length*100}px"`:''}>${t.caption?`<caption>${t.caption}</caption>`:''}<tr>${t.head.map(h=>`<th>${h}</th>`).join('')}</tr>${t.rows.map(r=>`<tr class="imp-${r.imp}">${r.cells.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table>`;
    return large?`<div class="tab-defil" role="region" tabindex="0" aria-label="${escH(t.caption||'Tableau')}, défile de côté">${h}</div>`:h;};
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
// Mes vins (champ vins des partenaires) : encadré « Dans ma cave » des fiches et QCM « quelle bouteille illustre… », retirés puis recalculés à chaque import.
const vinsDe=()=>partenaires.flatMap(p=>(p.vins||[]).map(v=>({...v,dom:p.nom,reg:p.region})));
function majCave(){for(let i=EXOS.length-1;i>=0;i--)if(EXOS[i].id.startsWith('cv-')){delete EX_BY_ID[EXOS[i].id];EXOS.splice(i,1);}for(const e of [...caveExercises(vinsDe(),FICHES),...caveQuestions(vinsDe(),FICHES)]){EXOS.push(e);EX_BY_ID[e.id]=e;}indexerExos();}
try{majCave();}catch(e){console.error(e);} // un fichier privé mal formé ne doit pas bloquer le site
// Synthèses écrites d'un bloc (médiane 800 signes) : un paragraphe tous les 250 signes environ, en fin de phrase (retours de l'iPhone, 02/11).
// Fin de phrase : mot d'au moins 3 lettres, chiffre, ) ou » avant le point ; majuscule ou « après (pas « J. Robinson », « V. vinifera »).
const FIN_PHRASE=/(?<=(?:\p{L}{3}|\d|[)»])[.!?]) (?=[\p{Lu}«])/u;
const paras=s=>{const ph=String(s).split(FIN_PHRASE);let h=ph[0],n=ph[0].length,reste=String(s).length-n;
  for(const x of ph.slice(1)){const coupe=n>=250&&reste>=150;h+=(coupe?' <span class="br"></span>':' ')+x;n=coupe?x.length:n+x.length+1;reste-=x.length+1;}return h;};
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
// Une appellation du partenaire relève de la fiche si elle commence par son nom (« Saint-Émilion grand cru » → Saint-Émilion, « Mâcon-Péronne » → Mâcon ; « Haut-Médoc » ≠ Médoc, « Graves de Vayres » ≠ Graves).
const memeAppel=(a,appel)=>{const x=normalize(a),y=normalize(appel);return x===y||(x.startsWith(y+' ')&&!/^(de|du|des|d) /.test(x.slice(y.length+1)));};
// Fiche d'appellation : mes domaines de cette appellation ; fiche de région : ses partenaires ; carte sans région (France) : tous ceux qui y ont un point, car la carte ne porte pas les noms.
// Fiche « Du sol au verre » : mes vins rangés par sol (champ sols du fichier privé ; à défaut, fiches de roches liées),
// et pour chaque sol absent de ma cave, où le goûter (exemples du tableau de la fiche 969).
const SOL_VERRE=969,SOL_LIGNES=[
  ['calcaire','Calcaire, marne',[170,213],'Chablis, Côte-d’Or, plateau de Saint-Émilion'],
  ['craie','Craie, tuffeau',[169],'Côte des Blancs, Saumur, Chinon, Vouvray, sud de l’Angleterre'],
  ['argile','Argile',[],'Pomerol, Saint-Émilion côté Pomerol'],
  ['sable','Sable',[],'Colares, sables de Camargue, safres de Châteauneuf-du-Pape'],
  ['graves','Graves, galets',[171],'Médoc, Pessac-Léognan, Châteauneuf-du-Pape, Gimblett Gravels'],
  ['schiste','Schiste, ardoise',[175],'Moselle, Anjou noir, Faugères, Priorat, Douro, Banyuls'],
  ['granite','Granite',[163],'crus du Beaujolais, Cornas, Condrieu, Brand (Alsace)'],
  ['gneiss','Gneiss',[176],'Wachau, Muscadet (Goulaine, Le Pallet), Caramany'],
  ['silex','Silex',[291],'Sancerre, Pouilly-Fumé'],
  ['volcanique','Volcanique',[164],'Santorin, Etna, Tokaj, Lanzarote, Rangen de Thann'],
  ['loess','Lœss',[],'Kamptal, Kremstal, Tokaj, Kaiserstuhl, Columbia Valley'],
  ['gres','Grès',[],'Kessler (Guebwiller), Heiligenstein (Kamptal), Courthézon (Châteauneuf-du-Pape)'],
  ['alluvions','Limons, alluvions',[],'Médoc et Marlborough (caillouteuses), benches de la Napa'],
  ['terra-rossa','Terra rossa',[],'Coonawarra, Wrattonbully, Istrie'],
  ['albariza','Albariza',[],'Jerez (Macharnudo, Balbaina), Sanlúcar de Barrameda'],
  ['galestro','Galestro, alberese',[],'Chianti Classico, Montalcino, Chianti Rufina']];
const vinBtn=v=>`<button class="vers-cave" data-cuvee="${escH(v.cuvee)}">${escH(v.cuvee)}</button> (${escH(v.dom)})`;
const solsDe=v=>v.sols||SOL_LIGNES.filter(([,,ids])=>ids.some(id=>v.liens?.[id])).map(([k])=>k); // ancien fichier sans sols : d'après les fiches de roches
const caveSolHTML=()=>{const vs=vinsDe();if(!vs.length)return '';
  const b=SOL_LIGNES.map(([k,nom,,ex])=>{const l=vs.filter(v=>solsDe(v).includes(k));
    return l.length?`<p><b>${nom} (${l.length})</b> : ${l.map(vinBtn).join(', ')}</p>`:`<p class="sol-vide"><b>${nom}</b> : pas encore dans ma cave. À goûter : ${escH(ex)}.</p>`;});
  return `<details class="mnemo partenaires-liste"><summary class="m-lbl">Dans ma cave, par sol</summary>${b.join('')}</details>`;};
const caveHTML=f=>{if(f.id===SOL_VERRE)return caveSolHTML();const l=vinsDe().filter(v=>v.liens&&v.liens[f.id]);return l.length?`<details class="mnemo partenaires-liste" open><summary class="m-lbl">Dans ma cave (${l.length})</summary>${l.map(v=>{const x=v.liens[f.id];return `<button class="vers-cave" data-cuvee="${escH(v.cuvee)}">${escH(v.cuvee)}</button> — ${escH(v.dom)}${x.d?' : '+escH(x.d)+(x.s==='ok'?' ✅':' ⚠️'):''}`;}).join('<br>')}</details>`:'';};
// Fiche cépage : pas de liste des partenaires de la région (ils ne cultivent pas forcément ce cépage) ; « Dans ma cave » reste, car lié à la fiche.
const partenairesHTML=f=>{const cave=caveHTML(f);if(cave)return cave;if(f.theme==='Cépages')return '';const g=f.geo||{};const l=g.appel?partenaires.filter(p=>(p.appellations||[]).some(a=>memeAppel(a,g.appel))):g.region?partenaires.filter(p=>p.region===g.region):partenaires.filter(p=>p.points&&p.points[f.id]);return l.length?`<details class="mnemo partenaires-liste"${g.appel?' open':''}><summary class="m-lbl">${g.appel?'Dans ma cave':'Mes partenaires'} (${l.length})</summary>${l.map(p=>escH(p.nom)+(p.commune?' ('+escH(p.commune)+')':'')+(p.appellations&&p.appellations.length?' — '+p.appellations.map(escH).join(', '):'')).join(' ; ')}</details>`:'';};
// Jauge de structure sur 5 (grille WSET : faible, moyen-, moyen, moyen+, élevé) ; ⚠ sur un critère non recoupé.
const JAUGE_LBL={acidite:'Acidité',tanins:'Tanins',alcool:'Alcool',corps:'Corps',aromes:'Arômes'},NIV5=['faible','moyen-','moyen','moyen+','élevé'];
// Niveau = entier, ou fourchette [a,b] de la source : points pleins jusqu'à a, pâles jusqu'à b.
const jaugeHTML=f=>{const j=f.jauge;if(!j)return '';const av=j.a_verifier||[];
  const lig=k=>{const[a,b]=[].concat(j[k],j[k]),mot=a===b?NIV5[a-1]:`${NIV5[a-1]} à ${NIV5[b-1]}`,chk=av.includes(k);
    return `<div class="j-l" role="img" aria-label="${JAUGE_LBL[k]} : ${mot}${chk?', à vérifier':''}"><span>${JAUGE_LBL[k]}</span><span class="j-p" aria-hidden="true">${'●'.repeat(a)}<b>${'●'.repeat(b-a)}</b><i>${'●'.repeat(5-b)}</i></span><small aria-hidden="true">${mot}${chk?' ⚠':''}</small></div>`;};
  return `<div class="jauge"><span class="m-lbl">Structure typique</span>${Object.keys(JAUGE_LBL).filter(k=>j[k]!=null).map(lig).join('')}${j.note?`<small class="j-s">${j.note}</small>`:''}<small class="j-s">${j.style} — ${j.src}</small></div>`;};
// Autres noms du cépage (pays ou région où ils s'emploient).
const nomsHTML=f=>f.noms?.length?`<p class="noms"><span class="m-lbl">Autres noms</span> ${f.noms.map(n=>`<b>${n.nom}</b> (${n.ou})`).join(', ')}</p>`:'';
const figureHTML=f=>f.schema?`<figure class="schema" tabindex="0" role="button" aria-label="Schéma : ${escH(f.schema.legende)}. Agrandir">${fitSvg(avecPartenaires(f,f.schema.svg))}<figcaption>${f.schema.legende} — ${f.schema.src}</figcaption></figure>`:'';
const schemaHTML=f=>nomsHTML(f)+jaugeHTML(f)+figureHTML(f);
/* Toucher un schéma l'ouvre en grand (défilement et pincement possibles) ; Échap ou le bouton le referment. */
let zoomOpener=null;
function fermerZoom(){const z=document.getElementById('zoom');if(!z||z.hidden)return false;z.hidden=true;document.body.style.overflow=document.getElementById('proj').hidden?'':'hidden';zoomOpener&&zoomOpener.focus({preventScroll:true});return true;}
function ouvrirZoom(fig){
  const z=document.getElementById('zoom'),c=fig.cloneNode(true);c.removeAttribute('tabindex');c.removeAttribute('role');c.removeAttribute('aria-label');
    z.querySelector('.zoom-in').replaceChildren(c);z.hidden=false;document.body.style.overflow='hidden';zoomOpener=fig;z.scrollTo(0,0);z.querySelector('button').focus();
}
document.addEventListener('click',e=>{const f=e.target.closest('.schema');if(f&&!f.closest('#zoom')&&!f.closest('#support')&&!f.classList.contains('jeu-carte'))ouvrirZoom(f);}); // carte du jeu : on touche les zones, pas d'agrandissement
document.addEventListener('keydown',e=>{const f=e.target.classList&&e.target.classList.contains('schema')&&e.target;if(f&&(e.key==='Enter'||e.key===' ')){e.preventDefault();ouvrirZoom(f);}});
// Détails que seul le livre (ou une source) appuie : signalés, sans compter comme « à vérifier ».
const selonHTML=f=>f.selon_livre?.length?`<details class="selon-livre"><summary>${f.source==='france'||/cf\. Mille Vignes|complément hors livre/.test(f.src)?'Source unique, non recoupé':'Selon le livre, non recoupé'} (${f.selon_livre.length})</summary><ul>${f.selon_livre.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'';
function card(f){
  const c=document.createElement('div');c.className='card'+(f.theme==='Géographie viticole'?' t-geo':'');
  const mine=exosDe(f);
  const geoTag=f.geo?`<span class="tag geo">${f.geo.appel||f.geo.region||f.geo.pays}</span>`:'';
  const dueTag=ficheDue(f)?'<span class="tag due">à revoir</span>':'';
  const chk=f.to_check||[];
  const statTag=f.status==='verified'?'<span class="tag ok">✓ vérifiée</span>':chk.length?'<span class="tag warn">⚠ à vérifier</span>':'';
  const chkList=chk.length?`<details class="to-check"><summary>Points à vérifier (${chk.length})</summary><ul>${chk.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'';
  const selon=selonHTML(f);
  const subTags=(f.sous||[]).map(s=>`<span class="sub-tag">${s}</span>`).join('');
  c.innerHTML=`
    <div class="card-tags"><span class="tag theme">${f.theme}</span>${geoTag}<span class="tag niv">${f.niveau}</span>${dueTag}</div>
    <button class="card-toggle" aria-expanded="false"><h3>${f.titre}</h3><span class="fstat s-${etat(f)[0]}">${etat(f)[1]}</span></button>
    <p class="synth">${paras(f.synth)}</p>
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
    <div class="src">— ${f.src}${f.page&&!f.src.trim().endsWith('p. '+f.page)?', p. '+f.page:''}</div>`;
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
  const k=newKey();return {cur:k,progs:{[k]:blankProg()}};
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
  const pools=fs.map(f=>shuffle(exosDe(f).filter(e=>PRINTABLE.includes(e.type)))),out=[];
  for(let r=0;out.length<10&&pools.some(p=>p[r]);r++)pools.forEach(p=>{if(p[r]&&out.length<10)out.push(p[r]);});
  return out;
}
function printSupport(){
  const pr=P(),s=document.getElementById('support');s.innerHTML='';
  s.append(el('h1',null,pr.titre||'Masterclass'),el('p','sup-sub',`L'Atelier des Mille Vignes — ${pr.items.length} fiche(s) · ${fmtDuree(pr.items.reduce((a,x)=>a+x.duree,0))}`));
  pr.items.forEach((it,i)=>{const f=FICHE_BY_ID[it.id],a=el('article','sup-fiche');
    a.append(el('h2',null,`${i+1}. ${f.titre}`));
    if(it.vin)a.append(el('p','sup-vin','Vin servi : '+it.vin));
    a.insertAdjacentHTML('beforeend',`<p>${paras(f.synth)}</p>${schemaHTML(f)}`+
      (it.contenu!=='synth'?`<p><b>Astuce mémo : </b>${f.mnemo}</p>`:'')+
      (it.contenu==='essentiel'?`<ul class="sup-ess">${essentiels(f).map(x=>`<li>${x}</li>`).join('')}</ul>`:'')+
      (it.vin?`<table class="sup-grille">${['Œil','Nez','Bouche','Mes notes'].map(x=>`<tr><th>${x}</th><td></td></tr>`).join('')}</table>`:'')+
      `<p class="sup-src">${f.src}${f.page&&!f.src.trim().endsWith('p. '+f.page)?', p. '+f.page:''}</p>`);
    s.append(a);});
  if(pr.quiz){const qs=quizFor(pr.items.map(x=>FICHE_BY_ID[x.id]));
    if(qs.length){
      const qz=el('section','sup-quiz');qz.append(el('h2',null,'Quiz'));const ol=el('ol');
      qs.forEach(ex=>{const li=el('li');const p=ex.payload;
        li.append(el('p','sup-q',ex.type==='true_false'?'Vrai ou faux : '+p.statement:ex.prompt+(ex.type==='mcq_multi'?' (plusieurs réponses)':'')));
        if(p.options){const o=el('ol','sup-opts');shuffle(p.options).forEach(x=>o.append(el('li',null,x)));li.append(o);}
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
    box.insertAdjacentHTML('beforeend',`<p class="proj-synth">${paras(f.synth)}</p>${schemaHTML(f)}`);
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
const RETRY_GAP=4; // exercices intercalés avant de reposer une erreur : assez pour ne pas répondre de mémoire immédiate
let shownAt=0,queue=[],pos=0,score={ok:0,total:0},sessionTitle='',synthVue=new Set(),schemaVu=new Set(),decouvertes=new Set(),nouvelles=[]; // fiches dont la synthèse a déjà servi de correction dans la séance
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
// Champ de réponse corrigée : ni correction automatique ni soulignement d'iOS (« gouais », « malvidine » ne sont pas des fautes).
const saisie=n=>{n.spellcheck=false;n.setAttribute('autocorrect','off');n.setAttribute('autocomplete','off');return n;};
let retour='jour'; // écran d'où part une séance ou une lecture, pour y revenir
function startSession(q,title,dejaLues=[],exam=null){
  if(mode!=='due')retour=mode;
  queue=q;examen=exam;pos=0;score={ok:0,total:0};sessionTitle=title;synthVue=new Set();schemaVu=new Set();decouvertes=new Set(dejaLues);
  if(q.length&&!exam){seances.push({t:now(),n:q.length,r:0,fin:0});saveSeances();}
  nouvelles=[...new Set(q.map(e=>e.fiche).filter(f=>!decouvertes.has(f.id)&&aDecouvrir(f)))];
  mode='due';marquerOnglet('jour'); // la séance reste rattachée à l'onglet Aujourd'hui
  document.getElementById('filterBar').style.display='none';
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;document.getElementById('saveBanner').hidden=true;
  showExercise();window.scrollTo(0,0);
  if(exam){const id=setInterval(()=>{const c=grid.querySelector('.ex-chrono');
    if(!c||examen!==exam){clearInterval(id);return;} // examen quitté ou terminé
    const r=exam.fin-now();if(r<=0){clearInterval(id);pos=queue.length;showExercise();return;}
    c.textContent=chrono(r);},1000);}
}
/* Examen blanc : sans aide ni correction avant la fin, minuté, hors répétition espacée (voir planExamen dans exercices.js). */
const EXAMEN_N=40,EXAMEN_MS=60e3; // une minute par question, comme l'écrit du WSET 2 (50 QCM en 45 min)
let examen=null;
const chrono=ms=>{const s=Math.ceil(ms/1000);return `⏱ ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;};
function startExamen(pool){const q=planExamen(pool,EXAMEN_N);if(q.length)startSession(q,'Examen blanc',FICHES.map(f=>f.id),{fin:now()+q.length*EXAMEN_MS,res:[]});}
function showBilanExamen(){
  const ex=examen,box=el('div','empty bilan');examen=null;
  if(ex.sprint)return showBilanSprint(ex,box);
  const ok=ex.res.filter(r=>r.ok).length,n=queue.length,pct=Math.round(100*ok/n),avant=examens[examens.length-1];
  box.append(el('h3',null,`Examen blanc : ${ok} sur ${n} (${pct} %)`),el('p',null,(ex.res.length<n?`Temps écoulé : ${n-ex.res.length} question(s) sans réponse, comptées fausses. `:'')+(pct>=55?'Au-dessus du seuil de réussite du WSET (55 %).':'Sous le seuil de réussite du WSET (55 %).')+(avant?` Examen précédent : ${Math.round(100*avant.ok/avant.n)} %.`:'')));
  const th={};ex.res.forEach(r=>{const t=r.ex.fiche.theme||'Lexique';th[t]=th[t]||[0,0];th[t][1]++;if(r.ok)th[t][0]++;});
  const ul=el('ul','bilan-themes');Object.entries(th).sort((a,b)=>a[1][0]/a[1][1]-b[1][0]/b[1][1]).forEach(([t,[o,m]])=>ul.append(el('li',null,`${t} : ${o}/${m}`)));box.append(ul);
  examens.push({t:now(),n,ok,th});saveExamens();
  const faux=ex.res.filter(r=>!r.ok).map(r=>r.ex);
  // 2. erreurs remises en révision (demain) ; pas sur une fiche jamais lue, qui garde sa découverte avant ses exercices
  const arevoir=faux.filter(e=>!aDecouvrir(e.fiche));arevoir.forEach(e=>rate(e.id,'hard'));
  if(arevoir.length)box.append(el('p',null,`${arevoir.length} erreur(s) sur des fiches déjà travaillées : à revoir dès demain dans la Séance du jour.`));
  blocErreurs(faux,box);
  const r=el('button','btn','Retour');r.onclick=()=>setMode(retour);box.append(r);
  grid.append(box);
}
function blocErreurs(faux,box){ // erreurs d'un examen ou d'un sprint, avec la bonne réponse, et une séance pour les revoir
  if(!faux.length)return;const d=el('details','cours');d.append(el('summary',null,`Mes erreurs (${faux.length})`));
  faux.forEach(e=>{const li=el('div','bilan-err');li.append(el('p',null,e.prompt+(e.payload.statement?' '+e.payload.statement:'')),el('p','fb-src','Réponse attendue : '+correctText(e)+' — fiche : '+e.fiche.titre));d.append(li);});box.append(d);
  const rv=el('button','btn primary','Revoir mes erreurs');rv.onclick=()=>startSession(faux,'Mes erreurs',[...new Set(faux.map(e=>e.fiche.id))]);box.append(rv,' ');
}
/* ============ JEUX (hors calendrier de révision ; records dans jeux) ============ */
// Sprint : trois minutes de questions à un seul toucher sur des fiches déjà vues, sans correction avant la fin (moteur de l'examen blanc).
const SPRINT_MS=180e3,SPRINT_TYPES=['mcq_single','true_false','odd_one_out','label_schema'];
function startSprint(pool=EXOS){
  const q=shuffle(pool.filter(e=>SPRINT_TYPES.includes(e.type)&&/^mv-/.test(e.id)&&etat(e.fiche)[0]!=='new')).slice(0,150); // exercices des fiches (ni lexique ni cave)
  if(q.length<10){alert('Travaille d’abord quelques fiches : le sprint ne pose que des questions sur des fiches déjà vues.');return;}
  startSession(q,'Sprint',FICHES.map(f=>f.id),{fin:now()+SPRINT_MS,res:[],sprint:true});
}
function showBilanSprint(ex,box){
  const ok=ex.res.filter(r=>r.ok).length,n=ex.res.length,rec=jeux.sprint,mieux=!rec||ok>rec.ok;
  box.append(el('h3',null,`Sprint : ${ok} bonne${ok>1?'s':''} réponse${ok>1?'s':''} sur ${n} en 3 minutes`),el('p',null,!rec?'Premier sprint : c’est ton record.':mieux?`Nouveau record (avant : ${rec.ok} sur ${rec.n}).`:`Record : ${rec.ok} sur ${rec.n}.`));
  if(mieux){jeux.sprint={ok,n,t:now()};saveJeux();}
  blocErreurs(ex.res.filter(r=>!r.ok).map(r=>r.ex),box);
  const a=el('button','btn','Refaire un sprint');a.onclick=()=>startSprint();const r=el('button','btn','Retour');r.onclick=()=>setMode(retour);box.append(a,' ',r);
  grid.append(box);
}
// Écran d'un jeu : comme une séance, rattaché à l'onglet d'où l'on vient.
function ecranJeu(){
  if(mode!=='due'&&mode!=='jeu')retour=mode;
  examen=null;mode='jeu';marquerOnglet(retour);document.getElementById('filterBar').style.display='none';
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;document.getElementById('saveBanner').hidden=true;
  grid.className='session';grid.innerHTML='';
  const quitter=el('button','lien ex-quit','← Quitter le jeu');quitter.onclick=()=>setMode(retour);grid.append(quitter);
  const box=el('div','ex');grid.append(box);return box;
}
const finJeu=(box,rejouer)=>{const a=el('button','btn primary','Rejouer');a.onclick=()=>{rejouer();window.scrollTo(0,0);};const r=el('button','btn','Retour');r.onclick=()=>setMode(retour);box.append(a,' ',r);};
const question=(box,t)=>{const q=el('div','ex-prompt',t);q.setAttribute('role','heading');q.setAttribute('aria-level','2');q.tabIndex=-1;box.append(q);q.focus({preventScroll:true});return q;};
// Cartes à toucher : « Où est X ? », réponse en touchant la zone. Zones marquées data-z par tools/cartes/zoner.mjs ; une carte par jeu de zones dans le lieu.
const zonesDe=f=>[...f.schema.svg.matchAll(/data-z="([^"]*)"/g)].map(m=>m[1].replace(/&quot;/g,'"'));
function cartesJeu(l){const vues=new Set();return FICHES.filter(f=>f.schema&&f.geo&&carteDe(f,l)&&zonesDe(f).length>=3).filter(f=>{const k=zonesDe(f).join('|');return !vues.has(k)&&vues.add(k);});} // cartes de situation comprises (hors CARTES, qui ne garde que les cartes nommées)
// Noms des zones cachés (le toucher doit se faire de mémoire) ; le nom de la bonne zone réapparaît à la correction.
function cacherZones(svg,zones){const esc=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  zones.forEach(z=>{svg=svg.replace(new RegExp(`<text([^>]*)>${esc(z)}</text>`,'g'),`<text$1 data-nom="${escH(z)}" visibility="hidden">${z}</text>`);}); // noms écrits tels quels par carte.mjs
  return svg;}
function jouerCartes(l){
  const cartes=cartesJeu(l);if(!cartes.length)return;
  const tours=shuffle(cartes).flatMap(f=>shuffle(zonesDe(f)).map(z=>({f,z})));let i=0,ok=0;
  const etape=()=>{const box=ecranJeu();
    if(i>=tours.length){const rec=(jeux.cartes||{})[l.nom],mieux=!rec||ok/tours.length>rec.ok/rec.n;
      box.append(el('h3',null,`Cartes à toucher · ${l.nom} : ${ok} sur ${tours.length}`),el('p',null,!rec?'Première partie : c’est ton record.':mieux?`Nouveau record (avant : ${rec.ok} sur ${rec.n}).`:`Record : ${rec.ok} sur ${rec.n}.`));
      if(mieux){(jeux.cartes??={})[l.nom]={ok,n:tours.length,t:now()};saveJeux();}
      finJeu(box,()=>jouerCartes(l));return;}
    const {f,z}=tours[i],zones=zonesDe(f);
    box.append(el('div','ex-head',`Cartes à toucher · ${i+1}/${tours.length} · ✔ ${ok}`));
    question(box,`Où est ${z} ?`);
    const fig=el('figure','schema jeu-carte');fig.innerHTML=fitSvg(cacherZones(f.schema.svg,zones));
    const fb=el('div','fb'),actions=el('div','ex-actions');fb.setAttribute('aria-live','polite');box.append(fig,el('p','jour-note',f.schema.src),fb,actions); // crédit seul : la légende situerait la zone en fort
    fig.querySelectorAll('path[data-z]').forEach((p,k)=>{p.setAttribute('tabindex','0');p.setAttribute('role','button');p.setAttribute('aria-label',`Zone ${k+1} sur ${zones.length}`);
      const choisir=()=>{if(fb.textContent)return;const juste=p.dataset.z===z;if(juste)ok++;p.classList.add(juste?'ok':'ko');
        fig.querySelectorAll('path[data-z]').forEach(x=>{if(x.dataset.z===z)x.classList.add('cible');});
        fig.querySelectorAll('text[data-nom]').forEach(t=>{if(t.dataset.nom===z)t.removeAttribute('visibility');});
        fb.className='fb '+(juste?'good':'bad');fb.append(el('strong',null,juste?'Bonne réponse.':`Pas là : ${z} est en foncé${p.dataset.z?', tu as touché '+p.dataset.z:''}.`));
        const b=el('button','btn primary',i+1<tours.length?'Suivant':'Voir le score');b.onclick=()=>{i++;etape();window.scrollTo(0,0);};actions.append(b);b.focus();};
      p.onclick=choisir;p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choisir();}};});};
  etape();window.scrollTo(0,0);
}
// Devine le vin : une cuvée de la cave à retrouver parmi quatre, indices dévoilés un à un ; points = indices restants + 1 si juste.
const indicesVin=v=>[['Couleur',v.couleur],['Région',v.reg],['Cépages',CAVE_CHAMPS[0][1](v)],['Sol',v.sol],['Appellation',v.appellation],['Élevage',v.elevage],['Domaine',v.dom]].filter(([,x])=>x);
const vinsJouables=()=>vinsDe().filter(v=>indicesVin(v).length>=3); // un vin sans fiche technique n'a rien à deviner
function jouerVins(){
  const vins=vinsJouables();if(vins.length<4)return;
  const tours=shuffle(vins).slice(0,8);let i=0,pts=0,max=0;
  const indices=indicesVin,cle=v=>JSON.stringify(indices(v).map(([,x])=>x)); // deux cuvées aux mêmes indices : jamais l'une en leurre de l'autre
  const etape=()=>{const box=ecranJeu();
    if(i>=tours.length){const rec=jeux.vins,mieux=!rec||pts/max>rec.pts/rec.max;
      box.append(el('h3',null,`Devine le vin : ${pts} point${pts>1?'s':''} sur ${max}`),el('p',null,!rec?'Première partie : c’est ton record.':mieux?`Nouveau record (avant : ${rec.pts} sur ${rec.max}).`:`Record : ${rec.pts} sur ${rec.max}.`));
      if(mieux){jeux.vins={pts,max,t:now()};saveJeux();}
      finJeu(box,jouerVins);return;}
    const v=tours[i],ind=indices(v),opts=shuffle([v,...shuffle(vins.filter(x=>x!==v&&cle(x)!==cle(v))).slice(0,3)]);let k=1;max+=ind.length;
    const nom=o=>o.cuvee+(opts.filter(x=>x.cuvee===o.cuvee).length>1?' · '+o.dom:''); // même nom de cuvée chez deux domaines : on précise
    box.append(el('div','ex-head',`Devine le vin · ${i+1}/${tours.length} · ${pts} pt${pts>1?'s':''}`));
    question(box,'Quelle est cette cuvée de ta cave ?');
    const ul=el('ul','indices'),body=el('div','ex-body'),fb=el('div','fb'),actions=el('div','ex-actions');fb.setAttribute('aria-live','polite');
    const dessiner=()=>{ul.innerHTML='';ind.slice(0,k).forEach(([l,x])=>{const li=el('li');li.append(el('b',null,l+' : '),String(x));ul.append(li);});plus.hidden=k>=ind.length;};
    const plus=el('button','btn',`Indice suivant`);plus.onclick=()=>{k++;dessiner();};
    box.append(ul,body,fb,actions);actions.append(plus);
    opts.forEach(o=>{const b=el('button','opt',nom(o));b.onclick=()=>{body.querySelectorAll('button').forEach(x=>x.disabled=true);plus.remove();
      const juste=o===v,gain=juste?ind.length-k+1:0;pts+=gain;b.classList.add(juste?'good':'bad');
      fb.className='fb '+(juste?'good':'bad');fb.append(el('strong',null,juste?`Bonne réponse : ${gain} point${gain>1?'s':''}.`:`C’était ${nom(v)}.`));
      const n=el('button','btn primary',i+1<tours.length?'Suivant':'Voir le score');n.onclick=()=>{i++;etape();window.scrollTo(0,0);};actions.append(n);n.focus();};body.append(b);});
    dessiner();};
  etape();window.scrollTo(0,0);
}
function showExercise(){
  grid.className='session';grid.innerHTML='';
  if(pos>=queue.length&&examen)return showBilanExamen();
  if(pos>=queue.length){
    const box=el('div','empty');
    if(!queue.length){box.append(el('h3',null,'Rien à revoir pour le moment'),el('p',null,'Tous les exercices sont planifiés plus tard. Reviens demain, ou entraîne-toi sur une fiche depuis l\'onglet Fiches.'));}
    else{const sc=seances[seances.length-1];if(sc&&!sc.fin){sc.fin=1;saveSeances();}
      box.append(el('h3',null,'Session terminée'),el('p',null,score.total?`${score.ok} bonne(s) réponse(s) sur ${score.total} exercice(s) corrigé(s).`:`${queue.length} carte(s) revue(s).`));
      const s=serie(seances,examens,now());box.append(el('p','jour-note',(nouvelles.length?`${nouvelles.length} nouvelle${nouvelles.length>1?'s':''} fiche${nouvelles.length>1?'s':''} découverte${nouvelles.length>1?'s':''} · `:'')+`série : ${plur(s.n,'jour')}.`));
      const again=el('button','btn','Retour');again.onclick=()=>setMode(retour);box.append(again);const sv=el('button','btn','Mon suivi');sv.onclick=()=>{setMode('suivi');window.scrollTo(0,0);};box.append(' ',sv);}
    grid.append(box);return;
  }
  const ex=queue[pos],p=ex.payload,f=ex.fiche;shownAt=now();
  if(!examen&&!decouvertes.has(f.id)&&aDecouvrir(f)){decouvertes.add(f.id);const n=queue.filter(e=>e.fiche===f).length;
    const lire=()=>showDecouverte(f,{head:`Nouvelle notion ${nouvelles.indexOf(f)+1} sur ${nouvelles.length}`,lead:`Lis-la tranquillement : ${n} exercice${n>1?'s':''} sur cette notion ensuite.`}); // apprendre avant d'être interrogé
    pretestOn()&&f.qcm?showPretest(f,lire):lire();return;}
  const box=el('div','ex');
  const okN=examen?examen.res.filter(r=>r.ok).length:0;
  const head=el('div','ex-head',examen&&examen.sprint?`Sprint · ✔ ${okN} · ✘ ${examen.res.length-okN}`:`${sessionTitle} · ${pos+1}/${queue.length} · ${TYPE_LBL[ex.type]}`); // sprint : le score court dit si la dernière réponse était juste
  if(examen)head.append(el('span','ex-chrono',chrono(examen.fin-now())));
  const quitter=el('button','lien ex-quit',examen?(examen.sprint?'← Quitter le sprint':'← Quitter l’examen'):'← Quitter la séance');quitter.onclick=()=>setMode(retour);grid.append(quitter); // au-dessus de la carte, comme « ← Atlas »
  if(f.status!=='verified')head.append(el('span','ex-warn','⚠ fiche à vérifier')); // la maîtrise (notes) et la fiabilité (statut) restent deux informations séparées
  box.append(head);
  // Question marquée avec_fiche (docs/IMPORT_FORMAT.md) : elle s'appuie sur sa fiche, montrée au-dessus (titre, schéma ou carte).
  if(ex.avec_fiche){const fi=el('div','ex-fiche');fi.append(el('p','ex-fiche-t','Fiche : '+f.titre));fi.insertAdjacentHTML('beforeend',figureHTML(f));box.append(fi);}
  // Longue question (définition du lexique) : plus petite.
  const question=el('div','ex-prompt'+(ex.prompt.length>140?' long':''),ex.prompt);question.setAttribute('role','heading');question.setAttribute('aria-level','2');question.tabIndex=-1;box.append(question);
  const body=el('div','ex-body'),actions=el('div','ex-actions'),fb=el('div','fb');fb.setAttribute('aria-live','polite');
  box.append(body,fb,actions);grid.append(box);question.focus({preventScroll:true}); // lecteur d'écran : la question, pas le haut de page
  const submit=(answer,label='Valider')=>{const b=el('button','btn primary',label);b.onclick=()=>finish(ex,grade(ex,answer()),fb,actions,body);actions.append(b);return b;};
  const choice=(opts,onPick)=>shuffle(opts.map((o,i)=>i)).forEach(i=>{const b=el('button','opt',opts[i]);b.dataset.i=i;b.onclick=()=>onPick(i,b);body.append(b);});
  switch(ex.type){
    case 'flashcard':case 'flashcard_reverse':{
      const inp=saisie(el('textarea','ex-input'));inp.rows=2;inp.placeholder='Ta réponse : elle sera corrigée par mots-clés (facultatif)';inp.setAttribute('aria-label','Ta réponse');body.append(inp);
      const show=el('button','btn primary','Voir la réponse');show.onclick=()=>{show.remove();const mine=inp.value.trim();inp.remove();
        const k=mine?flashKeys(p.answer,mine,p.keys):null;
        if(mine)body.append(el('p','ex-mine','Ta réponse : '+mine));body.append(el('div','ex-answer',p.answer));
        if(k&&k.ok!==null){const m=el('p','ex-keys');m.append(el('b',null,`Mots-clés retrouvés : ${k.found.length} sur ${k.keys.length}`));if(k.missing.length)m.append(' — manquants : '+k.missing.join(', '));body.append(m);}
        finish(ex,k?k.ok:null,fb,actions,body);};actions.append(show);break;}
    case 'label_schema':Object.assign(p,maskSchema(f.schema.svg,p.labels,p.leurres&&[p.labels[0],...shuffle(p.leurres)]));body.insertAdjacentHTML('beforeend',`<figure class="schema" tabindex="0" role="button" aria-label="Agrandir le schéma">${fitSvg(p.svg)}</figure>`); // puis comme un QCM
    case 'mcq_single':case 'odd_one_out':
      choice(p.options,(i,b)=>{finish(ex,grade(ex,i),fb,actions,body);b.classList.add(i===p.answer?'good':'bad');body.querySelector(`[data-i="${p.answer}"]`).classList.add('good');});break;
    case 'true_false':
      [['Vrai',true],['Faux',false]].forEach(([t,v])=>{const b=el('button','opt',t);b.onclick=()=>{finish(ex,grade(ex,v),fb,actions,body);b.classList.add(v===p.answer?'good':'bad');};body.append(b);});
      body.prepend(el('p','ex-statement',p.statement));break;
    case 'mcq_multi':{
      const picked=new Set();
      choice(p.options,(i,b)=>{picked.has(i)?picked.delete(i):picked.add(i);b.classList.toggle('picked');b.setAttribute('aria-pressed',picked.has(i));});
      const v=submit(()=>[...picked]),go=v.onclick; // après validation : bonnes réponses en vert, mauvais choix en rouge
      v.onclick=()=>{go();body.querySelectorAll('.opt').forEach(o=>{const i=+o.dataset.i;o.disabled=true;if(p.answers.includes(i))o.classList.add('good');else if(picked.has(i))o.classList.add('bad');});};break;}
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
      const inp=saisie(el('input','ex-input'));inp.placeholder='Ta réponse';inp.setAttribute('aria-label','Ta réponse');body.append(inp);
      const b=submit(()=>inp.value);inp.onkeydown=e=>{if(e.key==='Enter')b.click();};setTimeout(()=>inp.focus());break;}
    case 'cloze':{
      const inputs=[],line=el('p','ex-cloze');
      clozeParts(p.text).forEach((part,i)=>{if(i%2){const inp=saisie(el('input','ex-input blank'));inp.setAttribute('aria-label','Trou '+(inputs.length+1));inputs.push(inp);line.append(inp);}else line.append(part);});
      body.append(line);const b=submit(()=>inputs.map(x=>x.value));inputs.forEach(x=>x.onkeydown=e=>{if(e.key==='Enter')b.click();});break;}
    case 'matching':{
      const rights=shuffle(p.pairs.map(x=>x[1])),sels=[];
      p.pairs.forEach(([left])=>{const row=el('label','match-row');row.append(el('span',null,left));const s=el('select','ex-input');s.append(new Option('— choisir —',''));rights.forEach(r=>s.append(new Option(r,r)));sels.push(s);row.append(s);body.append(row);});
      submit(()=>sels.map(s=>s.value));break;}
    case 'ordering':{
      let items=shuffle(p.items);if(items.every((x,i)=>x===p.items[i]))items.reverse(); // jamais déjà dans l'ordre
      const list=el('ol','order');
      const draw=()=>{list.innerHTML='';items.forEach((it,i)=>{const li=el('li','order-item');li.append(el('span',null,sansDate(it)));
        const up=el('button','mini','↑'),dn=el('button','mini','↓');up.setAttribute('aria-label','Monter '+sansDate(it));dn.setAttribute('aria-label','Descendre '+sansDate(it));up.disabled=!i;dn.disabled=i===items.length-1;
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
  const question=el('div','ex-prompt',q.q);question.setAttribute('role','heading');question.setAttribute('aria-level','2');question.tabIndex=-1;
  box.append(head,question,el('p','ex-mine','Pas de note : essayer avant de lire prépare la mémoire, même si tu te trompes.'));
  const body=el('div','ex-body'),btns=[],actions=el('div','ex-actions');
  // Correction sans note : l'essai prépare la lecture, mais une erreur non corrigée s'installerait.
  const corriger=pick=>{
    btns.forEach((b,i)=>{b.disabled=true;if(i===q.good)b.classList.add('good');else if(i===pick)b.classList.add('bad');});
    if(q.expl)box.insertBefore(el('p','ex-mine',q.expl),actions);
    const lire=el('button','btn primary','Lire la fiche');lire.onclick=suite;actions.replaceChildren(lire);
  };
  shuffle(q.opts.map((_,i)=>i)).forEach(i=>{const b=el('button','opt',q.opts[i]);btns[i]=b;b.onclick=()=>corriger(i);body.append(b);});
  const nsp=el('button','btn','Voir la réponse'),pass=el('button','btn','Lire la fiche');nsp.onclick=()=>corriger(-1);pass.onclick=suite;actions.append(nsp,pass);
  box.append(body,actions);grid.className='session';grid.innerHTML='';grid.append(box);question.focus({preventScroll:true});window.scrollTo(0,0);
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
    <h3>${f.titre}</h3><p class="synth">${paras(f.synth)}</p>${schemaHTML(f)}
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
  if(mode!=='due')retour=mode;
  mode='due';marquerOnglet(null);
  document.getElementById('filterBar').style.display='none';
  document.getElementById('introLine').textContent='';document.getElementById('progPanel').hidden=true;document.getElementById('saveBanner').hidden=true;
  const page=i=>{
    if(i>=fiches.length){grid.className='session';grid.innerHTML='';const box=el('div','empty');
      box.append(el('h3',null,'Chapitre lu'),el('p',null,fiches.length?`${fiches.length} fiche(s). Ses exercices t'attendent dans la Séance du jour.`:'Les fiches et exercices de ce chapitre arriveront avec son lot.'));
      const b=el('button','btn','Retour');b.onclick=()=>setMode(retour);box.append(b);grid.append(box);return;}
    showDecouverte(fiches[i],{head:`${titre} · fiche ${i+1} sur ${fiches.length}`,btnLbl:i+1<fiches.length?'Fiche suivante':'Terminer le chapitre',onGo:()=>page(i+1),onPrev:i?()=>page(i-1):null,onQuit:()=>setMode(retour)});
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
  const livre=!!r.pages; // récit hors livre (France, cépages, monde) : pas de pages, sources dans r.src
  box.innerHTML=`<div class="ex-head"><span>Récit du chapitre</span><span class="folio">${livre?`Mille Vignes, p. ${r.pages}`:'Hors livre'}</span></div>
    <h3>${r.chapitre}</h3><p class="lead"><b>La question.</b> ${r.question}</p>${r.fil.map(t=>`<p class="synth">${t}</p>`).join('')}
    <p class="synth"><b>${livre?'Ce qu’elle défend.':'À retenir.'}</b> ${r.defend}</p>
    <div class="mnemo"><span class="m-lbl">À dire à un client</span>${r.client}</div>
    <p class="synth"><b>Question fil rouge.</b> ${r.filRouge}</p>
    ${r.prudence?.length?`<details class="cours"><summary>Points de prudence (le livre corrigé)</summary>${r.prudence.map(t=>`<p>${t}</p>`).join('')}</details>`:''}
    <div class="src">— ${livre?`D’après Pascaline Lepeltier, Mille Vignes, p. ${r.pages}`:`D’après ${r.src}`}. Texte reformulé.</div>`;
  const actions=el('div','ex-actions'),go=el('button','btn primary','Aux fiches du chapitre'),quit=el('button','btn later','Quitter la lecture');
  go.onclick=()=>{taire();onGo();window.scrollTo(0,0);};quit.onclick=()=>{taire();setMode(retour);};
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
  if(examen){examen.res.push({ex,ok});pos++;showExercise();window.scrollTo(0,0);return;} // ni correction ni note avant la fin
  body.querySelectorAll('button,input,select').forEach(x=>x.disabled=true);actions.innerHTML='';
  if(ok!==null){score.total++;if(ok)score.ok++;
    fb.className='fb '+(ok?'good':'bad');fb.append(el('strong',null,ok?'Bonne réponse.':'Pas tout à fait.'));
    if(!ok&&correctText(ex))fb.append(el('p',null,'Réponse attendue : '+correctText(ex)));}
  else fb.className='fb';
  // Sans explication propre, la synthèse ne s'affiche qu'une fois par fiche et par séance (sinon elle se répète sous chaque exercice).
  const expl=ex.explanation||(!synthVue.has(ex.fiche.id)&&ex.fiche.synth);
  if(!ex.explanation)synthVue.add(ex.fiche.id);
  if(crit){const n=crit.reduce((a,x)=>a+x,0);fb.prepend(el('strong',null,`${n} critère${n>1?'s':''} sur 3.`));}
  // Boutons (notation, Suivant) juste après le verdict et l'explication ; synthèse, source et approfondissement ensuite
  // (avant : sous toute la synthèse, il fallait défiler pour noter chaque flashcard).
  const plus=el('div','fb fb-plus');actions.after(plus);
  if(expl)(ex.explanation?fb:plus).append(el('p','fb-expl',expl));
  plus.append(el('p','fb-src',`Fiche : ${ex.fiche.titre}${ex.fiche.page?' — p. '+ex.fiche.page:''}`));
  const chk=ex.fiche.status!=='verified'&&ex.fiche.to_check||[];
  plus.insertAdjacentHTML('beforeend',(chk.length?`<details class="to-check"><summary>Points à vérifier (${chk.length})</summary><ul>${chk.map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'')+selonHTML(ex.fiche)+schemaCorrection(ex.fiche)+coursHTML(ex.fiche.cours));
  const next=()=>{pos++;showExercise();window.scrollTo(0,0);};
  const btns=el('div','srs-btns');
  const entry=logAnswer(ex,ok);
  if(crit){ // auto-évaluation : le nombre de critères cochés donne la note (0-1 Difficile, 2 Correct, 3 Facile)
    const n=crit.reduce((a,x)=>a+x,0),q=n<2?'hard':n===2?'ok':'easy';
    rate(ex.id,q);entry.c=crit;entry.r=q;put(JKEY,journal);
    const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);setTimeout(()=>b.focus());return;}
  if(ex.retry){const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);setTimeout(()=>b.focus());return;} // seconde chance : déjà reprogrammé
  const reprise=ok===false&&{...ex,retry:true};if(reprise)queue.splice(Math.min(pos+RETRY_GAP+1,queue.length),0,reprise); // revient une fois un peu plus loin dans la séance, après la correction
  const before=prog[ex.id];if(ok!==false)rate(ex.id,'ok'); // enregistré tout de suite ; le bouton choisi remplace ce « Correct » provisoire
  const add=(q,t,s)=>{const b=el('button','srs-btn srs-'+q,t);b.append(el('span','sub2',s));b.onclick=()=>{if(before)prog[ex.id]=before;else delete prog[ex.id];rate(ex.id,q);entry.r=q;put(JKEY,journal);next();};btns.append(b);};
  if(ok===false){rate(ex.id,'hard');const b=el('button','btn primary','Suivant');b.onclick=next;actions.append(b);
    if(ex.type.startsWith('flashcard')){const o=el('button','btn','En fait, j’avais juste');o.onclick=()=>{if(before)prog[ex.id]=before;else delete prog[ex.id];rate(ex.id,'ok');entry.r='ok';put(JKEY,journal);const i=queue.indexOf(reprise);if(i>pos)queue.splice(i,1);next();};actions.append(o);} // correction par mots-clés : le doute profite à l'élève
    setTimeout(()=>b.focus());return;}
  if(ok===null)add('hard','Difficile','revoir demain');else add('hard','Au hasard','revoir demain'); // réussite par chance : pas une maîtrise
  add('ok','Correct','à intervalle');add('easy','Facile','espacer');
  actions.append(el('div','srs-lbl','Comment l\'as-tu retenue ?'),btns);
  const cible=fb.childNodes.length?fb:body.querySelector('.ex-answer')||fb;cible.tabIndex=-1;cible.focus({preventScroll:true}); // le bouton « Voir la réponse » a disparu : le focus va à la correction ou à la réponse
}
// Safari efface le stockage d'un site non visité depuis 7 jours : on rappelle la sauvegarde après 3 jours sans export, dans tous les onglets sauf pendant une séance.
const SAVED_KEY='mv_saved_at',RAPPEL=3; // jours sans sauvegarde avant le bandeau
function majBandeau(){
  let t=0;try{t=+localStorage.getItem(SAVED_KEY)||0;}catch{}
  const depuis=t||(journal[0]&&journal[0].t)||now(); // jamais sauvegardé : on compte depuis la première réponse
  document.getElementById('saveBanner').hidden=!(mode!=='due'&&Object.keys(prog).length&&now()-depuis>RAPPEL*DAY);
  const j=t&&Math.floor((new Date().setHours(0,0,0,0)-new Date(t).setHours(0,0,0,0))/DAY); // jours de calendrier
  document.getElementById('savedInfo').textContent=!t?'Jamais sauvegardée dans ce navigateur':`Dernière sauvegarde : ${j===0?'aujourd’hui':j===1?'hier':`il y a ${j} jours`}`;
}
// Pendant la Séance du jour, le badge compte ce qu'il reste dans la séance en cours (comme le « 1/9 » de l'en-tête) ; sinon, ce que planifierait une nouvelle séance.
function updateBadges(){const n=mode==='due'&&sessionTitle==='Séance du jour'&&pos<queue.length?queue.length-pos-1:buildQueue(EXOS).length;
  document.getElementById('dueBadge').textContent=n;document.querySelector('.tab-main').setAttribute('aria-label',`Aujourd’hui, ${n} exercice${n>1?'s':''}`);} // lu « Aujourd’hui 48 » sans dire 48 quoi

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
  const blob=new Blob([JSON.stringify({app:'millevignes',version:2,key:PKEY,saved_at:new Date().toISOString(),progress:prog,lues,journal,seances,examens,jeux,programmes:store},null,2)],{type:'application/json'});
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
// Réglages : longueur de séance et thème en boutons groupés (aria-pressed), pré-test en interrupteur.
const segment=(id,val,choisir)=>{const g=document.getElementById(id),maj=()=>g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.v===String(val())));
  g.onclick=e=>{const x=e.target.closest('button');if(x){choisir(x.dataset.v);maj();}};maj();};
segment('sessionSize',()=>SESSION_MAX,v=>{SESSION_MAX=+v;try{localStorage.setItem(SKEY,SESSION_MAX);}catch{}majEch();updateBadges();});
segment('themeSeg',()=>document.documentElement.dataset.theme||'',t=>{if(t)document.documentElement.dataset.theme=t;else delete document.documentElement.dataset.theme;try{t?localStorage.setItem('mv_theme',t):localStorage.removeItem('mv_theme');}catch{}});
const ptSw=document.getElementById('pretestSw');ptSw.checked=pretestOn();ptSw.onchange=()=>{try{localStorage.setItem(PTKEY,ptSw.checked?'1':'0');}catch{}};
const echIn=document.getElementById('echeance'),echInfo=document.getElementById('echeanceInfo');
function majEch(){echIn.value=echeance;const n=rythmeDuJour();echInfo.textContent=echeance?`${restantes()} fiches à découvrir : ${n} nouvelles par jour, séance jusqu'à ${SESSION_MAX+2*n} exercices.`:`Sans échéance : ${NEW_FICHES} nouvelles fiches par jour.`;}
echIn.onchange=()=>{echeance=echIn.value;try{echeance?localStorage.setItem(ECHKEY,echeance):localStorage.removeItem(ECHKEY);}catch{}majEch();updateBadges();};majEch();
document.getElementById('suiviLink').onclick=()=>{setMode('suivi');window.scrollTo(0,0);};
// Réglages : panneau sous l'en-tête (avant : replié dans le pied de page, introuvable sur mobile)
const regBtn=document.getElementById('reglagesBtn'),regBox=document.getElementById('reglages');
regBtn.onclick=()=>{regBox.hidden=!regBox.hidden;regBtn.setAttribute('aria-expanded',!regBox.hidden);if(!regBox.hidden)regBox.scrollIntoView({block:'nearest'});};
// En-tête collant : le titre défile, les onglets restent en haut de l'écran
const head=document.querySelector('header'),calerEntete=()=>{const t=document.querySelector('.head-inner').offsetHeight;head.style.top=-t+'px';
  document.documentElement.style.setProperty('--haut',head.offsetHeight-t+'px');}; // --haut : ce qui reste collé en haut (onglets sur ordinateur, rien sur mobile où ils sont en bas)
calerEntete();addEventListener('resize',calerEntete);
document.getElementById('exportProg').onclick=document.getElementById('saveNow').onclick=exportProg;
document.getElementById('importBtn').onclick=()=>document.getElementById('importProg').click();
document.getElementById('importProg').onchange=async e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  let data;try{data=JSON.parse(await file.text());}catch{alert('Fichier illisible : ce n\'est pas un JSON valide.');return;}
  const p=data&&data.app==='millevignes'&&data.version===2&&data.progress;
  const ok=p&&typeof p==='object'&&Object.values(p).every(v=>v&&typeof v.due==='number'&&typeof v.interval==='number'&&typeof v.ease==='number');
  if(!ok){alert('Ce fichier n\'est pas une sauvegarde de progression Mille Vignes.');return;}
  const n=Object.keys(p).length,cur=Object.keys(prog).length;
  if(!confirm(`Fusionner ${n} exercice(s) suivi(s), sauvegardés le ${(data.saved_at||'?').slice(0,10)}, avec ta progression actuelle (${cur} exercice(s)) ?\nPour chaque exercice, la réponse la plus récente est gardée.`))return;
  prog=fusionner(prog,p);save();
  if(data.lues&&typeof data.lues==='object'){for(const k in data.lues)lues[k]=Math.max(lues[k]||0,+data.lues[k]||0);saveLues();}
  if(Array.isArray(data.seances)){seances=fusionnerListe(seances,data.seances,s=>s.t,200);saveSeances();}
  if(Array.isArray(data.examens)){examens=fusionnerListe(examens,data.examens.filter(x=>x&&typeof x.t==='number'&&x.n>0&&typeof x.ok==='number'),x=>x.t,100);saveExamens();}
  if(Array.isArray(data.journal)){journal=fusionnerListe(journal,data.journal,j=>j.e+'|'+j.t,5000);put(JKEY,journal);}
  const jx=data.jeux;if(jx&&typeof jx==='object'){ // records : le meilleur des deux
    const best=(a,b,k,n)=>!b||typeof b[k]!=='number'||typeof b[n]!=='number'||!b[n]?a:!a||b[k]/b[n]>a[k]/a[n]?b:a;
    jeux.sprint=best(jeux.sprint,jx.sprint,'ok','n');jeux.vins=best(jeux.vins,jx.vins,'pts','max');
    if(jx.cartes&&typeof jx.cartes==='object'){jeux.cartes??={};for(const l in jx.cartes)jeux.cartes[l]=best(jeux.cartes[l],jx.cartes[l],'ok','n');}
    saveJeux();}
  const ps=data.programmes&&data.programmes.progs; // sauvegardes récentes : les programmes de masterclass s'ajoutent à ceux du navigateur
  if(ps&&typeof ps==='object')for(const k in ps){const c=cleanProg(ps[k]);if(c)store.progs[k]=c;}
  saveProg();updateBadges();render();
};
document.getElementById('resetAll').onclick=()=>{if((prompt('Cela efface toute ta progression (mémorisation, fiches lues, journal, séances, examens blancs), sans retour possible. Pense d\'abord à la sauvegarder.\n\nPour confirmer, tape EFFACER :')||'').trim()==='EFFACER'){prog={};save();lues={};saveLues();journal=[];put(JKEY,journal);seances=[];saveSeances();examens=[];saveExamens();jeux={};saveJeux();updateBadges();render();}};

// Import du fichier privé de partenaires préparé par Claude (jamais publié dans le dépôt).
document.getElementById('partBtn').onclick=()=>document.getElementById('partFile').click();
document.getElementById('partFile').onchange=async e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  let data;try{data=JSON.parse(await file.text());}catch{alert('Fichier illisible : ce n\'est pas un JSON valide.');return;}
  const l=data&&data.app==='millevignes-partenaires'&&Array.isArray(data.partenaires)&&data.partenaires;
  const ok=l&&l.every(p=>p&&typeof p.nom==='string'&&p.nom.length<=120&&(!p.points||Object.values(p.points).every(v=>Array.isArray(v)&&v.length===2&&v.every(Number.isFinite)))&&(!p.vins||Array.isArray(p.vins)&&p.vins.every(v=>v&&typeof v.cuvee==='string'&&v.liens&&typeof v.liens==='object'&&(!v.questions||Array.isArray(v.questions)&&v.questions.every(x=>x&&typeof x.q==='string'&&typeof x.r==='string'))&&(!v.a_dire||Array.isArray(v.a_dire))&&(!v.sources||Array.isArray(v.sources)))));
  if(!ok){alert('Ce fichier n\'est pas un fichier de partenaires Mille Vignes.');return;}
  if(!confirm(`Importer ${l.length} partenaire(s) ? Ils restent dans ce navigateur seulement et remplacent la liste actuelle (${partenaires.length}).`))return;
  partenaires=l;try{localStorage.setItem(PAKEY,JSON.stringify(l));}catch{alert('Impossible d\'enregistrer les partenaires dans ce navigateur.');}
  majCave();fitCache.clear();render();
};

/* ============ TYPOGRAPHIE ============ */
// Espace insécable avant ? ! : ; % » et après « : la ponctuation ne passe plus seule à la ligne (« (65 » puis « %) »).
// Appliquée à l'affichage, à tout texte ajouté à la page ; les schémas, listes déroulantes et champs ne sont pas touchés.
const INSEC=/(«) | (?=[?!:;%»])/g;
function insecables(n){
  if(n.nodeType===1){const w=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);while(w.nextNode())insecables(w.currentNode);return;}
  if(n.nodeType!==3||!n.nodeValue.includes(' ')||n.parentElement?.closest('svg,option,textarea,script,style'))return;
  const v=n.nodeValue.replace(INSEC,(m,g)=>g?g+' ':' ');if(v!==n.nodeValue)n.nodeValue=v;
}
insecables(document.body);new MutationObserver(rs=>rs.forEach(r=>r.addedNodes.forEach(insecables))).observe(document.body,{childList:true,subtree:true});

/* ============ MOTS DU LEXIQUE DANS LES TEXTES ============ */
// Souligne la première occurrence de chaque terme du lexique dans les textes de lecture ; un toucher ouvre sa définition.
// Pas dans les énoncés d'exercice (la définition soufflerait la réponse), ni dans l'onglet Lexique lui-même.
const LEX_SEL='.synth,.mnemo,.fb-expl,.lede,.ess,.lead,.proj-synth,.cours p,.cours li,.cours td';
const LEX_FORMES=LEXIQUE.flatMap(t=>t.terme.replace(/\(.*?\)/g,'').split(/[\/,]/).map(s=>s.trim()).filter(Boolean).map(f=>[f,t])).sort((a,b)=>b[0].length-a[0].length);
const LEX_RE=new RegExp(`(?<!\\p{L})(${LEX_FORMES.map(([f])=>f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})(?:s|x)?(?!\\p{L})`,'giu');
const lexDe=m=>{const n=normalize(m);return (LEX_FORMES.find(([f])=>n===normalize(f)||n===normalize(f)+'s'||n===normalize(f)+'x')||[])[1];};
function lexMarquer(zone){
  if(!LEXIQUE.length||zone.closest?.('.lexique'))return;
  const vus=new Set([...zone.querySelectorAll('.lx')].map(s=>s.dataset.terme)); // un terme souligné une fois par écran (avant : dans chaque paragraphe et case de tableau)
  zone.querySelectorAll(LEX_SEL).forEach(bloc=>{
    if(bloc.dataset.lx||bloc.closest('.lexique'))return;bloc.dataset.lx=1;
    const w=document.createTreeWalker(bloc,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('a,button,summary,.lx,svg')?2:1}),noeuds=[];
    while(w.nextNode())noeuds.push(w.currentNode);
    noeuds.forEach(n=>{
      const txt=n.nodeValue,frag=document.createDocumentFragment();let i=0,touche=false;
      for(const m of txt.matchAll(LEX_RE)){const t=lexDe(m[0]);if(!t||vus.has(t.terme))continue;vus.add(t.terme);touche=true;
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
