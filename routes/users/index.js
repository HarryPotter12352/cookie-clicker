const express = require("express");
const bodyParser = require("body-parser");


const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false})


const cookieModel = require("../../database/schemas/cookies");
const userModel = require("../../database/schemas/user");

router.get("/signup", async (req, res) => {
    const cookies = await cookieModel.findOne({identifier: "identifier"});
    res.render("users/signup.ejs", {data: {cookie_count: cookies.number}}); 
})


router.post("/signedup", urlencodedParser, async (req, res) => {
    const cookies = await cookieModel.findOne({identifier: "identifier"});
    const query = userModel.findOne({username: req.body.username}, async (err, doc) => {
        if(doc === null){
            const new_user = await userModel.create({username: req.body.username, password: req.body.password, cookies: 0}).catch(console.error);
            
            res.render("users/signedup.ejs", {data: {message: "Successfully signed up!"}});
        }
        else{
            res.render("users/signup.ejs", {data: {message: `A user with the username ${req.body.username} already exists!`, cookie_count: cookies.number}})
        }
    });
    
})

router.get("/login", async (req, res) => {
    res.render("users/login.ejs", {data: {message: ""}})
})


router.post("/loggedin",urlencodedParser, async (req, res) => {
    const query = userModel.findOne({username: req.body.username, password: req.body.password}, async (err, doc) => {
        if(doc === null){
            res.render("users/login.ejs", {data: {message: "Invalid credentials!"}});
        }
        else{
            res.send(`Logged in with username ${req.body.username}`);
        }
    })
})




module.exports = router;