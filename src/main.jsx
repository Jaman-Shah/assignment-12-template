import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers}>
    <React.StrictMode></React.StrictMode>
  </RouterProvider>
);
