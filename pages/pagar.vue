<template>
  <main class="checkout-page">
    <div class="checkout-wrap">
      <NuxtLink to="/" class="breadcrumb">← Volver a la tienda</NuxtLink>
      <h1>Finalizar compra</h1>

      <template v-if="list.length">
        <div class="summary card">
          <div v-for="it in list" :key="it.id" class="sum-row">
            <span>{{ it.qty }} × {{ it.name }}</span>
            <span>${{ (it.qty * it.price).toFixed(2) }}</span>
          </div>
          <div class="sum-row muted">
            <span>Subtotal</span>
            <span>${{ (cents.base / 100).toFixed(2) }}</span>
          </div>
          <div class="sum-row muted">
            <span>IVA ({{ Math.round(IVA_RATE * 100) }}%)</span>
            <span>${{ (cents.tax / 100).toFixed(2) }}</span>
          </div>
          <div class="sum-row total">
            <span>Total</span>
            <span>${{ total.toFixed(2) }}</span>
          </div>
        </div>

        <!-- El contenedor #pp-button debe existir en el DOM antes de llamar a render() -->
        <div v-if="configured && !loadError" class="paybox card">
          <p class="paybox-label">Pague de forma segura con tarjeta de crédito o débito:</p>
          <p v-if="!payphoneReady">Cargando módulo de pago seguro…</p>
          <div id="pp-button"></div>
        </div>
        <div v-else-if="loadError" class="paybox card">
          <p>No se pudo cargar el módulo de pagos. Intente de nuevo o realice su pedido por WhatsApp.</p>
        </div>
        <div v-else class="paybox card">
          <p>El pago con tarjeta estará disponible muy pronto. Por ahora puede completar su pedido por WhatsApp.</p>
        </div>

        <p class="alt-pay">
          ¿Prefiere coordinar pago contra entrega?
          <button class="linklike" @click="checkout">Pedir por WhatsApp</button>
        </p>
        <p class="drawer-note">El costo de envío se coordina según su ciudad al confirmar el pedido.</p>
      </template>

      <template v-else>
        <p class="empty-msg">Su carrito está vacío.</p>
        <NuxtLink to="/" class="btn btn-primary">Ver el producto</NuxtLink>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { IVA_RATE } from '~/composables/useCart'

useHead({ title: 'Finalizar compra — Popipet Ecoarena' })

const { items, total, cents, checkout } = useCart()
const list = computed(() => Object.values(items.value))

const config = useRuntimeConfig().public.payphone
const configured = Boolean(config.token && config.storeId)
const payphoneReady = ref(false)
const loadError = ref(false)

const BOX_JS = 'https://cdn.payphonetodoesposible.com/box/v2.0/payphone-payment-box.js'
const BOX_CSS = 'https://cdn.payphonetodoesposible.com/box/v2.0/payphone-payment-box.css'

function loadBoxScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).PPaymentButtonBox) return resolve()
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = BOX_CSS
    document.head.appendChild(css)

    const s = document.createElement('script')
    s.type = 'module'
    s.src = BOX_JS
    s.onload = () => {
      // El script define el global de forma asíncrona; esperar hasta 5 s
      let tries = 0
      const poll = setInterval(() => {
        if ((window as any).PPaymentButtonBox) {
          clearInterval(poll)
          resolve()
        } else if (++tries > 50) {
          clearInterval(poll)
          reject(new Error('PPaymentButtonBox no disponible'))
        }
      }, 100)
    }
    s.onerror = () => reject(new Error('No se pudo cargar el script de PayPhone'))
    document.head.appendChild(s)
  })
}

onMounted(async () => {
  if (!configured || !list.value.length) return
  try {
    await loadBoxScript()
    await nextTick()
    const clientTransactionId = `POPIPET-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    const box = new (window as any).PPaymentButtonBox({
      token: config.token,
      storeId: config.storeId,
      clientTransactionId,
      amount: cents.value.total,
      amountWithTax: cents.value.base,
      tax: cents.value.tax,
      amountWithoutTax: 0,
      service: 0,
      tip: 0,
      currency: 'USD',
      reference: `Pedido Popipet Ecoarena (${list.value.map(i => `${i.qty}x ${i.id}`).join(', ')})`,
      lang: 'es',
      defaultMethod: 'card',
      timeZone: -5
    })
    box.render('pp-button')
    payphoneReady.value = true
  } catch (err) {
    console.error('[payphone] No se pudo inicializar la Cajita:', err)
    loadError.value = true
  }
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
.summary,
.paybox {
  padding: 20px;
}
.sum-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
}
.sum-row.muted {
  opacity: 0.75;
  font-size: 0.92em;
}
.sum-row.total {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  padding-top: 12px;
  font-weight: 700;
}
.paybox-label {
  margin-bottom: 12px;
}
.alt-pay {
  text-align: center;
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
