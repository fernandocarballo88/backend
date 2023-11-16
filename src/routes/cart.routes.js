import { Router } from "express";
import {cartManagers } from "../managers/cartManagers.js"
import { productsManager } from "../managers/productsManagers.js";

const router = Router()

router.get("/:idCart", async(req,res)=>{
    const idCart = req.params;
    try {
        const cart = await cartManagers.findById(idCart)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.post("/", async(req,res)=>{
    try {
        const newCart = { products: [] };
    const createdCart = await cartManagers.createOne(newCart);
    res.status(200).json({message: createdCart});
    } catch (error) {
    res.status(500).json({error: error.message});
    }
})

router.post("/:cid/products/:pid", async (req, res) =>{
    const {idCart, idProduct} = req.params
    try {
        const cart = await cartManagers.findById(idCart)
        if(!cart){
            return res.status().json({message: "no encontrado"})
        }
        const product = await productsManager.findById(idProduct)
        if(product){
            return res.status().json({message: "no encontrado"})
        }
        const productIndex = cart.product.findIndex((p)=>
            p.product.equals(idProduct)
        );
        if(productIndex === 1){
            cart.product.push({product: idProduct, quantity: 1});
        } else{
            cart.product[productIndex].quantity++
        }
        return  cart.save();
    } catch (error) {
        
    }
    res.json({ cart });
});


router.delete("/:cid/products/:pid", async (req, res)=>{
    const cart = cartManagers.deleteProductCart(req.body)
    res.json({ cart });
})



router.delete("/:cid", cartManagers.deleteCart); 



export default router;
