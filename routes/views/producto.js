import { Router} from "express";
import { isAuthorized,isAdmin } from "../../middlewares/auth.js";  
import upload from "../../middlewares/multer.js";
import productoController from "../../controllers/producto/productoViewController.js";

const router = Router();

router.get("/", isAuthorized, (req,res) => { 
    productoController.getAll(req,res);
});

router.get("/producto/:id", (req, res) => {
    productoController.getById(req,res);
});
 
router.get("/new", isAdmin, (req,res) => {
    productoController.createForm(req,res);
});

router.post("/new", isAdmin,(req,res)=> {
    productoController.create(req,res);
});

router.get("/edit/:id", isAdmin, (req,res) =>{
    productoController.updateForm(req,res);
});

router.post("/edit/:id", [isAuthorized, upload.single("photo")], (req, res) => {
    productoController.update(req,res);
});

router.post("/delete/:id",isAuthorized, isAdmin, (req, res) => {
    productoController.deletes(req,res);
}); 

export default router; 

