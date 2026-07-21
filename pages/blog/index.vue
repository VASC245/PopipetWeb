<template>
  <main>
    <section class="blog-hero" style="padding:4rem 1.5rem 3.5rem">
      <div class="wrap">
        <span class="eyebrow">Blog Popipet</span>
        <h1>Guías sobre gatos, higiene y arena ecológica</h1>
        <p>
          Consejos prácticos y respaldados por la experiencia para el cuidado e higiene de sus mascotas,
          escritos por el equipo de Popipet Ecoarena.
        </p>
      </div>
    </section>
    <section style="background:var(--sand)">
      <div class="blog-grid">
        <article v-for="post in posts" :key="post._path" class="post-card">
          <span class="post-meta">{{ formatDate(post.date) }}</span>
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <NuxtLink class="post-link" :to="post._path">Leer artículo →</NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const site = config.public.siteUrl

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').sort({ date: -1 }).find()
)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

useSeoMeta({
  title: 'Blog sobre gatos y arena ecológica | Popipet Ecoarena Ecuador',
  description: 'Guías y consejos sobre arena para gatos, pellets de madera, higiene de mascotas y cuidado ecológico. El blog de Popipet Ecoarena, la arena ecológica hecha en Ecuador.',
  ogTitle: 'Blog Popipet Ecoarena | Gatos y arena ecológica',
  ogDescription: 'Consejos sobre arena para gatos, pellets de madera e higiene de mascotas en Ecuador.',
  ogUrl: site + '/blog',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: site + '/blog' }]
})
</script>
