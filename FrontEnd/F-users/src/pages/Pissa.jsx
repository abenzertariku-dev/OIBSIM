import axios from "axios";
import { useState,useEffect } from "react";
import PizzaCard from "../omponents/pissacard.jsx";
import Navbar from "../omponents/Heads.jsx";

export default function Pissa(){
   
  const [pissa,Setpissa]=useState([])
     const [souse,Setsouse]=useState([])
    
    useEffect(()=>{
        const Fechdata= async ()=>{
        try{
            const PissaData= await axios.get("http://localhost:5000/api/user/pissa")
            Setpissa(PissaData.data)
        }catch (error) {
        console.log('Failed to load theme:', error);
      }
      const FechSouse= async ()=>{
        try{
            const SouseData= await axios.get("http://localhost:5000/api/user/souse")
            Setsouse(SouseData.data)
        }catch (error) {
        console.log('Failed to load theme:', error);
      }

    }; Fechdata();
      },[])
   
   return(
        <><Navbar/>

        <div className="flex ">

           {
            pissa.map((item, index)=>
          <div key={index} className="p-7 rounded-2xl shadow-amber-950">
        <PizzaCard item={item,souse} />
          </div>
            )
        }
        </div>
        </>
    )
}