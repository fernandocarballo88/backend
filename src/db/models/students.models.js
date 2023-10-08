import mongoose from "mongoose";
import { model} from "mongoose";


const studentsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    curso: {
        type: String,
        required:true,
    },
    nota: {
        type: Number,
        required:true,
    },
});

export const studentsModel = model(`Students`, studentsSchema)
