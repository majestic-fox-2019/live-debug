const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
module.exports.generateToken = function(payload) {
  return jwt.sign(payload, SECRET);
};

module.exports.verifyToken = function(payload) {
  return jwt.verify(payload, SECRET);
};
