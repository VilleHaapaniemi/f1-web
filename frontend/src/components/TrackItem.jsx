import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./TrackItem.module.css";

const TrackItem = (props) => {
  const [commentsCount, setCommentsCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getCommentsCount/${props.trackId}`
        );
        const result = await response.json();
        setCommentsCount(result.commentsCount);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.trackId]);

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
        <div className={classes.view}>
          <p>{commentsCount} Comments</p>
          <Link to={`/result/${props.trackId}`}>View Result & Comments</Link>
        </div>
      </div>
    </div>
  );
};
export default TrackItem;