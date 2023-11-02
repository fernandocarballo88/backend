import { Router } from "express";

const router = Router()

router.get("/signup",(req,res)=>{
    res.render("signup")
});

router.get("/createproduct",(req,res)=>{
    res.render("createProduct")
});


router.get('/login', (req, res)=>{
    res.render('login')
})

router.get('/home', (req,res)=>{
    console.log('req', req)
    res.render("home");
})

router.get("/error", (req, res)=>{
    res.render("error")
})

export default router;