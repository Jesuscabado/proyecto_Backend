import { Router }  from "express";
import authRouter from "./auth.js";
import productoRouter from "./producto.js";
import { isAuthorized } from "../../middlewares/auth.js";
import pedidoRouter from "./pedido.js";
const router = Router();

router.use("/pedidos", pedidoRouter);
router.use("/productos", productoRouter);
router.use("/", authRouter);
router.use("/", isAuthorized);

router.use("/", (req, res) => {
    const auth = req.user;
    res.render("index", {auth});
});

export default router;
 
