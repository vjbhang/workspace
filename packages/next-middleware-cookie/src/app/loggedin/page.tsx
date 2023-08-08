import { cookies } from "next/headers";

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
    <div>
      <p>You are logged in.</p>
      <CookieMap />
    </div>
  );
}
