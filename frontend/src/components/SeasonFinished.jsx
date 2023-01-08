import React, { useState, useEffect } from "react";
import classes from "./SeasonFinished.module.css";

const SeasonFinished = () => {
  const [totalPoints, setTotalPoints] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/totalPoints");
        const result = await response.json();
        setTotalPoints(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <h2>Season finished</h2>
      <h3>Top 3</h3>
      {totalPoints && (
        <p>
          {" "}
          1st: {totalPoints[0].fname} {totalPoints[0].lname},{" "}
          {totalPoints[0].team_name}, {totalPoints[0].points} Points{" "} 
        </p>
      )}
      {totalPoints && (
        <p>
          {" "}
          2nd: {totalPoints[1].fname} {totalPoints[1].lname},{" "}
          {totalPoints[1].team_name}, {totalPoints[1].points} Points{" "} 
        </p>
      )}
      {totalPoints && (
        <p>
          {" "}
          3rd: {totalPoints[2].fname} {totalPoints[2].lname},{" "}
          {totalPoints[2].team_name}, {totalPoints[2].points} Points{" "} 
        </p>
      )}
    </div>
  );
};

export default SeasonFinished;
