/* import "./App.css";*/
import { useState } from "react";
import Requisitions from "../context/Requisitions.js";
import axios from "axios";
import "../css/style.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [client_address, setClient_address] = useState("");
  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/api/clients", {
      name,
      email,
      phone,
      cpf,
      client_address,
    });

    navigate("/clients");
  };

  return (
    <>
      <Requisitions />
      <h1>Add Client</h1>
      <div className="formContainer">
        <form onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone"
            maxLength="15"
          />
          <br />
          <input
            value={client_address}
            onChange={(e) => setClient_address(e.target.value)}
            type="text"
            placeholder="Address"
          />
          <br />
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            placeholder="CPF"
            maxLength="11"
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

export default Register;
