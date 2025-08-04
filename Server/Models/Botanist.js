const mongoose = require("mongoose");
const BotanistSchema = new mongoose.Schema({ 
    Name: {
        type: String,
        required:true
    },
    Speciality: {
        type: String,
        required:true
    },
    Image: {
        type: String,
        required:true,
    },
    Description: {
        type: String,
        required:true,
    },

    // OpenAI-specific fields
    OpenAiPrompt: { type: String, required: true },
    Model: { type: String, default: 'gpt-3.5-turbo' }, 
    Temperature: { type: Number, default: 0.7 }, 
    MaxTokens: { type: Number, default: 500 }, 
})

module.exports = mongoose.model("Botanist", BotanistSchema)