<template>
  <div>
    <IconSprite />
    <SiteHeader />
    <NuxtPage />
    <CtaBand />
    <SiteFooter />
    <CartDrawer />
    <a
      class="wsp-float"
      :href="`https://wa.me/${WHATSAPP}?text=Hola%2C%20quiero%20hacer%20un%20pedido%20de%20Popipet%20Ecoarena.`"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32"><path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.7 6.5L3 29.1l6.9-1.8c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.7c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.7-1.6-3.6-1.6-5.6 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.6-10.7 10.6zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
    </a>
    <div class="toast" :class="{ show: toast.show }">{{ toast.msg }}</div>
  </div>
</template>

<script setup lang="ts">
const { toast } = useCart()
</script>
