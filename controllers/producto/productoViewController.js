import productoController from "./productoController.js";

const getAll = async (req, res) => {
    let result = await productoController.getAll();
    if (result[0] == 0) {
        res.render("producto/list", { productos: result[1] });
    } else {
            let error = result[1];
            res.status(500).send({
                message: error.message || "Error al obtener los productos",
            });
  }
};

const getById = async (req, res) => {
    let id = req.params.id;
    let result = await productoController.getById(id);
    if (result[0] == 0) {
        let producto = result[1];
        if(!producto){
            res.status(404).send({
                message: `No se encontro el producto con id ${id}`,
            });
        }else{
            res.render("producto/show", { producto: producto });
        }
    } else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al obtener el producto",
        });
    }
};


export default {
    getAll,
    getById,
};