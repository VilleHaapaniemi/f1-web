import ResultList from "./ResultList";

import classes from "./Results.module.css";

const Results = (props) => {
  const finishedTracks = props.finishedTracks;

  let resultContent = <p>Start the season by simulating race!</p>;

  // If there's finished tracks, map latest result to listing component.
  if (finishedTracks.length > 0) {
    resultContent = finishedTracks[0].result.map((driver, index) => 
      <ResultList driver={driver} index={index} key={index} />
    );
  }

  return <div className={classes.results}>{resultContent}</div>;
};

export default Results;
