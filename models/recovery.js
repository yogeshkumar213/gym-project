const exp = require("constants");
const mongoose = require("mongoose");
// const { type } = require("os");
// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/DEEP");
// }
// main().catch((err) => {
//     return err
// });
const categoryExcercise = {
    "Regeneration/Recovery": ["Active Isolated Stretching", "Acupressure mat", "Around the World", "Back of thigh stretch", "Blackroll | back of thigh", "Blackroll | calves"]
};
const recoverySch = {
    category: {
        type: String, required: true,
        enum: {
            values: ["Regeneration/Recovery"],
            message: "please select category"
        }
    },
    Excercise: {
        type: String, required: true,
        validate: {
            validator: function (Excercise) {
                return categoryExcercise[this.category]?.includes(Excercise);
            },
            message: "Exercise must be one of the predifined values"
        }
        // enum: {
        //     values:["Active Isolated Stretching", "Acupressure mat", "Around the world", "Back of thigh Stretch", "Blackroll | back of thigh", "Blackroll Calves", "Blackroll |chest/chest", "Blackroll gluteus", "Blackroll |hip flexor", "Blackroll | IT band",
        //         "Blackroll |latissimus","Blackroll"
        //     ],
        //     
        // }
    }, Time: {
        type:Date,
        required:true

        // hours: {
        //     type: String,
        //     required: true,
        //     // min: [0, 'Hours cannot be less than 0'],
        //     // max: [23, 'Hours cannot be more than 23']
        // },
        // seconds: {
        //     type: Number,
        //     required: true,
        //     min: [0, 'Seconds cannot be less than 0'],
        //     max: [59, 'Seconds cannot be more than 59']
        // }
    },
    // date: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // },
    // timeDuration: {
        time: {
            type: Number, required: true
        },
        Intensity: {
            type: Number, required: true,
            min: 1,
            max: 10
        },
        Rounds: {
            type: Number, required: true,
            min: 1,
            max: 10
        }
    // }

}

const Recovery = mongoose.model("Recovery", recoverySch);
module.exports= Recovery;