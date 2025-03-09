// fetch("http://localhost:8080/workout", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         category: "Back",
//         Excercise: "Barbell Bent-Over Rows",
//         // Excercise:"Active Isolated Stretching",
//         Sets: 2,
//         Time:new Date().toISOString(),
//         Reps: [1,2],
//         Weights: 1.5,
//     })
// }).then((res) => res.json())
//     .then((data) => console.log(data));


// fetch("http://localhost:8080/recovery", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         category: "Regeneration/Recovery",
//         // Excercise: "Barbell Bent-Over Rows",
//         Excercise: "Active Isolated Stretching",
//         currTime:new Date().toISOString(),
//         // timeDuration: {
//             time: 2,
//             Intensity: 3,
//             Rounds: 4
//         // }
//     })
// }).then((res) => res.json())
//     .then((data) => console.log(data));

// fetch("http://localhost:8080/cardio", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         category: "Cardio & Endurance",
//         Excercise: "Agility Ladder Drills",
//         Time:new Date().toISOString(),
//         // timeDuration: {
//             time: 2,
//             Speed: "4km/h",
//             Incline: 4
//         // }

//     })
// }).then((res) => res.json())
//     .then((data) => console.log(data));


    fetch("http://localhost:8080/supplement", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category: "Better Sleep",
            supplement: "Ashwagandha",
            // Time: {
                StartDate:new Date().toISOString().split("T")[0],
                Type: "Liquid",
            // },
            // Intake: {
                Amount: 2,
                Daily: 1,
            // },
            company: "amazone",
            Source: "amazone.in"
        })
    }).then((res) => res.json())
        .then((data) => console.log(data));



