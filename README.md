# 🐉 Redação Quest

Site estático (HTML/CSS/JS puro, sem dependências ou build) com tema retro
pixel-art em tons de roxo, preto, branco e prata, para ajudar na produção de
redações dissertativo-argumentativas (ENEM e UNICAMP).

## Como abrir

Não precisa de instalação. Basta servir os arquivos estáticos e abrir
`index.html`, por exemplo:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Páginas

- **index.html** — dashboard com os mascotes (dragão e mago) e menu.
- **entender.html** — Oráculo de Temas: digite o título da redação e receba
  a área do tema identificada, perguntas norteadoras e repertórios
  sugeridos da biblioteca (busca local, não usa internet/API externa).
- **repertorio.html** — biblioteca de repertório sociocultural (sociólogos,
  filósofos, dados/órgãos, leis, história, arte), com busca e filtros.
- **temas.html** — temas oficiais de anos anteriores do ENEM, explicação do
  formato da UNICAMP e temas de treino originais.
- **escrever.html** — estrutura dissertativo-argumentativa, banco de
  conectivos e gerador de proposta de intervenção.
- **rascunho.html** — caderno de rascunho com marca-texto colorido (manter /
  revisar / mudar) e bloco de notas soltas, salvos no navegador.
- **corrigir.html** — análise heurística automática (extensão, parágrafos,
  proposta de intervenção, conectivos, repetições, registro informal) +
  checklist de autoavaliação por competência.
- **simulado.html** — sorteio de tema e cronômetro (padrão 90 min do ENEM).
- **progresso.html** — histórico de sessões, XP, nível e conquistas.

## Dados e armazenamento

- Todo o conteúdo (repertórios, temas, conectivos) vive em `js/data.js`.
- O progresso do usuário (sessões de correção/simulado, rascunho e notas)
  é salvo apenas localmente, via `localStorage` do navegador — nada é
  enviado a um servidor.

## Limitações conhecidas

- A "correção" é heurística (contagem, palavras-chave, padrões), não uma
  IA de fato — serve como guia objetivo, não substitui a avaliação de um
  professor.
- Os temas de anos anteriores do ENEM listados são uma amostra, não uma
  lista oficial completa; para editais e provas oficiais, consulte sempre
  a fonte original (INEP/Comvest).
