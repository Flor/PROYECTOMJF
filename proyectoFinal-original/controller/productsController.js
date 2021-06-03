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
             //AGREGAR EL OTRO METODO DE AGREFAR A LA DATABASE
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
    