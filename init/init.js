const mongoose = require("mongoose");
const Workout = require("../models/workout");
const Recovery = require("../models/recovery");
const Cardio = require("../models/cardio");
const Supplement = require("../models/supplement");
// const { time } = require("console");
// const { default: Supplement } = require("../models/supplement");

// const { type } = require("os");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DEEP")
}
main().catch((err) => {
    return err;
});
let workoutdata = new Workout({
    category: "Back",
    Excercise: "Barbell Bent-Over Rows",
    Sets: 1,
    Time: {
        hours: "2am",
        seconds: 54
    },
    Reps: 1,
    Weights: 1.5,
})
workoutdata.save().then(() => console.log("document is saved"))
    .catch((err) => {
        return err;
    });
let recoverydata = new Recovery({
    category: "Regeneration/Recovery",
    Excercise: "Active Isolated Stretching",

    Time: {
        hours: "2am",
        seconds: 54
    },
    timeDuration: {
        time: 2,
        Intensity: 3,
        Rounds: 4
    }
})
recoverydata.save().then(() => console.log("document is saved"))
    .catch((err) => {
        console.log(err);
    });
let cardiodata = new Cardio({
    category: "Cardio & Endurance",
    Excercise: "Agility Ladder Drills",
    Time: {
        hours: "2am",
        seconds: 54
    },
    timeDuration: {
        time: 2,
        Speed: "4km/h",
        Incline: 4
    }

})
cardiodata.save().then(() => console.log("document is saved"))
    .catch((err) => {
        console.log(err)
    });

let supplementdata = new Supplement({
    category: "Better Sleep",
    supplement: "Ashwagandha",
    Time: {
        StartDate: "2/02/2025",
        Type: "Liquid"
    },
    Intake: {
        Amount: 2,
        Daily: 1
    },
    company: "amazone",
    Source: "amazone.in"
}

)
supplementdata.save().then(() => console.log("document is saved"))
    .catch((err) => {
        console.log(err);
    });


