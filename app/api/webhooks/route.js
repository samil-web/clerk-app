import { Webhook } from "svix";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_SECRET
);

export async function POST(req) {
  const Webhook_secret = process.env.WEBHOOK_SECRET;
  if (!Webhook_secret) {
    console.error("WEBHOOK_SECRET is not set in environment variables");
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  try {
    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // Check for missing headers
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error("Missing Svix headers", {
        svix_id,
        svix_timestamp,
        svix_signature,
      });
      return new Response("Error occurred -- no svix headers", {
        status: 400,
      });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret
    const wh = new Webhook(Webhook_secret);
    let evt;

    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error occurred", {
        status: 400,
      });
    }

    const eventType = evt.type;
    if (eventType === "user.created") {
      // Handle user.created event
      console.log("User created event received");
      const userData = evt.data;

      // Extract required data
      const user_id = userData.id;
      const given_name = userData.first_name;
      const email_address = userData.email_addresses?.[0]?.email_address;

      // Ensure all necessary data fields are present
      if (!user_id || !given_name || !email_address) {
        console.error("Missing user data fields", {
          user_id,
          given_name,
          email_address,
        });
        return new Response("Error occurred -- missing user data fields", {
          status: 400,
        });
      }

      // Insert user data into Supabase
      try {
        const { error } = await supabase.from("users").insert({
          user_id: `${user_id}`,
          name: `${given_name}`,
          email: `${email_address}`,
        });
        if (error) {
          console.error("Error inserting user into Supabase:", error);
          return new Response(
            JSON.stringify({ error: "Error inserting user" }),
            {
              status: 500,
            }
          );
        }
        console.log("User successfully inserted into Supabase");
      } catch (dbError) {
        console.error("Database error:", dbError);
        return new Response("Error occurred -- database error", {
          status: 500,
        });
      }
    } else {
      console.warn(`Unhandled event type: ${eventType}`);
      return new Response("Unhandled event type", {
        status: 400,
      });
    }

    return new Response("", { status: 200 });
  } catch (error) {
    console.error("Unhandled error occurred:", error);
    return new Response(error, { status: 500 });
  }
}
