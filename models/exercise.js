const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: "Please enter Resistance or Cardio"
        },
        name: {
            type: String,
            required: "Name of resistance excercise required."
        },
        duration: {
            type: Number,
            required: "Duration required."
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]

});


const Workout = mongoose.model('Excercise', workoutSchema);
module.exports = Workout;