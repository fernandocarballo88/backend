import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


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
    gender: {
        type: String,
    },

});
userSchema.plugin(mongoosePaginate)
export const userModel = model("Users", userSchema)

