import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TrackResultList from "./TrackResultList";
import CommentForm from "../components/CommentForm";
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
      <>
        <div className={classes.trackResult}>
          <div>
            <h1>{result.track_name}</h1>
            {result.result.map((driver, index) => (
              <TrackResultList driver={driver} key={index} place={index + 1} />
            ))}
          </div>
          <CommentForm trackId={id}/>
        </div>
      </>
    )
  );
};

export default TrackResult;

export async function action({ request, params }) {
  const data = await request.formData();

  const commentData = {
    author: data.get('author'),
    content: data.get('content'),
    trackId: data.get('trackId'),
  };

  const response = await fetch("http://localhost:5000/postComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    console.log("Error saving post");
  }
}
