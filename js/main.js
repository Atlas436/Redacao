/* ===========================================================
   Nav, rodapé e utilidades compartilhadas entre páginas
=========================================================== */

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
        <a href="index.html" class="logo"><span class="dragon-emoji">🐉</span> REDAÇÃO QUEST</a>
      </div>
    </div>
  `;
}

function montarSidebar() {
  const atual = paginaAtual();
  const main = document.querySelector("main.container");
  if (!main) return;

  const links = PAGINAS.map(p => {
    const ativo = p.href === atual ? " active" : "";
    return `<a href="${p.href}" class="${ativo.trim()}">${p.emoji} ${p.label}</a>`;
  }).join("");

  const shell = document.createElement("div");
  shell.className = "layout-shell";
  const sidebar = document.createElement("nav");
  sidebar.className = "sidebar";
  sidebar.innerHTML = links;

  main.parentNode.insertBefore(shell, main);
  shell.appendChild(sidebar);
  shell.appendChild(main);
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
      <div class="jump-dragon">🐉</div>
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

/* ---------- Ticker de frases inspiradoras (usa FRASES_INSPIRADORAS de data.js) ---------- */
function montarTicker(containerId) {
  const alvo = document.getElementById(containerId);
  if (!alvo || typeof FRASES_INSPIRADORAS === "undefined") return;

  const itens = FRASES_INSPIRADORAS.map(f => `<span>"${f.frase}" <span class="autor">— ${f.autor}</span></span>`).join("");
  alvo.innerHTML = `
    <div class="ticker-wrap">
      <div class="ticker-track">${itens}${itens}</div>
    </div>
  `;
}

/* ---------- Conselho do dia do Mago (usa CONSELHOS_MAGO de data.js) ---------- */
function conselhoDoDia() {
  if (typeof CONSELHOS_MAGO === "undefined" || CONSELHOS_MAGO.length === 0) return "";
  const hoje = new Date();
  const inicioAno = new Date(hoje.getFullYear(), 0, 0);
  const diaDoAno = Math.floor((hoje - inicioAno) / 86400000);
  return CONSELHOS_MAGO[diaDoAno % CONSELHOS_MAGO.length];
}

/* ---------- Tema atual (definido no Oráculo, reaproveitado em outras páginas) ---------- */
function rqPrefillTema(elementId) {
  const campo = document.getElementById(elementId);
  const temaSalvo = localStorage.getItem("rq-tema-atual");
  if (campo && temaSalvo && !campo.value) {
    campo.value = temaSalvo;
  }
}
