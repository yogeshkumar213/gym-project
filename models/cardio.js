// import { getRandomValues } from "crypto";

const exp = require("constants");
const mongoose = require("mongoose");
const { type } = require("os");
// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/DEEP")
// }main().catch((err)=>{
//     return err
// });
let categoryExcercise = {
    "Cardio & Endurance": ["Agility Ladder Drills", "Air Runner", "Arc Trainer", "Assault/Air Bike", "Battle Ropes"],
    "Competitions": ["10K Run", "5K Run", "Adventure Racing (Multisport)", "Aquabike Race (Swim-Bike)", "Aquathlon (Swim-Run)", "Beach Running Challenge"],
    "Recovery": ["Leichter Lauf"],
    "Ty": null
}
const cardioSch = mongoose.Schema({
    Category: {
        type: String, requird: true,
        enum: {
            values: ["Cardio & Endurance", "Cardio & Endurance", "Recovery", "TY"],
            message: "Exercise must be one of the predifined values"
        }

    },
    Excercise: {
        type: String, required: true,
        validate: {
            validator: function (Excercise) {
                return categoryExcercise[this.Category]?.includes(Excercise)
            },
            message: "Exercise must be one of the predifined values"
        }
    },
    Time: {
        type: Date, required: true
        // hours: {
        //     type: String,
        //     required: true,
        //     min: [0, 'Hours cannot be less than 0'],
        //     max: [23, 'Hours cannot be more than 23']
        // },
        // seconds: {
        //     type: Number,
        //     required: true,
        //     min: [0, 'Seconds cannot be less than 0'],
        //     max: [59, 'Seconds cannot be more than 59']
        // }
    },
    // timeDuration: {
        time: {
            type: Number, required: true
        },
        Speed: {
            type: String, required: true,
        },
        Incline: {
            type: Number, required: true,
        }
    // }
})
const Cardio = mongoose.model("Cardio", cardioSch);
module.exports = Cardio;
