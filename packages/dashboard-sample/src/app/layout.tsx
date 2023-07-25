"use client";
import "./globals.css";
import { useState, useEffect, useContext, Suspense } from "react";
import { Inter } from "next/font/google";
import { getUserTelemetry } from "@/axios";
import { NavigationEvents } from "@/components/navigation-events";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuthContext } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  login,
  dashboard,
  loading,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  dashboard: React.ReactNode;
  loading: React.ReactNode;
}) {
  // "Hello" = false, "World" = true
  const [isAuthenticated, setAuthenticated] = useState("Hello");
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const auth = useAuthContext();

  useEffect(() => {
    getUserTelemetry()
      .then(function (response) {
        console.log("layout > response:", response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("auth:", auth);
  }, [auth]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {isAuthenticated === "World" ? dashboard : login}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}