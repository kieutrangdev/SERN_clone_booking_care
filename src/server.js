import express from "express";
//lấy tham số cliner gửi: param
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
require("dotenv").config();

let app = express();

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

connectDB();

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    //callback
    console.log("Backend nodejs is running on the port: " + port);
})
