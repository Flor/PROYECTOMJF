//const { DataTypes } = require('sequelize/types');

//const sequelize = require()

module.exports= (sequelize, DataTypes) => {

    let alias = "Usuario";

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

        username: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
    }



    const Usuario =  sequelize.define(alias, cols, config);
    return Usuario;

}

