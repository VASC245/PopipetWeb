<template>
  <header class="site-header">
    <div class="nav">
      <NuxtLink class="brand" to="/" aria-label="Popipet Ecoarena - inicio">
        <svg viewBox="0 0 64 64" role="img" aria-label="Logo Popipet Ecoarena">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#143726"/>
          <path d="M20 44C20 27 31 17 47 16c1.4 17-5.5 28-21 29-2.2 0-4.2-.4-6-1z" fill="#8FBF4D"/>
          <path d="M22 44C28 33 36 25 44 19" stroke="#143726" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        </svg>
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
