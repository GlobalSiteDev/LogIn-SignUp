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


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING`);
})