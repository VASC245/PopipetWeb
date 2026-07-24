// El cliente registra sus datos de entrega conociendo el código de su pedido.
// Solo se permite antes de que el pedido salga (estados pagado/empacando).
export default defineEventHandler(async (event) => {
  const body = await readBody<{
    codigo?: string
    ciudad?: string
    direccion?: string
    referencia?: string
    tipo?: string
  }>(event)

  const codigo = String(body?.codigo || '').trim()
  const ciudad = String(body?.ciudad || '').trim()
  const direccion = String(body?.direccion || '').trim()
  const referencia = String(body?.referencia || '').trim()
  const tipo = String(body?.tipo || '').trim()

  if (!codigo || codigo.length > 60) {
    throw createError({ statusCode: 400, statusMessage: 'Código inválido' })
  }
  if (!ciudad || ciudad.length > 80 || !direccion || direccion.length > 300 || referencia.length > 300) {
    throw createError({ statusCode: 400, statusMessage: 'Complete la ciudad y la dirección' })
  }
  if (!['domicilio', 'oficina'].includes(tipo)) {
    throw createError({ statusCode: 400, statusMessage: 'Indique si es domicilio u oficina' })
  }

  try {
    await rpcPedidos(event, 'guardar_direccion', {
      p_codigo: codigo,
      p_ciudad: ciudad,
      p_direccion: direccion,
      p_referencia: referencia,
      p_tipo: tipo
    })
  } catch {
    throw createError({
      statusCode: 409,
      statusMessage: 'El pedido ya salió a entrega; para cambios contáctenos por WhatsApp'
    })
  }
  return { ok: true }
})
