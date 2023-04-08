import { Router } from "express";
import JuegoRouter from "./juego.js";


const router = Router();

router.use("/juegos", JuegoRouter);
router.get("/juegos", (req, res) => {
    res.render("juegos");
});
router.get("/juegos/:id", (req, res) => {
    res.render("juego");
});

router.get("/", (req, res) => {
    res.render("index");
});
export default router;



