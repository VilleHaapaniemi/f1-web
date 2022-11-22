import classes from "./NextTrack.module.css";

const NextTrack = (props) => {
  const track = props.track;
  const string = "Bahrain.png";
  const trackImg = require(`../assets/${string}`);

  return (
    <div className={classes.nextTrack}>
      <h2>Next track</h2>
      <div className={classes.flex}>
        <img src={trackImg} />
        <div>
          <h3>{track.country}</h3>
          <h3>{track.track_name}</h3>
        </div>
      </div>
    </div>
  );
};

export default NextTrack;
