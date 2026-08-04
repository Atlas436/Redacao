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

// Sanitiza o HTML salvo antes de reinserir no editor: só permite <mark> com
// as classes de grifo e <br>, removendo qualquer outra tag/atributo (evita
// que HTML colado com script/handlers maliciosos seja reexecutado ao recarregar)
function sanitizarRascunhoHTML(html) {
  const TAGS_PERMITIDAS = new Set(["MARK", "BR"]);
  const CLASSES_PERMITIDAS = new Set(["highlight-manter", "highlight-revisar", "highlight-mudar"]);

  const template = document.createElement("template");
  template.innerHTML = html;

  function limpar(no) {
    [...no.childNodes].forEach(filho => {
      if (filho.nodeType === Node.ELEMENT_NODE) {
        if (!TAGS_PERMITIDAS.has(filho.tagName)) {
          filho.replaceWith(document.createTextNode(filho.textContent));
          return;
        }
        [...filho.attributes].forEach(attr => {
          if (attr.name !== "class") filho.removeAttribute(attr.name);
        });
        if (filho.tagName === "MARK") {
          const classes = (filho.getAttribute("class") || "").split(/\s+/).filter(c => CLASSES_PERMITIDAS.has(c));
          if (classes.length) filho.setAttribute("class", classes.join(" "));
          else filho.removeAttribute("class");
        }
        limpar(filho);
      } else if (filho.nodeType !== Node.TEXT_NODE) {
        filho.remove();
      }
    });
  }

  limpar(template.content);
  return template.innerHTML;
}

function carregarRascunho() {
  const salvo = localStorage.getItem(RQ_RASCUNHO_KEY);
  if (salvo) getEditor().innerHTML = sanitizarRascunhoHTML(salvo);
}

// Força colagem como texto puro, sem HTML rico (evita injeção via clipboard)
function tratarColagem(e) {
  e.preventDefault();
  const texto = (e.clipboardData || window.clipboardData).getData("text/plain");
  const sel = window.getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(texto));
  range.collapse(false);
  salvarRascunho();
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

function baixarComoTxt() {
  const texto = getEditor().innerText || getEditor().textContent || "";
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "redacao-quest-rascunho.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
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
      <p class="nota-texto">${escapeHTML(n)}</p>
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
  document.getElementById("btn-baixar-txt").addEventListener("click", baixarComoTxt);
  getEditor().addEventListener("input", salvarRascunho);
  getEditor().addEventListener("paste", tratarColagem);

  document.getElementById("btn-add-nota").addEventListener("click", adicionarNota);
  document.getElementById("campo-nota").addEventListener("keydown", e => {
    if (e.key === "Enter") adicionarNota();
  });
});
