import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home.js";
import Watchlist from "./routes/Watchlist.js";
import App from "./App.js"
import Signin from "./routes/Signin.js";
import Signup from "./routes/Signup.js";
import Details from "./routes/Details.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "watchlist",
        element: <Watchlist/>,
      },
      {
        path: "signin",
        element: <Signin/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "/details/:title/:id",
        element: <Details/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);