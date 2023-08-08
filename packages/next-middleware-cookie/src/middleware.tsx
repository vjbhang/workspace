import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  let cookie = request.cookies.getAll();
  console.log("cookie.getAll:", cookie);
  const response = NextResponse.next();

  if (request.cookies.has("session-id")) {
    console.log("session-id:", request.cookies.get("session-id"));
  } else {
    if (!request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect("/login");
    }
  }
}
