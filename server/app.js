require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000
const cors = require('cors');
const routes = require('./routes/index');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorhandler);

module.exports = app;
