<template>
  <main class="checkout-page">
    <div class="admin-wrap">
      <h1>Panel de pedidos</h1>

      <template v-if="!autenticado">
        <div class="card admin-login">
          <p>Ingrese la clave de administración:</p>
          <form @submit.prevent="entrar">
            <input v-model="clave" type="password" placeholder="Clave" autocomplete="off" />
            <button class="btn btn-primary" type="submit" :disabled="cargando">
              {{ cargando ? 'Verificando…' : 'Entrar' }}
            </button>
          </form>
          <p v-if="error" class="admin-error">{{ error }}</p>
        </div>
      </template>

      <template v-else>
        <div class="admin-bar">
          <span>{{ pedidos.length }} pedido(s)</span>
          <button class="linklike" @click="cargar">↻ Actualizar</button>
          <button class="linklike" @click="salir">Salir</button>
        </div>

        <p v-if="!pedidos.length" class="empty-msg">Aún no hay pedidos registrados.</p>

        <div v-for="p in pedidos" :key="p.codigo" class="card admin-pedido">
          <div class="ap-head">
            <b class="ap-codigo">{{ p.codigo }}</b>
            <span class="ap-estado" :data-estado="p.estado">{{ etiqueta(p.estado) }}</span>
          </div>
          <div class="ap-datos">
            <span><b>${{ Number(p.monto).toFixed(2) }}</b></span>
            <span v-if="p.cliente_nombre">{{ p.cliente_nombre }}</span>
            <span v-if="p.cliente_telefono">
              <a :href="`https://wa.me/${String(p.cliente_telefono).replace(/[^0-9]/g, '')}`" target="_blank" rel="noopener">
                {{ p.cliente_telefono }}
              </a>
            </span>
            <span v-if="p.cliente_email">{{ p.cliente_email }}</span>
            <span v-if="p.ciudad">📍 {{ p.ciudad }}</span>
            <span class="ap-fecha">{{ fecha(p.creado_en) }}</span>
          </div>
          <div class="ap-acciones">
            <button
              v-for="e in siguientes(p.estado)"
              :key="e"
              class="btn btn-outline btn-sm"
              :disabled="cargando"
              @click="cambiar(p, e)"
            >
              Marcar: {{ etiqueta(e) }}
            </button>
            <NuxtLink class="linklike" :to="`/pedido/${encodeURIComponent(p.codigo)}`" target="_blank">
              Ver como cliente ↗
            </NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Panel de pedidos — Popipet', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const clave = ref('')
const autenticado = ref(false)
const cargando = ref(false)
const error = ref('')
const pedidos = ref<any[]>([])

const ETIQUETAS: Record<string, string> = {
  pagado: 'Pago confirmado',
  empacando: 'Empacando',
  enviado: 'Enviado',
  entregado: 'Entregado'
}
const ORDEN = ['pagado', 'empacando', 'enviado', 'entregado']

function etiqueta(e: string) {
  return ETIQUETAS[e] || e
}
function siguientes(estado: string): string[] {
  const i = ORDEN.indexOf(estado)
  return ORDEN.slice(i + 1)
}
function fecha(f: string) {
  return new Date(f).toLocaleString('es-EC', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
}

async function cargar() {
  cargando.value = true
  error.value = ''
  try {
    pedidos.value = await $fetch<any[]>('/api/admin/pedidos', {
      method: 'POST',
      body: { clave: clave.value }
    })
    autenticado.value = true
    sessionStorage.setItem('pp-admin', clave.value)
  } catch (e: any) {
    error.value = e?.statusCode === 401 ? 'Clave incorrecta' : 'Error al cargar los pedidos'
    autenticado.value = false
  } finally {
    cargando.value = false
  }
}

function entrar() {
  if (clave.value.trim()) cargar()
}

function salir() {
  sessionStorage.removeItem('pp-admin')
  autenticado.value = false
  clave.value = ''
  pedidos.value = []
}

async function cambiar(p: any, estado: string) {
  cargando.value = true
  try {
    await $fetch('/api/admin/actualizar', {
      method: 'POST',
      body: { clave: clave.value, codigo: p.codigo, estado }
    })
    await cargar()
  } catch {
    error.value = 'No se pudo actualizar el pedido'
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  const guardada = sessionStorage.getItem('pp-admin')
  if (guardada) {
    clave.value = guardada
    cargar()
  }
})
</script>

<style scoped>
.checkout-page {
  min-height: 70vh;
  padding: 120px 20px 60px;
}
.admin-wrap {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.admin-login {
  padding: 20px;
}
.admin-login form {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.admin-login input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font: inherit;
}
.admin-error {
  color: #b91c1c;
  margin-top: 10px;
}
.admin-bar {
  display: flex;
  gap: 16px;
  align-items: center;
}
.admin-pedido {
  padding: 16px 18px;
}
.ap-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
.ap-codigo {
  word-break: break-all;
  font-size: 0.9rem;
}
.ap-estado {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
}
.ap-estado[data-estado='entregado'] {
  background: #dcfce7;
}
.ap-estado[data-estado='enviado'] {
  background: #dbeafe;
}
.ap-estado[data-estado='empacando'] {
  background: #fef9c3;
}
.ap-datos {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin: 8px 0;
  opacity: 0.85;
}
.ap-fecha {
  opacity: 0.6;
}
.ap-acciones {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.btn-sm {
  padding: 6px 12px;
  font-size: 0.85rem;
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
