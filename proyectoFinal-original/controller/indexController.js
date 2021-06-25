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
            /*let masComentados= resultado.sort((a,b)=> {
                if(a.cantidad_comentarios < b.cantidad_comentarios) {return 1}
                else {return -1}
            })*/
            
            return res.render ('index', 
            {result: resultado, /*masComentados: masComentados*/})})   
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
        .then((resultado)=>{return res.render ('search', {result: resultado})})   
        .catch ((error)=>{
            res.send(error)
        })
    },  
   
}

module.exports = indexController;
