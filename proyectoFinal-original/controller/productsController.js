// const { eq } = require("sequelize/types/lib/operators");
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
            {include: [{association: "comentarios"}, {association: "usuario"}]
        })
        .then((resultado) => {
            return res.render('allProducts', { 
            products: resultado 
        });
    })
    .catch((error) => {
        return res.send(error);
    })
},
    
    productEdit: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then((resultado) => {
            return res.render('productEdit', { 
            result: resultado 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
},
    
    productEdited: function (req, res) {
        let newProduct = {
            foto_producto: '/images/' + req.file.filename,
            marca: req.body.marca,
            modelo:req.body.modelo,
            descripcion: req.body.descripcion,
            id_usuario: req.session.user.id,
        };
        db.Product.update(newProduct, {
            where: {
                id:req.params.id
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            return res.send(error);
        })

   
    /* .then(() => {
        req.flash ('succes', "Producto editado correctamente");
        return res.redirect('/product/')
    })
    .catch((error) => {
        next(error)
        req.flash ('danger', "No se ha podido editar el producto");
    }) */
},

    comment: function (req, res) {
        req.body.id_usuario = req.session.user.id
        req.body.id_producto = req.params.id

        db.Comment.create(req.body, {
            order:[
                ["fecha" , "DESC"]
            ],
        }) 
       .then((resultado) => {
            return res.redirect(req.get("Referrer"));
        })
        .catch((error) => {
            return res.send(error);
        })
},

    delete: function (req, res) {
         let usuario = db.User.findByPk(req.session.user.id)
        db.Product.destroy({
            where: {id:req.params.id}
        })
        .then((resultado) => {
            return res.redirect("/");
        })
        .catch((error) => {
            return res.send(error);
        })
}, 
}

module.exports = productsController;
    





    