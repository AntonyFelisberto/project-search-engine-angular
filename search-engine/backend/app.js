const express = require('express')
const cors = require('cors')
const {mongoose} = require('./db/mongoose')
const app = express()

var path = require('path')

const studentRoute = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 3000;

app.use('/pics',express.static(path.join('pics')))
app.use('/api',studentRoute)

app.use((err,req,res)=> {
    if(err.name === 'ValidationError'){
        var valErrors = []
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message))
        res.status(422).send(valErrors)
    }
})

app.listen(port, (req,res)=> {
    console.log(`running on ${port}`)
})
