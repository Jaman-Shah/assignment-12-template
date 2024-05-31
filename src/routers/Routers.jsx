import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import Dashboard from "../pages/Dashboard";
import ImageUpload from "./../pages/ImageUpload";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "image",
        element: <ImageUpload />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: "this is item 1",
          },
          {
            path: "item2",
            element: "this is item 2",
          },
          {
            path: "item3",
            element: "this is item 3",
          },
        ],
      },
    ],
  },
]);
