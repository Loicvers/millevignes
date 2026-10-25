// Fichier privé des partenaires : ajoute à chaque domaine ses cuvées (stock du caviste) reliées aux fiches du site.
// Usage : node tools/cave.mjs mes-partenaires.json cuvees.json > mes-partenaires.json
// cuvees.json (privé, hors dépôt) : [{ partenaire, cuvee, formats, couleur, cepages:[{nom,pct}], cepages_status, cepages_src,
//   faits:[{ tag, detail, src, status, portee }] }] — recherche vérifiée (tags : vocabulaire TAGS ci-dessous).
// Liens produits, par id de fiche : k = "appel" (nom de la cuvée), "cepage" (assemblage), "notion" (fait documenté) ; d = détail ; s = ok|warn.
import fs from "fs";
import { loadFichesJs } from "./migrate-fiches.mjs";

// Tag de recherche → fiches qui expliquent la notion.
export const TAGS = {
  "sol:schiste": [175], "sol:calcaire": [170], "sol:marne": [170], "sol:kimmeridgien": [213, 170], "sol:silex": [291],
  "sol:craie-tuffeau": [169], "sol:argile": [168], "sol:sable": [168], "sol:gres": [168], "sol:loess": [168],
  "sol:granite": [163], "sol:gneiss": [176], "sol:galets-roules": [171], "sol:graves": [171], "sol:volcanique": [164],
  "vinif:maceration-carbonique": [577, 236], "vinif:semi-carbonique": [577], "vinif:vendange-entiere": [577],
  "vinif:methode-traditionnelle": [583], "vinif:methode-ancestrale": [636], "vinif:petillant-naturel": [636],
  "vinif:sur-lie": [241], "vinif:mutage": [635], "vinif:rancio-oxydatif": [635, 238], "vinif:vendanges-tardives": [469],
  "vinif:pourriture-noble": [346], "vinif:passerillage": [235], "vinif:rose-pressurage-direct": [351], "vinif:rose-saignee": [351],
  "vinif:levures-indigenes": [231], "vinif:sans-sulfites-ajoutes": [121], "vinif:non-dose": [404],
  "vinif:blanc-de-blancs": [464], "vinif:blanc-de-noirs": [464], "vinif:maceration-pelliculaire": [350],
  "vinif:maceration-longue": [587], "vinif:vins-de-reserve": [465],
  "elevage:fut-chene": [240], "elevage:foudre": [242], "elevage:cuve-beton": [242], "elevage:amphore": [242],
  "elevage:inox": [242], "elevage:batonnage": [241],
  "culture:bio-certifie": [522], "culture:conversion-bio": [522], "culture:biodynamie": [522, 96], "culture:hve": [117],
  "culture:vieilles-vignes": [634], "culture:vendange-manuelle": [525], "culture:enherbement": [112], "culture:traction-animale": [115],
  "classement:grand-cru-classe-saint-emilion": [430], "classement:premier-cru-bourgogne": [386], "classement:cru-bourgeois": [424],
};
// Cépage (nom donné par la recherche) → fiche profil de cépages.js.
export const CEPAGES = {
  "cabernet sauvignon": 377, "merlot": 378, "cabernet franc": 498, "petit verdot": 610, "malbec": 500, "cot": 500,
  "semillon": 510, "muscadelle": 605, "sauvignon blanc": 373, "sauvignon": 373, "chenin": 374, "chenin blanc": 374,
  "melon": 511, "melon de bourgogne": 511, "pineau d aunis": 622, "grolleau": 623, "chardonnay": 372, "pinot noir": 376,
  "aligote": 601, "gamay": 499, "meunier": 514, "pinot meunier": 514, "riesling": 597, "gewurztraminer": 506,
  "pinot gris": 507, "sylvaner": 598, "pinot blanc": 599, "auxerrois": 599, "syrah": 379, "marsanne": 504, "roussanne": 504,
  "viognier": 505, "grenache": 380, "grenache noir": 380, "grenache blanc": 615, "carignan": 381, "mourvedre": 502,
  "cinsault": 503, "clairette": 612, "bourboulenc": 614, "macabeu": 616, "macabeo": 616, "vermentino": 513, "rolle": 513,
  "tannat": 501, "mauzac": 609, "chasselas": 600, "ugni blanc": 606, "colombard": 607,
};
const MUSCATS = 508;

