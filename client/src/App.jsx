import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/AddAnnounce.css";
import "./assets/styles/Announce.css";
import "./assets/styles/HomePage.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
