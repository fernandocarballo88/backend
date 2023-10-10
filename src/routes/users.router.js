import { Router } from "express";
import { usersManager } from "../managers/usersManagers.js";

const router = Router()

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
    try {
    const users = await usersManager.findAll();
    if (!users.length) {
        res.status(200).json({ message: "No se encotraron usuarios" });
    } else {
        res.status(200).json({ message: "Usarios encontrados", users });
    }
    } catch (error) {
    res.status(500).json({ message: error });
    }
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

export default router;