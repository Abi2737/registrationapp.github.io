'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "1edee4cd9064f84cbbb5314ee2e33972",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "292093b3bc974bee338076989c218467",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fd402f341a63bfdd9b1a3ded14acbc3",
".git/logs/refs/heads/main": "5fd402f341a63bfdd9b1a3ded14acbc3",
".git/logs/refs/remotes/origin/main": "7d314dc2c67dbbef4019dfb00ec687d9",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/23f81674e8d5e4ea351768ebfc289eb32f3856": "ca0d0e6af396ad4d1d06d303e2e76b3a",
".git/objects/1b/3583cab9749f9482c248e849c3fc3b107adc19": "72c5ae299b27257bd56bb72edba100f0",
".git/objects/21/58d89193e1bae32565fdab680a10ee637461b6": "9d68ea4b23c93c0f6d19ba2f9e743470",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "c16ef64190ef1ed70c668dbbea827c1d",
".git/objects/2c/eac67490f8feb05ee7f65501c44077bf8ecfe8": "54962435cd8312520e912f1a6baa5f31",
".git/objects/2f/debd8e85db3d0c47ce7854c2b8ea5677cc502a": "89a8de946f52762d33fc29457c33d627",
".git/objects/35/cf971c532f6548beb437ea7766155f969d3581": "e8bc7ecf0467c3d9e93533c4336263e9",
".git/objects/37/1d020f6214443abf8e4a42be3501c0c00d6e98": "f5eda2e8fac3b36254d8f360936d2998",
".git/objects/39/cbbba3f9a0fa092261200b0c8a2190bda3a6c3": "32c551e1ea7cee2e66f12a78097f01b6",
".git/objects/42/a47ace8659bd96e0bd8a47636df94b340cbc55": "8eec67b67d473287d78b77fb92824213",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/8dc38d0dda23c4073f16866f1ac08a5c13c613": "88fdb83eaee8537dc56a3604e24dc468",
".git/objects/4d/643aa895ff101466670d125b05acc99ea0afc1": "a63092339d84e580e03f870b374d80b7",
".git/objects/4e/1830c1cde35859da80aa2dac44981af5c3acf9": "a88922a2787033d9f366526e5f025ad3",
".git/objects/4f/f3f93c413650af0f19456528262bc7a21f7234": "a482921d5444e7e864eef0ebed66884a",
".git/objects/54/d225c32b8500b6e18a50f95a9794f7592bbc78": "83861668cc21e5d8455534c5a8f84f4c",
".git/objects/56/6f7e98ced3ab0f6bbddce871429b9ebaf03cbc": "b950ba32c279b052aa2cf8de02818617",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/5d/20f8dbfd89fdb92141946e3da2ac252e4799c6": "48a922eacfcd1542c695610f15238f17",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/5e/3c3e53e1f1048b5989ab886bec46f064910b3c": "02296931bd481b9910027037d65b7623",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/69/37ce0a643f75177b0106ad0114a3e5b013500f": "9319490c7bb9085b6a4e123da92b8f1d",
".git/objects/69/e64a158f8d5491f2542060207847f8de6d488e": "f3f70ebbd75dc8bdc44de76ebfb33b55",
".git/objects/6b/2c8048ec5348fa466da90802773ee65940ed58": "8d8072e9a64ce7f87a2858777177620e",
".git/objects/6b/4b76bf0f6599f1c5936b00169811b339a3cd3a": "c93d9ad0a4fd84b5e892e2ee8a1db4d8",
".git/objects/72/60132a6fe8c0e1817e0a8567e296fac8dea15b": "79108235af1b95e2bc1b8afc23e33371",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/77/6a08056f30fc6e1935eb84bddda9ce234a2f24": "24c708512947eae1d1b74305bb548c55",
".git/objects/77/fec61d47f88f12b61ef865b8ac4466c014dccf": "cf53a67ca4f0622b7adff1df59dfd6fc",
".git/objects/78/eff0ddade986c484aa9f947e0fae3dcf4bb202": "7427829bd4f68c9ea581779264f548c9",
".git/objects/7c/84bfd8379ca18d400fee3277656a37475fb216": "4078de1da4148ebc06c413f5b10e2736",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/87/4407f87bbc632543dc2da95ba09ef0ba81a092": "ab7106c587482e3ccea472bd6c8877bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b20bf16b778ae2a53f30f0364285adba41a4b0": "9556f26808c7ef89101179e397152ba6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/61735d5c7c044432071cf148dec8f99330b9b1": "52169c2f72a1e2874ad1412848ce8820",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9c/95de1f547e5d5f38dfee0a7206945a170c4f94": "3083dbaeaa4552b3120cd5208edf4ae1",
".git/objects/9d/d489aa0d3f5f6d3c6dbc6f5dfb333d9e2e8bf2": "9c46a7c6fa1dce2564b78e7f61130433",
".git/objects/a3/a033c6408c3cc4b462f4709000c55461906108": "d5581d5442a37212829b49c0335334a9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/14c1c10283b4dfbb6b078dd5f679c1c547cd66": "a761d4cc69299cf526e5c3f774ae092a",
".git/objects/b5/7eb1320cce7bfd4b5e00674a3c1b0ee110c5c2": "d09f22512493f508c1e1bc7befc9ea63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/fb4cdbb51556f53fb30244915124dbd9c2e12b": "98a106bf92f063e36e59efdf83d5e264",
".git/objects/bc/f403466c351904f466743a8831eb67ddf0aa74": "2a66b05c8b5bea0c26593ffae1082b88",
".git/objects/be/5c7c4c2f766bae80c3d70538464437fe19aca5": "a46452f00facae066818c4f0bdf86717",
".git/objects/c3/ddfabe2697cc451c5efa4b668bc2f788c9d550": "546acd1c70afb3609d2f540b15da37e1",
".git/objects/ce/382ef0d8578cad2f226809f66573c46ccf84f5": "153998e2fc3c26dd8bccf49ec25fe068",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4743ae106873ae3fb20663403214d6af1beb41": "c6d99a0c11f024e56aa3048fa9506ebc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "843777b6e06e03fb489f230185e7113b",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/e8/29f6f3275b68f972d186eee233d37f16f40436": "759fe6446654701850ebbff4ab5a2b8c",
".git/objects/e8/ab2aac6ff66fdfd4be1cb352db4a7554546453": "5f2971d0172e41f176b3fdd0dc88441c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/92c2d98d84a57eb313221dd4200f071cb7751e": "997ab014054aefad9f5963b5d88af7cf",
".git/objects/f9/5d37befcbe648ac3a5431fc7012e357fecf9ad": "c0dab2f5bb3ae92b98f8be2da0102969",
".git/objects/fd/588e6cbdef7ce17414ad682b3fb2922cd41ef7": "dcef0f26feb5b26609d54fb2f26fd33c",
".git/objects/fd/a11c2bcf19e6cadae9fe26b5eb4d2d0e6a57f9": "d1220c9139def1427e1be81cb32049d9",
".git/refs/heads/main": "5f33bff0bde57cd526602d979285f977",
".git/refs/remotes/origin/main": "5f33bff0bde57cd526602d979285f977",
"assets/AssetManifest.bin": "119070e593e27341b80efd8401e1c785",
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
"flutter_bootstrap.js": "8317d806ba19d5722f727b075544af3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d91c7ef407eca44c58d9eeb458918c9",
"/": "2d91c7ef407eca44c58d9eeb458918c9",
"main.dart.js": "acae02e82a9ae446896f734f41ae80cb",
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
