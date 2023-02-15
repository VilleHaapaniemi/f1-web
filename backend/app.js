const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./data/database");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/tracks", async (req, res) => {
  // Endpoint returns all tracks.

  console.log("TRYING TO FETCH TRACKS");
  try {
    const [tracks] = await db.query("SELECT * FROM tracks");
    res.json(tracks);
  } catch (err) {
    console.log(err);
  }
});

app.get("/tracks/result/:id", async (req, res) => {
  // Endpoint gets track id and returns that result.

  console.log("TRYING TO FETCH TRACK RESULT");
  const trackId = req.params.id;
  try {
    const [result] = await db.query(`SELECT * FROM tracks WHERE id=${trackId}`);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/simulateRace/:id", async (req, res) => {
  /*
    Endpoint gets race id.
    Calculate race result and update it to database. Update gained points to database for drivers.
    Returns race result.
  */

  console.log("TRYING TO SIMULATE RACE");
  const trackId = req.params.id;

  const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  // Query result have drivers id, name, skill and team skill.
  const dbQuery = `
  SELECT drivers.id, drivers.lname, drivers.driver_skill_factor, teams.team_skill_factor 
    FROM drivers 
      JOIN teams on drivers.team_id = teams.id;`;
  const [driversSkills] = await db.query(dbQuery);

  // SimulatedPoints is calculated by sum of driver skill and team skill * randomized number.
  const calculatedResult = driversSkills.map((driver) => ({
    ...driver,
    simulatedPoints:
      (+driver.driver_skill_factor + +driver.team_skill_factor) *
      randomNumber(),
  }));

  // Sorting result by simulated points. Ascending.
  calculatedResult.sort((a, b) => a.simulatedPoints - b.simulatedPoints);

  // Update race points to database.
  const pointsReceived = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
  for (const [index, driver] of calculatedResult.entries()) {
    const points = pointsReceived[index];
    // Only race top 10 drivers get points. After looping 10 times, break.
    if (index >= pointsReceived.length) {
      break;
    }
    try {
      db.query(
        `UPDATE drivers SET points = points + ${points} WHERE id = ${driver.id}`
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Mapping only names from result object and change to json format for database.
  resultNames = calculatedResult.map((value) => value.lname);
  resultNamesJson = JSON.stringify(resultNames);
  try {
    db.query(
      `UPDATE tracks SET result ='${resultNamesJson}' WHERE id=${trackId}`
    );
    res.json(resultNames);
  } catch (err) {
    console.log(err);
  }
});

app.get("/totalPoints", async (req, res) => {
  // Endpoint fetch total points for all drivers from database and returns that.

  console.log("TRYING TO FETCH TOTAL POINTS");
  const dbQuery = `SELECT drivers.id, fname, lname, points, team_id, team_name
    FROM drivers
      JOIN teams ON drivers.team_id = teams.id
    ORDER BY points DESC`;
  try {
    const [totalPoints] = await db.query(dbQuery);
    res.json(totalPoints);
    console.log(totalPoints);
  } catch (err) {
    console.log(err);
  }
});

app.post("/postComment", (req, res) => {
  // Endpoint request have posting new comment form data and set it to database.

  console.log("TRYING TO POST NEW COMMENT");
  const author = req.body.author;
  const content = req.body.content;
  const trackId = req.body.trackId;

  const dbQuery = `INSERT INTO comments 
                    (author, content, submitted, track_id) 
                  VALUES 
                    ("${author}", "${content}", CURRENT_TIMESTAMP(), ${trackId})`;
  try {
    db.query(dbQuery);
  } catch (err) {
    console.log(err);
  }

  res.send();
});

app.get("/getComments/:id", async (req, res) => {
  // Endpoint fetch comments for specific race.

  console.log("TRYING TO FETCH COMMENTS");

  const trackId = req.params.id;
  const dbQuery = `SELECT id, 
                      author, 
                      content, 
                      CONVERT(submitted, CHAR) AS submitted, 
                      track_id
                    FROM comments WHERE track_id = ${trackId}`;
  try {
    const [comments] = await db.query(dbQuery);
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getCommentsCount/:id", async (req, res) => {
  // Endpoint fetch how many comments specific race has.

  console.log("TRYING TO FETCH COMMENTS COUNT");

  const trackId = req.params.id;
  const dbQuery = `SELECT COUNT(*) AS commentsCount FROM comments WHERE track_id = ${trackId};`;
  try {
    const [commentCount] = await db.query(dbQuery);
    res.json(commentCount[0]);
  } catch (err) {
    console.log(err);
  }
})

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
