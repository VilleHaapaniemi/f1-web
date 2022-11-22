import classes from "./NextTrack.module.css";
import image from "../assets/Bahrain.png";

const NextTrack = (props) => {
  const track = props.track;

  return (
    <div className={classes.nextTrack}>
      <h2>Next track</h2>
      <div className={classes.flex}>
        <img src={image} alt="Track"></img>
        <div>
          <h3>{track.country}</h3>
          <h3>{track.track_name}</h3>
        </div>
      </div>
    </div>
  );
};

export default NextTrack;
