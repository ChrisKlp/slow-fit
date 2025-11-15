import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/db";
import { getEnvVar } from "../utils";

export function createClient() {
  return createBrowserClient<Database>(
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY")
  );
}
