const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    // console.log("masukkkk")
    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    console.log(name, "<<<<req body")
    console.log(submitScore, "submit score")
    // res.send(req.teacher)
    console.log(req.teacher.id, "tech id")
    if (!Number.isInteger(submitScore)) {
      // console.log(!Number.isInteger(submitScore))
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      console.log("masuk sini?")
      Student.create({
        name: name || '',
        score: submitScore,
        TeacherId: req.teacher.id
      })
        .then(response => {
          console.log(response)
          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          });
        })
        .catch(err => {
          console.log( "masuk err")
          // next(err));
        })
    }
  }
}

module.exports = StudentController;
