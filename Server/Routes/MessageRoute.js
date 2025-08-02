const dotenv = require('dotenv');
const express = require('express');
const MessageRoute = express.Router();
const cookieParser = require("cookie-parser");
const Message = require("../Models/Messages.js");

MessageRoute.use(cookieParser())
dotenv.config(); 

MessageRoute.get('/:UserId/:BotanistId', async (req, res) => {
    const { UserId, BotanistId } = req.params;
    try {
    const messages = await Message.find({
        $or: [
        { Sender: UserId, Receiver: BotanistId }
        ]
    }).sort({ Date: 1 });
    res.json(messages);
    } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// POST save a new message (optional if using real-time only)
MessageRoute.post('/Message', async (req, res) => {
    const { Sender, Receiver, Message} = req.body;
    try {
    const message = new Message({ Sender, Receiver, Message});
    await message.save();
    res.status(201).json(message);
    } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
    }
});

module.exports = MessageRoute;