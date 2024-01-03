import * as services from "../services";
import { internalServerError } from "../middlewares/handle_error";

export const regiter = async (req,res)=>{
    try {
        const {email,password} = req.body;
        console.log({email,password});
        if(!email || !password) return res.status(200).json({
            err: -1,
            mess: "missing email or pass"
        })


        const response = await services.register(req.body)
        //console.log(response);
        return res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        return internalServerError(res)
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        console.log({email,password});
        if(!email || !password) return res.status(200).json({
            err: -1,
            mess: "missing email or pass"
        })


        const response = await services.login(req.body)
        //console.log(response);
        return res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        return internalServerError(res)
    }
}