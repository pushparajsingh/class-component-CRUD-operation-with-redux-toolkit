import React from "react";
import NavBar from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
