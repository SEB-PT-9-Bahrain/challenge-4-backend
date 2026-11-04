const mongoose = require('mongoose')


// Schema
const sayedHamedSchema = new mongoose.Schema({
    name:{
        type: String
    },
    sayedHamedImage:{
        type: String
    }
})


// model
const SayedHamed = mongoose.model('SayedHamed',sayedHamedSchema)

module.exports = SayedHamed