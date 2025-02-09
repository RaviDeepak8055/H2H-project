import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Enable scrolling only on mobile
    if (window.innerWidth < 1025) {
      document.body.style.overflow = menuOpen ? "auto" : "hidden";
    } else {
      document.body.style.overflow = "hidden"; // Keep PC scrolling disabled
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling when unmounted
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/assets/logo.png" alt="HandToHand Logo" className="logo" />
        <span>HandToHand</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
