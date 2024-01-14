import { jwt } from "jsonwebtoken";
import { badRequest,notAuth } from "./handle_error";

const  verifyToken =(req,res,next) => {
    const token = req.headers.authorization

    if(!token)return badRequest('require authorization',res)
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken,'23H@uKhu0ng',(err,user)=>{
        if(err)return notAuth('Not Authority')
        req.user = user
        next()
    })
}

export default verifyToken