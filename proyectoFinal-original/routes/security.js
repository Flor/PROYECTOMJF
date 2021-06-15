var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const securityController = require ("../controller/securityController");


const storage = multer.diskStorage({
     destination: (req,file,cb) => {
         cb(null, './public/images/')
     },
    filename: ( req, file, cb) => {
        cb(null, Date.now() + '-' + file.fieldname + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage});

router.get ("/login", securityController.login);
router.post ("/login", securityController.authenticate);
router.get ("/register", securityController.register);
router.post ("/register", upload.single('fotodeperfil'), securityController.register);
router.get ("/logout", securityController.logout);

module.exports = router;