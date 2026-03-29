const CACHE_VERSION = 'v15'; // Change this string to trigger the banner!
const CACHE_NAME = `mypetshop-cache-${CACHE_VERSION}`;

const ASSETS = [
    '/mypetshop2/',
    '/mypetshop2/index.html',
    '/mypetshop2/manifest.json',
    '/mypetshop2/images/dog.png',
    '/mypetshop2/images/cat.png',
    '/mypetshop2/images/curler-hamster-icon.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

// The "text2.txt" fix: Immediate takeover for Safari
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((k) => {
                if (k !== CACHE_NAME) return caches.delete(k);
            }));
        }).then(() => self.clients.claim()) 
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

self.addEventListener('message', (e) => {
    if (e.data && e.data.action === 'skipWaiting') self.skipWaiting();
});
