const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")



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


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}









async function seedSayedHameds(){
    await conntectToDB()

    await SayedHamed.deleteMany()
    
    const seededSayedHameds = await SayedHamed.insertMany([
        {
            name: 'Sayed Hamed (Base Form)',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamed-base.jpg?raw=true',
        },
        {
            name: 'Sayed Sweet',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-sweet.png?raw=true',
        },
        {
            name: 'Sayed Hamedmar',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamedmar.png?raw=true',
        },
        {
            name: 'Pirate Sayed Hamed',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamed-pirate.png?raw=true',
        },
    ])

    console.log('Data Seeded Successfully')

    await mongoose.disconnect()
}

seedSayedHameds()
