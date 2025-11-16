import { createBrowserClient } from "@supabase/ssr";
import { useMemo } from "react";
import { getEnvVar } from "../utils";
import type { Database } from "./database.types";
import type { TypedSupabaseClient } from "./types";

let client: TypedSupabaseClient | undefined;

function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY")
  );

  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
