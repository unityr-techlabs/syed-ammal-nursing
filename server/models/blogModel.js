const mongoose = require('mongoose')
const dbConfig = require('../libs/dbConfig')

dbConfig()
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the blog post'],
    },
    content: {
        type: [String],
        required: [true, 'Please provide a content for the blog post'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message for the blog post'],
    },
    images: {
        type: [String],
        // required: [true, 'Please provide an image URL for the blog post'],
    },
    profilePicture: {
        type: String,
        // required: [true, 'Please provide an image URL for the blog post'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const blogModel = mongoose.model('Blog', blogSchema)
module.exports = blogModel