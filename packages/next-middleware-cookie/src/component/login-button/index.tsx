import { postLogin } from "@/app/fetch";

export default function LoginButton({
  username,
  password,
  router,
}: {
  username: string;
  password: string;
  router: any;
}) {
  function handleLogin() {
    let isAuthenticated = postLogin(username, password);
    isAuthenticated
      .then((isAuthenticated) => {
        console.log("handleLogin:", isAuthenticated);
        if (isAuthenticated) router.replace("/loggedin");
      })
      .catch((error) => console.log(error));
  }

  return (
    <button
      onClick={() => {
        console.log("clicked");
        handleLogin();
      }}
    >
      Login
    </button>
  );
}
