const dotenv = require('dotenv');
const express = require('express');
const BotanistRoute = express.Router();
const cookieParser = require("cookie-parser");
const Botanist = require("../Models/Botanist");
// const { Configuration, OpenAIApi } = require('openai');

CropRoute.use(cookieParser())
dotenv.config(); 

// GET ALL BOTANISTS
BotanistRoute.get('/', async (req, res) => {
    try {
        const botanists = await Botanist.find();
        res.json(botanists);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch botanists' });
    }
});

// GET BOTANIST BY ID
BotanistRoute.get('/:id', async (req, res) => {
    try {
        const botanist = await Botanist.findById(req.params.id);
        if (!botanist) return res.status(404).json({ error: 'Botanist not found' });
        res.json(botanist);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching botanist' });
    }
});

// POST: ASK A BOTANIST (OpenAI integration)
BotanistRoute.post('/:id/ask', async (req, res) => {
    const { message } = req.body;
    try {
    const botanist = await Botanist.findById(req.params.id);
    if (!botanist) return res.status(404).json({ error: 'Botanist not found' });

    const response = await openai.createChatCompletion({
        model: botanist.model || 'gpt-3.5-turbo',
        messages: [
        { role: 'system', content: botanist.OpenAiPrompt },
        { role: 'user', content: message },
        ],
        temperature: botanist.Temperature,
        max_tokens: botanist.MaxTokens
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
    } catch (err) {
    console.error('OpenAI Error:', err.message);
    res.status(500).json({ error: 'OpenAI failed to respond' });
    }
});

module.exports = BotanistRoute;



