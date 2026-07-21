<template>
  <main class="checkout-page">
    <div class="checkout-wrap">
      <template v-if="state === 'loading'">
        <h1>Verificando su pago…</h1>
        <p>Un momento por favor, estamos confirmando la transacción con PayPhone.</p>
      </template>

      <template v-else-if="state === 'approved'">
        <h1>✅ ¡Pago confirmado!</h1>
        <div class="card receipt">
          <p><b>Gracias por su compra.</b> Su pedido de Popipet Ecoarena fue registrado.</p>
          <div class="sum-row" v-if="result?.amount != null">
            <span>Monto pagado</span><span>${{ result.amount.toFixed(2) }}</span>
          </div>
          <div class="sum-row" v-if="result?.transactionId">
            <span>N.º de transacción</span><span>{{ result.transactionId }}</span>
          </div>
          <div class="sum-row" v-if="result?.authorizationCode">
            <span>Código de autorización</span><span>{{ result.authorizationCode }}</span>
          </div>
          <div class="sum-row" v-if="result?.cardBrand">
            <span>Tarjeta</span><span>{{ result.cardBrand }} •••• {{ result.lastDigits }}</span>
          </div>
        </div>
        <p>
          Para coordinar la entrega, escríbanos por WhatsApp indicando su número de
          transacción y ciudad:
        </p>
        <a class="btn btn-primary" :href="waLink" target="_blank" rel="noopener">
          Coordinar entrega por WhatsApp
        </a>
      </template>

      <template v-else-if="state === 'failed'">
        <h1>El pago no se completó</h1>
        <p>
          Su tarjeta no fue debitada o la transacción fue rechazada
          <template v-if="result?.message">({{ result.message }})</template>.
          Puede intentarlo nuevamente.
        </p>
        <NuxtLink to="/pagar" class="btn btn-primary">Reintentar el pago</NuxtLink>
      </template>

      <template v-else>
        <h1>Enlace de pago inválido</h1>
        <p>No encontramos información de la transacción. Si usted realizó un pago y ve este mensaje, contáctenos por WhatsApp.</p>
        <NuxtLink to="/" class="btn btn-primary">Volver a la tienda</NuxtLink>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { WHATSAPP } from '~/composables/useCart'

useHead({ title: 'Confirmación de pago — Popipet Ecoarena', meta: [{ name: 'robots', content: 'noindex' }] })

type ConfirmResult = {
  approved: boolean
  status: string
  transactionId: number | string
  authorizationCode: string | null
  amount: number | null
  cardBrand: string | null
  lastDigits: string | null
  message: string | null
}

const route = useRoute()
const { clear } = useCart()
const state = ref<'loading' | 'approved' | 'failed' | 'invalid'>('loading')
const result = ref<ConfirmResult | null>(null)

const waLink = computed(() => {
  const tx = result.value?.transactionId ?? ''
  const msg = encodeURIComponent(
    `Hola, acabo de pagar mi pedido de Popipet Ecoarena con tarjeta (transacción ${tx}). Mi ciudad de entrega es: `
  )
  return `https://wa.me/${WHATSAPP}?text=${msg}`
})

onMounted(async () => {
  const id = Number(route.query.id)
  const clientTxId = String(route.query.clientTransactionId || '')
  if (!id || !clientTxId) {
    state.value = 'invalid'
    return
  }
  try {
    result.value = await $fetch<ConfirmResult>('/api/payphone/confirm', {
      method: 'POST',
      body: { id, clientTxId }
    })
    if (result.value.approved) {
      clear()
      state.value = 'approved'
    } else {
      state.value = 'failed'
    }
  } catch {
    state.value = 'failed'
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
.receipt {
  padding: 20px;
}
.sum-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
}
</style>
