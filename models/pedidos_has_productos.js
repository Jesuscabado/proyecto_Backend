import connection from "../config/sequelize.js";
import Sequelize from "sequelize";
import Pedido from "./pedido.js";
import Producto from "./producto.js";
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
        unsigned: true
    },

},
{
    freezeTableName: true,
    timestamps: false
});

Pedidos_has_productos.belongsTo(Pedido, {
    foreignKey: "idpedido"
});
Pedidos_has_productos.belongsTo(Producto, {
    foreignKey: "idproducto"
});

Pedido.hasMany(Pedidos_has_productos, {
    foreignKey: "idpedido"
});

Producto.hasMany(Pedidos_has_productos, {
    foreignKey: "idproducto"
});

Producto.belongsTo(Pedido, {
    through: Pedidos_has_productos,
    foreignKey: "idproducto"
});

Pedido.belongsTo(Producto, {
    through: Pedidos_has_productos,
    foreignKey: "idpedido"
});


export default Pedidos_has_productos;

