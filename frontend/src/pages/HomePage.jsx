import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getTracks, simulateRace } from "../util/api";
import NextTrack from "../components/NextTrack";
import PreviousRaces from "../components/PreviousRaces";

const HomePage = () => {
  const loaderData = useLoaderData();
  const [nextTrack, setNextTrack] = useState(() =>
    loaderData.find((track) => track.result === null)
  );
  const [finishedTracks, setFinishedTracks] = useState(() =>
    loaderData.filter((track) => track.result !== null).reverse()
  );

  const simulateRaceHandler = () => {
    simulateRace(nextTrack);
    console.log(nextTrack);
    setNextTrack(loaderData[nextTrack.id]); // Track id index starts from 1. Thats why there's no incrementing on loaderData index.
    setFinishedTracks([nextTrack, ...finishedTracks]);
  };

  return (
    <>
      <NextTrack track={nextTrack} onSimulate={simulateRaceHandler} />
      <PreviousRaces finishedTracks={finishedTracks} />
    </>
  );
};

export default HomePage;

export async function loader() {
  return getTracks();
}
