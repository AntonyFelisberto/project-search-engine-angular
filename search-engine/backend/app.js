const express = require('express')
const cors = require('cors')
const {mongoose} = require('mongoose')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 3000;

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
