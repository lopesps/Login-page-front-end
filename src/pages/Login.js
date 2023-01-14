/* import "./App.css";*/
import { useState } from "react";
import Requisitions from "../context/Requisitions.js";
import axios from "axios";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/api/login", {
      userName,
      password,
    });

    console.log(response);
  }

  return (
    <>
      <Requisitions />
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default App;
