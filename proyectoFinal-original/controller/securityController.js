let db = require("../database/models");
const bcrypt = require("bcryptjs");


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
        .catch((error) => { 
           console.log(error)
            throw error
        })
        
},

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
       
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId"); 
        return res.redirect("/");
}
}

module.exports = securityController;