/* import "./App.css";*/
import { useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/login", { userName, password })
      .then((response) => {})
      .catch((err) => console.log(err));
    navigate("/users");
  };
  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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

export default Login;
