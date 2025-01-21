const express = require("express");
const mysql = require("mysql2");
const env =require("dotenv")
env.config()

const app = express();
const port = process.env.PORT || 3000;
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err.message);
    process.exit(1);
  }
  console.log("Successfully connected to MySQL database");
});
app.get("/", (req, res) => {
  res.send("Express server is running and connected to MySQL!");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
