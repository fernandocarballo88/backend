import mongoose, { mongo } from "mongoose";

const URI = "mongodb+srv://fernandocarballo:sjLp0F6pI0c5fAyJ@cluster0.q3b4odx.mongodb.net/moongoseAvanzado?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=> console.log("conectado a la base"))
.catch((error) => console.log(error))