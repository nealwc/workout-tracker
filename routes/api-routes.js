const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = router;