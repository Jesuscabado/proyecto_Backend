import Pedido from "../../models/pedido.js";
import Pedidos_has_productos from "../../models/pedidos_has_productos.js";
import Productos from "../../models/producto.js";


  const getAll = async () => {
    try {
        const pedidos = await Pedido.findAll({
            attributes: ["idpedido", "email_user","date","estado", ],
            include: [
                {model: Productos,
                attributes: ["nombre", "precio"],
                as: "productos"},
                {model:Pedidos_has_productos,
                attributes: ["cantidad"],
                as: "pedidos_has_productos"}]
        });
        return [0, pedidos];
    } catch (error) {
        return [1, error];
    }
}; 
const getByUserEmail = async (email) => {
    try {
        const pedido = await Pedido.findOne({
            where: {
                email_user: email
            },
            attributes: ["idpedido", "email_user","date","estado", ],
        });
        return [0, pedido];
    } catch (error) {
        return [1, error];
    }
};

const pendienteByUserEmail = async (email) => {
    try {
        const pedido = await Pedido.findOne({
            where: {
                email_user: email,
                estado: "pendiente"
            },
            attributes: ["idpedido", "email_user","date","estado", ],
        });
        return [0, pedido];
    } catch (error) {
        return [1, error];
    }
};

const getById = async (id) => {
    try {
        const pedido = await Pedido.findByPk(id,{
            attributes: ["idpedido", "email_user","date","estado", ],
            include: [
                {model: Productos,
                attributes: ["nombre", "precio"],
                as: "productos"},
                {model:Pedidos_has_productos,
                attributes: ["cantidad"],
                as: "pedidos_has_productos"}]
        });
        return [0, pedido];
    } catch (error) {
        return [1, error];
    }
}; 


    
const createPedido = async (email) => {
    try {
        let pedido = await Pedido.create({
            email_user: email,
            estado: "pendiente",
            date: new Date()
        });
        return  [0, pedido];
    } catch (error) {
        return [1, error];
    }
};
    
 

const addProducto = async (email, idproducto, cantidad) => {
    try {
        let pedido = await pendienteByUserEmail(email);
        if (pedido[0] == 1) {
            return pedido;
        }
        pedido = pedido[1];
        if (!pedido) {
            pedido = await createPedido(email);
            pedido = pedido[1];
        }
        console.log(pedido);
        Pedidos_has_productos.create({
            idpedido: pedido.idpedido,
            idproducto: idproducto,
            cantidad: cantidad
        });
    

        return  [0, pedido];
    } catch (error) {
        return [1, error];
    }
};
  

const updatePedido = async (data, idpedido) => {
    try {
        let pedido = await Pedido.update(data, {
            where: {
                idpedido: idpedido
            }
        });
        return [0, pedido];
    } catch (error) {
        return [1, error];
    }
};

    

/* Pedido.belongsToMany(Producto, {
    through: "pedidos_has_productos",
    timestamps: false, 
    foreignKey: "idproducto"
});

Producto.belongsToMany(Pedido, {
    through: "pedidos_has_productos",
    timestamps: false,
    foreignKey: "idpedido"

});
 */const deleteProducto = async (idpedido) => {
    try {
        let pedido = await Pedido.destroy({
            where: {
                idpedido: idpedido
            }
        });
        return [0, pedido];
    } catch (error) {
        return [1, error];
    }
};


 

export default {
    getAll,
    createPedido,
    getById,
    addProducto,
    updatePedido,
    deleteProducto,
    getByUserEmail,
    pendienteByUserEmail
}