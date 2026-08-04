/* ===========================================================
   Lógica da página simulado.html — sorteio + cronômetro
=========================================================== */

let segundosRestantes = 90 * 60;
let segundosTotais = 90 * 60;
let intervaloId = null;
let temaAtual = null;

function todosOsTemas() {
  const enem = TEMAS_ENEM.map(t => `[ENEM ${t.ano}] ${t.tema}`);
  const treino = TEMAS_TREINO.map(t => `[Treino] ${t.tema}`);
  return [...enem, ...treino];
}

function sortearTema() {
  const lista = todosOsTemas();
  temaAtual = lista[Math.floor(Math.random() * lista.length)];
  const alvo = document.getElementById("tema-sorteado");
  alvo.classList.remove("hidden");
  alvo.innerHTML = `<span class="ano">DESAFIO SORTEADO</span><h3>${escapeHTML(temaAtual)}</h3>`;
}

function formatarTempo(seg) {
  const m = Math.floor(seg / 60).toString().padStart(2, "0");
  const s = Math.floor(seg % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function atualizarDisplay() {
  const display = document.getElementById("timer-display");
  display.textContent = formatarTempo(segundosRestantes);
  display.classList.toggle("alerta", segundosRestantes <= 5 * 60);
}

function iniciarTimer() {
  if (intervaloId) return;
  intervaloId = setInterval(() => {
    if (segundosRestantes <= 0) {
      clearInterval(intervaloId);
      intervaloId = null;
      atualizarDisplay();
      return;
    }
    segundosRestantes--;
    atualizarDisplay();
  }, 1000);
}

function pausarTimer() {
  clearInterval(intervaloId);
  intervaloId = null;
}

function reiniciarTimer() {
  pausarTimer();
  const minutos = parseInt(document.getElementById("minutos-config").value, 10) || 90;
  segundosTotais = minutos * 60;
  segundosRestantes = segundosTotais;
  atualizarDisplay();
}

function salvarSessaoSimulado() {
  const texto = document.getElementById("rascunho-simulado").value;
  const nPalavras = (texto.trim().match(/\S+/g) || []).length;
  const tempoUsado = segundosTotais - segundosRestantes;

  rqSalvarSessao({
    tipo: "simulado",
    data: new Date().toISOString(),
    tema: temaAtual || "(sem tema sorteado)",
    palavras: nPalavras,
    tempoUsadoMin: Math.round(tempoUsado / 60)
  });

  document.getElementById("msg-salvo-simulado").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarDisplay();

  const temaSalvo = localStorage.getItem("rq-tema-atual");
  if (temaSalvo) {
    temaAtual = temaSalvo;
    const alvo = document.getElementById("tema-sorteado");
    alvo.classList.remove("hidden");
    alvo.innerHTML = `<span class="ano">TEMA DO ORÁCULO</span><h3>${escapeHTML(temaAtual)}</h3>`;
  }

  document.getElementById("btn-sortear").addEventListener("click", sortearTema);
  document.getElementById("btn-iniciar").addEventListener("click", iniciarTimer);
  document.getElementById("btn-pausar").addEventListener("click", pausarTimer);
  document.getElementById("btn-reiniciar").addEventListener("click", reiniciarTimer);
  document.getElementById("minutos-config").addEventListener("change", reiniciarTimer);
  document.getElementById("btn-salvar-simulado").addEventListener("click", salvarSessaoSimulado);
});
