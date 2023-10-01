// npm init -y para ver package.jason

import express from "express"
import productsRouter from "./router/products.router.js"
import usersRouter from "./router/users.router.js"
import {__dirname} from "./utils.js"
import { engine } from "express-handlebars";
import handlebars from "express-handlebars"
import viewsRouter from "./router/views.router.js"
import { Server } from "socket.io"
import { productManager } from "./ManagerProductos.js"
const app = express()
// no es necesario que se app, puede ser cualquier nombre  
// generalmente se nombra la constante app



app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(__dirname+"/public"))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');


app.use("/api/products", productsRouter);
app.use("/api", viewsRouter)
app.use("/api/users", usersRouter);
/*
app.get("/pag1",(req,res)=>{
    res.send("Pagina 1")
    //res.json (se utiliza para mandar productos o información) ({message:"Agarrame esta"})
})

app.get("/prod",(req,res)=>{
    res.json({mesage:"estos son los Objtetos", productos})
    // ejemplo de como mostrar arrays
})

*/

const PORT = 8080;

const httpserver = app.listen(PORT,()=>{
    console.log(`escuchando al puerto ${PORT}`);
});

const socketServer = new Server(httpserver)

const names = []
socketServer.on("conection", (socket)=>{
    //console.log(`cliente conectado`);
    socket.on("disconnect", ()=>{
        //console.log(`cliente desconectado ${socket.id}`);
    });

    socket.on("primerevento", (info) =>{
        names.push(info);
        //console.log(`Array : ${names}`);
        //socket.emit("segundoevento", names)
        socketServer.emit("segundoevento", names)
    })
});


socketServer.on("connection", (socket)=>{
    console.log(`cliente conectado : ${socket.id}`);

socket.on(`crearproduct`, async (product)=>{
    const newProduct = await productManager.createProduct(product)
    socket.emit(`productCreated`, newProduct)
})
});