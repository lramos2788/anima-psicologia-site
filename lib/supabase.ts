import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

function createSupabaseClient(): SupabaseClient | null {
  try {
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
      return null
    }
    return createClient(supabaseUrl, supabaseAnonKey)
  } catch (err: any) {
    console.error('Supabase init error:', err)
    return null
  }
}

const client = createSupabaseClient()

// Export a safe proxy that won't crash if Supabase is not configured
export const supabase = {
  from: (table: string) => {
    if (!client) {
      const noop = {
        insert: async (_data: any) => ({ data: null, error: { message: 'Supabase not configured' } }),
        select: (..._args: any[]) => ({
          gte: (..._a: any[]) => ({
            order: async (..._b: any[]) => ({ data: [], error: null }),
          }),
          order: async (..._b: any[]) => ({ data: [], error: null }),
          then: (resolve: any) => resolve({ data: [], error: null }),
        }),
        upsert: async (_data: any) => ({ data: null, error: { message: 'Supabase not configured' } }),
      }
      return noop
    }
    return client.from(table)
  },
}
