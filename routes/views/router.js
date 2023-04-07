import { Router }  from "express";
import authRouter from "./auth.js";

const router = Router();

router.use("/", authRouter);
router.use("/", (req, res) => {
    const auth = req.user;
    res.render("index", {auth}); //index?
});

export default router;