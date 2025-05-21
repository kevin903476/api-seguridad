//@ts-check
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/getStudent', studentController.getAllStudents);
router.post('/registerStudent', studentController.registerStudent);

module.exports = router;