const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Model with seed data
const WorkSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [
      {
       type: {
           type: String,
           trim: true,
           required: 'Select exercise type!',
       },
       name: {
           type: String,
           trim: true,
           required: 'Set exercise name!',
       },
       duration: {
           type: Number,
           required: 'Enter the length of the workout in minutes.'
       },
       distance: {
           type: Number,
       },
       weight: {
           type: Number,
       },
       sets: {
           type: Number,
       },
       reps: {
           type: Number,
       }
      }
  ]
});

const Work = mongoose.model("Workout", WorkSchema);

module.exports = Work;
