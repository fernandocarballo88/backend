import { userModel } from "../db/models/users.models.js";
import BasicManager from "./basicManager.js";

class UsersManager extends BasicManager{
    constructor(){
        super(userModel, "cart");
    }

    async findByEmail(email){
        return userModel
        .findOne({ email})
        .populate({ path: "cart", populate:{ path: "products.product"}});
    }
}

/*
class UsersManager {
    async findAll(){
        return userModel.paginate({}, {})
    }

    async findById(id){
        return userModel.findById(id)
    }

    async createOne(obj){
        return userModel.create(obj)

    }

    async findByEmail(email){
        const response = await userModel.findOne({ email})
        return response;
    }

    async updateOne(id,obj){
        return userModel.updateOne({_id:id}, { obj });
    }

    async deleteOne(id){
        return userModel.findByIdAndDelete(id)
    }   
}
*/

export const usersManager = new UsersManager();