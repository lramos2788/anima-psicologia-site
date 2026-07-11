import { createClient, SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null | undefined

function getSupabaseClient(): SupabaseClient | null {
  if (client !== undefined) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

  try {
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
      client = null
      return client
    }

    client = createClient(supabaseUrl, supabaseAnonKey)
    return client
  } catch (err) {
    console.error('Supabase init error:', err)
    client = null
    return client
  }
}

// Safe proxy — Supabase client is created on first use, not at module load.
export const supabase = {
  from: (table: string) => {
    const activeClient = getSupabaseClient()

    if (!activeClient) {
      const noop = {
        insert: async (_data: unknown) => ({ data: null, error: { message: 'Supabase not configured' } }),
        select: (..._args: unknown[]) => ({
          gte: (..._a: unknown[]) => ({
            order: async (..._b: unknown[]) => ({ data: [], error: null }),
          }),
          order: async (..._b: unknown[]) => ({ data: [], error: null }),
          then: (resolve: (value: { data: unknown[]; error: null }) => void) =>
            resolve({ data: [], error: null }),
        }),
        upsert: async (_data: unknown) => ({ data: null, error: { message: 'Supabase not configured' } }),
      }
      return noop
    }

    return activeClient.from(table)
  },
}
