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

        <!-- Datos de entrega -->
        <div v-if="editandoDireccion" class="card envio-card">
          <h2 class="envio-titulo">📍 Datos de entrega</h2>
          <p class="envio-sub">Indíquenos dónde entregar su pedido:</p>
          <form class="envio-form" @submit.prevent="guardarDireccion">
            <div class="envio-tipo">
              <label :class="{ activo: form.tipo === 'domicilio' }">
                <input v-model="form.tipo" type="radio" value="domicilio" /> 🏠 Domicilio
              </label>
              <label :class="{ activo: form.tipo === 'oficina' }">
                <input v-model="form.tipo" type="radio" value="oficina" /> 🏢 Oficina
              </label>
            </div>
            <input v-model="form.ciudad" type="text" placeholder="Ciudad *" maxlength="80" required />
            <input v-model="form.direccion" type="text" placeholder="Dirección (calle, número, sector) *" maxlength="300" required />
            <input v-model="form.referencia" type="text" placeholder="Referencia (edificio, piso, punto conocido) — opcional" maxlength="300" />
            <button class="btn btn-primary" type="submit" :disabled="guardando">
              {{ guardando ? 'Guardando…' : 'Guardar datos de entrega' }}
            </button>
            <p v-if="errorDireccion" class="envio-error">{{ errorDireccion }}</p>
          </form>
        </div>

        <div v-else-if="pedido.direccion" class="card envio-card">
          <h2 class="envio-titulo">📍 Entrega en {{ pedido.tipo_lugar === 'oficina' ? 'oficina' : 'domicilio' }}</h2>
          <p class="envio-resumen">
            {{ pedido.ciudad }} — {{ pedido.direccion }}
            <template v-if="pedido.referencia_entrega"><br />Ref.: {{ pedido.referencia_entrega }}</template>
          </p>
          <button v-if="puedeEditar" class="linklike" @click="editarDireccion">Corregir dirección</button>
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

// --- Datos de entrega ---
const guardando = ref(false)
const errorDireccion = ref('')
const editando = ref(false)
const form = reactive({ tipo: 'domicilio', ciudad: '', direccion: '', referencia: '' })

const puedeEditar = computed(() =>
  ['pagado', 'empacando'].includes(pedido.value?.estado)
)
const editandoDireccion = computed(() =>
  pedido.value && puedeEditar.value && (editando.value || !pedido.value.direccion)
)

function editarDireccion() {
  form.tipo = pedido.value?.tipo_lugar || 'domicilio'
  form.ciudad = pedido.value?.ciudad || ''
  form.direccion = pedido.value?.direccion || ''
  form.referencia = pedido.value?.referencia_entrega || ''
  editando.value = true
}

async function guardarDireccion() {
  guardando.value = true
  errorDireccion.value = ''
  try {
    await $fetch('/api/pedido/direccion', {
      method: 'POST',
      body: { codigo, ...form }
    })
    pedido.value = {
      ...pedido.value,
      ciudad: form.ciudad,
      direccion: form.direccion,
      referencia_entrega: form.referencia || null,
      tipo_lugar: form.tipo
    }
    editando.value = false
  } catch (e: any) {
    errorDireccion.value =
      e?.data?.statusMessage || 'No se pudo guardar. Intente de nuevo o escríbanos por WhatsApp.'
  } finally {
    guardando.value = false
  }
}
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
.envio-card {
  padding: 22px;
}
.envio-titulo {
  font-size: 1.05rem;
  margin: 0 0 4px;
}
.envio-sub {
  font-size: 0.9rem;
  opacity: 0.75;
  margin-bottom: 14px;
}
.envio-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.envio-tipo {
  display: flex;
  gap: 10px;
}
.envio-tipo label {
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
}
.envio-tipo label.activo {
  border-color: var(--green-950, #14532d);
  background: rgba(20, 83, 45, 0.07);
  font-weight: 700;
}
.envio-tipo input {
  display: none;
}
.envio-form input[type='text'] {
  padding: 11px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font: inherit;
}
.envio-error {
  color: #b91c1c;
  font-size: 0.9rem;
}
.envio-resumen {
  font-size: 0.95rem;
  margin: 6px 0 10px;
}
.linklike {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  font: inherit;
  text-decoration: underline;
  cursor: pointer;
}
</style>
