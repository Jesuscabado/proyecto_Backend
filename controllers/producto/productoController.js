import Pedido from "../../models/pedido.js";
import Productos from "../../models/producto.js";


  const getAll = async () => {
    try {
        const pedidos = await Pedido.findAll({
            attributes: ["idpedido", "idusuario", "estado", "fecha"],
            include: {
                model: Productos,
                attributes: ["nombre", "precio"],
                as: "productos",
                through: {
                    attributes: ["stock"]
                }
            }
        });
        return [0, pedidos];
    } catch (error) {
        return [1, error];
    }
}; 

const createPedido = async (id) => {
    try {
        let pedido = await Pedido.create({
            idusuario: id,
            estado: "pendiente",
            fecha: new Date()
        });
        return  [0, pedido];
    } catch (error) {
        return [1, error];
    }
};
    
 

const addProducto = async () => {
    try {
        let pedido = await Pedido.create({
            idusuario: id,
            estado: "pendiente",
            fecha: new Date()
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

    

const deleteProducto = async () => {
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
    addProducto,
    updatePedido,
    deleteProducto
}

