/* ===========================================================
   Lógica da página escrever.html
=========================================================== */

function renderExemploEnem() {
  const alvo = document.getElementById("exemplo-enem");
  if (!alvo || typeof EXEMPLO_ENEM === "undefined") return;

  alvo.innerHTML = `
    <div class="tema-card">
      <span class="ano">TEMA DE TREINO</span>
      <h3>${EXEMPLO_ENEM.tema}</h3>
    </div>
    <div class="resultado-item ok">
      <span class="titulo">1. INTRODUÇÃO</span>
      <p>${EXEMPLO_ENEM.introducao}</p>
    </div>
    <div class="resultado-item ok">
      <span class="titulo">2. DESENVOLVIMENTO I</span>
      <p>${EXEMPLO_ENEM.desenvolvimento1}</p>
    </div>
    <div class="resultado-item ok">
      <span class="titulo">3. DESENVOLVIMENTO II</span>
      <p>${EXEMPLO_ENEM.desenvolvimento2}</p>
    </div>
    <div class="resultado-item ok">
      <span class="titulo">4. CONCLUSÃO</span>
      <p>${EXEMPLO_ENEM.conclusao}</p>
    </div>
  `;
}

function renderGenerosUnicamp() {
  const alvo = document.getElementById("generos-unicamp");
  if (!alvo || typeof GENEROS_UNICAMP === "undefined") return;

  alvo.innerHTML = GENEROS_UNICAMP.map(g => `
    <div class="card">
      <h3>${g.genero}</h3>
      <p>${g.quando}</p>
      <p class="uso" style="border-top:2px dashed var(--roxo-med); margin-top:0.6rem; padding-top:0.6rem;"><strong>Estrutura:</strong></p>
      <ul style="margin:0.3rem 0 0.8rem; padding-left:1.2rem;">
        ${g.estrutura.map(passo => `<li style="margin-bottom:0.25rem;">${passo}</li>`).join("")}
      </ul>
      <p class="uso"><strong>Exemplo de abertura:</strong> <em>"${g.exemplo}"</em></p>
    </div>
  `).join("");
}

function renderConectivos() {
  const alvo = document.getElementById("conectivos");
  alvo.innerHTML = Object.entries(CONECTIVOS).map(([grupo, itens]) => `
    <div class="card" style="margin-bottom:1rem;">
      <h3>${grupo}</h3>
      <div class="flex-wrap">${itens.map(i => `<span class="tag">${i}</span>`).join("")}</div>
    </div>
  `).join("");
}

function capitalizar(txt) {
  if (!txt) return txt;
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

function conjurarProposta() {
  const problema = document.getElementById("pi-problema").value.trim();
  const agente = document.getElementById("pi-agente").value.trim();
  const acao = document.getElementById("pi-acao").value.trim();
  const meio = document.getElementById("pi-meio").value.trim();
  const finalidade = document.getElementById("pi-finalidade").value.trim();
  const detalhamento = document.getElementById("pi-detalhamento").value.trim();

  const caixaResultado = document.getElementById("resultado-pi");
  const textoPi = document.getElementById("texto-pi");

  if (!agente || !acao) {
    caixaResultado.classList.remove("hidden");
    textoPi.textContent = "Preencha ao menos o agente e a ação para o mago conjurar algo — quanto mais campos, mais completa fica a proposta (e melhor pontua na competência 5).";
    return;
  }

  let paragrafo = `Diante do exposto, evidencia-se a necessidade de combater ${problema || "o problema apresentado"}. `;
  paragrafo += `Para isso, ${capitalizar(agente)} ${acao}`;
  if (meio) paragrafo += `, ${meio}`;
  paragrafo += `, ${finalidade || "a fim de enfrentar essa questão de forma efetiva"}`;
  if (detalhamento) paragrafo += `, ${detalhamento}`;
  paragrafo += ". Somente com ações conjuntas entre poder público e sociedade civil será possível superar esse desafio.";

  caixaResultado.classList.remove("hidden");
  textoPi.textContent = paragrafo;
}

document.addEventListener("DOMContentLoaded", () => {
  renderExemploEnem();
  renderGenerosUnicamp();
  renderConectivos();
  document.getElementById("btn-conjurar").addEventListener("click", conjurarProposta);
});
