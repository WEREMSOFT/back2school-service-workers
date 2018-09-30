const cacheName = 'v1';

const cacheAssets = [
    'index.html'
];

self.addEventListener('install', e => {
    console.log('installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('caching all');
                cache.addAll(cacheAssets);
            })
            .then(() => {
                self.skipWaiting();
            })
    );
});

self.addEventListener('activate', e => {
    console.log('activated');
});

self.addEventListener('fetch', e => {
    console.log('fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});