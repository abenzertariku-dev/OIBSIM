import UsersData from"../Models/users.js";
import OrderData from"../Models/order.js";
import PissaData from"..//Models/Pissa.js";
import SouseDate from "../Models/souse.js";

// this function is for loging in
export async function GetUserData(req ,res) {
    try{
        const Adata= await UsersData.find();
         res.status(200).json(Adata);
    }catch(error){
    res.status(500).json({message:"can not find the data"})
}
}
// this function is for ordering a pissa

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

// a function that is used for geting all avalable pissas

export async function Allpissa(req,res){
    try{
       const AllpisasData= await PissaData.find();
       res.status(200).json(AllpisasData)
    }catch(error){
         res.status(500).json({message:"can not find the pissa data"})
    }
}

// a function for geting all the souses


export async function AllSouse(req,res){
    try{
       const AllSousesData= await SouseDate.find();
       res.status(200).json(AllSousesData)
    }catch(error){
         res.status(500).json({message:"can not find the souse data"})
    }
}

// a function for users sign up 

export async function SignUp(req,res) {
try{
     const {Email,Adress,Name,passWord}=req.body;
    const Sign=new UsersData({Email,Adress,Name,passWord});
    
    await Sign.save();

    res.status(201).json({message:"account created sucsssfuly"})
}catch(error){
     res.status(500).json({message:"can not save the souse data"})
}
}