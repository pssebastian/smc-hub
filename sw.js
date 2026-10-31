/**
 * SMC Hub - Service Worker for Progressive Web App (PWA)
 * Enables offline access, fast loading, and native app installability.
 */

const CACHE_NAME = 'smc-hub-v4';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/forms-data.js',
  './js/guidelines-data.js',
  './js/accounting-data.js',
  './images/logo-light.png',
  './images/logo-dark.png',
  './images/favicon.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/icon-maskable-192x192.png',
  './icons/icon-maskable-512x512.png',
  './icons/apple-touch-icon.png',
  './icons/icon.svg'
];

// 1. Install Event: Pre-cache application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching partial error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Network-first with cache fallback
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Skip chrome-extension or unsupported protocols
  if (!req.url.startsWith('http://') && !req.url.startsWith('https://')) return;

  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        // If valid network response, clone and cache it for offline use
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Offline: try serving from cache
        const cachedResponse = await caches.match(req);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If requesting a page/navigation offline, fallback to index.html
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }

        return new Response('Network error and asset not cached.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      })
  );
});
