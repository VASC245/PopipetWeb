<template>
  <div class="err-page">
    <div>
      <h1>{{ error?.statusCode === 404 ? 'Página no encontrada' : 'Ha ocurrido un error' }}</h1>
      <p>La página que busca no existe o fue movida.</p>
      <button class="btn btn-primary" @click="handleError">Volver al inicio</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()
function handleError() {
  clearError({ redirect: '/' })
}
useSeoMeta({ title: 'Página no encontrada | Popipet Ecoarena', robots: 'noindex' })
</script>

<style scoped>
.err-page{
  min-height:70vh;display:flex;align-items:center;justify-content:center;
  text-align:center;padding:1.5rem;background:var(--sand);
}
.err-page h1{color:var(--green-950);font-size:2rem;margin-bottom:.6rem}
.err-page p{color:var(--gray-600);margin-bottom:1.6rem}
</style>
