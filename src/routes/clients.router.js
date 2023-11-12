import { Router } from "express";
import { clientsManager } from "../managers/clientsManagers.js";

const router = Router();

router.get("/:username([a-zA-Z]+)", async (req,res)=>{
    const  { username } = req.params
    try {
        const client = await clientsManager.getByUsername(username);
        if(!client){
            return res.status(400).json({message: "cliente no encontrado"});
        }
        res.status(200).json({message: "cliente encontrado", client});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.delete(("/:username([a-zA-Z]+)"), async (req,res)=>{
    res.send("deleted")
})

router.post("/", async(req,res)=>{
    const clientCreated = await clientsManager.createOne(req.body);
    res.json({client: clientCreated })
})

router.param("username", (req,res,next,username)=>{
    
})
export default router;