let db = require("../database/models");

let securityController = {
    login: function(req, res) {
        return res.render ("security/login", {failed: req.query.failed});
        
    },


    authenticate: function(req, res) {
        
        db.User.findOne(/*{where: {email: req.body.email} (usemos username nosotros)}*/) 
        .then ((user) => {
           /*  if (req.body.password == user.password) {
                req.session.user = user; // estoy guardando todos los datos del usuario en la sesion
                return res.redirect ("/");
            } */
            return res.send(user)
            //res.redirect("/login?failed=true"); /*como no quiero usar ni sessions ni locals le paso el error por GET*/
        })
        .catch((error) => { /*findOne si no encuentrta ninguno tira error, si encuentra mas de 1 te manda el primero*/
           console.log(error)
            return res.redirect("/login?failed=true");
        })
    },

    register: function(req, res) {
        if(req.method == "POST") {
            db.User.create(req.body)
            .then (() => {
                return res.redirect("/")
            })
            .catch ((error) => {
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
            return res.redirect("/");
        }

}

module.exports = securityController;