const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    console.log(req.body, "================================================controller");
    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    if (!Number.isInteger(submitScore)) {
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      console.log(name, submitScore, TeacherId, "==================dari controller===========================");
      Student.create({
        nama: name || '',
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          console.log(response);
          res.status(201).json(`{
            message: 'Successfully submit score',
            student: response
          }`);
        })
        .catch(err => next(err));
    }
  }
}

module.exports = StudentController;
