import { cartsModel } from "../db/models/carts.model.js";
import BasicManager from "./basicManager.js";

class CartManager extends BasicManager{
    constructor(){
        super(cartsModel, "products.product");
    }
}

export const cartManagers = new CartManager();
