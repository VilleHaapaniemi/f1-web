import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TrackResultList from "./TrackResultList";
import classes from "./TrackResult.module.css";

const TrackResult = () => {
  const { id } = useParams();
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/tracks/result/${id}`
        );
        const result = await response.json();
        setResult(result[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  console.log(result);

  return (
    result && (
      <div className={classes.trackResult}>
        <h1>{result.track_name}</h1>
        {result.result.map((driver, index) => (
          <TrackResultList driver={driver} key={index} place={index + 1} />
        ))}
      </div>
    )
  );
};

export default TrackResult;
