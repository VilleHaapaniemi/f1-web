const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "salasana",
  database: "f1db",
});

app.get("/", async (req, res) => {
  try {
    const drivers = await db.query("SELECT * FROM drivers");
    console.log(drivers[0]);
  } catch (err) {
    console.log(err);
  }
  res.send("Toimiiko");
  
});

app.listen(5000, () => {
  console.log("BACKEND LISTENING ON PORT 5000");
});
