import { Router } from 'express';
import productoController from '../../controllers/producto/productoViewController.js';

const router = Router();
//una ruta que muestre todos los juegos

router.get('/', (req, res) => {
    productoController.getAll(req, res);
});

router.get("/producto/:id", (req, res) => {
    productoController.getById(req,res);
});
/* router.get('/juego/:id', (req, res) => {
    productoController.getById(req, res);
});

router.get("/new", (req, res) => {
    productoController.create(req, res);
});
 */

export default router;