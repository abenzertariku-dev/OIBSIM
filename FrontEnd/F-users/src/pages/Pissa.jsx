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
        <h1>this is the my pissa page {
            pissa.map((item, index)=>
            <h1 key={item._id}>{item.Name || item.name}</h1>
            )
        }</h1>
        </>
    )
}