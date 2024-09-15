import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnnounceLoader from "./services/AnnounceLoader";
import Announce from "./pages/Announce";
import App from "./App";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceAction from "./services/AnnounceAction";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "announce",
        element: <Announce />,
        loader: AnnounceLoader,
      },
      {
        path: "/AddAnnounce",
        element: <AddAnnounce />,
        action: AnnounceAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
