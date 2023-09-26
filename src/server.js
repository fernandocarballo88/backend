// npm init -y para ver package.jason

import express from "express"
import productsRouter from "./router/products.router.js"
import cartRouter from "./router/cart.router.js"
import {__dirname} from "./utils.js"
const app = express()
// no es necesario que se app, puede ser cualquier nombre  
// generalmente se nombra la constante app



app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(__dirname+"/public"))

app.use("/api/products", productsRouter);
app.use("api/cart", cartRouter);

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

app.listen(8080,()=>{
    console.log("escuchando app");
});