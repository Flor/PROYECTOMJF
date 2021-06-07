const { json } = require ('express') 
const db = require('../database/models');
const {op}= require('sequelize') //me permite usar operadores logicos


let indexController = { 
    index : function(req, res) {
        db.Product.findAll({
            include: [
                {
                    association: 'comentarios'
                }
            ]
        })
        .then((resultado)=>{
            return res.render ('index', 
            {buzos_buzos: resultado})})   
        .catch ((error)=>{
            res.send(error)
        })
    },


    search: function (req, res) {
        db.Product.findAll({where:{marca:{[op.like]:'%' + req.query.search + '%'}}})
        .then((resultado)=>{return res.render ('search', {result: resultado})})   
        .catch ((error)=>{
            res.send(error)
        })
    }, 
   
}

module.exports = indexController;
