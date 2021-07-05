var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const usersController = require ("../controller/usersController")

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
      cb(null, './public/images/')
  },
 filename: ( req, file, cb) => {
     cb(null, Date.now() + file.fieldname + '-' + path.extname(file.originalname))
 }
});
const upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:id', usersController.profile);
router.get('/profileEdit/:id', usersController.profileEdit);
router.post('/profileEdit/:id',upload.single('fotodeperfil'), usersController.profileEdited);

module.exports = router;