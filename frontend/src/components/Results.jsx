import ResultList from "./ResultList";

import classes from "./Results.module.css";

const Results = (props) => {
  const finishedTracks = props.finishedTracks;

  let resultContent = <p>Start the season by simulating race!</p>;

  if (finishedTracks.length > 0) {
    console.log(finishedTracks[0].result);
    resultContent = <ResultList result={finishedTracks[0].result} />;
  }

  return <div className={classes.results}>{resultContent}</div>;
};

export default Results;
