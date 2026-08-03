/* ===========================================================
   Base de dados: Repertório sociocultural, Temas, Conectivos
=========================================================== */

// Áreas: sociologia, filosofia, dados, lei, historia, arte
const REPERTORIO = [
  {
    nome: "Zygmunt Bauman",
    area: "sociologia",
    conceito: "Modernidade líquida",
    ideia: "As relações, identidades e instituições da sociedade contemporânea perderam solidez: tudo é fluido, provisório e descartável — dos vínculos afetivos ao mercado de trabalho.",
    uso: "Ótimo para temas sobre relações humanas, redes sociais, consumismo, mercado de trabalho instável e individualismo.",
    temas: ["tecnologia", "trabalho", "cultura", "saude-mental"]
  },
  {
    nome: "Émile Durkheim",
    area: "sociologia",
    conceito: "Fato social e anomia",
    ideia: "Fenômenos sociais existem fora do indivíduo e o coagem a agir de certa forma; quando as normas sociais enfraquecem, surge a anomia — sensação de desorientação e ausência de regras.",
    uso: "Útil para discutir crise de valores, violência urbana, enfraquecimento de instituições (família, escola).",
    temas: ["violencia", "educacao", "desigualdade"]
  },
  {
    nome: "Max Weber",
    area: "sociologia",
    conceito: "Ação social e racionalização",
    ideia: "As ações humanas ganham sentido a partir de valores, tradições ou fins calculados; a modernidade caminha para uma racionalização crescente (burocracia, eficiência) que pode gerar desumanização.",
    uso: "Bom para temas sobre burocracia estatal, tecnologia no trabalho e perda de sentido humano nas instituições.",
    temas: ["trabalho", "tecnologia", "democracia"]
  },
  {
    nome: "Pierre Bourdieu",
    area: "sociologia",
    conceito: "Capital cultural e habitus",
    ideia: "Além do capital econômico, existe o capital cultural (educação, hábitos, bagagem) e social (redes de contato), que se transmitem entre gerações e perpetuam desigualdades mesmo em sistemas 'meritocráticos'.",
    uso: "Essencial para temas sobre desigualdade educacional, mérito x oportunidade, mobilidade social.",
    temas: ["educacao", "desigualdade", "trabalho"]
  },
  {
    nome: "Stuart Hall",
    area: "sociologia",
    conceito: "Identidade cultural na pós-modernidade",
    ideia: "Na globalização, as identidades deixam de ser fixas e passam a ser múltiplas, híbridas e construídas socialmente — o sujeito pós-moderno tem 'identidades contraditórias'.",
    uso: "Aplica-se a temas sobre diversidade, preconceito, identidade de gênero/raça e globalização cultural.",
    temas: ["cultura", "desigualdade"]
  },
  {
    nome: "Anthony Giddens",
    area: "sociologia",
    conceito: "Globalização e modernidade reflexiva",
    ideia: "A globalização intensifica relações sociais em escala mundial, conectando eventos locais e distantes; a modernidade exige que indivíduos reflitam constantemente sobre suas escolhas e identidades.",
    uso: "Bom repertório para temas sobre globalização, redes sociais e novas configurações do trabalho.",
    temas: ["tecnologia", "trabalho", "democracia"]
  },
  {
    nome: "Karl Marx",
    area: "sociologia",
    conceito: "Alienação e luta de classes",
    ideia: "No sistema capitalista, o trabalhador se aliena do produto do seu trabalho e de si mesmo; a sociedade se organiza em torno do conflito entre quem detém os meios de produção e quem vende sua força de trabalho.",
    uso: "Repertório clássico para temas de trabalho, desigualdade social e exploração.",
    temas: ["trabalho", "desigualdade"]
  },
  {
    nome: "Hannah Arendt",
    area: "filosofia",
    conceito: "Banalidade do mal e esfera pública",
    ideia: "O mal pode ser cometido não só por monstros, mas por pessoas comuns que abrem mão de pensar criticamente e apenas obedecem; a vida política saudável depende de um espaço público de debate plural.",
    uso: "Forte para temas sobre intolerância, autoritarismo, desinformação e participação democrática.",
    temas: ["democracia", "violencia", "tecnologia"]
  },
  {
    nome: "Michel Foucault",
    area: "filosofia",
    conceito: "Biopoder e sociedade de vigilância",
    ideia: "O poder moderno não age só pela repressão, mas pelo controle e disciplina dos corpos e da vida (escolas, prisões, hospitais); hoje isso se estende à vigilância digital de dados e comportamentos.",
    uso: "Excelente para temas sobre privacidade, redes sociais, vigilância estatal e controle de dados.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Byung-Chul Han",
    area: "filosofia",
    conceito: "Sociedade do cansaço e do desempenho",
    ideia: "A sociedade contemporânea trocou a repressão externa pela autoexploração: o indivíduo se cobra desempenho constante, gerando esgotamento, ansiedade e depressão.",
    uso: "Muito usado em temas sobre saúde mental, produtividade, redes sociais e cultura do sucesso.",
    temas: ["saude-mental", "trabalho", "tecnologia"]
  },
  {
    nome: "Immanuel Kant",
    area: "filosofia",
    conceito: "Imperativo categórico e autonomia",
    ideia: "Devemos agir segundo princípios que poderiam se tornar lei universal, tratando as pessoas sempre como fins em si mesmas, nunca apenas como meios.",
    uso: "Bom para temas éticos: exploração do trabalho, dignidade humana, uso de dados pessoais.",
    temas: ["trabalho", "tecnologia", "desigualdade"]
  },
  {
    nome: "Jean-Jacques Rousseau",
    area: "filosofia",
    conceito: "Contrato social",
    ideia: "Os indivíduos abrem mão de parte de sua liberdade natural em troca da proteção e organização garantidas pelo Estado, que deve representar a vontade geral do povo.",
    uso: "Aplica-se a temas sobre função do Estado, cidadania e legitimidade das leis.",
    temas: ["democracia", "educacao"]
  },
  {
    nome: "John Locke",
    area: "filosofia",
    conceito: "Direitos naturais",
    ideia: "Todo ser humano nasce com direitos naturais — vida, liberdade e propriedade — que o Estado deve proteger; quando o governo os viola, perde legitimidade.",
    uso: "Bom repertório para temas sobre direitos humanos, cidadania e limites do poder estatal.",
    temas: ["democracia", "desigualdade"]
  },
  {
    nome: "Platão",
    area: "filosofia",
    conceito: "Alegoria da caverna",
    ideia: "Os seres humanos podem viver presos a sombras (aparências, senso comum) e resistir à luz do conhecimento verdadeiro; a educação é o caminho para libertar a mente.",
    uso: "Útil como abertura filosófica em temas sobre educação, desinformação e senso crítico.",
    temas: ["educacao", "tecnologia"]
  },
  {
    nome: "Paulo Freire",
    area: "filosofia",
    conceito: "Educação como prática da liberdade",
    ideia: "A educação não deve ser 'bancária' (depósito de conteúdo), mas dialógica e crítica, formando sujeitos capazes de ler o mundo e transformar sua realidade.",
    uso: "Repertório nacional forte para qualquer tema envolvendo educação e cidadania.",
    temas: ["educacao", "desigualdade"]
  },
  {
    nome: "IBGE",
    area: "dados",
    conceito: "Indicadores socioeconômicos do Brasil",
    ideia: "Órgão oficial de pesquisa estatística do Brasil (PNAD Contínua, Censo); reúne dados sobre pobreza, trabalho, educação e desigualdade regional.",
    uso: "Cite como fonte genérica de dados: 'segundo dados do IBGE, o Brasil ainda apresenta...'. Evite inventar números exatos — use a fonte para dar credibilidade sem citar estatística que você não tem certeza.",
    temas: ["desigualdade", "trabalho", "educacao"]
  },
  {
    nome: "ONU / PNUD — IDH",
    area: "dados",
    conceito: "Índice de Desenvolvimento Humano",
    ideia: "Indicador que combina renda, educação e expectativa de vida para medir desenvolvimento humano dos países, usado para comparar desigualdades globais.",
    uso: "Bom para contextualizar o Brasil em comparação internacional em temas de desigualdade e desenvolvimento.",
    temas: ["desigualdade", "educacao"]
  },
  {
    nome: "UNESCO",
    area: "dados",
    conceito: "Educação, ciência e cultura",
    ideia: "Agência da ONU que promove educação de qualidade, acesso à cultura e preservação do patrimônio; publica relatórios sobre evasão escolar e alfabetização.",
    uso: "Repertório institucional para temas de educação e cultura.",
    temas: ["educacao", "cultura"]
  },
  {
    nome: "OMS",
    area: "dados",
    conceito: "Saúde mental como prioridade global",
    ideia: "A Organização Mundial da Saúde reconhece a saúde mental como parte essencial da saúde geral e alerta para o crescimento de casos de ansiedade e depressão, sobretudo entre jovens.",
    uso: "Fonte de autoridade para qualquer tema sobre saúde mental e bem-estar.",
    temas: ["saude-mental"]
  },
  {
    nome: "Constituição Federal de 1988",
    area: "lei",
    conceito: "Direitos fundamentais",
    ideia: "Garante educação, saúde, trabalho, lazer e dignidade como direitos sociais (art. 6º) e estabelece princípios como igualdade e cidadania.",
    uso: "Use para embasar propostas de intervenção: 'em consonância com o artigo 6º da CF/88, cabe ao Estado garantir...'.",
    temas: ["educacao", "desigualdade", "democracia", "saude-mental"]
  },
  {
    nome: "ECA — Estatuto da Criança e do Adolescente",
    area: "lei",
    conceito: "Proteção integral de crianças e adolescentes",
    ideia: "Lei nº 8.069/1990 que garante proteção integral, prioridade absoluta e direitos específicos a crianças e adolescentes.",
    uso: "Repertório certeiro para temas envolvendo infância, educação e violência contra jovens.",
    temas: ["educacao", "violencia"]
  },
  {
    nome: "LGPD — Lei Geral de Proteção de Dados",
    area: "lei",
    conceito: "Proteção de dados pessoais",
    ideia: "Lei nº 13.709/2018 que regula a coleta e o uso de dados pessoais por empresas e governo, buscando garantir privacidade digital.",
    uso: "Essencial para temas sobre tecnologia, privacidade e redes sociais.",
    temas: ["tecnologia"]
  },
  {
    nome: "Declaração Universal dos Direitos Humanos (1948)",
    area: "lei",
    conceito: "Direitos humanos universais",
    ideia: "Documento da ONU que estabelece direitos e liberdades básicas de todo ser humano, independente de nacionalidade, gênero ou origem.",
    uso: "Repertório universal, serve como base ética para quase qualquer proposta de intervenção.",
    temas: ["desigualdade", "democracia", "violencia"]
  },
  {
    nome: "Marco Civil da Internet",
    area: "lei",
    conceito: "Direitos e deveres no uso da internet no Brasil",
    ideia: "Lei nº 12.965/2014 que regula neutralidade de rede, privacidade e liberdade de expressão online no Brasil.",
    uso: "Use em temas sobre desinformação, discurso de ódio e regulação das redes sociais.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Revolução Industrial",
    area: "historia",
    conceito: "Transformação do trabalho pela tecnologia",
    ideia: "A introdução de máquinas no século XVIII/XIX alterou radicalmente as relações de trabalho, criando novas desigualdades e, mais tarde, direitos trabalhistas.",
    uso: "Bom contraponto histórico para temas sobre automação, IA e futuro do trabalho.",
    temas: ["trabalho", "tecnologia"]
  },
  {
    nome: "Iluminismo",
    area: "historia",
    conceito: "Razão, ciência e direitos individuais",
    ideia: "Movimento intelectual dos séculos XVII-XVIII que valorizou a razão, a ciência e os direitos individuais, influenciando revoluções e constituições modernas.",
    uso: "Útil como repertório de abertura filosófico-histórica em temas sobre ciência, educação e democracia.",
    temas: ["educacao", "democracia"]
  },
  {
    nome: "Ativismo digital (ex.: Primavera Árabe)",
    area: "historia",
    conceito: "Redes sociais como ferramenta de mobilização",
    ideia: "Movimentos como a Primavera Árabe (2010-2011) mostraram o poder das redes sociais para mobilizar protestos e organizar movimentos sociais rapidamente.",
    uso: "Ótimo para temas sobre tecnologia, democracia e participação social.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "1984, de George Orwell",
    area: "arte",
    conceito: "Vigilância e controle totalitário",
    ideia: "Romance distópico que descreve uma sociedade vigiada constantemente pelo Estado ('Big Brother'), antecipando debates sobre privacidade e controle de dados.",
    uso: "Repertório literário clássico para temas sobre vigilância, tecnologia e liberdade.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Admirável Mundo Novo, de Aldous Huxley",
    area: "arte",
    conceito: "Alienação pelo consumo e prazer controlado",
    ideia: "Distopia em que o controle social ocorre não pela força, mas pelo condicionamento, consumo e busca constante por prazer e distração.",
    uso: "Bom para temas sobre consumismo, redes sociais e alienação digital.",
    temas: ["tecnologia", "cultura", "saude-mental"]
  },
  {
    nome: "Black Mirror (série)",
    area: "arte",
    conceito: "Tecnologia, sociedade e seus dilemas éticos",
    ideia: "Antologia que explora, em cada episódio, como novas tecnologias podem intensificar comportamentos humanos e criar dilemas éticos e sociais.",
    uso: "Repertório contemporâneo e acessível para qualquer tema sobre tecnologia e sociedade.",
    temas: ["tecnologia", "saude-mental"]
  }
];

