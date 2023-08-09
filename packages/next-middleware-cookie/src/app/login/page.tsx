import Inputs from "./client/Inputs";
import { StylesInterface } from "../typescript";

export default function Login() {
  return (
    <div>
      <p style={styles.text}>Please login.</p>
      <Inputs />
    </div>
  );
}

const styles: StylesInterface = {
  text: {
    textAlign: "center",
  },
};
