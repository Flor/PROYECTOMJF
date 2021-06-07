let db = require("../database/models");
const Product = require('../database/models/Product');
const User = require('../database/models/User');


let usersController = {
    index: function (req, res) {
        db.User.findAll()
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
                where: [
                    {id_usuario:req.params.id}
                ]
            })
        })
            .then((product) => {
                return res.render ('profile',{
                    'usuario' : usuario,
                    'imagen': imagen, 
                    'idUsuario': id_usuario,
                    'producto': producto,
                });
            })
            .catch ((error) => {
                return res.send (error);
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


