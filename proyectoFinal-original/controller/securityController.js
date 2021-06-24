let db = require("../database/models");
const bcrypt = require("bcryptjs");

let securityController = {
    login: function(req, res) {
        return res.render ("security/login", {failed: req.query.failed}); 
    },


    authenticate: function(req, res) {
        db.User.findOne({where: {email: req.body.email} /*(usemos username nosotros)*/}) 
        .then ((user) => {
           if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = user; // estoy guardando todos los datos del usuario en la sesion
                if (req.body.rememberme) {
                    res.cookie("userId", user.id, {maxAge: 1000 * 60 * 60 * 24 * 365}) //maxAge esta configurado en 1000 segundos
                }
                return res.redirect ("/");
            } 
            res.redirect("/login?failed=true"); /*como no quiero usar ni sessions ni locals le paso el error por GET*/
        })
        .catch((error) => { /*findOne si no encuentrta ninguno tira error, si encuentra mas de 1 te manda el primero*/
           console.log(error)
            throw error
        })
    },

    /*como creo mi primer usuario?. si yo hasheo las contraseñas.. */

    register: function(req, res) {
        if(req.method == "POST") {
            req.body.password = bcrypt.hashSync(req.body.password,10)
            let newUser={
                ...req.body,
               fotodeperfil: req.file.filename
            }
            db.User.create(newUser)
            .then (() => {
                req.flash('info', 'User registered succesful')
                return res.redirect("/")
            })
            .catch ((error) => {
                req.flash('danger', 'Something went wrong')
                return res.send(error)
            })
        }
        if(req.method == "GET") {
            return res.render("security/register");
        }
        },
        /*register en un solo metodo es mejor porque le puedo pasar variables en comun, y puedo compartir funciones entre ellos, puedo hacer cosas en comun*/

    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId"); //Destruye la cookie(pero solo si hace log out, si no hace log out te queda iniciado sesion)
        return res.redirect("/");
    }

}

module.exports = securityController;