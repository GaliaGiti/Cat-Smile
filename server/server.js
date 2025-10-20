const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/users')

app.post('/registration',)

app.listen(7000, ()=>{
    console.log('Server started')
})