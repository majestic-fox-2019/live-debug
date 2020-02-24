const bcrypt = require('bcryptjs');
module.exports = function comparePassword(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
};