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
  return {
    approved: tx?.transactionStatus === 'Approved' || tx?.statusCode === 3,
    status: tx?.transactionStatus ?? 'Unknown',
    transactionId: tx?.transactionId ?? id,
    authorizationCode: tx?.authorizationCode ?? null,
    amount: typeof tx?.amount === 'number' ? tx.amount / 100 : null,
    cardBrand: tx?.cardBrand ?? null,
    lastDigits: tx?.lastDigits ?? null,
    message: tx?.message ?? null
  }
})
