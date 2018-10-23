const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        maxlength: 100
    },
    lastname: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
})

// Hashing password before saving a user to the DB

userSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };