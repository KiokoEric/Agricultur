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

// GETTING CROP DETAILS BY ITS ID

CropRoute.get('/:id', async (req, res) => {
    try {
    const cropDetails = await Crop.findById(req.params.id);
    if (!cropDetails) {
        return res.status(404).json({ message: 'Crop details are not found' });
    }
    res.json(cropDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// GETTING CROP DETAILS BY ITS ID

CropRoute.get('/Details/:id', async (req, res) => {
    const { id } = req.params;

    try {
    const crops = await Crop.find();

    for (const crop of crops) {
        const stages = crop.plantStages;

        for (const stageKey of ['Seedling', 'Vegetative', 'Fruiting', 'Harvesting']) {
        const stage = stages[stageKey];

        const foundPest = stage.Pests.find(p => p._id.toString() === id);
        if (foundPest) {
            return res.json({
                crop: crop.Name,
                stage: stageKey,
                type: 'Pest',
                details: foundPest
            });
        }

        const foundDisease = stage.Diseases.find(d => d._id.toString() === id);
        if (foundDisease) { 
            return res.json({
                crop: crop.Name,
                stage: stageKey,
                type: 'Disease',
                details: foundDisease
            });}
        }
    }

    res.status(404).json({ message: 'Pest or Disease not found in any crop' });

    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' }); 
    }
    });

// GETTING A CROP BY ITS NAME

CropRoute.get('/:Name', async (req, res) => {
    const Name = req.params.Name

    try {
    const cropdetails = await Crop.findOne({ Name: Name }) 
    if (!cropdetails) {
        return res.status(404).json({ message: 'Crop details are not found' });
    }
    res.json(cropdetails);
    } catch (error) {
    res.status(500).json({ message: 'Server Error' });
    }
});


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

module.exports = CropRoute