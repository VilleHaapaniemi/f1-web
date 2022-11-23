import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getTracks, simulateRace } from "../util/api";
import NextTrack from "../components/NextTrack";

const HomePage = () => {
  const loaderData = useLoaderData();
  const [nextTrack, setNextTrack] = useState(() =>
    loaderData.find((track) => track.result === null)
  );
  const [showResultModal, setShowResultModal] = useState(false);

  const simulateRaceHandler = () => {
    simulateRace(nextTrack);
    setShowResultModal(true);
    console.log(nextTrack);
    setNextTrack(loaderData[nextTrack.id]); // Track id index starts from 1. Thats why there's no incrementing on loaderData index.
  };

  const confirmResultsHandler = () => {
    setShowResultModal(false);
  };

  return (
    <NextTrack
      track={nextTrack}
      showResultModal={showResultModal}
      onSimulate={simulateRaceHandler}
      onConfirmResults={confirmResultsHandler}
    />
  );
};

export default HomePage;

export async function loader() {
  return getTracks();
}
