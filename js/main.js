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
  const atual = paginaAtual();
  const alvo = document.getElementById("app-nav");
  if (!alvo) return;

  const links = PAGINAS.map(p => {
    const ativo = p.href === atual ? " active" : "";
    return `<a href="${p.href}" class="${ativo.trim()}">${p.emoji} ${p.label}</a>`;
  }).join("");

  alvo.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <a href="index.html" class="logo"><span class="dragon-emoji">🐉</span> REDAÇÃO QUEST</a>
        <nav class="nav-links">${links}</nav>
      </div>
    </div>
  `;
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

document.addEventListener("DOMContentLoaded", () => {
  montarNav();
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

/* ---------- Tema atual (definido no Oráculo, reaproveitado em outras páginas) ---------- */
function rqPrefillTema(elementId) {
  const campo = document.getElementById(elementId);
  const temaSalvo = localStorage.getItem("rq-tema-atual");
  if (campo && temaSalvo && !campo.value) {
    campo.value = temaSalvo;
  }
}
