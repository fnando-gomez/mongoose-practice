const mongoose = require('mongoose')
const Schema = mongoose.Schema

//mongoose.connect('mongodb://localhost:27017/booksDB',{useNewUrlParser:true},() => console.log("Confirmation message")) <-- In the server

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number
})

const Book = mongoose.model('book', bookSchema)//Book model of bookSchema

module.exports = Book