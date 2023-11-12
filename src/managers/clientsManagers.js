import { clientsModel } from "../db/models/clientes.model.js";

class ClientsManager {


    async getByUsername(username){
        const response = await clientsModel.findOne({username})
        return response
    }

    async createOne(obj){
        const response = await clientsModel.create({username})
        return response
    }
}

export const clientsManager = new ClientsManager();