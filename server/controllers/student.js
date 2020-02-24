const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    console.log("MASUK SINI KOK")
    console.log(req.body, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    if (!Number.isInteger(submitScore)) {
      console.log("MASUK INTEGER")
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      console.log("MASUK CREATE , <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
      console.log(submitScore, "<<<<< ini submit score")
      console.log(name, "<<<<<<<<<<<<<< INI NAMENYA")
      Student.create({
        name: name || '',
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          console.log(response, "<<<<<<<<<<<<<<<<<<<<<<<INI RESPONSE")
          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          });
          // res.status(201).json({
          //   message: "Successfully submit score",
          //   studen: response
          // })
        })
        .catch(err => next(err));
      // .catch(err => {
      //   console.log("MASUK ERROR")
      //   console.log(err, "<<<<<<<<<<<, ini Error student")
      //   next(err)
      // })
    }
  }
}

module.exports = StudentController;
