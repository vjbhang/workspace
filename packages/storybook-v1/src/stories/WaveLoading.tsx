import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Loading from "../../public/loading.json";

export default function WaveLoading() {
  return (
    <Player autoplay loop src={Loading}>
      <Controls visible={false} />
    </Player>
  );
}
