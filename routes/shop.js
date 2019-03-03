const express = require('express');
const path = require('path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    console.log(products);
    res.render('shop',{prods: products,pageTitle: 'Shop',path:'/'});
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
   
})

// adminData = [];

module.exports = router;