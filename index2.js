const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const methodOverride = require('method-override');
const path = require("path");
const Workout = require("./models/workout");
const Recovery = require("./models/recovery");
const { time } = require("console");
const Cardio = require("./models/cardio");
const Supplement = require("./models/supplement");
// const Workout = require("./models/workout");
const app = express();

const port = 8080;
app.use(cors());
app.use(methodOverride("_method"));
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DEEP")
} main().catch((err) => {
    return err
})
main().catch((err) => {
    console.log(err);
})
app.post("/workout", async (req, res) => {
    try {


        let { category, Excercise, Sets, Time, Reps, Weights } = req.body
        // console.log(`${Time.hours} ${Excercise} ${Time} ${Reps} ${Weights}`);
        let addData = new Workout(
            {
                category: category,
                Excercise: Excercise,
                Sets: Sets,
                Time: Time,
                Reps: Reps,
                Weights: Weights
            }
        )
        let result = await Workout.insertMany([addData]);
        console.log(result);
        res.send({ "added": "successfully" })
    } catch (err) {
        console.log(err);

        res.send({ "err": err._message })
    }
});



app.post("/recovery", async (req, res) => {
    try {


        let { category, Excercise, currTime, time, Intensity, Rounds } = req.body;
        // console.log(`${Time.hours} ${Excercise} ${Time} ${Reps} ${Weights}`);
        console.log(req.body);
        let addData = new Recovery(
            {
                category: category,
                Excercise: Excercise,

                Time: currTime,

                time: time,
                Intensity: Intensity,
                Rounds: Rounds


            }
        )
        let result = await Recovery.insertMany([addData]);
        console.log(result);
        res.send({ "added": "successfully" })
    } catch (err) {
        res.send({ "err": err._message });
    }
});



app.post("/cardio", async (req, res) => {
    try {
        let { category, Excercise, Time, time, Speed, Incline } = req.body

        // console.log(`${category} ${Excercise} ${Time} ${time} ${Speed},${Incline} `);
        let addData = new Cardio({
            Category: category,
            Excercise: Excercise,
            Time: Time,
            // timeDuration: {
            time: time,
            Speed: Speed,
            Incline: Incline
            // }

        }
        )
        let result = await Cardio.insertMany([addData]);
        console.log(result);
        res.send({ "added": "successfully" });
    } catch (err) {
        res.send({ "err": err._message })
    }
});


app.post("/supplement", async (req, res) => {
    try {
        let { category, supplement, StartDate,Type, Amount,Daily,company,Source} = req.body

        console.log(`${category} ${supplement} ${StartDate},${Type},${Amount},${Daily},${company},${Source} `);
        let addData = new Supplement({
            category: category,
            supplement: supplement,
            // Time: {
                StartDate:StartDate,
                Type:Type,
            // },
            // Intake: {
                Amount: Amount,
                Daily: Daily,
            // },
            company: company,
            Source: Source

        })
        let result = await Supplement.insertMany([addData]);
        console.log(result);
        res.send({ "added": "successfully" });
    } catch (err) {
        res.send({ "err": err._message })
    }
});

app.delete("/workout", async (req, res) => {
    try {
        let id = req.body._id;
        console.log(id);
        let Workoutdel = await Workout.deleteOne({ _id: id })
        console.log(Workoutdel)
        res.send({ "delete": "successfully" });
    } catch (err) {
        console.log({ "err": err })
    }
});

app.delete("/recovery", async (req, res) => {
    let id = req.body._id;
    console.log(id);
    let recoverydel = await Recovery.deleteOne({ _id: id })
    console.log(recoverydel)
    res.send({ "delete": "successfully" });
})

app.delete("/cardio", async (req, res) => {
    let id = req.body._id;
    console.log(id);
    let cardiodel = await Cardio.deleteOne({ _id: id })
    console.log(cardiodel);
    res.send({ "delete": "successfully" });
})
app.delete("/supplement", async (req, res) => {
    let id = req.body._id;
    console.log(id);
    let supplementdel = await Supplement.deleteOne({ _id: id })
    console.log(supplementdel);
    res.send({ "delete": "successfully" });
})
app.get("/workout", async (req, res) => {
    // let data = req.body;
    // console.log(data);
    let allworkoutdata = await Workout.find({})
    console.log(allworkoutdata)
    res.send({ "datasend": "successfully", "data":  allworkoutdata });
});

app.get("/cardio", async (req, res) => {
    // let data = req.body;
    // console.log(data);
    let allcardiodata = await Cardio.find({})
    console.log(allcardiodata)
    res.send({ "datasend": "successfully" });
});
app.get("/recovery", async (req, res) => {
    // let data = req.body;
    // console.log(data);
    let allrecoverydata = await Recovery.find({})
    console.log(allrecoverydata)
    res.send({ "datasend": "successfully" });
});
app.get("/supplement", async (req, res) => {
    // let data = req.body;
    // console.log(data);
    let allsupplementdata = await Supplement.find({})
    console.log(allsupplementdata)
    res.send({ "datasend": "successfully" });
});





app.listen(port, () => {
    console.log("listening is start")
});




