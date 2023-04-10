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
    try {
        let producto = await Producto.findByPk(id, {
        attributes: ["idproducto", "nombre", "descripcion", "precio", "stock", "create_date"],
        
         });
        return [0, producto];
    } catch (error) {
        return [1, error];
    }
};


/* const update = async (data, idproducto) => {//
   try {
    let producto = await Producto.update(data, {
        where: {
             idproducto: idproducto,
            },
        });

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
} */


export default {
    getAll,
    getById,
    /* create,
    update,
    deletes */
}
