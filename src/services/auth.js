import { raw } from 'express'
import db from '../models'
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'


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

        // console.log(response[1]);
        // console.log(response[0].updatedAt);
        const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email},'23H@uKhu)ng',{expiresIn:'2d'}): null

        resolve({
            err: response[1]?0:1,
            mess: response[1]?'register success':'register fail',
            token
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