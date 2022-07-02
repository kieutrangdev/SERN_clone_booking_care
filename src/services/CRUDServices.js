import bcrypt from 'bcryptjs';
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);
let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashUserPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashUserPasswordFromBcrypt,
                address:  data.address,
                gender:  data.gender === '1' ? true : false,
                
                keyRole: data.roleId,
                phoneNumber: data.phone,
            })

            resolve("ok create new user")
        }
        catch(e)
        {
            reject(e)
        }
    })
   
    
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {

           var hashPassword = await bcrypt.hashSync(password, salt); // true
           resolve(hashPassword)
        }
        catch(e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser
}