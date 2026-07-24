// Envío de correos transaccionales vía Resend (dominio popipet.com verificado).
// Los fallos de correo nunca deben romper el flujo principal: capturar siempre.
export async function enviarCorreo(event: any, opts: { to: string; subject: string; html: string }) {
  const { resendKey } = useRuntimeConfig(event)
  if (!resendKey) return
  await $fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: {
      from: 'Popipet Ecoarena <pedidos@popipet.com>',
      to: [opts.to],
      subject: opts.subject,
      html: opts.html
    }
  })
}

const ESTILO_BOTON =
  'display:inline-block;background:#14532d;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold'

export function plantillaPedido(opts: {
  titulo: string
  mensaje: string
  codigo: string
  monto?: number | null
  urlRastreo: string
}) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#1f2937">
    <h2 style="color:#14532d;margin-bottom:4px">Popipet Ecoarena 🐾</h2>
    <h3 style="margin-top:0">${opts.titulo}</h3>
    <p>${opts.mensaje}</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px">
      <tr>
        <td style="padding:6px 0;color:#6b7280">Código de pedido</td>
        <td style="padding:6px 0;text-align:right"><b>${opts.codigo}</b></td>
      </tr>
      ${
        opts.monto != null
          ? `<tr><td style="padding:6px 0;color:#6b7280">Total pagado</td><td style="padding:6px 0;text-align:right"><b>$${Number(opts.monto).toFixed(2)}</b></td></tr>`
          : ''
      }
    </table>
    <p style="text-align:center;margin:24px 0">
      <a href="${opts.urlRastreo}" style="${ESTILO_BOTON}">📦 Seguir mi pedido</a>
    </p>
    <p style="font-size:13px;color:#6b7280">
      Los envíos llegan en 24–72 horas según su ciudad. ¿Dudas? Escríbanos por
      WhatsApp al +593 98 306 8976 indicando su código de pedido.
    </p>
  </div>`
}
