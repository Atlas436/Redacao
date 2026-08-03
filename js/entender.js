/* ===========================================================
   Lógica da página entender.html — Oráculo de Temas
=========================================================== */

function normalizar(txt) {
  return txt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function identificarAreas(temaTexto) {
  const alvo = " " + normalizar(temaTexto) + " ";
  const pontuacao = {};

  Object.entries(PALAVRAS_CHAVE_TEMA).forEach(([area, palavras]) => {
    let pontos = 0;
    palavras.forEach(p => {
      if (alvo.includes(normalizar(p))) pontos++;
    });
    if (pontos > 0) pontuacao[area] = pontos;
  });

  return Object.entries(pontuacao)
    .sort((a, b) => b[1] - a[1])
    .map(([area]) => area);
}

function labelTemaChave(chave) {
  const t = AREAS_TEMA.find(x => x.chave === chave);
  return t ? t.label : chave;
}

function consultarOraculo() {
  const tema = document.getElementById("campo-oraculo").value.trim();
  if (!tema) return;

  localStorage.setItem("rq-tema-atual", tema);

  const areas = identificarAreas(tema);
  const areasBox = document.getElementById("areas-identificadas");

  if (areas.length === 0) {
    areasBox.innerHTML = `<p class="muted">Não reconheci uma área específica automaticamente. Ainda assim, veja abaixo perguntas gerais e explore a Biblioteca do Dragão manualmente.</p>`;
  } else {
    areasBox.innerHTML = areas.map(a => `<span class="tag ativo">${labelTemaChave(a)}</span>`).join("");
  }

  document.getElementById("perguntas-lista").innerHTML = PERGUNTAS_NORTEADORAS
    .map(p => `<li style="margin-bottom:0.5rem;">${p}</li>`).join("");

  const relacionados = areas.length > 0
    ? REPERTORIO.filter(item => item.temas.some(t => areas.includes(t)))
    : [];

  const caixaRep = document.getElementById("repertorios-sugeridos");
  if (relacionados.length === 0) {
    caixaRep.innerHTML = `<p class="muted">Nenhum repertório específico casou automaticamente. Visite a <a href="repertorio.html">Biblioteca do Dragão</a> e busque manualmente por palavras do seu tema.</p>`;
  } else {
    caixaRep.innerHTML = relacionados.slice(0, 8).map(item => `
      <div class="rep-entry">
        <span class="area-label">${item.area.toUpperCase()}</span>
        <h3>${item.nome}</h3>
        ${item.obra ? `<span class="obra">📖 ${item.obra}</span>` : ""}
        <p><span class="conceito">${item.conceito}.</span> ${item.ideia}</p>
        <div class="uso">💡 <strong>Como usar:</strong> ${item.uso}</div>
      </div>
    `).join("");
  }

  document.getElementById("resultado-oraculo").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const temaUrl = params.get("tema");
  if (temaUrl) {
    document.getElementById("campo-oraculo").value = temaUrl;
    consultarOraculo();
  }

  document.getElementById("btn-consultar").addEventListener("click", consultarOraculo);
  document.getElementById("campo-oraculo").addEventListener("keydown", e => {
    if (e.key === "Enter") consultarOraculo();
  });
  document.getElementById("btn-ir-escrever").addEventListener("click", () => {
    window.location.href = "escrever.html";
  });
});
