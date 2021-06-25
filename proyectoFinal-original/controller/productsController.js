let db = require("../database/models");
const op = db.Sequelize.Op;

let productsController = {
    product: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: "comment"}, {association: "user"} ]
        })
        .then((resultado) => {
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
}

module.exports = productsController;
    




module.exports = productsController;
    