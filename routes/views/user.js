/* import { Router } from "express";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
import upload from "../../middlewares/multer.js";
import userController from "../../controllers/user/userController.js";
const router = Router();

router.get("/", (req, res) => {
    userController.getAll(req, res);
});

router.get("/user/:id", isAuthorized, (req, res) => {
    userController.getById(req, res);
});

router.get("/user/edit/:id", isAdmin, (req, res) => {
    userController.updateForm(req, res);
});

router.post("/", isAdmin, (req, res) => { //no se si es necesario
    userController.create(req, res);
});

router.post("/user/edit/:id", [isAdmin, upload.single("photo")], (req, res) => { //editar el usuario
    userController.update(req, res);
});

router.delete("/user/:id", isAdmin, (req, res) => {
    userController.deletes(req, res);
});

export default router;
 */

