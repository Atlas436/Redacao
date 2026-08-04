/* ===========================================================
   Service Worker — deixa o site instalável e funcionando offline
   depois da primeira visita (stale-while-revalidate)
=========================================================== */

const CACHE_NAME = "redacao-quest-v1";

const ASSETS = [
  "./",
  "index.html",
  "entender.html",
  "repertorio.html",
  "temas.html",
  "escrever.html",
  "rascunho.html",
  "corrigir.html",
  "simulado.html",
  "progresso.html",
  "css/style.css",
  "js/data.js",
  "js/main.js",
  "js/index.js",
  "js/temas.js",
  "js/entender.js",
  "js/repertorio.js",
  "js/escrever.js",
  "js/rascunho.js",
  "js/corrigir.js",
  "js/simulado.js",
  "js/progresso.js",
  "assets/sprites/dragon.svg",
  "assets/sprites/mago.svg",
  "assets/sprites/icon-192.png",
  "assets/sprites/icon-512.png",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // não intercepta a fonte externa

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      const rede = fetch(event.request)
        .then((resp) => {
          if (resp && resp.status === 200) cache.put(event.request, resp.clone());
          return resp;
        })
        .catch(() => null);

      if (cached) return cached;

      const respostaRede = await rede;
      return respostaRede || new Response(
        "Você está offline e esta página ainda não foi salva neste dispositivo.",
        { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    })
  );
});
