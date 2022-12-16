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
  const [simulatingRace, setSimulatingRace] = useState(false);

  async function simulateRace(track) {
    setSimulatingRace(true);
    const response = await fetch(
      `http://localhost:5000/simulateRace/${track.id}`
    );
    const raceResult = await response.json();
    console.log(raceResult);
    track.result = raceResult;
    setSimulatingRace(false);
    setNextTrack(loaderData[track.id]); // Track id index starts from 1. Thats why there's no incrementing on loaderData index.
    setFinishedTracks([track, ...finishedTracks]);

    // await fetch("http://localhost:5000/simulateRace", {
    //   method: "POST",
    //   body: JSON.stringify(track),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
  }

  const simulateRaceHandler = () => {
    simulateRace(nextTrack);
    console.log(nextTrack);
    // setNextTrack(loaderData[nextTrack.id]); // Track id index starts from 1. Thats why there's no incrementing on loaderData index.
    // setFinishedTracks([nextTrack, ...finishedTracks]);
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
