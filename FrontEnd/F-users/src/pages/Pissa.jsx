import axios from "axios"
import { useState,useEffect } from "react"
export default function Pissa(){
   
  const [pissa,Setpissa]=useState([])
     
    
    useEffect(()=>{
        const Fechdata= async ()=>{
        try{
            const PissaData= await axios.get("http://localhost:5000/api/user/pissa")
            Setpissa=(PissaData.data)
        }catch (error) {
        console.error('Failed to load theme:', error);
      }

    }; Fechdata();
      },[])
   
   return(
        <>
        <h1>this is the my pissa page </h1> {
            pissa.map((item, index)=><div key={item._id}>
               <h2>{item.Name || item.name}</h2>
            <h2>{item.Discription}</h2>
            </div>
           
            )
        }
        </>
    )
}