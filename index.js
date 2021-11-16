const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/user")

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected Successfully to MongoDB")
});

app.listen(8800, () => {
    console.log("Server running")
})