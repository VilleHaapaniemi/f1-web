import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TrackResultList from "./TrackResultList";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";
import classes from "./TrackResult.module.css";

const TrackResult = () => {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultResponse = await fetch(
          `http://localhost:5000/tracks/result/${id}`
        );
        const result = await resultResponse.json();
        setResult(result[0]);
      } catch (err) {
        console.log(err);
      }
      try {
        const commentsResponse = await fetch(
          `http://localhost:5000/getComments/${id}`
        );
        const comments = await commentsResponse.json();
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    result && (
      <>
        <div className={classes.trackResult}>
          <div>
            <h1>{result.track_name}</h1>
            {result.result.map((driver, index) => (
              <TrackResultList driver={driver} key={index} place={index + 1} />
            ))}
          </div>
          <Comments comments={comments} />
          <CommentForm trackId={id} />
        </div>
      </>
    )
  );
};

export default TrackResult;