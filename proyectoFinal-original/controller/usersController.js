//let buzos = require ("../data/data");
//let users = require ("../data/users");
let db = require("../database/models");


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

    profile : function(req, res) {
        let idUsuario = req.params.id
        return res.render ('profile', {buzos_buzos: buzos.lista, users: users.lista, idSearch: idUsuario})
    },

    profileEdit: function(req, res) {
        //let id = req.params.id
        return res.render ('profileEdit', {producto: buzos.lista, users: users.lista})
    },

    register: function(req, res) {
        return res.render ('register', {title: "Registrate"})
    },

    login: function(req, res) {
        return res.render ('login', {title: "Iniciar Sesion"})
     },
}

module.exports = usersController;





/*let usersController = {

    profile : function(req, res) {
        let idUsuario = req.params.id
        return res.render ('profile', {buzos_buzos: buzos.lista, users: users.lista, idSearch: idUsuario})
    },

    profileEdit: function(req, res) {
        //let id = req.params.id
        return res.render ('profileEdit', {producto: buzos.lista, users: users.lista})
    },

    register: function(req, res) {
        return res.render ('register', {title: "Registrate"})
    },

    login: function(req, res) {
        return res.render ('login', {title: "Iniciar Sesion"})
     },
}*/

