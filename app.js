const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const app= express();

dotenv.config({path: './config.env'});
require('./db/connect');

app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));

//static files
app.use(express.static(path.join(__dirname, './front/build')));

app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, './front/build/index.html'));
})
app.listen(4040);