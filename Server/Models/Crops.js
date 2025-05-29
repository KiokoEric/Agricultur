const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Signs: { type: String, required: true },
    PreventiveMeasures: { type: String, required: true },
    ImageUrl: { type: String }
});

const StageSchema = new mongoose.Schema({
    Pests: [IssueSchema],
    Diseases: [IssueSchema]
});

const CropSchema = new mongoose.Schema({
    Crop: { type: String }, 
    plantStages: {
        Seedling: StageSchema,
        Vegetative: StageSchema,
        Fruiting: StageSchema,
        Harvesting: StageSchema
    }
});

module.exports = mongoose.model('Crop', CropSchema);