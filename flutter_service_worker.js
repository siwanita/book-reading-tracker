'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f744ab7a5e6f2a23a0fd4a34695cb70d",
"assets/assets/images/adidas.jpg": "5ad215d4c5b405622a2d7c6d557cfcf2",
"assets/assets/images/apple.jpg": "c6c4216061024a8736829190962caf12",
"assets/assets/images/app_icon.png": "a533f055b3bf5d0ad94ced2b75ebbfeb",
"assets/assets/images/app_language.png": "6234b01faaba75706a614556ae65fc1e",
"assets/assets/images/blank.jpg": "d68e763c825dc0e388929ae1b375ce18",
"assets/assets/images/carousel_1.png": "228eb60c57a541a8a448197172725e17",
"assets/assets/images/carousel_2.png": "00adf6eb351cdebb1e6a1a48486b1bc9",
"assets/assets/images/carousel_3.png": "f0f0176c83171214d4a9a5c6c4f2dfc7",
"assets/assets/images/carousel_4.png": "2d2f81ed82c4630287d4341950faf55a",
"assets/assets/images/cat_beauty.jpg": "bcdf4cbb580aa0097b2ec37ccd016dd3",
"assets/assets/images/cat_clothes.jpg": "a0655a7a587996a68234741bb6f2f6b8",
"assets/assets/images/cat_furniture.jpg": "c4bb735d8ba59266c4554402b6df19a4",
"assets/assets/images/cat_laptops.png": "a8275b2effe6a4b256375ebaf1cd52f5",
"assets/assets/images/cat_phones.png": "f6a9a76379c353e17ed0a8c37092a48e",
"assets/assets/images/cat_shoes.jpg": "9f7035ed9e69c58f3c47132d6e66ade9",
"assets/assets/images/cat_watches.jpg": "c0bf4f02f50e5fa2865bf210372865e8",
"assets/assets/images/dell.jpg": "f6ed52d6e694596751ebf7e7e0dd7354",
"assets/assets/images/empty_cart.png": "db5af65f54630bd56f7828340fd08441",
"assets/assets/images/empty_wishlist.png": "5316e6aa5db0d65a39e1afba8bb7caae",
"assets/assets/images/flutter-in-action.png": "4dc55b114074265ce34d60aafa91beaf",
"assets/assets/images/flutter-logo.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/flutter.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/huawei.jpg": "bd858f245d4cd0993c01808f8210b706",
"assets/assets/images/h_m.jpg": "8b630bf3b123d7bf384eb5efcb985f74",
"assets/assets/images/nike.jpg": "3cd0789a53745584b9d603eca446305e",
"assets/assets/images/placeholder.png": "7daad52d070f2e222d7096bb2c897b46",
"assets/assets/images/profile_image.png": "d7cdfd1779347075b3b6b49e2325317f",
"assets/assets/images/programming-rust.jpeg": "ff9fee842251e722cf5ef3d264585aa0",
"assets/assets/images/samsung.jpg": "3d71366d1d118fc41354c0323174f108",
"assets/assets/images/warning.png": "32535e7435974d51ce9c9fd677249813",
"assets/FontManifest.json": "0d590f0b85d73e636b8191d0accb5845",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "75f8b5b00e3a1a2b4257677447ef4770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "7a74f61f77cd9424f01f2a03922cd195",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ada3c4c2aaf5beada1fd8e25ad6ad09",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6ffb39c8cb9e8d35ebbc2e35d2c34da5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4fc935dad351697db8e181de23cfec50",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6f2b4776bcf79d0b520b0c5cf70195d",
"/": "f6f2b4776bcf79d0b520b0c5cf70195d",
"main.dart.js": "8f118493952323bb4397211decf9e3df",
"manifest.json": "7b2236a141dc5037a4109d41837f9103",
"version.json": "93d017a9fa44a6bbf4c40c030a5a8b50"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
