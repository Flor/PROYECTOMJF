let buzos = require ("../data/data");
const { json } = require ('express') 



let indexController = { 
    index : function(req, res) {
        return res.render ('index', {buzos_buzos: buzos.lista})
    },


    search: function (req, res) {
        let buzos_buzos= buzos.lista
        let search = req.query.search
        let result = [];

        for (let i = 0; i < buzos_buzos.length; i++) {
            if (buzos_buzos.includes(search)) {
                result.push(element)
            }
        
        }
        res.render ("search", {search: search, result:result})
        
    }, 
   
}




module.exports = indexController;

    