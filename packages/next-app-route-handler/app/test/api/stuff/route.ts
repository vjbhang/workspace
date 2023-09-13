import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = { name: "hello world" };
  return NextResponse.json({ data });
}
