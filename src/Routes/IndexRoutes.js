import React from "react";
import PublicRoutes from "./PublicRoutes";
import Layout from "../Components/Layout";
import PrivateRoutes from "./PrivateRoutes";

const IndexRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Layout>{!token ? <PrivateRoutes /> : <PublicRoutes />}</Layout>
    </>
  );
};

export default IndexRoutes;
