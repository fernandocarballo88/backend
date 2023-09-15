// npm init -y para ver package.jason

import express from "express"
import { productManager } from "./ManagerProductos.js"

const app = express()
// no es necesario que se app, puede ser cualquier nombre
// generalmente se nombra la constante app

app.use(express.json())
app.use(express.urlencoded({extended:true}))

/*const productos = [
    {
        id:1,
        nombre:"heladera"
    },
    {
        id:2,
        nombre:"televisor"
    },
    {
        id:3,
        nombre:"cocina"
    }
]*/


app.get("/productos", async(req, res)=>{
    try {
        const products = await productManager.getProduct()
        if (!products.lenght) {
            res.status(200).json({message: "no hay productos"})
        } else {
            res.status(200).json({message: "productos encontrados", products})

        }
    } catch (error) {
        res.status(500).json({message: error})
    }
})

app.get("/productos/:idProductos", async(req, res)=>{
    const {idProducto} = req.params
    try {
        const product = await productManager.getProductById(+idProducto)
        if (!product) {
            res.status(400).json({message: "no se encontro producto"})
        } else {
            res.status(200).json({message: "productos encontrados", product})
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
})

app.post("/productos", async(req, res)=>{
    try {
        const newProduct = await productManager.createProduct(req.body)
        res.status(200).json({message: "producto creado",producto:newProduct})

    } catch (error) {
        res.status(500).json({message: error})

    }
})



app.get("/",(req,res)=>{
    res.send("Hola Puto")
    //por req.params envio info dinamica, por ejemplo ID de un Usuario
})

app.get("/productos/idProducto",(req, res)=>{
    const {idProducto} = req.params
    // lo que viene de req.params es en string
    const producto = productos.find(p=>p.id === +idProducto)
    // le pongo el + pasa que lo convierna a numero, sino viene en string
    res.json({message:"producto es ", producto})
})

app.get("/pag1",(req,res)=>{
    res.send("Agarrame esta")
    //res.json (se utiliza para mandar productos o información) ({message:"Agarrame esta"})
})

app.get("/prod",(req,res)=>{
    res.json({mesage:"estos son los Objtetos", productos})
    // ejemplo de como mostrar arrays
})


app.listen(8080,()=>{
    console.log("escuchando app");
})