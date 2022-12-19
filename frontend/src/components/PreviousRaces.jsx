import TrackItem from "./TrackItem";

const PreviousRaces = (props) => {
  const finishedTracks = props.finishedTracks;

  return (
    <div>
      {finishedTracks.map((track) => (
        <TrackItem key={track.id} country={track.country} />
      ))}
    </div>
  );
};
export default PreviousRaces;
