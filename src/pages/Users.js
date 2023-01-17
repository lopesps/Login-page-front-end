import React from "react";
import useRequestData from "../hooks/useRequestData";
import PaginationApp from "../components/Pagination";
import Menu from "../components/Menu";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Users = () => {
  const [cards, setCards] = React.useState("20");
  const handleChange = (event) => {
    setCards(event.target.value);
  };

  const [users, error, isLoading] = useRequestData(
    "https://randomuser.me/api/?results=" + cards
  );

  return (
    <div>
      <div className="pagesMenu">
        <Menu />
      </div>
      <Box
        sx={{
          width: "100px",
          height: "55px",
          background: "white",
          display: "flex",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Users</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cards}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={60}>60</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="userList">
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading &&
          users &&
          users.map((users, index) => {
            return (
              <div className="card" key={index}>
                <div className="card2">
                  <div className="cardHeader">
                    <img className="userImg" src={users?.picture?.medium} />
                    <h1>
                      {users.name?.first}&nbsp;{users.name?.last}
                    </h1>
                  </div>
                  <div className="textContainer">
                    <h3>Age:</h3>
                    <p>&nbsp;{users?.dob?.age}</p>
                    <br />
                    <h3>Email:</h3>
                    <p>&nbsp;{users.email}</p>
                    <br />
                    <h3>Username:</h3>
                    <p>&nbsp;{users?.login?.username}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <PaginationApp />
      </div>
    </div>
  );
};
export default Users;
