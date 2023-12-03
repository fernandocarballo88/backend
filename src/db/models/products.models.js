import {Schema,model} from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2";
import { sequelize } from "../configDB.js";
import { DataTypes } from "sequelize";


export const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    
})


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
