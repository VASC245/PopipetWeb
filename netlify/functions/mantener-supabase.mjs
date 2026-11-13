// Función programada de Netlify: hace una consulta real a Supabase una vez al día
// para que el proyecto (plan gratis) no se pause por inactividad (~7 días).
// Usa la RPC pública obtener_pedido con un código inexistente: no lee ni escribe datos.
export default async () => {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    console.error('[mantener-supabase] Faltan SUPABASE_URL / SUPABASE_ANON_KEY')
    return new Response('sin configurar', { status: 500 })
  }

  const res = await fetch(`${url}/rest/v1/rpc/obtener_pedido`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ p_codigo: 'PING-KEEPALIVE' })
  })

  console.log(`[mantener-supabase] Supabase respondió ${res.status}`)
  return new Response(`ok ${res.status}`, { status: res.ok ? 200 : 502 })
}

export const config = {
  schedule: '@daily'
}
