// Lista de pedidos para el panel admin. Requiere la clave de administración.
export default defineEventHandler(async (event) => {
  const body = await readBody<{ clave?: string }>(event)
  const clave = String(body?.clave || '')
  if (!clave || clave !== useRuntimeConfig(event).pedidosAdminKey) {
    throw createError({ statusCode: 401, statusMessage: 'Clave incorrecta' })
  }
  return await rpcPedidos(event, 'listar_pedidos', { p_clave: clave })
})
