// Service worker do portfólio: rede primeiro para páginas, cache primeiro para arquivos.
const CACHE = 'portfolio-v1'
const BASE = '/my_portifolio/'

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([BASE])))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  // Só cuida do próprio site; VLibras e outros serviços externos passam direto.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((resposta) => {
          const copia = resposta.clone()
          caches.open(CACHE).then((cache) => cache.put(request, copia))
          return resposta
        })
        .catch(() => caches.match(request).then((r) => r || caches.match(BASE))),
    )
    return
  }

  event.respondWith(
    caches.match(request).then(
      (salvo) =>
        salvo ||
        fetch(request).then((resposta) => {
          if (resposta.ok) {
            const copia = resposta.clone()
            caches.open(CACHE).then((cache) => cache.put(request, copia))
          }
          return resposta
        }),
    ),
  )
})
