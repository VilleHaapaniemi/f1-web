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
    console.log(tracks);
    res.json(tracks);
  } catch (err) {
    console.log(err);
  }
});

app.post("/simulateRace", async (req,res) => {
  console.log("TRYING TO SIMULATE RACE");
})

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
