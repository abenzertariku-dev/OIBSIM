import AdminData from"../Models/admin.js"

 export async function Add (req , res) {
try{
    const Adata= await AdminData.find();
    res.status(200).json(Adata);
}catch(error){
    res.status(500).json({message:"can not find the data"})
}
}


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
