import { productsModel } from "../db/models/products.models.js";
import BasicManager from "./basicManager.js";

class ProductsManager extends BasicManager{
    constructor(){
        super(productsModel);
    }

    async findAllProducts(obj){
        const { limit=10, page=1, sort: sortPrice, ...queryFilter} = obj;
        const response = await productsModel.paginate(queryFilter, { 
            limit,
            page,
            sort: { price: sortPrice ==="asc" ? 1 : -1 },
            lean: true,
        });
        
        return response;
    }
}

/*
class ProductsManager {
    async findAll(){
        return productsModel.find()
    }

    async findById(id){
        return productsModel.findById(id)
    }

    async createOne(obj){
        return productsModel.create(obj)

    }

    async updateOne(id,obj){
        return productsModel.updateOne({_id:id}, { obj });
    }

    async deleteOne(id){
        return productsModel.findByIdAndDelete(id)
    } 

    */
    



export const productsManager = new ProductsManager();