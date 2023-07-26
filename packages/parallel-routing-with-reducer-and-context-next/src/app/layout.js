"use client";

import "./globals.css";
import { TasksProvider } from "../context/TasksContext";
import { LoginProvider, useLoginDispatch } from "@/context/LoginContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={style.body}>
        <LoginProvider>{children}</LoginProvider>
      </body>
    </html>
  );
}

const style = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
