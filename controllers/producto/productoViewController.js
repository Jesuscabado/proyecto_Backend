import productoController from "./productoController.js";
/* import pedidoController from "./pedido/pedidoController.js"; */

const getAll = async (req, res) => {
    let result = await productoController.getAll();
    if(result[0] == 0){
        res.render("producto/list", {productos: result[1]});
    }else{
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al obtener los productos"
        });
    }
};

const getById = async (req, res) => {
    let id = req.params.id;
    let result = await productoController.getById(id);
    if(result[0] == 0){
        let producto = result[1];
        if(!producto) {
            res.status(404).send({
                message: `No se encontró el producto con id ${id}.`
            });
        }else{
            res.render("producto/show", {producto: producto});
        }
    }else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al obtener el producto"
        });
    }
};

/* const createForm = async (req, res) => {
    res.render("producto/new");
}; // esta funcion se encarga de renderizar la vista create


const create = async (req, res) => {
    let data = {
        nombre: req.body.nombre, 
        descripcion: req.body.descripcion, 
        precio: req.body.precio,
        imagen : req.body.imagen,
        stock : req.body.stock,
        create_date : req.body.create_date
    }
    let result = await productoController.create(data);

    if(result[0] == 0){
        res.redirect("/productos");
    }else {
        let error = result[1];
        let errorUri = encodeURIComponent(error.message);
        res.redirect(`/productos?error=${errorUri}`);
    }
}

const updateForm = async (req, res) => {
    let idproducto = req.params.id;
    let result = await productoController.getById(idproducto);
    let results = await pedidoController.getAll();

    const producto = result[1];
    const pedidos = results[1];

    res.render("producto/edit", {producto: producto, pedidos: pedidos});
};

const update = async (req, res) => {
    let data = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen : req.body.imagen,
        stock : req.body.stock,
        create_date : req.body.create_date
    }
    let idproducto = req.params.id;
    let result = await productoController.update(data, idproducto);
    if(result[0] == 0){
        res.redirect("/productos");
    }else {
        let error = result[1];
        let errorUri = encodeURIComponent(error.message);
        res.redirect(`/productos?error=${errorUri}`);
    }
}

const deletes = async (req, res) => {
    let idproducto = req.params.id;
    let result = await productoController.deletes(idproducto);
    res.redirect("/productos");
} */

export default {
    getAll,
    getById,
    /* createForm,
    create,
    updateForm,
    update,
    deletes */
}
