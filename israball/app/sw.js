// Offline shell for the Israball app. Bump VERSION when files change.
const VERSION = "israball-app-v6";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./img/pb10.jpg", "./img/gan65.jpg", "./img/cable2m.jpg", "./img/hub7.jpg", "./img/scale.jpg", "./img/thermo.jpg", "./img/lamp.jpg", "./img/headlamp.jpg", "./img/inflator.jpg", "./img/vac.jpg", "./img/mount.jpg", "./img/bits.jpg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
