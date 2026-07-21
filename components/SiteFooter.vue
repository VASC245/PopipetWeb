<template>
  <footer class="site" id="contacto">
    <div class="foot">
      <div>
        <div class="brand" style="margin-bottom:1.2rem">
          <img class="brand-logo brand-logo-footer" src="/logopopipet.jpg" alt="Logo Popipet Ecoarena" width="59" height="44">
          <span class="brand-name"><b style="color:#fff">Popipet</b><span style="color:#C9A97E">Ecoarena</span></span>
        </div>
        <p>Arena sanitaria premium 100% ecológica de pellets de madera, fabricada en Ecuador por Fuego Verde con madera de trazabilidad certificada.</p>
      </div>
      <div>
        <h4>Navegación</h4>
        <NuxtLink to="/#producto">Producto</NuxtLink>
        <NuxtLink to="/#beneficios">Beneficios</NuxtLink>
        <NuxtLink to="/#como-usar">Modo de uso</NuxtLink>
        <NuxtLink to="/#ficha">Ficha técnica</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
      <div>
        <h4>Empresa</h4>
        <a href="https://www.fuegoverde.com.ec" target="_blank" rel="noopener">Fuego Verde</a>
        <NuxtLink to="/#que-es">Sobre el producto</NuxtLink>
        <NuxtLink to="/#testimonios">Testimonios</NuxtLink>
      </div>
      <div>
        <h4>Contacto</h4>
        <div class="foot-contact">
          <svg class="icon"><use href="#i-phone"/></svg>
          <a :href="`https://wa.me/${WHATSAPP}`" target="_blank" rel="noopener" style="margin:0">WhatsApp: +593 98 306 8976</a>
        </div>
        <div class="foot-contact">
          <svg class="icon"><use href="#i-truck"/></svg>
          <span>Envíos a todo el Ecuador</span>
        </div>
        <div class="foot-contact">
          <svg class="icon"><use href="#i-pin"/></svg>
          <span>Quito · Guayaquil · Cuenca y más ciudades</span>
        </div>
      </div>
    </div>
    <div class="copy">
      <span>© {{ new Date().getFullYear() }} Popipet Ecoarena — Fuego Verde. Todos los derechos reservados.</span>
      <span>Producto ecuatoriano</span>
    </div>
  </footer>
</template>
