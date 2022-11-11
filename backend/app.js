const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createPool({
  connectionLimit: 10,
  host: "database",
  user: "root",
  password: "secret",
  database: "f1db",
});

app.get("/", async (req, res) => {
  console.log("TRYING TO FETCH TRACKS");
  try {
    const responseTracks = await db.query("SELECT * FROM tracks");
    const tracks = responseTracks[0];
    console.log(tracks);
    res.json(tracks);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
