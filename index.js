import express from 'express'

import routerView from "./routes/views/router.js"
import express_session from "express-session" // sirve para guardar la sesión del usuario
import passport from  "./config/passport.js" // sirve para autenticar al usuario

const app = express()

app.use(express.static("public"));
app.use(express_session({
    secret: "zacatrus", //palabra secreta para cifrar la sesion
    resave: false, 
    saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "pug");

app.use("/", routerView); 
app.listen(3000, () => {
    console.log("server is running on port 3000");
});