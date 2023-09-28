import { Router } from "express";

const router = Router()

router.get("/websocket",(req,res)=>{
    res.render("websocket")
    
})

router.get("/",(req,res)=>{
    res.render("signup")
})

router.get("/chat",(req,res)=>{
    res.render("chat")
})


export default router