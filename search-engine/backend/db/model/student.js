const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    studentId: {
        type: String
    },
    name: String,
    dob: String,
    course: String,
    duration: String,
    passingYear: String,
    image: {
        type: String
    }
})

module.exports = mongoose.model('student', studentSchema)