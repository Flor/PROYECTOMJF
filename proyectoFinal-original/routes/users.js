var express = require('express');
var router = express.Router();
const usersController = require ("../controller/usersController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:id', usersController.profile);

router.get('/profileEdit', usersController.profileEdit);

router.get('/register', usersController.register);

router.get('/login',usersController.login);

module.exports = router;