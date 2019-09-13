const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//mongoose.connect('mongodb://localhost:27017/peopleDB2',{useNewUrlParser:true},() => console.log("Confirmation message")) <-- In the server

const personSchema = new Schema ({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []
})

const Person = mongoose.model('person', personSchema)//Person model of personSchema 

module.exports = Person