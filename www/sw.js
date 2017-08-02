(global => {
  'use strict';

  var ver = new Date().toISOString().substring(0, 7)
  var versionCache = '-RumahSakitJakarta-' + ver

  // Load the sw-tookbox library.
  importScripts('/RumahSakitJakarta/sw/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  // global.toolbox.options.debug = true;
  toolbox.precache([
    '/static/images/RumahSakitJakarta-logo.png', 
    '/static/images/loading.gif'
    ]);

  toolbox.router.get('/RumahSakitJakarta/sw/*', global.toolbox.cacheFirst, {
      cache: {
          name: 'serviceWorkerCacheVue' + versionCache,
          maxEntries: 200
      }
  });
  toolbox.router.get('/RumahSakitJakarta/**/*.{css}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticCssCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/RumahSakitJakarta/**/*.{js}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticJsCacheVue' + versionCache,
      maxEntries: 200
    }
  });  
  toolbox.router.get(/\.(?:png|gif|jpg)$/, global.toolbox.cacheFirst, {
    cache: {
      name: 'imageCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/RumahSakitJakarta/(.*)', toolbox.cacheFirst, {
    cache: {
      name: 'staticOtherVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'googleapis',
      maxEntries: 20,
    },
    origin: /\.googleapis\.com$/
  });  
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'cloudflare',
      maxEntries: 20,
    },
    origin: /\.cloudflare\.com$/
  }); 
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'assets-cdn-github',
      maxEntries: 100,
    },
    origin: /\.assets-cdn\.github\.com$/
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'jakarta-api',
      maxEntries: 200,
      maxAgeSeconds: 518400,
    },
    origin: /\.api\.jakarta\.go\.id$/
  });

  // Boilerplate to ensure our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);
