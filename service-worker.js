const CACHE_NAME = 'quicktools-v5';
const APP_SHELL = [
  './',
  './index.html',
  './tools/Shift_calculation.html',
  './tools/Energy_calculation.html',
  './tools/Time_conversion.html',
  './tools/ramping-field.html',
  './manifest.webmanifest',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async (path) => {
      const response = await fetch(new Request(path, { cache: 'reload' }));
      if (!response.ok) throw new Error(path);
      await cache.put(path, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: 'window' });
    await Promise.all(windows.map((client) => (
      typeof client.navigate === 'function' ? client.navigate(client.url) : undefined
    )));
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request);
      if (response && response.ok && response.type === 'basic') {
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      return new Response('离线且没有缓存', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
