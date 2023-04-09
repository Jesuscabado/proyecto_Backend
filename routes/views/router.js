import { Router } from "express";
import productoRouter from "./producto.js";


const router = Router();

router.use("/productos", productoRouter);
/* router.use("/", authRouter);
router.use("/", (req, res) => {
    const auth = req.user;
    res.render("index", {auth});
});
 */
export default router;



