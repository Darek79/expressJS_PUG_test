const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product',{pageTitle: 'Products',path: '/admin/add-product'})
    // res.send(`<h1>iam here</h1>`)
  
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
    // res.send(`<h1>complete</h1>`)
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    
})


exports.routes = router;
exports.products = products;