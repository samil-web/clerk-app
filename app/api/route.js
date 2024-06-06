// create a Get function to fetch current user
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  const user = await currentUser();
  return NextResponse.json(user);
}
