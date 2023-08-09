import Cookies from "js-cookie";
import { useRouter } from "next/router";

export async function postLogin(username: string, password: string) {
  const body = {
    username,
    password,
  };
  return fetch(
    "http://127.0.0.1:8080/next-middleware-cookie/login",
    postJsonOption(body)
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("postLogin:", data);
      if (data.isAuthenticated) {
        Cookies.set("sessionID", data.sessionID);
        return data.isAuthenticated;
      } else {
        Cookies.remove("sessionID");
        return data.isAuthenticated;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function postAuthenticate(sessionID: string) {
  const body = {
    sessionID,
  };
  return fetch(
    "http://127.0.0.1:8080/next-middleware-cookie/authenticate",
    postJsonOption(body)
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("postAuthenticate:", data);
      const { msg, sessionID, isAuthenticated } = data;
      return isAuthenticated;
    })
    .catch((error) => console.log(error));
}

export async function postLogout() {
  const sessionID = Cookies.get("sessionID");
  const body = {
    sessionID,
  };
  return fetch(
    "http://127.0.0.1:8080/next-middleware-cookie/logout",
    postJsonOption(body)
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("postLogout:", data);
      return data;
    });
}

const postJsonOption = (body: Object) => {
  return {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