export const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/[^a-z0-9]+/g, " ").trim();
// Même règle que l'encadré du site (app.js, memeAppel) : « Saint-Émilion grand cru » → Saint-Émilion, « Graves de Vayres » ≠ Graves.
const memeAppel = (a, appel) => { const x = norm(a), y = norm(appel); return x === y || (x.startsWith(y + " ") && !/^(de|du|des|d) /.test(x.slice(y.length + 1))); };
const sansMention = c => c.replace(/^\s*(aoc|aop|igp|vdp)\s*[-–]?\s*/i, "");

export function relier(c, region, fiches) {
  const liens = {}, add = (id, l) => { if (!liens[id] || liens[id].k !== "notion") liens[id] = l; };
  const appels = fiches.filter(f => f.geo && f.geo.appel);
  let hit = appels.filter(f => memeAppel(sansMention(c.cuvee), f.geo.appel));
  // Les vins d'Alsace se vendent sous le nom du cépage, sans l'appellation dans le nom.
  if (!hit.length && region === "Alsace" && !/cr[ée]mant/i.test(c.cuvee)) hit = appels.filter(f => f.geo.appel === "Alsace");
  for (const f of hit) add(f.id, { k: "appel", t: "", d: "", s: "ok" });
  if (/^\s*(igp|vdp|vin de france)\b/i.test(c.cuvee)) add(572, { k: "appel", t: "", d: "", s: "ok" });
  for (const g of c.cepages || []) {
    const id = /^muscat/.test(norm(g.nom)) ? MUSCATS : CEPAGES[norm(g.nom)];
    if (id) add(id, { k: "cepage", t: "", d: g.pct ? `${g.pct} % de l'assemblage` : "", s: c.cepages_status === "ok" ? "ok" : "warn", src: c.cepages_src || [] });
  }
  for (const x of c.faits || []) for (const id of TAGS[x.tag] || [])
    if (!liens[id] || liens[id].k !== "notion" || x.status === "ok") liens[id] = { k: "notion", t: x.tag, d: x.detail, s: x.status === "ok" ? "ok" : "warn", src: x.src || [] };
  return liens;
}

if (process.argv[1] && process.argv[1].endsWith("cave.mjs")) {
  const [pf, cf] = process.argv.slice(2);
  const data = JSON.parse(fs.readFileSync(pf, "utf8")), cuvees = JSON.parse(fs.readFileSync(cf, "utf8"));
  const fiches = loadFichesJs("fiches.js").FICHES, ids = new Set(fiches.map(f => f.id));
  for (const id of [...Object.values(TAGS).flat(), ...Object.values(CEPAGES), MUSCATS, 572]) if (!ids.has(id)) throw new Error("fiche absente : " + id);
  for (const t of new Set(cuvees.flatMap(c => (c.faits || []).map(x => x.tag)))) if (!TAGS[t]) console.error("tag inconnu ignoré :", t);
  for (const p of data.partenaires) {
    p.vins = cuvees.filter(c => c.partenaire === p.nom).map(c => ({ cuvee: c.cuvee, couleur: c.couleur || "", formats: c.formats || [], cepages: c.cepages || [], liens: relier(c, p.region, fiches) }));
  }
  const orphelines = cuvees.filter(c => !data.partenaires.some(p => p.nom === c.partenaire));
  if (orphelines.length) throw new Error("cuvées sans partenaire : " + orphelines.map(c => c.cuvee).join(", "));
  process.stdout.write(JSON.stringify(data, null, 1));
}
