import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div style={{ position: "fixed", zIndex: "999" }} className="w-100">
      <div className="navbar w-100 p-3">
        <img src={logo} alt="logo" style={{ width: "45px" }} />
      </div>
    </div>
  );
};

export default Navbar;
