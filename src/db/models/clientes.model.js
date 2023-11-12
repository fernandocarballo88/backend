import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const clientsSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        require: true,
        unique: true,
    },

});


userSchema.plugin(mongoosePaginate)
export const clientesModel = model("Clients", clientsSchema)
