const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
    console.log("Connected Successfully to MongoDB")
})

app.listen(8800, () => {
    console.log("Server running")
})