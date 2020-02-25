const { Teacher } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { comparePassword } = require('../helpers/bcrypt');
class TeacherController {
  static register(req, res, next) {
    const objInput = {
      email: req.body.email,
      password: req.body.password
    };
    Teacher.create({
      email: objInput.email,
      password: objInput.password
    })
      .then(response => {
        const payload = {
          id: response.id,
          email: response.email
        };
        const access_token = generateToken(payload);
        res.status(201).json({
          message: 'Successfully Register',
          access_token
        });
      })
      .catch(err => next(err));
  }
  static login(req, res, next) {
    const ObjInput = {
      email: req.body.email,
      password: req.body.password
    }
    Teacher.findOne({
      where: {
        email: ObjInput.email || ''
      }
    })
      .then(response => {
        if (response) {
          if (comparePassword(ObjInput.password || response.password)) {
            const payload = {
              id: response.id,
              email: response.email
            };
            const access_token = generateToken(payload);
            res.status(200).json({
              message: 'Successfully Login',
              access_token
            });
          } else {
            next({
              status: 400,
              message: 'Invalid email or password'
            });
          }
        } else {
          next({
            status: 400,
            message: 'Invalid email or password'
          });
        }
      })
      .catch(err => next(err));
  }
}
module.exports = TeacherController;
