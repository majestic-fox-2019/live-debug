require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors);
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use(errorhandler);

app.use(express.json())
// const app = require('../');
// const http = require('http');
// const server = http.createServer(app);
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`LISTENING ON PORT ${PORT}`);
});
module.exports = app;
