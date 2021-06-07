module.exports= (sequelize, DataTypes) => {

    let alias = "Comment";

    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        id_usuario: {
            type: DataTypes.INTEGER
        },  //foreign key

        id_producto: {
            type: DataTypes.INTEGER
        },  //foreign key

        comentario: {
            type: DataTypes.STRING
        },

        fecha: {
            type: DataTypes.DATE
        },
    }

    let config = {
        tableName: "comentarios",
        timestamps: false,
    }


    const Comment =  sequelize.define(alias, cols, config)
    
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: 'usuarios',
            foreignKey: 'id_usuario'
        })
        Comment.belongsTo(models.Product, {
            as: 'producto',
            foreignKey: 'id_producto'
        })
    }
    return Comment;

}
