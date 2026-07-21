<template>
  <section class="cta-band">
    <div class="wrap">
      <div>
        <h2>Comience hoy con una higiene más limpia, económica y sustentable</h2>
        <p>Atención personalizada de lunes a sábado. Envíos a todo el Ecuador.</p>
      </div>
      <div style="display:flex;gap:.9rem;flex-wrap:wrap">
        <NuxtLink class="btn btn-white" to="/#producto">Comprar ahora</NuxtLink>
        <a
          class="btn"
          style="border-color:rgba(255,255,255,.4);color:#fff"
          :href="`https://wa.me/${WHATSAPP}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Popipet%20Ecoarena.`"
          target="_blank"
          rel="noopener"
        >Contactar por WhatsApp</a>
      </div>
    </div>
  </section>
</template>
