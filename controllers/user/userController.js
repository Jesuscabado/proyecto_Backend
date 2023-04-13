import User from "../../models/user.js";
import bcrypt from "bcrypt";

const getAll = async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
//Crear usuario
const create = async (req,res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        let data={
            username: req.body.username,    
            password: hashedPassword,
            email: req.body.email,
            role: "user",
            }
        let user = await User.create(data);
        res.redirect("/login")
    } catch (error) {
        res.redirect("/register?error="+error.message);
    }
}

//Login
const login = async (req,res) => {
    const email = req.body.email;
    let user = await User.findOne({email:email});
    if(!user) {
        res.status(404).send("El usuario no existe");
        return;
    }
    let password= req.body.password;
    if (await bcrypt.compare(password,user.password)) {
        res.send("Usuario y contraseña correctos");
    }
    else {
        res.status(401).send("Contraseña incorrecta");
    }
}

const logout = (req,res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
        });
}

//Login Form
const loginForm = (req, res) => {
    res.render ("user/login");
}

//Resgister Form
const registerForm = (req, res) => {
    const error = req.query.error;
    res.render ("user/register", {error:error});
}

export default { 
    getAll,
    create,
    login,
    loginForm,
    registerForm,
    logout
}