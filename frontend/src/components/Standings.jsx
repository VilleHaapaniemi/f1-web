import { useLoaderData } from "react-router-dom";
import { getTotalPoints } from "../util/api";
import StandingList from "./StandingList";
import classes from "./Standings.module.css";

const Standings = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {loaderData.map((driver, index) => (
            <StandingList
              lname={driver.lname}
              team={driver.team_name}
              points={driver.points}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;

export async function loader() {
  return getTotalPoints();
}
