<template>
  <div>
    <div class="overlay" :class="{ open: drawerOpen }" @click="drawerOpen = false"></div>
    <aside class="drawer" :class="{ open: drawerOpen }" aria-label="Carrito de compras">
      <div class="drawer-head">
        <h3>Carrito de compras</h3>
        <button class="drawer-close" @click="drawerOpen = false" aria-label="Cerrar carrito">
          <svg class="icon"><use href="#i-x"/></svg>
        </button>
      </div>
      <div class="drawer-items">
        <p v-if="!list.length" class="empty-msg">Su carrito está vacío.</p>
        <div v-for="it in list" :key="it.id" class="cart-item">
          <div class="mini">
            <svg class="icon"><use href="#i-box"/></svg>
          </div>
          <div>
            <b>{{ it.name }}</b>
            <span class="sub-p">${{ it.price.toFixed(2) }} c/u</span>
          </div>
          <div class="mini-qty">
            <button @click="setQty(it.id, -1)" aria-label="Quitar uno">−</button>
            <b>{{ it.qty }}</b>
            <button @click="setQty(it.id, 1)" aria-label="Agregar uno">+</button>
          </div>
        </div>
      </div>
      <div class="drawer-foot">
        <div v-if="list.length" class="total-row sub"><span>Subtotal</span><span>${{ subtotal.toFixed(2) }}</span></div>
        <div v-if="list.length" class="total-row sub"><span>IVA (15%)</span><span>${{ (cents.tax / 100).toFixed(2) }}</span></div>
        <div class="total-row"><span>Total</span><span>${{ total.toFixed(2) }}</span></div>
        <NuxtLink
          v-if="list.length"
          to="/pagar"
          class="btn btn-primary"
          style="width:100%"
          @click="drawerOpen = false"
        >
          Pagar con tarjeta
        </NuxtLink>
        <button class="btn btn-outline" style="width:100%" @click="checkout">
          Finalizar pedido por WhatsApp
        </button>
        <p class="drawer-note">El costo de envío se coordina según su ciudad al confirmar el pedido.</p>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const { items, drawerOpen, subtotal, total, cents, setQty, checkout } = useCart()
const list = computed(() => Object.values(items.value))
</script>
