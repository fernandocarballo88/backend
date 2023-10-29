import { Router } from "express";

const router = Router()

router.get("/signup",(req,res)=>{
    res.render("signup")
});

router.get("/createproduct",(req,res)=>{
    res.render("createProduct")
});


router.get('/', (req, res)=>{
    res.render('login')
})

export default router;