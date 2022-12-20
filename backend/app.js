const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./data/database");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/tracks", async (req, res) => {
  console.log("TRYING TO FETCH TRACKS");
  try {
    const [tracks] = await db.query("SELECT * FROM tracks");
    res.json(tracks);
  } catch (err) {
    console.log(err);
  }
});

app.get("/tracks/result/:id", async (req, res) => {
  console.log("TRYING TO FETCH TRACK RESULT");
  const trackId = req.params.id;
  try {
    const [result] = await db.query(
      `SELECT result FROM tracks WHERE id=${trackId}`
    );
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/simulateRace/:id", async (req, res) => {
  console.log("TRYING TO SIMULATE RACE");
  const trackId = req.params.id;

  const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  // Query result have drivers id, name, skill and team skill.
  const [driversSkills] =
    await db.query(`SELECT drivers.id, drivers.lname, drivers.driver_skill_factor, teams.team_skill_factor FROM drivers JOIN teams on drivers.team_id = teams.id;
  `);

  // SimulatedPoints is calculated by sum of driver skill and team skill * randomized number.
  const calculatedResult = driversSkills.map((driver) => ({
    ...driver,
    simulatedPoints:
      (+driver.driver_skill_factor + +driver.team_skill_factor) *
      randomNumber(),
  }));

  calculatedResult.sort((a, b) => a.simulatedPoints - b.simulatedPoints);

  // Mapping only names from result object and change to json format for database.
  console.log(calculatedResult);
  resultNames = calculatedResult.map((value) => value.lname);
  resultNamesJson = JSON.stringify(resultNames);
  console.log(resultNamesJson);

  try {
    db.query(
      `UPDATE tracks SET result ='${resultNamesJson}' WHERE id=${trackId}`
    );
    res.json(resultNames);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
