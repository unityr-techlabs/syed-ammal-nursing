const mongoose = require('mongoose')
const dbConfig = require('../libs/dbConfig')

dbConfig()
const faclutySchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        // required: [true, 'Please provide an image URL for the blog post'],
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    disignation: {
        type: String,
        required: true
    },
    area: {
        type: [String],
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const facultyModel = mongoose.model('Faculty', faclutySchema)

module.exports = facultyModel