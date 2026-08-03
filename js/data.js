/* ===========================================================
   Base de dados: Repertório sociocultural, Temas, Conectivos
=========================================================== */

// Áreas: sociologia, filosofia, dados, lei, historia, arte
const REPERTORIO = [
  // ---------------- SOCIOLOGIA ----------------
  {
    nome: "Zygmunt Bauman",
    area: "sociologia",
    obra: "Modernidade Líquida (1999)",
    conceito: "Modernidade líquida",
    ideia: "As relações, identidades e instituições da sociedade contemporânea perderam solidez: tudo é fluido, provisório e descartável — dos vínculos afetivos ao mercado de trabalho.",
    uso: "Ótimo para temas sobre relações humanas, redes sociais, consumismo, mercado de trabalho instável e individualismo.",
    temas: ["tecnologia", "trabalho", "cultura", "saude-mental"]
  },
  {
    nome: "Émile Durkheim",
    area: "sociologia",
    obra: "As Regras do Método Sociológico (1895)",
    conceito: "Fato social e anomia",
    ideia: "Fenômenos sociais existem fora do indivíduo e o coagem a agir de certa forma; quando as normas sociais enfraquecem, surge a anomia — sensação de desorientação e ausência de regras.",
    uso: "Útil para discutir crise de valores, violência urbana, enfraquecimento de instituições (família, escola).",
    temas: ["violencia", "educacao", "desigualdade"]
  },
  {
    nome: "Max Weber",
    area: "sociologia",
    obra: "A Ética Protestante e o Espírito do Capitalismo (1905)",
    conceito: "Ação social e racionalização",
    ideia: "As ações humanas ganham sentido a partir de valores, tradições ou fins calculados; a modernidade caminha para uma racionalização crescente (burocracia, eficiência) que pode gerar desumanização.",
    uso: "Bom para temas sobre burocracia estatal, tecnologia no trabalho e perda de sentido humano nas instituições.",
    temas: ["trabalho", "tecnologia", "democracia"]
  },
  {
    nome: "Pierre Bourdieu",
    area: "sociologia",
    obra: "A Distinção (1979)",
    conceito: "Capital cultural e habitus",
    ideia: "Além do capital econômico, existe o capital cultural (educação, hábitos, bagagem) e social (redes de contato), que se transmitem entre gerações e perpetuam desigualdades mesmo em sistemas 'meritocráticos'.",
    uso: "Essencial para temas sobre desigualdade educacional, mérito x oportunidade, mobilidade social.",
    temas: ["educacao", "desigualdade", "trabalho"]
  },
  {
    nome: "Stuart Hall",
    area: "sociologia",
    obra: "A Identidade Cultural na Pós-Modernidade (1992)",
    conceito: "Identidade cultural na pós-modernidade",
    ideia: "Na globalização, as identidades deixam de ser fixas e passam a ser múltiplas, híbridas e construídas socialmente — o sujeito pós-moderno tem 'identidades contraditórias'.",
    uso: "Aplica-se a temas sobre diversidade, preconceito, identidade de gênero/raça e globalização cultural.",
    temas: ["cultura", "desigualdade"]
  },
  {
    nome: "Anthony Giddens",
    area: "sociologia",
    obra: "As Consequências da Modernidade (1990)",
    conceito: "Globalização e modernidade reflexiva",
    ideia: "A globalização intensifica relações sociais em escala mundial, conectando eventos locais e distantes; a modernidade exige que indivíduos reflitam constantemente sobre suas escolhas e identidades.",
    uso: "Bom repertório para temas sobre globalização, redes sociais e novas configurações do trabalho.",
    temas: ["tecnologia", "trabalho", "democracia"]
  },
  {
    nome: "Karl Marx",
    area: "sociologia",
    obra: "O Capital (1867)",
    conceito: "Alienação e luta de classes",
    ideia: "No sistema capitalista, o trabalhador se aliena do produto do seu trabalho e de si mesmo; a sociedade se organiza em torno do conflito entre quem detém os meios de produção e quem vende sua força de trabalho.",
    uso: "Repertório clássico para temas de trabalho, desigualdade social e exploração.",
    temas: ["trabalho", "desigualdade"]
  },
  {
    nome: "Auguste Comte",
    area: "sociologia",
    obra: "Curso de Filosofia Positiva (1830-1842)",
    conceito: "Positivismo e ordem social",
    ideia: "Defendia que a sociedade evolui por etapas rumo ao conhecimento científico, e que a ordem social depende de um saber racional e organizado sobre a própria sociedade.",
    uso: "Bom repertório de abertura histórico-filosófica para temas sobre ciência, educação e organização social.",
    temas: ["educacao", "democracia"]
  },
  {
    nome: "Antonio Gramsci",
    area: "sociologia",
    obra: "Cadernos do Cárcere (escritos entre 1929-1935)",
    conceito: "Hegemonia cultural",
    ideia: "O poder de um grupo social se mantém não só pela força, mas pelo consenso cultural construído através de escolas, mídia e instituições — quem controla a cultura, influencia a sociedade.",
    uso: "Útil para temas sobre educação, papel da mídia e disputa de narrativas na sociedade.",
    temas: ["educacao", "cultura", "democracia"]
  },
  {
    nome: "Manuel Castells",
    area: "sociologia",
    obra: "A Sociedade em Rede (1996)",
    conceito: "Sociedade em rede",
    ideia: "A revolução da tecnologia da informação reorganizou a economia, o poder e a cultura em torno de redes globais, alterando como trabalhamos, nos comunicamos e exercemos cidadania.",
    uso: "Excelente para temas sobre internet, globalização e transformação do trabalho pela tecnologia.",
    temas: ["tecnologia", "trabalho"]
  },
  {
    nome: "Florestan Fernandes",
    area: "sociologia",
    obra: "A Integração do Negro na Sociedade de Classes (1964)",
    conceito: "Desigualdade racial no Brasil",
    ideia: "A abolição da escravidão não veio acompanhada de políticas de inclusão, o que ajuda a explicar a permanência de desigualdades estruturais entre negros e brancos no Brasil.",
    uso: "Repertório fundamental para temas sobre racismo, desigualdade racial e inclusão social no Brasil.",
    temas: ["desigualdade", "cultura"]
  },
  {
    nome: "Gilberto Freyre",
    area: "sociologia",
    obra: "Casa-Grande & Senzala (1933)",
    conceito: "Formação da sociedade brasileira",
    ideia: "Analisa a formação da sociedade brasileira a partir da relação entre senhores e escravizados na casa-grande e na senzala, moldando a cultura e as hierarquias sociais do país.",
    uso: "Bom para contextualizar historicamente temas sobre identidade nacional, racismo e desigualdade.",
    temas: ["cultura", "desigualdade"]
  },
  {
    nome: "Sérgio Buarque de Holanda",
    area: "sociologia",
    obra: "Raízes do Brasil (1936)",
    conceito: "O 'homem cordial'",
    ideia: "Descreve um traço da cultura política brasileira em que as relações pessoais e afetivas se sobrepõem às normas impessoais na vida pública, dificultando a construção de uma cidadania plena.",
    uso: "Repertório clássico para temas sobre política, corrupção e cultura cívica no Brasil.",
    temas: ["democracia", "cultura"]
  },
  {
    nome: "Darcy Ribeiro",
    area: "sociologia",
    obra: "O Povo Brasileiro (1995)",
    conceito: "Formação do povo brasileiro",
    ideia: "Analisa a formação étnica e social do Brasil a partir do encontro (e da violência) entre povos indígenas, africanos e europeus, defendendo a educação pública de qualidade como caminho para superar desigualdades.",
    uso: "Ótimo para temas sobre educação pública, identidade nacional e desigualdade social.",
    temas: ["educacao", "desigualdade", "cultura"]
  },
  {
    nome: "Jessé Souza",
    area: "sociologia",
    obra: "A Ralé Brasileira: Quem é e Como Vive (2009)",
    conceito: "Desigualdade estrutural brasileira",
    ideia: "Sociólogo brasileiro contemporâneo que analisa como a desigualdade social no Brasil é naturalizada e invisibilizada no debate público, culpabilizando os pobres por sua própria condição.",
    uso: "Bom repertório contemporâneo para temas sobre pobreza, desigualdade e mercado de trabalho.",
    temas: ["desigualdade", "trabalho"]
  },
  {
    nome: "Ulrich Beck",
    area: "sociologia",
    obra: "Sociedade de Risco (1986)",
    conceito: "Sociedade de risco",
    ideia: "A modernização avançada produz riscos globais (ambientais, tecnológicos, nucleares) que não respeitam fronteiras nem classes sociais, exigindo cooperação internacional para serem enfrentados.",
    uso: "Útil para temas sobre mudanças climáticas, tecnologia e cooperação internacional.",
    temas: ["meio-ambiente", "tecnologia"]
  },
  {
    nome: "Erving Goffman",
    area: "sociologia",
    obra: "A Representação do Eu na Vida Cotidiana (1959)",
    conceito: "Interação social como teatro",
    ideia: "As pessoas constroem e representam papéis sociais diante dos outros, como atores em um palco — fenômeno que se intensifica nas redes sociais, onde todos curam uma versão de si mesmos.",
    uso: "Ótimo para temas sobre redes sociais, exposição da vida pessoal e saúde mental.",
    temas: ["tecnologia", "saude-mental"]
  },

  // ---------------- FILOSOFIA ----------------
  {
    nome: "Hannah Arendt",
    area: "filosofia",
    obra: "Origens do Totalitarismo (1951) / Eichmann em Jerusalém (1963)",
    conceito: "Banalidade do mal e esfera pública",
    ideia: "O mal pode ser cometido não só por monstros, mas por pessoas comuns que abrem mão de pensar criticamente e apenas obedecem; a vida política saudável depende de um espaço público de debate plural.",
    uso: "Forte para temas sobre intolerância, autoritarismo, desinformação e participação democrática.",
    temas: ["democracia", "violencia", "tecnologia"]
  },
  {
    nome: "Michel Foucault",
    area: "filosofia",
    obra: "Vigiar e Punir (1975)",
    conceito: "Biopoder e sociedade de vigilância",
    ideia: "O poder moderno não age só pela repressão, mas pelo controle e disciplina dos corpos e da vida (escolas, prisões, hospitais); hoje isso se estende à vigilância digital de dados e comportamentos.",
    uso: "Excelente para temas sobre privacidade, redes sociais, vigilância estatal e controle de dados.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Byung-Chul Han",
    area: "filosofia",
    obra: "Sociedade do Cansaço (2010)",
    conceito: "Sociedade do cansaço e do desempenho",
    ideia: "A sociedade contemporânea trocou a repressão externa pela autoexploração: o indivíduo se cobra desempenho constante, gerando esgotamento, ansiedade e depressão.",
    uso: "Muito usado em temas sobre saúde mental, produtividade, redes sociais e cultura do sucesso.",
    temas: ["saude-mental", "trabalho", "tecnologia"]
  },
  {
    nome: "Immanuel Kant",
    area: "filosofia",
    obra: "Fundamentação da Metafísica dos Costumes (1785)",
    conceito: "Imperativo categórico e autonomia",
    ideia: "Devemos agir segundo princípios que poderiam se tornar lei universal, tratando as pessoas sempre como fins em si mesmas, nunca apenas como meios.",
    uso: "Bom para temas éticos: exploração do trabalho, dignidade humana, uso de dados pessoais.",
    temas: ["trabalho", "tecnologia", "desigualdade"]
  },
  {
    nome: "Jean-Jacques Rousseau",
    area: "filosofia",
    obra: "Do Contrato Social (1762)",
    conceito: "Contrato social",
    ideia: "Os indivíduos abrem mão de parte de sua liberdade natural em troca da proteção e organização garantidas pelo Estado, que deve representar a vontade geral do povo.",
    uso: "Aplica-se a temas sobre função do Estado, cidadania e legitimidade das leis.",
    temas: ["democracia", "educacao"]
  },
  {
    nome: "John Locke",
    area: "filosofia",
    obra: "Segundo Tratado sobre o Governo Civil (1689)",
    conceito: "Direitos naturais",
    ideia: "Todo ser humano nasce com direitos naturais — vida, liberdade e propriedade — que o Estado deve proteger; quando o governo os viola, perde legitimidade.",
    uso: "Bom repertório para temas sobre direitos humanos, cidadania e limites do poder estatal.",
    temas: ["democracia", "desigualdade"]
  },
  {
    nome: "Platão",
    area: "filosofia",
    obra: "A República",
    conceito: "Alegoria da caverna",
    ideia: "Os seres humanos podem viver presos a sombras (aparências, senso comum) e resistir à luz do conhecimento verdadeiro; a educação é o caminho para libertar a mente.",
    uso: "Útil como abertura filosófica em temas sobre educação, desinformação e senso crítico.",
    temas: ["educacao", "tecnologia"]
  },
  {
    nome: "Paulo Freire",
    area: "filosofia",
    obra: "Pedagogia do Oprimido (1968)",
    conceito: "Educação como prática da liberdade",
    ideia: "A educação não deve ser 'bancária' (depósito de conteúdo), mas dialógica e crítica, formando sujeitos capazes de ler o mundo e transformar sua realidade.",
    uso: "Repertório nacional forte para qualquer tema envolvendo educação e cidadania.",
    temas: ["educacao", "desigualdade"]
  },
  {
    nome: "Friedrich Nietzsche",
    area: "filosofia",
    obra: "Assim Falou Zaratustra (1883)",
    conceito: "Crítica à moral estabelecida",
    ideia: "Convida à criação de novos valores próprios, questionando verdades impostas e o conformismo do 'rebanho' diante de padrões sociais e morais herdados.",
    uso: "Bom para temas sobre pressão social, padrões de comportamento e busca por autenticidade.",
    temas: ["cultura", "saude-mental"]
  },
  {
    nome: "Aristóteles",
    area: "filosofia",
    obra: "Política",
    conceito: "O ser humano como 'animal político'",
    ideia: "Para Aristóteles, a vida em sociedade e a participação na vida pública são essenciais à realização plena do ser humano — viver isolado da pólis é viver de forma incompleta.",
    uso: "Bom repertório de abertura para temas sobre cidadania, participação política e vida em comunidade.",
    temas: ["democracia", "educacao"]
  },
  {
    nome: "Simone de Beauvoir",
    area: "filosofia",
    obra: "O Segundo Sexo (1949)",
    conceito: "'Não se nasce mulher, torna-se mulher'",
    ideia: "O papel social atribuído à mulher é uma construção cultural e histórica, não um destino biológico — ideia central do feminismo existencialista.",
    uso: "Essencial para temas sobre desigualdade de gênero, papéis sociais e mercado de trabalho feminino.",
    temas: ["desigualdade", "cultura"]
  },
  {
    nome: "Judith Butler",
    area: "filosofia",
    obra: "Problemas de Gênero (1990)",
    conceito: "Performatividade de gênero",
    ideia: "A identidade de gênero é construída e reafirmada por meio de atos e comportamentos repetidos socialmente, e não algo fixo, natural ou puramente biológico.",
    uso: "Repertório contemporâneo para temas sobre gênero, diversidade e identidade.",
    temas: ["cultura", "desigualdade"]
  },
  {
    nome: "Jürgen Habermas",
    area: "filosofia",
    obra: "Mudança Estrutural da Esfera Pública (1962)",
    conceito: "Esfera pública e ação comunicativa",
    ideia: "Decisões politicamente legítimas nascem do debate público racional entre cidadãos livres e iguais — um ideal ameaçado hoje pela polarização e pela desinformação digital.",
    uso: "Ótimo para temas sobre democracia, redes sociais e qualidade do debate público.",
    temas: ["democracia", "tecnologia"]
  },
  {
    nome: "Theodor Adorno e Max Horkheimer",
    area: "filosofia",
    obra: "Dialética do Esclarecimento (1947)",
    conceito: "Indústria cultural",
    ideia: "A cultura de massa padroniza o entretenimento e o pensamento, transformando a arte em mercadoria e reduzindo o espaço para a reflexão crítica.",
    uso: "Bom para temas sobre mídia, redes sociais, algoritmos e homogeneização cultural.",
    temas: ["cultura", "tecnologia"]
  },
  {
    nome: "Sigmund Freud",
    area: "filosofia",
    obra: "O Mal-Estar na Civilização (1930)",
    conceito: "Tensão entre indivíduo e sociedade",
    ideia: "A vida em sociedade exige que o indivíduo reprima impulsos naturais em troca de segurança e convívio coletivo, o que pode gerar sofrimento psíquico.",
    uso: "Útil para temas sobre saúde mental, pressão social e cobrança por desempenho.",
    temas: ["saude-mental"]
  },
  {
    nome: "Peter Singer",
    area: "filosofia",
    obra: "Ética Prática (1979)",
    conceito: "Ética utilitarista aplicada",
    ideia: "Defende que decisões morais devem considerar a redução do sofrimento e o bem-estar do maior número possível de seres, incluindo animais e gerações futuras.",
    uso: "Bom para temas sobre meio ambiente, sustentabilidade e desigualdade global.",
    temas: ["meio-ambiente", "desigualdade"]
  },
  {
    nome: "Guy Debord",
    area: "filosofia",
    obra: "A Sociedade do Espetáculo (1967)",
    conceito: "Sociedade do espetáculo",
    ideia: "A vida social contemporânea é cada vez mais mediada por imagens e representações — hoje, sobretudo pelas redes sociais —, substituindo a experiência real pela encenação de si mesmo.",
    uso: "Muito bom para temas sobre redes sociais, exposição pessoal e saúde mental.",
    temas: ["tecnologia", "cultura", "saude-mental"]
  },
  {
    nome: "Marshall McLuhan",
    area: "filosofia",
    obra: "Os Meios de Comunicação como Extensões do Homem (1964)",
    conceito: "'O meio é a mensagem'",
    ideia: "A forma como uma tecnologia de comunicação funciona molda a sociedade tanto quanto o conteúdo que ela transmite — cada nova mídia transforma nossos hábitos e percepções.",
    uso: "Repertório clássico para qualquer tema sobre tecnologia, internet e comunicação.",
    temas: ["tecnologia"]
  },

  // ---------------- DADOS / ÓRGÃOS ----------------
  {
    nome: "IBGE",
    area: "dados",
    obra: "PNAD Contínua / Censo Demográfico",
    conceito: "Indicadores socioeconômicos do Brasil",
    ideia: "Órgão oficial de pesquisa estatística do Brasil (PNAD Contínua, Censo); reúne dados sobre pobreza, trabalho, educação e desigualdade regional.",
    uso: "Cite como fonte genérica de dados: 'segundo dados do IBGE, o Brasil ainda apresenta...'. Evite inventar números exatos — use a fonte para dar credibilidade sem citar estatística que você não tem certeza.",
    temas: ["desigualdade", "trabalho", "educacao"]
  },
  {
    nome: "ONU / PNUD — IDH",
    area: "dados",
    obra: "Relatório de Desenvolvimento Humano",
    conceito: "Índice de Desenvolvimento Humano",
    ideia: "Indicador que combina renda, educação e expectativa de vida para medir desenvolvimento humano dos países, usado para comparar desigualdades globais.",
    uso: "Bom para contextualizar o Brasil em comparação internacional em temas de desigualdade e desenvolvimento.",
    temas: ["desigualdade", "educacao"]
  },
  {
    nome: "UNESCO",
    area: "dados",
    obra: "Relatórios sobre educação e cultura",
    conceito: "Educação, ciência e cultura",
    ideia: "Agência da ONU que promove educação de qualidade, acesso à cultura e preservação do patrimônio; publica relatórios sobre evasão escolar e alfabetização.",
    uso: "Repertório institucional para temas de educação e cultura.",
    temas: ["educacao", "cultura"]
  },
  {
    nome: "OMS",
    area: "dados",
    obra: "Relatórios sobre saúde mental global",
    conceito: "Saúde mental como prioridade global",
    ideia: "A Organização Mundial da Saúde reconhece a saúde mental como parte essencial da saúde geral e alerta para o crescimento de casos de ansiedade e depressão, sobretudo entre jovens.",
    uso: "Fonte de autoridade para qualquer tema sobre saúde mental e bem-estar.",
    temas: ["saude-mental"]
  },
  {
    nome: "UNICEF",
    area: "dados",
    obra: "Relatórios sobre direitos da criança",
    conceito: "Proteção à infância",
    ideia: "Agência da ONU dedicada a garantir os direitos de crianças e adolescentes em todo o mundo, incluindo acesso à educação e proteção contra violência e exploração.",
    uso: "Bom para embasar temas sobre infância, educação e violência contra crianças.",
    temas: ["educacao", "violencia"]
  },
  {
    nome: "Ipea",
    area: "dados",
    obra: "Pesquisas sobre desigualdade e mercado de trabalho",
    conceito: "Pesquisa socioeconômica brasileira",
    ideia: "Instituto de Pesquisa Econômica Aplicada, vinculado ao governo federal, produz estudos sobre desigualdade de renda, mercado de trabalho e políticas públicas no Brasil.",
    uso: "Fonte de credibilidade para temas sobre desigualdade social e trabalho no Brasil.",
    temas: ["desigualdade", "trabalho"]
  },
  {
    nome: "Fórum Brasileiro de Segurança Pública",
    area: "dados",
    obra: "Anuário Brasileiro de Segurança Pública",
    conceito: "Dados sobre violência no Brasil",
    ideia: "Organização que publica anualmente indicadores sobre criminalidade, letalidade policial e violência contra grupos vulneráveis no Brasil.",
    uso: "Boa fonte de autoridade para temas sobre segurança pública e violência.",
    temas: ["violencia"]
  },
  {
    nome: "OIT — Organização Internacional do Trabalho",
    area: "dados",
    obra: "Relatórios sobre trabalho decente",
    conceito: "Trabalho decente",
    ideia: "Agência da ONU que estabelece normas internacionais de trabalho e defende condições dignas de emprego, renda e proteção social para todos.",
    uso: "Útil para temas sobre precarização do trabalho, direitos trabalhistas e desemprego.",
    temas: ["trabalho", "desigualdade"]
  },
  {
    nome: "Banco Mundial",
    area: "dados",
    obra: "Relatórios sobre pobreza global",
    conceito: "Pobreza e desenvolvimento",
    ideia: "Organização internacional que financia projetos de desenvolvimento e publica dados comparativos sobre pobreza, renda e desigualdade entre países.",
    uso: "Bom para contextualizar desigualdade brasileira em uma perspectiva global.",
    temas: ["desigualdade"]
  },
  {
    nome: "CGI.br — Comitê Gestor da Internet no Brasil",
    area: "dados",
    obra: "Pesquisa TIC Domicílios",
    conceito: "Acesso à internet no Brasil",
    ideia: "Pesquisa anual que mapeia o acesso e o uso da internet nos domicílios brasileiros, revelando desigualdades digitais entre regiões, rendas e faixas etárias.",
    uso: "Ótimo para embasar temas sobre exclusão digital, tecnologia e desigualdade.",
    temas: ["tecnologia", "desigualdade"]
  },
  {
    nome: "IPCC — Painel Intergovernamental sobre Mudanças Climáticas",
    area: "dados",
    obra: "Relatórios de Avaliação sobre o clima",
    conceito: "Consenso científico sobre a mudança climática",
    ideia: "Painel de cientistas da ONU que avalia periodicamente as evidências científicas sobre o aquecimento global e seus impactos, orientando políticas ambientais.",
    uso: "Fonte de autoridade máxima para qualquer tema sobre meio ambiente e clima.",
    temas: ["meio-ambiente"]
  },

  // ---------------- LEIS E DOCUMENTOS ----------------
  {
    nome: "Constituição Federal de 1988",
    area: "lei",
    obra: "CF/1988, art. 6º e outros",
    conceito: "Direitos fundamentais",
    ideia: "Garante educação, saúde, trabalho, lazer e dignidade como direitos sociais (art. 6º) e estabelece princípios como igualdade e cidadania.",
    uso: "Use para embasar propostas de intervenção: 'em consonância com o artigo 6º da CF/88, cabe ao Estado garantir...'.",
    temas: ["educacao", "desigualdade", "democracia", "saude-mental"]
  },
  {
    nome: "ECA — Estatuto da Criança e do Adolescente",
    area: "lei",
    obra: "Lei nº 8.069/1990",
    conceito: "Proteção integral de crianças e adolescentes",
    ideia: "Garante proteção integral, prioridade absoluta e direitos específicos a crianças e adolescentes.",
    uso: "Repertório certeiro para temas envolvendo infância, educação e violência contra jovens.",
    temas: ["educacao", "violencia"]
  },
  {
    nome: "LGPD — Lei Geral de Proteção de Dados",
    area: "lei",
    obra: "Lei nº 13.709/2018",
    conceito: "Proteção de dados pessoais",
    ideia: "Regula a coleta e o uso de dados pessoais por empresas e governo, buscando garantir privacidade digital.",
    uso: "Essencial para temas sobre tecnologia, privacidade e redes sociais.",
    temas: ["tecnologia"]
  },
  {
    nome: "Declaração Universal dos Direitos Humanos",
    area: "lei",
    obra: "ONU, 1948",
    conceito: "Direitos humanos universais",
    ideia: "Documento da ONU que estabelece direitos e liberdades básicas de todo ser humano, independente de nacionalidade, gênero ou origem.",
    uso: "Repertório universal, serve como base ética para quase qualquer proposta de intervenção.",
    temas: ["desigualdade", "democracia", "violencia"]
  },
  {
    nome: "Marco Civil da Internet",
    area: "lei",
    obra: "Lei nº 12.965/2014",
    conceito: "Direitos e deveres no uso da internet no Brasil",
    ideia: "Regula neutralidade de rede, privacidade e liberdade de expressão online no Brasil.",
    uso: "Use em temas sobre desinformação, discurso de ódio e regulação das redes sociais.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Lei Maria da Penha",
    area: "lei",
    obra: "Lei nº 11.340/2006",
    conceito: "Combate à violência doméstica",
    ideia: "Cria mecanismos para coibir a violência doméstica e familiar contra a mulher, prevendo medidas protetivas e agravamento de penas.",
    uso: "Repertório essencial para temas sobre violência contra a mulher e desigualdade de gênero.",
    temas: ["violencia", "desigualdade"]
  },
  {
    nome: "Lei de Cotas",
    area: "lei",
    obra: "Lei nº 12.711/2012",
    conceito: "Ações afirmativas no ensino superior",
    ideia: "Reserva vagas em universidades e institutos federais para estudantes de escola pública, pretos, pardos, indígenas e pessoas com deficiência.",
    uso: "Ótimo para embasar propostas de intervenção sobre acesso à educação e desigualdade racial/social.",
    temas: ["educacao", "desigualdade"]
  },
  {
    nome: "Estatuto da Pessoa com Deficiência",
    area: "lei",
    obra: "Lei nº 13.146/2015",
    conceito: "Inclusão da pessoa com deficiência",
    ideia: "Garante igualdade de oportunidades e acessibilidade a pessoas com deficiência em todas as esferas da vida social, educacional e profissional.",
    uso: "Use em temas sobre inclusão, acessibilidade e mercado de trabalho.",
    temas: ["desigualdade", "educacao"]
  },
  {
    nome: "LDB — Lei de Diretrizes e Bases da Educação",
    area: "lei",
    obra: "Lei nº 9.394/1996",
    conceito: "Organização da educação nacional",
    ideia: "Estabelece as diretrizes e bases da educação brasileira, definindo níveis, modalidades e responsabilidades de cada ente federativo pela educação.",
    uso: "Bom para embasar propostas de intervenção sobre estrutura e qualidade da educação pública.",
    temas: ["educacao"]
  },
  {
    nome: "Política Nacional de Resíduos Sólidos",
    area: "lei",
    obra: "Lei nº 12.305/2010",
    conceito: "Gestão de resíduos e sustentabilidade",
    ideia: "Estabelece diretrizes para a gestão de resíduos sólidos no Brasil, incluindo responsabilidade compartilhada e incentivo à reciclagem.",
    uso: "Use em propostas de intervenção sobre meio ambiente e sustentabilidade urbana.",
    temas: ["meio-ambiente"]
  },
  {
    nome: "Lei do Feminicídio",
    area: "lei",
    obra: "Lei nº 13.104/2015",
    conceito: "Feminicídio como crime hediondo",
    ideia: "Torna o feminicídio (assassinato de mulheres em razão do gênero) qualificadora do homicídio e crime hediondo, com penas mais rígidas.",
    uso: "Repertório direto para temas sobre violência contra a mulher.",
    temas: ["violencia", "desigualdade"]
  },
  {
    nome: "Acordo de Paris",
    area: "lei",
    obra: "ONU, 2015",
    conceito: "Cooperação internacional pelo clima",
    ideia: "Tratado internacional no qual países se comprometem a limitar o aquecimento global, reduzindo emissões de gases de efeito estufa.",
    uso: "Ótimo repertório para temas ambientais que exigem cooperação global.",
    temas: ["meio-ambiente", "democracia"]
  },

  // ---------------- HISTÓRIA / MOVIMENTOS ----------------
  {
    nome: "Revolução Industrial",
    area: "historia",
    obra: "Inglaterra, séc. XVIII-XIX",
    conceito: "Transformação do trabalho pela tecnologia",
    ideia: "A introdução de máquinas no século XVIII/XIX alterou radicalmente as relações de trabalho, criando novas desigualdades e, mais tarde, direitos trabalhistas.",
    uso: "Bom contraponto histórico para temas sobre automação, IA e futuro do trabalho.",
    temas: ["trabalho", "tecnologia"]
  },
  {
    nome: "Iluminismo",
    area: "historia",
    obra: "Europa, séc. XVII-XVIII",
    conceito: "Razão, ciência e direitos individuais",
    ideia: "Movimento intelectual que valorizou a razão, a ciência e os direitos individuais, influenciando revoluções e constituições modernas.",
    uso: "Útil como repertório de abertura filosófico-histórica em temas sobre ciência, educação e democracia.",
    temas: ["educacao", "democracia"]
  },
  {
    nome: "Ativismo digital (ex.: Primavera Árabe)",
    area: "historia",
    obra: "Oriente Médio e Norte da África, 2010-2011",
    conceito: "Redes sociais como ferramenta de mobilização",
    ideia: "Movimentos como a Primavera Árabe mostraram o poder das redes sociais para mobilizar protestos e organizar movimentos sociais rapidamente.",
    uso: "Ótimo para temas sobre tecnologia, democracia e participação social.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Revolução Francesa",
    area: "historia",
    obra: "França, 1789",
    conceito: "Liberdade, igualdade, fraternidade",
    ideia: "Movimento que derrubou o Antigo Regime na França e difundiu pelo mundo os ideais de direitos individuais, soberania popular e igualdade perante a lei.",
    uso: "Repertório clássico para temas sobre democracia, direitos civis e desigualdade.",
    temas: ["democracia", "desigualdade"]
  },
  {
    nome: "Abolição da escravatura no Brasil",
    area: "historia",
    obra: "Lei Áurea, 1888",
    conceito: "Abolição sem inclusão social",
    ideia: "Encerrou juridicamente a escravidão no Brasil, mas não veio acompanhada de políticas de terra, trabalho ou educação para a população negra recém-liberta, o que ajuda a explicar desigualdades raciais atuais.",
    uso: "Repertório histórico essencial para temas sobre racismo e desigualdade no Brasil.",
    temas: ["desigualdade", "cultura"]
  },
  {
    nome: "Ditadura Militar brasileira",
    area: "historia",
    obra: "Brasil, 1964-1985",
    conceito: "Autoritarismo e censura",
    ideia: "Período de supressão de liberdades democráticas, censura à imprensa e perseguição política no Brasil, referência histórica para discutir a importância da democracia e da liberdade de expressão.",
    uso: "Bom contraponto histórico para temas sobre democracia, censura e direitos civis.",
    temas: ["democracia", "violencia"]
  },
  {
    nome: "Movimento Diretas Já",
    area: "historia",
    obra: "Brasil, 1983-1984",
    conceito: "Mobilização popular pela democracia",
    ideia: "Campanha popular que reuniu multidões pelo fim do regime militar e por eleições diretas, símbolo histórico de participação cidadã e luta pela democracia no Brasil.",
    uso: "Ótimo repertório para temas sobre participação política e cidadania.",
    temas: ["democracia"]
  },
  {
    nome: "Segunda Guerra Mundial e o Holocausto",
    area: "historia",
    obra: "Europa, 1939-1945",
    conceito: "Intolerância e extremismo levados ao limite",
    ideia: "Episódio histórico que expõe os riscos do extremismo político, do preconceito institucionalizado e da desumanização do outro, usado até hoje como alerta contra discursos de ódio.",
    uso: "Repertório forte para temas sobre intolerância, discurso de ódio e direitos humanos.",
    temas: ["violencia", "cultura", "democracia"]
  },

  // ---------------- ARTE / CULTURA POP ----------------
  {
    nome: "1984, de George Orwell",
    area: "arte",
    obra: "Romance, 1949",
    conceito: "Vigilância e controle totalitário",
    ideia: "Romance distópico que descreve uma sociedade vigiada constantemente pelo Estado ('Big Brother'), antecipando debates sobre privacidade e controle de dados.",
    uso: "Repertório literário clássico para temas sobre vigilância, tecnologia e liberdade.",
    temas: ["tecnologia", "democracia"]
  },
  {
    nome: "Admirável Mundo Novo, de Aldous Huxley",
    area: "arte",
    obra: "Romance, 1932",
    conceito: "Alienação pelo consumo e prazer controlado",
    ideia: "Distopia em que o controle social ocorre não pela força, mas pelo condicionamento, consumo e busca constante por prazer e distração.",
    uso: "Bom para temas sobre consumismo, redes sociais e alienação digital.",
    temas: ["tecnologia", "cultura", "saude-mental"]
  },
  {
    nome: "Black Mirror (série)",
    area: "arte",
    obra: "Série de TV, desde 2011",
    conceito: "Tecnologia, sociedade e seus dilemas éticos",
    ideia: "Antologia que explora, em cada episódio, como novas tecnologias podem intensificar comportamentos humanos e criar dilemas éticos e sociais.",
    uso: "Repertório contemporâneo e acessível para qualquer tema sobre tecnologia e sociedade.",
    temas: ["tecnologia", "saude-mental"]
  },
  {
    nome: "Vidas Secas, de Graciliano Ramos",
    area: "arte",
    obra: "Romance, 1938",
    conceito: "Seca e desigualdade no sertão",
    ideia: "Retrata a desumanização de uma família de retirantes diante da seca e da miséria no sertão nordestino, expondo o abandono do poder público.",
    uso: "Repertório literário nacional forte para temas sobre desigualdade regional e meio ambiente.",
    temas: ["desigualdade", "meio-ambiente"]
  },
  {
    nome: "Quarto de Despejo, de Carolina Maria de Jesus",
    area: "arte",
    obra: "Diário, 1960",
    conceito: "Fome e vida na favela",
    ideia: "Diário de uma catadora de papel que retrata, em primeira pessoa, a fome e a exclusão social nas favelas de São Paulo em meados do século XX.",
    uso: "Repertório potente e humano para temas sobre pobreza, fome e desigualdade urbana.",
    temas: ["desigualdade"]
  },
  {
    nome: "Capitães da Areia, de Jorge Amado",
    area: "arte",
    obra: "Romance, 1937",
    conceito: "Infância marginalizada",
    ideia: "Acompanha um grupo de meninos de rua na Bahia, expondo o abandono social de crianças e adolescentes e a ausência do Estado.",
    uso: "Bom para temas sobre infância vulnerável, violência e educação.",
    temas: ["violencia", "desigualdade", "educacao"]
  },
  {
    nome: "Que Horas Ela Volta? (filme)",
    area: "arte",
    obra: "Filme, 2015",
    conceito: "Trabalho doméstico e desigualdade",
    ideia: "Expõe as hierarquias sociais e afetivas entre patrões e empregada doméstica no Brasil, revelando desigualdades de classe naturalizadas no cotidiano.",
    uso: "Repertório contemporâneo forte para temas sobre trabalho doméstico e desigualdade social.",
    temas: ["trabalho", "desigualdade"]
  },
  {
    nome: "Tempos Modernos, de Charlie Chaplin",
    area: "arte",
    obra: "Filme, 1936",
    conceito: "Desumanização pelo trabalho industrial",
    ideia: "Sátira sobre a mecanização do trabalho e a submissão do operário à lógica da linha de produção, antecipando debates sobre automação.",
    uso: "Ótimo contraponto histórico-artístico para temas sobre trabalho e tecnologia.",
    temas: ["trabalho", "tecnologia"]
  },
  {
    nome: "WALL-E (filme)",
    area: "arte",
    obra: "Filme de animação, 2008",
    conceito: "Consumismo e degradação ambiental",
    ideia: "Retrata um futuro marcado por lixo e consumo desenfreado, alertando sobre a relação entre tecnologia, consumo excessivo e meio ambiente.",
    uso: "Repertório acessível para temas sobre sustentabilidade, consumo e meio ambiente.",
    temas: ["meio-ambiente", "tecnologia"]
  },
  {
    nome: "Democracia em Vertigem (documentário)",
    area: "arte",
    obra: "Documentário, 2019",
    conceito: "Crise política brasileira",
    ideia: "Documentário que acompanha a crise política do Brasil na última década e discute a fragilidade das instituições democráticas.",
    uso: "Repertório contemporâneo para temas sobre democracia e crise institucional no Brasil.",
    temas: ["democracia"]
  },

  // ---------------- SOCIOLOGIA (segunda leva) ----------------
  {
    nome: "Milton Santos",
    area: "sociologia",
    obra: "Por uma Outra Globalização (2000)",
    conceito: "Globalização perversa",
    ideia: "Geógrafo brasileiro que criticava a globalização como um processo que aprofunda desigualdades entre países e regiões, beneficiando poucos em detrimento da maioria.",
    uso: "Ótimo repertório nacional para temas sobre globalização, desigualdade regional e tecnologia.",
    temas: ["desigualdade", "tecnologia"]
  },
  {
    nome: "C. Wright Mills",
    area: "sociologia",
    obra: "A Imaginação Sociológica (1959)",
    conceito: "Imaginação sociológica",
    ideia: "Defende que problemas pessoais (desemprego, ansiedade) só são plenamente compreendidos quando conectados a questões estruturais mais amplas da sociedade.",
    uso: "Bom para conectar experiências individuais a problemas sociais mais amplos em qualquer tema.",
    temas: ["trabalho", "saude-mental", "desigualdade"]
  },
  {
    nome: "Norbert Elias",
    area: "sociologia",
    obra: "O Processo Civilizador (1939)",
    conceito: "Processo civilizador",
    ideia: "Analisa como padrões de comportamento e autocontrole foram historicamente construídos nas sociedades ocidentais, moldando normas sociais que consideramos 'naturais'.",
    uso: "Útil para discutir mudanças de comportamento social ao longo do tempo, inclusive nas redes sociais.",
    temas: ["cultura", "tecnologia"]
  },
  {
    nome: "Naomi Klein",
    area: "sociologia",
    obra: "Isso Muda Tudo: Capitalismo x Clima (2014)",
    conceito: "Capitalismo e crise climática",
    ideia: "Argumenta que o modelo econômico baseado em consumo e crescimento ilimitado é incompatível com a preservação ambiental, exigindo mudanças estruturais e não só individuais.",
    uso: "Forte para temas ambientais que exigem repensar o modelo econômico, não só hábitos de consumo.",
    temas: ["meio-ambiente", "desigualdade"]
  },
  {
    nome: "Yuval Noah Harari",
    area: "sociologia",
    obra: "Sapiens: Uma Breve História da Humanidade (2011) / 21 Lições para o Século 21 (2018)",
    conceito: "Tecnologia e o futuro da humanidade",
    ideia: "Discute como avanços em inteligência artificial e biotecnologia podem transformar radicalmente o trabalho, a política e a própria natureza humana nas próximas décadas.",
    uso: "Ótimo para temas sobre inteligência artificial, futuro do trabalho e ética tecnológica.",
    temas: ["tecnologia", "trabalho"]
  },
  {
    nome: "Achille Mbembe",
    area: "sociologia",
    obra: "Necropolítica (2016)",
    conceito: "Necropolítica",
    ideia: "Conceito que descreve como certos Estados exercem poder decidindo, na prática, quem pode viver e quem é deixado à morte, frequentemente ao longo de linhas raciais e sociais.",
    uso: "Repertório denso para temas sobre violência de Estado, racismo e segurança pública.",
    temas: ["violencia", "desigualdade"]
  },
  {
    nome: "bell hooks",
    area: "sociologia",
    obra: "Ensinando a Transgredir (1994)",
    conceito: "Educação como prática de liberdade e interseccionalidade",
    ideia: "Defende uma educação engajada que reconheça como raça, gênero e classe se cruzam na experiência de exclusão, e que a sala de aula pode ser espaço de libertação.",
    uso: "Bom para temas sobre educação, gênero e raça de forma interseccional.",
    temas: ["educacao", "desigualdade", "cultura"]
  },
  {
    nome: "Silvio Almeida",
    area: "sociologia",
    obra: "Racismo Estrutural (2019)",
    conceito: "Racismo estrutural",
    ideia: "Filósofo e advogado brasileiro que argumenta que o racismo não é um desvio individual, mas parte da estrutura política, econômica e social que organiza a sociedade brasileira.",
    uso: "Repertório contemporâneo essencial para temas sobre racismo e desigualdade racial no Brasil.",
    temas: ["desigualdade", "cultura", "violencia"]
  },
  {
    nome: "Djamila Ribeiro",
    area: "sociologia",
    obra: "Lugar de Fala (2017)",
    conceito: "Lugar de fala",
    ideia: "Filósofa brasileira que discute como a posição social de quem fala (raça, gênero, classe) influencia sua voz e visibilidade no debate público.",
    uso: "Bom para temas sobre representatividade, racismo e desigualdade de gênero.",
    temas: ["desigualdade", "cultura"]
  },
  {
    nome: "Marilena Chauí",
    area: "sociologia",
    obra: "Convite à Filosofia (1994) / Brasil: Mito Fundador e Sociedade Autoritária (2000)",
    conceito: "Autoritarismo social brasileiro",
    ideia: "Filósofa brasileira que analisa como o autoritarismo se enraíza nas relações sociais cotidianas do Brasil, muito além das instituições políticas formais.",
    uso: "Repertório nacional forte para temas sobre democracia, cidadania e cultura política.",
    temas: ["democracia", "cultura"]
  },

  // ---------------- FILOSOFIA (segunda leva) ----------------
  {
    nome: "John Rawls",
    area: "filosofia",
    obra: "Uma Teoria da Justiça (1971)",
    conceito: "Justiça como equidade",
    ideia: "Propõe que uma sociedade justa é aquela que organizaríamos sem saber qual posição social ocuparíamos nela ('véu da ignorância'), o que favorece políticas que protegem os mais vulneráveis.",
    uso: "Excelente para embasar propostas de intervenção que busquem equidade social.",
    temas: ["desigualdade", "democracia"]
  },
  {
    nome: "Amartya Sen",
    area: "filosofia",
    obra: "Desenvolvimento como Liberdade (1999)",
    conceito: "Desenvolvimento como expansão de liberdades",
    ideia: "Economista e filósofo que defende que o desenvolvimento de um país deve ser medido pela ampliação das liberdades reais das pessoas (saúde, educação, participação), não apenas pelo crescimento econômico.",
    uso: "Bom para temas sobre desigualdade, educação e desenvolvimento social.",
    temas: ["desigualdade", "educacao"]
  },
  {
    nome: "Thomas Piketty",
    area: "filosofia",
    obra: "O Capital no Século XXI (2013)",
    conceito: "Concentração de renda e riqueza",
    ideia: "Economista que demonstra, com dados históricos, a tendência do capitalismo a concentrar riqueza no topo da sociedade quando não é contido por políticas redistributivas.",
    uso: "Ótimo para embasar temas sobre desigualdade de renda e tributação.",
    temas: ["desigualdade"]
  },
  {
    nome: "Edward Said",
    area: "filosofia",
    obra: "Orientalismo (1978)",
    conceito: "Orientalismo e o olhar eurocêntrico",
    ideia: "Mostra como o Ocidente historicamente construiu uma visão distorcida e estereotipada de outras culturas ('o Oriente'), naturalizando hierarquias entre povos.",
    uso: "Bom para temas sobre preconceito cultural, xenofobia e representação de minorias.",
    temas: ["cultura", "desigualdade"]
  },

  // ---------------- DADOS / ÓRGÃOS (segunda leva) ----------------
  {
    nome: "Atlas da Violência (Ipea/FBSP)",
    area: "dados",
    obra: "Publicação anual",
    conceito: "Mapeamento da violência letal no Brasil",
    ideia: "Estudo conjunto que mapeia homicídios no Brasil por região, raça, gênero e idade, evidenciando como a violência letal atinge de forma desproporcional jovens negros.",
    uso: "Fonte robusta para temas sobre violência e desigualdade racial.",
    temas: ["violencia", "desigualdade"]
  },
  {
    nome: "PISA (Programa Internacional de Avaliação de Estudantes)",
    area: "dados",
    obra: "Avaliação da OCDE",
    conceito: "Comparação internacional de aprendizagem",
    ideia: "Avaliação aplicada pela OCDE a estudantes de 15 anos em diversos países, usada para comparar a qualidade da educação básica entre nações, incluindo o Brasil.",
    uso: "Bom repertório para temas sobre qualidade da educação básica brasileira.",
    temas: ["educacao"]
  },
  {
    nome: "Transparência Internacional",
    area: "dados",
    obra: "Índice de Percepção da Corrupção",
    conceito: "Percepção da corrupção nos países",
    ideia: "Organização que publica anualmente um índice comparando a percepção de corrupção no setor público de diferentes países ao redor do mundo.",
    uso: "Útil para temas sobre corrupção, transparência e confiança nas instituições.",
    temas: ["democracia"]
  },
  {
    nome: "WWF",
    area: "dados",
    obra: "Relatório Planeta Vivo",
    conceito: "Perda de biodiversidade global",
    ideia: "Organização internacional que monitora a saúde dos ecossistemas do planeta e alerta para a perda acelerada de biodiversidade causada pela ação humana.",
    uso: "Fonte de autoridade para temas sobre meio ambiente e biodiversidade.",
    temas: ["meio-ambiente"]
  },

  // ---------------- LEIS E DOCUMENTOS (segunda leva) ----------------
  {
    nome: "Estatuto do Idoso",
    area: "lei",
    obra: "Lei nº 10.741/2003",
    conceito: "Proteção à pessoa idosa",
    ideia: "Garante direitos e proteção prioritária à pessoa idosa no Brasil, incluindo saúde, transporte gratuito e combate à negligência e ao abandono.",
    uso: "Repertório direto para temas sobre envelhecimento populacional e direitos da pessoa idosa.",
    temas: ["desigualdade"]
  },
  {
    nome: "Lei de Cotas Raciais no Serviço Público",
    area: "lei",
    obra: "Lei nº 12.990/2014",
    conceito: "Ação afirmativa em concursos públicos",
    ideia: "Reserva 20% das vagas em concursos públicos federais para candidatos negros, como medida de reparação histórica e inclusão no mercado de trabalho.",
    uso: "Bom para embasar propostas de intervenção sobre desigualdade racial e mercado de trabalho.",
    temas: ["desigualdade", "trabalho"]
  },
  {
    nome: "Convenção sobre os Direitos da Criança",
    area: "lei",
    obra: "ONU, 1989",
    conceito: "Direitos internacionais da infância",
    ideia: "Tratado internacional que estabelece direitos fundamentais de proteção, saúde e educação para todas as crianças do mundo.",
    uso: "Repertório universal para temas sobre infância e direitos humanos.",
    temas: ["educacao", "violencia"]
  },

  // ---------------- HISTÓRIA (segunda leva) ----------------
  {
    nome: "Apartheid e Nelson Mandela",
    area: "historia",
    obra: "África do Sul, 1948-1994",
    conceito: "Segregação racial institucionalizada",
    ideia: "Sistema de segregação racial legalizado na África do Sul, derrubado após décadas de resistência liderada por Nelson Mandela, símbolo mundial da luta contra o racismo institucional.",
    uso: "Repertório histórico forte para temas sobre racismo, segregação e reconciliação social.",
    temas: ["desigualdade", "violencia", "cultura"]
  },
  {
    nome: "Movimento pelos Direitos Civis nos EUA",
    area: "historia",
    obra: "Estados Unidos, décadas de 1950-1960",
    conceito: "Luta contra a segregação racial",
    ideia: "Movimento liderado por figuras como Martin Luther King Jr. que lutou pelo fim da segregação racial legal nos Estados Unidos, usando resistência não violenta.",
    uso: "Bom repertório para temas sobre racismo, ativismo e conquista de direitos civis.",
    temas: ["desigualdade", "violencia"]
  },

  // ---------------- ARTE / CULTURA POP (segunda leva) ----------------
  {
    nome: "Parasita (filme)",
    area: "arte",
    obra: "Filme, 2019 (vencedor do Oscar de Melhor Filme)",
    conceito: "Desigualdade social extrema",
    ideia: "Filme sul-coreano que retrata, através da convivência entre duas famílias, o abismo social entre ricos e pobres e as tensões que essa desigualdade produz.",
    uso: "Repertório muito citado e atual para temas sobre desigualdade social.",
    temas: ["desigualdade"]
  },
  {
    nome: "Ainda Estou Aqui (filme)",
    area: "arte",
    obra: "Filme, 2024, dirigido por Walter Salles",
    conceito: "Memória da ditadura militar brasileira",
    ideia: "Baseado em fatos reais, retrata os efeitos do desaparecimento forçado de um opositor político durante a ditadura militar sobre sua família, discutindo memória, justiça e democracia.",
    uso: "Repertório nacional muito atual para temas sobre democracia, memória histórica e direitos humanos.",
    temas: ["democracia", "violencia"]
  },
  {
    nome: "O Cortiço, de Aluísio Azevedo",
    area: "arte",
    obra: "Romance naturalista, 1890",
    conceito: "Miséria e coletividade urbana",
    ideia: "Retrata a vida em um cortiço no Rio de Janeiro do século XIX, expondo a miséria urbana e as condições precárias de moradia da população pobre.",
    uso: "Repertório literário clássico para temas sobre moradia, urbanização e desigualdade.",
    temas: ["desigualdade"]
  },
  {
    nome: "\"Cidadão\", de Zé Ramalho",
    area: "arte",
    obra: "Canção, 1978",
    conceito: "Trabalho, migração e desigualdade",
    ideia: "Canção que narra a trajetória de um operário migrante que constrói prédios luxuosos na cidade grande sem nunca poder morar neles, expondo a desigualdade social brasileira.",
    uso: "Repertório musical acessível para temas sobre trabalho, moradia e desigualdade urbana.",
    temas: ["trabalho", "desigualdade"]
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

// Temas reais de anos anteriores do ENEM (redação oficial, confirmados pelo INEP)
const TEMAS_ENEM = [
  { ano: 2025, tema: "Perspectivas acerca do envelhecimento na sociedade brasileira", areas: ["desigualdade"] },
  { ano: 2024, tema: "Desafios para a valorização da herança africana no Brasil", areas: ["cultura", "desigualdade"] },
  { ano: 2023, tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil", areas: ["desigualdade", "trabalho"] },
  { ano: 2022, tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil", areas: ["cultura", "desigualdade"] },
  { ano: 2021, tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil", areas: ["desigualdade", "democracia"] },
  { ano: 2019, tema: "Democratização do acesso ao cinema no Brasil", areas: ["cultura", "educacao"] },
  { ano: 2018, tema: "Manipulação do comportamento do usuário pelo controle de dados na internet", areas: ["tecnologia"] },
  { ano: 2017, tema: "Desafios para a formação educacional de surdos no Brasil", areas: ["educacao"] },
  { ano: 2016, tema: "Caminhos para combater a intolerância religiosa no Brasil", areas: ["cultura", "democracia"] },
  { ano: 2015, tema: "A persistência da violência contra a mulher na sociedade brasileira", areas: ["violencia", "desigualdade"] }
];

// Propostas reais de redação da UNICAMP (Comvest) — cada ano costuma trazer
// duas propostas de gêneros textuais diferentes, não apenas um "tema" único
const TEMAS_UNICAMP = [
  {
    ano: 2025,
    propostas: [
      { genero: "Projeto de lei", tema: "Texto de apresentação de um projeto de lei que estabeleça igualdade de gênero nas cadeiras do Congresso Nacional", areas: ["desigualdade", "democracia"] },
      { genero: "Comunicado formal", tema: "Comunicado a responsáveis de alunos do ensino fundamental sobre o hábito de apostar dinheiro em jogos de azar (apostas online) envolvendo crianças e adolescentes", areas: ["saude-mental", "educacao"] }
    ]
  },
  {
    ano: 2024,
    propostas: [
      { genero: "Carta de denúncia", tema: "Carta de denúncia sobre trabalho doméstico em condição análoga à escravidão", areas: ["trabalho", "desigualdade"] },
      { genero: "Discurso", tema: "Discurso sobre refugiados e asilo político", areas: ["desigualdade", "democracia"] }
    ]
  },
  {
    ano: 2023,
    propostas: [
      { genero: "Convocação", tema: "Convocação para reunião de associação de moradores contra a abertura de um clube de tiro no bairro, no contexto da flexibilização do porte de armas", areas: ["violencia", "democracia"] },
      { genero: "Testemunho", tema: "Testemunho de um estudante do ensino médio sobre discriminação racial no ambiente escolar (educação antirracista)", areas: ["cultura", "educacao"] }
    ]
  },
  {
    ano: 2022,
    propostas: [
      { genero: "Postagem / textão", tema: "Postagem de rede social sobre a exposição de crianças e adolescentes na internet", areas: ["tecnologia", "educacao"] },
      { genero: "Manifesto", tema: "Manifesto sobre cortes de financiamento à ciência no Brasil", areas: ["educacao"] }
    ]
  }
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

// Exemplo completo de redação ENEM (tema de treino), parágrafo a parágrafo,
// usando repertórios já presentes na Biblioteca do Dragão
const EXEMPLO_ENEM = {
  tema: "Saúde mental dos jovens na era das redes sociais",
  introducao: "Na obra 1984, George Orwell descreve uma sociedade vigiada constantemente, incapaz de desfrutar de privacidade genuína — cenário que, guardadas as devidas proporções, ecoa na hiperexposição promovida pelas redes sociais contemporâneas. Nesse contexto, evidencia-se que o uso excessivo dessas plataformas tem comprometido a saúde mental dos jovens brasileiros, problema explicado tanto pela pressão por uma vida idealizada quanto pela ausência de políticas públicas de educação digital.",
  desenvolvimento1: "Em primeiro lugar, é inegável que a exposição constante a padrões de vida idealizados intensifica quadros de ansiedade entre adolescentes. Segundo o filósofo Byung-Chul Han, em Sociedade do Cansaço, o indivíduo contemporâneo se torna 'explorador de si mesmo', cobrando-se desempenho e felicidade constantes — cobrança amplificada pelas redes sociais, que expõem apenas recortes idealizados da vida alheia. Dessa forma, comparações constantes geram sentimentos de inadequação, sobretudo entre jovens em formação identitária.",
  desenvolvimento2: "Ademais, a ausência de educação digital nas escolas agrava esse cenário. Embora a Lei de Diretrizes e Bases da Educação (LDB) estabeleça a formação integral do estudante como objetivo da educação básica, poucas escolas brasileiras incluem em seus currículos discussões sobre uso saudável da tecnologia. Por conseguinte, os jovens chegam às redes sociais sem preparo crítico para lidar com a pressão social ali presente, tornando-se mais vulneráveis aos efeitos negativos sobre sua saúde mental.",
  conclusao: "Portanto, faz-se necessário o enfrentamento desse problema. Cabe ao Ministério da Educação, em parceria com as secretarias estaduais de educação, incluir a educação midiática e digital na grade curricular do ensino fundamental e médio, por meio de oficinas e materiais didáticos específicos, a fim de preparar os estudantes para um uso mais consciente das redes sociais. Somente assim será possível mitigar os impactos do ambiente digital sobre a saúde mental da juventude brasileira."
};

// Estruturas e exemplos por gênero textual cobrado na UNICAMP (a prova varia
// o gênero a cada edição, ao contrário do ENEM que é sempre dissertativo)
const GENEROS_UNICAMP = [
  {
    genero: "Carta (aberta ou de denúncia)",
    quando: "Pede um posicionamento formal dirigido a uma autoridade, instituição ou ao público, denunciando ou defendendo algo.",
    estrutura: ["Local e data", "Vocativo (a quem se dirige)", "Parágrafo de apresentação do problema", "Parágrafos de argumentação", "Parágrafo de reivindicação/fechamento", "Despedida e identificação do remetente, conforme o comando"],
    exemplo: "São Paulo, 14 de outubro de 2025. Prezados responsáveis pela fiscalização do trabalho no estado, venho, por meio desta carta, denunciar uma prática recorrente e ainda invisibilizada em nossa sociedade: [...]"
  },
  {
    genero: "Discurso",
    quando: "Pede um texto para ser lido em voz alta diante de um público específico (assembleia, evento, comunidade).",
    estrutura: ["Saudação ao público", "Contextualização do tema", "Argumentos organizados, combinando razão e emoção", "Chamado à ação", "Encerramento marcante"],
    exemplo: "Senhoras e senhores, agradeço a oportunidade de estar aqui hoje para falar sobre um tema que exige urgência: [...]"
  },
  {
    genero: "Manifesto",
    quando: "Pede a defesa pública e coletiva de uma posição, geralmente em nome de um grupo ou coletivo.",
    estrutura: ["Identificação do grupo que assina", "Denúncia do problema", "Defesa de princípios e valores", "Reivindicações claras e diretas", "Frase de efeito no fechamento"],
    exemplo: "Nós, estudantes e pesquisadores brasileiros, vimos a público manifestar nossa preocupação com [...]"
  },
  {
    genero: "Projeto de lei / texto de apresentação",
    quando: "Pede a formulação (ou apresentação) de uma proposta legislativa.",
    estrutura: ["Título do projeto", "Justificativa: por que a lei é necessária", "Artigos numerados descrevendo a medida", "Parágrafo final reforçando o benefício social"],
    exemplo: "Projeto de Lei nº X/2025. Institui medidas de incentivo à igualdade de gênero nas candidaturas ao Congresso Nacional. Justificativa: considerando que [...]"
  },
  {
    genero: "Comunicado formal",
    quando: "Pede um aviso oficial e objetivo dirigido a um grupo específico (pais, funcionários, comunidade escolar).",
    estrutura: ["Identificação de quem comunica e para quem", "Assunto declarado logo no início", "Explicação objetiva do fato ou orientação", "Instruções práticas, se houver", "Encerramento cordial"],
    exemplo: "Comunicado aos responsáveis. Informamos que a escola identificou, entre os alunos, um aumento no hábito de participar de apostas online [...]"
  },
  {
    genero: "Convocação",
    quando: "Pede a mobilização de pessoas para uma reunião ou ação coletiva.",
    estrutura: ["Chamada direta ('Convocamos...')", "Motivo da convocação", "Data, hora e local (ou equivalente no enredo)", "Argumento de urgência", "Reforço do convite"],
    exemplo: "Convocamos todos os moradores do bairro para uma reunião urgente da associação, a fim de discutir [...]"
  },
  {
    genero: "Testemunho",
    quando: "Pede um relato em primeira pessoa sobre uma experiência vivida, ligada a um problema social.",
    estrutura: ["Apresentação de quem narra", "Relato da experiência vivida, com detalhes concretos", "Reflexão sobre o impacto pessoal/coletivo do ocorrido", "Fechamento com um apelo ou aprendizado"],
    exemplo: "Sou aluno do terceiro ano do ensino médio e, neste relato, quero compartilhar uma experiência que mudou minha visão sobre [...]"
  },
  {
    genero: "Postagem / textão de rede social",
    quando: "Pede um texto no formato e no tom de uma publicação de rede social sobre um tema polêmico.",
    estrutura: ["Frase de impacto inicial", "Explicação do ponto de vista, com linguagem mais direta (mas ainda formal o suficiente)", "Argumentos com exemplos cotidianos", "Fechamento com reflexão ou chamado ao leitor"],
    exemplo: "Preciso desabafar sobre algo que tenho visto acontecer com crianças cada vez mais cedo: [...]"
  }
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

// Frases inspiradoras de áreas variadas (educação, ciência, literatura, música,
// filosofia, ativismo) para o ticker da página inicial
const FRASES_INSPIRADORAS = [
  { frase: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", autor: "Nelson Mandela" },
  { frase: "Um livro, uma caneta, uma criança e um professor podem mudar o mundo.", autor: "Malala Yousafzai" },
  { frase: "A injustiça em qualquer lugar é uma ameaça à justiça em todos os lugares.", autor: "Martin Luther King Jr." },
  { frase: "A imaginação é mais importante que o conhecimento.", autor: "Albert Einstein" },
  { frase: "Nada na vida deve ser temido, apenas compreendido.", autor: "Marie Curie" },
  { frase: "Feliz aquele que transfere o que sabe e aprende o que ensina.", autor: "Cora Coralina" },
  { frase: "Só sei que nada sei.", autor: "Sócrates" },
  { frase: "Sapere aude: tenha a coragem de fazer uso de teu próprio entendimento.", autor: "Immanuel Kant" },
  { frase: "Prefiro ser essa metamorfose ambulante do que ter aquela velha opinião formada sobre tudo.", autor: "Raul Seixas" },
  { frase: "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo.", autor: "Paulo Freire" },
  { frase: "Ninguém nasce mulher: torna-se mulher.", autor: "Simone de Beauvoir" },
  { frase: "Ao vencedor, as batatas.", autor: "Machado de Assis, em Quincas Borba" }
];

// Conselhos do dia do Mago das Palavras — um por dia, escolhido de forma
// determinística pela data (conteúdo original do site)
const CONSELHOS_MAGO = [
  "Releia sua redação em voz alta — os erros de coesão ficam mais fáceis de ouvir do que de ver.",
  "Um bom repertório não é decorado, é entendido: saiba explicar por que ele se conecta ao seu argumento.",
  "Treine cronometrado pelo menos uma vez por semana — a pressão do tempo muda como você escreve.",
  "Sua proposta de intervenção vale mais quando é detalhada: não basta dizer 'o governo deve agir', diga como.",
  "Varie os conectivos — usar sempre 'além disso' cansa o leitor (e quem corrige).",
  "Antes de escrever, resuma sua tese em uma frase só. Se não conseguir, ainda não entendeu bem o tema.",
  "Leia jornais e reportagens variadas — é de lá que vêm os melhores repertórios atualizados.",
  "Parágrafos muito curtos ou muito longos atrapalham a leitura: mire de 4 a 6 linhas por parágrafo.",
  "Revise sempre o final: uma conclusão fraca derruba até uma boa argumentação.",
  "Erros de português custam caro — reserve os últimos minutos só para revisar ortografia e concordância.",
  "Dois repertórios bem explicados valem mais que cinco só citados de passagem.",
  "Fuja do senso comum na introdução: comece com um dado, uma citação ou um fato, não com uma opinião vaga.",
  "Sua redação tem dono: use sempre a norma culta, evitando gírias e abreviações."
];
