const Student = require('../db/model/student')

exports.getStudents = async(req,res) => {
    const students = await Student.find()
    res.send(students)
}

exports.postStudent = async(req,res)=> {
    console.log("here baby")
    const {studentId} = req.body
    const {name} = req.body
    const {dob} = req.body
    const {course} = req.body
    const {passingYear} = req.body
    const {duration} = req.body
    const image = 'http://localhost:3000/pics/' + req.file.filename

    const student = new Student({
        studentId,
        name,
        dob,
        course,
        passingYear,
        duration,
        image
    })

    const studentData = await student.save()
    res.status(200).json(studentData)
}