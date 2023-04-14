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


<<<<<<< HEAD
=======



>>>>>>> 759a9797ced484e89799c0aac05908f61b773918
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
        throw new Error(error);
        //return [1, error];
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



