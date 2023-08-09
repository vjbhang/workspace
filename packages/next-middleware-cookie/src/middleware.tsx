import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { postAuthenticate } from "./app/fetch";
import Cookies from "js-cookie";

export async function middleware(request: NextRequest) {
  let cookie = request.cookies.getAll();
  let sessionIDCookie = request.cookies.get("sessionID");
  console.log("cookie.getAll:", cookie);
  console.log("sessionIDCookie:", sessionIDCookie);
  const response = NextResponse.next();
  let isAuthenticated;

  if (sessionIDCookie) {
    isAuthenticated = await postAuthenticate(sessionIDCookie!.value).then(
      (data) => {
        console.log("in middleware:", data);

        return data;
      }
    );
  } else {
    isAuthenticated = false;
  }

  console.log("isAuthenticated:", isAuthenticated);

  if (isAuthenticated) {
    console.log("sessionID:", request.cookies.get("sessionID"));

    if (!request.nextUrl.pathname.startsWith("/loggedin")) {
      return NextResponse.redirect(new URL("/loggedin", request.url));
    }
  } else {
    if (!request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = { matcher: "/((?!.*\\.).*)" };
