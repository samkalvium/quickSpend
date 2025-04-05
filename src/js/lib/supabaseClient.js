import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "postgresql://postgres:samalva1926@db.ivaacohlfvxrmddqvfnr.supabase.co:5432/postgres";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2YWFjb2hsZnZ4cm1kZHF2Zm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MjM2ODEsImV4cCI6MjA1OTM5OTY4MX0.W1Hao8IeitF0xsuS-OHMleizj8ZUoFQcsxKhVOecCh4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
