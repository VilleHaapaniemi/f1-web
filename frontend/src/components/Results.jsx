import ResultList from "./ResultList";

import classes from "./Results.module.css";

const Results = (props) => {
  const finishedTracks = props.finishedTracks;
  //console.log(finishedTracks[0]);

  let resultContent = <p>Start the season by simulating race!</p>;

  if (props.simulating) {
    resultContent = <p>Simulating race!</p>;

    // If there's finished tracks, map latest result to listing component.
  } else if (finishedTracks.length > 0) {
    resultContent = (
      <>
        <h3>{finishedTracks[0].country}</h3>
        <h3>{finishedTracks[0].track_name}</h3>
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Driver</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {finishedTracks[0].result.map((driver, index) => (
              <ResultList driver={driver} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return <div className={classes.results}>{resultContent}</div>;
};

export default Results;
