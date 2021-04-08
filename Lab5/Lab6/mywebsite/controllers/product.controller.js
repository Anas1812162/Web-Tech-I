const Product=require('../models/product.model')


//http://localhost:300/test
exports.test=(req,res)=>{
    res.render("Greetings from test controller")
}

exports.product_create=(req,res)=>{
    let product=new Product({
    name: req.body.name,
    price: req.body.price
    });
    product.save((err)=>{
        if(err){
            return next(err);
        }
        res.render("product created successfully")
    });
}
exports.product_details=(req,res)=>{
Product.findById(req.params.id, (err,product)=>{
     if(err) return next(err);
     res.render(product);

})

}
exports.product_update=(req,res)=>{
Product.findByIdAndUpdate(req.params.id,{$set: req.body}, (err,product)=>{
      if (err) return next(err);
      res.render('Product updated');

})

}

exports.product_delete=(req,res)=>{
Product.findByIdAndRemove(req.params.id,(err)=>{
    if (err) return next(err);
    res.send('Product deleted successfully');
})

}

exports.list=(req,res)=>{
Product.find((err,products)=>{
if(!err){res.render('product',{page:'Product List',menuId:'list',products:products})}
else{console.log('Error in retrieving products!',+JSON.stringify(err,undefined,2))}
})
}
    


