<template>
  <main v-if="doc">
    <div class="article-head">
      <div class="wrap">
        <p class="breadcrumb">
          <NuxtLink to="/">Inicio</NuxtLink> / <NuxtLink to="/blog">Blog</NuxtLink>
        </p>
        <h1>{{ doc.title }}</h1>
        <p class="desc">{{ doc.description }}</p>
        <p class="post-meta" style="margin-top:1rem">{{ formatDate(doc.date) }} · Equipo Popipet</p>
      </div>
    </div>
    <div class="article-body">
      <article class="prose">
        <ContentRenderer :value="doc" />
      </article>
      <div class="article-cta">
        <div>
          <h3>Pruebe Popipet Ecoarena</h3>
          <p>Arena ecológica de pellets de madera, hecha en Ecuador. Envíos a todo el país.</p>
        </div>
        <NuxtLink class="btn btn-white" to="/#producto">Comprar ahora</NuxtLink>
      </div>
      <div v-if="related && related.length" class="related">
        <h4>Artículos relacionados</h4>
        <NuxtLink v-for="r in related" :key="r._path" :to="r._path">{{ r.title }}</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const site = config.public.siteUrl

const { data: doc } = await useAsyncData(`doc-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

const { data: related } = await useAsyncData(`related-${route.path}`, () =>
  queryContent('/blog')
    .where({ _path: { $ne: route.path } })
    .sort({ date: -1 })
    .limit(3)
    .only(['title', '_path'])
    .find()
)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

useSeoMeta({
  title: `${doc.value.title} | Blog Popipet Ecoarena`,
  description: doc.value.description,
  keywords: (doc.value.keywords || []).join(', '),
  ogType: 'article',
  ogTitle: doc.value.title,
  ogDescription: doc.value.description,
  ogUrl: site + route.path,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: site + route.path }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: doc.value.title,
        description: doc.value.description,
        datePublished: doc.value.date,
        inLanguage: 'es-EC',
        mainEntityOfPage: site + route.path,
        author: { '@type': 'Organization', name: 'Popipet Ecoarena' },
        publisher: {
          '@type': 'Organization',
          name: 'Popipet Ecoarena — Fuego Verde',
          url: site
        }
      })
    }
  ]
})
</script>
