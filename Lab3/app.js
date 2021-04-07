const express=require('express')


var app=express()
//http://localhost:3000/
app.get('/',(req,res)=>{
res.send("Hello Express")
})
//http://localhost:3000/Books
app.get('/Books',(req,res)=>{
    res.send("Welcome to the Books Section")
    })
    app.get('/Students',(req,res)=>{
        res.send("<h1>Welcome to the Students Section</h1>")
        })

        app.post('/',(req,res)=>{
            res.send("you have sent a messgae to server")
            })
//http://localhost:3000/Students/4/Books/78
app.get('/students/:studentid/Books/:bookid',(req,res)=>{
    res.send(req.params)
    })
    app.get('/example/b',(req,res,next)=>{
        console.log("This is a test from first callback function"),
        next()
        }, function(req,res){

            res.send("This is a test from second callback function")
        }  )
        

var server=app.listen(3000,()=>{
 console.log("server is up on port 3000")
})