require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000
const routes = require('./routes/index');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

module.exports = app;
