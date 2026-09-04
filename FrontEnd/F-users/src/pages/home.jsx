import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import Pissa from "./Pissa"
import MyAccount from "./MAccount"
import MyOrder from "./MyOrder"
//import Navbar from "../omponents/Heads.jsx"
//import { IoMdPerson } from "react-icons/io";
//import { FaHome } from "react-icons/fa";
export default function Home(){
    
    return(
        
        <div>

        <Routes>
            <Route path="*" element={<Pissa/>} />
             <Route path="home/myaccount" element={<MyAccount/>} />
              <Route path="home/myorder" element={<MyOrder/>} />
        </Routes>
    
       
        </div>
    )
}