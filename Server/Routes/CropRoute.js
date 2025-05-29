const dotenv = require('dotenv');
const express = require('express');
const CropRoute = express.Router();
const Crop = require("../Models/Crops.js");
const cookieParser = require("cookie-parser");

CropRoute.use(cookieParser())
dotenv.config(); 

// ADDING CROP DETAILS

CropRoute.post("/AddCrop", async (req, res) => {
    const Crops = new Crop(req.body)

    try {
        const SavedCrops = await Crops.save() 
        res.send(SavedCrops)
    } catch (error) {
        console.error(error) 
    }
})

// GETTING ALL THE CROPS DETAILS CREATED

CropRoute.get("/AllCrops", async (req, res) => {  
    try{
        const AllCrops = await Crop.find() 
        res.json(AllCrops)
    }
    catch(err) { 
        res.send(err)  
    }
})


// UPDATING A CROP DETAILS BASED ON THE CROP ID

CropRoute.put("/:id", async (req, res) => {
    try{
        const Crops= await Crop.findByIdAndUpdate(req.params.id, req.body)
        res.json(Crops)
    }
    catch(err) {
        res.send(err) 
    }
})

// DELETING CROP DETAIL(S) BASED ON THE CROP ID

CropRoute.delete("/:id", async (req, res) => {
    try{
        const Crops = await Crop.findByIdAndDelete(req.params.id) 
        res.json({Message: "Deleted Successfully!"})
    }
    catch(err) {
        res.send(err)
    }
})

// GETTING A CROP BY ITS ID

CropRoute.get('/:id', async (req, res) => {
    try {
    const crop = await Crop.findById(req.params.id);
    if (!crop) {
        return res.status(404).json({ message: 'Crop is not found' });
    }
    res.json(crop);
    } catch (error) {
    res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = CropRoute