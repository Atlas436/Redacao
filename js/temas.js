/* ===========================================================
   Lógica da página temas.html
=========================================================== */

function labelTemaChave(chave) {
  const t = AREAS_TEMA.find(x => x.chave === chave);
  return t ? t.label : chave;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lista-enem").innerHTML = TEMAS_ENEM
    .slice().sort((a, b) => b.ano - a.ano)
    .map(t => `
      <div class="tema-card">
        <span class="ano">ENEM ${t.ano}</span>
        <h3>${t.tema}</h3>
        <div class="flex-wrap">${t.areas.map(a => `<span class="tag">${labelTemaChave(a)}</span>`).join("")}</div>
        <p style="margin-top:0.5rem;"><a href="entender.html?tema=${encodeURIComponent(t.tema)}">🔮 Consultar o Oráculo sobre esse tema</a></p>
      </div>
    `).join("");

  document.getElementById("lista-unicamp").innerHTML = TEMAS_UNICAMP
    .slice().sort((a, b) => b.ano - a.ano)
    .map(ano => `
      <div class="tema-card">
        <span class="ano">UNICAMP ${ano.ano}</span>
        ${ano.propostas.map(p => `
          <div style="margin-top:0.6rem; padding-top:0.6rem; border-top:2px dashed var(--roxo-med);">
            <span class="tag ativo">${p.genero}</span>
            <h3 style="margin:0.4rem 0;">${p.tema}</h3>
            <div class="flex-wrap">${p.areas.map(a => `<span class="tag">${labelTemaChave(a)}</span>`).join("")}</div>
            <p style="margin-top:0.5rem;"><a href="entender.html?tema=${encodeURIComponent(p.tema)}">🔮 Consultar o Oráculo sobre essa proposta</a></p>
          </div>
        `).join("")}
      </div>
    `).join("");

  document.getElementById("lista-vunesp").innerHTML = TEMAS_VUNESP
    .slice().sort((a, b) => b.ano - a.ano)
    .map(t => `
      <div class="tema-card">
        <span class="ano">VUNESP ${t.ano}</span>
        <h3>${t.tema}</h3>
        <div class="flex-wrap">${t.areas.map(a => `<span class="tag">${labelTemaChave(a)}</span>`).join("")}</div>
        <p style="margin-top:0.5rem;"><a href="entender.html?tema=${encodeURIComponent(t.tema)}">🔮 Consultar o Oráculo sobre esse tema</a></p>
      </div>
    `).join("");

  document.getElementById("lista-treino").innerHTML = TEMAS_TREINO
    .map(t => `
      <div class="tema-card">
        <h3>${t.tema}</h3>
        <div class="flex-wrap">${t.areas.map(a => `<span class="tag">${labelTemaChave(a)}</span>`).join("")}</div>
        <p style="margin-top:0.5rem;"><a href="entender.html?tema=${encodeURIComponent(t.tema)}">🔮 Consultar o Oráculo</a> · <a href="simulado.html">⏳ Treinar com cronômetro</a></p>
      </div>
    `).join("");
});
