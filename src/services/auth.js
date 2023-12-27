import db from '../models'
import bcrypt from 'bcrypt'



//const hashPass = password => bcrypt.hashSync(password,bcrypt.genSaltSync(8))

export const register = ({email,password})=> new Promise( async (resolve,reject)=>{
    try {
        //console.log("2:"+  email,password)
        const hashPass = await bcrypt.hashSync(password,10)
        //console.log(hashPass);

        const response = await db.User.findOrCreate({
            where: {email},
            defaults:{
                email,
                password: hashPass
            }
        })

        console.log(response);

        resolve({
            err: response[1]?0:1,
            mess: response[1]?'register success':'register fail'
        })


        resolve({
            err:0,
            mes:'register service'
        })

        console.log("after resolve");
    } catch (error) {
        reject(error)
    }
})