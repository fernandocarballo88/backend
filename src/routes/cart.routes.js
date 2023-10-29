import { Router } from "express";
import {cartManagers } from "../managers/cartManagers.js"

const router = Router()


router.post("/:cid/products/:pid", async (req, res) =>{
    const cart = cartManagers.addProductToCart(req.body)
    res.json({ cart });
});


router.delete("/:cid/products/:pid", async (req, res)=>{
    const cart = cartManagers.deleteProductCart(req.body)
    res.json({ cart });

})

router.delete("/:cid", deleteCart); 



export default router;
