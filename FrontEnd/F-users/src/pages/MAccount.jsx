import Navbar from "../omponents/Heads.jsx"
import { useEffect,useState } from "react";
import axios from "axios";
export default function MyAccount(){
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const UserData=async() =>{
            const UserD= await axios.get("http://localhost:5000/api/user/")
            setUser(UserD.data);
        }
    })
    return(
        <>
        <Navbar/>
        <h1> {user?.Name || 'Guest User'}</h1>
        </>
    )
}