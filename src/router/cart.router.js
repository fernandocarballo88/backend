import { Router } from "express";
import { productManager } from "../ManagerProductos.js";
import { __dirname } from "../utils.js";


const router = Router()

const app = express();
app.use(express.json());

const carts = [];

function generarID() {
    id = 0
}


app.post("/api/carts", (req, res) => {
    try {
        const cartID = generarID()+1;

        const newCart = {
            id: cartID,
            products: [],
        };
        carts.push(newCart);

        res.status(201).json({ message: "Exito", cart: newCart });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

app.get("/api/carts/:cid", (req, res) => {
    try {
        const { cid } = req.params;

        const cart = carts.find((cart) => cart.id === cid);

        if (!cart) {
            return res.status(404).json({ message: "No encontrado" });
        }

        res.status(200).json({ message: "Productos del carrito", products: cart.products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



export default router
