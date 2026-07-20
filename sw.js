const CACHE='scotland-roadbook-v231';
const CORE=[
  './',
  './index.html',
  './styles.css',
  './app.js?v=231',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './images/loch-lomond.jpg',
  './images/glencoe.jpg',
  './images/skye.jpg',
  './images/harris.jpg',
  './images/pitlochry.jpg',
  './images/stirling.jpg',
  './images/culross.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.mode === 'navigate') return caches.match('./index.html');
        throw new Error('Offline resource unavailable');
      }))
  );
});
