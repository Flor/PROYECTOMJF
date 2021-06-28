let db = require("../database/models");
const Product = require('../database/models/Product');
const User = require('../database/models/User');


let usersController = {
    index: function (req, res) {
        db.User.findAll({
            include: [{association: "comentarios"}]
        })
        .then((resultado) => {
            return res.render('users/usersIndex', { 
                result: resultado 
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
        db.User.findByPk(req.params.id)
        .then((data) => {
            return res.render('profileEdit', { 
            result: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
},
    
    profileEdited: function (req,res) {
        if (req.method = 'POST'){
            let editedProfile = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email:req.body.email,
            password: req.body.password,
            };
        if (req.file) {
            editedProfile.fotodeperfil = '/images/' + req.file.filename;
        }
        if (req.fecha_nacimiento) {
            editedProfile.fecha_nacimiento = req.body.fecha_nacimiento;
        }

        db.User.update(editedProfile, {
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            req.flash ('success', 'Perfil editado correctamente');
            res.redirect ('/profile' + req.params.id, { 
                result: data 
            })
        })
        .catch (() => {
            next(error)
            req.flash ('danger', 'Algo salió mal');
        })
        }
        if (req.method == 'GET'){
            return res.render('profileEdit');
        }
},

    register: function(req, res) {
        return res.render ('register')
},

    login: function(req, res) {
        return res.render ('login')
},
}

module.exports = usersController;


