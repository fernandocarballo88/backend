import express from "express";
import "./db/config.js";
import { studentsManager} from "./studentsManager.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",async(req, res)=>{
    const students = await studentsManager.findAll()
    res.json({message:"estudiantes", students})
})

app.get("/:idStudent",async(req, res)=>{
    const {idStudent} = req.params
    const student = await studentsManager.findById(idStudent)
    res.json({message:"estudiante", student})
})

app.post("/", async(req, res)=>{
    const createdStudent = await studentsManager.createOne(req.body)
    res.json({message:"estudiante creado", student: createdStudent})
})

app.delete("/:idStudent", async(req, res)=>{
    const deleteStudent = await studentsManager.deleteOne(idStudent)
    res.json({message:"estudiante eliminado", student: deleteStudent})
})


app.listen(8080, ()=>{
    console.log("conectado al puerto");
})




