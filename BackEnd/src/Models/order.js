import mongoose from "mongoose";
const OrderDataSchema = new mongoose.Schema({
    Pissa:{
        type:String,
        require:true
    },
    Amount:{
        type:String,
        require:true
    },
    User:{
         type:String,
        require:true
    },
    Adress:{
         type:String,
        require:true
    }
},
{timestamps:true})

const OrderData= mongoose.model("OrderData",OrderDataSchema)

export default OrderData