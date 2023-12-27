import * as services from "../services";

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
        return res.status(500).json({
            "error" : -1,
            "mess" :'Internal Server Error'
        })
    }
}