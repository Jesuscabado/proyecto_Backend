import { Router } from 'express';
import juegoController from '../../controllers/juegoController.js';

const router = Router();

router.get('/', (req, res) => {
    juegoController.getAll(req, res);
});

router.get('/juego/:id', (req, res) => {
    juegoController.getById(req, res);
});

router.get("/new", (req, res) => {
    juegoController.create(req, res);
});


export default router;