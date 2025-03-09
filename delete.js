// // const { json } = require("express/lib/response");

// fetch("http://localhost:8080/workout", {
//     method: "delete",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//        _id:"67cc9541eeedff7b76af5819"
//     })

// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     });

// fetch("http://localhost:8080/recovery", {
//     method: "delete",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         // category: "Regeneration/Recovery",
//     //     Excercise: "Active Isolated Stretching"
//     _id: '67cc96c0ee47e5acdcecead3'
//     })
// }).then((res) => res.json())
//     .then((data) => console.log(data));

// fetch("http://localhost:8080/cardio", {
//     method: "delete",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         // category: "Regeneration/Recovery",
//         // Category: "Cardio & Endurance"
//         _id:'67cade9d0b2d08fef6a976b3'
//     })
// }).then((res) => res.json())
//     .then((data) => console.log(data));


fetch("http://localhost:8080/supplement", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // category: "Regeneration/Recovery",
        // category: "Better Sleep"
        _id:'67cbbf63a34e25327c29ba3e'
    })
}).then((res) => res.json())
    .then((data) => console.log(data));