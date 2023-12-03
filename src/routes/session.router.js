import passport from "passport";
import { Router } from "express";
import {usersManager} from "../managers/usersManagers.js";
import { generateToken, compareData, hashData } from "../utils.js";


const router = Router()

router.get("/:idUser", passport.authenticate("jwt"), authMiddleware("admin"), async (req, res) => { 
    const { idUser } = req.params;
    console.log("req.user", req.user);
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

router.post("/signup", passport.authenticate('signup', {
    successRedirect: "/home",
    failureRedirect: "error",
})
);

router.post("/login", passport.authenticate('login', {
    successRedirect: "/home",
    failureRedirect: "error",
})
);

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
passport.authenticate('google', { successRedirect: "/profile"})
); 


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

    const token = generateToken({email, first_name: userDB.first_name, role: userDB.role})
    console.log(token);
    res.redirect("/home");

    res
    .status(200)
    .cookie("token", token)
    .json({message:"bienvenido"})
});




router.get(
    '/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github', 
passport.authenticate('github', { failureRedirect: '/error', successRedirect: "/home" }),
);




router.post("/",async (req, res) => {
    const { firstname, lastname, email, contraseña } = req.body;
    if (!firstname || !lastname || !email || !contraseña) {
    return res.status(400).json({ message: "faltan datos" });
    }
    try {
    const createdCart = cartManagers.createOne({products: []});
    const newUser = await usersManager.createOne({...req.body, cart: createdCart._id});
    res.status(200).json({ message: "usuario creado" , user : newUser});
    } catch (error) {
    res.status(500).json({ message: error });
    }
});




router.get("/", async (req, res) => {
    const response = await usersManager.findAll()
    res.json({response});
});



router.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/")
    });
});


export default router