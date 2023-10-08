import { studentsModel } from "./db/models/students.models";

class StudentsManager {

    async findAll(){
        const response = await studentsModel.find()
        return response
    }

    async findById(id){
        const response = await studentsModel.findById(id)
        return response
    }

    async createOne(obj){
        const response = await studentsModel.create(obj)
        return response
    }

    async updateOne(id,obj){
        const response = await studentsModel.updateOne({_id:id}, {$set: obj});
    }

    async deleteOne(id){
        const response = await studentsModel.findByIdAndDelete(id)
    }
}