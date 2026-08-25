import express from "express";
import dotenv from "dotenv";
import  {MongoDb} from "./Config/Mongo.js";
import {AdminRequest} from"./Routes/Adminrout.js";
import { UsersRout } from "./Routes/Userrout.js";
dotenv.config();
const app = express();
const Port=process.env.PORT;
MongoDb()


app.get("/api/admin", AdminRequest)
app.get("/api/user",UsersRout)

app.listen(Port,() => {
    console.log('port is runing ');
})