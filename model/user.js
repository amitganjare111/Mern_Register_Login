const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const User1 = mongoose.model('Reg&Log', user);

module.exports = User1;