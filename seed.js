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
            name: 'Sayed-Hamed Classic',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamed-real-image.png?raw=true',
        },
        {
            name: 'Sayed-Hamed AI',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamed-ai-image.png?raw=true',
        },
        {
            name: 'Sayed-Hamed Zaitoon',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/sayed-hamed6.png?raw=true',
        },
        {
            name: 'Sayed-Hamedmar',
            sayedHamedImage: 'https://github.com/SEB-16-Bahrain/assets/blob/main/Sayed-Hamed3.png?raw=true',
        },
    ])

    console.log('Data Seeded Successfully')

    await mongoose.disconnect()
}

seedSayedHameds()