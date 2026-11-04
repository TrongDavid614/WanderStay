import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// THAY ĐỔI 2 THÔNG TIN DƯỚI ĐÂY TỪ SUPABASE DASHBOARD CỦA BẠN (Project Settings -> API):
export const SUPABASE_URL = 'https://YOUR_SUPABASE_PROJECT_ID.supabase.co'
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
