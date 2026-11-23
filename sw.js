/* AI工题库 PWA Service Worker：离线可用 */
var CACHE = "aiexam-v2";
var ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "assets/styles.css",
  "assets/app.js",
  "assets/questions.js",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS).catch(function () { /* 单个资源失败不阻塞安装 */ });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // HTML 走网络优先，保证更新能拿到；离线时回退缓存
  if (req.mode === "navigate" || (req.headers.get("accept") || "").indexOf("text/html") > -1) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) { return hit || caches.match("index.html"); });
      })
    );
    return;
  }

  // 静态资源缓存优先 + 后台更新
  e.respondWith(
    caches.match(req).then(function (hit) {
      var fetchAndUpdate = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || fetchAndUpdate;
    })
  );
});
