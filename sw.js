const CACHE_NAME = 'kal-v1';
const urlsToCache = [
  '/Kal_/',
  '/Kal_/index.html',
  '/Kal_/icon-192.png',
  '/Kal_/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
