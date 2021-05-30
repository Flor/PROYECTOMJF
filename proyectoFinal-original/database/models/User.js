
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

    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
    }



    const User =  sequelize.define(alias, cols, config);
    return User;

}

