/* import "./App.css";*/
import { useEffect, useState } from "react";
import Requisitions from "../context/Requisitions.js";
import axios from "axios";
import "../css/style.css";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const clientId = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [client_address, setClient_address] = useState("");
  const [clients, setClients] = useState("");
  const navigate = useNavigate();

  const getClients = (e) => {
    axios
      .get("http://localhost:3000/api/clients/" + clientId.userId)
      .then((response) => {
        setClients(response.data.client);
        setName(response.data?.client?.name);
        setEmail(response.data?.client?.email);
        setPhone(response.data?.client?.phone);
        setCpf(response.data?.client?.cpf);
        setClient_address(response.data?.client?.client_address);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClients();
  }, []);

  const editUser = async (event) => {
    event.preventDefault();
    await axios.put("http://localhost:3000/api/clients/" + clientId.userId, {
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
      <h1>Edit Client</h1>
      <div className="formContainer">
        <form onSubmit={editUser}>
          <input
            defaultValue={clients.name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            defaultValue={clients.email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            defaultValue={clients.phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone"
            maxLength="15"
          />
          <br />
          <input
            defaultValue={clients.client_address}
            onChange={(e) => setClient_address(e.target.value)}
            type="text"
            placeholder="Address"
          />
          <br />
          <input
            defaultValue={clients.cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            placeholder="CPF"
            maxLength="11"
          />
          <input
            type="submit"
            value="Register"
            /* onClick={() => navigate("/clients")} */
          />
        </form>
      </div>
    </>
  );
}

export default Edit;
