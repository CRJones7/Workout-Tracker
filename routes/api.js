const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.get("/api/workouts/range", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            console.log("range")
            console.log(dbExercise);
            res.json(dbExercise);

        })
        .catch(err => {
            console.log(err)
        })

});


router.post("/api/workouts", ({ body }, res) => {
    console.log("posting");
    console.log(body);
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    const workout = req.body;
    // console.log(req.params.id);
    if (workout.type === "cardio") {
        Exercise.updateOne({ _id: req.params.id },
            {
                exercises: [{
                    type: workout.type,
                    name: workout.name,
                    duration: workout.duration,
                    distance: workout.distance
                }]
            }).then(results => {
                console.log(results)
                res.json(results);
            }).catch(err => {
                console.log(err)
            })
    } else {
        Exercise.updateOne({ _id: req.params.id },
            {
                exercises: [{
                    type: workout.type,
                    name: workout.name,
                    duration: workout.duration,
                    weight: workout.weight,
                    reps: workout.reps,
                    sets: workout.sets,
                }]
            }).then(results => {
                console.log(results)
                res.json(results);
            }).catch(err => {
                console.log(err)
            });
    }


});
module.exports = router;