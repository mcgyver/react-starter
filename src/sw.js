self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("starter").then((cache) => {
            return cache.addAll([
                '/bundle.js',
                '/img/favicon.png',
                '/img/icon-72x72.png',
                '/img/icon-96x96.png',
                '/img/icon-128x128.png',
                '/img/icon-144x144.png',
                '/img/icon-152x152.png',
                '/img/icon-192x192.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event)  => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});