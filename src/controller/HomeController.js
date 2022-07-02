import db from "../models/index"

import CRUDServices from "../services/CRUDServices"
let getHomePage = async(req,res) => {
    try {
        let data = await db.User.findAll();
       
        return res.render('HomePage.ejs', {
            data: JSON.stringify(data)
        })
    }
    catch(e)
    {
        console.log(e)
    }

}

let getAboutPage = (req,res) => {
    return res.render('test/About.ejs')
}

let getCRUD = (req,res) => {
    return res.render('crud.ejs')
}

let postCRUD = async(req,res) => {

    let message = await CRUDServices.createNewUser(req.body);
    console.log(message)
   return res.send("CRUD from server")
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
}