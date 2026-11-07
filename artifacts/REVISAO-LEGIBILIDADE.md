# Revisão de legibilidade, conteúdo e avaliações

## Alterações

- Fontes anteriores substituídas por Sora e Source Sans 3, em WOFF2 local. Corpo principal de 18px; hero e avaliações de 19px no celular. Contraste dos textos secundários reforçado.
- Botões com texto de 16px, altura de 60–62px, cantos de 8px e ícone em área própria. Header mobile com ação curta e controles de 46px.
- Textos institucionais revisados com no-ai-slop: retiradas frases abstratas e títulos genéricos; localização e serviços ficaram explícitos. Relatos de pacientes não foram reescritos.
- Três seções acrescentadas: DTM/bruxismo/dor orofacial; clínica geral para adultos e crianças; avaliações. Total de nove seções.
- Quarto retrato profissional, com figurino claro, integrado à seção de DTM. Fotos clínicas com pacientes não foram adicionadas.
- Onze avaliações incluídas a pedido do usuário, que confirmou a origem no Google Workspace da profissional. Perfil com primeira inicial e sem fotografia. Todas as transcrições correspondem ao Markdown original, após remover somente a marcação de citação.
- Carrossel com setas, scroll-snap nativo, teclado e expansão dos textos longos. Sem avanço automático. Não foi adicionado AggregateRating ao schema.
- Mais movimento em retratos, valores e serviços: recorte sutil, entradas escalonadas e feedback nos controles. Movimento reduzido remove recortes e deslocamentos.

## Verificação técnica

- `rtk npm run build`: passou, incluindo TypeScript, Vite cliente, bundle de pré-renderização e HTML estático.
- `rtk npm run lint`: passou; este comando executa TypeScript estrito.
- 375, 430, 768, 1024, 1440 e 1920px: sem overflow horizontal; imagens carregadas; âncoras válidas; nove seções e onze avaliações presentes em todas as larguras.
- Carrossel mobile: primeira avaliação com botão anterior desabilitado; próxima muda para 2 de 11; End chega a 11 de 11 e desabilita próxima; Home retorna ao início.
- Expansão e recolhimento das avaliações: aria-expanded alterna corretamente e o texto completo é liberado.
- Menu mobile: item Avaliações fecha o menu e navega para a seção.
- axe-core, regras WCAG 2 A/AA e WCAG 2.1 AA: nenhuma violação reportada em desktop e mobile.
- Movimento reduzido: media query ativa, scroll sem suavização e recortes removidos nos retratos.
- Sem erros JavaScript capturados no conjunto final de testes.
- JavaScript desativado: as nove seções e as onze avaliações permanecem no HTML de produção; nenhum perfil usa fotografia.
- Comparação programática dos dados: onze avaliações e redação idêntica à fonte após retirar os marcadores Markdown.

O detector Impeccable foi executado uma vez nesta revisão. Apontou divergências entre a documentação anterior e a nova tipografia/escala e cores complementares. DESIGN.md foi atualizado para registrar as mudanças deliberadas. Não se apresenta esse diagnóstico como auditoria de acessibilidade; a checagem de contraste e semântica foi feita também com axe.

## Evidências e limites

Capturas finais em `artifacts/screenshots/`. A revisão visual identificou uma sequência longa sem espaços em uma avaliação original; foi aplicado overflow-wrap para evitar corte horizontal sem alterar a redação.

Não houve publicação, envio de mensagens ou agendamento. Não foram executados Lighthouse, auditoria em leitor de tela ou testes em aparelhos físicos. CRO e domínio definitivo continuam ausentes, conforme a entrega anterior.
