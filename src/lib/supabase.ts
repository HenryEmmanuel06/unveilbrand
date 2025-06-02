import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

// Function to set admin auth
export const setAdminAuth = () => {
  supabase.auth.setSession({
    access_token: 'admin-token',
    refresh_token: 'admin-refresh-token'
  })
} 