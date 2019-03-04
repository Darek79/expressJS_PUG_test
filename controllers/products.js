const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle: 'Products',path: '/admin/add-product'})
    // res.send(`<h1>iam here</h1>`)
  
};

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
    // res.send(`<h1>complete</h1>`)
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    
};

exports.shopData = (req, res, next) => {
    console.log(products);
    res.render('shop',{prods: products,pageTitle: 'Shop',path:'/'});
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
   
};