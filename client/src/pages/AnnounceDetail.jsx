import { useLoaderData } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function AnnounceDetail() {
  const announce = useLoaderData();

  return (
    <div className="fullannounce2">
      <h1 className="thetitle">
        <span>Band</span>⚡Connect
      </h1>
      <div className="blocos">
        <div className="lottie-animation2">
          <dotlottie-player
            src="https://lottie.host/157c4987-4472-4bad-a00f-a92fc1d4bb2b/m63OIFkIoE.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>

        <AnnounceCard announce={announce} />
      </div>
    </div>
  );
}
