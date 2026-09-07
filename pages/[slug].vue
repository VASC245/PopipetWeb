<template>
  <main v-if="landing">
    <div class="article-head">
      <div class="wrap">
        <p class="breadcrumb">
          <NuxtLink to="/">Inicio</NuxtLink> / <span>{{ landing.h1 }}</span>
        </p>
        <span class="eyebrow">{{ landing.eyebrow }}</span>
        <h1>{{ landing.h1 }}</h1>
        <p class="desc">{{ landing.lead }}</p>
      </div>
    </div>

    <!-- COMPRA -->
    <section style="background:#fff">
      <div class="wrap">
        <div class="shop">
          <div class="about-card reveal">
            <h3><svg class="icon"><use href="#i-check"/></svg> Por qué pedir aquí</h3>
            <ul class="about-list">
              <li v-for="b in landing.bullets" :key="b">
                <svg class="icon"><use href="#i-check"/></svg> {{ b }}
              </li>
            </ul>
            <div class="ship-note" style="margin-top:1.2rem">
              <svg class="icon"><use href="#i-truck"/></svg>
              <span>El costo de envío se calcula según la ciudad de destino y se confirma al procesar el pedido.</span>
            </div>
          </div>
          <div class="product-panel reveal">
            <span class="sku">Ref. POPIPET-10KG · Sanitario premium</span>
            <h3>Popipet Ecoarena — Saco de 10 kg</h3>
            <div class="price-row">
              <span class="price">${{ PRODUCT.price.toFixed(2) }}</span>
              <span class="price-note">USD · + IVA</span>
            </div>
            <p style="font-size:.9rem;color:var(--gray-600)">Rendimiento equivalente a 30 kg de arena tradicional.</p>
            <div class="divider"></div>
            <div class="qty">
              <span class="qty-label">Cantidad</span>
              <div class="qty-box">
                <button @click="selQty = Math.max(1, selQty - 1)" aria-label="Disminuir cantidad">−</button>
                <b>{{ selQty }}</b>
                <button @click="selQty = Math.min(99, selQty + 1)" aria-label="Aumentar cantidad">+</button>
              </div>
            </div>
            <button class="btn btn-primary" style="width:100%" @click="addToCart">
              <svg class="icon"><use href="#i-cart"/></svg>
              Agregar al carrito
            </button>
            <a
              class="btn btn-outline"
              style="width:100%;margin-top:.7rem"
              :href="`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(landing.waText)}`"
              target="_blank"
              rel="noopener"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENIDO -->
    <section>
      <div class="wrap" style="max-width:800px">
        <div v-for="s in landing.sections" :key="s.h2" class="reveal" style="margin-bottom:2.5rem">
          <h2 class="title" style="font-size:clamp(1.4rem,2.4vw,1.8rem);margin-bottom:.8rem">{{ s.h2 }}</h2>
          <p class="sub">{{ s.text }}</p>
        </div>

        <blockquote v-if="landing.testimonial" class="testi reveal" style="margin:0 0 2.5rem">
          <div class="stars">★★★★★</div>
          <p>"{{ landing.testimonial.text }}"</p>
          <footer style="margin-top:.8rem"><b>{{ landing.testimonial.author }}</b> · {{ landing.testimonial.city }}</footer>
        </blockquote>

        <div class="reveal" style="margin-bottom:2.5rem">
          <h2 class="title" style="font-size:clamp(1.4rem,2.4vw,1.8rem);margin-bottom:.8rem">Guías útiles antes de comprar</h2>
          <ul class="about-list">
            <li><svg class="icon"><use href="#i-check"/></svg> <NuxtLink to="/blog/mejor-arena-para-gatos-en-ecuador/">¿Cuál es la mejor arena para gatos en Ecuador?</NuxtLink></li>
            <li><svg class="icon"><use href="#i-check"/></svg> <NuxtLink to="/blog/como-hacer-la-transicion-de-arena-tradicional-a-pellets/">Cómo hacer la transición de arena tradicional a pellets</NuxtLink></li>
            <li><svg class="icon"><use href="#i-check"/></svg> <NuxtLink to="/blog/cuanto-dura-la-arena-de-pellets-para-gatos/">¿Cuánto dura la arena de pellets para gatos?</NuxtLink></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section style="background:var(--sand);border-top:1px solid var(--line)">
      <div class="wrap" style="max-width:800px">
        <div class="sec-head reveal">
          <span class="eyebrow">Preguntas frecuentes</span>
          <h2 class="title">Dudas sobre pedidos y entregas</h2>
        </div>
        <div class="reveal">
          <details v-for="f in landing.faqs" :key="f.q">
            <summary>{{ f.q }} <svg class="chev icon"><use href="#i-chev"/></svg></summary>
            <div class="resp">{{ f.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <CtaBand />
  </main>
</template>

<script setup lang="ts">
import { LANDING_BY_SLUG } from '~/data/landings'

definePageMeta({
  validate: (route) => typeof route.params.slug === 'string' && route.params.slug in LANDING_BY_SLUG
})

const route = useRoute()
const landing = LANDING_BY_SLUG[route.params.slug as string]

const config = useRuntimeConfig()
const site = config.public.siteUrl
// Netlify sirve estas páginas con barra final; canonical/sitemap deben usar la misma forma
const canonicalUrl = `${site}/${landing.slug}/`

const { add } = useCart()
const selQty = ref(1)
function addToCart() {
  add(selQty.value)
  selQty.value = 1
}

useSeoMeta({
  title: landing.metaTitle,
  description: landing.metaDescription,
  keywords: landing.keywords,
  ogType: 'website',
  ogTitle: landing.metaTitle,
  ogDescription: landing.metaDescription,
  ogLocale: 'es_EC',
  ogSiteName: 'Popipet Ecoarena',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Popipet Ecoarena - Arena Ecológica de Pellets de Madera 10 kg',
        description: landing.metaDescription,
        brand: { '@type': 'Brand', name: 'Popipet Ecoarena' },
        countryOfOrigin: 'EC',
        weight: { '@type': 'QuantitativeValue', value: '10', unitCode: 'KGM' },
        offers: {
          '@type': 'Offer',
          price: PRODUCT.price.toFixed(2),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          areaServed: landing.area,
          url: canonicalUrl
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: landing.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${site}/` },
          { '@type': 'ListItem', position: 2, name: landing.h1, item: canonicalUrl }
        ]
      })
    }
  ]
})

useReveal()
</script>
