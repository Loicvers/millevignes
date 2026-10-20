// Cache des fichiers du site : le site s'ouvre hors ligne. Chaque fichier est servi depuis le cache puis
// remis à jour en arrière-plan : la nouvelle version apparaît au rechargement suivant.
// Ajouter ici tout nouveau fichier du site (un test compare cette liste à index.html).
const CACHE = "mv-v1";
const FICHIERS = [
  "./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "fonts/cormorant.woff2", "fonts/cormorant-italic.woff2", "fonts/inter.woff2",
  "fiches.js",
  "fiches/016-domestication.js", "fiches/040-nature.js", "fiches/076-ecologie.js", "fiches/104-climat.js",
  "fiches/124-geologie.js", "fiches/150-terroir.js", "fiches/203-vinification.js",
  "data/lexique.js", "data/recits.js", "data/mille-vignes-sommaire.json", "exercices.js",
];

self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const reseau = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; });
    if (hit) { reseau.catch(() => {}); return hit; }
    return reseau;
  }));
});
