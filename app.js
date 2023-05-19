const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app= express();

dotenv.config({path: './config.env'});
require('./db/connect');

app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));


app.listen(4040);