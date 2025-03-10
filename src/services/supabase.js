import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://carqetdrrxsmdvvhzsbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcnFldGRycnhzbWR2dmh6c2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MDk3NjMsImV4cCI6MjA1NzE4NTc2M30.P_8pVR-Xj5vpTKhXZ7dcsJkXqD2cUED6kiqQNlvXHKc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
