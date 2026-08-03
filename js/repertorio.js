/* ===========================================================
   Lógica da página repertorio.html
=========================================================== */

let filtroAreaAtiva = null;
let filtroTemaAtivo = null;

function labelArea(chave) {
  const a = AREAS_REPERTORIO.find(x => x.chave === chave);
  return a ? a.label : chave;
}

function renderFiltros() {
  const areaBox = document.getElementById("filtro-area");
  areaBox.innerHTML = AREAS_REPERTORIO.map(a => {
    const ativo = filtroAreaAtiva === a.chave ? " ativo" : "";
    return `<span class="tag area-${a.chave}${ativo}" data-area="${a.chave}">${a.label}</span>`;
  }).join("");

  const temaBox = document.getElementById("filtro-tema");
  temaBox.innerHTML = AREAS_TEMA.map(t => {
    const ativo = filtroTemaAtivo === t.chave ? " ativo" : "";
    return `<span class="tag${ativo}" data-tema="${t.chave}">${t.label}</span>`;
  }).join("");

  areaBox.querySelectorAll(".tag").forEach(el => {
    el.addEventListener("click", () => {
      const v = el.dataset.area;
      filtroAreaAtiva = filtroAreaAtiva === v ? null : v;
      renderFiltros();
      renderLista();
    });
  });

  temaBox.querySelectorAll(".tag").forEach(el => {
    el.addEventListener("click", () => {
      const v = el.dataset.tema;
      filtroTemaAtivo = filtroTemaAtivo === v ? null : v;
      renderFiltros();
      renderLista();
    });
  });
}

function renderLista() {
  const termo = document.getElementById("busca").value.trim().toLowerCase();

  const filtrado = REPERTORIO.filter(item => {
    if (filtroAreaAtiva && item.area !== filtroAreaAtiva) return false;
    if (filtroTemaAtivo && !item.temas.includes(filtroTemaAtivo)) return false;
    if (termo) {
      const alvo = (item.nome + " " + item.conceito + " " + item.ideia).toLowerCase();
      if (!alvo.includes(termo)) return false;
    }
    return true;
  });

  document.getElementById("contador").textContent = `${filtrado.length} item(ns) encontrado(s)`;

  document.getElementById("lista-repertorio").innerHTML = filtrado.map(item => `
    <div class="rep-entry">
      <span class="area-label">${labelArea(item.area).toUpperCase()}</span>
      <h3>${item.nome}</h3>
      ${item.obra ? `<span class="obra">📖 ${item.obra}</span>` : ""}
      <p><span class="conceito">${item.conceito}.</span> ${item.ideia}</p>
      <div class="uso">💡 <strong>Como usar:</strong> ${item.uso}</div>
      <div class="flex-wrap" style="margin-top:0.6rem;">
        ${item.temas.map(t => `<span class="tag">${labelTemaChave(t)}</span>`).join("")}
      </div>
    </div>
  `).join("") || `<p class="muted">Nenhum repertório encontrado. Tente outro termo ou remova filtros.</p>`;
}

function labelTemaChave(chave) {
  const t = AREAS_TEMA.find(x => x.chave === chave);
  return t ? t.label : chave;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFiltros();
  renderLista();
  document.getElementById("busca").addEventListener("input", renderLista);
});
