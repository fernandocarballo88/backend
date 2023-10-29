import mongoose from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2";

const cartSchema = new mongoose.Schema({
    products: [
    {
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Products",
        },
        quantity: {
            type: Number,
        },
        },
    ],

});

cartSchema.plugin(mongoosepaginate);

export const cartsModel = mongoose.model("Carts", cartSchema)