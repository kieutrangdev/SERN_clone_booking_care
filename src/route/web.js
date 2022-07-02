import express from "express";
import HomeController from "../controller/HomeController"
let router = express.Router();

let initWebRoutes = (app) => {
    
    router.get("/",HomeController.getHomePage);
    router.get("/kieutrang",HomeController.getAboutPage )
    router.get("/CRUD",HomeController.getCRUD )
    router.post("/post-crud",HomeController.postCRUD )
    //rest api
    //xoá: delete
    //update: put
    //lấy: get


    return app.use("/",router);
}

module.exports = initWebRoutes