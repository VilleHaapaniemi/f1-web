import { simulateRace } from "../util/api";

import classes from "./NextTrack.module.css";

const NextTrack = (props) => {
  const track = props.track;
  const trackImg = require(`../assets/${track.img_filename}`);

  const simulateRaceHandler = () => {
    simulateRace(track);
  };

  return (
    <div className={classes.nextTrack}>
      <h2>Next track</h2>
      <div className={classes.flex}>
        <img src={trackImg} alt="Track" />
        <div>
          <h3>{track.country}</h3>
          <h3>{track.track_name}</h3>
          <button onClick={simulateRaceHandler}>Simulate race</button>
        </div>
      </div>
    </div>
  );
};

export default NextTrack;
