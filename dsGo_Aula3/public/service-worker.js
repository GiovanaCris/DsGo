// Nome do cache
const CACHE_NAME = 'dsgo-cache-v1';

// Lista de arquivos para armazenar no cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];

// Instalação do Service Worker (armazenando arquivos)
self.addEventListener('install', event => {
    console.log('[ServiceWorker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[ServiceWorker] Cacheando arquivos iniciais');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Ativação (limpeza de caches antigos)
self.addEventListener('activate', event => {
    console.log('[ServiceWorker] Ativando...');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log('[ServiceWorker] Removendo cache antigo:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Intercepta requisições de rede
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return (
                response ||
                fetch(event.request).catch(() =>
                    caches.match('/index.html')
                )
            );
        })
    );
});


// Interceptação de requisições (offline)
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(resp => {
//       return resp || fetch(event.request);
//     })
//   );
// });
