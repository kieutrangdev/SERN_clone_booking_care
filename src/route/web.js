import express from "express";
import HomeController from "../controller/HomeController"
let router = express.Router();

let initWebRoutes = (app) => {
    
    router.get("/",HomeController.getHomePage);
    router.get("/kieutrang",HomeController.getAboutPage )
    //rest api
    //xoá: delete
    //update: put
    //lấy: get


    return app.use("/",router);
}

module.exports = initWebRoutes