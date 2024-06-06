"use client";
import React, { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { currentUser } from "@clerk/nextjs";

function createClerkSupabaseClient() {
  // get the supabase token
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_SECRET,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: "supabase",
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}
export const client = createClerkSupabaseClient();
// console.log(client);
// next, create functions for fetching data and sending data to supabase using client
//fetch user data from clerk client and send to supabase client ?

export default function Supabase() {
  // fetch user info using table name
  // create a state for taking the value of
  const [user, setUser] = useState("");

  const getUser = async () => {
    const { data, error } = await client.from("users").select();
    // console.log(data);
    if (!data) {
      setUser(user);
    }
    if (error) {
      console.error(error);
    }
  };

  const inputRef = useRef(null);
  const addUser = async () => {
    // should we fetch webhook here ?
    // when user signups or updates data we will need to fetch new data
    // grab data from input field clerk
    // how to get data when webhook works like user creates or updates
    // can we fetch attributes from  webhooks?
    // webhook has post request, if we fetch it, we should include parameters
    // adding user to the database
    // Building this authentication flow and database with Landing page
    // how to plan the project
    const res = await fetch("api/webhooks");
    const { error } = await client.from("users").insert({
      name: "mike",
      email: "mikescully@gmail.com",
    });
    if (!inputRef.current.value) return;
    await client.from("users").insert({
      email: inputRef.current?.value,
    });
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          onSubmit={addUser}
          style={{ color: "black" }}
          type="text"
          ref={inputRef}
        />
        <button onClick={addUser}>Send Address</button>
        <button onClick={getUser}>Fetch Addresses</button>
      </div>
      <h2>Addresses</h2>
      {!user ? (
        <p>No addresses</p>
      ) : (
        // <ul>
        //   {addresses.map((address) => (
        //     <li key={address.id}>{address.content}</li>
        //   ))}
        // </ul>
        ""
      )}
    </>
  );
}

// now to use these function we need to trigger them at some kind user interaction
// user will be added when user clicks sign up
