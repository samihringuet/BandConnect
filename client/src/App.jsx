import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/AddAnnounce.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
