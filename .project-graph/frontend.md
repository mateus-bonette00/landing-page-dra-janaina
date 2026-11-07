# Frontend

`index.html` → `src/main.tsx` → `src/App.tsx`.

`App` compõe `Header`, `Hero`, `About`, `Focus`, `Treatments`, `Care`, `GeneralCare`, `Reviews`, `Questions`, `Contact` e `Footer`.

- Dados, contatos, tratamentos, perguntas e schema: `src/data/content.ts`.
- Onze avaliações transcritas do briefing: `src/data/reviews.ts`.
- Carrossel nativo com scroll-snap, setas, teclado e expansão dos relatos: `src/sections/Reviews.tsx`.
- CTAs: `src/components/ContactLink.tsx`.
- Imagens responsivas: `src/components/Portrait.tsx`.
- Navegação, menu mobile e indicação de seção: `src/components/Header.tsx`.
- Entradas Motion e parallax GSAP: `src/hooks/usePageMotion.ts`.
- Tokens e composição original: `src/styles.css`; tipografia, controles e novas seções: `src/refinements.css`.
- Fotos otimizadas, logos e fontes: `public/images/` e `public/fonts/`.

Build: TypeScript → Vite cliente → Vite SSR de `src/entry-server.tsx` → `scripts/prerender.mjs` → `dist/index.html` com conteúdo. Em produção o React hidrata o HTML pronto. `SITE_URL` habilita canonical, OG absoluto e sitemap.

Fotografias clínicas com pacientes permanecem fora dos assets públicos. As avaliações foram incluídas por solicitação expressa do usuário, sem fotografias de perfil. Não há backend, formulário, coleta de dados ou conexão de agendamento.
