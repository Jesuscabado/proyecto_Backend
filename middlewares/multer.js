import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirname = path.resolve();
        cb(null, path.join(dirname, "public", "uploads"));
    }
    , filename: function (req, file, cb) {
        const nombre = req.body.nombre; 
        cb(null, nombre + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => { //middleware para filtrar archivos que no sean .jpg
    if (!file.originalname.match(/\.(jpg)$/)) {
        return cb("Solo se permiten archivos .jpg");
    }
    cb(null, true);
}


const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;