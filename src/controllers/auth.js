import * as services from "../services";

export const regiter =  (req,res)=>{
    try {
        const response = services.register()
        return res.status(200).json(response)
        
    } catch (error) {
        return res.status(500).json({
            "error" : -1,
            "mess" :'Internal Server Error'
        })
    }
}