import { Router } from "express";
import { productManager } from "../ManagerProductos.js";

const router = Router()

router.get("/api/productos", async(req, res)=>{
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

router.get("/api/productos/:idProductos", async(req, res)=>{
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

router.post("/productos", async(req, res)=>{
    try {
        const newProduct = await productManager.createProduct(req.body)
        res.status(200).json({message: "producto creado",producto:newProduct})

    } catch (error) {
        res.status(500).json({message: error})

    }
})

router.delete("/productos/:idProductos", async(req, res)=>{
    const {idProducto} = req.params
    try {
        const response = await productManager.deleteProduct(+idProducto)
        if(response === -1){
            res.status(400).json({message: "no se encontro producto"})
        } else {
            res.status(200).json({message: "producto eliminado"})
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.put("/productos/:idProductos", async(req, res)=>{
    const {idProducto} = req.params
    try {
        const updateProduct = await productManager.updateProduct
        if(updateProduct === -1){
            res.status(400).json({message: "no se encontro producto"})
        } else {
            res.status(200).json({message: "producto actualizado"})
        }
    } catch (error) {
        res.status(500).json({message: error})

    }

})




router.get("/",(req,res)=>{
    res.send("Hola")
    //por req.params envio info dinamica, por ejemplo ID de un Usuario
})

router.get("/productos/idProducto",(req, res)=>{
    const {idProducto} = req.params
    // lo que viene de req.params es en string
    const producto = productos.find(p=>p.id === +idProducto)
    // le pongo el + pasa que lo convierna a numero, sino viene en string
    res.json({message:"producto es ", producto})
})

export default router