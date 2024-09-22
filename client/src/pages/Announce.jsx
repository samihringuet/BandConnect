import { useLoaderData } from "react-router-dom";
import AnnounceCard from "../components/AnnounceCard";

export default function Announce() {
  const announceData = useLoaderData();

  return (
    <div className="fullannounce">
      <h1 className="thetitle">
        <span>Band</span>⚡Connect
      </h1>
      <h2 className="findajob">Débusque la pépite</h2>
      <h3 className="pepetes">Fais rentrer les pépètes</h3>
      <div className="lottie-animation">
        <dotlottie-player
          src="https://lottie.host/157c4987-4472-4bad-a00f-a92fc1d4bb2b/m63OIFkIoE.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>

      <div className="cardannounce-container">
        {announceData.map((announce) => (
          <div className="cardannounce-column" key={announce.id}>
            <AnnounceCard announce={announce} />
          </div>
        ))}
      </div>
    </div>
  );
}
