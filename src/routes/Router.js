import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import Users from "../pages/Users.js";
import Cats from "../pages/Cats.js";
import Dogs from "../pages/Dogs.js";
import Clients from "../pages/Clients.js";
import Edit from "../pages/Edit.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*     <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/clients/edit/:userId" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
};
