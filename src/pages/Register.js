/* import "./App.css";*/
import { useState } from "react";
import Requisitions from "../context/Requisitions.js";
import axios from "axios";

function App() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/api/register", {
      userName,
      email,
      password,
      checkPassword,
    });

    console.log(response);
  }

  return (
    <>
      <Requisitions />
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            type="password"
            placeholder="Confirm your Password"
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

export default App;
