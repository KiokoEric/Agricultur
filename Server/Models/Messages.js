const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({ 
    Sender: {
        type: String,
        required:true
    },
    Receiver: {
        type: String,
        required:true
    },
    Message: {
        type: String,
        required:true,
    },
    Date: {
        type: Date,
        default: Date.now 
    },
})

module.exports = mongoose.model("Message", MessageSchema)