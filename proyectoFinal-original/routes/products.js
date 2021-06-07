var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require ("../controller/productsController");


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images/')
    },
   filename: ( req, file, cb) => {
       cb(null, Date.now() + file.fieldname + '-' + path.extname(file.originalname))
   }
});
const upload = multer({storage: storage});


router.get('/add/', productsController.productAdd);
router.post('/add/',upload.single('foto_producto'), productsController.store);
router.get ("/", productsController.allProducts);
router.get ("/edit/:id", productsController.productEdit);
router.get('/:id', productsController.product);

module.exports = router;

