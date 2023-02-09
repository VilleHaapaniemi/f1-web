import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TrackResult = () => {
  const { id } = useParams();
  console.log(id);

  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tracks/result/${id}`);
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
    result && <h1>{result.track_name}</h1>
  );
};

export default TrackResult;
