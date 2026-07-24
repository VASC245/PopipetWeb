export default defineNuxtConfig({
  compatibilityDate: '2026-07-21',
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es-EC' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap'
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'geo.region', content: 'EC' },
        { name: 'author', content: 'Fuego Verde - Popipet Ecoarena' }
      ]
    }
  },
  runtimeConfig: {
    payphone: {
      token: process.env.PAYPHONE_TOKEN || ''
    },
    supabase: {
      url: process.env.SUPABASE_URL || '',
      key: process.env.SUPABASE_ANON_KEY || ''
    },
    pedidosAdminKey: process.env.PEDIDOS_ADMIN_KEY || '',
    resendKey: process.env.RESEND_API_KEY || '',
    public: {
      siteUrl: 'https://popipet.com',
      payphone: {
        token: process.env.PAYPHONE_TOKEN || '',
        storeId: process.env.PAYPHONE_STORE_ID || ''
      }
    }
  },
  content: {
    highlight: false
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/sitemap.xml', '/pagar', '/pago/respuesta']
    }
  }
})
