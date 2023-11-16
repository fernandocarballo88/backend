import dotenv from "dotenv"
import { program } from "commander,js";

const mode = program.opts().mode;
dotenv.config({
})


const obj ={
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    github_client_id : process.env.GITHUB_CLIENT_ID,
    
};

export default obj;