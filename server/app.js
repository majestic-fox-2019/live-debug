if(!process.env.NODE_ENV || process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorhandler);

app.listen(PORT, () => {
  console.log('listening to ' + PORT)
})

module.exports = app;
