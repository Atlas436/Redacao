/* ===========================================================
   Nav, rodapé e utilidades compartilhadas entre páginas
=========================================================== */

// Carrega a fonte do Google Fonts via JS (não bloqueia o parsing/scripts da
// página caso o CDN esteja lento ou inacessível — só troca a fonte quando
// terminar de carregar; até lá, usa a fonte monoespaçada padrão do sistema)
(function carregarFontesGoogle() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap";
  document.head.appendChild(link);
})();

// PWA: registra o service worker (site fica instalável e funciona offline
// depois da primeira visita). Falha em silêncio se o navegador não suportar.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

const PAGINAS = [
  { href: "index.html", label: "Início", emoji: "🏰" },
  { href: "entender.html", label: "Oráculo", emoji: "🔮" },
  { href: "repertorio.html", label: "Repertório", emoji: "📚" },
  { href: "temas.html", label: "Temas", emoji: "🗺️" },
  { href: "escrever.html", label: "Escrever", emoji: "✍️" },
  { href: "rascunho.html", label: "Rascunho", emoji: "📝" },
  { href: "corrigir.html", label: "Corrigir", emoji: "🛡️" },
  { href: "simulado.html", label: "Simulado", emoji: "⏳" },
  { href: "progresso.html", label: "Progresso", emoji: "📈" }
];

function paginaAtual() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function montarNav() {
  const alvo = document.getElementById("app-nav");
  if (!alvo) return;

  alvo.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">☰ Menu</button>
        <a href="index.html" class="logo"><img src="assets/sprites/dragon.svg" alt="" class="dragon-logo-img"> REDAÇÃO QUEST</a>
        <span></span>
      </div>
    </div>
  `;
}

function montarSidebar() {
  const atual = paginaAtual();

  const links = PAGINAS.map(p => {
    const ativo = p.href === atual ? " active" : "";
    return `<a href="${p.href}" class="${ativo.trim()}">${p.emoji} ${p.label}</a>`;
  }).join("");

  const backdrop = document.createElement("div");
  backdrop.className = "sidebar-backdrop";
  const sidebar = document.createElement("nav");
  sidebar.className = "sidebar";
  sidebar.innerHTML = links;

  document.body.appendChild(sidebar);
  document.body.appendChild(backdrop);

  const abrir = () => { sidebar.classList.add("open"); backdrop.classList.add("open"); };
  const fechar = () => { sidebar.classList.remove("open"); backdrop.classList.remove("open"); };

  const botao = document.getElementById("menu-toggle");
  if (botao) botao.addEventListener("click", abrir);
  backdrop.addEventListener("click", fechar);
  sidebar.querySelectorAll("a").forEach(a => a.addEventListener("click", fechar));
}

function montarFooter() {
  const alvo = document.getElementById("app-footer");
  if (!alvo) return;
  alvo.innerHTML = `
    <div class="footer">
      Redação Quest — sua jornada rumo à nota 1000. Conteúdo educativo, não substitui a orientação de um professor.
    </div>
  `;
}

function montarEstrelas() {
  const campo = document.createElement("div");
  campo.className = "starfield";
  const cores = ["#ffffff", "#d6dae2", "#d8c7f5"];
  const total = 90;
  for (let i = 0; i < total; i++) {
    const estrela = document.createElement("span");
    estrela.className = "star";
    const tamanho = Math.random() < 0.6 ? 2 : (Math.random() < 0.8 ? 3 : 4);
    const cor = cores[Math.floor(Math.random() * cores.length)];
    estrela.style.left = (Math.random() * 100).toFixed(2) + "vw";
    estrela.style.top = (Math.random() * 100).toFixed(2) + "vh";
    estrela.style.width = tamanho + "px";
    estrela.style.height = tamanho + "px";
    estrela.style.background = cor;
    estrela.style.color = cor;
    estrela.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    estrela.style.animationDuration = (2 + Math.random() * 3).toFixed(2) + "s";
    campo.appendChild(estrela);
  }
  document.body.appendChild(campo);
}

function montarCRT() {
  const overlay = document.createElement("div");
  overlay.className = "crt-overlay";
  document.body.appendChild(overlay);
}

function montarLoadingSplash() {
  const splash = document.createElement("div");
  splash.id = "loading-splash";
  splash.innerHTML = `
    <div class="jump-scene">
      <div class="jump-dragon"><img src="assets/sprites/dragon.svg" alt=""></div>
      <div class="jump-fence">🚧</div>
      <div class="jump-ground"></div>
    </div>
    <p class="pixel-font" style="font-size:0.6rem;color:var(--roxo-claro);">Carregando a Torre...</p>
  `;
  document.body.appendChild(splash);
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => splash.remove(), 450);
  }, 850);
}

document.addEventListener("DOMContentLoaded", () => {
  montarLoadingSplash();
  montarNav();
  montarSidebar();
  montarFooter();
  montarEstrelas();
  montarCRT();
});

/* ---------- Armazenamento de progresso (localStorage) ---------- */
const RQ_STORAGE_KEY = "redacao-quest-sessoes";

function rqLerSessoes() {
  try {
    return JSON.parse(localStorage.getItem(RQ_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function rqSalvarSessao(sessao) {
  const sessoes = rqLerSessoes();
  sessoes.push(sessao);
  localStorage.setItem(RQ_STORAGE_KEY, JSON.stringify(sessoes));
}

function rqLimparSessoes() {
  localStorage.removeItem(RQ_STORAGE_KEY);
}

/* ---------- Escolha determinística "do dia", pelo dia do ano ---------- */
function itemDoDia(lista) {
  if (!lista || lista.length === 0) return null;
  const hoje = new Date();
  const inicioAno = new Date(hoje.getFullYear(), 0, 0);
  const diaDoAno = Math.floor((hoje - inicioAno) / 86400000);
  return lista[diaDoAno % lista.length];
}

/* ---------- Conselho do dia do Mago (usa CONSELHOS_MAGO de data.js) ---------- */
function conselhoDoDia() {
  if (typeof CONSELHOS_MAGO === "undefined") return "";
  return itemDoDia(CONSELHOS_MAGO) || "";
}

/* ---------- Frase inspiradora do dia (usa FRASES_INSPIRADORAS de data.js) ---------- */
function fraseDoDia() {
  if (typeof FRASES_INSPIRADORAS === "undefined") return null;
  return itemDoDia(FRASES_INSPIRADORAS);
}

/* ---------- Escapar texto antes de injetar em innerHTML (evita XSS) ---------- */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

/* ---------- Tema atual (definido no Oráculo, reaproveitado em outras páginas) ---------- */
function rqPrefillTema(elementId) {
  const campo = document.getElementById(elementId);
  const temaSalvo = localStorage.getItem("rq-tema-atual");
  if (campo && temaSalvo && !campo.value) {
    campo.value = temaSalvo;
  }
}
