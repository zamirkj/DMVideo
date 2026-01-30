const cacheName = 'dbypass-v2';
const assets = [
  './',
  './index.html',
  './player.html',
  'https://geo.dailymotion.com/libs/player.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
