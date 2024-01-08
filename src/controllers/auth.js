import * as services from "../services";
import { internalServerError,badRequest } from "../middlewares/handle_error";
import { email,password } from "../helper/joi_schema";
import joi from 'joi'

export const regiter = async (req,res)=>{
    try {
        
        const {error} = joi.object({email,password}).validate(req.body)
        
        //console.log(error);
        if(error)return badRequest(error.details[0].message,res);
        const response = await services.register(req.body)
        return res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        return internalServerError(res)
    }
}

export const login = async (req,res)=>{
    try {
        // const {email,password} = req.body;
        // console.log({email,password});
        // if(!email || !password) return res.status(200).json({
        //     err: -1,
        //     mess: "missing email or pass"
        // })
        // const response = await services.login(req.body)
        // //console.log(response);
        // return res.status(200).json(response)
        const {error} = joi.object({email,password}).validate(req.body)
        
        console.log(error);
        if(error)return badRequest(error.details[0].message,res);
        const response = await services.login(req.body)
        return res.status(200).json(response)
        
        
    } catch (error) {
        console.log(error);
        return internalServerError(res)
    }
}