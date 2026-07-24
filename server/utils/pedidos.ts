// Acceso a la base de pedidos (Supabase) vía funciones RPC security-definer.
// La tabla tiene RLS sin políticas: solo estas funciones pueden tocarla.
export async function rpcPedidos(event: any, fn: string, args: Record<string, any>) {
  const { supabase } = useRuntimeConfig(event)
  if (!supabase.url || !supabase.key) {
    throw createError({ statusCode: 503, statusMessage: 'Base de pedidos no configurada' })
  }
  return await $fetch(`${supabase.url}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      apikey: supabase.key,
      Authorization: `Bearer ${supabase.key}`,
      'Content-Type': 'application/json'
    },
    body: args
  })
}

export const ESTADOS_PEDIDO = ['pagado', 'empacando', 'enviado', 'entregado'] as const
