"use strict"
const router = require('express').Router();
const StudentController = require('../controllers/student');
const authentication = require('../middlewares/authentication')

router.post('/', authentication, StudentController.submit);

module.exports = router;
