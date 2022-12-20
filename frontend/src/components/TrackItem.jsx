import classes from "./TrackItem.module.css";

const TrackItem = (props) => {
  return (
    <div className={classes.trackCard}>
      <h2>{props.country}</h2>
    </div>
  );
};
export default TrackItem;
