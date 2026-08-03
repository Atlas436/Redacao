/* ===========================================================
   Lógica da página escrever.html
=========================================================== */

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
  renderConectivos();
  document.getElementById("btn-conjurar").addEventListener("click", conjurarProposta);
});
