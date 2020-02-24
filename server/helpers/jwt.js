const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

function generateToken(payload) {
  // console.log(payload, 'masukkah ini?');
  return jwt.sign(payload, SECRET);
};

function verifyToken (payload) {
  // return jwt.verify(payload, SECRET);
};

module.exports = {
  generateToken,
  verifyToken
}
