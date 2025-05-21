const mongoose = require('mongoose')

const dbConfig = () => {
    mongoose.connect('mongodb://localhost:27017/sanc').then(() => {
        console.log('connection established successfully')
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = dbConfig