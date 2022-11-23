import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { simulateRace } from "../util/api";

import ResultModal from "./ResultModal";
import classes from "./NextTrack.module.css";

const NextTrack = (props) => {
  const track = props.track;
  const trackImg = require(`../assets/${track.img_filename}`);
  const navigate = useNavigate();


  // const simulateRaceHandler = () => {
  //   simulateRace(track);
  //   setShowResultModal(true);
  // };

  // const resultHandler = () => {
  //   setShowResultModal(false);
  //   navigate(0);
  // }

  return (
    <>
      {props.showResultModal && <ResultModal onConfirm={props.onConfirmResults} />}
      <div className={classes.nextTrack}>
        <h2>Next track</h2>
        <div className={classes.flex}>
          <img src={trackImg} alt="Track" />
          <div>
            <h3>{track.country}</h3>
            <h3>{track.track_name}</h3>
            <button onClick={props.onSimulate}>Simulate race</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextTrack;
