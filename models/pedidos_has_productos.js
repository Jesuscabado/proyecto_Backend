import connection from "../config/sequelize.js";
import Sequelize from "sequelize";

const Pedidos_has_productos = connection.define("pedidos_has_productos", {
    idpedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,

    },
    idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
    },
    
},
    {
        freezeTableName: true,
        timestamps: false,
    });

export default Pedidos_has_productos;