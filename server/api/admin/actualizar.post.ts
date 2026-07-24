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

  // Avisar al cliente por correo cuando su pedido sale en camino o se entrega
  if (estado === 'enviado' || estado === 'entregado') {
    try {
      const rows: any = await rpcPedidos(event, 'obtener_pedido_admin', { p_clave: clave, p_codigo: codigo })
      const pedido = Array.isArray(rows) ? rows[0] : null
      if (pedido?.cliente_email) {
        const siteUrl = useRuntimeConfig(event).public.siteUrl
        const textos = estado === 'enviado'
          ? { subject: `🚚 ¡Su pedido va en camino! (${codigo})`, titulo: 'Su pedido salió a entrega', mensaje: 'Su Popipet Ecoarena ya está en camino. Puede seguir el estado con el botón de abajo.' }
          : { subject: `🏠 Pedido entregado (${codigo})`, titulo: '¡Su pedido fue entregado!', mensaje: 'Gracias por su compra. Esperamos que a su gato le encante su nueva arena. 🐾' }
        await enviarCorreo(event, {
          to: pedido.cliente_email,
          subject: textos.subject,
          html: plantillaPedido({
            titulo: textos.titulo,
            mensaje: textos.mensaje,
            codigo,
            urlRastreo: `${siteUrl}/pedido/${encodeURIComponent(codigo)}`
          })
        })
      }
    } catch (err) {
      console.error('[email] No se pudo notificar el cambio de estado', codigo, err)
    }
  }

  return { ok: true }
})
