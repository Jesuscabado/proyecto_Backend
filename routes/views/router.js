import { Router } from "express";
import JuegoRouter from "./juego.js";


const router = Router();

router.use("/juegos", JuegoRouter);





export default router;
