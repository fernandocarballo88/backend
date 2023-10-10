import {Schema,model} from "mongoose";


const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    emal:{
        type: String,
        require: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },

});

export const userModel = model("Users", userSchema)

