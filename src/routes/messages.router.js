import { Router } from "express";
import { transpoter } from "../nodemailer.js";
import { client } from "../twilio.js";
import  config from "dotenv";
import config from "./config.js"

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

router.get("/twilio",async (req,res)=>{
    const options={
        body:"prueba",
        to:"3426159285",
        from: config.twilio_phone_number,
    };
    await client.messages.create(options);
    res.send("TWILIO")
});

export default router;