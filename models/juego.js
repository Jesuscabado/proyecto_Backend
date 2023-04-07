 import  connection from "../config/sequelize.js";
 import  Sequelize  from "sequelize";
 const Juego = connection.define("productos", {
      idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unsigned: true,
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false,
           
        },
        descripcion: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        precio: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
        }
},
    {
        timestamps: false,
        tableName: "productos",
});
export default Juego;