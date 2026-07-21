<template>
  <main>
    <!-- HERO -->
    <section class="hero" id="inicio" style="padding:0">
      <div class="hero-inner">
        <div>
          <span class="eyebrow">Arena sanitaria premium · Hecha en Ecuador</span>
          <h1>Arena ecológica de pellets de madera para el bienestar de sus mascotas</h1>
          <p class="lead">
            Popipet Ecoarena elimina olores sin químicos ni aditivos, no genera polvo y rinde
            3 veces más que la arena tradicional. Ideal para gatos, roedores, conejos y caballos.
          </p>
          <div class="cta-row">
            <NuxtLink class="btn btn-primary" to="#producto">Comprar ahora</NuxtLink>
            <a class="btn btn-outline" :href="`https://wa.me/${WHATSAPP}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Popipet%20Ecoarena.`" target="_blank" rel="noopener">
              Hablar con un asesor
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat"><b>3×</b><span>Mayor rendimiento</span></div>
            <div class="stat"><b>0%</b><span>Polvo y químicos</span></div>
            <div class="stat"><b>100%</b><span>Biodegradable</span></div>
            <div class="stat"><b>7</b><span>Tipos de mascotas</span></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="frame frame-photo">
            <img src="/primerafoto.jpg" alt="Sacos de Popipet Ecoarena sobre pellets de madera" width="1280" height="853" fetchpriority="high">
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST BAR -->
    <div class="trust" role="presentation">
      <div class="trust-inner">
        <span class="trust-item"><svg class="icon"><use href="#i-flag"/></svg> Producto ecuatoriano</span>
        <span class="trust-item"><svg class="icon"><use href="#i-leaf"/></svg> 100% natural, sin aditivos</span>
        <span class="trust-item"><svg class="icon"><use href="#i-recycle"/></svg> Compostable</span>
        <span class="trust-item"><svg class="icon"><use href="#i-truck"/></svg> Envíos a todo el país</span>
      </div>
    </div>

    <!-- QUÉ ES -->
    <section id="que-es">
      <div class="wrap about">
        <div class="reveal">
          <span class="eyebrow">Sobre el producto</span>
          <h2 class="title">Tecnología natural de la madera, al servicio de la higiene de sus mascotas</h2>
          <p class="sub" style="margin-bottom:1rem">
            Popipet Ecoarena es un producto ecuatoriano elaborado a partir de aserrín de madera
            100% natural, seleccionado cuidadosamente para garantizar la máxima calidad e higiene.
          </p>
          <p class="sub">
            Los pellets se hidratan con la orina de la mascota y neutralizan el olor únicamente con el
            poder de la resina natural de la madera: sin perfumes, sin sílice y sin químicos. El residuo
            es aserrín biodegradable que puede integrarse al compost.
          </p>
        </div>
        <div class="about-card reveal">
          <h3><svg class="icon"><use href="#i-shield"/></svg> Características del producto</h3>
          <ul class="about-list">
            <li><svg class="icon"><use href="#i-check"/></svg> Suave y cómodo para las patas de la mascota</li>
            <li><svg class="icon"><use href="#i-check"/></svg> Seco, fresco y limpio en todo momento</li>
            <li><svg class="icon"><use href="#i-check"/></svg> Alto poder de absorción de líquidos</li>
            <li><svg class="icon"><use href="#i-check"/></svg> 100% natural, sin conservantes ni preservantes</li>
            <li><svg class="icon"><use href="#i-check"/></svg> Repele bacterias, gérmenes y formación de hongos</li>
            <li><svg class="icon"><use href="#i-check"/></svg> Permite excavar y cubrir sin regueros ni polvo</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section id="beneficios">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Beneficios</span>
          <h2 class="title">Seis ventajas comprobadas</h2>
          <p class="sub">Un producto sanitario premium que cuida la salud de sus mascotas, la economía del hogar y el medio ambiente.</p>
        </div>
        <div class="grid-benef">
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-shield"/></svg></div><h3>Eliminación total de olores</h3><p>La resina natural de la madera posee una potente acción desodorante que neutraliza los olores sin ningún tipo de aditivo.</p></div>
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-coin"/></svg></div><h3>Económico</h3><p>Rinde 3 veces más que otras arenas gracias a su gran poder de absorción, reduciendo el consumo diario y mejorando la relación costo-beneficio.</p></div>
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-leaf"/></svg></div><h3>100% ecológico</h3><p>Elaborado a partir de residuos de madera renovable, aportando a la preservación del medio ambiente y a la economía circular.</p></div>
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-recycle"/></svg></div><h3>Biodegradable</h3><p>Puede desecharse junto con los residuos sólidos orgánicos o aprovecharse como compost en el jardín.</p></div>
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-wind"/></svg></div><h3>Higiénico y sin polvo</h3><p>No genera polvos ni lodos, y repele bacterias, gérmenes y la posible formación de hongos. Producto inocuo.</p></div>
          <div class="card reveal"><div class="ico"><svg class="icon"><use href="#i-heart"/></svg></div><h3>Saludable</h3><p>Previene problemas de alergias y enfermedades respiratorias en las mascotas más sensibles.</p></div>
        </div>
      </div>
    </section>

    <!-- PRODUCTO -->
    <section id="producto" style="background:#fff">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Tienda en línea</span>
          <h2 class="title">Adquiera Popipet Ecoarena</h2>
          <p class="sub">Realice su pedido en línea y recíbalo en cualquier ciudad del Ecuador.</p>
        </div>
        <div class="shop">
          <div class="shop-visual shop-photo reveal">
            <img src="/fotodondesecompra.jpg" alt="Saco de Popipet Ecoarena junto a un gato — la arena que tu mascota necesita" width="1240" height="1230" loading="lazy">
          </div>
          <div class="product-panel reveal">
            <span class="sku">Ref. POPIPET-10KG · Sanitario premium</span>
            <h3>Popipet Ecoarena — Saco de 10 kg</h3>
            <div class="price-row">
              <span class="price">${{ PRODUCT.price.toFixed(2) }}</span>
              <span class="price-note">USD · IVA incluido</span>
            </div>
            <p style="font-size:.9rem;color:var(--gray-600)">Rendimiento equivalente a 30 kg de arena tradicional.</p>
            <div class="divider"></div>
            <ul class="check-list">
              <li><svg class="icon"><use href="#i-check"/></svg> Pellets de aserrín de madera 100% natural, sin aditivos</li>
              <li><svg class="icon"><use href="#i-check"/></svg> Apto para gatos, conejos, roedores, reptiles, aves y caballos</li>
              <li><svg class="icon"><use href="#i-check"/></svg> Producto 100% ecuatoriano</li>
              <li><svg class="icon"><use href="#i-check"/></svg> Humedad ≤ 4% · Durabilidad mecánica 97%</li>
            </ul>
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
            <div class="ship-note">
              <svg class="icon"><use href="#i-truck"/></svg>
              <span>Envíos a todo Ecuador. El costo de envío se calcula según la ciudad de destino y se confirma al procesar el pedido.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APLICACIONES -->
    <section id="especies">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Aplicaciones</span>
          <h2 class="title">Un solo producto para siete tipos de mascotas</h2>
          <p class="sub">Popipet Ecoarena funciona como cama sanitaria y sustrato higiénico para:</p>
        </div>
        <div class="species reveal">
          <div class="sp"><svg><use href="#a-cat"/></svg><b>Gatos</b></div>
          <div class="sp"><svg><use href="#a-rabbit"/></svg><b>Conejos</b></div>
          <div class="sp"><svg><use href="#a-hamster"/></svg><b>Roedores</b></div>
          <div class="sp"><svg><use href="#a-turtle"/></svg><b>Tortugas</b></div>
          <div class="sp"><svg><use href="#a-lizard"/></svg><b>Reptiles</b></div>
          <div class="sp"><svg><use href="#a-horse"/></svg><b>Caballos</b></div>
          <div class="sp"><svg><use href="#a-bird"/></svg><b>Aves</b></div>
        </div>

        <div class="sec-head reveal" style="margin-top:4.5rem">
          <span class="eyebrow">Comparativa</span>
          <h2 class="title">Popipet frente a otras arenas</h2>
        </div>
        <div class="tabla-wrap reveal">
          <table class="tabla-comp">
            <thead>
              <tr><th>Característica</th><th>Popipet Ecoarena</th><th>Arena tradicional</th><th>Arena de tofu / soya</th></tr>
            </thead>
            <tbody>
              <tr><td>Rendimiento</td><td class="win">3 veces mayor</td><td>Estándar</td><td>Estándar</td></tr>
              <tr><td>Generación de polvo</td><td class="win"><span class="si">Ninguna</span></td><td><span class="no">Alta</span></td><td>Baja</td></tr>
              <tr><td>Biodegradable / compostable</td><td class="win"><span class="si">Sí</span></td><td><span class="no">No</span></td><td>Sí</td></tr>
              <tr><td>Libre de químicos y aditivos</td><td class="win"><span class="si">Sí</span></td><td><span class="no">No</span></td><td>Variable</td></tr>
              <tr><td>Producción nacional</td><td class="win"><span class="si">Sí</span></td><td><span class="no">No</span></td><td><span class="no">No</span></td></tr>
              <tr><td>Costo por semana de uso</td><td class="win">Bajo</td><td>Alto</td><td>Alto</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CÓMO USAR -->
    <section id="como-usar" style="background:#fff">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Modo de empleo</span>
          <h2 class="title">Cuatro pasos sencillos</h2>
        </div>
        <div class="steps">
          <div class="step reveal"><div class="num">01</div><h3>Vierta los pellets</h3><p>Coloque una capa de 3 a 4 cm de manera uniforme en el arenero, jaula o cama sanitaria. Para esquineros, rellene el recipiente.</p></div>
          <div class="step reveal"><div class="num">02</div><h3>Deje que absorba</h3><p>Al orinar la mascota, el pellet se hidrata, absorbe el líquido y neutraliza el olor de inmediato.</p></div>
          <div class="step reveal"><div class="num">03</div><h3>Retire lo usado</h3><p>Retire las deposiciones sólidas con una pala y cambie la zona húmeda cuando la mayoría de pellets estén hidratados.</p></div>
          <div class="step reveal"><div class="num">04</div><h3>Rellene con producto</h3><p>Agregue producto nuevo. Se recomienda usar camas sanitarias con malla o doble fondo para mantener el lecho seco por más tiempo.</p></div>
        </div>
        <p class="reveal" style="margin-top:2rem;font-size:.9rem;color:var(--gray-600);max-width:46rem">
          <strong>Transición desde otra arena:</strong> para una adaptación óptima, realice un cambio progresivo dejando
          en la parte superior una capa del antiguo lecho higiénico. Conserve el producto en un lugar seco.
          <NuxtLink to="/blog/como-hacer-la-transicion-de-arena-tradicional-a-pellets" style="color:var(--green-700);font-weight:700"> Lea nuestra guía completa de transición.</NuxtLink>
        </p>
      </div>
    </section>

    <!-- GALERÍA -->
    <section id="galeria" style="background:var(--sand);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Galería</span>
          <h2 class="title">Así es Popipet Ecoarena</h2>
          <p class="sub">Pellets de madera 100% natural, tal como llegan a su hogar.</p>
        </div>
        <div class="carousel reveal">
          <button class="car-btn prev" @click="scrollCarousel(-1)" aria-label="Foto anterior">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="car-track" ref="carTrack">
            <figure class="car-item" v-for="g in galeria" :key="g.src">
              <img :src="g.src" :alt="g.alt" loading="lazy">
            </figure>
          </div>
          <button class="car-btn next" @click="scrollCarousel(1)" aria-label="Siguiente foto">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- FICHA TÉCNICA -->
    <section id="ficha">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow" style="color:var(--accent)">Ficha técnica</span>
          <h2 class="title">Especificaciones del producto</h2>
          <p class="sub">Parámetros técnicos verificados de fabricación.</p>
        </div>
        <div class="specs reveal">
          <div class="spec"><span>Material</span><b>Aserrín de madera</b></div>
          <div class="spec"><span>Presentación</span><b>10 kilogramos</b></div>
          <div class="spec"><span>Diámetro</span><b>6 mm</b></div>
          <div class="spec"><span>Humedad</span><b>≤ 4%</b></div>
          <div class="spec"><span>Durabilidad mecánica</span><b>97%</b></div>
          <div class="spec"><span>Densidad aparente</span><b>≥ 650 kg/m³</b></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIOS -->
    <section id="testimonios" style="background:#fff">
      <div class="wrap">
        <div class="sec-head reveal">
          <span class="eyebrow">Testimonios</span>
          <h2 class="title">La experiencia de nuestros clientes</h2>
        </div>
        <div class="testis">
          <div class="testi reveal">
            <div class="stars">★★★★★</div>
            <p>"Mi gata es muy delicada con las arenas y se adaptó desde el primer día. No genera polvo y el departamento se mantiene sin olores."</p>
            <footer><div class="avatar">MR</div><div><b>María José R.</b><small>Quito</small></div></footer>
          </div>
          <div class="testi reveal">
            <div class="stars">★★★★★</div>
            <p>"Tengo dos conejos y un hámster. Uso Popipet para todos y rinde muchísimo más que cualquier sustrato que compraba antes."</p>
            <footer><div class="avatar">CA</div><div><b>Carlos A.</b><small>Guayaquil</small></div></footer>
          </div>
          <div class="testi reveal">
            <div class="stars">★★★★★</div>
            <p>"Lo utilizo en las caballerizas y el cambio fue notable: menos olor, menos moscas y el desecho va directo al compost de la finca."</p>
            <footer><div class="avatar">VT</div><div><b>Verónica T.</b><small>Cuenca</small></div></footer>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" style="background:var(--sand);border-top:1px solid var(--line)">
      <div class="wrap" style="max-width:800px">
        <div class="sec-head center reveal">
          <span class="eyebrow" style="justify-content:center">Preguntas frecuentes</span>
          <h2 class="title">Resolvemos sus dudas</h2>
        </div>
        <div class="reveal">
          <details v-for="f in faqs" :key="f.q">
            <summary>{{ f.q }} <svg class="chev icon"><use href="#i-chev"/></svg></summary>
            <div class="resp">{{ f.a }}</div>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { add } = useCart()
