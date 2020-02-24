const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.JWT_SECRET || 'livedebug';
exports.generateToken = function(payload) {
  return jwt.sign(payload, SECRET);
};

exports.verifyToken = function(payload) {
  return jwt.verify(payload, SECRET);
};
