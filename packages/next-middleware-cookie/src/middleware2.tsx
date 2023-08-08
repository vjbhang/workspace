import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // assume there to be a cookie auth session header called auth-session-id
  let authSessionCookie = request.cookies.get("auth-session-id");
  const allCookies = request.cookies.getAll();

  if (request.nextUrl.pathname.startsWith("/loggedin")) {
    console.log("current path: /loggedin");

    fetch("http://127.0.0.1:8080/authenticate", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authSessionCookie),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("session:", data);
        console.log("authSessionCookie:", authSessionCookie);
        const { msg, sessionID } = data;
        if (!authSessionCookie) {
          let response = NextResponse.next();
          response.cookies.set("auth-session-id", sessionID);
        } else {
          console.log("allCookies:", allCookies);
        }
        return NextResponse.redirect(new URL("/login", request.url));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    console.log("current path: /login");

    fetch("http://127.0.0.1:8080/authenticate", {
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("session:", data);
        const { msg, sessionID } = data;
        if (!authSessionCookie)
          request.cookies.set("auth-session-id", sessionID);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// export const config = {
//     matcher: "/:path*"
// }
