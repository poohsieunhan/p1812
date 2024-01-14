import { raw } from 'express'
import db from '../models'
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'


//const hashPass = password => bcrypt.hashSync(password,bcrypt.genSaltSync(8))

export const getOne = (userid)=> new Promise( async (resolve,reject)=>{
    try {
        
        const response = await db.User.findOne({
            where: {id:userid},
        })

        //const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email},'23H@uKhu)ng',{expiresIn:'2d'}): null

        resolve({
            err: response ?0:1,
            mess: response ?'Get success':'User not found',
            userData: response
        })

        console.log("after get User");
    } catch (error) {
        reject(error)
    }
})

