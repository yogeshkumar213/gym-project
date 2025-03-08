const mongoose = require("mongoose");
// const Recovery = require("./recovery");
// const Cardio = require("./cardio");
// const Supplement = require("./supplement")
const { type } = require("os");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DEEP")
}
main().catch((err) => {
    return err;
});
const categoryExcercise = {
    "Arms(Biceps & Triceps)": ["Assisted Dips(Triceps focus)", "Barbell Bicep Curl", "Barbell Drag Curl",
        "Barbell Overhead Triceps Exten...", "Barbell Tricep Skull Crushers", "Bicep Curl Machine",
        "Biceps Cable", "Cable Cross-Body Curl", "Cable Rope Hammer Curl", "Cable Tricep Pushdown",
        "Cable Tricep Pushdown", "Close-Grip Barbell Press", "DB Bicep Curl", "DB Close-Grip Press",
        "DB Concentration Curl", "DB Cross-Body Curl", "DB Overhead Tricep Extension", "DB Skull Crushers",
        "DB Tricep Kickbacks", "DB Zottman Curl", "EZ Bar Preacher Curl", "Hammer Curl", "Hammercurls | DB"
        , "Incline DB Curl", "Overhead Cable Tricep Extensio", "Preacher Curl Machine", "Tricep Dip Machine",
        "Triceps Cable SZ", "TRX Bicep Curl", "TRX Hammer Curl", "TRX Overhead Tricep Extension", "TRX Overhead Tricep Extension",
        "TRX Tricep Extension"],
    "Back": ["Assisted Pull-Ups", "Barbell Bent-Over Rows", "Barbell Deadlift", "Barbell Reverse Grip Rows", "Barbell Shrugs",
        "Barbell Upright Rows", "Bent-Over DB Rows", "Butterfly Reverse", "Cable Face Pulls", "Cable Lat Pullover", "Chest-Supported Row",
        "DB Deadlift", "DB Reverse Flyes", "DB Row (Single-Arm)", "DB Shrugs", "Lat Pulldown Machine", "Latzug (Dynamisch)", "Latzug (hinten)",
        "Latzug (vorne)", "Pendlay Rows", "Renegade Rows", "Reverse Pec Deck", "Rudermaschine (einarmig)", "Seated Row Machine", "Sumo Deadlift",
        "T-Bar Row Machine", "T-Bar Rows (Using Barbell)", "TRX Reverse Row", "TRX Row", "TRX T Fly", "TRX Y Fly"],
    "Chest": ["Assisted Dips", "Barbell Bench Press", "Barbell Floor Press", "Barbell Guillotine Press", "Butterfly Machine", "Cable Crossover",
        "Chest Press Machine", "Close-Grip Barbell Bench Press", "DB Bench Press", "DB Floor Press", "DB Flyes", "DB Pullover", "Decline Barbell Bench Press",
        "Incline Barbell Bench Press", "Incline Chest Press Machine", "Incline DB Bench Press", "Multipress Flat", "Multipress Incline", "Seated Cable Chest Press",
        "Single-Arm DB Press", "Standing Multi Fly", "TRX Butterfly", "TRX Chest Press", "TRX Incline Chest Press", "TRX Push-Up"],
    "Core/Abs": ["Ab Crunch Machine", "Barbell Rollout", "Barbell Russian Twists", "Barbell Side Bend", "Barbell Weighted Sit-Ups", "Cable Oblique Twists",
        "Cable Woodchoppers", "DB Plank Rows", "DB Russian Twists", "DB Side Bends", "DB Woodchoppers", "Dynamische Liege (neg)", "Hanging Leg Raises",
        "Landmine Anti-Rotation Press", "Landmine Twists","⁠Plank to Push up", "Plank with Cable Row", "Roman Chair Sit-Ups", "Sit Ups", "TRX Mountain Climbers",
        "TRX Oblique Crunch", "TRX Pike", "TRX Plank", "TRX Side Plank", "Weighted Leg Raises (DBs)", "Weighted Sit-Ups (DBs)"],
    "Crossfit": ["Amanda", "Angie", "Annie", "Badger", "Barbara", "Bear Complex", "Bull", "Chelsea", "Chief", "Cindy", "CrossFit Total", "Daniel", "Diane", "DT",
        "Elizabeth", "Eva", "Fight Gone Bad", "Filthy 50", "Fran", "Grace", "Helen", "Holleyman", "Hope", "Hotshots 19", "Isabel", "Jackie", "Jared", "JT", "Karen",
        "Kelly", "Kelly Starrett Special", "Linda", "Loredo", "LuRong", "Lynne", "Manion", "Marston", "Mary", "Michael", "Mikko", "Murph", "Nancy", "Nasty Girls",
        "Nicole", "Open WOD 13.1", "Row and Thruster", "Ryan", "Small", "Tabata This", "The Seven", "Tommy V"],
    "Full Body": ["Barbell Clean and Press", "Barbell Deadlift to Press", "Barbell High Pull to Squat", "Barbell Overhead Carry", "Barbell Power Clean", "Barbell Snatch",
        "Barbell Thrusters", "Barbell Turkish Get-Up", "Burpees", "Cable Deadlift", "Cable Lunge with Row", "Cable Squat to Press", "Cable Step-Up with Overhead ",
        "Cable Woodchopper Squat", "DB Burpee with Press", "DB Clean and Press", "DB Deadlift to Press", "DB Farmer’s Carry", "DB High Pull", "DB Snatch", "DB Thrusters",
        "DB Turkish Get-Up", "Handwalk", "S|h Machine Thrusters", "Wallballs"],
    "Hyrox": ["Hyrox 1K Time Trial", "Hyrox Assault Bike", "Hyrox Battle Ropes", "Hyrox Bear Crawl", "Hyrox Box Jumps"],
    "Legs": ["Abductor Machine", "Adductor Machine", "Barbell Back Squat", "Barbell Bulgarian Split Squat", "Barbell Calf Raises"],
    "Lower Abs": ["Bicycle Kicks", "Flutter Kicks", "Hanging Leg Raises", "Hip Raises", "Jackknife Sit-Ups", "Leg Raises on a Bench"]
};

