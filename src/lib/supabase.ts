import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
})

// Function to set admin auth
export const setAdminAuth = () => {
  supabase.auth.setSession({
    access_token: 'admin-token',
    refresh_token: 'admin-refresh-token'
  })
} 