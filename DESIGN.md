---
name: Dra. Janaína Carvalho
description: Fotografia real, identidade oficial e tipografia sans-serif de leitura clara.
colors:
  teal: "#0d9488"
  deep: "#124e4b"
  dark: "#103d3b"
  paper: "#fcfdfb"
  mist: "#eef5f3"
  ink: "#0f172a"
  muted: "#405951"
  line: "#cbdcd6"
  salmon: "#eec4b5"
  gold: "#f59e0b"
  sky: "#38bdf8"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Sora, Arial, sans-serif"
    fontSize: "clamp(60px, 6.3vw, 88px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, Arial, sans-serif"
    fontSize: "clamp(34px, 3.4vw, 50px)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
rounded:
  subtle: "8px"
  card: "12px"
  circle: "50%"
spacing:
  section: "128px"
  section-mobile: "76px"
---

# Design System: Dra. Janaína Carvalho

## Overview

A identidade e a composição fotográfica foram preservadas. Na revisão solicitada pelo usuário, a leitura passou a orientar a tipografia: Sora nos títulos, Source Sans 3 nos textos, tamanhos maiores e contraste forte. Textos institucionais revisados com no-ai-slop, com localização e serviços explícitos, sem promessas clínicas. A redação dos pacientes foi preservada.

## Colors

Paleta oficial no frontmatter. Teal no logo e foco; deep em títulos e botões; dark na seção institucional e no rodapé. Paper e mint alternam as superfícies. Salmão acompanha o retrato sentado; amarelo e azul oficiais permanecem no logo. Os avatares das avaliações alternam verde, salmão e azul claros, sempre com iniciais escuras. Nenhuma fotografia de perfil é usada.

## Typography

Sora local, pesos de 400 a 700, para títulos sem itálico. Source Sans 3 local, pesos de 400 a 700, para conteúdo e controles. Font-display swap.

Textos principais de 18px; descrição do hero e avaliações de 19px no celular. Títulos móveis de 30 a 39px; hero de 48 a 65px. Metadados de 12 a 15px. A escala fluida responde aos textos reais, sem reduzir o corpo de leitura nas telas menores.

Tokens e composição original em src/styles.css. Atualizações de leitura, botões e novas seções em src/refinements.css, carregado depois.

## Layout

Container central de até 1280px, ampliado para 1440px em telas grandes. Laterais móveis de 20px. Grades editoriais de duas colunas passam para uma coluna abaixo de 768px. Hero com três linhas no celular pequeno e texto antes do retrato.

Nove seções: hero, apresentação, DTM, tratamentos, valores do atendimento, clínica geral para adultos e crianças, avaliações, dúvidas e contato. Header e footer complementam a navegação.

## Elevation & Depth

Seções planas, divisórias finas e retratos com presença. A apresentação mantém a placa salmão atrás da foto. Avaliações usam cartões sem sombra, separados pelo fundo. Sombras difusas apenas no contato flutuante e no menu mobile.

## Shapes

Botões com cantos de 8px e ícone em área própria. Cards de avaliações com raio de 12px. Avatares, setas do carrossel e contato flutuante circulares. Retratos preservam os cantos amplos da composição anterior.

## Components

### Buttons

CTAs de 60 a 62px de altura, texto de 16px, preenchimento deep e seta em área de 40px. Variante clara sobre fundo escuro. Contato textual com sublinhado. Menu mobile com controles de 46px. Hover muda cor e desloca a seta; pressão usa escala discreta; foco visível.

### Navigation

Header sticky, âncoras de apresentação, tratamentos, avaliações e contato. O menu fecha após escolher uma seção. Escape devolve foco ao botão. O hero limpa a indicação de seção anterior.

### Portraits

Quatro retratos oficiais: blazer azul no hero; figurino salmão na apresentação; figurino claro na seção de DTM; segundo retrato azul na seção institucional. WebP em três tamanhos, srcset, dimensões reservadas e lazy loading fora do hero. Fotos clínicas com pacientes continuam fora da página.

### Reviews

Onze avaliações transcritas do Markdown e incluídas por solicitação expressa do usuário, que confirmou a origem no Google Workspace da profissional. Todas preservam a redação original; avatares mostram apenas a primeira inicial.

Carrossel com scroll-snap nativo: três cards em desktop amplo, dois em larguras intermediárias e um no celular, sempre com a borda do próximo aparente. Cards fora da janela visível ficam esmaecidos e levemente reduzidos; barra fina de progresso acompanha o contador. Toque, setas e teclas de navegação, contador e estados desabilitados nas extremidades. Avanço automático a cada 5s, voltando ao início no fim; pausa com o ponteiro sobre a seção, foco de teclado, aba oculta, seção fora da tela, 5s após toque e pelo botão de pausa. Desligado com redução de movimento. Relatos longos podem ser expandidos e recolhidos. Não há AggregateRating ou promessa de resultado clínico baseada nos relatos.

### Motion

Motion para entrada tipográfica, revelação de retratos com recorte sutil e entradas escalonadas de valores, serviços e cards de avaliação em intervalos de 60ms. GSAP controla apenas o parallax da fotografia institucional em desktop.

Curva cubic-bezier(.23,1,.32,1). Feedbacks de controle entre 160 e 200ms. Entradas entre 500 e 800ms. Movimento reduzido mantém fades breves, remove recortes e deslocamentos e desativa scroll suave. Conteúdo visível por padrão.

## Do's Don'ts

- Preservar a marca, as fotos reais e os canais confirmados.
- Manter textos legíveis, foco visível e movimento reduzido.
- Não reescrever depoimentos para encaixá-los na comunicação institucional.
- Não adicionar qualificações, CRO, endereço ou resultados inventados.
- Não adicionar fotos de pacientes sem confirmação apropriada.