const selQty = ref(1)

const carTrack = ref<HTMLElement | null>(null)
const galeria = [
  { src: '/galeria/galeria-1.jpg', alt: 'Pellets de madera Popipet Ecoarena en detalle' },
  { src: '/galeria/galeria-2.jpg', alt: 'Textura natural de los pellets de aserrín de madera' },
  { src: '/galeria/galeria-3.jpg', alt: 'Pellets de madera 100% naturales sin aditivos' },
  { src: '/galeria/galeria-4.jpg', alt: 'Pellets de Popipet Ecoarena listos para el arenero' },
  { src: '/galeria/galeria-5.jpg', alt: 'Gato usando su arenero con Popipet Ecoarena' }
]

function scrollCarousel(dir: number) {
  const track = carTrack.value
  if (!track) return
  track.scrollBy({ left: dir * track.clientWidth * 0.75, behavior: 'smooth' })
}
const config = useRuntimeConfig()
const site = config.public.siteUrl

function addToCart() {
  add(selQty.value)
  selQty.value = 1
}

const faqs = [
  { q: '¿Qué es la arena ecológica de pellets para gatos?', a: 'Es una arena sanitaria hecha de pellets de aserrín de madera 100% natural. Los pellets absorben la orina, neutralizan el olor con la resina natural de la madera y se deshacen en aserrín. Sin químicos, sin perfumes, sin sílice.' },
  { q: '¿Cuánto dura un saco de 10 kg?', a: 'Gracias a su gran poder de absorción, Popipet rinde hasta 3 veces más que la arena tradicional: un saco de 10 kg dura varias semanas para un gato, dependiendo del uso.' },
  { q: '¿Cómo se realiza la transición desde la arena tradicional?', a: 'Se recomienda un cambio progresivo: coloque Popipet como base y deje encima una capa del antiguo lecho higiénico. En pocos días la mascota lo aceptará con normalidad.' },
  { q: '¿Sirve para otras mascotas además de gatos?', a: 'Sí. Es ideal como cama sanitaria para conejos, hámsters, cobayas, hurones, tortugas, reptiles, aves y caballos. Para mascotas que utilizan esquinero, simplemente rellene el recipiente.' },
  { q: '¿Cómo se desecha la arena usada?', a: 'Al ser 100% biodegradable, puede desecharse con los residuos orgánicos o aprovecharse como compost en el jardín.' },
  { q: '¿Realizan envíos a todo Ecuador? ¿Cómo se paga?', a: 'Sí, enviamos a todo Ecuador (el producto tiene un costo especial de envío). Arme su pedido en el carrito, envíelo por WhatsApp y nuestro equipo coordinará el pago y la entrega de inmediato.' }
]

