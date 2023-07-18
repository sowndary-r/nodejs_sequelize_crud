const express = require('express');
const mysql = require('mysql2')
const app = express()
const axios = require('axios')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
const router = require('./routes/prodroute.js')
app.use('/api/v1',router)

//testing api
app.get('/',(req,res)=>{
    res.json({message : 'hello'})
})

//port
const PORT = process.env.PORT || 8000

//server
app.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`)
})

