var express=require('express')
var router=express.Router()


//http://localhost:3000/students/
router.get('/',(req,res)=>{
    res.send('welcome to my home page')
})

//http://localhost:3000/students/about
router.get('/about',(req,res)=>{
    res.send('welcome to the about page')
})


module.exports=router