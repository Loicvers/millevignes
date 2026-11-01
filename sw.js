// Cache des fichiers du site : le site s'ouvre hors ligne. Chaque fichier est servi depuis le cache, sans mise à jour
// en arrière-plan (elle pouvait mêler deux versions) : une nouvelle version = un nouveau nom de cache, installé en entier.
// Ajouter ici tout nouveau fichier du site (un test compare cette liste à index.html).
const CACHE = "mv-ac5fc0c62f";
const FICHIERS = [
  "./", "index.html", "style.css", "app.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "fonts/cormorant.woff2", "fonts/cormorant-italic.woff2", "fonts/inter.woff2",
  "fiches.js",
  "fiches/016-domestication.js", "fiches/040-nature.js", "fiches/076-ecologie.js", "fiches/104-climat.js", "fiches/124-geologie.js", "fiches/150-terroir.js", "fiches/203-vinification.js", "fiches/244-degustation.js", "fiches/288-service.js", "fiches/331-conclusion.js", "fiches/cepages.js", "fiches/fr-alsace-appellations.js", "fiches/fr-alsace.js", "fiches/fr-beaujolais-appellations.js", "fiches/fr-beaujolais.js", "fiches/fr-bordeaux-appellations.js", "fiches/fr-bordeaux.js", "fiches/fr-bourgogne.js", "fiches/fr-champagne-appellations.js", "fiches/fr-champagne.js", "fiches/fr-charentes.js", "fiches/fr-corse-appellations.js", "fiches/fr-corse.js", "fiches/fr-france.js", "fiches/fr-jura-appellations.js", "fiches/fr-jura.js", "fiches/fr-languedoc-appellations.js", "fiches/fr-languedoc.js", "fiches/fr-loire-appellations.js", "fiches/fr-loire.js", "fiches/fr-lorraine.js", "fiches/fr-provence-appellations.js", "fiches/fr-provence.js", "fiches/fr-rhone-appellations.js", "fiches/fr-rhone.js", "fiches/fr-roussillon-appellations.js", "fiches/fr-roussillon.js", "fiches/fr-savoie-appellations.js", "fiches/fr-savoie.js", "fiches/fr-sud-ouest-appellations.js", "fiches/fr-sud-ouest.js", "fiches/monde-afrique-du-sud.js", "fiches/monde-allemagne.js", "fiches/monde-argentine.js", "fiches/monde-australie.js", "fiches/monde-autriche.js", "fiches/monde-canada.js", "fiches/monde-chili.js", "fiches/monde-espagne.js", "fiches/monde-etats-unis.js", "fiches/monde-grece.js", "fiches/monde-hongrie.js", "fiches/monde-italie.js", "fiches/monde-nouvelle-zelande.js", "fiches/monde-portugal.js",
  "data/lexique.js", "data/recits.js", "data/mille-vignes-sommaire.json", "exercices.js",
];

self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    return hit || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; });
  }));
});
