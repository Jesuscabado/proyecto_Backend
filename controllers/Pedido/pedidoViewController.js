import pedidoController from "./pedidoController.js";

const getAll = async (req, res) => {
    let result = await pedidoController.getAll();
    if(result[0] == 0){
        res.render("pedido", {pedidos: result[1]});
    }else {
        let error = result[1];
      res.status(500).send({
        message: error.message || "Error al obtener los productos del pedido"
      });
    }
};

const getById = async (req, res) => {
    let id = req.params.id;
    let result = await pedidoController.getById(id);

    if(result[0] == 0){
        let pedido = result[1];
        if(!pedido){
            res.status(404).send({
                message: `Pedido no encontrado con id: ${id}`
            });
        }else{
            res.render("pedido/carrito", {pedido: pedido});
        }
    }else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al obtener el pedido"
        });
    }
};

const createPedido = async (req, res) => {
    let userEmail = req.user.email;
    let date = new Date();
    let estado = "pendiente";
    let pedido = await pedidoController.createPedido(userEmail, date, estado);
    return pedido;
}

const addProducto = async (req, res) => {
    let userEmail = req.user.email;
    let pedido = await pedidoController.addProducto(userEmail);
    if (!pedido) {
        pedido = await createPedido(req, res);
    }
    let idproducto = req.query.idproducto;
    let cantidad = req.query.cantidad;
    let idpedido = pedido.idpedido;
    let producto = await pedidoController.addProducto(idproducto);
    if (!producto) {
        return res.status(404).send({
            message: "Producto no encontrado"
        });
    }
    let result = await pedidoController.addProducto(idpedido, idproducto, cantidad);
    if (result[0] == 0) {
        res.redirect("/pedido");
    } else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al agregar el producto al pedido"
        });
    }
};
    


const pedidoView = async (req, res) => {
    let result = await pedidoController.getAll();
    if(result[0] == 0){
        res.render("pedido", {pedidos: result[1]});
    }else {
        let error = result[1];
      res.status(500).send({
        message: error.message || "Error al obtener los productos del pedido"
      });
    }
};

export default {
    getAll,
    createPedido,
    getById,
    addProducto,
    pedidoView
};