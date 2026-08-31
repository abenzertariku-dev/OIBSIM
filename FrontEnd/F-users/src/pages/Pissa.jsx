import axios from "axios"
import { useState,useEffect } from "react"
export default function Pissa(){
   
  const [pissa,Setpissa]=useState([])
     
    
    useEffect(()=>{
        const Fechdata= async ()=>{
        try{
            const PissaData= await axios.get("http://localhost:5000/api/user/pissa")
            Setpissa(PissaData.data)
        }catch (error) {
        console.log('Failed to load theme:', error);
      }

    }; Fechdata();
      },[])
   
   return(
        <>
        <h1>this is the my pissa page </h1>

        <div className="flex ">

           {
            pissa.map((item, index)=><div key={item._id} className="p-7 rounded-2xl shadow-amber-950">
            
            <h2>{item.Name}</h2>
            <h3>{item.Price}ETB</h3>
            <p>{item.Discription}</p>
            <img src={item.Image} alt={item.Name} className="text-2xl w-9 h-12 rounded-2xl" />
            </div>
           
            )
        }
        </div>
        </>
    )
}