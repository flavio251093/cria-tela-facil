import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Create a client that won't fail if env vars are not set
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // Disable for demo purposes
  }
})