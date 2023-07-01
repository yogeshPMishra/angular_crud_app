const express = require('express');
const app = express();
require('dotenv').config();
const fileUpload = require('express-fileupload');
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin: "*"
}));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }));
app.use(bodyparser.json());
app.use(express.json());

const user = require('./route/user');
app.use('/api/v1', user);

module.exports = app;