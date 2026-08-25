import mongoose from "mongoose";
const AdminDataSchema= new mongoose.Schema({
Name:{
    type:String,
    require:true
},
Password:{
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

const AdminData = mongoose.model("AdminsData",AdminDataSchema)

export default AdminData