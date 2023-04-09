 import  connection from "../config/sequelize.js";
 import  Sequelize  from "sequelize";


 const Producto = connection.define("productos", {
      idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
           
        },
        descripcion: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        precio: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            unsigned: true,
        },
        imagen: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
        }
},
    {
        freezeTableName: true,
        timestamps: false,
        
});
export default Producto;