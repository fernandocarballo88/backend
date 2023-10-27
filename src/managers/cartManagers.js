import { cartsModel } from "../db/models/carts.model";

class CartManager {

  async addProductToCart(cartId) {
    return cartsModel.findById(cartId)
  }


  async deleteProductCart(cartId) {
    return cartsModel.deleteOne(cartId)
  }

  async deleteCart() {
    return cartsModel.deleteMany
  }
}

export default new CartManager();
