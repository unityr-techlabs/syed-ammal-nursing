const mongoose = require('mongoose');
const dbConfig = require('../libs/dbConfig');

dbConfig();

const departmentSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        // required: [true, 'Please provide an image URL for the blog post'],
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: [String],
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    curricullam: {
        curriculamImage: {
            type: String,
            // required: [true, 'Please provide an image URL for the blog post'],
        },
        description: {
            type: [String],
            required: true
        },
        curriculam_detail: {
            type: [String],
            required: true
        },
        year: [{
            year_label: {
                type: String,
                required: true
            },
            subject: {
                name: {
                    type: [String],
                    required: true
                },
                code: {
                    type: [String],
                    required: true
                },
                credit: {
                    type: [String],
                    required: true
                }
            }
        }]
    },
    admission: {
        admissionPicture: {
            type: String,
            // required: [true, 'Please provide an image URL for the blog post'],
        },
        description: {
            type: [String]
        },
        requirements: {
            description: {
                type: [String]
            },
            points: {
                type: [String]
            }
        }
    }
});

const departmentModel = mongoose.model('department', departmentSchema);

module.exports = departmentModel;