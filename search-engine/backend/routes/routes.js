const express = require('express')
const storage = require('../helper/storage')
const studentController = require('../controller/student')
const router = express.Router()

router.post('/student', storage, studentController.postStudent)
router.get('/student', studentController.getStudents)

module.exports = router