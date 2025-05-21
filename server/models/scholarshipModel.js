const mongoose = require('mongoose')
const dbConfig = require('../libs/dbConfig')

dbConfig()
const scholarsihpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    variety: [{
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        eligibility: {
            type: String,
            required: true
        },
        process: {
            type: String,
            required: true
        }
    }]

})

const scholarshipModel = mongoose.model('Scholarship', scholarsihpSchema)

module.exports = scholarshipModel