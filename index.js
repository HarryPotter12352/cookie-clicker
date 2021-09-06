const express = require("express");
const game_router = require("./routes/game/index");
const {
    port,
    mongo_url
} = require("./config/config.json")
const mongoose = require("mongoose");
const cookieModel = require("./database/schemas/cookies");


mongoose.connect(mongo_url).catch(console.error);
const app = express();
app.use("/game", game_router);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome to my game's homepage!");
})





app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})