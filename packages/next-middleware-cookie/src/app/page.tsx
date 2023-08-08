import Image from "next/image";
import styles from "./page.module.css";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  console.log("cookiestore:", cookieStore);

  function CookieMap() {
    return cookieStore.getAll().map((cookie) => (
      <div key={cookie.name}>
        <p>Name: {cookie.name}</p>
        <p>Value: {cookie.value}</p>
      </div>
    ));
  }
  return (
    <main className={styles.main}>
      <h1>404: You are not supposed to be here.</h1>
      <CookieMap />
    </main>
  );
}
