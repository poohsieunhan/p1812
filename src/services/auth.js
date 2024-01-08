import { raw } from 'express'
import db from '../models'
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'


//const hashPass = password => bcrypt.hashSync(password,bcrypt.genSaltSync(8))

export const register = ({email,password})=> new Promise( async (resolve,reject)=>{
    try {
        const hashPass = await bcrypt.hashSync(password,10)

        const response = await db.User.findOrCreate({
            where: {email},
            defaults:{
                email,
                password: hashPass
            }
   
        })

        const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email},'23H@uKhu)ng',{expiresIn:'2d'}): null

        resolve({
            err: response[1]?0:1,
            mess: response[1]?'register success':'register fail',
            'access_token': token?`Bearer ${token}`:null
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

export const login = ({email,password})=> new Promise( async (resolve,reject)=>{
    try {
        //const hashPass = await bcrypt.hashSync(password,10)

        const response = await db.User.findOne({
            where: {email}, 
        })

        const isChecked = response && bcrypt.compareSync(password,response.password);
        //const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email},'23H@uKhu)ng',{expiresIn:'2d'}): null
        const token = isChecked && jwt.sign({id: response.id, email: response.email},'23H@uKhu)ng',{expiresIn:'2d'})

        resolve({
            err: token ? 0:1,
            mess: token ?'login success':'login fail',
            'access_token': token?`Bearer ${token}`:null
        })

        resolve({
            err:0,
            mes:'login service'
        })

        console.log("after login");
    } catch (error) {
        reject(error)
    }
})