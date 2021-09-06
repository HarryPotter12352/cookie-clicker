const express = require("express");
const router = express.Router();
const cookieModel = require("../../database/schemas/cookies");



router.get("/", (req, res) => {
    res.render("game/index.ejs")
})

router.post("/clicked", async (req, res) => {
    const cookies = await cookieModel.findOne({identifier: "identifier"});
    await cookieModel.updateOne({identifier: "identifier"}, {number: cookies.number+1});
    const new_cookie = await cookieModel.findOne({identifier: "identifier"})
    res.render("game/index.ejs", {data: {number: new_cookie.number}});
})

module.exports = router;