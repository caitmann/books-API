const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema( {
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String
})

module.exports = mongoose.model('Book', bookSchema)