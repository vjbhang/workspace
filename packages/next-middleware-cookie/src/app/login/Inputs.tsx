"use client";

import LoginButton from "@/component/login-button";
import { useState, useEffect } from "react";
import { StylesInterface } from "../typescript";

export default function Inputs() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);
  return (
    <div style={styles.input}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <LoginButton username={username} password={password} />
    </div>
  );
}

const styles: StylesInterface = {
  input: {
    width: "100vw",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
