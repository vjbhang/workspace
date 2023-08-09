"use client";

import { postLogout } from "@/app/fetch";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LogoutButton() {
  const router = useRouter();
  function handleLogout() {
    console.log("logging out. removing sessionID");
    postLogout();
    Cookies.remove("sessionID");
    router.replace("/login");
  }
  return <button onClick={handleLogout}>Logout</button>;
}
