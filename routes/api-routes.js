const router = require("express").Router();
const Workout = require("../models");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            // console.log(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
            // console.log(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
            // console.log(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body
            }
        },
        {
            new:true, runValidators: true
        }
        )
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;