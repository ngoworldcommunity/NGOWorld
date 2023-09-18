const staticCacheName = "site-static-v1";

const staticAssets = [
  "/",
  "/@vite/client",
  "/src/context/MilanState.jsx",
  "/src/styles/App.css",
  "/src/components/Button/BacktoTop/BacktoTop.jsx",
  "/src/assets/data/routesConfig.jsx",
  "/src/pages/route.js",
  "/src/components/Button/BacktoTop/BacktoTop.css",
  "/src/pages/Home.jsx",
  "/src/components/Navbar/Navbar.jsx",
  "/src/components/Navbar/Navbar.css",
];

self.addEventListener("install", (event) => {
  console.log("service worker installed");

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log(
        "%c 🛠 Adding static cache ",
        "background-color: green; color: white; padding: 4px;",
      );

      cache.addAll(staticAssets);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  // console.log(
  //   "%c🔁 Fetch event request: ",
  //   "background-color: green; color: white; padding: 4px;",
  //   event.request,
  // );

  // const URL = event.request.url;

  // const isImage =
  //   URL.endsWith(".jpg") ||
  //   URL.endsWith(".png") ||
  //   URL.endsWith(".svg") ||
  //   URL.endsWith(".jpeg") ||
  //   URL.endsWith(".gif") ||
  //   URL.endsWith(".ico");

  // const isCSS = URL.endsWith(".css");
  // const isJSX = URL.endsWith(".jsx");
  // const isJS = URL.endsWith(".js");

  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    }),
  );
});
