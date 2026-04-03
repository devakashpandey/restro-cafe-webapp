// Dummy service worker to stop 404 errors during development
// This file is empty and doesn't do anything.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});
