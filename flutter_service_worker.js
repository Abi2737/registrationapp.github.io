'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "119070e593e27341b80efd8401e1c785",
"assets/AssetManifest.bin.json": "a3e27878b4435a25f0b5c2a5eb29db7b",
"assets/AssetManifest.json": "1be8fc405a12ec767461fa95aae9a50c",
"assets/assets/images/banner-new.jpg": "8bfadc3d6cccd649a6ead90fbfbd61b4",
"assets/assets/images/banner.jpg": "8c59e0afeeccfe785c7f415719bc4603",
"assets/assets/images/icon-01.png": "2139df392c01dcf5768128edab0abef6",
"assets/assets/images/workshop1.png": "0347ff99e24c2bef5132fd964062026c",
"assets/assets/images/workshop2.png": "d36077048964075225cb96631d29cd06",
"assets/FontManifest.json": "0609a677a49987c668608ea0a47206f1",
"assets/fonts/MaterialIcons-Regular.otf": "1eb232720c20b5fba442b654a2cb0fdf",
"assets/images/banner-new.jpg": "8bfadc3d6cccd649a6ead90fbfbd61b4",
"assets/images/banner.jpg": "8c59e0afeeccfe785c7f415719bc4603",
"assets/images/icon-01.png": "2139df392c01dcf5768128edab0abef6",
"assets/images/workshop1.png": "0347ff99e24c2bef5132fd964062026c",
"assets/images/workshop2.png": "d36077048964075225cb96631d29cd06",
"assets/NOTICES": "8cc61d4606c76d395517e0a80472a74d",
"assets/packages/widget_toolkit/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/widget_toolkit/icons/add-disabled.svg": "a79969f7676361fe5fb836d69b8b0a48",
"assets/packages/widget_toolkit/icons/add.svg": "c43da96c40ebbee21131d27d897df870",
"assets/packages/widget_toolkit/icons/arrow-left.svg": "ccdf377f3bc421ab853345cc68b8ed65",
"assets/packages/widget_toolkit/icons/arrow-right-square.svg": "a8071d94e7df80d23b508a04ff23e955",
"assets/packages/widget_toolkit/icons/camera.svg": "fe24322278ae0b1d7cb6a5f0ad4fc747",
"assets/packages/widget_toolkit/icons/check.svg": "6cfdc18af9d26aaa56adc9b2d8a920bc",
"assets/packages/widget_toolkit/icons/check_circle.svg": "6d6131735d725f00b5c6f90f21c22f4b",
"assets/packages/widget_toolkit/icons/close-qr-scanner.svg": "535b5a058f8bfe977f00933374d43cad",
"assets/packages/widget_toolkit/icons/close.svg": "753bd8af9104d2e87ac186d6a606b50b",
"assets/packages/widget_toolkit/icons/danger.svg": "fbd79912523011f191490727e24c273a",
"assets/packages/widget_toolkit/icons/edit-pen.svg": "eaf5b3e4a31394c82fd4d17cb1d8fafb",
"assets/packages/widget_toolkit/icons/educate.svg": "7e8fe355d5e5d64b475e97bff031aecc",
"assets/packages/widget_toolkit/icons/great_news.svg": "b04ba199fe092294a1319717c291d580",
"assets/packages/widget_toolkit/icons/info-circle.svg": "3d1208d5a5a61c02645a04620411834f",
"assets/packages/widget_toolkit/icons/loading.svg": "37a4c2b321680a3c4b8928919430f347",
"assets/packages/widget_toolkit/icons/message.svg": "3214c4eb21adbe621043059fb1edb545",
"assets/packages/widget_toolkit/icons/qr-scan-area.svg": "5219720faf108d4d3694c4f6b5c3e0f8",
"assets/packages/widget_toolkit/icons/tick-circle-success.svg": "6d6131735d725f00b5c6f90f21c22f4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "71fbb1022d54b9b1d67f750c9ce76290",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d91c7ef407eca44c58d9eeb458918c9",
"/": "2d91c7ef407eca44c58d9eeb458918c9",
"main.dart.js": "bd001449b5e6ee9ee969c9bf7f82cedc",
"manifest.json": "f5f7007e58fb5afb1c90a227efcbdfd5",
"version.json": "33326113603c0c954b00fd27f37ca418"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
