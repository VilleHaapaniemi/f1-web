import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import classes from "./App.module.css";
import RootLayout from "./pages/RootLayout";
import HomePage, { loader as tracksLoader } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: tracksLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
