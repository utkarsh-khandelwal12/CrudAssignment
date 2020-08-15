const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    College: {
        type: String,
        required: true
    },
    Yearofjoining: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);