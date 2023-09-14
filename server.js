import express from "express"

const app = express()
// no es necesario que se appa, puede ser cualquier nombre
// generalmente se nombra la constante app

app.get("/",(req,res)=>{
    res.send("Hola Puto")
})

app.get("/otrapag",(req,res)=>{
    res.send("Agarrame esta")
})

app.listen(8080,()=>{
    console.log("escuchando appp");
})