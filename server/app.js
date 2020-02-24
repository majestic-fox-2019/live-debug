require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);
app.use(errorhandler);

// app.listen(3000, function() {
//     console.log('App listen', 3000)
// })
module.exports = app;
