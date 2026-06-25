var CACHE = 'lyt-v6';
var APP_SHELL = [
  '/visita-obra/lyt-app-fase1/lyt-app/',
  '/visita-obra/lyt-app-fase1/lyt-app/index.html',
  '/visita-obra/lyt-app-fase1/lyt-app/manifest.json',
  '/visita-obra/lyt-app-fase1/lyt-app/icons/icon-192.png',
  '/visita-obra/lyt-app-fase1/lyt-app/icons/icon-512.png'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(APP_SHELL);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);

  // Llamadas al script de Google: siempre red, sin cache
  if (url.hostname === 'script.google.com') {
    e.respondWith(fetch(e.request));
    return;
  }

  // App shell: cache primero, red como fallback
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var networkFetch = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});
