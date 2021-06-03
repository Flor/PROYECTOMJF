var express = require('express');
var router = express.Router();

const productsController = require ("../controller/productsController");


router.get('/:id', productsController.product);

router.get('/add/', productsController.productAdd);

router.get ("/", productsController.allProducts);

router.get ("/edit/:id", productsController.productEdit);

module.exports = router;