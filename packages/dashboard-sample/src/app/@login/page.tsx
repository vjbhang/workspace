"use client";
import useTextInput from "@/components/useTextInput";
import { getAuthentication } from "@/axios";
import { useRouter } from "next/navigation";
import { useAuthDispatch } from "@/context/AuthContext";

export default function Login() {
  const [id, IdInput] = useTextInput({ type: "string", containerStyle: {} });
  const [pw, PwInput] = useTextInput({ type: "string", containerStyle: {} });

  const router = useRouter();
  const authDispatch = useAuthDispatch();

  function handleLogin() {
    authDispatch({
      type: "login",
      id: 0,
      name: "abc",
      authenticated: true,
    });
  }

  return (
    // <!-- Main modal -->
    <div className="flex flex-col items-center justify-center gap-3">
      <p>Login</p>
      <div className="flex flex-col justify-evenly items-center gap-1">
        <div className="flex flex-row gap-2 p-2 self-end">
          <p>ID:</p>
          {IdInput}
        </div>
        <div className="flex flex-row gap-2 p-2 self-end">
          <p>Password:</p>
          {PwInput}
        </div>
      </div>
      <div>
        <button
          className="bg-gray-100 px-3 py-1 rounded-xl"
          onClick={() => {
            console.log("click");
            authDispatch({
              type: "login",
              auth: {
                id: 0,
                name: "abc",
              },
              authenticated: true,
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
