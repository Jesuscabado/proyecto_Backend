import { Router } from 'express';
import juegoController from '../../controllers/juegoController.js';

const router = Router();
//una ruta que muestre todos los juegos

router.get('/juegos', (req, res) => {
    juegoController.getAll(req, res);
});
/* router.get('/', (req, res) => {
    juegoController.getAll(req, res);
}); */

router.get('/juegos/:id', (req, res) => {
    juegoController.getById(req, res);
});

router.get("/new", (req, res) => {
    juegoController.create(req, res);
});


export default router;