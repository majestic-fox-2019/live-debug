const bcrypt = require('bcryptjs');
module.exports.hashPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = function (password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
};
