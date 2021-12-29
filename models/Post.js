const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type: String
    },
},{ timestamps: true });


module.exports = mongoose.model("Post", PostSchema)