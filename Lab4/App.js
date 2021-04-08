const express=require('express')
var R1=require('./Routemod')
var Rbook=require('./Bookroute')
var app=express()
// http://localhost:3000/books
app.use('/books',Rbook)

// http://localhost:3000/students
    app.use('/students',R1)

var server=app.listen(3000,()=>{
    console.log('server running on port 3000')
})