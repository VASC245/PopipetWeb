<template>
  <footer class="site" id="contacto">
    <div class="foot">
      <div>
        <div class="brand" style="margin-bottom:1.2rem">
          <svg viewBox="0 0 64 64" style="width:38px;height:38px" aria-hidden="true">
            <rect x="2" y="2" width="60" height="60" rx="14" fill="#1B4A32"/>
            <path d="M20 44C20 27 31 17 47 16c1.4 17-5.5 28-21 29-2.2 0-4.2-.4-6-1z" fill="#8FBF4D"/>
            <path d="M22 44C28 33 36 25 44 19" stroke="#143726" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          </svg>
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
