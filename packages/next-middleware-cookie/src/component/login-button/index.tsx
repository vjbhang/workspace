import { postLogin } from "@/app/fetch";
export default function LoginButton({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return (
    <button
      onClick={() => {
        console.log("clicked");
        postLogin(username, password);
      }}
    >
      Login
    </button>
  );
}
