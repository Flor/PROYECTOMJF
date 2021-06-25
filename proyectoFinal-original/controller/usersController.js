let db = require("../database/models");
const Product = require('../database/models/Product');
const User = require('../database/models/User');


let usersController = {
    index: function (req, res) {
        db.User.findAll({
            include: [{association: "comentarios"}]
        })
        .then((data) => {
            return res.render('users/usersIndex', { 
                users: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
  },

    profile: function (req, res, next) {
        db.User.findByPk(req.params.id)
        .then((user) => {
            db.Product.findAll({
                where: { id_usuario: user.id },
                
                include: [
                    {association: "Comment"},
                    {association: "Product"}
                ]
    
            })
            .then((products) => {
                res.render ('profile',{
                    'usuario' : user,
                    'imagen': user.fotoPerfil, 
                    'idUsuario': user.id,
                    'productos': products,
                    "comentarios": comentarios,
                });
            })
            .catch ((error) => {
                return res.send(error);
            })
        })
        .catch ((error) => {
            return res.send(error);
        })
    },
    
    
    profileEdit: function (req, res) {
        let id = req.params.id;
            return res.render ('profileEdit')
    },

    register: function(req, res) {
        return res.render ('register')
    },

    login: function(req, res) {
        return res.render ('login')
     },
}

module.exports = usersController;


