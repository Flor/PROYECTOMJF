let db = require("../database/models");
const op = db.Sequelize.Op;

let productsController = {
    product: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then((data) => {
            return res.render('product', { 
            products: data 
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
            //agregar igual q la columna de datos
            title: req.body.title,
            rating: req.body.rating,
        }
        db.Product.create(newMovie)
        .then(() => {
            res.redirect('product')
        })
        .catch((error) => {
            return res.send(error);
        })
},   

   allProducts: function (req, res) {
        db.Product.findAll()
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
    



/*
let productsController = {
    product : function(req, res) {
        let id = req.params.id 
        return res.render ('product', {buzos_buzos: buzos.lista, idSearch: id, users: users.lista})
    },

    productAdd: function(req, res) {
        let id = req.params.id 
        return res.render ('productAdd', {buzos_buzos: buzos.lista, users: users.lista, idSearch: id})
    },

    allProducts: function(req, res) {
        return res.render ('allProducts', {buzos_buzos: buzos.lista, users: users.lista})
    },

    productEdit: function(req, res) {
        let id = req.params.id 
        return res.render ('productEdit', {buzos_buzos: buzos.lista, users: users.lista, idSearch: id})
    },


}
*/


module.exports = productsController;
    