const workoutSch = {
    category: {
        type: String, required: true,

        enum: {
            values: ["Arms(Biceps & tryceps)", "Back", "Chest", "Core", "Core/Abs", "Crossfit", "Full Body", "Hyrox", "Legs", "Lower Abs", "Obliques", "Overall Core", "Shoulders", "Stabilizers and Lower Back", "upper Abs"],
            message: "category must be one of the predifined values"
        }
    },
    Excercise: {
        type: String, required: true,// array of excercise according to the category
        validate:{
            validator:function(excercise){
                return categoryExcercise[this.category]?.includes(excercise)
            },
            message:"invalid excercise for selected category"
        }
        // enum: {
        //     values: ["Assisted Dips(Triceps & Focus", "Barbell Bicep Curl", "Barbell Drag Curl", "Barbell Overhead Triceps Exte...", "Barbell Tricep skull Crushers", "Bicep Curl Machine", "Bicep Cable", "Cable Cross Body Curl", "Cable Rope Hammer Curl", "Cable Tricep Pushdown", "Close-Grip Barbell Press"],
        //    
        // }
        // validator: function (arr) {
        //     return arr.length > 0
        // },
        // message: "category must be one of the predifined values"
    },
    Sets: {
        type: Number, required: true,
        min: [1, "choose atleast one set"],
        max: 5

    },
    Time: {

        hours: {
            type: String,
            required: true,
            // min: [0, 'Hours cannot be less than 0'],
            // max: [23, 'Hours cannot be more than 23']
        },
        seconds: {
            type: Number,
            required: true,
            min: [0, 'Seconds cannot be less than 0'],
            max: [59, 'Seconds cannot be more than 59']
        }

    },
    Reps: {
        type: Number, required: true,
        min: [1, "select atleat 1 reps"],
        max: [12]
    },
    Weights: {
        type: Number, required: true,
        values: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6],
        message: 'Weight must be one of the predefined values'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}

const Workout = mongoose.model("Workout", workoutSch);
module.exports= Workout;

