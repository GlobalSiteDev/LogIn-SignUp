const express = require('express');
const bodyParser = require('body-parser');
const cookiePraser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const { User } = require('./models/user');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use(bodyParser.json());
app.use(cookiePraser());

// POST //
// Register user with email and password

app.post('/api/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.status(400).send(err);

        res.status(200).json({
            success: true,
            user: doc
        })
    })
})

// Login user with email and password

app.post('/api/login', (req, res) => {
    User.findOne({'email': req.body.email}, (err, user) => {
        if(!user) return res.json({isAuth: false, message: 'Auth failed, email not found'});

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({
                isAuth: false,
                message: 'Wrong password'
            });

            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                res.cookie('auth', user.token).send({
                    isAuth: true,
                    id: user._id,
                    email: user.email
                })
            })
        })
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING`);
})
