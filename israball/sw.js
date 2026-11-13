// Offline cache for the Israball website (desktop install). Bump VERSION when files change.
const VERSION = "israball-site-v5";
const IDS = ["pb10", "gan65", "cable2m", "hub7", "scale", "thermo", "lamp", "headlamp", "inflator", "vac", "mount", "bits"];
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./app/icons/icon.svg", "./app/icons/icon-192.png", "./app/icons/icon-512.png"].concat(IDS.map((i) => "./img/" + i + ".jpg"));
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== VERSION).map((x) => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match("./index.html"))));
});
