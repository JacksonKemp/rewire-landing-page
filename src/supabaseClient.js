import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Debug logs
console.log('Environment Check:')
console.log('URL format check:', supabaseUrl?.startsWith('https://') ? '✓ Valid' : '✗ Invalid (must start with https://)')
console.log('URL length check:', supabaseUrl?.length > 20 ? '✓ Valid' : '✗ Invalid (seems too short)')
console.log('Key format check:', supabaseAnonKey?.startsWith('eyJ') ? '✓ Valid' : '✗ Invalid (should start with eyJ)')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials. Check your .env file.')
}

if (!supabaseUrl.startsWith('https://')) {
  throw new Error('Invalid Supabase URL format. Must start with https://')
}

if (!supabaseAnonKey.startsWith('eyJ')) {
  throw new Error('Invalid Supabase anon key format. Should start with eyJ')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 