// dependencies required 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// connection to environment port or 3000
const PORT = process.env.PORT || 3000;

// Initialize our app variable by setting it to the value of express()
const app = express();

// HTTP request logger middleware
app.use(logger("dev"));

// Middleware for handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serves from public folder
app.use(express.static("public"));

// sets Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbworkout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

// Starts server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
