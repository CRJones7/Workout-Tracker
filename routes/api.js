const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.get("/api/workouts/range", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            console.log(dbExercise);
            res.json(dbExercise);

        })
        .catch(err => {
            console.log(err)
        })

});


router.post("/api/workouts", ({ body }, res) => {
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
    console.log(req.body);
    console.log(req.params._id);
});
module.exports = router;