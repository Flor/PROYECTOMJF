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
                result: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
  },

    profile: function (req, res, next) {
        db.User.findByPk(req.params.id, {
            include: [
                {association: "comentario"},
                {association: "producto"}
            ]
        })
        .then((user) => {
            console.log(user.comentario)
            console.log(user.producto)

            return res.render ('profile',{
                    'usuario' : user,
                    'imagen': user.fotoPerfil, 
                    'idUsuario': user.id,
                    
                });
           
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


