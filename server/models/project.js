const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    siteCode: {
        type: String,
        required: true
    },
    siteName: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    structuralType: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    completeDate: {
        type: String,
        required: true
    },
    note: String
})



module.exports = mongoose.model("project", projectSchema)
