const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  author: String,
  title: String
});

const Work = mongoose.model("Workout", WorkSchema);

module.exports = Work;
