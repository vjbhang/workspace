"use client";

import { useLogin, useLoginDispatch } from "@/context/LoginContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const loginContext = useLogin();
  const loginDispatch = useLoginDispatch();

  function LoginMessage() {
    if (loginContext.login.authenticated) {
      return (
        <div>
          <p>Login Success</p>
        </div>
      );
    } else
      return (
        <div>
          <p>Login Fail</p>
        </div>
      );
  }

  if (loginContext.login.authenticated) return <LoginMessage />;
  else
    return (
      <div>
        <h1>Login</h1>
        <h2>{JSON.stringify(loginContext)}</h2>
        <LoginMessage />
        <button
          onClick={() => {
            loginDispatch({
              type: "changed",
              login: { login: { id: 0, name: "vincent", authenticated: true } },
            });
          }}
        >
          Login
        </button>
      </div>
    );
}
