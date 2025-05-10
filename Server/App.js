const cors = require("cors");
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
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

// IMPORT ROUTES

    const UserRoute = require("./Routes/UserRoute");

    app.use("/Users", UserRoute);
    

app.listen(4000)