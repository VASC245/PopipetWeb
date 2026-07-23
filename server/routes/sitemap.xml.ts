import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const site = 'https://popipet.com'
  const docs = await serverQueryContent(event).where({ _partial: false }).find()
  const posts = docs.filter((d: any) => d._path?.startsWith('/blog'))

  const urls = [
    { loc: `${site}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${site}/blog`, priority: '0.8', changefreq: 'weekly' },
    ...posts.map((p: any) => ({
      loc: `${site}${p._path}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: p.date
    }))
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${'lastmod' in u && u.lastmod ? `\n    <lastmod>${String(u.lastmod).slice(0, 10)}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return xml
})
