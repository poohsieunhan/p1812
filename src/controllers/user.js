import * as services from "../services";
import { internalServerError,badRequest } from "../middlewares/handle_error";

export const getUser = async (req,res)=>{
    try {
        
        const {id} = req.user;
        
        //console.log(error);
        //if(error)return badRequest(error.details[0].message,res);
        const response = await services.getOne(id)
        //console.log(response);
        return res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        return internalServerError(res)
    }
}

