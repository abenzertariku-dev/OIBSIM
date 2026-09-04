import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Logins, setLogins] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/", {
        Email: email,
        Password: password
      });
      console.log("Login successful:", response.data);
      navigate("/home"); // Redirect to dashboard after successful login

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>  <div className="bg-red-500 text-center">
                 
                  
                  <h1 className="text-3xl font-extrabold italic tracking-wide text-white pt-2 drop-shadow-sm mb-4">
                    My Pizza
                  </h1>
 
     {Logins && (
      <div className="text-center items-center justify-center min-h-screen pt-21 bg-gray-100">
      <h1 className="text-4xl font-bold m-14">Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="border border-gray-300 rounded-md py-2 px-4 mb-7 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <br/>  <input type="password" placeholder="Password" className="border border-gray-300 mb-9 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <br/>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
        <button onClick={() => setLogins(false)} className="text-blue-500 hover:text-blue-700">
          Don't have an account? Sign Up
        </button>
      </form>
    </div>)}
    {!Logins && (
      <div className="text-center items-center justify-center min-h-screen pt-21 bg-gray-100">
      <h1 className="text-4xl font-bold m-14">Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" className="border border-gray-300 rounded-md py-2 px-4 mb-7 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <br/>  <input type="email" placeholder="Email" className="border border-gray-300 rounded-md py-2 px-4 mb-7 focus:outline-none focus:ring-2 focus:ring-blue-500" />
       <br/> <input type="password" placeholder="Password" className="border border-gray-300 rounded-md py-2 px-4 mb-9 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <br/>  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Sign Up
        </button>
        <button onClick={() => setLogins(true)} className="text-blue-500 hover:text-blue-700">
          Already have an account? Login
        </button>
      </form>
    </div>)}
   </div>
    </>


  );
}