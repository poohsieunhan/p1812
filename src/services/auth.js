import db from '../models'

export const register = ()=> new Promise((resolve,reject)=>{
    try {
        resolve({
            err:0,
            mes:'register service'
        })

        console.log("sfter resolfve");
    } catch (error) {
        reject(error)
    }
})