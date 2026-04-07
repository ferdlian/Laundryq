const CACHE_NAME = 'laundryq-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Proses Install: Menyimpan file penting ke dalam cache memori HP
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache berhasil dibuka');
      return cache.addAll(urlsToCache);
    })
  );
});

// Proses Fetch: Mengambil data dari cache jika sedang offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Jika file ada di cache, tampilkan. Jika tidak, ambil dari internet.
      return response || fetch(event.request);
    })
  );
});
