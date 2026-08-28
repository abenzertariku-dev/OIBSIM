import mongoose from "mongoose";

const PissaDataSchema = new mongoose.Schema({
    Name:{
        type:String ,
        require:true
    },
    Price:{
        type:Number,
        require:true
    },
    Discription:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true

    }

},
{timestamps:true})
const PissaData =mongoose.model("PissaData",PissaDataSchema)

export default PissaData