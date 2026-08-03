/* ===========================================================
   Lógica da página corrigir.html — análise heurística de texto
=========================================================== */

const STOPWORDS = new Set([
  "que","de","a","o","e","do","da","em","um","uma","para","com","não","os","as",
  "se","no","na","por","mais","como","mas","dos","das","ao","à","seu","sua","ou",
  "quando","muito","nos","já","eu","também","só","pelo","pela","até","isso","ela",
  "entre","era","depois","sem","mesmo","aos","seus","quem","nas","me","esse","eles",
  "você","essa","num","nem","suas","meu","às","minha","numa","pelos","elas","qual",
  "nós","lhe","deles","essas","esses","pelas","este","dele","tu","te","vocês","vos",
  "lhes","meus","minhas","teu","tua","teus","tuas","nosso","nossa","nossos","nossas",
  "dela","delas","esta","estes","estas","aquele","aquela","aqueles","aquelas","isto",
  "aquilo","é","são","foi","ser","tem","têm","há","assim","dessa","desse","nesse",
  "nessa","neste","nesta","onde","porque","pois","cada","todo","toda","todos","todas"
]);

const EXPRESSOES_INFORMAIS = [
  "né", "tipo assim", "daí", " tipo ", "coisa", " pra ", " pro ", "só que",
  " aí ", "beleza", "gente,", "meio que", "muito irado", "nossa,", " cara,"
];

function contarPalavras(texto) {
  return (texto.trim().match(/\S+/g) || []).length;
}

function contarParagrafos(texto) {
  return texto.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0).length;
}

function contarConectivos(texto) {
  const lower = texto.toLowerCase();
  let encontrados = [];
  Object.values(CONECTIVOS).flat().forEach(c => {
    const termo = c.toLowerCase().replace(",", "").trim();
    if (lower.includes(termo)) encontrados.push(c.replace(",", "").trim());
  });
  return [...new Set(encontrados)];
}

function detectarProposta(texto) {
  const lower = texto.toLowerCase();
  const agentes = ["estado", "governo", "poder público", "escolas", "escola", "ongs", "ong", "mídia", "família", "ministério", "prefeitura", "governo federal", "sociedade civil", "universidades"];
  const meios = ["por meio de", "através de", "mediante", "por intermédio"];
  const finalidades = ["a fim de", "para que", "com o objetivo de", "com a finalidade de", "para garantir", "de modo a"];
  const acoes = ["deve", "deveria", "precisa", "cabe", "é necessário", "faz-se necessário"];

  return {
    temAgente: agentes.some(a => lower.includes(a)),
    temMeio: meios.some(m => lower.includes(m)),
    temFinalidade: finalidades.some(f => lower.includes(f)),
    temAcao: acoes.some(ac => lower.includes(ac))
  };
}

function palavrasRepetidas(texto) {
  const palavras = (texto.toLowerCase().match(/[a-zà-ú]+/g) || []);
  const freq = {};
  palavras.forEach(p => {
    if (p.length < 4 || STOPWORDS.has(p)) return;
    freq[p] = (freq[p] || 0) + 1;
  });
  return Object.entries(freq)
    .filter(([, n]) => n >= 4)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
}

function tamanhoMedioFrases(texto) {
  const frases = texto.split(/[.!?]+/).map(f => f.trim()).filter(f => f.length > 0);
  if (frases.length === 0) return { media: 0, maiorFrase: 0, totalFrases: 0 };
  const tamanhos = frases.map(f => (f.match(/\S+/g) || []).length);
  const media = tamanhos.reduce((a, b) => a + b, 0) / frases.length;
  return { media: Math.round(media), maiorFrase: Math.max(...tamanhos), totalFrases: frases.length };
}

function detectarInformalidades(texto) {
  const lower = " " + texto.toLowerCase() + " ";
  return EXPRESSOES_INFORMAIS.filter(e => lower.includes(e.toLowerCase()));
}

function itemResultado(tipo, titulo, texto) {
  return `<div class="resultado-item ${tipo}"><span class="titulo">${titulo}</span><p>${texto}</p></div>`;
}

