'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Live Debug server is running on PORT ${port}!`);
});

module.exports = app;
