/* import Pedido from "../../models/pedido.js"; */
import Producto from "../../models/producto.js";

const getAll = async () => {
    try {
        let productos = await Producto.findAll({
             attributes: ["idproducto", "nombre", "descripcion", "precio", "stock", "create_date"],
        });
        return [0, productos];
    } catch (error) {
        return [1, error];
    }
};
    const getById = async (id) => {
    try  {
        let producto = await Producto.findByPk(id, {
        attributes: ["idproducto", "nombre", "descripcion", "precio", "stock", "create_date"],
         });
        return [0, producto];
    }  catch  (error)  {
        return [1, error];
    }
};

const create = async (data) => {
    try{
        let producto = await Producto.create(data);
        return [0, producto];
    } catch (error) {
      return [1, error];
    }
};
const update = async (data, idproducto) => {//
   try {
    let producto = await Producto.update(data, {
        where: {
             idproducto: idproducto,
        },
    });
    if (req.file) {
        console.log("file",req.file.path.splith("public")[1]);
        producto.imagen = req.file.path.splith("public")[1];
    }
    return [0, producto];
    } catch (error) {
        return [1, error];
    }
};

const deletes = async (idproducto) => {
    try{
        let producto = await Producto.destroy({
            where: {
                idproducto: idproducto
            }
        });
        return [0, producto];
    }catch(error){
        return [1, error];
    }
} 



export default {
    getAll,
    getById,
    create,
    update,
    deletes
}

/*   const getAll = async () => {
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
    addProducto,
    updatePedido,
    deleteProducto
}
*/
