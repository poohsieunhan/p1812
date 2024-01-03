const user = require("./user");
import { internalServerError, notFound } from "../middlewares/handle_error";
import auth from "./auth";

const initRoutes = (app)=>{
    
    app.use("/api/v1/user",user)
    app.use("/api/v1/auth",auth)
    
    // return app.use("/",(req,res) =>{
    //     return res.send("SERVER ROUTES ON")
    // })

    app.use(notFound)
}


module.exports = initRoutes;