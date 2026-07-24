<template>
  <main class="checkout-page">
    <div class="checkout-wrap">
      <NuxtLink to="/" class="breadcrumb">← Volver a la tienda</NuxtLink>

      <template v-if="pending">
        <h1>Buscando su pedido…</h1>
      </template>

      <template v-else-if="pedido">
        <h1>Seguimiento de su pedido</h1>
        <div class="card track-card">
          <div class="track-head">
            <div>
              <span class="track-label">Pedido</span>
              <b class="track-code">{{ pedido.codigo }}</b>
            </div>
            <div>
              <span class="track-label">Total pagado</span>
              <b>${{ Number(pedido.monto).toFixed(2) }}</b>
            </div>
          </div>
          <p v-if="pedido.referencia" class="track-ref">{{ pedido.referencia }}</p>

          <ol class="timeline">
            <li
              v-for="(paso, i) in pasos"
              :key="paso.estado"
              :class="{ done: i <= estadoIdx, current: i === estadoIdx }"
            >
              <span class="dot">{{ i <= estadoIdx ? '✓' : '' }}</span>
              <div>
                <b>{{ paso.titulo }}</b>
                <p>{{ paso.detalle }}</p>
                <small v-if="fechaDe(paso.estado)">{{ fechaDe(paso.estado) }}</small>
              </div>
            </li>
          </ol>
        </div>

        <p class="track-tip">
          Guarde este enlace para consultar el avance de su pedido cuando quiera.
          Los envíos llegan en 24–72 horas según su ciudad.
        </p>
        <a class="btn btn-outline" :href="waLink" target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>
      </template>

      <template v-else>
        <h1>Pedido no encontrado</h1>
        <p>
          No encontramos un pedido con ese código. Verifique el enlace que recibió al
          pagar, o escríbanos por WhatsApp.
        </p>
        <NuxtLink to="/" class="btn btn-primary">Volver a la tienda</NuxtLink>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { WHATSAPP } from '~/composables/useCart'

useHead({ title: 'Seguimiento de pedido — Popipet Ecoarena', meta: [{ name: 'robots', content: 'noindex' }] })

const route = useRoute()
const codigo = String(route.params.codigo || '')

const { data: pedido, pending } = await useFetch<any>(
  `/api/pedido/${encodeURIComponent(codigo)}`,
  { server: false }
)

const pasos = [
  { estado: 'pagado', titulo: 'Pago confirmado', detalle: 'Recibimos su pago y registramos el pedido.' },
  { estado: 'empacando', titulo: 'Preparando su pedido', detalle: 'Estamos empacando su Popipet Ecoarena.' },
  { estado: 'enviado', titulo: 'En camino', detalle: 'Su pedido salió a la dirección coordinada.' },
  { estado: 'entregado', titulo: 'Entregado', detalle: '¡Gracias por su compra! Su gato se lo agradecerá.' }
]

const estadoIdx = computed(() =>
  Math.max(0, pasos.findIndex(p => p.estado === pedido.value?.estado))
)

function fechaDe(estado: string): string | null {
  const h = (pedido.value?.historial || []).filter((x: any) => x.estado === estado).pop()
  if (!h?.fecha) return null
  return new Date(h.fecha).toLocaleString('es-EC', {
    day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
  })
}

const waLink = computed(() => {
  const msg = encodeURIComponent(
    `Hola, quiero consultar sobre mi pedido ${codigo} de Popipet Ecoarena.`
  )
  return `https://wa.me/${WHATSAPP}?text=${msg}`
})
</script>

<style scoped>
.checkout-page {
  min-height: 70vh;
  padding: 120px 20px 60px;
}
.checkout-wrap {
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.track-card {
  padding: 24px;
}
.track-head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.track-label {
  display: block;
  font-size: 0.8rem;
  opacity: 0.65;
}
.track-code {
  word-break: break-all;
}
.track-ref {
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.75;
}
.timeline {
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
}
.timeline li {
  display: flex;
  gap: 14px;
  position: relative;
  padding-bottom: 26px;
  opacity: 0.45;
}
.timeline li.done {
  opacity: 1;
}
.timeline li:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 28px;
  bottom: 2px;
  width: 2px;
  background: currentColor;
  opacity: 0.25;
}
.timeline .dot {
  flex: 0 0 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  font-weight: 800;
}
.timeline li.done .dot {
  background: var(--green-950, #14532d);
  border-color: var(--green-950, #14532d);
  color: #fff;
}
.timeline li.current b {
  text-decoration: underline;
}
.timeline p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 2px 0;
}
.timeline small {
  opacity: 0.6;
}
.track-tip {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
