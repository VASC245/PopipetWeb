<template>
  <header class="site-header">
    <div class="nav">
      <NuxtLink class="brand" to="/" aria-label="Popipet Ecoarena - inicio">
        <img class="brand-logo" src="/logopopipet.jpg" alt="Logo Popipet Ecoarena" width="59" height="44">
        <span class="brand-name"><b>Popipet</b><span>Ecoarena</span></span>
      </NuxtLink>
      <nav class="links" :class="{ open: menuOpen }" @click="menuOpen = false">
        <NuxtLink to="/#producto">Producto</NuxtLink>
        <NuxtLink to="/#beneficios">Beneficios</NuxtLink>
        <NuxtLink to="/#como-usar">Modo de uso</NuxtLink>
        <NuxtLink to="/#ficha">Ficha técnica</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/#faq">Preguntas</NuxtLink>
        <NuxtLink to="/#contacto">Contacto</NuxtLink>
      </nav>
      <div class="nav-actions">
        <button class="cart-btn" @click="drawerOpen = true" aria-label="Abrir carrito de compras">
          <svg class="icon"><use href="#i-cart"/></svg>
          Carrito
          <span class="cart-count">{{ count }}</span>
        </button>
        <button class="burger" @click="menuOpen = !menuOpen" aria-label="Abrir menú">
          <svg class="icon"><use href="#i-menu"/></svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { count, drawerOpen } = useCart()
const menuOpen = ref(false)
</script>
