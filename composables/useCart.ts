export interface CartItem {
  id: string
  name: string
  price: number
  qty: number
}

export const PRODUCT = {
  id: 'popipet-10kg',
  name: 'Popipet Ecoarena — Saco 10 kg',
  price: 14.99
}

export const WHATSAPP = '593983068976'

// IVA Ecuador. Los precios de venta NO lo incluyen: se suma al subtotal.
export const IVA_RATE = 0.15

let toastTimer: ReturnType<typeof setTimeout> | null = null

export function useCart() {
  const items = useState<Record<string, CartItem>>('cart-items', () => ({}))
  const drawerOpen = useState<boolean>('cart-drawer', () => false)
  const toast = useState<{ msg: string; show: boolean }>('cart-toast', () => ({ msg: '', show: false }))

  const count = computed(() =>
    Object.values(items.value).reduce((a, i) => a + i.qty, 0)
  )
  // Suma de precios de lista (sin IVA)
  const subtotal = computed(() =>
    Object.values(items.value).reduce((a, i) => a + i.qty * i.price, 0)
  )

  function showToast(msg: string) {
    toast.value = { msg, show: true }
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      toast.value = { ...toast.value, show: false }
    }, 2200)
  }

  function add(qty = 1) {
    const existing = items.value[PRODUCT.id]
    items.value = {
      ...items.value,
      [PRODUCT.id]: {
        ...PRODUCT,
        qty: (existing?.qty || 0) + qty
      }
    }
    showToast('Producto agregado al carrito')
    drawerOpen.value = true
  }

  function setQty(id: string, delta: number) {
    const it = items.value[id]
    if (!it) return
    const q = it.qty + delta
    const next = { ...items.value }
    if (q <= 0) delete next[id]
    else next[id] = { ...it, qty: q }
    items.value = next
  }

  function clear() {
    items.value = {}
  }

  // Desglose en centavos para PayPhone: amount = amountWithTax + tax.
  // El IVA se calcula sobre el subtotal y se suma (precios sin IVA).
  const cents = computed(() => {
    const baseCents = Math.round(subtotal.value * 100)
    const taxCents = Math.round(baseCents * IVA_RATE)
    return { total: baseCents + taxCents, base: baseCents, tax: taxCents }
  })

  // Total a pagar (subtotal + IVA)
  const total = computed(() => cents.value.total / 100)

  function checkout() {
    const list = Object.values(items.value)
    if (!list.length) {
      showToast('Agregue un producto al carrito primero')
      return
    }
    let msg = 'Hola, deseo realizar el siguiente pedido:%0A%0A'
    list.forEach((i) => {
      msg += `- ${i.qty} x ${i.name} — $${(i.qty * i.price).toFixed(2)}%0A`
    })
    msg += `%0ASubtotal: $${subtotal.value.toFixed(2)}%0AIVA (${Math.round(IVA_RATE * 100)}%): $${(cents.value.tax / 100).toFixed(2)}%0ATotal: $${total.value.toFixed(2)}%0A%0ACiudad de entrega: `
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
  }

  return { items, drawerOpen, toast, count, subtotal, total, cents, add, setQty, clear, checkout, showToast }
}
