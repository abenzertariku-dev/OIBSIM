import Navbar from "../omponents/Heads.jsx"
import { useEffect,useState } from "react";
import axios from "axios";
//import{ userdData} from "./login.jsx";
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
        <h1> {userdData.Names || 'Guest User'}</h1>
        <h1> {userdData.Emails || 'Guest Email'}</h1>
        </>
    )
}