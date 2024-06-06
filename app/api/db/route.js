import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const webhook = await fetch("/api/webhooks");
  console.log(webhook);
}
