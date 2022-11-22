import { useLoaderData } from "react-router-dom";

import { getTracks } from "../util/api";
import NextTrack from "../components/NextTrack";

const HomePage = () => {
  const loaderData = useLoaderData();
  const nextTrack = loaderData.find((track) => track.result === null);

  return <NextTrack track={nextTrack} />;
};

export default HomePage;

export async function loader() {
  return getTracks();
}
