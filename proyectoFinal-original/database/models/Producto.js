module.exports= (sequelize, DataTypes) => {

    let alias = "Producto";

    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        imagen: {
            type: DataTypes.STRING
        },

        marca: {
            type: DataTypes.STRING
        },

        modelo: {
            type: DataTypes.STRING
        },

        talle: {
            type: DataTypes.STRING
        },

        fecha_publicacion: {
            type: DataTypes.DATE
        },

        descripcion: {
            type: DataTypes.STRING
        },

        id_usuario: {
            type: DataTypes.INTEGER
        } //foreign key
    }

    let config = {
        tableName: "productos",
        timestamps: false,
    }



    const Producto =  sequelize.define(alias, cols, config)
    return Producto;

}

