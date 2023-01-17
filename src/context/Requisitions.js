import axios from "axios";
import { useEffect, useState } from "react";

const Requisitions = () => {
  const [setUsersDB] = useState({});

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setUsersDB(response?.data?.info);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getUsers();
  });
};

export default Requisitions;
