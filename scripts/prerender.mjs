import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../.prerender/entry-server.js'

const html = await readFile('dist/index.html', 'utf8')
let result = html.replace('<!--app-html-->', render())
const site = process.env.SITE_URL
if (site) {
  const url = new URL(site)
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('SITE_URL deve ser a origem HTTPS definitiva, sem caminho, credenciais ou parâmetros.')
  const origin = url.origin
  result = result.replace('</head>', `<link rel="canonical" href="${origin}/" /><meta property="og:url" content="${origin}/" /></head>`).replaceAll('content="/images/preview-link.jpg"', `content="${origin}/images/preview-link.jpg"`)
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`)
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`)
}
await writeFile('dist/index.html', result)
console.log(`HTML pré-renderizado. ${site ? 'Canonical, Open Graph absoluto e sitemap gerados.' : 'Domínio não informado: canonical e sitemap aguardam SITE_URL.'}`)
