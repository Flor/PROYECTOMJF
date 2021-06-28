let db = require("../database/models");
const bcrypt = require("bcryptjs");

/* let securityController = {
    login: async function(req, res, next) {
        let user = await db.User.findOne({where: {username: req.body.username} });
        if (user && bcrypt.compareSync (req.body.password, user.password)) {
       
        if(req.body.rememberme) {
           res.cookie('user',userId)
           }
            req.flash('info', 'welcome!');
            req.session.user = user;
           
           } else { req.flash ('danger', 'usuario no registrado');
    };
 */

let securityController = {
    login: function(req, res) {
        return res.render ("security/login", {failed: req.query.failed, fraseerror: "Hubo un error al ingresar sus datos"}); 
    },


    authenticate: function(req, res) {
        db.User.findOne({where: {email: req.body.email} }) 
        .then ((user) => {
        if (user) {
            let condicion = bcrypt.compareSync(req.body.password, user.password)
            console.log(condicion)
            console.log(req.body.password)
           if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = user; 
                if (req.body.rememberme) {
                    res.cookie("userId", user.id, {maxAge: 1000 * 60 * 60 * 24 * 365}) 
                }
                return res.redirect ("/");

            } else {
                return req.flash('danger', 'algo salio mal');
                }
                
        }
            res.redirect("/login?failed=true"); 
        
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
                // req.flash('info', 'User registered succesful');
                res.redirect("/login");
            })
            .catch ((error) => {
                // req.flash('danger', 'Something went wrong')
                return res.send(error); /* req.flash('danger', 'algo salio mal'); */
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