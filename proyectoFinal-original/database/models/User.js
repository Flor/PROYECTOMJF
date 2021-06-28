
module.exports= (sequelize, DataTypes) => {

    let alias = "User";

    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        nombre: {
            type: DataTypes.STRING
        },

        apellido: {
            type: DataTypes.STRING
        },

        fecha_nacimiento: {
            type: DataTypes.DATE
        },

        dni: {
            type: DataTypes.DECIMAL
        },

        email: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },

        fotodeperfil: {
            type: DataTypes.STRING
        },

    

    }

    let config = {
        tableName: "usuarios",
        
    }



    const User =  sequelize.define(alias, cols, config);

    User.associate = function (models){
        User.hasMany(models.Comment,{
            as: 'comentario',
            foreignKey: 'id_usuario'
        })
        User.hasMany(models.Product,{
            as: 'producto',
            foreignKey: 'id_usuario'
        })
    }
        return User;
}

