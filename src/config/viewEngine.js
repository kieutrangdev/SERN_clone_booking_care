//var global
//let trong file
import express from "express";


let configViewEngine = (app) => {
    //cline có thể truy cập vào file nào
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //ejs = blade
    app.set("views", "./src/views");

}

module.exports = configViewEngine