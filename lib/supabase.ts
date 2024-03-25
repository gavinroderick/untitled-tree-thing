import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xjxsgftzpnstuhiovigy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeHNnZnR6cG5zdHVoaW92aWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwMDk3MDksImV4cCI6MjAwNjU4NTcwOX0.PNtyT8OGiKpHPbYzO9Xdme3MuWb1-82XWw-DXzHGbec";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
