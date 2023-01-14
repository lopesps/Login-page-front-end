import axios from "axios";
import { useEffect, useState } from "react";

const Requisitions = () => {
  const [setUsersDB, usersDB] = useState();
  const getUsers = () => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setUsersDB(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getUsers();
  }, [usersDB]);
};

export default Requisitions;
