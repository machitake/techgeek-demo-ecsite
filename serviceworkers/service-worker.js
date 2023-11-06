const cacheName = "v1";
const cacheAsset = "http://localhost:3000/api/products"

self.addEventListener("install", function (event) {
  console.log("Service worker installed");
  // キャッシュを登録する
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("Service worker caching files");
      return cache.add(cacheAsset);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("Service worker fetching");
  // キャッシュがあればそれを返す
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Service worker found in cache");
        return response;
      }
      // キャッシュがなければリクエストを行う
      return fetch(event.request);
    })
  );
});