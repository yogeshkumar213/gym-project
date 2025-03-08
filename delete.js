// const { json } = require("express/lib/response");

fetch("http://localhost:8080/workout", {
    method: "delete",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        category: "Back"
    })

})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    });

fetch("http://localhost:8080/recovery", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // category: "Regeneration/Recovery",
        Excercise: "Active Isolated Stretching"
    })
}).then((res) => res.json())
    .then((data) => console.log(data));

fetch("http://localhost:8080/cardio", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // category: "Regeneration/Recovery",
        Category: "Cardio & Endurance"
    })
}).then((res) => res.json())
    .then((data) => console.log(data));


fetch("http://localhost:8080/supplement", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // category: "Regeneration/Recovery",
        category: "Better Sleep"
    })
}).then((res) => res.json())
    .then((data) => console.log(data));