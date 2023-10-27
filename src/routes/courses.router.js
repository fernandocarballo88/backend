import { Router } from "express";
import {coursesManager} from "../managers/coursesManagers.js";

const router = Router()


router.get("/:idCourse", async (req, res) => { 
    const { idCourse } = req.params;
    try {
    const course = await coursesManager.findById(idCourse);
    if (!course) {
        res.status(400).json({ message: "Curso no encontrado con ese ID" });
    } else {
        res.status(200).json({ message: "curso encontrado", user });
    }
    } catch (error) {
    res.status(500).json({ message: error });
    }
});

router.post("/", async (req, res) =>{
    const course = coursesManager.createOne(req.body)
    res.json({ course });
});

export default router;