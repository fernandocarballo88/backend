import { Router } from "express";
import { productsManager } from "../managers/productsManagers.js";
import { Product } from "../db/models/products.models.js";

const router = Router()

router.post("/",async (req, res) => {
    const { name, price, stock, description} = req.body;
    if (!name || !price) {
    return res.status(400).json({ message: "faltan datos" });
    }
    try {
    const newProduct = await productsManager.createOne(req.body);
    res.status(200).json({ message: "producto creado" , user : newProduct});
    } catch (error) {
    res.status(500).json({ message: error });
    }
});

router.get("/", async (req, res) =>{
    const products = await productsManager.findAllProducts(req.query)
    res.json({products})
})

router.post("/", async (req,res)=>{
    const createdProduct = await Product.create(req.body);
    res.json({message: "producto creado", product: createdProduct})
});

export default router;