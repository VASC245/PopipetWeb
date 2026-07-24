// Consulta pública de un pedido por su código (sin datos personales)
export default defineEventHandler(async (event) => {
  const codigo = decodeURIComponent(getRouterParam(event, 'codigo') || '')
  if (!codigo || codigo.length > 60) {
    throw createError({ statusCode: 400, statusMessage: 'Código inválido' })
  }
  const rows: any = await rpcPedidos(event, 'obtener_pedido', { p_codigo: codigo })
  const pedido = Array.isArray(rows) ? rows[0] : null
  if (!pedido) {
    throw createError({ statusCode: 404, statusMessage: 'Pedido no encontrado' })
  }
  return pedido
})
