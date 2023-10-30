import { userModel } from "../db/models/users.modules.js";

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
        const response = await userModel.findOne(email)
        return response;
    }

    async updateOne(id,obj){
        return userModel.updateOne({_id:id}, { obj });
    }

    async deleteOne(id){
        return userModel.findByIdAndDelete(id)
    }   
}

export const usersManager = new UsersManager();