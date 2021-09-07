const express = require("express");
const game_router = require("./routes/game/index");
const user_router = require("./routes/users/index");
const userModel = require("./database/schemas/user");
const {
    port,
    mongo_url
} = require("./config/config.json")
const mongoose = require("mongoose");


mongoose.connect(mongo_url).catch(console.error);
const app = express();
app.use("/game", game_router);
app.use("/user", user_router);
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.send("Welcome to my game's homepage!");
})





app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})