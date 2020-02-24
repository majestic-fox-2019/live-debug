const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

function generateToken(payload) {
  // console.log(payload, 'masukkah ini?');
  return jwt.sign(payload, SECRET);
};

function verifyToken(payload) {
  // console.log(payload, 'masuk ke verify gak?');
  return jwt.verify(payload, SECRET);
};

module.exports = {
  generateToken,
  verifyToken
}
