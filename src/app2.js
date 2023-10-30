import express from "express";
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars";
import "./db/configDB.js";
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import productsRouter from "./routes/products.router.js"
import coursesRouter from "./routes/courses.router.js"
import cartRouter from "./routes/cart.routes.js"
import loginRouter from "./routes/login.router.js"
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStore from "session-file-store";


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use(express.static(__dirname+"/public"))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

const fileStore = FileStore(session)
app.use(session({
    secret: "secret",
    cookie:{
        maxAge: 1000,
    },
    store: new fileStore({
        path: __dirname+ "/sessions",
    })
})
);



const secret = `123456`
app.use(cookieParser(secret))

app.get('/set-cookie', (req, res) =>{
    res.cookie('idioma', 'ingles').json({msj:'ok'});
})

app.get('/get-cookie', (req, res) =>{
    const { idioma } = req.cookies;
    idioma === ingles? res.send('hello') : res.send('hola')
})
app.use('/login', loginRouter)


app.use("/", viewsRouter)
app.use("/api/products", productsRouter)
app.use("/api/users", usersRouter)
app.use("/api/courses", coursesRouter)
app.use("/api/cart", cartRouter)




app.listen(8080, ()=>{
    console.log("conectado al puerto DB");
})


