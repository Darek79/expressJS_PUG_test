const express = require('express');
const path = require('path');
const router = express.Router();


const prodCont = require('../controllers/products');

router.get('/', prodCont.shopData);

module.exports = router;