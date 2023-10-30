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

router.get('/home', (req,res)=>{
    console.log('req', req)
    res.render("home");
})

export default router;