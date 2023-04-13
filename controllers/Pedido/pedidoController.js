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

    

const deleteProducto = async (idpedido) => {
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
    deleteProducto
}