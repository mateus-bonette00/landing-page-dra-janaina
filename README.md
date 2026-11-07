# Dra. Janaína Carvalho

Landing page em React + Vite + TypeScript.

## Executar

```bash
rtk npm run dev
rtk npm run lint
rtk npm run build
rtk npm run preview
```

`lint` executa a checagem estrita de TypeScript. Não há ESLint instalado. O build gera os assets e pré-renderiza o conteúdo em `dist/index.html`; a aplicação é hidratada no navegador. O HTML produzido continua legível sem JavaScript.

As dependências estão fixadas por `package-lock.json`. Não há Next.js.

## Domínio definitivo

Após confirmar o domínio, informe `SITE_URL` no ambiente de build. O script aceita uma origem HTTPS, sem caminho ou parâmetros, e gera canonical, `og:url`, imagem Open Graph absoluta e sitemap. Sem esse valor, não inventa um domínio. O `robots.txt` permanece aberto à indexação.

Não publique sem completar a identificação profissional e validar os conteúdos institucionais. Nenhum serviço de hospedagem foi configurado.

## Implementação

- Header sticky e menu mobile com Escape e retorno de foco.
- Nove seções: hero, apresentação, DTM, tratamentos, valores, clínica geral adulta e infantil, avaliações, dúvidas e contato; além de header e rodapé.
- Componentes simples e dados centralizados em `src/data/content.ts`.
- Tailwind CSS v4 integrado; estilos e tokens em `src/styles.css`, com as atualizações de tipografia, controles e seções em `src/refinements.css`.
- Carrossel de avaliações com scroll-snap, navegação por setas e teclado, sem avanço automático. Relatos longos podem ser expandidos.
- Textos institucionais revisados com no-ai-slop; depoimentos mantidos na redação original.
- Motion para revelações selecionadas; GSAP/ScrollTrigger carregados sob demanda para uma fotografia em desktop.
- CSS para feedbacks de toque, hover e foco; scroll nativo.
- Elementos HTML nativos para accordions e navegação. shadcn/ui e Lenis não foram necessários.
- Dados estruturados `Dentist` e `FAQPage`, metadados sociais, fontes locais e `llms.txt` institucional.

## Materiais

O briefing original é a fonte factual. Os arquivos originais foram preservados.

| Material | Uso |
| --- | --- |
| `5_[OUTRO]_1000199047.jpg` | Hero; retrato próximo com blazer azul |
| `6_[OUTRO]_1000198270.jpg` | Apresentação; retrato sentado com blazer salmão |
| `4_[EQUIPE]_1000199046.jpg` | Seção de valores; retrato com movimento discreto no desktop |
| `7_[OUTRO]_1000199041.jpg` | Seção de DTM; retrato de pé com figurino claro |
| Logos colorido e branco | Header e footer, proporções e cores preservadas |
| Ícone oficial | Favicon |

Foram inspecionadas as oito fotografias e as quatro versões do logo. As fotos com pacientes não foram incluídas. O usuário confirmou que as 11 avaliações vieram do Google Workspace da profissional e solicitou sua inclusão: todas estão em um carrossel com iniciais, sem fotos de perfil. Não há fotos de banco de imagens ou geradas por IA.

As fotografias usadas têm três tamanhos WebP, `srcset`, dimensões reservadas e carregamento tardio fora do hero. O hero recebe prioridade de carregamento. Fontes Sora e Source Sans 3 em WOFF2 local, com licenças em `public/fonts/`.

## Validação

Veja o relatório atual de [revisão e validação](artifacts/REVISAO-LEGIBILIDADE.md), o [registro da primeira entrega](artifacts/VALIDACAO.md) e as [capturas de tela](artifacts/screenshots/).

## Pendências para publicação

- Número de inscrição no CRO-MG e identificação profissional completa para divulgação.
- Domínio definitivo para canonical, sitemap e compartilhamento social absoluto.
- Validação institucional dos textos e horários pela profissional.
- Autorização documentada antes de usar fotografias com pacientes; não foram adicionadas nesta revisão.
- Não foram fornecidos e-mail, graduação, instituição de formação ou titulações. Esses dados foram omitidos.
- OpenSEO MCP não está disponível nesta sessão. Nenhum projeto, contexto ou conexão Search Console foi salvo. As medidas de SEO locais foram implementadas.

## Referências e publicidade odontológica

Os três sites solicitados foram acessados renderizados em desktop e mobile. A síntese está em [artifacts/REFERENCIAS.md](artifacts/REFERENCIAS.md).

Foram consultadas as orientações do [CFO sobre publicidade e imagens](https://website.cfo.org.br/redes-sociais-na-odontologia-fique-atento-as-normas-eticas-e-acerte-na-publicacao-dos-conteudos/) e a [Resolução CFO-196/2019](https://website.cfo.org.br/resolucao-cfo-196-2019/). A consulta orientou a exclusão de imagens de pacientes sem autorização e a sinalização da identificação profissional ausente. Isso não constitui aprovação jurídica ou validação do CRO para publicação.
