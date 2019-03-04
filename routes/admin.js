const express = require('express');
const router = express.Router();

const prodCont = require('../controllers/products');
// const products = [];

router.get('/add-product', prodCont.getAddProduct);

router.post('/add-product', prodCont.postAddProduct);


module.exports = router;
