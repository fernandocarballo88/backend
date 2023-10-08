import mongoose, { mongo } from "mongoose";

const URI = "mongodb+srv://fernandocarballo:sjLp0F6pI0c5fAyJ@cluster0.q3b4odx.mongodb.net/databasecoder?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=> console.log("conectado"))
.catch((error) => console.log(error))