import connection from "../config/sequelize.js";
import Sequelize from "sequelize";
/* import Pedido from "./pedido.js";
import Pedidos_has_producto from "./pedidos_has_productos.js"; */
 
const Producto = connection.define("productos", {
    idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
    },
    nombre: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    precio: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        unsigned: true
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    create_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, 
{
    freezeTableName: true,
    timestamps: false
});

export default Producto;
