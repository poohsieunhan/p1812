import  jwt  from "jsonwebtoken";
import { badRequest,notAuth } from "./handle_error";

const  verifyToken =(req,res,next) => {
    const token = req.headers.authorization

    if(!token)return badRequest('require authorization',res)
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken,process.env.JWT_SECRET,(err,user)=>{
        //console.log(err);
        if(err)return notAuth('Not Authority',res)
        req.user = user
        //console.log(user);
        next()
    })
}

export default verifyToken