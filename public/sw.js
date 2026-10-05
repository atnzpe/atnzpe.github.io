// Arquivo: sw.js (service worker do portfólio)
// Para que serve: é um pequeno programa que o navegador roda "por trás" do site.
// Ele guarda uma cópia dos arquivos no aparelho para o site abrir mesmo sem internet (offline first).
// Regra principal: buscar SEMPRE a versão nova na internet primeiro; a cópia guardada só é usada
// quando não há internet. A exceção são os arquivos da pasta /assets/, que nunca mudam (veja abaixo).

// Nome da "gaveta" (cache) onde as cópias ficam guardadas.
// Sempre que a regra deste arquivo mudar, trocamos o número (v3, v4...) para jogar fora as cópias antigas.
const CACHE = 'portfolio-v3'

// Endereço da página inicial do site, guardada logo na instalação para o site abrir offline.
const BASE = '/'

// Evento "install": acontece uma vez, quando o navegador instala este service worker.
self.addEventListener('install', (event) => {
  // Abre a gaveta e guarda a página inicial; o navegador espera isso terminar antes de seguir.
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([BASE])))
  // Ativa a versão nova na hora, sem esperar o visitante fechar todas as abas do site.
  self.skipWaiting()
})

// Evento "activate": acontece quando esta versão passa a valer.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Lista todas as gavetas que existem no aparelho...
    caches
      .keys()
      // ...e apaga todas que não são a gaveta atual (assim some o currículo antigo guardado na v2).
      .then((nomes) => Promise.all(nomes.filter((nome) => nome !== CACHE).map((nome) => caches.delete(nome)))),
  )
  // Faz esta versão controlar na hora as abas que já estão abertas.
  self.clients.claim()
})

// Função que guarda uma cópia da resposta na gaveta.
// Argumentos: pedido = o que o navegador pediu (ex.: o PDF do currículo);
//             resposta = o que veio da internet.
// Devolve: nada; só guarda a cópia, sem atrasar a resposta para o visitante.
function guardarCopia(pedido, resposta) {
  // Só guarda respostas que deram certo (código 200); erros como "página não encontrada" não são guardados.
  if (!resposta.ok) return
  // A resposta só pode ser lida uma vez, então guardamos um clone dela.
  const copia = resposta.clone()
  // Abre a gaveta e coloca a cópia lá dentro.
  caches.open(CACHE).then((cache) => cache.put(pedido, copia))
}

// Evento "fetch": acontece a cada arquivo que o site pede (páginas, imagens, PDF, scripts).
self.addEventListener('fetch', (event) => {
  // Pega o pedido que o navegador está fazendo.
  const pedido = event.request
  // Separa o endereço em partes (domínio, caminho...) para podermos analisar.
  const endereco = new URL(pedido.url)

  // Se o pedido não for de leitura (GET) ou for de outro site (VLibras, por exemplo),
  // não fazemos nada: o navegador segue o caminho normal, sem passar pela gaveta.
  if (pedido.method !== 'GET' || endereco.origin !== self.location.origin) return

  // Arquivos da pasta /assets/ têm um código no nome (ex.: index-Cr1g587.js) que muda a cada versão do site.
  // Por isso a cópia guardada nunca fica velha: usamos a gaveta primeiro, que é mais rápido.
  if (endereco.pathname.startsWith('/assets/')) {
    event.respondWith(
      // Procura na gaveta; se achar, devolve a cópia.
      caches.match(pedido).then(
        (copiaGuardada) =>
          copiaGuardada ||
          // Se não achar, busca na internet e guarda uma cópia para a próxima vez.
          fetch(pedido).then((resposta) => {
            guardarCopia(pedido, resposta)
            return resposta
          }),
      ),
    )
    // Termina aqui para este tipo de arquivo.
    return
  }

  // Todo o resto (páginas, currículo em PDF, foto, llms.txt) pode mudar sem mudar de nome.
  // Então buscamos SEMPRE na internet primeiro, pedindo ao navegador para conferir se há versão nova (no-cache).
  event.respondWith(
    fetch(pedido, { cache: 'no-cache' })
      .then((resposta) => {
        // Deu certo: guarda a versão nova na gaveta e entrega ao visitante.
        guardarCopia(pedido, resposta)
        return resposta
      })
      // Sem internet: entrega a cópia guardada; se não houver, entrega a página inicial guardada.
      .catch(() => caches.match(pedido).then((copiaGuardada) => copiaGuardada || caches.match(BASE))),
  )
})
