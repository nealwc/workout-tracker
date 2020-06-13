const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
 workoutType: {
     type: String,
     required: "Workout type is required"
 },
 cardioName: {
     type: String
 },
 name: {
     type: String
 },
 weight: {
     type: Number
 },
 sets: {
     type: Number
 },
 reps: {
     type: Number
 },
duration: {
    type: Number
},
resistanceDuration: {
    type: Number
},
distance: {
    type: Number
}
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
