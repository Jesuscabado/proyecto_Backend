
import connection from "../config/sequelize.js";
import Sequelize from "sequelize";
const Pedido = connection.define("pedidos", {

    idpedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
    },
    email_user: {

        type: Sequelize.STRING(45),

        allowNull: false,
        unique: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING(45),
        allowNull: false, 

        defaultValue: 'pendiente',
        validate: {
          isIn: [['pendiente', 'preparado', 'enviado', 'cancelado']]
        }
      },
},
{
    freezeTableName: true,
    timestamps: false
});







export default Pedido;