function analisarRedacao() {
  const texto = document.getElementById("texto-redacao").value;
  const container = document.getElementById("itens-resultado");
  const tipoProva = document.getElementById("tipo-prova-corrigir").value;

  if (contarPalavras(texto) < 20) {
    container.innerHTML = itemResultado("erro", "TEXTO MUITO CURTO", "Cole uma redação com mais conteúdo para o dragão conseguir analisar.");
    document.getElementById("resultado-corrigir").classList.remove("hidden");
    return;
  }

  const nPalavras = contarPalavras(texto);
  const nParagrafos = contarParagrafos(texto);
  const conectivosUsados = contarConectivos(texto);
  const proposta = detectarProposta(texto);
  const repetidas = palavrasRepetidas(texto);
  const frases = tamanhoMedioFrases(texto);
  const informais = detectarInformalidades(texto);

  let html = "";
  let partesProposta = [];

  // Extensão
  if (nPalavras < 180) {
    html += itemResultado("alerta", "EXTENSÃO", `Seu texto tem ${nPalavras} palavras. Redações nota alta costumam ter entre 250 e 400 palavras — talvez falte desenvolver mais os argumentos.`);
  } else if (nPalavras > 500) {
    html += itemResultado("alerta", "EXTENSÃO", `Seu texto tem ${nPalavras} palavras, o que pode indicar prolixidade. Revise se todo trecho contribui para o argumento.`);
  } else {
    html += itemResultado("ok", "EXTENSÃO", `Seu texto tem ${nPalavras} palavras — dentro da faixa esperada.`);
  }

  if (tipoProva === "unicamp") {
    // UNICAMP: gênero varia, então não cobramos a estrutura fixa do ENEM
    const generoSelect = document.getElementById("genero-corrigir");
    const genero = GENEROS_UNICAMP[generoSelect.value];
    html += itemResultado("alerta", "PARÁGRAFOS", `Foram detectados ${nParagrafos} parágrafo(s). Na UNICAMP não existe número fixo — o que importa é seguir a estrutura do gênero escolhido, não o modelo dissertativo do ENEM.`);
    if (genero) {
      html += itemResultado("alerta", "ADEQUAÇÃO AO GÊNERO", `Você selecionou o gênero <strong>${genero.genero}</strong>. O dragão não consegue verificar isso sozinho — confira manualmente se seu texto inclui: ${genero.estrutura.join("; ")}.`);
    }
  } else {
    // Parágrafos (ENEM/VUNESP)
    if (nParagrafos < 4) {
      html += itemResultado("alerta", "PARÁGRAFOS", `Foram detectados ${nParagrafos} parágrafo(s). O modelo clássico usa 4 a 5 (introdução, 2 desenvolvimentos, conclusão). Separe seu texto com quebras de linha entre parágrafos.`);
    } else {
      html += itemResultado("ok", "PARÁGRAFOS", `Foram detectados ${nParagrafos} parágrafos — estrutura compatível com o modelo dissertativo-argumentativo.`);
    }

    // Proposta de intervenção
    partesProposta = [
      proposta.temAgente ? "agente" : null,
      proposta.temAcao ? "ação" : null,
      proposta.temMeio ? "meio/modo" : null,
      proposta.temFinalidade ? "finalidade" : null
    ].filter(Boolean);
    if (partesProposta.length >= 3) {
      html += itemResultado("ok", "PROPOSTA DE INTERVENÇÃO", `O dragão identificou possíveis elementos de: ${partesProposta.join(", ")}. Confira se cada um está bem explícito e detalhado.`);
    } else {
      html += itemResultado("erro", "PROPOSTA DE INTERVENÇÃO", `Poucos elementos identificados (${partesProposta.join(", ") || "nenhum"}). Sua conclusão deve deixar claro QUEM faz, O QUE faz, COMO faz e PARA QUÊ. Use a Oficina do Mago para gerar um modelo.`);
    }
  }

  // Conectivos
  if (conectivosUsados.length >= 5) {
    html += itemResultado("ok", "CONECTIVOS", `Foram encontrados ${conectivosUsados.length} conectivos do nosso grimório: ${conectivosUsados.join(", ")}.`);
  } else {
    html += itemResultado("alerta", "CONECTIVOS", `Apenas ${conectivosUsados.length} conectivo(s) reconhecido(s). Visite a Oficina do Mago para variar os conectores entre parágrafos e ideias.`);
  }

  // Palavras repetidas
  if (repetidas.length > 0) {
    html += itemResultado("alerta", "REPETIÇÃO DE PALAVRAS", `Palavras usadas com frequência: ${repetidas.map(([p, n]) => `"${p}" (${n}x)`).join(", ")}. Considere sinônimos ou pronomes para variar o vocabulário.`);
  } else {
    html += itemResultado("ok", "REPETIÇÃO DE PALAVRAS", "Nenhuma palavra de conteúdo se repete em excesso. Bom domínio de vocabulário!");
  }

  // Tamanho das frases
  if (frases.maiorFrase > 40) {
    html += itemResultado("alerta", "TAMANHO DAS FRASES", `A frase mais longa tem cerca de ${frases.maiorFrase} palavras (média de ${frases.media} por frase). Frases muito longas prejudicam a coesão — considere dividi-las.`);
  } else {
    html += itemResultado("ok", "TAMANHO DAS FRASES", `Média de ${frases.media} palavras por frase (${frases.totalFrases} frases) — tamanho equilibrado.`);
  }

  // Informalidade
  if (informais.length > 0) {
    html += itemResultado("erro", "REGISTRO INFORMAL", `Foram encontradas expressões informais: ${informais.join(", ")}. Troque por linguagem formal, adequada à norma culta.`);
  } else {
    html += itemResultado("ok", "REGISTRO", "Nenhuma expressão informal comum foi detectada.");
  }

  container.innerHTML = html;
  document.getElementById("resultado-corrigir").classList.remove("hidden");
  document.getElementById("msg-salvo").classList.add("hidden");
  window._ultimaAnalise = { nPalavras, nParagrafos, conectivosUsados: conectivosUsados.length, propostaScore: partesProposta.length, tipoProva };
}