useSeoMeta({
  title: 'Popipet Ecoarena | Arena Ecológica de Pellets de Madera para Gatos, Roedores y Caballos | Ecuador',
  description: 'Popipet Ecoarena: arena ecológica para gatos hecha de pellets de madera 100% natural. Biodegradable, sin polvo, elimina olores y rinde 3 veces más. Producto ecuatoriano. Pedidos a todo Ecuador.',
  keywords: 'arena para gatos ecuador, arena ecológica para gatos, arena de pellets para gatos, pellets de madera para gatos, arena biodegradable, arena para gatos sin polvo, cama sanitaria para mascotas, sustrato para roedores, cama para caballos, arena natural para gatos, arena para gatos Quito, arena para gatos Guayaquil',
  ogType: 'website',
  ogTitle: 'Popipet Ecoarena | Arena Ecológica de Pellets para Gatos - Ecuador',
  ogDescription: 'Arena sanitaria premium 100% ecológica hecha en Ecuador. Elimina olores, sin polvo, biodegradable y rinde 3 veces más. Para gatos, roedores, conejos y caballos.',
  ogLocale: 'es_EC',
  ogSiteName: 'Popipet Ecoarena',
  ogUrl: site + '/',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: site + '/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Popipet Ecoarena - Arena Ecológica de Pellets de Madera 10 kg',
        description: 'Arena sanitaria premium 100% ecológica hecha de pellets de aserrín de madera 100% natural. Para gatos, conejos, roedores, tortugas, reptiles, caballos y aves. Elimina olores sin aditivos, biodegradable y sin polvo.',
        brand: { '@type': 'Brand', name: 'Popipet Ecoarena' },
        countryOfOrigin: 'EC',
        weight: { '@type': 'QuantitativeValue', value: '10', unitCode: 'KGM' },
        offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'USD', availability: 'https://schema.org/InStock', areaServed: 'Ecuador' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      })
    }
  ]
})

useReveal()
</script>
