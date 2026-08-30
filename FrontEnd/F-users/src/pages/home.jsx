import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import Pissa from "./pissa"
import MyAccount from "./MAccount"
import MyOrder from "./MyOrder"
import Headss from "../omponents/Heads"
import { IoMdPerson } from "react-icons/io";
import { FaHome } from "react-icons/fa";
export default function Home(){
    
    return(

        <div>
            <nav className="flex bg-red-500 pb-9 pt-4 ">
                <Headss/>
          <Link to="/" className="ml-5 mr-71 text-5xl flex text-white  bg-gradient-to-r from-red-700 via-red-500 to-red-300 rounded-2xl p-2">
          <h1 className="text-2xl italic">My pissa  </h1>  <FaHome /></Link>
<Link to="/myorder" className="ml-5 mr-71">My Orders</Link>
<Link to="/myaccount" className="ml-5 mr-71 text-5xl text-white"><IoMdPerson /></Link>
            </nav>




        <Routes>
            <Route path="/" element={<Pissa/>} />
             <Route path="/myaccount" element={<MyAccount/>} />
              <Route path="/myorder" element={<MyOrder/>} />
        </Routes>
    
       
        </div>
    )
}