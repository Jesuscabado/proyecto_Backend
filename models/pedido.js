import  Connection from "../config/sequelize.js";
import  Sequelize  from "sequelize";
import Pedidos_has_productos  from "./pedidos_has_productos.js";


const Pedido = Connection.define("pedidos", {
    idpedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
        unique: true
    },
    email_user: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    date: {
        type: Sequelize.DATETIME,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING(45),
        allowNull: false,
        defaultValue: "pendiente",
        validate: {
            isIn: [["pendiente", "enviado", "entregado", "cancelado"]]
        }
    },
},
    {
        freezeTableName: true,
        timestamps: false,
    });

Pedido.belongsTo(Pedidos_has_productos, {
     foreignKey: "idpedido"
     });

Pedido.belongsToMany(Producto, {
     through: "pedidos_has_productos",
     timestamps: false,
     foreignKey: "idproducto"
     });

Producto.belongsToMany(Pedido, {
    through: "pedidos_has_productos",
    timestamps: false,
    foreignKey: "idpedido"
    });


export default Pedido;