const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        max: 50,
        unique: true,
        require: true
    },
    password: {
        type: String,
        max: 50,
        min: 6,
        unique: true,
        required: true
    },
    email: {
        type: String,
        max: 50,
        unique: true,
        required: true
    },
    profilePicture: {
        type: String,
        default: " "
    },
    coverPicture: {
        type: String,
        default: " "
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


module.exports = mongoose.model("User", UserSchema)