import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/assets/logo.png" alt="HandToHand Logo" className="logo" />
        <span>HandToHand</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;