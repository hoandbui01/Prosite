const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("task", taskSchema)
