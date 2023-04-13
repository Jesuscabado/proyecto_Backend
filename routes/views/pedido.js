import { Router } from "express";
import { isAuthorized,isAdmin } from "../../middlewares/auth.js";
import pedidoController from "../controllers/Pedido/pedidoViewController.js";

const router = Router();

router.get("/", isAuthorized,isAdmin , (req, res) => {
    pedidoController.getAll(req, res);
});
//ruta para agregar producto al carrito

 router.get("/carrito",isAuthorized, (req, res) => {
    pedidoController.createPedido(req, res);
});

router.get("/carrito/:id", isAuthorized, (req, res) => {
    pedidoController.addProducto(req, res);
});
 
router.get 

export default router;

