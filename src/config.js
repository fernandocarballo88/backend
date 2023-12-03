import dotenv from "dotenv"
import { program } from "commander.js";

const mode = program.opts().mode;
dotenv.config({
})


const obj ={
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    github_client_id : process.env.GITHUB_CLIENT_ID,
    google_client_id : process.env.GOOGLE_CLIENT_ID,
    google_callback_url : process.env.GOOGLLE_CALLBACK_URL,
    
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_dialect: process.env.DB_DIALECT,
};



export default obj;