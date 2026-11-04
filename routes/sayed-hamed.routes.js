const SayedHamed = require('../models/SayedHamed')
const router = require('express').Router()




router.get('/', async (req,res)=>{
    const allSayedHameds = await SayedHamed.find()
    res.status(200).json(allSayedHameds)
})


router.post('/', async (req,res)=>{
    const createdSayedHamed = await SayedHamed.create(req.body)
    res.status(201).json(createdSayedHamed)

})


router.get('/:sayedHamedId', async (req,res)=>{
    const foundSayedHamed = await SayedHamed.findById(req.params.sayedHamedId)
    res.status(200).jason(foundSayedHamed)
})



router.delete('/:sayedHamedId',async(req,res)=>{
    const deletedSayedHamed = await SayedHamed.findByIdAndDelete(req.params.sayedHamedId)
    res.status(200).json(deletedSayedHamed)
})


router.put('/:sayedHamedId', async (req,res)=>{
    const updatedSayedHamed = await SayedHamed.findByIdAndUpdate(req.params.sayedHamedId, req.body)
    res.status(200).json(updatedSayedHamed)
})

