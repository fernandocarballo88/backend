import { Router } from "express";
import { usersManager } from "../managers/usersManagers.js";
import { compareData, hashData } from "../utils.js";

const router = Router()

router.post("/login", async (req, res)=>{
    const {email, password} = req.body
    const userDB = await usersManager.findByEmail(email);

    const comparedPassword = await compareData(password, userDB.password);
    if(!comparedPassword){
        return res.json({ error: "contaseña equivocada" })
    }
    req.session["email"] = email;
    req.session["isAdmin"] = 
    email === "adminCoder@coder.com" && password === "Coder123" ? true : false;
    
    res.redirect("/home");
});

router.post("/signup", async (req, res)=>{
    const {password} = req.body
    const hashedPassword = await hashData(password)
    const createdUser = await usersManager.createOne({...req.body, password:hashedPassword});
    res.status(200).json({message: "usuario creado", createdUser})
});



router.post("/",async (req, res) => {
    const { firstname, lastname, email, contraseña } = req.body;
    if (!firstname || !lastname || !email || !contraseña) {
    return res.status(400).json({ message: "faltan datos" });
    }
    try {
    const newUser = await usersManager.createOne(req.body);
    res.status(200).json({ message: "usuario creado" , user : newUser});
    } catch (error) {
    res.status(500).json({ message: error });
    }
});

router.get("/", async (req, res) => {
    const response = await usersManager.findAll()
    res.json({response});
});

router.get("/:idUser", async (req, res) => { 
    const { idUser } = req.params;
    try {
    const user = await usersManager.findById(id);
    if (!user) {
        res.status(400).json({ message: "Usuario no encontrado con ese ID" });
    } else {
        res.status(200).json({ message: "Usuario encontrado", user });
    }
    } catch (error) {
    res.status(500).json({ message: error });
    }
});

router.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/")
    });
});

export default router;