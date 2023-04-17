import { authenticate, isAdmin } from "../../middlewares/auth.js"; 
import userController from "../../controllers/user/userController.js";
import { Router } from "express";


const router = Router();

router.get("/login", (req, res) => { 
    userController.loginForm(req,res); 
});

//Mostrar todos los usuarios
router.get("/users", isAdmin, (req, res) => {
    userController.getAll(req,res);
});

//Mostrar un usuario
router.get("/users/:id", (req, res) => {
    userController.getById(req,res);
});

//Mostras el formulario de edición de un usuario
router.get("/users/edit/:id", isAdmin, (req, res) => {
    userController.updateForm(req,res);
});

//Editar un usuario
router.post("/users/edit/:id", isAdmin, (req, res) => {
    userController.update(req,res); 
});

router.post("/login", authenticate, (req, res) => {
    userController.login(req,res); 
});

router.get("/logout", (req, res) => {
    userController.logout(req,res);
});

router.get("/register", (req, res) => {
    userController.registerForm(req,res);
});

router.post("/register", (req, res) => {
    userController.create(req,res);
});

export default router;