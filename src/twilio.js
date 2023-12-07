import twilio from "twilio";
import config from "./config.js"


export const client = twilio(
    config.twilio.acount.sid,
    config.twilio_account_auth_token);

    
