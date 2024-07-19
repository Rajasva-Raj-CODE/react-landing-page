import React from "react";
import "./Navbar.css";
import Logo from "../../assests/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
        <h2>Matherus Campos</h2>
      </div>

      <ol className="navItems">
        <li>home</li>
        <li>sabre</li>
        <li>portfilo</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Carrer</li>
      </ol>
    </nav>
  );
};

export default Navbar;
