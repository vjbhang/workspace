import { cookies } from "next/headers";
import { StylesInterface } from "../typescript";
import LogoutButton from "@/component/molecule/logout-button";

export default function LoggedIn() {
  const cookieStore = cookies();

  function CookieMap() {
    return cookieStore.getAll().map((cookie) => (
      <div key={cookie.name}>
        <p>Name: {cookie.name}</p>
        <p>Value: {cookie.value}</p>
      </div>
    ));
  }
  return (
    <div style={styles.container}>
      <p>You are logged in.</p>
      <LogoutButton />
      <CookieMap />
    </div>
  );
}

const styles: StylesInterface = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
