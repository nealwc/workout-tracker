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

  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   router.put("/api/workouts/:id", )

  module.exports = router;