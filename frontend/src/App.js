import React from "react";

async function fetchTracks() {
  const response = await fetch('http://localhost:5000/');
  const data = await response.json();
  console.log(data);
}

fetchTracks();

function App() {
  return <h1>Hello World!</h1>;
}

export default App;
