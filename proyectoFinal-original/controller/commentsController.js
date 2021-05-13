//let buzos = require ("../data/data");
//const { json } = require ('express'); 
let db = require("../database/models");



let commentsController = {
    index: function (req, res) {
        db.Comment.findAll()
        .then((data) => {
            return res.render('comments/commentsIndex', { 
                comments: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },
}


module.exports = commentsController;