const mongoose = require('mongoose')
const dbConfig = require('../libs/dbConfig')

dbConfig()
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the event post'],
    },
    content: {
        type: [String],
        required: [true, 'Please provide a content for the event post'],
    },
    category: {
        type: String,
        required: [true, 'Please provide a message for the event post'],
    },
    images: {
        type: [String],
        // required: [true, 'Please provide an image URL for the event post'],
    },
    profilePicture: {
        type: String,
        // required: [true, 'Please provide an image URL for the event post'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const eventModel = mongoose.model('Event', eventSchema)
module.exports = eventModel