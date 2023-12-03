import { Router } from "express";
import { usersManager } from "../managers/usersManagers.js";
import { compareData, hashData } from "../utils.js";
import passport from "passport";
import { generateToken } from "../utils.js";
import { jwtValidation } from "../middleware/jwt.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { cartManagers } from "../managers/cartManagers.js";

const router = Router()

router.post("/", async (req, res) => {
    const { password } = req.body;
    try {
    const hashedPassword = await hashData(password);
    const createdUser = await usersManager.createOne({
        ...req.body,
        password: hashedPassword,
    });
    res.status(200).json({ message: "User created", user: createdUser });
    } catch (error) {
    res.status(500).json({ error });
    }
});

export default router;