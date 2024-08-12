const mongoose = require("mongoose");
const validator = require("validator")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,


    },
})

// we crate collection with th help of models

const User = new mongoose.model("login", userSchema)
module.exports = User;