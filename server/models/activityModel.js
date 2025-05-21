const mongoose = require('mongoose')
const dbConfig = require('../libs/dbConfig')

dbConfig()
const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the activity post'],
    },
    content: {
        type: [String],
        required: [true, 'Please provide a content for the activity post'],
    },
    image: {
        type: [String],
        // required: [true, 'Please provide an image URL for the activity post'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const activityModel = mongoose.model('Activity', activitySchema)
module.exports = activityModel