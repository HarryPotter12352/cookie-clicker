const mongoose = require("mongoose");

const cookieSchema = new mongoose.Schema({
    number: {type: Number, required: true},
    identifier: {type: String, required: true}
})

const cookieModel = mongoose.model("cookieModel", cookieSchema);

module.exports = cookieModel;