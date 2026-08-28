import express from "express";
import dotenv from "dotenv";
import  {MongoDb} from "./Config/Mongo.js";
import AdminRequest from"./Routes/Adminrout.js";
import { UsersRout } from "./Routes/Userrout.js";
dotenv.config();
const app = express();
const Port=process.env.PORT || 3000;
MongoDb()

app.use(express.json());

app.use("/api/admin", AdminRequest)
app.use("/api/user",UsersRout)

app.listen(Port,() => {
    console.log('port is runing ');
})