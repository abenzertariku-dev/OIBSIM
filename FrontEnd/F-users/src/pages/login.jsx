import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Logins, setLogins] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        Email: email,
        Password: password
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
    {Logins && (
      <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <button onClick={() => setLogins(false)}>Don't have an account? Sign Up</button>
      </form>
    </div>)}
    {!Logins && (
      <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <button onClick={() => setLogins(true)}>Already have an account? Login</button>
      </form>
    </div>)}
    </>

}
  );
}