import React, { Fragment } from "react";

import classes from "./App.module.css";
import MainHeader from "./components/MainHeader";

// async function fetchTracks() {
//   const response = await fetch('http://localhost:5000/');
//   const data = await response.json();
//   console.log(data);
// }

// fetchTracks();

function App() {
  return (
    <Fragment>
      <MainHeader />
      <p>ergerger</p>
    </Fragment>
  );
}

export default App;
