/* ===========================================================
   Lógica da página progresso.html — XP, badges, histórico, gráfico
=========================================================== */

const BADGES = [
  { minimo: 1, icone: "🥚", nome: "Ovo de Dragão" },
  { minimo: 5, icone: "🐣", nome: "Escudeiro(a)" },
  { minimo: 10, icone: "🛡️", nome: "Bacharel" },
  { minimo: 20, icone: "🐉", nome: "Mestre das Redações" },
  { minimo: 30, icone: "👑", nome: "Lenda da Redação" }
];

function calcularXP(sessoes) {
  let xp = 0;
  sessoes.forEach(s => {
    xp += 20;
    xp += Math.round((s.palavras || 0) / 20);
    if (s.checklist) xp += s.checklist * 3;
  });
  return xp;
}

function renderResumo(sessoes) {
  const xp = calcularXP(sessoes);
  const xpPorNivel = 150;
  const nivel = Math.floor(xp / xpPorNivel) + 1;
  const xpNoNivel = xp % xpPorNivel;

  document.getElementById("nivel-atual").textContent = nivel;
  document.getElementById("barra-xp").style.width = `${(xpNoNivel / xpPorNivel) * 100}%`;
  document.getElementById("label-xp").textContent = `${xp} XP total — ${xpNoNivel}/${xpPorNivel} para o próximo nível`;
}

function renderBadges(sessoes) {
  const total = sessoes.length;
  document.getElementById("lista-badges").innerHTML = BADGES.map(b => {
    const conquistado = total >= b.minimo;
    return `
      <div class="badge ${conquistado ? "conquistado" : ""}">
        <span class="icone">${b.icone}</span>
        <span>${b.nome}</span>
        <span class="muted">${conquistado ? "conquistado!" : `${b.minimo} redações`}</span>
      </div>
    `;
  }).join("");
}

function renderTabela(sessoes) {
  const alvo = document.getElementById("tabela-historico");
  if (sessoes.length === 0) {
    alvo.innerHTML = `<p class="muted">Nenhuma sessão registrada ainda. Vá até a Sala de Correção ou a Arena do Tempo para começar sua jornada.</p>`;
    return;
  }

  const linhas = sessoes.slice().reverse().map(s => {
    const data = new Date(s.data).toLocaleDateString("pt-BR");
    const tipoLabel = s.tipo === "simulado" ? "⏳ Simulado" : "🛡️ Correção";
    const extra = s.tipo === "simulado"
      ? `${s.tempoUsadoMin || 0} min`
      : `${s.checklist || 0}/${s.checklistTotal || 10} checklist`;
    return `<tr><td>${data}</td><td>${tipoLabel}</td><td>${escapeHTML(s.tema)}</td><td>${s.palavras || 0}</td><td>${extra}</td></tr>`;
  }).join("");

  alvo.innerHTML = `
    <table>
      <thead><tr><th>Data</th><th>Tipo</th><th>Tema</th><th>Palavras</th><th>Detalhe</th></tr></thead>
      <tbody>${linhas}</tbody>
    </table>
  `;
}

function renderGrafico(sessoes) {
  const canvas = document.getElementById("grafico-canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (sessoes.length === 0) {
    ctx.fillStyle = "#9aa0ad";
    ctx.font = "16px monospace";
    ctx.fillText("Sem dados ainda.", 20, 40);
    return;
  }

  const dados = sessoes.slice(-15);
  const max = Math.max(...dados.map(s => s.palavras || 0), 50);
  const largura = canvas.width / dados.length;
  const alturaMax = canvas.height - 30;

  dados.forEach((s, i) => {
    const h = Math.max(4, ((s.palavras || 0) / max) * alturaMax);
    const x = i * largura + largura * 0.2;
    const y = canvas.height - h - 20;
    ctx.fillStyle = s.tipo === "simulado" ? "#7c3aed" : "#6ee7a8";
    ctx.fillRect(x, y, largura * 0.6, h);
    ctx.fillStyle = "#d6dae2";
    ctx.font = "11px monospace";
    ctx.fillText(String(s.palavras || 0), x, y - 4);
  });

  ctx.fillStyle = "#9aa0ad";
  ctx.font = "12px monospace";
  ctx.fillText("roxo = simulado · verde = correção", 10, canvas.height - 4);
}

function renderTudo() {
  const sessoes = rqLerSessoes();
  renderResumo(sessoes);
  renderBadges(sessoes);
  renderTabela(sessoes);
  renderGrafico(sessoes);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTudo();
  document.getElementById("btn-limpar-historico").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja apagar todo o histórico salvo neste navegador?")) {
      rqLimparSessoes();
      renderTudo();
    }
  });
});
