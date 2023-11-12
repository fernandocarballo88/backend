import { Router } from "express";

export default class CustomRouter{
    constructor(){
    this.router = Router();
    }

    get(endpoint, ...functions){
        this.router.get(endpoint, resolveFunctions(functions));

    }
    post(endpoint, ...functions){
        this.router.post(endpoint, resolveFunctions(functions));

    }
    put(endpoint, ...functions){
        this.router.put(endpoint, resolveFunctions(functions));

    }
    delete(endpoint, ...functions){
        this.router.delete(endpoint, resolveFunctions(functions));

    }

    resolveFunctions(functions) {
        return functions.map((fn)=>{
            return async(...param)=>{
            try {
                await fn.apply(this, param);
            } catch (error) {
                return error;   
            }
            };
        })
    }
}