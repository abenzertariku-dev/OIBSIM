import AdminData from"../Models/admin.js";
import PissaData from"../Models/Pissa.js";

// this function is for loging in
 export async function Add (req , res) {
try{
    const Adata= await AdminData.find();
    res.status(200).json(Adata);
}catch(error){
    res.status(500).json({message:"can not find the data"})
}
}

// this function is for adding new account 

export async function AdminPost (req ,res) {
   try{
    const {Name,Email,Password}=req.body;
    const Newacount= new AdminData({Name , Email , Password});
    
    await Newacount.save();
    const Alldata=await AdminData.find();
    res.status(201).json(Alldata)

   } catch(error){
    res.status(500).json({message:"can not find the data"})
}
}

// this function is for adding new pissa

export async function Addpissa(req,res){
    try{
        const {Name,Price,Discription}=res.body;
        const AddNewPIss= new PissaData({Name,Price,Discription})
        await PissaData.save();
        const NewPissaData=PissaData.find(); 
        res.status(201).json(NewPissaData);
    }catch(error){
         res.status(500).json({message:"can not add the data"})
    }
}