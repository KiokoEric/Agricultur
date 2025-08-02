const http = require("http");
const cors = require("cors");
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const { Server } = require('socket.io');
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();

// MIDDLEWARE

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT" ,"DELETE"],  
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// MONGODB CONNECTION 

const dbUrl = 'mongodb+srv://KiokoEric:Victory2025@agricultur.tgmtmel.mongodb.net/Agricultur?retryWrites=true&w=majority&appName=Agricultur'

mongoose.connect(dbUrl) 
.then(() => console.log("Connected to the database!"))

Feature/Kioko/Server/App/Socket
// SOCKET.IO CONNECTION

const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" },

});

io.on('connection', (socket) => {
    socket.on('join', ({ userId }) => {
    socket.join(userId);
});

socket.on('sendMessage', ({ senderId, receiverId, message }) => {
    io.to(receiverId).emit('receiveMessage', {
        senderId, message, timestamp: new Date()
    });
    });
});

// IMPORT ROUTES

    const UserRoute = require("./Routes/UserRoute");
    const CropRoute = require("./Routes/CropRoute.js"); 

    app.use("/Users", UserRoute);
    app.use("/Crops", CropRoute);

app.listen(4000)