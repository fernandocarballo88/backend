// npm init -y para ver package.jason

import express from "express"

const app = express()
// no es necesario que se appa, puede ser cualquier nombre
// generalmente se nombra la constante app

const productos = [
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
]

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
    console.log("escuchando apppus");
})