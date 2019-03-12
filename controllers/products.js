const Product = require('../models/productBL');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle: 'Products',path: '/admin/add-product'})
};

exports.postAddProduct = (req, res, next) => {
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/'); 
};

exports.shopData = (req, res, next) => {
    Product.fetchAll(products=>{
        res.render('shop',{prods: products,pageTitle: 'Shop',path:'/'}); 
    });  
};