const ITENS_CHECKLIST_ENEM = [
  "Competência 1: revisei ortografia, acentuação e pontuação.",
  "Competência 1: as frases estão bem construídas gramaticalmente.",
  "Competência 2: fiquei dentro do tema proposto, sem fugir ou tangenciar.",
  "Competência 2: usei ao menos um repertório sociocultural bem explicado.",
  "Competência 3: meus argumentos seguem uma ordem lógica e progressiva.",
  "Competência 3: cada parágrafo defende claramente um ponto da tese.",
  "Competência 4: usei conectivos variados entre parágrafos e frases.",
  "Competência 4: evitei repetir as mesmas palavras em excesso.",
  "Competência 5: a proposta de intervenção tem agente, ação, meio e finalidade.",
  "Competência 5: a proposta respeita os direitos humanos."
];

function montarChecklistUnicamp(generoIndex) {
  const genero = GENEROS_UNICAMP[generoIndex];
  const itensGenero = genero ? genero.estrutura.map(passo => `Incluí no texto: ${passo.toLowerCase()}.`) : [];
  return [
    ...itensGenero,
    "Escrevi no gênero pedido, e não em uma dissertação genérica.",
    "Usei o tom e o vocabulário adequados ao gênero (formal, mas coerente com quem fala e para quem).",
    "Revisei ortografia, acentuação e pontuação.",
    "Meus argumentos seguem uma ordem lógica, com base na coletânea de apoio."
  ];
}

function itensChecklistAtuais() {
  const tipoProva = document.getElementById("tipo-prova-corrigir").value;
  if (tipoProva === "unicamp") {
    return montarChecklistUnicamp(document.getElementById("genero-corrigir").value);
  }
  return ITENS_CHECKLIST_ENEM;
}

function renderChecklist() {
  const itens = itensChecklistAtuais();
  const alvo = document.getElementById("checklist-competencias");
  alvo.innerHTML = itens.map((item, i) => `
    <label><input type="checkbox" data-idx="${i}"> ${item}</label>
  `).join("");

  alvo.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", atualizarBarraChecklist);
  });
  atualizarBarraChecklist();
}

function atualizarBarraChecklist() {
  const marcados = document.querySelectorAll("#checklist-competencias input:checked").length;
  const total = document.querySelectorAll("#checklist-competencias input").length || 1;
  document.getElementById("barra-checklist").style.width = `${(marcados / total) * 100}%`;
  document.getElementById("label-checklist").textContent = `${marcados} / ${total} pontos de revisão marcados`;
}

function popularGenerosCorrigir() {
  const select = document.getElementById("genero-corrigir");
  select.innerHTML = GENEROS_UNICAMP.map((g, i) => `<option value="${i}">${g.genero}</option>`).join("");
}

function atualizarModoProva() {
  const tipoProva = document.getElementById("tipo-prova-corrigir").value;
  document.getElementById("campo-genero-corrigir").classList.toggle("hidden", tipoProva !== "unicamp");
  renderChecklist();
}

function salvarSessaoCorrecao() {
  const tema = document.getElementById("tema-redacao").value.trim() || "(tema não informado)";
  const marcados = document.querySelectorAll("#checklist-competencias input:checked").length;
  const total = document.querySelectorAll("#checklist-competencias input").length;
  const analise = window._ultimaAnalise || {};

  rqSalvarSessao({
    tipo: "correcao",
    data: new Date().toISOString(),
    tema,
    palavras: analise.nPalavras || 0,
    paragrafos: analise.nParagrafos || 0,
    checklist: marcados,
    checklistTotal: total
  });

  document.getElementById("msg-salvo").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  rqPrefillTema("tema-redacao");
  popularGenerosCorrigir();
  renderChecklist();
  document.getElementById("tipo-prova-corrigir").addEventListener("change", atualizarModoProva);
  document.getElementById("genero-corrigir").addEventListener("change", renderChecklist);
  document.getElementById("btn-corrigir").addEventListener("click", analisarRedacao);
  document.getElementById("btn-limpar").addEventListener("click", () => {
    document.getElementById("texto-redacao").value = "";
    document.getElementById("resultado-corrigir").classList.add("hidden");
  });
  document.getElementById("btn-salvar-sessao").addEventListener("click", salvarSessaoCorrecao);
});
