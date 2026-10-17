import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const isSupabaseConfigured = Boolean(url && key && !url.includes('YOUR_PROJECT_REF') && !key.includes('your_public_key'));
export const supabase = isSupabaseConfigured ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }) : null;
