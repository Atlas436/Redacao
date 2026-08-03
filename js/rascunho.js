/* ===========================================================
   Lógica da página rascunho.html — grifos coloridos + notas soltas
=========================================================== */

const RQ_RASCUNHO_KEY = "rq-rascunho-html";
const RQ_NOTAS_KEY = "rq-notas";
let salvarTimeout = null;

function getEditor() {
  return document.getElementById("editor-rascunho");
}

function salvarRascunho() {
  localStorage.setItem(RQ_RASCUNHO_KEY, getEditor().innerHTML);
  const status = document.getElementById("status-salvo");
  status.textContent = "Salvo ✔";
  clearTimeout(salvarTimeout);
  salvarTimeout = setTimeout(() => { status.textContent = "Salvo automaticamente neste navegador."; }, 1500);
}

function carregarRascunho() {
  const salvo = localStorage.getItem(RQ_RASCUNHO_KEY);
  if (salvo) getEditor().innerHTML = salvo;
}

function aplicarGrifo(cor) {
  const editor = getEditor();
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;

  const range = sel.getRangeAt(0);
  if (!editor.contains(range.commonAncestorContainer)) return;

  const mark = document.createElement("mark");
  mark.className = `highlight-${cor}`;
  const conteudo = range.extractContents();
  mark.appendChild(conteudo);
  range.deleteContents();
  range.insertNode(mark);

  sel.removeAllRanges();
  salvarRascunho();
}

function apagarGrifos() {
  const editor = getEditor();
  editor.querySelectorAll("mark").forEach(m => {
    const parent = m.parentNode;
    while (m.firstChild) parent.insertBefore(m.firstChild, m);
    parent.removeChild(m);
  });
  editor.normalize();
  salvarRascunho();
}

function limparTudo() {
  if (!confirm("Apagar todo o conteúdo do rascunho?")) return;
  getEditor().innerHTML = "";
  salvarRascunho();
}

/* ---------- Notas soltas ---------- */
function lerNotas() {
  try { return JSON.parse(localStorage.getItem(RQ_NOTAS_KEY)) || []; }
  catch (e) { return []; }
}

function salvarNotas(notas) {
  localStorage.setItem(RQ_NOTAS_KEY, JSON.stringify(notas));
}

function renderNotas() {
  const notas = lerNotas();
  const alvo = document.getElementById("lista-notas");
  if (notas.length === 0) {
    alvo.innerHTML = `<p class="muted">Nenhuma nota ainda.</p>`;
    return;
  }
  alvo.innerHTML = notas.map((n, i) => `
    <div class="nota-card">
      <button class="remover-nota" data-idx="${i}" title="remover">✕</button>
      <p class="nota-texto">${n}</p>
    </div>
  `).join("");

  alvo.querySelectorAll(".remover-nota").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx, 10);
      const notas = lerNotas();
      notas.splice(idx, 1);
      salvarNotas(notas);
      renderNotas();
    });
  });
}

function adicionarNota() {
  const campo = document.getElementById("campo-nota");
  const texto = campo.value.trim();
  if (!texto) return;
  const notas = lerNotas();
  notas.push(texto);
  salvarNotas(notas);
  campo.value = "";
  renderNotas();
}

document.addEventListener("DOMContentLoaded", () => {
  carregarRascunho();
  renderNotas();

  document.querySelectorAll(".btn-grifo[data-cor]").forEach(btn => {
    btn.addEventListener("click", () => aplicarGrifo(btn.dataset.cor));
  });
  document.getElementById("btn-apagar-grifos").addEventListener("click", apagarGrifos);
  document.getElementById("btn-limpar-tudo").addEventListener("click", limparTudo);
  getEditor().addEventListener("input", salvarRascunho);

  document.getElementById("btn-add-nota").addEventListener("click", adicionarNota);
  document.getElementById("campo-nota").addEventListener("keydown", e => {
    if (e.key === "Enter") adicionarNota();
  });
});
