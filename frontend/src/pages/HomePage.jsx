import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getTracks } from "../util/api";

import NextTrack from "../components/NextTrack";
import PreviousRaces from "../components/PreviousRaces";
import Results from "../components/Results";

import classes from "./HomePage.module.css";
import SeasonFinished from "../components/SeasonFinished";

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
    track.result = raceResult;
    setNextTrack(loaderData[track.id]); // Track id index starts from 1. Thats why there's no incrementing on loaderData index.
    setFinishedTracks([track, ...finishedTracks]);
    setSimulatingRace(false);
  }

  const simulateRaceHandler = () => {
    simulateRace(nextTrack);
  };

  let nextTrackContent;
  if (!nextTrack) { 
    nextTrackContent = <SeasonFinished />
  } else {
    nextTrackContent = (
      <NextTrack track={nextTrack} onSimulate={simulateRaceHandler} />
    );
  }

  return (
    <>
      <div className={classes.flexContainer}>
        {nextTrackContent}
        <Results finishedTracks={finishedTracks} simulating={simulatingRace} />
      </div>
      <PreviousRaces finishedTracks={finishedTracks} />
    </>
  );
};

export default HomePage;

export async function loader() {
  return getTracks();
}
