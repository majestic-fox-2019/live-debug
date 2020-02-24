const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function generateToken(payload) {
  return jwt.sign(payload, SECRET);
};

