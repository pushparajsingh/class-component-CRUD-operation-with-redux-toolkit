import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "../Pages/User/Dashboard";
import AdminDashboard from "../Pages/Admin/Dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default PrivateRoutes;
