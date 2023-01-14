import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*     <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