// Temas/áreas usados para filtro cruzado
const AREAS_TEMA = [
  { chave: "educacao", label: "Educação" },
  { chave: "saude-mental", label: "Saúde mental" },
  { chave: "tecnologia", label: "Tecnologia e redes sociais" },
  { chave: "meio-ambiente", label: "Meio ambiente" },
  { chave: "trabalho", label: "Trabalho" },
  { chave: "desigualdade", label: "Desigualdade social" },
  { chave: "violencia", label: "Violência" },
  { chave: "cultura", label: "Cultura e identidade" },
  { chave: "democracia", label: "Democracia e política" }
];

const AREAS_REPERTORIO = [
  { chave: "sociologia", label: "Sociologia" },
  { chave: "filosofia", label: "Filosofia" },
  { chave: "dados", label: "Dados / Órgãos" },
  { chave: "lei", label: "Leis e documentos" },
  { chave: "historia", label: "História / Movimentos" },
  { chave: "arte", label: "Arte / Cultura pop" }
];

// Temas reais de anos anteriores do ENEM (redação oficial)
const TEMAS_ENEM = [
  { ano: 2023, tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil", areas: ["desigualdade", "trabalho"] },
  { ano: 2022, tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil", areas: ["cultura", "desigualdade"] },
  { ano: 2021, tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil", areas: ["desigualdade", "democracia"] },
  { ano: 2019, tema: "Democratização do acesso ao cinema no Brasil", areas: ["cultura", "educacao"] },
  { ano: 2018, tema: "Manipulação do comportamento do usuário pelo controle de dados na internet", areas: ["tecnologia"] },
  { ano: 2017, tema: "Desafios para a formação educacional de surdos no Brasil", areas: ["educacao"] },
  { ano: 2016, tema: "Caminhos para combater a intolerância religiosa no Brasil", areas: ["cultura", "democracia"] },
  { ano: 2015, tema: "A persistência da violência contra a mulher na sociedade brasileira", areas: ["violencia", "desigualdade"] }
];

// Temas de treino originais (não são provas oficiais — uso apenas para prática)
const TEMAS_TREINO = [
  { tema: "Inteligência artificial e o futuro do mercado de trabalho no Brasil", areas: ["tecnologia", "trabalho"] },
  { tema: "Saúde mental dos jovens na era das redes sociais", areas: ["saude-mental", "tecnologia"] },
  { tema: "Desafios para a mobilidade urbana sustentável nas grandes cidades", areas: ["meio-ambiente"] },
  { tema: "Desinformação e seus impactos sobre a democracia brasileira", areas: ["democracia", "tecnologia"] },
  { tema: "O envelhecimento populacional e os desafios para o sistema de saúde", areas: ["desigualdade"] },
  { tema: "Desafios para a universalização do acesso à água potável no Brasil", areas: ["meio-ambiente", "desigualdade"] },
  { tema: "Solidão e isolamento social na sociedade contemporânea", areas: ["saude-mental", "cultura"] },
  { tema: "Desafios para a inclusão de pessoas com deficiência no mercado de trabalho", areas: ["trabalho", "desigualdade"] },
  { tema: "O papel da escola pública no combate à desigualdade social", areas: ["educacao", "desigualdade"] },
  { tema: "Impactos das mudanças climáticas sobre populações vulneráveis no Brasil", areas: ["meio-ambiente", "desigualdade"] }
];

// Palavras-chave para reconhecer a área de um tema digitado livremente
const PALAVRAS_CHAVE_TEMA = {
  "educacao": ["educacao", "escola", "ensino", "alun", "professor", "evasao escolar", "alfabetiz", "universidade", "creche", "pedagog"],
  "saude-mental": ["saude mental", "ansiedade", "depressao", "bem-estar", "bem estar", "suicidio", "burnout", "esgotamento", "psicolog", "emocional"],
  "tecnologia": ["tecnologia", "internet", "redes sociais", "digital", "dados", "inteligencia artificial", " ia ", "aplicativo", "algoritmo", "vigilancia", "smartphone", "celular"],
  "meio-ambiente": ["meio ambiente", "clima", "sustentab", "poluicao", "agua", "desmatamento", "aquecimento global", "residuo", "reciclagem"],
  "trabalho": ["trabalho", "emprego", "mercado de trabalho", "desemprego", "profissao", "carreira", "trabalhador", "automacao"],
  "desigualdade": ["desigualdade", "pobreza", "renda", "exclusao", "vulnerab", "fome", "moradia", "periferia"],
  "violencia": ["violencia", "seguranca publica", "criminalidade", "abuso", "agressao", "homicidio", "armas"],
  "cultura": ["cultura", "identidade", "diversidade", "preconceito", "intoleran", "povos", "comunidades tradicionais", "religiao", "racismo", "genero"],
  "democracia": ["democracia", "politica", "cidadania", "voto", "direitos humanos", "desinformacao", "fake news", "eleicao", "corrupcao"]
};

// Perguntas norteadoras genéricas para ajudar a entender qualquer tema
const PERGUNTAS_NORTEADORAS = [
  "Qual é o problema central escondido por trás desse título?",
  "Quem são os principais grupos afetados por essa questão?",
  "Quais causas históricas, sociais ou econômicas explicam esse problema?",
  "Quais consequências esse problema traz se nada for feito?",
  "Que instituição (Estado, escola, família, mídia...) poderia agir para mudar esse cenário, e como?"
];

// Conectivos organizados por função
const CONECTIVOS = {
  "Para introduzir / apresentar ideia": ["Nos dias atuais,", "Diante desse cenário,", "É notório que", "Sob essa ótica,", "Em meio a esse contexto,"],
  "Para somar ideias": ["Além disso,", "Ademais,", "Não obstante,", "Outrossim,", "Do mesmo modo,"],
  "Para contrapor": ["Entretanto,", "No entanto,", "Todavia,", "Ainda que", "Apesar de"],
  "Para indicar causa": ["Isso ocorre porque", "Uma vez que", "Visto que", "Devido a", "Em razão de"],
  "Para indicar consequência": ["Dessa forma,", "Por conseguinte,", "Como resultado,", "Assim,", "Nesse sentido,"],
  "Para concluir": ["Portanto,", "Em suma,", "Diante do exposto,", "Logo,", "Fica evidente que"]
};
