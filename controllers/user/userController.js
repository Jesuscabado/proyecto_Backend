import User from "../../models/user.js";
import bcrypt from "bcrypt";

const getAll = async (req,res) => {
    try{
        const users = await User.find();
        res.render("user/list", { users: users });
  }  catch (error) {
        res.status(404).json({message: error.message});
    }
}

const getById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.render("user/show", { user: user });
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
//Función para actualizar los datos de Nombre, email, rol y contraseña de un usuario
const update = async (req,res) => {
    const {username, email, password, role} = req.body;
    let hashedPassword = ""; //Si no se modifica la contraseña, no se modifica el hash
    if (password != "") { //Si se modifica la contraseña, se modifica el hash
        hashedPassword = await bcrypt.hash(password,10);
    }
    try {
        let user = await User.findById(req.params.id);
        user.username = username !== "" ? username : user.username; //Si el campo nombre no está vacío, se actualiza el nombre, si está vacío, se deja el nombre anterior
        user.email = email !== "" ? email : user.email; 
        user.password = password !== "" ? hashedPassword : user.password;
        user.role = role !== "" ? role : user.role;

        let updatedUser = await user.save(); 
        res.redirect("/users");
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const deleteById = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect("/users");
    } catch (error) {
        res.status(404).json({message: error.message});
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

//Update Form
const updateForm = async (req,res) => {
    try{ 
        const user = await User.findById(req.params.id);
        res.render("user/edit", { user: user });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}



export default { 
    getAll,
    getById,
    create,
    update,
    updateForm,
    login,
    loginForm,
    registerForm,
    logout,
    deleteById
}