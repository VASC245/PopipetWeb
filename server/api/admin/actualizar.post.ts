import { ESTADOS_PEDIDO } from '../../utils/pedidos'

// Cambia el estado de un pedido desde el panel admin.
export default defineEventHandler(async (event) => {
  const body = await readBody<{ clave?: string; codigo?: string; estado?: string; ciudad?: string }>(event)
  const clave = String(body?.clave || '')
  if (!clave || clave !== useRuntimeConfig(event).pedidosAdminKey) {
    throw createError({ statusCode: 401, statusMessage: 'Clave incorrecta' })
  }
  const codigo = String(body?.codigo || '')
  const estado = String(body?.estado || '')
  if (!codigo || !(ESTADOS_PEDIDO as readonly string[]).includes(estado)) {
    throw createError({ statusCode: 400, statusMessage: 'Datos inválidos' })
  }
  await rpcPedidos(event, 'actualizar_pedido', {
    p_clave: clave,
    p_codigo: codigo,
    p_estado: estado,
    p_ciudad: body?.ciudad || null
  })
  return { ok: true }
})
