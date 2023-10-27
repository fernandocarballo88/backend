import {Schema,model} from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2";


const productsSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
});

productsSchema.plugin(mongoosepaginate);

export const productsModel = model("Products", productsSchema)
