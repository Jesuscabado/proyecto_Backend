import express from 'express'
import router from './routes/views/router.js'
import passport from './config/passport.js'
import session from 'express-session'
const app = express()

app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
/* app.get ('/', (req, res) => {
    res.send('Mesa y risa')
}) */
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')

app.use("/", router);
app.listen(3000, () => {
    console.log("server is running on port 3000");
});