import pedidoController from "./pedidoController.js";
import { isAdmin } from "../../middlewares/auth.js";

const getAll = async (req, res) => {
    let result = await pedidoController.getAll(req.user);
    if(result[0] == 0){
        res.render("pedido/list", {pedidos: result[1]});
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
    console.log(JSON.stringify(result));
    if(result[0] == 0){
        let pedido = result[1];
        if(!pedido){
            res.status(404).send({
                message: `Pedido no encontrado con id: ${id}`
            });
        }else{
            res.render("pedido/show", {pedido: pedido});
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
    let idproducto = req.params.productid;
    let cantidad = req.query.cantidad ? req.query.cantidad : 1;
    let result = await pedidoController.addProducto(userEmail, idproducto, cantidad);
    if (result[0] == 0) {
        res.redirect("/productos");
    } else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al agregar el producto al pedido"
        });
    }
};

const deleteProducto = async (req, res) => {
    let userEmail = req.user.email;
    let idproducto = req.params.productid;
    let result = await pedidoController.deleteProducto(userEmail, idproducto);
    if (result[0] == 0) {
        res.redirect("/pedidos");
    } else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Error al eliminar el producto del pedido"
        });
    }
};


const pedidoView = async (req, res) => {
    let result = await pedidoController.getAll();
    if(result[0] == 0){
        res.render("pedido", {pedidos: result[1]});
    }else {
        let error = result[1]; 
      res.render ("pedido", {error: error.message || "Error al obtener los productos del pedido"});
    }
};

export default {
    getAll,
    createPedido,
    getById,
    addProducto,
    pedidoView,
    deleteProducto
}; 