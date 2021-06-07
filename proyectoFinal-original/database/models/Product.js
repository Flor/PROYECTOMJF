module.exports= (sequelize, DataTypes) => {

    let alias = "Product";

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
        } 
    }

    let config = {
        tableName: "productos",
        timestamps: false,
    }



    const Product =  sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        })
        Product.hasMany(models.Comment, {
            as: 'comentarios',
            foreignKey: 'id_producto'
        })
    }
    

    return Product;

}

