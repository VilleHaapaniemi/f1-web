import TrackItem from "./TrackItem";
import classes from "./PreviousRaces.module.css";

const PreviousRaces = (props) => {
  const finishedTracks = props.finishedTracks;
  
  return (
    <div className={classes.container}>
      {finishedTracks.map((track) => (
        <TrackItem key={track.id} country={track.country} result={track.result} />
      ))}
    </div>
  );
};
export default PreviousRaces;
