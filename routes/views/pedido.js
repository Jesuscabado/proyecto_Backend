import { Router } from "express";
import { isAuthorized } from "../../middlewares/auth.js";
import carritoController from "../../controllers/pedido/carritoController.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
    carritoController.getAll(req, res);
});
//ruta para agregar producto al carrito
/* router.get("/add/:id", isAuthorized, (req, res) => {
    carritoController.addProducto(req, res);
}); */
router.get ("/carrito",isAuthorized, (req, res) => {
    carritoController.createPedido(req, res);
});

export default router;