import mongoose from "mongoose";
import { Sequelize } from "sequelize";
import config from "./config.js"

const URI = "mongodb+srv://fernandocarballo:sjLp0F6pI0c5fAyJ@cluster0.q3b4odx.mongodb.net/desafioCoder?retryWrites=true&w=majority"


mongoose
.connect(URI)
.then(()=> console.log("conectado a la base DB"))
.catch((error) => console.log(error))

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
    host: config.db_host,
    dialect:config.db_dialect,
});

sequelize.sync()
.then(()=>{console.log("conectado a db")})
.catch((error)=> console.log(error));