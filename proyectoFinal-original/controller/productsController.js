let db = require("../database/models");
const op = db.Sequelize.Op;

let productsController = {
    product: function (req, res) {
        db.Product.findByPk(req.params.id , {
            include: [{association: "comentarios", include: [{association: "usuarios"}] }, {association: "usuario"} ]
        } )
        .then((resultado) => {
            console.log(resultado.comentarios[0]);
        
            return res.render('product', { 
            result: resultado 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
},
    productAdd: function (req, res) {
            return res.render('productAdd')
             
},
    store: function (req, res) {
        let newProduct = {
            foto_producto: '/images/' + req.file.filename,
            marca: req.body.marca,
            modelo:req.body.modelo,
            talle:req.body.talle,
            fecha_publicacion: req.body.fecha_publicacion,
            descripcion: req.body.descripcion,
            id_usuario: req.session.user.id,
        };
        db.Product.create(newProduct)
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            return res.send(error);
        })
},   

   allProducts: function (req, res) {
        db.Product.findAll(
            {include: [{association: "comentarios"}]
        })
        .then((data) => {
            return res.render('allProducts', { 
            products: data 
        });
    })
    .catch((error) => {
        return res.send(error);
    })
},
    productEdit: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then((data) => {
            return res.render('productEdit', { 
            product: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },


    comment: function (req, res) {
        req.body.id_usuario = req.session.user.id
        req.body.id_producto = req.params.id

        db.Comment.create(req.body, {
            order:[
                [
                    "fecha" , "DESC"
                ]
            ],
        }) 
       
        .then((data) => {
            return res.redirect(req.get("Referrer"));
        })

        .catch((error) => {
            return res.send(error);
        })
    },

   /*  delete: function (req, res) 

        db.Comment.create(req.body)
        .then((data) => {
            return res.redirect(req.get("Referrer"));
        })
        .catch((error) => {
            return res.send(error);
        })
    }, */
}

module.exports = productsController;
    





    