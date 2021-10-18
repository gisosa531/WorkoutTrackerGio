// accessing dependencies and path
const app = require("express").Router();
const path = require("path");

//get Route for accessing default page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/index.html"))
});

//get Route for accessing exercise page
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get Route for accessing the stats page
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//module exported
module.exports = app;