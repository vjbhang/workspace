import { NextResponse } from "next/server";

export async function postLogin(username: string, password: string) {
  const body = {
    username,
    password,
  };
  fetch("http://127.0.0.1:8080/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      let response = NextResponse.next();
      console.log(data);
      // response.cookies.set("auth-session-id", )
    })
    .catch((error) => {
      console.error(error);
    });
}
