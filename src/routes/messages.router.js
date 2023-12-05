import { Router } from "express";
import { transpoter } from "../nodemailer.js";
const router = Router();


router.get("/", async(req,res)=>{
    const options= {
        from :"fechuucarba@gmail.com",
        to:"slkdjfdsjf@gmail.com",
        subjet:"primer mail",
        attachments:[],
    };
    await transpoter.sendMail(options)
    res.send("mail enviado");


})

export default router;