const http=require('http');
var md=require('./myfisrtmodule')
//var mn=require('./myfisrtmodule')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Hello My name is " +md.MyName() + "\nToday is " +md.GiveDate() )
    res.end("\nKilling the response object here")
}

).listen(8080, ()=>{

console.log("The server is running on port 8080")
})