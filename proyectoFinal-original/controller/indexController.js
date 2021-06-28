const { json } = require ('express') 
const db = require('../database/models');
const op = db.Sequelize.Op;



let indexController = { 
    index : function(req, res) {
        db.Product.findAll({
            include: [
                {
                    association: 'comentarios'
                },
               {
                   association: "usuario"
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
           return res.render ('index', {result: resultado})})   
        .catch ((error)=>{
            res.send(error)
        })
},

    search: function (req, res) {
        db.Product.findAll({
            where:{
                [op.or]:[
                    {marca:{[op.like]:'%' + req.query.search + '%'}},
                    {modelo:{[op.like]:'%' + req.query.search + '%'}},
                    {descripcion:{[op.like]:'%' + req.query.search + '%'}}  
                ]
               
            },
            include: [
                {association: "usuario"}
            ]
            })
        .then((resultado)=>{
             res.render ('search', {result: resultado})
        })   
        .catch ((error)=>{
            res.send(error)
        })
},  
}

module.exports = indexController;

