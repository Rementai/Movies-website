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
import Signup from "./routes/Signup.js";

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
        path: "signup",
        element: <Signup/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);