import UsersData from"../Models/users.js";
import OrderData from"../Models/order.js";


export async function GetUserData(req ,res) {
    try{
        const Adata= await UsersData.find();
         res.status(200).json(Adata);
    }catch(error){
    res.status(500).json({message:"can not find the data"})
}
}
export async function Orderpiza(req,res){
try{
const {Amount,Pissa,User,Adress}=req.body;
const NewOrder=new OrderData({Amount,Pissa,User,Adress});

await NewOrder.save();
res.status(201).send({message:"order placed "})
}catch(error){
    res.status(500).json({message:"can not find the data"})
}
}
