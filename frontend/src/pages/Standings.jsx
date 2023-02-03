import { useLoaderData } from "react-router-dom";
import { getTotalPoints } from "../util/api";
import StandingList from "../components/StandingList";
import StandingListTeam from "../components/StandingListTeam";
import classes from "./Standings.module.css";

const Standings = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  function sumPointsByTeamId(standings) {
    // Function gets loaderData which have drivers total standings. Returns standings for teams.

    const teamPoints = {};

    standings.forEach((standing) => {
      if (!teamPoints[standing.team_name]) {
        teamPoints[standing.team_name] = 0;
      }
      teamPoints[standing.team_name] += standing.points;
    });

    return Object.entries(teamPoints)
      .sort((a, b) => b[1] - a[1])
      .map(([team_name, points]) => ({ team_name, points }));
  }

  const teamStandings = sumPointsByTeamId(loaderData);
  console.log(teamStandings);

  return (
    <>
      <div className={classes.resultContainer}>
        <h2>Driver standings</h2>
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
      <div className={classes.resultContainer}>
        <h2>Team Standings</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teamStandings.map((team, index) => (
              <StandingListTeam
                team={team.team_name}
                points={team.points}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Standings;

export async function loader() {
  return getTotalPoints();
}
