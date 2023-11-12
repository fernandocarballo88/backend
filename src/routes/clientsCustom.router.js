import { CustomRouter } from "./CustomRouter.js" 
import { clientsManager } from "../managers/clientsManagers.js";

class ClientRouter  extends CustomRouter{
    init(){
        this.get("/:username([a-zA-Z]+)", async (req,res)=>{
            const  { username } = req.params
            try {
                const client = await clientsManager.getByUsername(username);
                if(!client){
                    return res.errorResponse("Cliente no encontrado ")
                }
                res.successResponse("Cliente econtrado", client)
            } catch (error) {
                res.serverError(error);
            }
        });
    }
}

export const clientCustomRouter = new ClientRouter();

