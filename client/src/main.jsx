import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AddAnnounce from "./pages/AddAnnounce";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/AddAnnounce",
        element: <AddAnnounce />,
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
