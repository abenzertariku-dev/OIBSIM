import mongoose from "mongoose";

const SouseDataSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Price:{
         type:Number,
         require:true
    },Image:{
        type:String,
        require:true
    }
    
},
{timestamps:true}
)
const SouseDate = mongoose.model("SouseData",SouseDataSchema)

export default SouseDate
