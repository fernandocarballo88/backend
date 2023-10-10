import express from "express";
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars";
import "./db/configDB.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use(express.static(__dirname+"/public"))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');






app.listen(8080, ()=>{
    console.log("conectado al puerto DB");
})


