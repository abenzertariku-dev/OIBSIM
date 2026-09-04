import Navbar from "../omponents/Heads.jsx";
import { useEffect,useState } from "react";
import axios from "axios";
import OrderCard from "../omponents/OrderCard.jsx";
export default function MyOrder(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
    const FechOrder=async()=>{
        try{
            const MyOrders= await axios.get("http://localhost:5000/api/user/myorders")
            setOrders(MyOrders.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }
    FechOrder();
}, []);

    return(
        <>
        <Navbar/>
      {orders.map((item,index)=>
      <div key={index} className="flex-4 row-end-3 p-7 rounded-2xl shadow-amber-950">
       <OrderCard item={item}/>
      </div>
      )
      }
        </>
    )
}