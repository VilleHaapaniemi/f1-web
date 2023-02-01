import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import classes from "./App.module.css";
import RootLayout from "./pages/RootLayout";
import HomePage, { loader as tracksLoader } from "./pages/HomePage";
import Standings, { loader as totalPointsLoader } from "./components/Standings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: tracksLoader,
      }
    ],
  },

  {
    path: "/standings",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Standings />,
        loader: totalPointsLoader
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
