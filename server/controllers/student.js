"use strict"
const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    const { name, score } = req.body;
    const submitScore = parseInt(score);
    const TeacherId = req.teacher.id;
    if (submitScore === Number) {
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      Student.create({
        name,
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          res.status(201).json({
            message: 'Successfully submit score',
            student: response,
          });
        })
        .catch(err => next(err));
    }
  }
}

module.exports = StudentController;
