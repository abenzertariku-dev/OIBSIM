import mongoose from "mongoose";
import dotenv from"dotenv"

export const MongoDb = async () =>{
   try{
   await  mongoose.connect(process.env.MONGO_DB)
     console.log("connected with mongodb")
   } catch (error){
console.error("error conecting with mongod");
process.exit(1);
   }
}
