import classes from "./TrackItem.module.css";

const TrackItem = (props) => {
  return (
    <div className={classes.trackCard}>
      <h2>{props.country}</h2>
      <div className={classes.content}>
        <div>
          <h3>Podium:</h3>
          <p>1st: {props.result[0]}</p>
          <p>2nd: {props.result[1]}</p>
          <p>3rd: {props.result[2]}</p>
        </div>
      </div>
    </div>
  );
};
export default TrackItem;
