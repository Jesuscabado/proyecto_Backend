import { Router } from "express";
import { isAuthorized,isAdmin } from "../../middlewares/auth.js";
import pedidoController from "../../controllers/Pedido/pedidoViewController.js";
import upload from "../../middlewares/multer.js";
const router = Router();

router.get("/", isAuthorized,isAdmin , (req, res) => {
    pedidoController.getAll(req, res);
});
//ruta para agregar producto al carrito


router.get("/:id", isAuthorized, (req, res) => {
    pedidoController.getById(req, res);
});

router.post("/", isAuthorized, (req, res) => {
    pedidoController.createPedido(req, res);
});

/* router.get("/edit/:id", isAuthorized, (req, res) => {
    pedidoController.editPedido(req, res);
});
 */



export default router;