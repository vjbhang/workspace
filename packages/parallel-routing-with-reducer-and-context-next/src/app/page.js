"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/LoginContext";
import Login from "./@login/page";

export default function Home() {
  const router = useRouter();
  const loginContext = useLogin();

  useEffect(() => {
    if (loginContext.login.authenticated) {
      console.log("loginContext:", loginContext);
      setTimeout(() => router.replace("/todo"), 2000);
    }
  }, [loginContext]);

  return (
    <div>
      <p>Parallel Routing with Reducer and Context with Next JS</p>
      <Login />
    </div>
  );
}
