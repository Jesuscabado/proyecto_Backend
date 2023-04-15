import { Router } from "express";
import { isAuthorized,isAdmin } from "../../middlewares/auth.js";
import pedidoController from "../../controllers/Pedido/pedidoViewController.js";
import upload from "../../middlewares/multer.js";
const router = Router();

router.get("/", isAuthorized,isAdmin , (req, res) => {
    pedidoController.getAll(req, res);
});
//ruta para agregar producto al carrito

/*  router.get("/pedido",isAuthorized, (req, res) => {
    pedidoController.getById(req, res);
}); */


router.get("/pedido/:id", isAuthorized, (req, res) => {
    pedidoController.getById(req, res);
});
 
router.get 

export default router;

