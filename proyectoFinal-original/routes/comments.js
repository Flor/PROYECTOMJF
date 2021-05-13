var express = require('express');
var router = express.Router();
const commentsController = require ("../controller/commentsController");


router.get('/comments', commentsController.index);


module.exports = router;


/* hice cualquier cosa*/