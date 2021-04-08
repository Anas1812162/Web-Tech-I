const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const  Mongoose  = require('mongoose');

const app=express();

//............................Mongoose Connection...................\\
Mongoose.connect("mongodb://localhost/productsDb", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
console.log("Connected to the database!");
})
.catch(err=> {
    console.log("Error connecting with database");
    process.exit();
});
//............................Mongoose Connection...................\\

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//http://localhost:300/products
app.use('/products',product);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

