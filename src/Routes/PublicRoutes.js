import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
