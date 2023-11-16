import mongoose, {Schema,model} from "mongoose";
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
    cart:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Carts",
    },
    from_github:{
        type: Boolean,
        default: false,
    },
    roles:{
        type: String,
        enum: ["admin", "premium", "client"],
        default: "client",
    },
});


userSchema.plugin(mongoosePaginate)
export const userModel = model("Users", userSchema)

