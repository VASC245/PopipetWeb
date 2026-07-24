// Confirma una transacción con PayPhone. El estado del pago solo se acepta
// si lo devuelve la API de PayPhone, nunca lo que reporte el navegador.
export default defineEventHandler(async (event) => {
  const token = useRuntimeConfig(event).payphone.token
  if (!token) {
    throw createError({ statusCode: 503, statusMessage: 'Pasarela de pago no configurada' })
  }

  const body = await readBody<{ id?: number | string; clientTxId?: string }>(event)
  const id = Number(body?.id)
  const clientTxId = String(body?.clientTxId || '')
  if (!id || !clientTxId) {
    throw createError({ statusCode: 400, statusMessage: 'Parámetros de transacción inválidos' })
  }

  let tx: any
  try {
    // Endpoint oficial de confirmación de la Cajita de Pagos (docs Payphone).
    // Si no se confirma dentro de 5 minutos, Payphone reversa la transacción.
    tx = await $fetch('https://paymentbox.payphonetodoesposible.com/api/confirm', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: { id, clientTxId }
    })
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'No se pudo verificar el pago con PayPhone' })
  }

  // statusCode: 3 = Aprobada, 2 = Cancelada
  const approved = tx?.transactionStatus === 'Approved' || tx?.statusCode === 3

  if (approved) {
    // Registrar el pedido para rastreo. Si falla, no se bloquea la confirmación
    // del pago: el pedido se puede coordinar igual por WhatsApp.
    try {
      await rpcPedidos(event, 'crear_pedido', {
        p_clave: useRuntimeConfig(event).pedidosAdminKey,
        p_codigo: clientTxId,
        p_transaction_id: tx?.transactionId ?? id,
        p_monto: typeof tx?.amount === 'number' ? tx.amount / 100 : 0,
        p_referencia: tx?.reference ?? null,
        p_nombre: tx?.optionalParameter4 ?? null,
        p_email: tx?.email ?? null,
        p_telefono: tx?.phoneNumber ?? null
      })
    } catch (err) {
      console.error('[pedidos] No se pudo registrar el pedido', clientTxId, err)
    }
  }

  return {
    approved,
    status: tx?.transactionStatus ?? 'Unknown',
    transactionId: tx?.transactionId ?? id,
    authorizationCode: tx?.authorizationCode ?? null,
    amount: typeof tx?.amount === 'number' ? tx.amount / 100 : null,
    cardBrand: tx?.cardBrand ?? null,
    lastDigits: tx?.lastDigits ?? null,
    message: tx?.message ?? null,
    orderCode: approved ? clientTxId : null
  }
})
