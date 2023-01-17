import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { FiDelete, FiEdit, FiPlusSquare } from "react-icons/fi";
import axios from "axios";
import "../css/style.css";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const [clients, setClients] = useState([{}]);
  const navigate = useNavigate();

  const getClients = (e) => {
    axios
      .get("http://localhost:3000/api/clients")
      .then((response) => {
        setClients(response.data.client);
      })
      .catch((err) => console.log(err));
  };

  const delClient = (id) => {
    axios
      .delete("http://localhost:3000/api/clients/" + id)
      .then((response) => {
        getClients();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <Menu />
      <div className="formContainer">
        <form>
          <h1>Clients</h1>
          <div className="alignInputs">
            <input
              type="text"
              placeholder="Search for any client"
              name="httpCode"
            />
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
      <table className="tableClients">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Address</td>
          <td>CPF</td>
          <td style={{ border: "none" }} className="content">
            <FiPlusSquare
              className="crud"
              onClick={() => navigate("/register")}
            />
          </td>
        </tr>
        {clients.map((clients, index) => {
          return (
            <tr key={index}>
              <td>{clients?.name}</td>
              <td>{clients?.email}</td>
              <td>{clients.phone}</td>
              <td>{clients?.client_address}</td>
              <td>{clients?.cpf}</td>
              <td style={{ border: "none" }}>
                <div className="content">
                  <FiEdit
                    className="crud"
                    onClick={() => navigate("edit/" + clients?._id)}
                  />
                  <FiDelete
                    className="crud"
                    onClick={() => delClient(clients?._id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default Clients;
