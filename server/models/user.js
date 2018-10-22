const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique
    },
    password: {
        type: String,
        require: true,
        minlenght: 6,
    },
    name: {
        type: String,
        maxlenght: 100,
    },
    lastname: {
        type: String,
        maxlenght: 100,
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };