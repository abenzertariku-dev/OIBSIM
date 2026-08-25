import mongoose from "mongoose";
const UsersDataSchema= new mongoose.Schema({
Name:{
    type:String,
    require:true
},
Adress:{
    type:String,
    require:true
},
PassWord:{
    type:String,
    require:true 
},
Email:{
    type:String,
    require:true 
}
},
{timestamps:true}
)

const UsersData = mongoose.model("UsersData",UsersDataSchema)

export default UsersData