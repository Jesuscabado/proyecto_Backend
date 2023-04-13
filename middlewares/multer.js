import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirname = path.resolve();
        cb(null, path.join(dirname, "public", "uploads"));
    }
    , filename: function (req, file, cb) {
        const nombre = req.body.nombre 
        cb(null, nombre + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export default upload;