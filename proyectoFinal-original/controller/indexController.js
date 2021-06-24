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

            ],
            order:[
                [
                    "fecha_publicacion" , "DESC"
                ]
            ],
           
        })
        .then((resultado)=>{
            db.Product.findAll({})
            /*let masComentados= resultado.sort((a,b)=> {
                if(a.cantidad_comentarios < b.cantidad_comentarios) {return 1}
                else {return -1}
            })*/
            
            return res.render ('index', 
            {buzos_buzos: resultado, /*masComentados: masComentados*/})})   
        .catch ((error)=>{
            res.send(error)
        })
    },

    search: function (req, res) {
        let result = req.query.search;
        res.render("search", {result:result, product:db.product})
    }

    /* search: function (req, res) {
        db.Product.findAll({
            where:[
                {marca:{[op.like]:'%' + req.query.search + '%'}},
                {modelo:{[op.like]:'%' + req.query.search + '%'}} 
            ]
            })
        .then((resultado)=>{return res.render ('search', {result: resultado})})   
        .catch ((error)=>{
            res.send(error)
        })
    }, */ 
   
}

module.exports = indexController;
