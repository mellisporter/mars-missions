const express = require("express");
const app = express();
const port = 3000;

const marsMissions = require("./models/missions")
app.listen(port, ()=>{
    console.log("Looking for signs of intelligent life.")
})

app.get("/", function (req, res){
    res.render("mars_index.ejs", {
        allMars: marsMissions,
    })
})

