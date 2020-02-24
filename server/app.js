require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');
const port = 3000


app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
// app.use(errorhandler);

app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;
