const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            // console.log(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
            // console.log(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
            // console.log(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
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