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

app.post("/simulateRace", async (req, res) => {
  console.log("TRYING TO SIMULATE RACE");
  const trackId = req.body.id;
  console.log(trackId);

  const randomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  // Query result have drivers id, name, skill and team skill.
  const [driversSkills] =
    await db.query(`SELECT drivers.id, drivers.lname, drivers.driver_skill_factor, teams.team_skill_factor FROM drivers JOIN teams on drivers.team_id = teams.id;
  `);
  console.log(driversSkills);

  // Result is calculated by sum of driver skill and team skill * randomized number.
  const calculatedResult = driversSkills.map( driver => ({
    ...driver, skillSum: (+driver.driver_skill_factor + +driver.team_skill_factor) * randomNumber()
  }))
  console.log(calculatedResult);

  try {
    db.query(
      `UPDATE tracks SET result = '["Max", "Charles"]' WHERE id=${trackId}`
    );
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
