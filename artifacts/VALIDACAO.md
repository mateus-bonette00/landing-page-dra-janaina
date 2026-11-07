# Validação — 6 de novembro de 2026

Este documento registra a primeira implementação. A revisão posterior de tipografia, conteúdo e avaliações está em [REVISAO-LEGIBILIDADE.md](REVISAO-LEGIBILIDADE.md). As capturas em screenshots/ foram atualizadas para a versão com nove seções e onze avaliações.

## Resultado técnico

- `rtk npm run build`: passou; TypeScript, build Vite cliente, build de pré-renderização e geração do HTML estático.
- `rtk npm run lint`: passou; este comando verifica TypeScript estrito, não ESLint.
- O lockfile não contém Next.js.
- HTML de produção contém seis seções, um único H1 e JSON-LD parseável com `Dentist` e `FAQPage`.
- Nenhum domínio fictício foi adicionado. Canonical e sitemap aguardam `SITE_URL`.
- Navegador com JavaScript desativado: seis seções, conteúdo principal visível e CTA de WhatsApp presente.
- Build com domínio HTTPS de teste, em diretório temporário: canonical, Open Graph absoluto e sitemap gerados. Origem HTTP com caminho foi rejeitada; build local original preservado.
- Detector Impeccable executado uma vez nos alvos alterados: sem achados (`[]`).

## Navegador

Testes executados com Playwright no build local servido em `http://localhost:4173/`.

| Largura | Overflow horizontal | Imagens | Âncoras internas | H1 único |
| --- | --- | --- | --- | --- |
| 375px | Ausente | Carregadas | Válidas | Sim |
| 430px | Ausente | Carregadas | Válidas | Sim |
| 768px | Ausente | Carregadas | Válidas | Sim |
| 1024px | Ausente | Carregadas | Válidas | Sim |
| 1440px | Ausente | Carregadas | Válidas | Sim |
| 1920px | Ausente | Carregadas | Válidas | Sim |

Interações verificadas: abertura do menu, fechamento com Escape, retorno de foco ao botão, fechamento após navegação, foco na seção de destino, abertura de tratamento e acionamento do accordion de perguntas com Enter.

Movimento reduzido: media query ativa, scroll sem suavização e transformações removidas nos elementos de revelação. Nenhum erro JavaScript foi capturado durante o conjunto final de testes.

Os destinos dos links de WhatsApp, telefone, Instagram e Maps usam os dados confirmados. Não foi enviada mensagem, realizada ligação ou efetivado agendamento.

## Acessibilidade

axe-core 4.10.3, regras WCAG 2 A/AA e WCAG 2.1 AA: nenhuma violação reportada no desktop e no mobile. Navegação por teclado e foco também verificados manualmente pela automação.

Essa checagem não equivale a uma auditoria completa com leitor de tela. Não foram testados VoiceOver, NVDA, aparelhos físicos ou Safari.

## Revisão visual

Capturas em `artifacts/screenshots/`. Uma rodada de revisão identificou um corte inadequado na fotografia da apresentação, corpo de texto pequeno e carregamento de uma variação incorreta de fonte. Foram corrigidos o enquadramento, a legibilidade e as fontes WOFF2. Uma rodada de confirmação capturou as seis larguras.

A revisão independente apontou rótulos redundantes antes dos títulos e indicação incorreta de seção ativa ao retornar ao início. Os rótulos foram removidos e o observer passou a acompanhar o hero para limpar a indicação anterior.

Veredito final da revisão independente: `ship`, sem correções materiais abertas para o produto local. As duas correções foram classificadas como `resolved`. A recaptura confirmou, nas seis larguras, ausência de overflow, de rótulos acima dos títulos e de seção marcada incorretamente no hero. O axe foi repetido após o lote, sem violações desktop/mobile. A identificação CRO continua pendente para publicação.

## Performance e limites

Imagens otimizadas para WebP, três larguras por retrato, fontes locais com `font-display: swap`, prioridade no hero, lazy loading fora da primeira dobra e dimensões reservadas. GSAP e ScrollTrigger ficam em chunks separados e são carregados somente para desktop com ponteiro preciso e movimento habilitado.

Lighthouse não estava instalado; não há pontuação Lighthouse ou medição de Core Web Vitals de campo. Sem domínio publicado não foram executados PageSpeed Insights, Search Console ou Rich Results Test remoto.

## Bloqueios de conteúdo para publicação

CRO e domínio ausentes. Formação e e-mail não fornecidos. Autorizações de pacientes e depoimentos não documentadas; esses materiais não integram a página pública. OpenSEO indisponível nesta sessão.
