import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getTracks, simulateRace } from "../util/api";
import NextTrack from "../components/NextTrack";

const HomePage = () => {
  const loaderData = useLoaderData();
  const [nextTrack, setNextTrack] = useState(loaderData.find((track) => track.result === null))
  //const nextTrack = loaderData.find((track) => track.result === null);

  const simulateRaceHandler = () => {
    simulateRace(nextTrack);
    //setShowResultModal(true);
    setNextTrack(loaderData[nextTrack.id + 1])
    console.log('ddd')
  };

  return <NextTrack track={nextTrack} onSimulate={simulateRaceHandler} />;
};

export default HomePage;

export async function loader() {
  return getTracks();
}